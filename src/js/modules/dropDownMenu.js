const dropDownMenu = () => {
	const columns = document.querySelectorAll('.footer__right_col');
  const titleButtons = document.querySelectorAll('.footer__right_title');
  const lists = document.querySelectorAll('.footer__right_list');
  
  titleButtons.forEach((btn, i) => {
    const activeClass = 'active';
    const removeStyle = `height: 0px; padding: 0px`;
    const listHeight = lists[i].scrollHeight;

    btn.addEventListener('click', () => {
      if (columns[i].classList.contains(activeClass)) {
        columns[i].classList.remove(activeClass);
        lists[i].style.cssText = removeStyle;
      } else {
        columns.forEach(col => col.classList.remove(activeClass))
        lists.forEach(list => list.style.cssText = removeStyle)

        columns[i].classList.add(activeClass);
        lists[i].style.cssText = `height: ${listHeight + 20}px; padding: 10px 0px`;
      }
    })
  })
}

export default dropDownMenu;