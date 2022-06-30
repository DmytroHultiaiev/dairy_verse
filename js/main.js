// Коректная работа переключателя цены


const prices_checkbox_label = document.getElementById('prices_checkbox_label');
const first_move = document.getElementById('first_move');
const second_move = document.getElementById('second_move');

first_move.addEventListener('click', function(){
    prices_checkbox_label.classList.remove('active');
    first_move.classList.remove('active');
    second_move.classList.remove('active');
})

second_move.addEventListener('click', function(){
    prices_checkbox_label.classList.add('active');
    first_move.classList.add('active');
    second_move.classList.add('active');
})

const prices_checkbox_label2 = document.getElementById('prices_checkbox_label2');
const first_move2 = document.getElementById('first_move2');
const second_move2 = document.getElementById('second_move2');
const prices_value2 = document.getElementById('prices_value2');

first_move2.addEventListener('click', function(){
    prices_checkbox_label2.classList.remove('active');
    first_move2.classList.remove('active');
    second_move2.classList.remove('active');
    prices_value2.innerHTML = '1.999 РУБ';
})

second_move2.addEventListener('click', function(){
    prices_checkbox_label2.classList.add('active');
    first_move2.classList.add('active');
    second_move2.classList.add('active');
    prices_value2.innerHTML = '23.988 РУБ';
})

const prices_checkbox_label3 = document.getElementById('prices_checkbox_label3');
const first_move3 = document.getElementById('first_move3');
const second_move3 = document.getElementById('second_move3');
const prices_value3 = document.getElementById('prices_value3');

first_move3.addEventListener('click', function(){
    prices_checkbox_label3.classList.remove('active');
    first_move3.classList.remove('active');
    second_move3.classList.remove('active');
    prices_value3.innerHTML = '2.999 РУБ';
})

second_move3.addEventListener('click', function(){
    prices_checkbox_label3.classList.add('active');
    first_move3.classList.add('active');
    second_move3.classList.add('active');
    prices_value3.innerHTML = '35.988 РУБ';
})

// Плавная анимация к якорю

document.querySelectorAll('a.link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        const href = this.getAttribute('href').substring(1)
        const scrollTarget = document.getElementById(href)
        const topOffset = 130
        const elementPosition = scrollTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition - topOffset

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth',
        })
    })
})


$(document).ready(function() {
    
    $('.nav_mobile_navigation').click(function(event){
        $('.nav_mobile_navigation, .nav_mobile_container').toggleClass('active');
        $('html').toggleClass('no_scroll');
    });

    $('.link').click(function(event){
        $('.nav_mobile_navigation, .nav_mobile_container').removeClass('active');
        $('html').removeClass('no_scroll');
    });

});






// const animItems = document.querySelectorAll('.anim-items');

// if(animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll);
//     function animOnScroll() {
//         for (let index = 0; index < animItems.length; index++){
//             const animItem = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;

//             if (animItemHeight > window.innerHeight) {
//                 animItemHeight = window.innerHeight - window.innerHeight / animStart;
//             }

//             if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset - animItemHeight)) {
//                 animItem.classList.add('_active');
//             } else {
//                 animItem.classList.remove('_active');
//             }


//         }
//     }
// }

document.addEventListener('DOMContentLoaded', () => {
    const advantageBlock = document.getElementById('advantage');

    window.addEventListener('scroll', () => {
        // const scrollTop = window.scrollY;
        let advantageHeight = advantageBlock.offsetHeight / 2;
        const animItemOffset = advantage.getBoundingClientRect();
        console.log(animItemOffset.top);
        advantageMaxTop = 0 + advantageHeight ;
        advantageMaxBottom = 0 - advantageHeight;
        const advantage_elipse1 = document.getElementById('advantage_elipse1');
        const advantage_elipse1_href = document.getElementById('advantage_elipse1_href');
        const advantage_elipse2 = document.getElementById('advantage_elipse2');
        const advantage_elipse2_href = document.getElementById('advantage_elipse2_href');
        const advantage_elipse3 = document.getElementById('advantage_elipse3');
        const advantage_elipse3_href = document.getElementById('advantage_elipse3_href');
        const main_circle = document.getElementById('main_circle');

        setTimeout(function() {

            if(animItemOffset.top > advantageMaxBottom && animItemOffset.top < advantageMaxTop) {
                advantage_elipse1.classList.add('active');
                advantage_elipse1_href.classList.add('active');
            } else {
                advantage_elipse1.classList.remove('active')
                advantage_elipse1_href.classList.remove('active')
            }

        }, (100));

        setTimeout(function() {

            if(animItemOffset.top > advantageMaxBottom && animItemOffset.top < advantageMaxTop) {
                advantage_elipse2.classList.add('active');
                advantage_elipse2_href.classList.add('active');
            } else {
                advantage_elipse2.classList.remove('active')
                advantage_elipse2_href.classList.remove('active')
            }

        }, (700));

        setTimeout(function() {

            if(animItemOffset.top > advantageMaxBottom && animItemOffset.top < advantageMaxTop) {
                advantage_elipse3.classList.add('active');
                advantage_elipse3_href.classList.add('active');
            } else {
                advantage_elipse3.classList.remove('active')
                advantage_elipse3_href.classList.remove('active')
            }

        }, (1500));

        setTimeout(function() {

            if(animItemOffset.top > advantageMaxBottom && animItemOffset.top < advantageMaxTop) {
                main_circle.classList.add('active');
            } else {
                main_circle.classList.remove('active');
            }

        }, (1800));
    })
});

document.addEventListener('DOMContentLoaded', () => {
    const advantageBlockMobile = document.getElementById('advantage_mobile');

    window.addEventListener('scroll', () => {
        let advantageHeightMobile = advantageBlockMobile.offsetHeight / 2;
        const animItemOffsetMobile = advantageBlockMobile.getBoundingClientRect();
        console.log(animItemOffsetMobile.top);
        advantageMaxTopMobile = 0 + advantageHeightMobile;
        advantageMaxBottomMobile = 0 - advantageHeightMobile;
        const mobileElipse = document.getElementById('advantage_mobile_img');

        if(animItemOffsetMobile.top > advantageMaxBottomMobile && animItemOffsetMobile.top < advantageMaxTopMobile) {
            mobileElipse.classList.add('active');
            console.log ('mobileElipse')
        } else {
            mobileElipse.classList.remove('active');
        }
    })
});


