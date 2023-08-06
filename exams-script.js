async function fetchExams() {
  try {
    const response = await fetch("/exams-data");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const exams = await response.json();

    const monthsAz = [
      "yanvar",
      "fevral",
      "mart",
      "aprel",
      "may",
      "iyun",
      "iyul",
      "avqust",
      "sentyabr",
      "oktyabr",
      "noyabr",
      "dekabr",
    ];

    const examsList = document.getElementById("examsList");
    exams.forEach((exam) => {
      const date = new Date(exam.date);
      const formattedDate = `${date.getDate()} ${monthsAz[date.getMonth()]} ${date.getFullYear()}`;
      const listItem = document.createElement("li");
      listItem.textContent = `${formattedDate}: ${exam.name}`;
      examsList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error fetching exams:", error);
  }
}

fetchExams();
