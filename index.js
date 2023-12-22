let likeEl=document.getElementById("like");
let iconEl=document.getElementById("icon");
let imageEl=document.getElementById("image");
isLiked=false


function like(){
    if (isLiked===false){
        imageEl.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        iconEl.style.color="#0967d2";
        likeEl.style.backgroundColor="#0967d2"
        likeEl.style.color="#ffffff"
        isLiked=true
    }
    else{
        imageEl.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        iconEl.style.color="#cbd2d9";
        likeEl.style.backgroundColor="#cbd2d9"
        likeEl.style.color="#9aa5b1";
        isLiked=false
    }

}