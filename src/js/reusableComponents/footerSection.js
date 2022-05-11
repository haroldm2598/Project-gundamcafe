import '../../styles/main.scss';
import { footerArr } from './data';

export const footerComponent = () => {
	const div = document.createElement('div');
	const ul = document.createElement('ul');
	const para1 = document.createElement('p');
	const para2 = document.createElement('p');

	div.classList.add('footerContainer');
	ul.classList.add('footerContainer__ul');
	para1.classList.add('footerContainer__para');
	para2.classList.add('footerContainer__para');

	for (let i = 0; i < footerArr.length; i++) {
		const fontIcons = footerArr[i].icons;

		for (let j = 0; j < fontIcons.length; j++) {
			const li = document.createElement('li');

			li.classList.add('footerContainer__ul--li');
			li.innerHTML = fontIcons[j];

			ul.appendChild(li);
		}

		para1.textContent = footerArr[i].title;
		para2.textContent = footerArr[i].date;
	}

	div.appendChild(para1);
	div.appendChild(ul);
	div.appendChild(para2);

	return div;
};
