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



//Functies voor het invoerveld en mijn producten.
// Functie om het nummer toe te voegen aan de input
function addNumber(number) {
    let codeInput = document.getElementById('codeInput');
    codeInput.value += number;
}

// Functie om de input te wissen
function clearInput() {
    document.getElementById('codeInput').value = '';
}

// Functie om de productinformatie in te vullen en zichtbaar te maken
function submitCode() {
    let code = document.getElementById('codeInput').value;

    // Verberg alle dialoogvensters eerst
    let allDialogs = document.querySelectorAll('dialog');
    allDialogs.forEach(function(dialog) {
        dialog.close();
    });

    // Zoek de specifieke dialoog voor de ingevoerde code en toon deze
    let dialog = document.getElementById('product-info-' + code);
    if (dialog) {
        dialog.showModal(); // Toont het dialoog
    } else {
        alert("Geen informatie beschikbaar voor deze productcode.");
    }

    // Leeg het invoerveld na het tonen van de informatie
    document.getElementById('codeInput').value = '';
}

// Functie om een dialoog te sluiten
function closeDialog(dialogId) {
    document.getElementById(dialogId).close();
}
