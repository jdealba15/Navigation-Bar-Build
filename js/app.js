  const toggleBtn = document.getElementById('toggle-nav-button');
  const menuItems = document.querySelector('.menu-items');

  toggleBtn.addEventListener('click', toggleNav);

  function toggleNav() {
      menuItems.classList.toggle('show-menu-items');
  }
  
  toggleBtn.addEventListener('click', changeBtn);
  
  function changeBtn() {
      if (document.getElementById("hmbg").className === "fas fa-bars") {
        document.getElementById("hmbg").className = "fa-solid fa-x";
        } else {
        document.getElementById("hmbg").className = "fas fa-bars";
       }
  }