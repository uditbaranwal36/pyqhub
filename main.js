/* ==========================================================================
   PYQ HUB — main.js
   Handles nav toggle + page-specific logic. Runs on every page;
   each block checks whether its elements exist before doing anything.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  setupHomePage();
  setupBrowsePage();
  setupSearchPage();
  setupAdminLoginPage();
  setupAdminDashboardPage();
});

/* -------------------------------------------------------------------- */
/* Shared: mobile nav toggle                                            */
/* -------------------------------------------------------------------- */
function setupNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => links.classList.toggle("open"));

  const logout = document.getElementById("logoutLink");
  if (logout) {
    logout.addEventListener("click", (e) => {
      e.preventDefault();
      sessionStorage.removeItem("pyqhub_admin");
      window.location.href = "admin-login.html";
    });
  }
}

/* -------------------------------------------------------------------- */
/* Shared: build a paper card's HTML                                    */
/* -------------------------------------------------------------------- */
function paperCardHTML(p) {
  return `
    <div class="paper-card">
      <div class="paper-card-top">
        <div class="paper-card-code">${p.code} &middot; ${p.course}</div>
        <h3 class="paper-card-title">${p.subject}</h3>
        <div class="paper-card-meta">
          <span>&#128197; ${p.year}</span>
          <span>&#128221; ${p.examType}</span>
          <span>&#128196; ${p.pages} pages</span>
        </div>
      </div>
      <div class="paper-card-bottom">
        <span class="paper-tag">${p.downloads} downloads</span>
        <button class="btn btn-download btn-sm" data-paper-id="${p.id}">Download</button>
      </div>
    </div>
  `;
}

function attachDownloadHandlers(container) {
  container.querySelectorAll("[data-paper-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.getAttribute("data-paper-id"));
      const paper = PYQ_DATA.find(p => p.id === id);
      if (!paper) return;
      simulateDownload(paper);
      const tag = btn.closest(".paper-card").querySelector(".paper-tag");
      if (tag) tag.textContent = `${paper.downloads} downloads`;
      const original = btn.textContent;
      btn.textContent = "Downloaded ✓";
      setTimeout(() => { btn.textContent = original; }, 1500);
    });
  });
}

function emptyStateHTML(message) {
  return `
    <div class="empty-state" style="grid-column: 1 / -1;">
      <h3>No papers found</h3>
      <p>${message}</p>
      <a href="browse.html" class="btn btn-ghost-dark btn-sm">Browse all papers</a>
    </div>
  `;
}

function populateSelect(select, items, placeholder) {
  select.innerHTML = `<option value="">${placeholder}</option>` +
    items.map(item => `<option value="${item}">${item}</option>`).join("");
}

/* -------------------------------------------------------------------- */
/* Home page                                                            */
/* -------------------------------------------------------------------- */
function setupHomePage() {
  const grid = document.getElementById("popularGrid");
  if (!grid) return;

  const popular = [...PYQ_DATA].sort((a, b) => b.downloads - a.downloads).slice(0, 6);
  grid.innerHTML = popular.map(paperCardHTML).join("");
  attachDownloadHandlers(grid);

  document.getElementById("statSubjects").textContent =
    new Set(PYQ_DATA.map(p => p.subject)).size;
  document.getElementById("statPapers").textContent = PYQ_DATA.length;

  const courseSelect = document.getElementById("qCourse");
  const semSelect = document.getElementById("qSemester");
  const subSelect = document.getElementById("qSubject");

  populateSelect(courseSelect, COURSES, "Select course");
  populateSelect(semSelect, SEMESTERS, "Select semester");
  populateSelect(subSelect, [], "Select course & semester first");
  subSelect.disabled = true;

  function refreshSubjects() {
    const subs = getSubjectsFor(courseSelect.value, semSelect.value);
    if (courseSelect.value && semSelect.value) {
      populateSelect(subSelect, subs, subs.length ? "Select subject" : "No subjects found");
      subSelect.disabled = subs.length === 0;
    } else {
      populateSelect(subSelect, [], "Select course & semester first");
      subSelect.disabled = true;
    }
  }

  courseSelect.addEventListener("change", refreshSubjects);
  semSelect.addEventListener("change", refreshSubjects);

  document.getElementById("quickBrowseForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const params = new URLSearchParams({
      course: courseSelect.value,
      semester: semSelect.value,
      subject: subSelect.value
    });
    window.location.href = `browse.html?${params.toString()}`;
  });

  const heroForm = document.getElementById("heroSearchForm");
  heroForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = document.getElementById("heroSearchInput").value.trim();
    window.location.href = `search-results.html?q=${encodeURIComponent(q)}`;
  });
}

/* -------------------------------------------------------------------- */
/* Browse page                                                          */
/* -------------------------------------------------------------------- */
function setupBrowsePage() {
  const grid = document.getElementById("papersGrid");
  if (!grid) return;

  const courseSelect = document.getElementById("bCourse");
  const semSelect = document.getElementById("bSemester");
  const subSelect = document.getElementById("bSubject");
  const countEl = document.getElementById("resultsCount");

  populateSelect(courseSelect, COURSES, "All courses");
  populateSelect(semSelect, SEMESTERS, "All semesters");

  function refreshSubjectOptions() {
    const subs = getSubjectsFor(courseSelect.value, semSelect.value);
    populateSelect(subSelect, subs, "All subjects");
  }
  refreshSubjectOptions();
  courseSelect.addEventListener("change", refreshSubjectOptions);
  semSelect.addEventListener("change", refreshSubjectOptions);

  function render() {
    const results = searchPapers({
      course: courseSelect.value,
      semester: semSelect.value,
      subject: subSelect.value
    });
    countEl.textContent = `${results.length} paper${results.length === 1 ? "" : "s"} found`;
    grid.innerHTML = results.length
      ? results.map(paperCardHTML).join("")
      : emptyStateHTML("Try a different course, semester, or subject combination.");
    attachDownloadHandlers(grid);
  }

  // Pre-fill from query params (coming from homepage quick browse)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("course")) courseSelect.value = urlParams.get("course");
  if (urlParams.get("semester")) semSelect.value = urlParams.get("semester");
  refreshSubjectOptions();
  if (urlParams.get("subject")) subSelect.value = urlParams.get("subject");

  document.getElementById("browseForm").addEventListener("submit", (e) => {
    e.preventDefault();
    render();
  });

  render();
}

/* -------------------------------------------------------------------- */
/* Search results page                                                  */
/* -------------------------------------------------------------------- */
function setupSearchPage() {
  const grid = document.getElementById("searchGrid");
  if (!grid) return;

  const input = document.getElementById("searchInput");
  const heading = document.getElementById("resultsHeading");
  const countEl = document.getElementById("resultsCount");

  function render(keyword) {
    const results = keyword ? searchPapers({ keyword }) : PYQ_DATA;
    heading.textContent = keyword ? `Results for "${keyword}"` : "All papers";
    countEl.textContent = `${results.length} paper${results.length === 1 ? "" : "s"} found`;
    grid.innerHTML = results.length
      ? results.map(paperCardHTML).join("")
      : emptyStateHTML(`Nothing matched "${keyword}". Try a subject name or code like "DBMS" or "CS301".`);
    attachDownloadHandlers(grid);
  }

  const urlParams = new URLSearchParams(window.location.search);
  const initialQuery = urlParams.get("q") || "";
  input.value = initialQuery;
  render(initialQuery);

  document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    render(input.value.trim());
  });
}

/* -------------------------------------------------------------------- */
/* Admin login page                                                     */
/* -------------------------------------------------------------------- */
function setupAdminLoginPage() {
  const form = document.getElementById("adminLoginForm");
  if (!form) return;

  const ADMIN_USER = "admin";
  const ADMIN_PASS = "pyqhub123";
  const alertBox = document.getElementById("loginAlert");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const u = document.getElementById("username").value.trim();
    const p = document.getElementById("password").value;

    if (u === ADMIN_USER && p === ADMIN_PASS) {
      sessionStorage.setItem("pyqhub_admin", "true");
      window.location.href = "admin-dashboard.html";
    } else {
      alertBox.innerHTML = `<div class="alert alert-error">&#9888; Incorrect username or password. Try the demo credentials below.</div>`;
    }
  });
}

/* -------------------------------------------------------------------- */
/* Admin dashboard / upload page                                        */
/* -------------------------------------------------------------------- */
function setupAdminDashboardPage() {
  const form = document.getElementById("uploadForm");
  if (!form) return;

  // Simple guard — in the real Java version this check happens server-side
  // via a session attribute set by AdminLoginServlet.
  if (sessionStorage.getItem("pyqhub_admin") !== "true") {
    window.location.href = "admin-login.html";
    return;
  }

  const courseSelect = document.getElementById("uCourse");
  const semSelect = document.getElementById("uSemester");
  populateSelect(courseSelect, COURSES, "Select course");
  populateSelect(semSelect, SEMESTERS, "Select semester");

  const fileDrop = document.getElementById("fileDrop");
  const fileInput = document.getElementById("uFile");
  const fileNameDisplay = document.getElementById("fileNameDisplay");
  const fileDropLabel = document.getElementById("fileDropLabel");

  fileDrop.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", () => {
    if (fileInput.files.length) {
      fileNameDisplay.textContent = `Selected: ${fileInput.files[0].name}`;
      fileDropLabel.textContent = "File ready — click to change";
    }
  });
  ["dragover", "dragleave", "drop"].forEach(evt => {
    fileDrop.addEventListener(evt, (e) => {
      e.preventDefault();
      fileDrop.classList.toggle("drag", evt === "dragover");
    });
  });
  fileDrop.addEventListener("drop", (e) => {
    if (e.dataTransfer.files.length) {
      fileInput.files = e.dataTransfer.files;
      fileNameDisplay.textContent = `Selected: ${e.dataTransfer.files[0].name}`;
      fileDropLabel.textContent = "File ready — click to change";
    }
  });

  const alertBox = document.getElementById("uploadAlert");
  const recentGrid = document.getElementById("recentUploads");
  let nextId = Math.max(...PYQ_DATA.map(p => p.id)) + 1;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const course = courseSelect.value;
    const semester = semSelect.value;
    const subject = document.getElementById("uSubject").value.trim();
    const code = document.getElementById("uCode").value.trim();
    const year = document.getElementById("uYear").value.trim();
    const examType = document.getElementById("uExamType").value;
    const file = fileInput.files[0];

    if (!course || !semester || !subject || !code || !year || !examType) {
      alertBox.innerHTML = `<div class="alert alert-error">&#9888; Please fill in every field before uploading.</div>`;
      return;
    }
    if (!file) {
      alertBox.innerHTML = `<div class="alert alert-error">&#9888; Please attach a PDF file.</div>`;
      return;
    }

    const newPaper = {
      id: nextId++,
      course, semester, subject, code, year, examType,
      pages: Math.floor(Math.random() * 4) + 3,
      downloads: 0,
      fileName: file.name
    };
    PYQ_DATA.unshift(newPaper);

    alertBox.innerHTML = `<div class="alert alert-success">&#9989; "${subject} (${code})" was added. Students can now find it under ${course} → ${semester}.</div>`;
    form.reset();
    fileNameDisplay.textContent = "";
    fileDropLabel.textContent = "Click to choose a PDF, or drag one here";

    recentGrid.innerHTML = paperCardHTML(newPaper) + recentGrid.innerHTML;
    attachDownloadHandlers(recentGrid);
  });
}
