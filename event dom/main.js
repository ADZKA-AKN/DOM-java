//   const text = document.querySelector("#text") 
//   const button = document.querySelector("#btn")
  
//   button.addEventListener("click", function(){
//     text.innerText = "di ubah dengan event listener"
//   })

  //mouse over & mouse out
//   const hover = document.querySelector("#muover")
  

//     hover.addEventListener("mouseover", function(){
//         hover.style.backgroundColor = "red"
//     })
//     hover.addEventListener("mouseout", function(){
//         hover.style.backgroundColor = "blue"
//     } )


//keydown

// const kata = document.querySelector("#input")

// kata.addEventListener("keydown", function(){
//     console.log("yang di tekan", event.key)
// })

//keyup
const kata2 =document.querySelector("#input2")

kata2.addEventListener("keyup", function(){
    console.log(`yg di cari: ${kata2.value}`)
})