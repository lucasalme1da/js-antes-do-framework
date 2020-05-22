// const upperName = name => name.toUpperCase()
// const countLetters = word => word.length

// console.log(countLetters('lucas'));


class Menu {

	constructor(menu) {
		this._menuElement = document.querySelector(menu)
	}

	addActiveEvent() {
		this._menuElement.addEventListener('click', function (event) {
			event.target.classList.add('active')
		})
	}
}

const menu = new Menu(".principal")
menu.addActiveEvent()

console.log(menu);
