// Target Element

const cookieBanner=document.getElementById('cookieBanner');
const acceptButton=document.getElementById('acceptCookies');
const closeButton=document.getElementById('closeBanner');

// Setting Parameter
const showBanner=()=>{
    cookieBanner.classList.add('show')
}

const hideBanner=()=>{
    cookieBanner.classList.remove('show')
}
// Done Setting Parameter 


// Adding Event
acceptButton.addEventListener('click',()=>{
hideBanner();
});

closeButton.addEventListener('click',()=>{
hideBanner();
});
//Finished Adding Event

window.onload=()=>{
    showBanner();
}
