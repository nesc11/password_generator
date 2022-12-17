const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1 = []
let pass2 = []

let option1El = document.getElementById("option1-el")
let option2El = document.getElementById("option2-el")


function generate() {
    option1El.textContent = ""
    option2El.textContent = ""

    for (let i = 0; i < 15; i++) {
        pass1.push(characters[Math.floor(Math.random() * characters.length)])
        pass2.push(characters[Math.floor(Math.random() * characters.length)])
    }
    for (let i = 0; i < pass1.length; i++) {
        option1El.textContent += pass1[i]
        option2El.textContent += pass2[i]
    }

    pass1 = []
    pass2 = []
}

