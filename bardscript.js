
const cookieBanner=document.getElementById('cookieBanner');
const acceptButton=document.getElementById('acceptCookies');
const closeButton=document.getElementById('closeBanner');

const showBanner=()=>{
    cookieBanner.classList.add('show')
}

const hideBanner=()=>{
    cookieBanner.classList.remove('show')
}
 

acceptButton.addEventListener('click',()=>{
hideBanner();
});

closeButton.addEventListener('click',()=>{
hideBanner();
});

window.onload=()=>{
    showBanner();
}
