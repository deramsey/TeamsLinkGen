const genLink = () =>{
    let addURL = "https://teams.microsoft.com/l/chat/0/0?users="
    let emailAdd = document.querySelector("#email_add").value;
    let URLOut = addURL + emailAdd;
    document.querySelector("#link_text").innerHTML = URLOut;
}

const copyText = () => {
    let textCopy = document.querySelector("#link_text").textContent;
    navigator.clipboard.writeText(textCopy);
}

document.querySelector("#submit").addEventListener("click", genLink);
document.addEventListener("keydown", function(e){
    if(e.key==="Enter"){ genLink() }
});
document.querySelector("#c").addEventListener("click", copyText);
