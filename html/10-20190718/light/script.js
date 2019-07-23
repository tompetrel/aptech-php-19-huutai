var imageElement = document.getElementById('image');

function doiAnh(){
    if(imageElement.src.includes('lightOff')){
        imageElement.src = './lightOn.jpg';
    }else{
        imageElement.src = './lightOff.jpg';       
    }
}