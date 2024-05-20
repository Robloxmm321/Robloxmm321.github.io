document.querySelector('.play-button').addEventListener('click', function() {
    document.querySelector('.popup').classList.add('show-popup');
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.popup').classList.remove('show-popup');
});
