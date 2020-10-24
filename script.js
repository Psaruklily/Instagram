/*GO TO THE MAIN PAGE OF INSTAGRAM*/
/*get link and contents*/
let logoInstagram = document.querySelector('.logo-Instagram');
let container = document.getElementById('container');
let mainContent = document.getElementById('main-content');
logoInstagram.onclick = changeContent;

function changeContent() {
    container.innerHTML = mainContent.innerHTML;
}



/*GO TO THE MY PROFILE*/
/*get link and contents*/
let iconUser = document.querySelector('.icon-user');
let aboutUser = document.getElementById('about-user');
iconUser.onclick = goToProfile;

function goToProfile() {
    container.innerHTML = aboutUser.innerHTML;
}



// EVENTS ON THE HEART
let heart = document.getElementsByClassName('far fa-heart')[0];

heart.addEventListener('click', fillHeart); //FILLING OG THE HEARTS BY THE COLOR
heart.addEventListener('click', openBox); // Visibl / invisibl div after onclick on the heart 

function fillHeart(icon) {
    this.classList.toggle("fas");
}

function openBox(box) {
    display = document.getElementById('box').style.display;
    if (heart.classList.contains("fas")) {
        document.getElementById('box').style.display = "block";
    } else {
        document.getElementById('box').style.display = "none";
    }
}


window.addEventListener('mouseup', function(event) {
    let box = this.document.getElementById('box');
    if (event.target !== box && event.target.parentNode !== box && event.target !== heart) {
        box.style.display = "none";
        if (heart.classList.contains("fas")) {
            heart.classList.toggle("fas");
        }
    }
});


/*FILLING OG THE HEARTS BY THE COLOR (like-heart)*/
function fillLikeHeart(icon) {
    icon.classList.toggle("fas");
}


/*ENABLED / DISABLED BUTTON IN THE COMMENT (after entered text into textarea)*/
function IsEmpty() {
    let textarea = document.getElementById('text');
    let button = document.getElementById('button');
    if (textarea.value !== "") {
        if (button.classList.contains("disabled")) {
            button.classList.remove("disabled");
        }
    } else {
        button.classList.add("disabled");
    }
}

//------------------------------------------------------------------
function showFormDialog() {
    // using plain JavaScript
    document.getElementById('DialogOverlay').style.display = 'block';

    // using jQuery
    // $('#DialogOverlay').css('display', 'block');
}

function closeDialog() {
    // using plain JavaScript
    document.getElementById("DialogOverlay").style.display = 'none';

    // using jQuery
    // $("#DialogOverlay").css('display', 'none');
}


let containerRandomImages1 = document.querySelector('.containerRandomImages1');
let containerRandomImages = document.querySelector('.containerRandomImages');
async function getRandomImages(container) {
    let response = await fetch('https://random.dog/woof.json');
    let result = await response.json();
    let image = document.createElement('img');
    image.src = result['url'];
    container.innerHTML += `
    <div class="col-md-4 image">
    <a target="_self" href="${result['url']}">
        <img src="${result['url']}"
            alt="#">
        <div class="icon-top-right">
            <i class="fas fa-square"></i>
        </div>
        <div class="icon-center">
            <div class="heart">
                <i class="fas fa-heart"></i>&nbsp;51
            </div>
            <div class="comment">
                <i class="fas fa-comment"></i>&nbsp;0
            </div>
        </div>
    </a>
</div>
    `
}

for (let i = 0; i < 40; i++) {
    getRandomImages(containerRandomImages);
}

for (let i = 0; i < 40; i++) {
    getRandomImages(containerRandomImages1);
}

//----------------------------------------------------------------------------------------------------------------


async function getInfoAboutRandomUsers(callback) {
    let response = await fetch('https://randomuser.me/api/?inc=gender,name,picture&results=10');
    let result = await response.json();
    callback(result);
}


getInfoAboutRandomUsers(boxUsersAfterClickOnHeart);



function boxUsersAfterClickOnHeart(result) {
    let boxAfterClHeart = document.querySelector('#box');

    for (let i = 0; i < result.results.length; i++) {
        boxAfterClHeart.innerHTML += `
    <a href="#">
    <div class="main-box">
        <div class="follow-like">
            <div class="follower-photo">
                <img src="${result.results[i].picture.large}"
                    class="rounded-circle" width="40px" alt="#">
            </div>
            <div class="follower-text">
                <p>Користувачу <span class="first-span">${result.results[i].name.first + result.results[i].name.last}</span> подобається ваша світлина. <span class="second-span">1 д.</span></p>
            </div>
        </div>
        <div class="image-like_or_button">
            <img src="https://instagram.flwo4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/29740323_930001410515401_1383917765047353344_n.jpg?_nc_ht=instagram.flwo4-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=1e8kS7z11RUAX-ZNVea&_nc_tp=24&oh=720c22f0a4bb57dbfbb33dc184804c46&oe=5FBE9145"
                width="43px" alt="#">
        </div>
    </div>
</a>
<hr class="line-box">
    `
    }
}