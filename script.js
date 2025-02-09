function addNumber(num) {
    document.getElementById("codeInput").value += num;
}

function clearInput() {
    document.getElementById("codeInput").value = "";
}

function submitCode() {
    let code = document.getElementById("codeInput").value;
    if (code.length > 0) {
        alert("Code ingevoerd: " + code);
    } else {
        alert("Voer eerst een code in!");
    }
}