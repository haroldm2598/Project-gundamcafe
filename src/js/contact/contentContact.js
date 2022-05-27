import '../../styles/main.scss';
import json from './data.json';

export const contentComponents = () => {
	const div = document.createElement('div');
	const mapSection = document.createElement('div');
	const contactSection = document.createElement('div');
	const ul = document.createElement('ul');

	div.classList.add('contactContainer');
	mapSection.classList.add('contactContainer__mapSection');
	contactSection.classList.add('contactContainer__contactSection');

	for (let i = 0; i < json.length; i++) {
		const li = document.createElement('li');

		li.textContent = json[i].address;
		li.textContent = json[i].email;
		li.textContent = json[i].phoneNumber;

		ul.appendChild(li);
	}

	div.appendChild(mapSection);
	div.appendChild(contactSection);
	contactSection.appendChild(ul);

	return div;
};
