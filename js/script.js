document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let ActualTheme = "dark";
const matchTema = window.matchMedia('(prefers-color-scheme: dark)').matches
if (matchTema == true){
    ActualTheme = "dark"
}else{
    ActualTheme = "light"
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',({ matches }) => {
    if (matches) {
        css.setAttribute('href', "css/dark_theme.css")
        ActualTheme = "dark"
    } else {
        css.setAttribute('href', "css/light_theme.css")
        ActualTheme = "light"
    }
})

function navbarOn(){
    const navbar = document.getElementById("navbar");
    navbar.style.display == "none" ? navbar.style.display = "inherit" : navbar.style.display = "none";
}
function changeTheme(){
    var css = document.getElementById('tema');
    var iconTheme = document.getElementById("iconTheme")
    if (ActualTheme == "dark"){
        css.setAttribute('href', "css/dark_theme.css")
        iconTheme.classList.replace("fa-sun", "fa-moon")
        ActualTheme = "light";
    }else{
        css.setAttribute('href', "css/light_theme.css")
        iconTheme.classList.replace("fa-moon", "fa-sun")
        ActualTheme = "dark"
    }
}
function smoothChangeTheme(){
    if (!document.startViewTransition){
        changeTheme();
        return;
    }

    const transition = document.startViewTransition(() => {
        changeTheme();
    });
}