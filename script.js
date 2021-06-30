//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = ()=>{ //once window loaded
filterItem.onclick = (selectedItem)=>{//when user clicked on filterItem div
if(selectedItem.target.classList.contains("item")){//if user click element has .item class
filterItem.querySelector(".active").classList.remove("active");
selectedItem.target.classList.add("active");
let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of the user selected item and storing in a filtername variable
filterImg.forEach((image)=>{
let filterImages = image.getAttribute("data-name"); //getting image data-name value
if ((filterImages == filterName) || filterName == "all"){
image.classList.add("show");
} else {
image.classList.add("hide");
image.classList.remove("show");
}

});


}




}

}