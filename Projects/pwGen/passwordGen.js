const types = {
    symbols: "!@#$%^&*", //symbols
    numbers: "1234567890", //numbers
    upperCase: "QWERTYUIOPASDFGHJKLZXCVBNM", //uppercase
    lowerCase: "qwertyuiopasdfghjklzxcvbnm" //lowercase
}

const getType = [
    function symbols() {
        return types.symbols[Math.floor(Math.random() * types.symbols.length)]
    },

    function numbers() {
        return types.numbers[Math.floor(Math.random() * types.numbers.length)]
    },

    function upperCase() {
        return types.upperCase[Math.floor(Math.random() * types.upperCase.length)]
    },

    function lowerCase() {
        return types.lowerCase[Math.floor(Math.random() * types.lowerCase.length)]
    }
];

function generatePassword() {
    let symbol = document.getElementById("symbols").checked;
    let number = document.getElementById("numbers").checked;
    let upper = document.getElementById("upperCase").checked;
    let lower = document.getElementById("lowerCase").checked;

    if (number + symbol + upper + lower === 0) {
        alert("Please choose at least one box!");
        return;
    }

    let passwordBox = document.getElementById("passwordBoxDisp");

    let length = document.getElementById("length");

    let pass = "";

    while (pass.length < length.value) {

        let typeChecked = getType[Math.floor(Math.random() * getType.length)];
        let isChecked = document.getElementById(typeChecked.name).checked;

        if (isChecked) {
            pass += typeChecked();
        }
    }
    passwordBox.innerHTML = pass;
}

function copyPassword() {
    const temp = document.createElement("textarea");
    const generatedPass = document.getElementById("passwordBoxDisp").innerText;

    if (!generatedPass) {
        alert("Please generate a password first!");
        return;
    }

    temp.value = generatedPass;
    document.body.appendChild(temp);

    temp.select();
    navigator.clipboard.writeText(temp.value);
    temp.remove();

    alert("Copied Password");
}

