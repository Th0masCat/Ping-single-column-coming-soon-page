const textField = document.getElementById("text_box")
const emailButton = document.getElementById("notify_button")
const errorText = document.getElementById("error_text")


let regularExpression = new RegExp('[a-z0-9]+@[a-z]+\.edu\.[a-z]{2,3}')

emailButton.addEventListener("click", function (){
    if(textField.value != regularExpression){
        errorText.innerText = "Please provide a valid email address"
    }
})
