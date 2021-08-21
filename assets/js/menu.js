const responsiveMenu = document.getElementById("burguer-responsive");
const menuNav= document.getElementById ("hide-ul");
let flag = false;

const toggleMenu = () => {
    if(flag){
    menuNav.classList.remove("responsive-ul-js");
    }else {
    menuNav.classList.add("responsive-ul-js");
    }
    flag= !flag;
}
responsiveMenu.onclick = toggleMenu;
