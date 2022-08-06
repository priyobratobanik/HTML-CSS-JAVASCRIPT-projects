var Slideshow = [
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1483/1191483-h-2663b248a285",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3277/1173277-h-0fcdda788fb9",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6183/1116183-h-288b3a4bcd56",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5210/1165210-h-a72a0a95461e",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7414/957414-h"
];

var showNum = document.querySelector("#randomNum");
var randNum = Math.floor(Math.random() * 4) + 1;
let i = 0;
var id;
var appendimg = document.getElementById('slideshow');
let img = document.createElement("img");
img.src = Slideshow[randNum];
appendimg.append(img);


function sliderStart() {

    id = setInterval(function() {
        if (i == Slideshow.length) {
            i = 0;
        }
        img.src = Slideshow[i];
        appendimg.append(img)
        i++;
    }, 1100);

}
appendimg.addEventListener("mouseleave", Hoverpdstart);

function Hoverpdstart() {
    sliderStart();

}
appendimg.addEventListener("mouseenter", Hoverpause);

function Hoverpause() {
    clearInterval(id);
}

window.addEventListener('load', function() {
    sliderStart();
});

//movie data ready
var movie = [{
        name: 'Baaghi 3',
        releaseDate: 2022,
        poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v',
        rating: 8.3,
    }, {
        name: 'HOusefull 4',
        releaseDate: 2022,
        poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3669/593669-v',
        rating: 7.7
    },
    {
        name: 'M.S.Dhoni',
        releaseDate: 2022,
        poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v',
        rating: 8.7
    },
    {
        name: 'Bhuj',
        releaseDate: 2022,
        poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4920/1044920-v-1ac34349aead',
        rating: 8.1
    },
    {
        name: 'Raid',
        releaseDate: 2022,
        poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/old_images/vertical/MOVIE/2789/1000212789/1000212789-v',
        rating: 7.1
    },
    {
        name: 'Badhai Ho',
        releaseDate: 2022,
        poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7309/177309-v',
        rating: 9.0
    },
    {
        name: '83',
        releaseDate: 2022,
        poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/608/1160608-v-8680160dd6b2',
        rating: 8.6
    },
    {
        name: 'Bajrangi Bhaijaan',
        releaseDate: 2022,
        poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/1777/1000071777/1000071777-v',
        rating: 8.1
    },
    {
        name: 'Kaun Pravin Tambe?',
        releaseDate: 2022,
        poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3825/1163825-v-425dd8e7501a',
        rating: 8.2
    },
];
localStorage.setItem('movies', JSON.stringify(movie));
var Getmovie = JSON.parse(window.localStorage.getItem('movies')) || [];

function display(Getmovie) {
    document.querySelector("#movies").innerHTML = "";
    Getmovie.map(function(el, i) {
        let box = document.createElement('div');
        let img = document.createElement('img');
        
        var another = document.createElement('div');
        another.setAttribute('class', "infosection")
        img.src = el.poster;
        let rate = document.createElement('p');
        rate.innerHTML = el.rating;
        let name = document.createElement('p');
        name.innerHTML = el.name;
        let date = document.createElement('p');
        date.innerHTML = el.releaseDate;
        let icon = document.createElement('i');
        icon.setAttribute('class', "fa-solid fa-star");
        another.append(rate, name, date)

        rate.append(icon);
        box.append(img, another)

        document.querySelector("#movies").append(box);
    });
}

//filter out
document.querySelector("#high").addEventListener("click", higholow);

function higholow() {
    var high = 'hl';
    handleratingSort(high);
}
document.querySelector("#low").addEventListener("click", lowtohig);

function lowtohig() {
    var low = 'lh';
    handleratingSort(low);

}

function handleratingSort(e) {
    if (e == "hl") {
        Getmovie.sort(function(a, b) {
            return b.rating - a.rating;
        });
        display(Getmovie);
        console.log(Getmovie)
    }

    if (e == "lh") {
        Getmovie.sort(function(a, b) {
            return a.rating - b.rating;
        });
        display(Getmovie);
    }
}
window.addEventListener("load", function() {
    display(Getmovie);
});