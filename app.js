let counter = document.querySelector(".count")
let minsbtn = document.querySelector(".mins");
let resetbtn = document.querySelector(".reset");
let plusbtn = document.querySelector(".plus");
let count = 0;

minsbtn.addEventListener("click",()=>{
    if(count > 0){
        count--;
        counter.innerText = count;
    }

})
resetbtn.addEventListener("click",()=>{
    if(count > 0 ){
        count = 0 ;
        counter.innerText = count;
    }
})
plusbtn.addEventListener("click",()=>{
        count++;
        counter.innerText = count;
})