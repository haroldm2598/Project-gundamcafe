import '../../styles/main.scss';
import gundamImage from '../../images/homeGundam.jpg';

export const contentComponents = () => {
	const div = document.createElement('div');
	const div1 = document.createElement('div');
	const div2 = document.createElement('div');
	const div3 = document.createElement('div');
	const h1 = document.createElement('h1');
	const para = document.createElement('p');
	const button = document.createElement('button');

	const myImage = new Image();

	myImage.src = gundamImage;
	h1.textContent = 'Gundam Cafe';
	para.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		Donec facilisis massa eget mauris dictum ultrices in id 
		justo. Suspendisse vel ornare quam. Vestibulum ante ipsum 
		primis in faucibus orci luctus et ultrices posuere cubilia
		curae; Donec a tempor eros. Ut viverra laoreet leo at 
		aliquet. Aenean a varius nisl. Interdum et malesuada fames
		ac ante ipsum primis in faucibus. Maecenas ut risus vel
		ante dictum euismod. Sed malesuada tortor libero, ut 
		hendrerit augue rutrum aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		Donec facilisis massa eget mauris dictum ultrices in id 
		justo. Suspendisse vel ornare quam. Vestibulum ante ipsum 
		primis in faucibus orci luctus et ultrices posuere cubilia
		curae; Donec a tempor eros. Ut viverra laoreet leo at 
		aliquet. Aenean a varius nisl. Interdum et malesuada fames
		ac ante ipsum primis in faucibus.`;
	button.textContent = 'Menu';

	div.classList.add('contentContainer');
	div1.classList.add('contentContainer__first');
	div2.classList.add('contentContainer__second');
	div3.classList.add('contentContainer__third');
	myImage.classList.add('contentContainer__first--image');
	button.classList.add('contentContainer__third--button');

	div1.appendChild(myImage);
	div2.appendChild(h1);
	div2.appendChild(para);
	div3.appendChild(button);
	div.appendChild(div1);
	div.appendChild(div2);
	div.appendChild(div3);

	return div;
};
