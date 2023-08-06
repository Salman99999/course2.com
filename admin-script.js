// admin-script.js

const adminForm = document.getElementById('adminForm');

adminForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('nameInput').value;
  const surname = document.getElementById('surnameInput').value;
  const code = document.getElementById('codeInput').value;
  const option = document.getElementById('optionInput').value;
  const grade = document.getElementById('gradeInput').value;
  const score = document.getElementById('scoreInput').value;
  
  const lessons1 = Array.from(document.querySelectorAll('.lesson1')).map((lesson1) => {
    const lessonName = lesson1.querySelector('.lesson-name').value;
    const childAnswer = lesson1.querySelector('.child-answer').value;
    const correctAnswer = lesson1.querySelector('.correct-answer').value;
    return { lessonName, childAnswer, correctAnswer };
  });
  
  const lessons2 = Array.from(document.querySelectorAll('.lesson2')).map((lesson2) => {
    const lessonName = lesson2.querySelector('.lesson-name').value;
    const childAnswer = lesson2.querySelector('.child-answer').value;
    const correctAnswer = lesson2.querySelector('.correct-answer').value;
    return { lessonName, childAnswer, correctAnswer };
  });
  
  const lessons3 = Array.from(document.querySelectorAll('.lesson3')).map((lesson3) => {
    const lessonName = lesson3.querySelector('.lesson-name').value;
    const childAnswer = lesson3.querySelector('.child-answer').value;
    const correctAnswer = lesson3.querySelector('.correct-answer').value;
    return { lessonName, childAnswer, correctAnswer };
  });

  const lessons4 = Array.from(document.querySelectorAll('.lesson4')).map((lesson4) => {
    const lessonName = lesson4.querySelector('.lesson-name').value;
    const childAnswer = lesson4.querySelector('.child-answer').value;
    const correctAnswer = lesson4.querySelector('.correct-answer').value;
    return { lessonName, childAnswer, correctAnswer };
  });

  const lessons5 = Array.from(document.querySelectorAll('.lesson5')).map((lesson5) => {
    const lessonName = lesson5.querySelector('.lesson-name').value;
    const childAnswer = lesson5.querySelector('.child-answer').value;
    const correctAnswer = lesson5.querySelector('.correct-answer').value;
    return { lessonName, childAnswer, correctAnswer };
  });
  

  const data = {
    name,
    surname,
    code,
    option,
    score,
    grade,
    lessons1,
    lessons2,
    lessons3,
    lessons4, 
    lessons5
  };

  fetch('/admin-submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status === 200) {
        console.log('Exam result submitted successfully');
        showAlert('İmtahan nəticəsi uğurla təsdiq edildi', 'success');
        adminForm.reset();
      } else if (response.status === 400) {
        showAlert('Tələbə artıq mövcuddur', 'error');
      } else {
        throw new Error('An error occurred while submitting the exam result');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      showAlert('İmtahan nəticəsini təsdiq edərkən xəta baş verdi', 'error');
    });
});

function showAlert(message, type) {
  const alertContainer = document.getElementById('alertContainer');
  const alertDiv = document.createElement('div');
  alertDiv.textContent = message;
  alertDiv.className = `alert alert-${type}`;
  alertContainer.appendChild(alertDiv);

  setTimeout(() => {
    alertDiv.remove();
  }, 3000);
};

document.getElementById("examForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const examDate = document.getElementById("examDate").value;
  const examName = document.getElementById("examName").value;
  const data = { date: examDate, name: examName };

  try {
    const response1 = await fetch("/addExam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response1.ok) {
      alert("Exam added successfully!");
    } else {
      alert("Failed to add exam.");
    }
  } catch (error) {
    console.error("Error adding exam:", error);
  }
});

// ... (previous code)

document.getElementById("deleteExamForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const examNameToDelete = document.getElementById("examNameToDelete").value;

  try {
    // Send a request to the server to delete the exam by name
    const response = await fetch(`/deleteExam/${encodeURIComponent(examNameToDelete)}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Exam deleted successfully!");
    } else if (response.status === 404) {
      alert("Exam not found.");
    } else {
      alert("Failed to delete exam.");
    }
  } catch (error) {
    console.error("Error deleting exam:", error);
  }
});


document.getElementById("password").addEventListener("submit", async (e) => {
  e.preventDefault();
  const passwordValue = document.getElementById("passwordInput").value;
  const passwordId = document.getElementById("passwordId");
  const adminData = document.getElementById("admin-data");

  if (passwordValue == "16051984.s"){
    passwordId.classList.add("none");
    adminData.classList.remove("none");
  } else{
    alert("Incorrect password");
  }
});
