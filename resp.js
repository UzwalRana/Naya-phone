const burger = document.querySelector('#burgerid')
const navmenu = document.querySelector('.nav-menu')
const searchbutt = document.querySelector('.search-butt')
const navList = document.querySelector('.nav-list')

burger.addEventListener('click', ()=>{
    // navmenu.classList.toggel('v-case-resp');
    navList.classList.toggle('v-case-resp');
    searchbutt.classList.toggle('v-case-resp');    
    navmenu.classList.toggle('h-nav-resp');    
    console.log("hello")
})

