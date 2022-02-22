function validBadge(filePath) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    return xmlhttp.status == 200;
}

btn_Submit = document.querySelector("#submit")
txt_Input = document.querySelector("#uuid")
btn_Submit.addEventListener('click', ()=>{
    uuid = txt_Input.value.toUpperCase()
    path = `./badges/${uuid}.png`
    if(uuid.length != 8 || uuid.substring(0,4) != 'XACT' || !validBadge(path)){
        alert("Incorrect UUID Provided!")
        txt_Input.value = ""
    }
    else{
        window.open(path)
    }
})