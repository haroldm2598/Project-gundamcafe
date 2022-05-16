import '../../styles/main.scss';
import json from './data.json';

export const contentComponents = () => {
	const div = document.createElement('div');
	const data = json.details;

	div.classList.add('menuContainer');

	for (let i = 0; i < data.length; i++) {
		const div1 = document.createElement('div');
		const div2 = document.createElement('div');
		const div3 = document.createElement('div');
		const image = document.createElement('img');
		const h3 = document.createElement('h3');
		const para = document.createElement('p');

		div1.classList.add('menuContainer__item');
		div2.classList.add('menuContainer__item--img');
		div3.classList.add('menuContainer__item--content');

		h3.textContent = data[i].title;
		para.textContent = data[i].about;

		div1.appendChild(div2);
		div1.appendChild(div3);
		div2.appendChild(image);
		div3.appendChild(h3);
		div3.appendChild(para);
		div.appendChild(div1);
	}

	return div;
};
