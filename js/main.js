

const menu_page=document.querySelector(".menu-page");
const menu_drop=document.querySelector(".menu-drop");
const close=document.querySelector(".close");
menu_drop.addEventListener("click",statrt_menu);
function statrt_menu() {
    menu_page.classList.add("active");
}
close.addEventListener("click",close_MENU);
function close_MENU() {
    menu_page.classList.remove("active");
}

