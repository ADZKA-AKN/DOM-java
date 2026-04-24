const judul = document.querySelector("#judul")
judul.innerText = "di ubah"

const parg = document.querySelector("#parg")
parg.innerText = "di ganti pargr"

const h2 = document.querySelectorAll("h2")
h2[0].innerText = "ganti semua h2"

function login(){
    alert("berhasil")
}
function clik(){
    alert("berhasil")
}

const buttonl = document.querySelector("#buttonClick")
buttonl.onClick = function(){
    alert("berhasil");
    console.log('cek')
};


//ini bisa 2 kali
const event = document.querySelector("#event")
event.addEventListener("click", function(){
    alert("berhasil")
})
event.addEventListener("click", function(){
    alert("yang ke 2")
})