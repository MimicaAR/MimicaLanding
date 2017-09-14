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
    });



    var response;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            response = JSON.parse(this.responseText);
            console.dir(response);

            for (var i = 0; i < response.length; i++) {
                var a = document.createElement("a");
                var div = document.createElement("div");
                var left = document.createElement("div");
                var right = document.createElement("div");
                var clearer = document.createElement("div");
                var title = document.createElement("span");
                var text = document.createElement("p");
                var img = document.createElement("img");
                div.className = "news-block";
                left.className = "block__left";
                right.className = "block__right";
                clearer.className = "clearer";
                title.innerHTML = response[i].name;
                title.className = "news-title";
                text.innerHTML = response[i].text.length > 300 ? response[i].text.slice(0, 300) + "..." : response[i].text;
                text.className = "news-text";
                img.setAttribute("src", "images/" + response[i].image);
                left.appendChild(img);
                right.appendChild(title);
                right.appendChild(text);
                div.appendChild(left);
                div.appendChild(right);
                div.appendChild(clearer);
                a.appendChild(div);
                a.setAttribute("href", response[i].link);
                document.querySelector("#news .block__content").appendChild(a);
                var prop = (document.querySelector(".news-block").clientWidth * 0.4) / document.querySelector(".news-block").clientHeight;
                img.className = (img.width / img.height > prop) ? 'tall' : 'wide';
            }
        }
    };
    xmlhttp.open("GET", "server/getNews.php", true);
    xmlhttp.send();



});