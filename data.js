/* ==========================================================================
   PYQ HUB — Sample data layer
   ========================================================================== */

const PYQ_DATA = [
  // * Semester 1 *
                            /* Mathematics */ 
  { id: 1, course: "BCA", semester: "1st Sem", subject: "Mathematics", code: "BCA103", year: "2023", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA103_Mathematics_2023_EndSem_compressed.pdf" },
  { id: 2, course: "BCA", semester: "1st Sem", subject: "Mathematics", code: "BCA103", year: "2022", examType: "End Sem", pages: 5, downloads: 265, fileName: "BCA103_Mathematics_2022_EndSem_compressed.pdf" },
  { id: 3, course: "BCA", semester: "1st Sem", subject: "Mathematics", code: "BCA103", year: "2021", examType: "End Sem", pages: 5, downloads: 234, fileName: "BCA103_Mathematics_2021_EndSem_compressed.pdf" },
  
                            /* Programming in C++ */
  { id: 11, course: "BCA", semester: "1st Sem", subject: "Programming in C++", code: "BCA101", year: "2023", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA101_Prog_in_C++_2023_EndSem_compressed.pdf" },
  { id: 12, course: "BCA", semester: "1st Sem", subject: "Programming in C++", code: "BCA101", year: "2022", examType: "End Sem", pages: 5, downloads: 265, fileName: "BCA101_Prog_in_C++_2022_EndSem_compressed.pdf" },
  { id: 13, course: "BCA", semester: "1st Sem", subject: "Programming in C++", code: "BCA101", year: "2021", examType: "End Sem", pages: 5, downloads: 234, fileName: "BCA101_Prog_in_C++_2021_EndSem_compressed.pdf" },
  
                            /* Computer Architecture */
  { id: 21, course: "BCA", semester: "1st Sem", subject: "Computer Architecture", code: "BCA102", year: "2023", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA102_Computer_Architecture_2023_EndSem_compressed.pdf" },
  { id: 22, course: "BCA", semester: "1st Sem", subject: "Computer Architecture", code: "BCA102", year: "2022", examType: "End Sem", pages: 5, downloads: 265, fileName: "BCA102_Computer_Architecture_2022_EndSem_compressed.pdf" },
  { id: 23, course: "BCA", semester: "1st Sem", subject: "Computer Architecture", code: "BCA102", year: "2021", examType: "End Sem", pages: 5, downloads: 234, fileName: "BCA102_Computer_Architecture_2021_EndSem_compressed.pdf" },
  
  // * Semester 2 *
                            /* Java */
  { id: 31, course: "BCA", semester: "2nd Sem", subject: "Java", code: "BCA201", year: "2024", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA201_Java_2024_EndSem_compressed.pdf" },
  { id: 32, course: "BCA", semester: "2nd Sem", subject: "Java", code: "BCA201", year: "2023", examType: "End Sem", pages: 5, downloads: 265, fileName: "BCA201_Java_2023_EndSem_compressed.pdf" },
  { id: 33, course: "BCA", semester: "2nd Sem", subject: "Java", code: "BCA201", year: "2022", examType: "End Sem", pages: 5, downloads: 234, fileName: "BCA201_Java_2022_EndSem_compressed.pdf" },

                            /* Mathematics */
  { id: 41, course: "BCA", semester: "2nd Sem", subject: "Math", code: "BCA202", year: "2024", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA202_Math_2024_EndSem_compressed.pdf" },
  { id: 42, course: "BCA", semester: "2nd Sem", subject: "Math", code: "BCA202", year: "2023", examType: "End Sem", pages: 5, downloads: 265, fileName: "BCA202_Math_2023_EndSem_compressed.pdf" },
  { id: 43, course: "BCA", semester: "2nd Sem", subject: "Math", code: "BCA202", year: "2022", examType: "End Sem", pages: 5, downloads: 234, fileName: "BCA202_Math_2022_EndSem_compressed.pdf" },

                            /* Discrete Structure */
  { id: 51, course: "BCA", semester: "2nd Sem", subject: "Discrete Structures", code: "BCA203", year: "2024", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA203_DiscreteStructures_2024_EndSem_compressed.pdf" },
  { id: 52, course: "BCA", semester: "2nd Sem", subject: "Discrete Structures", code: "BCA203", year: "2023", examType: "End Sem", pages: 5, downloads: 265, fileName: "BCA203_DiscreteStructures_2023_EndSem_compressed.pdf" },
  { id: 53, course: "BCA", semester: "2nd Sem", subject: "Discrete Structures", code: "BCA203", year: "2022", examType: "End Sem", pages: 5, downloads: 234, fileName: "BCA203_DiscreteStructures_2022_EndSem_compressed.pdf" },

  // * Semester 3 *
                            /* Software Testing */
  { id: 61, course: "BCA", semester: "3rd Sem", subject: "Software Testing", code: "BCA301", year: "2024", examType: "End Sem", pages: 6, downloads: 482, fileName: "BCA301_Software Testing_2024_EndSem_compressed.pdf" },
  { id: 62, course: "BCA", semester: "3rd Sem", subject: "Software Testing", code: "BCA301", year: "2023", examType: "End Sem", pages: 6, downloads: 651, fileName: "BCA301_Software Testing_2023_EndSem_compressed.pdf" },
  { id: 63, course: "BCA", semester: "3rd Sem", subject: "Software Testing", code: "BCA301", year: "2022", examType: "End Sem", pages: 4, downloads: 219, fileName: "BCA301_Software Testing_2022_EndSem_compressed.pdf" },
  { id: 64, course: "BCA", semester: "3rd Sem", subject: "Software Testing", code: "BCA301", year: "2021", examType: "End Sem", pages: 4, downloads: 219, fileName: "BCA301_Software Testing_2021_EndSem_compressed.pdf" },
  
                            /*Data Structure */
  { id: 71, course: "BCA", semester: "3rd Sem", subject: "Data Structures", code: "BCA302", year: "2024", examType: "End Sem", pages: 5, downloads: 398, fileName: "BCA302_DS_2024_EndSem_compressed.pdf" },
  { id: 72, course: "BCA", semester: "3rd Sem", subject: "Data Structures", code: "BCA302", year: "2023", examType: "End Sem", pages: 5, downloads: 398, fileName: "BCA302_DS_2023_EndSem_compressed.pdf" },
  { id: 73, course: "BCA", semester: "3rd Sem", subject: "Data Structures", code: "BCA302", year: "2022", examType: "End Sem", pages: 5, downloads: 540, fileName: "BCA302_DS_2023_EndSem_compressed.pdf" },
  { id: 74, course: "BCA", semester: "3rd Sem", subject: "Data Structures", code: "BCA302", year: "2021", examType: "End Sem", pages: 5, downloads: 540, fileName: "BCA302_DS_2021_EndSem_compressed.pdf" },

                            /* Operating System */
  { id: 81, course: "BCA", semester: "3rd Sem", subject: "Operating Systems", code: "BCA303", year: "2024", examType: "End Sem", pages: 6, downloads: 312, fileName: "BCA303_OS_2024_EndSem_compressed.pdf" },
  { id: 82, course: "BCA", semester: "3rd Sem", subject: "Operating Systems", code: "BCA303", year: "2023", examType: "End Sem", pages: 6, downloads: 312, fileName: "BCA303_OS_2023_EndSem_compressed.pdf" },
  { id: 83, course: "BCA", semester: "3rd Sem", subject: "Operating Systems", code: "BCA303", year: "2022", examType: "End Sem", pages: 6, downloads: 312, fileName: "BCA303_OS_2022_EndSem_compressed.pdf" },
  { id: 84, course: "BCA", semester: "3rd Sem", subject: "Operating Systems", code: "BCA303", year: "2021", examType: "End Sem", pages: 6, downloads: 312, fileName: "BCA303_OS_2021_EndSem_compressed.pdf" },

                            /* Computer Network */
  { id: 91, course: "BCA", semester: "3rd Sem", subject: "Computer Networks", code: "BCA304", year: "2024", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA304_CN_2024_EndSem_compressed.pdf" },
  { id: 92, course: "BCA", semester: "3rd Sem", subject: "Computer Networks", code: "BCA304", year: "2023", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA304_CN_2023_EndSem_compressed.pdf" },
  { id: 93, course: "BCA", semester: "3rd Sem", subject: "Computer Networks", code: "BCA304", year: "2022", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA304_CN_2022_EndSem_compressed.pdf" },
  { id: 94, course: "BCA", semester: "3rd Sem", subject: "Computer Networks", code: "BCA304", year: "2021", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA304_CN_2021_EndSem_compressed.pdf" },

                            /* Mathematics */
  { id: 101, course: "BCA", semester: "3rd Sem", subject: "Mathematics", code: "BCA305", year: "2024", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA305_M_2024_EndSem_compressed.pdf" },
  { id: 102, course: "BCA", semester: "3rd Sem", subject: "Mathematics", code: "BCA305", year: "2023", examType: "End Sem", pages: 5, downloads: 265, fileName: "BCA305_M_2023_EndSem_compressed.pdf" },
  { id: 103, course: "BCA", semester: "3rd Sem", subject: "Mathematics", code: "BCA305", year: "2022", examType: "End Sem", pages: 5, downloads: 234, fileName: "BCA305_M_2022_EndSem_compressed.pdf" },
  { id: 104, course: "BCA", semester: "3rd Sem", subject: "Mathematics", code: "BCA305", year: "2021", examType: "End Sem", pages: 5, downloads: 323, fileName: "BCA305_M_2021_EndSem_compressed.pdf" },

  // * Semester 4 *
                            /* DBMS */
  { id: 111, course: "BCA", semester: "4th Sem", subject: "DBMS", code: "BCA402", year: "2023", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA402_DBMS_2023_EndSem_compressed.pdf" },
  { id: 112, course: "BCA", semester: "4th Sem", subject: "DBMS", code: "BCA402", year: "2022", examType: "End Sem", pages: 5, downloads: 265, fileName: "BCA402_DBMS_2022_EndSem_compressed.pdf" },

                            /* Design Analysis of Algorithm */
  { id: 121, course: "BCA", semester: "4th Sem", subject: "Design Analysis of Algorithm", code: "BCA401", year: "2023", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA401_Design_AA_2023_EndSem_compressed.pdf" },
  { id: 122, course: "BCA", semester: "4th Sem", subject: "Design Analysis of Algorithm", code: "BCA401", year: "2022", examType: "End Sem", pages: 5, downloads: 265, fileName: "BCA401_Design_AA_2022_EndSem_compressed.pdf" },
  
                            /* Mathematics */
  { id: 131, course: "BCA", semester: "4th Sem", subject: "Math", code: "BCA403", year: "2023", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA403_Math_2023_EndSem_compressed.pdf" },
  { id: 132, course: "BCA", semester: "4th Sem", subject: "Math", code: "BCA403", year: "2022", examType: "End Sem", pages: 5, downloads: 265, fileName: "BCA403_Math_2022_EndSem_compressed.pdf" },
  
                            /* PHP */
  { id: 141, course: "BCA", semester: "4th Sem", subject: "PHP", code: "BCA404", year: "2023", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA404_PHP_2023_EndSem_compressed.pdf" },
  { id: 142, course: "BCA", semester: "4th Sem", subject: "PHP", code: "BCA404", year: "2022", examType: "End Sem", pages: 5, downloads: 265, fileName: "BCA404_PHP_2022_EndSem_compressed.pdf" },
  
                            /* Software Engineering */
  { id: 151, course: "BCA", semester: "4th Sem", subject: "Software Engineering", code: "BCA405", year: "2023", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA405_Soft_Eng_2023_EndSem_compressed.pdf" },
  { id: 152, course: "BCA", semester: "4th Sem", subject: "Software Engineering", code: "BCA405", year: "2022", examType: "End Sem", pages: 5, downloads: 265, fileName: "BCA405_Soft_Eng_2022_EndSem_compressed.pdf" },
  
  // * Semester 5 *
                            /* Micro Processor */
  { id: 161, course: "BCA", semester: "5th Sem", subject: "Micro Processor", code: "BCA501", year: "2022", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA501_Micro-Processor_2022_EndSem_compressed.pdf" },
  { id: 162, course: "BCA", semester: "5th Sem", subject: "Micro Processor", code: "BCA501", year: "2023", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA501_Micro-Processor_2023_EndSem_compressed.pdf" },
  
                            /* Network Programming */
  { id: 171, course: "BCA", semester: "5th Sem", subject: "Network Programming", code: "BCA502", year: "2022", examType: "End Sem", pages: 5, downloads: 265, fileName: "BCA502_Network-Program_2022_EndSem_compressed.pdf" },
  { id: 172, course: "BCA", semester: "5th Sem", subject: "Network Programming", code: "BCA502", year: "2023", examType: "End Sem", pages: 5, downloads: 265, fileName: "BCA502_Network-Program_2023_EndSem_compressed.pdf" },
  
                            /* Theory of Computation */
  { id: 181, course: "BCA", semester: "5th Sem", subject: "Theory of Computation", code: "BCA503", year: "2022", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA503_Theory_comp_2022_EndSem_compressed.pdf" },
  { id: 182, course: "BCA", semester: "5th Sem", subject: "Theory of Computation", code: "BCA503", year: "2023", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA503_Theory_comp_2023_EndSem_compressed.pdf" },
  
                            /* Internet Technology */
  { id: 191, course: "BCA", semester: "5th Sem", subject: "Internet Technology", code: "BCA504", year: "2022", examType: "End Sem", pages: 5, downloads: 265, fileName: "BCA504_Internet_tech_2022_EndSem_compressed.pdf" },
  { id: 192, course: "BCA", semester: "5th Sem", subject: "Internet Technology", code: "BCA504", year: "2023", examType: "End Sem", pages: 5, downloads: 265, fileName: "BCA504_Internet_tech_2023_EndSem_compressed.pdf" },
  
  // * Semester 6 *
                            /* Data Mining */
  { id: 201, course: "BCA", semester: "6th Sem", subject: "Data Mining", code: "BCA601", year: "2024", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA601_Data_Mining_2024_EndSem_compressed.pdf" },
  
                            /* Artificial Intelligence */
  { id: 211, course: "BCA", semester: "6th Sem", subject: "Artificial Intelligence", code: "BCA602", year: "2024", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA602_Artificial_Intelligence_2024_EndSem_compressed.pdf" },
  
                            /* Computer Graphics */
  { id: 221, course: "BCA", semester: "6th Sem", subject: "Computer Graphics", code: "BCA603", year: "2024", examType: "End Sem", pages: 5, downloads: 274, fileName: "BCA603_Computer_Graphics_2024_EndSem_compressed.pdf" },
  
];

const COURSES = ["BCA"];
// const COURSES = ["BCA", "B.Tech CSE", "BBA", "B.Sc CS"]; (use for multiple courses)

const SEMESTERS = ["1st Sem", "2nd Sem", "3rd Sem", "4th Sem", "5th Sem", "6th Sem"];

function getSubjectsFor(course, semester) {
  const subs = PYQ_DATA.filter(p =>
    (!course || p.course === course) &&
    (!semester || p.semester === semester)
  ).map(p => p.subject);
  return [...new Set(subs)];
}

function searchPapers({ course, semester, subject, keyword }) {
  return PYQ_DATA.filter(p => {
    if (course && p.course !== course) return false;
    if (semester && p.semester !== semester) return false;
    if (subject && p.subject !== subject) return false;
    if (keyword) {
      const k = keyword.toLowerCase();
      const hay = `${p.subject} ${p.code} ${p.course} ${p.year}`.toLowerCase();
      if (!hay.includes(k)) return false;
    }
    return true;
  });
}

/* Real download — fetches the actual PDF from the "papers" folder */
function simulateDownload(paper) {
  const a = document.createElement("a");
  a.href = `${paper.fileName}`;
  a.download = paper.fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  paper.downloads += 1;
}
