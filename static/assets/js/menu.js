//Menu
let dropdownBtn = document.querySelectorAll('.dropdown');
// let dropdownMenu = document.querySelector('.dropdown__menu');

dropdownBtn.forEach((el) => {
    let dropdownMenu = el.querySelector('.dropdown__menu');
    el.addEventListener('mouseleave', e =>{
        dropdownMenu.classList.add('dropdown__menu--hide');
        e.preventDefault();
    });
    el.addEventListener('mouseenter', e =>{
        dropdownMenu.classList.remove('dropdown__menu--hide');
        e.preventDefault();
    });
});

// let el = document.getElementsByClassName('dropdown');
// for(var i=0; i<el.length; i++) {
//     el[i].addEventListener('mouseenter', () => { showSub(); console.log($(this));}, false);
//     el[i].addEventListener('mouseleave', hideSub, false);
//     el[i].addEventListener('click', (e) => {
//         e.preventDefault();
//     }, false);
// }

// function showSub() {
//     console.log(this);
//     if(this.children.length>1 && $('.dropdown__menu').childElementCount) {
//         this.children[1].style.height = 'auto';
//         this.children[1].style.overflow = 'visible';
//         this.children[1].style.opacity = '1';
//         this.children[1].style.display = 'block';
//     } else {
//         return false;
//     }
// }

// function hideSub() {
//     if(this.children.length>1) {
//         this.children[1].style.height = '0px';
//         this.children[1].style.overflow = 'hidden';
//         this.children[1].style.opacity = '0';
//     } else {
//         return false;
//     }
// }

// function smallMenu(obj){
//     obj.classList.toggle('nav-list--show');
// };

// //PopUps
// var signin = document.querySelector(".sign-in");
// var signup = document.querySelector(".sign-up");
// function togglePopUp(obj) {
//   obj.classList.toggle('pop-up-sign--hidden');
// };