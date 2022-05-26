import '../../styles/main.scss';
import json from './data.json';

// https://api.unsplash.com/search/photos?query=minimal

export const contentComponents = () => {
	const clientId = 'rYIji7X0Fh9YOV1m8NBErYTgqLoNB9bnE18d0HP_VlU';
	const url =
		'https://api.unsplash.com/search/photos?query=restaurant&client_id=' +
		clientId;

	const div = document.createElement('div');
	const data = json.details;

	// (async () => {
	// 	let getImg = await getImage();
	// 	const testingImg = new Image();

	// 	testingImg.src = getImg;
	// 	div.appendChild(testingImg);
	// })();

	div.classList.add('menuContainer');

	for (let i = 0; i < data.length; i++) {
		const div1 = document.createElement('div');
		const div2 = document.createElement('div');
		const div3 = document.createElement('div');
		const h3 = document.createElement('h3');
		const para = document.createElement('p');

		div1.classList.add('menuContainer__item');
		div2.classList.add('menuContainer__item--img');
		div3.classList.add('menuContainer__item--content');

		(async () => {
			let getImg = await getImage();
			const testingImg = new Image();

			testingImg.src = getImg;
			div2.appendChild(testingImg);
		})();

		h3.textContent = data[i].title;
		para.textContent = data[i].about;

		div1.appendChild(div2);
		div1.appendChild(div3);
		div3.appendChild(h3);
		div3.appendChild(para);
		div.appendChild(div1);
	}

	async function getImage() {
		let randomNumber = Math.floor(Math.random() * 6);
		return fetch(url)
			.then((response) => response.json())
			.then((data) => {
				let allImages = data.results[randomNumber];
				return allImages.urls.regular;
			});
	}

	return div;
};
