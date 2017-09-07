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
    var bodyRect = document.body.getBoundingClientRect(),
        finalPos = document.querySelector('#project-items').offsetTop + document.querySelector('#project-items').clientHeight,
        phoneRect = phone.getBoundingClientRect(),
        offset   = phoneRect.top - bodyRect.top,
        topPhone = offset - 85,
        lastScrollPos = window.pageYOffset,
        finished = false;

    console.log(finalPos);

    document.addEventListener('scroll', function () {
        var finishRect = document.querySelector('#project-items').getBoundingClientRect(),
            finish = finishRect.bottom - 1, // так надо
            currentScrollPos = window.pageYOffset,
            isScrollingDown = (currentScrollPos - lastScrollPos >= 0);
        if (finished && !(isScrollingDown) && phone.getBoundingClientRect().top > 85) {
            console.log(1);
            phone.style.position = 'fixed';
            phone.style.left = phoneRect.left + "px";
            phone.style.top = "85px";
            finished = false;
        }
        else if (finish < phone.getBoundingClientRect().bottom || window.pageYOffset >= finalPos - phone.clientHeight - 85) {
            console.log(2);
            console.log(phoneRect.bottom);
            phone.style.position = 'relative';
            phone.style.left = 0;
            phone.style.top = finalPos - phone.clientHeight - offsetTop + 'px';
            console.log(finalPos - phone.clientHeight - 85 + 'px');
            finished = true;
        }
        else if (currentScrollPos > topPhone && !(finished)) {
            console.log(3);
            phone.style.position = 'fixed';
            phone.style.left = phoneRect.left + "px";
            phone.style.top = "85px";
        }
        else {
            phone.style.position = 'relative';
            phone.style.left = 0;
            phone.style.top = 0;
        }

        lastScrollPos = currentScrollPos;

    })
})