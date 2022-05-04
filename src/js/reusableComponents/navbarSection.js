import '../../styles/main.scss';

export const navbarComponent = () => {
	const nameArr = ['Home', 'Menu', 'Contact'];
	const div = document.createElement('div');
	const ul = document.createElement('ul');

	div.classList.add('navbarContainer');
	ul.classList.add('navbarContainer__ul');

	for (let i = 0; i < nameArr.length; i++) {
		const li = document.createElement('li');
		const anchor = document.createElement('a');

		anchor.textContent = nameArr[i];

		anchor.setAttribute('href', '#');

		anchor.classList.add('navbarContainer__ul--anchor');
		li.classList.add('navbarContainer__ul--li');

		li.appendChild(anchor);
		ul.appendChild(li);
	}

	div.appendChild(ul);
	return div;
};
