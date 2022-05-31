import '../../styles/main.scss';
import streetMap from '../../images/streetMap.jpg';
import json from './data.json';

export const contentComponents = () => {
	const div = document.createElement('div');
	const mapSection = document.createElement('div');
	const contactSection = document.createElement('div');
	const ul = document.createElement('ul');
	const myImage = new Image();

	myImage.src = streetMap;

	div.classList.add('contactContainer');
	mapSection.classList.add('contactContainer__mapSection');
	myImage.classList.add('contactContainer__mapSection--image');
	contactSection.classList.add('contactContainer__contactSection');
	ul.classList.add('contactContainer__contactSection--list');

	for (const data of Object.entries(json)) {
		const li = document.createElement('li');

		li.textContent = data.join(': ');
		li.classList.add('contactContainer__contactSection--list__item');

		ul.appendChild(li);
	}

	div.appendChild(mapSection);
	div.appendChild(contactSection);
	mapSection.appendChild(myImage);
	contactSection.appendChild(ul);

	return div;
};
