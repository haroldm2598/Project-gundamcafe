import { navbarComponent } from '../reusableComponents/navbarSection';
import { footerComponent } from '../reusableComponents/footerSection';

export const menuComponents = () => {
	document.body.appendChild(navbarComponent());
	document.body.appendChild(footerComponent());
};
