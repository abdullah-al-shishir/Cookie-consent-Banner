        
        
        
        
        // const cookieBanner = document.getElementById('cookieBanner');
        // const acceptButton = document.getElementById('acceptCookies');
        // const closeButton = document.getElementById('closeBanner');

        // /**
        //  * Hides the cookie banner.
        //  */
        // function hideBanner() {
        //     cookieBanner.classList.remove('show');
        // }

        // /**
        //  * Shows the cookie banner.
        //  */
        // function showBanner() {
        //     cookieBanner.classList.add('show');
        // }

        // // Event listener for the "Accept" button
        // acceptButton.addEventListener('click', () => {
        //     hideBanner();
        // });

        // // Event listener for the "Close" button
        // closeButton.addEventListener('click', () => {
        //     hideBanner();
        // });

        // // Show the banner immediately on page load (no cookie check)
        // window.onload = () => {
        //     showBanner();
        // };



const cookieBanner=document.getElementById('cookieBanner');
const acceptButton=document.getElementById('acceptCookies');
const closeButton=document.getElementById('closeBanner');

function hideBanner(){
    cookieBanner.classList.remove("show")
}


function showBanner(){
    cookieBanner.classList.add('show');
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