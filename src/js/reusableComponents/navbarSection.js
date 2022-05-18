import '../../styles/main.scss';

export const navbarComponent = () => {
	const nameArr = ['Home', 'Menu', 'Contact'];
	const linkArr = ['index.html', 'menu.html', 'contact.html'];
	const div = document.createElement('div');
	const ul = document.createElement('ul');
	const menuBars = document.createElement('div');

	div.classList.add('navbarContainer');
	ul.classList.add('navbarContainer__ul');
	menuBars.classList.add('navbarContainer__menuBars');
	menuBars.setAttribute('id', 'menuBar');

	menuBars.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="2.5em" width="2.5em"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>`;

	for (let i = 0; i < nameArr.length; i++) {
		const li = document.createElement('li');
		const anchor = document.createElement('a');

		anchor.textContent = nameArr[i];

		for (let j = 0; j < linkArr.length; j++) {
			anchor.setAttribute('href', `${linkArr[i]}`);
		}

		anchor.classList.add('navbarContainer__ul--anchor');
		li.classList.add('navbarContainer__ul--li');

		li.appendChild(anchor);
		ul.appendChild(li);
	}

	div.appendChild(menuBars);
	div.appendChild(ul);

	const menuBarsEvent = () => {
		const navbarMenu = document.querySelector('.navbarContainer__menuBars');
		console.log(ul);
	};

	menuBarsEvent();

	return div;
};
