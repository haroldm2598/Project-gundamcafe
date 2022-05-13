import { navbarComponent } from '../reusableComponents/navbarSection';
import { footerComponent } from '../reusableComponents/footerSection';
import { contentComponents } from '../menu/contentMenu';

export const menuComponents = () => {
	document.body.appendChild(navbarComponent());
	document.body.appendChild(contentComponents());
	document.body.appendChild(footerComponent());
};
