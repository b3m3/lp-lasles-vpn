const menu = () => {
  const header = document.querySelector('.header');

  header.addEventListener('click', e => {
    const target = e.target;

    if (target && target.closest(`.menu-hamburger`)) {
      const menuButton = header.querySelector('.menu-hamburger');
      const navbar = header.querySelector('.header__box');

      const activeClass = 'active';

			if (menuButton.classList.contains(activeClass)) {
        menuButton.classList.remove(activeClass);
        navbar.classList.remove(activeClass);
        document.body.style = '';
			} else {
        menuButton.classList.add(activeClass);
        navbar.classList.add(activeClass);
        document.body.style.cssText = 'overflow: hidden'
			}
		}
  })
}

export default menu;