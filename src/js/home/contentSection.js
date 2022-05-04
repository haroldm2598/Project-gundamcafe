import '../../styles/main.scss';
import gundamImage from '../../images/homeGundam.jpg';

export const contentComponents = () => {
	const div = document.createElement('div');
	const myImage = new Image();

	myImage.src = gundamImage;

	div.classList.add('contentContainer');
	myImage.classList.add('contentContainer__image');

	div.appendChild(myImage);

	return div;
};
