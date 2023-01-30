var img = document.getElementById('imag-carosel');

function changeImage(){
    if(img.src == "https://drive.google.com/uc?export=download&id=1n4Em5iVh-VA2DOj97BH_kbg7SjVZo8R1"){
        img.src = "https://drive.google.com/uc?export=download&id=1F2xEowWSHjDkrATmejN6MML92wliXVK4";
    } else {
        img.src = "https://drive.google.com/uc?export=download&id=1n4Em5iVh-VA2DOj97BH_kbg7SjVZo8R1";
    }
}

img.addEventListener("click",function(){

    changeImage();

})