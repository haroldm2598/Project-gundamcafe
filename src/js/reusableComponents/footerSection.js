import '../../styles/main.scss';

export const footerComponent = () => {
	const footerObj = {
		title: 'Gundam Cafe',
		icons: ['facebook', 'github', 'twitter', 'instagram'],
		date: 'All right reserve @2022'
	};

	const div = document.createElement('div');
	const ul = document.createElement('ul');

	div.classList.add('footerContainer');
	ul.classList.add('footerContainer__ul');

	// for (let i = 0; i < footerObj.length; i++) {
	// 	const li = document.createElement('li');

	// 	li.textContent = footerObj[i];
	// 	li.classList.add('footerContainer__ul--li');

	// 	ul.appendChild(li);
	// }

	// console.log(footerObj.title);
	div.appendChild(ul);
	return div;
};
