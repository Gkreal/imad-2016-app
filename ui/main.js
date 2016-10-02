console.log('Loaded!');
//Change the content of text
var element = document.getElementById('main-text');
element.innerHTML = 'New value';

//Move the image
var img = document.getElementById('madi');
var marginLeft =0;
function moveRight (){
    marginLeft = marginLeft+10;
    img.style.marginLeft- marginLeft+'px';
}
image.onclick = function(){
    var interval = setInterval(moveRight+100);
}