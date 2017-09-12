/**
 * Created by chery on 05/09/2017.
 */
window.addEventListener('load', function () {
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
    });

    var phone = document.querySelector('.block--phone img'),
        offsetTop = phone.offsetTop;
    var finalPos = document.querySelector('#project-items').offsetTop + document.querySelector('#project-items').clientHeight,
        phoneRect = phone.getBoundingClientRect();

    document.addEventListener('scroll', function () {
        var currentScrollPos = window.pageYOffset;

        if (currentScrollPos < offsetTop - 85) {
            phone.style.position = "relative";
            phone.style.top = 0;
            phone.style.left = 0;
        }
        else if (currentScrollPos > finalPos - phone.clientHeight - 85) {
            phone.style.position = "relative";
            phone.style.top = finalPos - phone.clientHeight - offsetTop + "px";
            phone.style.left = 0;
        }
        else {
            phone.style.position = "fixed";
            phone.style.top = 85 + "px";
            phone.style.left = phoneRect.left + "px";
        }
    })
})