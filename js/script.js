const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('.search-btn');
const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.navbar');

searchBtn.onclick = function(){
    searchBtn.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
    menuBtn.classList.remove('fa-times');
    navBar.classList.remove('active');
}

menuBtn.onclick = function(){
    menuBtn.classList.toggle('fa-times');
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove('active');
    navBar.classList.toggle('active');
}

window.onscroll = function(){
    searchForm.classList.remove('active');
    searchBtn.classList.remove('fa-times');
    menuBtn.classList.remove('fa-times');
    navBar.classList.remove('active');
}
