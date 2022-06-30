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


const defaultSelect = () => {
    const element = document.querySelector('.sign-up__select');
    const choices = new Choices(element, {
        searchEnabled: false,
    });
};

defaultSelect();


const maleGender = document.getElementById('radio_male');   
const femaleGender = document.getElementById('radio_female'); 
const manufacturerActivity = document.getElementById('radio_manufacturer'); 
const studyActivity = document.getElementById('radio_study'); 
const universityActivity = document.getElementById('radio_university'); 
const consultActivity = document.getElementById('radio_consult'); 
const companyActivity = document.getElementById('radio_company');
const checkboxPolitics = document.getElementById('checkbox_politics');

const userName = document.getElementById('name');
const surName = document.getElementById('surname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repitePassword = document.getElementById('repite-password');
const country = document.getElementById('country');
const city = document.getElementById('city');

const form1Button = document.getElementById('form1-button');
const form2Button = document.getElementById('form2-button');

const form = document.querySelector('form');

const firstForm = document.getElementById('first-form');
const secondForm = document.getElementById('second-form');
const thirdForm = document.getElementById('third-form');

const pointers = document.getElementsByClassName('sign-up__pointers__item');

let numer = 0;
let male = 0;

let numer2 = 0;
let activity = 0;

form.addEventListener('change', function() {

    if(numer >= 5 && male == 1) {
        form1Button.classList.add('active');

        form1Button.addEventListener('click', function(){
            firstForm.style.display = 'none';
            secondForm.style.display = 'block';

            console.log(pointers[0]);
            console.log(pointers[1]);

            pointers[0].classList.remove('active');
            pointers[1].classList.add('active');
        })
    }

    else {
        form1Button.classList.remove('active'); 
    }

    if(numer2 >= 2 && activity == 1 && checkboxPolitics.checked) {
        form2Button.classList.add('active');

        form2Button.addEventListener('click', function(){
            secondForm.style.display = 'none';
            thirdForm.style.display = 'block';

            pointers[1].classList.remove('active');
            pointers[2].classList.add('active');
        })
    }

    else {
        form2Button.classList.remove('active'); 
    }


})


maleGender.addEventListener('change', function(){

    male = 1;

})

femaleGender.addEventListener('change', function(){

    male = 1; 

})

manufacturerActivity.addEventListener('change', function(){

    activity = 1;

})

studyActivity.addEventListener('change', function(){

    activity = 1; 

})

universityActivity.addEventListener('change', function(){

    activity = 1;

})

consultActivity.addEventListener('change', function(){

    activity = 1; 

})

companyActivity.addEventListener('change', function(){

    activity = 1;

})

userName.addEventListener('change', function(){
    if (!userName.value) {
        userName.classList.remove('valid');
        userName.classList.add('invalid');
        numer--;
    }

    else {
        userName.classList.remove('invalid');
        userName.classList.add('valid');
        numer++;
    }
})

surName.addEventListener('change', function(){
    if (!surName.value) {
        surName.classList.remove('valid');
        surName.classList.add('invalid');
        numer--;
    }

    else {
        surName.classList.remove('invalid');
        surName.classList.add('valid');
        numer++;
    }
})

email.addEventListener('change', function(){
    if (!email.value) {
        email.classList.remove('valid');
        email.classList.add('invalid');
        numer--;
    }

    else {
        email.classList.remove('invalid');
        email.classList.add('valid');
        numer++;
    }
})

password.addEventListener('change', function(){
    if (!password.value) {
        password.classList.remove('valid');
        password.classList.add('invalid');
        numer--;
    }

    else {
        password.classList.remove('invalid');
        password.classList.add('valid');
        numer++;
    }
})

repitePassword.addEventListener('change', function(){
    if (!repitePassword.value) {
        repitePassword.classList.remove('valid');
        repitePassword.classList.add('invalid');
        numer--;
    }

    else {
        repitePassword.classList.remove('invalid');
        repitePassword.classList.add('valid');
        numer++;
    }
})

country.addEventListener('change', function(){
    if (!country.value) {
        country.classList.remove('valid');
        country.classList.add('invalid');
        numer2--;
    }

    else {
        country.classList.remove('invalid');
        country.classList.add('valid');
        numer2++;
    }
})

city.addEventListener('change', function(){
    if (!city.value) {
        city.classList.remove('valid');
        city.classList.add('invalid');
        numer2--;
    }

    else {
        city.classList.remove('invalid');
        city.classList.add('valid');
        numer2++;
    }
})


const btnClose = document.querySelectorAll('.sign-up__close__info__button');

for(let item of btnClose) {

    item.addEventListener('click', function(e){
        let btnDataAttr = e.target.getAttribute('data-password');
        let passwordInput  = document.querySelector('[data-password=' + btnDataAttr + ']');

        if (passwordInput.getAttribute('type') === 'password') {
            passwordInput.setAttribute('type', 'text');
            e.target.src = 'img/close_sign_eye.svg';
        }

        else {
            passwordInput.setAttribute('type', 'password');
            e.target.src = 'img/sign_eye.svg';
        }
    })
    
}

