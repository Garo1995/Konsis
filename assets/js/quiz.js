document.addEventListener('DOMContentLoaded', () => {
    const quizzes = document.querySelectorAll('.quiz');
    const thanks = document.querySelector('.quiz-thanks');
    let currentStep = 0;

    function showStep(index) {
        quizzes.forEach((quiz, i) => {
            quiz.style.display = i === index ? 'block' : 'none';
        });

        if (thanks) thanks.style.display = 'none';
        updateNextButton();
    }

    function showThanks() {
        quizzes.forEach(q => q.style.display = 'none');
        if (thanks) thanks.style.display = 'block';
    }

    function isStepFilled(step) {
        const quiz = quizzes[step];

        // radio
        const radios = quiz.querySelectorAll('input[type="radio"]');
        if (radios.length && !quiz.querySelector('input[type="radio"]:checked')) {
            return false;
        }

        // 4 шаг
        if (step === 3) {
            const phone = quiz.querySelector('.mask-phone');
            const checkbox = quiz.querySelector('input[type="checkbox"]');

            if (!phone.value.trim()) return false;
            if (!checkbox.checked) return false;
        }

        return true;
    }

    function updateNextButton() {
        const quiz = quizzes[currentStep];
        const nextBtn = quiz.querySelector('.btn-next');
        if (!nextBtn) return;

        nextBtn.disabled = !isStepFilled(currentStep);
    }

    // 👉 реакции на ввод
    document.addEventListener('change', () => updateNextButton());
    document.addEventListener('input', () => updateNextButton());

    // 👉 кнопки
    document.addEventListener('click', (e) => {
        if (e.target.closest('.btn-next')) {
            if (!isStepFilled(currentStep)) return;

            if (currentStep < quizzes.length - 1) {
                currentStep++;
                showStep(currentStep);
            } else {
                showThanks();
            }
        }

        if (e.target.closest('.btn-prev')) {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        }
    });

    showStep(currentStep);
});
