//get by id
const judul = document.getElementById("judul")
// judul.innerText = "Di ubah" //untuk mengubah text
// judul.innerHTML = "<span>ini anak nya 1</span>"//nambah anak di dlm
judul.style.fontSize = "50px"//buat memanipulasi css
judul.style.color = "red"
//get by classname
const judul2 = document.getElementsByClassName("judul2")
judul2[0].innerText = "ubah"
judul2[0].innerHTML = "<span>ini anak nya 2</span>"
judul2[0].style.color = "blue"

//get by tagname
const paragraf = document.getElementsByTagName("p")
paragraf[0].innerText = "pargr ganti"
paragraf[0].innerHTML = "<span>anak parg</;span>"
paragraf[0].style.color = "red"
paragraf[0].style.fontSize = "80px"