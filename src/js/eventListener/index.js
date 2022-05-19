export const funcEvent = () => {
	const navbarMenu = document.querySelector('#menuBar');
	const navbarList = document.querySelector('.navbarContainer__ul');
	const eventFunc = () => {
		navbarList.classList.toggle('hide');
	};
	navbarMenu.addEventListener('click', eventFunc);
	return navbarMenu;
};
