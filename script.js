const getType = () =>{
    if(document.querySelector("#add_one").checked){
        genOne();
    }
    else if(document.querySelector("#add_group").checked){
        genGroup();
    }
    else{
        alert("Please choose a link type.")
    }

}

const genOne = () =>{
    let addURL = "https://teams.microsoft.com/l/chat/0/0?users="
    let emailAdd = document.querySelector("#email_add").value;
    let URLOut = addURL + emailAdd;
    document.querySelector("#link_text").innerHTML = URLOut;
}

const genGroup = () =>{
    let groupAdd = document.querySelector("#email_add").value;
    let groupArr = groupAdd.split("/");
    console.log(groupArr);
    let URLOut = "https://teams.microsoft.com/l/chat/" + groupArr[5];
    document.querySelector("#link_text").innerHTML = URLOut;
    
}

const copyText = () => {
    let textCopy = document.querySelector("#link_text").textContent;
    navigator.clipboard.writeText(textCopy);
}

document.querySelector("#submit").addEventListener("click", getType);
document.addEventListener("keydown", function(e){
    if(e.key==="Enter"){ getType() }
});
document.querySelector("#c").addEventListener("click", copyText);
