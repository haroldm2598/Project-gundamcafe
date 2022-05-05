import '../../styles/main.scss';

export const footerComponent = () => {
	const footerObj = [
		{
			title: 'Gundam Cafe',
			icons: ['facebook', 'github', 'twitter', 'instagram'],
			date: 'All right reserve @2022'
		}
	];

	const div = document.createElement('div');
	const ul = document.createElement('ul');
	const para1 = document.createElement('p');
	const para2 = document.createElement('p');

	div.classList.add('footerContainer');
	ul.classList.add('footerContainer__ul');
	para1.classList.add('footerContainer__para');
	para2.classList.add('footerContainer__para');

	for (let i = 0; i < footerObj.length; i++) {
		const li = document.createElement('li');

		para1.textContent = footerObj[i].title;
		li.textContent = footerObj[i].icons;
		para2.textContent = footerObj[i].date;

		li.classList.add('footerContainer__ul--li');
		ul.appendChild(li);
	}

	div.appendChild(para1);
	div.appendChild(ul);
	div.appendChild(para2);
	return div;
};
