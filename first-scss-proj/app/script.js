function toggleMenu() {
    let menu = document.getElementsByClassName('header')[0];
    let icon = menu.getElementsByClassName('burger-icon')[0];

    menu.classList.toggle('open', !menu.classList.contains('open'));

    if(icon.classList.contains('fa-navicon')) {
        icon.classList.add('fa-close');
        icon.classList.remove('fa-navicon');
    } else {
        icon.classList.remove('fa-close');
        icon.classList.add('fa-navicon');
    }
}
