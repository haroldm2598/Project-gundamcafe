import '../../styles/main.scss';
import json from './data.json';

export const contentComponents = () => {
	const div = document.createElement('div');

	div.classList.add('menuContainer');

	for (let i = 0; i < 2; i++) {
		const div1 = document.createElement('div');
		const div2 = document.createElement('div');
		const div3 = document.createElement('div');
		const image = document.createElement('img');
		const h3 = document.createElement('h3');
		const para = document.createElement('p');

		div1.classList.add('menuContainer__item');
		div2.classList.add('menuContainer__item--img');
		div3.classList.add('menuContainer__item--content');

		h3.textContent = 'LOREM IPSUM';
		para.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		Donec facilisis massa eget mauris dictum ultrices in id 
		justo. Suspendisse vel ornare quam.`;

		div1.appendChild(div2);
		div1.appendChild(div3);
		div2.appendChild(image);
		div3.appendChild(h3);
		div3.appendChild(para);

		div.appendChild(div1);
	}

	return div;
};
