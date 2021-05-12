// Your code here
const dodger = document.getElimentById("dodger")
    dodger.style.backgroundColor = "#FF69B4"; 

document.addEventListener("keyDown", function(event){
    if (event.key === "arrowLeft"){
        moveDodgerLeft()
    } 
    if (event.key === "arrowRight"){
        moveDodgerRight()
    }
})
function moveDodgerLeft(event){
    let dodgeLeft = dodger.style.left.replace("px","")
    let moveLeft = parseInt(dodgeLeft,10)
    if(moveLeft > 0){
        dodger.style.left = `${moveLeft - 1}px`
    }
}
function moveDodgerRight(event){
    let dodgeRight = dodger.style.left.replace("px","")
    let moveRight = parseInt(dodgeRight,10)
    if(moveRight > 0 && moveRight < 360){
        dodger.style.left = `${moveRight + 1}px`
    }
}