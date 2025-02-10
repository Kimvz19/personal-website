// Deel van code gehaald uit opdracht "learn API for beginners"
// toevoeging aan code : https://chatgpt.com/share/67a9f8ba-2a20-8000-898f-27224b395e7f

//Variabelen
const baseURL = 'https://fdnd.directus.app/';
const endpointMe = 'items/person/208';

//URL link
const myURL = baseURL + endpointMe;
console.log(myURL);

fetch(myURL)
    .then(response => response.json())  // Zet de response om naar JSON
    .then(data208 => {
        let myNickName = data208.data.nickname; //filtert nickname 
        let deH1 = document.querySelector("h1"); //h1 selecteren html
        deH1.textContent = "Learn more about " + myNickName;
        // console.log(myName); 
    })
    .catch(error => console.error('Fout bij ophalen:', error));





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