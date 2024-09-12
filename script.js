
//navbar fixed
window.onscroll =function(){
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;
    console.log(fixedNav)

    if (window.scrollY > fixedNav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}


function onSubmit() {
 
    let input = document.querySelectorAll("input")
    for(let item of input) {
        item.value = " "
    }
    let textarea = document.querySelector("textarea")
    console.log(textarea)
    textarea.value = ""

    setTimeout(() => {
        alert("Pesan Berhasil Terkirim!")

    }, 300)
}

document.addEventListener("DOMContentLoaded", function () {
    const pageContent = document.querySelector("#animasihome");
    pageContent.classList.remove("opacity-0", "-translate-y-10");
    pageContent.classList.add("opacity-100", "translate-y-0");
});

//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu =document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})