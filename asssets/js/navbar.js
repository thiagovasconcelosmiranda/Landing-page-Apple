AOS.init();

document.querySelector('.menu_mobile').addEventListener('click', () => {
  document.querySelectorAll('.nav-primary').forEach(item => {
    let menu = item.querySelector('ul .ul-not-flex');

    if (menu.style.display == 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }

  });
});


document.querySelector('.visible-menu-secondary').addEventListener('click', () => {
  document.querySelectorAll('.nav-secondary').forEach(item => {
    let menu = item.querySelector('ul');
    if (menu.style.display == "block") {

      menu.style.display = "none";
      item.style.display = "flex";
    } else {
      menu.style.display = "block";
      item.style.display = "block";
    }
  });
})
