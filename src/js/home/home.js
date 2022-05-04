import { navbarComponent } from '../reusableComponents/navbarSection';
import { footerComponent } from '../reusableComponents/footerSection';
import { contentComponents } from '../home/contentSection';

export const homeComponents = () => {
	document.body.appendChild(navbarComponent());
	document.body.appendChild(contentComponents());
	document.body.appendChild(footerComponent());
};
