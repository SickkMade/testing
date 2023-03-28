function changeNavColor(){
    const nav = document.querySelector(".desktopNav");
    const logoImg = document.querySelector("#logo-nav");
    const scrollPosition = window.scrollY;

    if(scrollPosition <= 0){
        nav.classList.remove('scrollNav');
        nav.classList.remove('fixed');
        logoImg.src = "https://www.pacificdentalservices.com/etc/designs/corp/clientlibs_base/images/logo_whiteBlue.svg";
    }
    else{
        nav.classList.add('scrollNav');
        nav.classList.add('fixed');
        logoImg.src = "https://www.pacificdentalservices.com/etc/designs/corp/clientlibs_base/images/logo_grey.svg";
    }

}

function navMouseOver(){
    const nav = document.querySelector(".desktopNav");
    const logoImg = document.querySelector("#logo-nav")
    nav.classList.add('scrollNav');
    logoImg.src = "https://www.pacificdentalservices.com/etc/designs/corp/clientlibs_base/images/logo_grey.svg";
}


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', navMouseOver);
});
document.querySelector('.desktopNav').addEventListener('mouseleave', changeNavColor)
window.addEventListener('scroll', changeNavColor);