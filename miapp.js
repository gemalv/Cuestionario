function checkAnswers() {
    const correctAnswers = {
        q1: "Verdadero",
        q2: "Falso",
        q3: "Falso",
        q4: "Verdadero",
        q5: "Verdadero",
        q6: "Verdadero",
        q7: "Falso", 
        q8: "Verdadero",
        q9: "Falso",
        q10: "Verdadero",

        // Agrega las respuestas correctas correspondientes a las preguntas
    };

    let form = document.getElementById('quiz-form');
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    for (let key in correctAnswers) {
        let selected = form.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === correctAnswers[key]) {
            score++;
            selected.parentElement.style.color = "green";
        } else if (selected) {
            selected.parentElement.style.color = "red";
        }
    }

    let resultText = `Has obtenido ${score} de ${totalQuestions} respuestas correctas.`;
    document.getElementById('results').textContent = resultText;
}