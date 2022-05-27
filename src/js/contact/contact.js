import { navbarComponent } from '../reusableComponents/navbarSection';
import { footerComponent } from '../reusableComponents/footerSection';
import { contentComponents } from './contentContact';
import { funcEvent } from '../eventListener/index';

export const contactComponents = () => {
	document.body.appendChild(navbarComponent());
	document.body.appendChild(contentComponents());
	document.body.appendChild(footerComponent());
	funcEvent();
};
