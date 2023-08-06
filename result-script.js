const resultForm = document.getElementById('resultForm');
const resultContainer = document.getElementById('resultContainer');
const optionSelect = document.getElementById('optionSelect');
resultForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const code = document.getElementById('codeInput').value;
  const option = optionSelect.value;

  fetch(`/result-submit?code=${code}&option=${option}`)
    .then(response => response.json())
    .then(result => {
      if (result) {

        let score1 = '';
        let right1 = 0;
        let wrong1 = 0;
        for (let i = 0; i < result.lessons1[0].childAnswer.length && i < result.lessons1[0].correctAnswer.length; i++) {
          if (result.lessons1[0].childAnswer[i].toUpperCase() === result.lessons1[0].correctAnswer[i].toUpperCase()) {
            score1 += '+';
            right1 += 1;
          } else {
            score1 += '-';
            wrong1 += 1;
          }
        }

        let score2 = '';
        let right2 = 0;
        let wrong2 = 0;
        for (let i = 0; i < result.lessons2[0].childAnswer.length && i < result.lessons2[0].correctAnswer.length; i++) {
          if (result.lessons2[0].childAnswer[i].toUpperCase() === result.lessons2[0].correctAnswer[i].toUpperCase()) {
            score2 += '+';
            right2 += 1;
          } else {
            score2 += '-';
            wrong2 += 1;
          }
        }

        let score3 = '';
        let right3 = 0;
        let wrong3 = 0;
        for (let i = 0; i < result.lessons3[0].childAnswer.length && i < result.lessons3[0].correctAnswer.length; i++) {
          if (result.lessons3[0].childAnswer[i].toUpperCase() === result.lessons3[0].correctAnswer[i].toUpperCase()) {
            score3 += '+';
            right3 += 1;
          } else {
            score3 += '-';
            wrong3 += 1;
          }
        }

        let score4 = '';
        let right4 = 0;
        let wrong4 = 0;
        for (let i = 0; i < result.lessons4[0].childAnswer.length && i < result.lessons4[0].correctAnswer.length; i++) {
          if (result.lessons4[0].childAnswer[i].toUpperCase() === result.lessons4[0].correctAnswer[i].toUpperCase()) {
            score4 += '+';
            right4 += 1;
          } else {
            score4 += '-';
            wrong4 += 1;
          }
        }

        let score5 = '';
        let right5 = 0;
        let wrong5 = 0;
        for (let i = 0; i < result.lessons5[0].childAnswer.length && i < result.lessons5[0].correctAnswer.length; i++) {
          if (result.lessons5[0].childAnswer[i].toUpperCase() === result.lessons5[0].correctAnswer[i].toUpperCase()) {
            score5 += '+';
            right5 += 1;
          } else {
            score5 += '-';
            wrong5 += 1;
          }
        }

        let resultHTML = `
        <div id="resultDetails">
        <table class="exam-details">
          <tr>
            <th>İmtahan:</th>
            <td id="examName">${optionSelect.value}</td>
          </tr>
          <tr>
            <th>Şagird adı:</th>
            <td id="childName">${result.name}</td>
          </tr>
          <tr>
            <th>Şagird soyadı:</th>
            <td id="childSurname">${result.surname}</td>
          </tr>
          <tr>
            <th>Sinif:</th>
            <td id="score">${result.grade}</td>
          </tr>
          <tr>
            <th>Bal:</th>
            <td id="score">${result.score}</td>
          </tr>
        </table>
          <div class="lessonTable">
          <div class="table-responsive">
          <table id="lessonTable1">
          <tr>
          <td rowspan="4">${result.lessons1[0].lessonName}</td>
          </tr>
          <tr>
          <td>Cavabınız</td>
          <td id="answer1">${result.lessons1[0].childAnswer.toUpperCase()}</td>
          </tr>
          <tr>
          <td>Doğru cavablar</td>
          <td>${result.lessons1[0].correctAnswer.toUpperCase()}</td>
          </tr>
          <tr>
          <td>Status</td>
          <td>${score1}</td>
          </tr>
          </table>
          </div>
          <div class="table-responsive">
          <table id="lessonTable2">
          <tr>
          <td rowspan="4">${result.lessons2[0].lessonName}</td>
          </tr>
          <tr>
          <td>Cavabınız</td>
          <td id="answer2">${result.lessons2[0].childAnswer.toUpperCase()}</td>
          </tr>
          <tr>
          <td>Doğru cavablar</td>
          <td>${result.lessons2[0].correctAnswer.toUpperCase()}</td>
          </tr>
          <tr>
          <td>Status</td>
          <td>${score2}</td>
          </tr>
          </table>
          </div>
          <div class="table-responsive">
          <table id="lessonTable3">
          <tr>
          <td rowspan="4">${result.lessons3[0].lessonName}</td>
          </tr>
          <tr>
          <td>Cavabınız</td>
          <td id="answer3">${result.lessons3[0].childAnswer.toUpperCase()}</td>
          </tr>
          <tr>
          <td>Doğru cavablar</td>
          <td>${result.lessons3[0].correctAnswer.toUpperCase()}</td>
          </tr>
          <tr>
          <td>Status</td>
          <td>${score3}</td>
          </tr>
          </table>
          </div>
          <div class="table-responsive">
          <table id="lessonTable4">
          <tr>
          <td rowspan="4">${result.lessons4[0].lessonName}</td>
          </tr>
          <tr>
          <td>Cavabınız</td>
          <td id="answer4">${result.lessons4[0].childAnswer.toUpperCase()}</td>
          </tr>
          <tr>
          <td>Doğru cavablar</td>
          <td>${result.lessons4[0].correctAnswer.toUpperCase()}</td>
          </tr>
          <tr>
          <td>Status</td>
          <td>${score4}</td>
          </tr>
          </table>
          </div>
          <div class="table-responsive">
          <table id="lessonTable5">
          <tr>
          <td rowspan="4">${result.lessons5[0].lessonName}</td>
          </tr>
          <tr>
          <td>Cavabınız</td>
          <td id="answer5">${result.lessons5[0].childAnswer.toUpperCase()}</td>
          </tr>
          <tr>
          <td>Doğru cavablar</td>
          <td>${result.lessons5[0].correctAnswer.toUpperCase()}</td>
          </tr>
          <tr>
          <td>Status</td>
          <td>${score5}</td>
          </tr>
          </table>
          </div>
          <div class="table-responsive">
          <table>
          </div>
          <tr>
            <th></th>
            <th style="display: ${result.lessons1[0].lessonName ? 'table-cell' : 'none'}">${result.lessons1[0].lessonName}</th>
            <th style="display: ${result.lessons2[0].lessonName ? 'table-cell' : 'none'}">${result.lessons2[0].lessonName}</th>
            <th style="display: ${result.lessons3[0].lessonName ? 'table-cell' : 'none'}">${result.lessons3[0].lessonName}</th>
            <th style="display: ${result.lessons4[0].lessonName ? 'table-cell' : 'none'}">${result.lessons4[0].lessonName}</th>
            <th style="display: ${result.lessons5[0].lessonName ? 'table-cell' : 'none'}">${result.lessons5[0].lessonName}</th>
            <th id="all">CӘMİ</th>
          </tr>
          <tr>
            <th>Sual sayı:</th>
            <td style="display: ${result.lessons1[0].lessonName ? 'table-cell' : 'none'}">${score1.length}</td>
            <td style="display: ${result.lessons2[0].lessonName ? 'table-cell' : 'none'}">${score2.length}</td>
            <td style="display: ${result.lessons3[0].lessonName ? 'table-cell' : 'none'}">${score3.length}</td>
            <td style="display: ${result.lessons4[0].lessonName ? 'table-cell' : 'none'}">${score4.length}</td>
            <td style="display: ${result.lessons5[0].lessonName ? 'table-cell' : 'none'}">${score5.length}</td>
            <td>${score1.length + score2.length + score3.length + score4.length + score5.length}</td>
          </tr>
          <tr>
            <th>Doğru:</th>
            <td style="display: ${result.lessons1[0].lessonName ? 'table-cell' : 'none'}">${right1}</td>
            <td style="display: ${result.lessons2[0].lessonName ? 'table-cell' : 'none'}">${right2}</td>
            <td style="display: ${result.lessons3[0].lessonName ? 'table-cell' : 'none'}">${right3}</td>
            <td style="display: ${result.lessons4[0].lessonName ? 'table-cell' : 'none'}">${right4}</td>
            <td style="display: ${result.lessons5[0].lessonName ? 'table-cell' : 'none'}">${right5}</td>
            <td>${right1 + right2 + right3 + right4 + right5}</td>
          </tr>
          <tr>
            <th>Səhv:</th>
            <td style="display: ${result.lessons1[0].lessonName ? 'table-cell' : 'none'}">${wrong1}</td>
            <td style="display: ${result.lessons2[0].lessonName ? 'table-cell' : 'none'}">${wrong2}</td>
            <td style="display: ${result.lessons3[0].lessonName ? 'table-cell' : 'none'}">${wrong3}</td>
            <td style="display: ${result.lessons4[0].lessonName ? 'table-cell' : 'none'}">${wrong4}</td>
            <td style="display: ${result.lessons5[0].lessonName ? 'table-cell' : 'none'}">${wrong5}</td>
            <td>${wrong1 + wrong2 + wrong3 + wrong4 + wrong5}</td>
          </tr>
        </table>  
        </div>   
        </div>
        </div>
        <div class="btn-container">
          <button onClick="printResult()">Çap et</button> 
        </div>
        `;
        resultContainer.innerHTML = resultHTML;

          let answer1 = document.getElementById("answer1");
          let answer2 = document.getElementById("answer2");
          let answer3 = document.getElementById("answer3");
          let answer4 = document.getElementById("answer4");
          let answer5 = document.getElementById("answer5");
          
          if (answer1.innerHTML.trim() === ""){
            document.getElementById("lessonTable1").style.display = "none";
          }
          if(answer2.innerHTML.trim() === ""){
            document.getElementById("lessonTable2").style.display = "none";
          }
          if(answer3.innerHTML.trim() === ""){
            document.getElementById("lessonTable3").style.display = "none";
          }
          if (answer4.innerHTML.trim() === ""){
            document.getElementById("lessonTable4").style.display = "none";
          }
          if (answer5.innerHTML.trim() === ""){
            document.getElementById("lessonTable5").style.display = "none";
          }


      } else {
        resultContainer.innerHTML = '<p>Nəticə Tapılmadı!</p>';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      resultContainer.innerHTML = '<p>Nəticə Tapılmadı!</p>';
    });
});

// Fetch the options and populate the select element
fetch('/options')
  .then(response => response.json())
  .then(options => {
    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.textContent = option;
      optionSelect.appendChild(optionElement);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

  function printResult() {
    var printContents = document.getElementById("resultDetails").innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  
  
