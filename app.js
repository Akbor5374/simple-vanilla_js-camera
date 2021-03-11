// Author: Akbor Hossain Rifat.
// Topic: Simple web camera.
// Description: First I access webcam next I take a picture and next i filter the picture with javascript.
// Date: 10/03/2021.

async function getWebCam(){
    try{
        const videoSrc = await navigator.mediaDevices.getUserMedia({video:true});
        let video = document.getElementById("video");
        video.srcObject=videoSrc;
    }catch(e){
        alert(`${e.message}. Please Allow Use Your Camera`);
        location.reload();
    }
}
getWebCam();

const capture = document.getElementById("capture");
const canvas  = document.getElementById("canvas");
const saveImg  = document.getElementById("saveImg");
const placeholderImage  = document.getElementById("placeholderImage");
const context = canvas.getContext('2d');

capture.addEventListener("click", () => {
    placeholderImage.style.display = "none";
    canvas.style.display = "block";
    context.drawImage(video,0,0,650,450);
    saveImg.style.display = "block";
});

const saveImageButton = document.getElementById("saveImg");
saveImageButton.addEventListener("click", () => {
    let link = document.createElement('a');
    link.download = 'webScreen.jpg';
    link.href = document.getElementById('canvas').toDataURL()
    link.click();
});