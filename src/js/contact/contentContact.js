import '../../styles/main.scss';
import { contactArr } from './data';
import streetMap from '../../images/streetMap.jpg';

export const contentComponents = () => {
	const div = document.createElement('div');
	const mapSection = document.createElement('div');
	const contactSection = document.createElement('div');
	const ul = document.createElement('ul');
	const myImage = new Image();

	myImage.src = streetMap;

	div.classList.add('contactContainer');
	mapSection.classList.add('contactContainer__mapSection');
	contactSection.classList.add('contactContainer__contactSection');
	ul.classList.add('contactContainer__contactSection--list');

	for (let i = 0; i < contactArr.length; i++) {
		const li = document.createElement('li');

		li.textContent = `address ${contactArr[i]}`;
		li.textContent = `email ${contactArr[i]}`;
		li.textContent = `phone number ${contactArr[i]}`;

		ul.appendChild(li);
	}

	div.appendChild(mapSection);
	div.appendChild(contactSection);
	mapSection.appendChild(myImage);
	contactSection.appendChild(ul);

	return div;
};
