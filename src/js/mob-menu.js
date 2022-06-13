(() => {
    const menuBtnRef = document.querySelector("[data-mob-menu-open]");
    
    const mobileMenuRef = document.querySelector("[data-menu]");
    const btn = document.querySelector('[data-mob-menu-close]');
    const back = document.querySelector("[data-mob-back]");

    
    btn.addEventListener('click', function onClick(event) {
        mobileMenuRef.classList.remove('is-open');
    });
  
    menuBtnRef.addEventListener("click", () =>  {
      
  
      menuBtnRef.classList.toggle("is-open");
       
      mobileMenuRef.classList.add("is-open");
    });
    menuBtnRef.addEventListener('click', function onClick(event)  {
    
      back.classList.toggle("is-hidden");
     
    });
    btn.addEventListener('click', function onClick(event)  {
    
      back.classList.toggle("is-hidden");
     
    });
  })();