let i=0;
let answers=[]
let currentQuestionIndex = 0;
let questions=[]
let data=[]

let correctAns=[]

async function fetchQuestions() {
    try {
        const response = await fetch('quiz.json');
        if (!response.ok) throw new Error('Error fetching questions');
        data = await response.json();
        console.log(data.quiz)
        console.log(data.quiz[0].answer)
        for(let k=0;k<5;k++){
            correctAns.push(data.quiz[k].answer)
        }
        questions = data.quiz;
        displayQuestion(data);
    } catch (error) {
        console.log(error.message);
    }
}

function displayQuestion(data) {
    if (currentQuestionIndex >= questions.length) {
        let score=0;
        for(let j=0;j<answers.length;j++){
            if(parseInt(answers[j])===parseInt(correctAns[j])){
                score++;
            }
            console.log('parseintof ans',answers[j],correctAns[j])
        }
        console.log('score',score)

        document.getElementById('main-container').innerHTML = `
        <h1>Quiz Completed!</h1>
        <h2>Score: ${score}</h2>
        
        `;
        return;
    }

    const questionData = questions[currentQuestionIndex];
    // console.log(data.quiz[i].question)
    
    // document.getElementById('question-text').innerText = questionData.question;
    
    document.getElementById('main-container').innerHTML=`
    <h1>Quiz app</h1> 
    <div class="questions">
    <h3>${data.quiz[i].question}</h3>
    <ul>
       <li><input type="radio" name="option" id="0"> ${data.quiz[i].options[0]}</li>
       <li><input type="radio" name="option" id="1"> ${data.quiz[i].options[1]}</li>
        <li><input type="radio" name="option" id="2"> ${data.quiz[i].options[2]}</li>
       <li><input type="radio" name="option" id="3"> ${data.quiz[i].options[3]}</li>
    </ul>
</div>`
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Please select an answer before proceeding.");
        return;
    }

    console.log("Selected Answer ID:", selectedOption.id);

    answers.push(selectedOption.id);
    // console.log(answers)

    i++;
    console.log(i)
    currentQuestionIndex++;
    displayQuestion(data);
}

fetchQuestions();


