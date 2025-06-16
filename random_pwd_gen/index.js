function passwordGenerator() {
    let length = document.getElementById('length').value;
    let result = document.getElementById('password');
    let password = "";
    let allowedChar = "";

    allowedChar += document.getElementById('lower').checked ? "abcdefghijklmnopqrstuvwxyz" : "";
    allowedChar += document.getElementById('upper').checked ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    allowedChar += document.getElementById('number').checked ? "0123456789" : "";
    allowedChar += document.getElementById('symbol').checked ? "!@#$%^*&~`" : "";

    if(length <= 0) {
        result.textContent =  `Length of character can not be ${length}`;
        return;
    }
    console.log(allowedChar.length);
    if(allowedChar.length < 1) {
        result.textContent = "Select atleast one set of characters";
        return;
    }

    for(let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * allowedChar.length);
        password += allowedChar[index];
    }

    result.textContent = `Generated password: ${password}`;
}