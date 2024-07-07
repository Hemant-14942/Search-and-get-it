let input = document.querySelector(".input");

// let per="";
// data.forEach(function(ele){
//     per+=`<div class="person p-2 flex  w-1/6 h-1/2 flex-col justify-center items-center" id="person1">
//                 <div class="img  w-[10vw] h-[10vw]  rounded-[50%]  overflow-hidden ">
//                     <img class="imgp object-cover w-full h-full "src="${ele.src}" alt="person1">
//                 </div>
//                 <h2 class="text-[1.7vw] text-white ">${ele.name}</h2>     
//             </div> `
// })
// document.querySelector(".people").innerHTML=per;

input.addEventListener("input",function(){
    var match = data.filter(function(e){
        return e.name.toLowerCase().startsWith(input.value.toLowerCase());
    })
    let newusers = "";
    match.forEach(function(ele){
    newusers+=`<div class="person p-2 flex  w-1/3 h-1/2  sm:w-1/6 sm:h-1/2 flex-col justify-center items-center" id="person1">
                <div class="img  w-[16vw] h-[16vw] sm:w-[10vw] sm:h-[10vw] rounded-[50%]  overflow-hidden ">
                    <img class="imgp object-cover w-full h-full "src="${ele.src}" alt="person1">
                </div>
                <h2 class="text-[3vw] text-white sm:text-[2vw]">${ele.name}</h2>     
            </div> `
})
if(input.value===""){
    document.querySelector(".people").innerHTML = "";
}else{
    document.querySelector(".people").innerHTML=newusers;
}
})
