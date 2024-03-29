// Fonctionnalité 1 :
let footer = document.querySelector('footer');

let clique = 0;

footer.addEventListener("click", function () {
    clique++;
    console.log(`click number ${clique}`);
});

// Fonctionnalité 2 :

let navB = document.getElementById("navbarHeader");
let burgerBtn = document.querySelector('.navbar-toggler');

burgerBtn.addEventListener("click", function () {

    navB.classList.toggle("collapse")
});

// Fonctionnalité 3 :
let card1 = document.getElementsByClassName("col-md-4")[0];
let editButton = card1.querySelector('.btn-outline-secondary');

editButton.addEventListener("click", function () {

    card1.style.color = 'red';
});

// Fonctionnalité 4 :

let card2 = document.getElementsByClassName("col-md-4")[1];
let editButton2 = card2.querySelector('.btn-outline-secondary');

editButton2.addEventListener("click", function () {
    if (card2.style.color === 'green') {

        card2.style.color = '';
    }
    else {
        card2.style.color = 'green';
    }
});

// Fonctionnalité 5 :

// j'ai mis le header pour une question de simplicité ( mais tu met le .navbar ca marche)
let navbar = document.querySelector('header');

let bootstrapLink = document.querySelector('link');

function menuDisable() {
    if (bootstrapLink.disabled === true) {
        bootstrapLink.disabled = false;
    }
    else bootstrapLink.disabled = true;
};

navbar.addEventListener("dblclick", menuDisable);

// Fonctionnalité 6 :
let cardView = document.querySelectorAll('.card');

cardView.forEach(function (card) {
    let viewBtn = card.querySelector('.btn-success');

    viewBtn.addEventListener('mouseover', function () {
        card.querySelector('.card-text').style.visibility = 'hidden';
        card.querySelector('img').style.scale = '20%';
    })

    viewBtn.addEventListener('mouseout', function () {
        card.querySelector('.card-text').style.visibility = 'visible';
        card.querySelector('img').style.scale = '';
    });
});

// Fonctionnalité 7 :
let nextBtn = document.querySelector('.btn-secondary');

nextBtn.addEventListener('click', function () {
    let cardContainer = document.querySelector('.album .row');
    let lastCard = cardContainer.lastElementChild;
    cardContainer.insertBefore(lastCard, cardContainer.firstElementChild);
});

// Fonctionnalité 8 :

let leftBtn = document.querySelector('.btn-primary');

leftBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let cardContainer = document.querySelector('.album .row');
    let lastCard = cardContainer.firstElementChild;
    cardContainer.insertBefore(lastCard, cardContainer.lastElementChild.nextSibling);

});

// Fonctionnalité 9 :

let logo = document.querySelector('.navbar-brand');

logo.addEventListener('keypress', function (event) {
  if (event.key === 'b') {
    document.body.classList.remove('col-4', 'offset-md-4', 'offset-md-8');
  } else if (event.key === 'a') {
    document.body.classList.remove('offset-md-4', 'offset-md-8');
    document.body.classList.add('col-4');
  } else if (event.key === 'y') {
    document.body.classList.remove('offset-md-8');
    document.body.classList.add('col-4', 'offset-md-4');
  } else if (event.key === 'p') {
    document.body.classList.remove('offset-md-4');
    document.body.classList.add('col-4', 'offset-md-8');
  }
});





