

document.getElementById("bold-text").addEventListener("click",function(){

    const textValue= document.getElementById("text-box");
  
    if(textValue.style.fontWeight !== "bold" ){
          textValue.style.fontWeight = "bold";
        
    }else{

        textValue.style.fontWeight = "normal";
    }

    



});
document.getElementById("italic").addEventListener("click",function(){

     const textValue = document.getElementById("text-box");

     if (textValue.style.fontStyle !== "italic") {
        
       textValue.style.fontStyle = "italic";
     } else {
       textValue.style.fontStyle = "normal";
     }

    

    
});
document.getElementById("underline").addEventListener("click",function(){
     const textValue = document.getElementById("text-box");

     if (textValue.style.textDecoration!== "underline") {
       textValue.style.textDecoration = "underline";
     } else {
       textValue.style.textDecoration = "none";
     }

    
});
document.getElementById("align-left").addEventListener("click",function(){
     const textValue = document.getElementById("text-box");

     if (textValue.style.textAlign !== "left") {
       textValue.style.textAlign = "left";
     } else {
       
     }


    
});
document.getElementById("view-list").addEventListener("click",function(){

    const textValue = document.getElementById("text-box");

    if (textValue.style.textAlign !== "center") {
      textValue.style.textAlign = "center";
    } else {
    }

    
});
document.getElementById("right-text-align").addEventListener("click",function(){
const textValue = document.getElementById("text-box");

if (textValue.style.textAlign !== "right") {
  textValue.style.textAlign = "right";
} else {
}
    
});

document.getElementById("color-btn").addEventListener("input", function(even){
const textValue = document.getElementById("text-box");

textValue.style.color=even.target.value;



});
document.getElementById("font-btn").addEventListener("keyup", function(even){
const textValue = document.getElementById("text-box");

console.log(even.target.value);

textValue.style.fontSize = even.target.value + "px";





})



