let emailVerify = (event) => {
    let mailMatch = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (event.target.value.match(mailMatch)){

    }

    return;
}

export { emailVerify }