const question = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')
const ball = document.querySelector('img')
const answersList = ['Tak!', 'Nie.', 'Ciezko powiedziec...', 'Nie chcesz tego wiedziec']

const shakeFn = () => {
	ball.classList.add('shake-animation')
	setTimeout(checkFn, 1000)
}

const checkFn = () => {
	statusFn(answer)
	ball.classList.remove('shake-animation')
	if (question.value === '') {
		statusFn(error, 'Musisz zadac pytanie.')
	} else if (!question.value.slice(-1).includes('?')) {
		statusFn(error, `Pytanie musi zostac zakonczone znakiem "?".`)
	} else {
		statusFn(error, null)
		statusFn(question, null)
		answerFn()
	}
}

const statusFn = (element, text) => {
	element.textContent = text
	element.value = text
}

const answerFn = () => {
	const random = answersList[Math.floor(Math.random() * answersList.length)]
	answer.innerHTML = `<span>Odpowiedz:</span> ${random}`
}

ball.addEventListener('click', shakeFn)
