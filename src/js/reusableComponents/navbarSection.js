import '../../styles/main.scss';

export const navbarComponent = () => {
	const nameArr = ['Home', 'Menu', 'Contact'];
	const linkArr = ['index.html', 'menu.html', 'contact.html'];
	const div = document.createElement('div');
	const ul = document.createElement('ul');

	div.classList.add('navbarContainer');
	ul.classList.add('navbarContainer__ul');

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

	div.appendChild(ul);
	return div;
};
