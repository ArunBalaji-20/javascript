//with Tranisition effect

document.addEventListener("DOMContentLoaded", function() {
    const bigImage = document.querySelector('.big-box img');

    var numberOfImages = document.querySelectorAll('.images').length;

    for (let i = 0; i < numberOfImages; i++) {
        document.querySelectorAll('.images')[i].addEventListener('click', function() {
            var imgSrc = this.querySelector('img').src; // Get clicked image src

            // Apply fade-out effect
            bigImage.style.opacity = 0;

            setTimeout(() => {
                bigImage.src = imgSrc; // Change image source
                bigImage.style.opacity = 1; // Fade in new image
            }, 1000); // Delay matches transition duration
        });
    }
});

//without tranisition effect

// document.addEventListener("DOMContentLoaded",function(){
//     // const bigImage=document.getElementById('.big-box img')
// })

// var numberOfImages=document.querySelectorAll('.images').length
// // console.log(numberOfImages)

// for(let i=0;i<numberOfImages;i++){
//     document.querySelectorAll('.images')[i].addEventListener('click',function(){
//         var imgSrc = this.querySelector('img').src; // Get the 'src' attribute of the img inside the clicked div
//         // console.log(imgSrc);
//         const replace=document.querySelector('.big-box')
//         replace.querySelector('img').src=imgSrc

//  
//     })
// }