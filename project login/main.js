const form = document.querySelector("#loginform")

form.addEventListener("submit",function(e){
    // agar halaman tidak refresh ketika submit
    e.preventDefault()

    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value
    const msg = document.querySelector("#msg")

     if(username === "" || password === ""){
        msg.textContent = "Username and password cannot be empty"
        msg.className = "text-red-500 text-center mt-4"
    } 
    else if(username === "admin" && password === "123"){
        msg.textContent = "Login successful!"
        msg.className = "text-green-500 text-center mt-4"
    } 
    else{
        msg.textContent = "Invalid username or password"
        msg.className = "text-red-500 text-center mt-4"
    }
});