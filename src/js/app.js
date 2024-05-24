import menu from './modules/menu.js';
import marquee from './modules/marquee.js';
import dropDownMenu from './modules/dropDownMenu.js';
import slider from './modules/slider.js';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // navbar menu
  menu();
  // section sponsored
  marquee();
  // footer menu
  dropDownMenu();
  slider();
});