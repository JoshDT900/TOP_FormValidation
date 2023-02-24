let emailVerify = (event) => {
    
    if (!event.target.validity.typeMismatch){
        document.querySelector(".email_box .error").innerHTML = "";
    } else {
        document.querySelector(".email_box .error").innerHTML = "Please enter a vaild email address. Example: JonDoe245@gmail.com"
    }

    return;
}

let formHandle = (event) => {
    event.preventDefault();
    event.target.reportValidity();
}

export { emailVerify, formHandle }