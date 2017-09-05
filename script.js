/**
 * Created by chery on 05/09/2017.
 */
//document.addEventListener('load', function () {
    var menu = document.querySelector('.menu');
    document.addEventListener('scroll', function () {
        if (window.pageYOffset > 17) {
            menu.style.paddingTop = '15px';
            menu.style.backgroundColor = 'rgba(0,0,0,0.6)';
            menu.style.position = 'fixed';
        }
        else {
            menu.style.paddingTop = '32px';
            menu.style.backgroundColor = 'transparent';
            menu.style.position = 'absolute';
        }
    })
//})