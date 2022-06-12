"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const btnGallery = document.querySelector(".main__button");
  const arrowsAkkardion = document.querySelectorAll(".confidance__item");
  const modal = document.querySelector(".modal");
  const openModal = document.querySelector(".main__send-title");
  const clouseModal = document.querySelector(".modal__clouse-btn");
  const sendForm = document.querySelector(".modal_btn");
  const clouseResult = document.querySelector(".modal_clouse-result");
  const screenWidth = window.screen.width
 
  btnGallery.addEventListener("click", () => {
    const gallery = document.querySelector(".gallery-opacity");
    if (gallery.classList.contains("none")) {
      gallery.classList.remove("none");
      btnGallery.innerHTML = "свернуть галерею";
    } else {
      gallery.classList.add("none");
      btnGallery.innerHTML = "показать еще работы";
    }
  });

  
  arrowsAkkardion.forEach((item) => {
    item.addEventListener("click", () => {
      const text = item.querySelector(".confidance__description");
      const arrow = item.querySelector(".confidance__item-img");
      if (text.classList.contains("none")) {
        text.classList.remove("none");
        arrow.style.cssText = " transform: rotate(-90deg);";
      } else {
        text.classList.add("none");
        arrow.style.cssText = " transform: rotate(0deg);";
      }
    });
  });

  openModal.addEventListener("click", () => {
    if (modal.classList.contains("none")) {
      modal.classList.remove("none");
    }
  });
  clouseModal.addEventListener("click", () => {
    if (!modal.classList.contains("none")) {
      modal.classList.add("none");
    }
  });

 
  sendForm.addEventListener("click", () => {
    const input = document.querySelectorAll("input");
    const modalForm = document.querySelector(".modal__wrapper");
    const modalResult = document.querySelector(".modal__wrapper-result");
    let flag = true;
    input.forEach((item) => {
      if (item.value == " " || item.value.length < 5) {
        item.style.cssText = "border-bottom:red 1px solid";
        flag = false;
      } else {
        item.style.cssText = "border-bottom:1px solid #777777;";
      }
    });
    if (flag) {
      modalForm.classList.add('none')
       modalResult.classList.remove('none')
    }
     clouseResult.addEventListener("click", () => {
      modal.classList.add('none')
     });
  });
  const burger = document.querySelector('.header__burger')
    burger.addEventListener('click',()=>{
      burger.classList.toggle('active')
      const burgerMenu = document.querySelector('.navigation')
      burgerMenu.classList.toggle('navigation-burger')
      // if(burgerMenu.classList.contains('navigation-burger')){
      //   burgerMenu.classList.remove('navigation-burger')
        
      // }else{
      //   burgerMenu.classList.add('navigation-burger')
        
      // }
    })
  

});
