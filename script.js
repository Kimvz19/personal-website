// Deel van code gehaald uit opdracht "learn API for beginners"
// toevoeging aan code : https://chatgpt.com/share/67a9f8ba-2a20-8000-898f-27224b395e7f

//Variabelen url
const baseURL = 'https://fdnd.directus.app/';
const endpointMe = 'items/person/208';

//URL link
const myURL = baseURL + endpointMe;
console.log(myURL);

fetch(myURL)
    .then(response => response.json())
    .then(data208 => {

        let myNickName = data208.data.nickname; // filter nickname 
        let birthdayDate = data208.data.birthdate; // filter birthdate
        let myName = data208.data.name; // filter full name


        let deH1 = document.querySelector("h1"); // select h1 html 
        let deH2 = document.querySelector("h2"); // select h2 html 
        let footerP = document.querySelector("footer p"); // select p footer html 


        deH1.textContent = birthdayDate; // adding h1 birthday
        deH2.textContent = myNickName; // adding h2 nickname
        footerP.textContent = "made by " + myName; // adding footer p full name 

        // profile picture 
        let myImg = document.querySelector("article img"); // select article img
        let myAvatar = data208.data.avatar; // filter avatar img 
        myImg.src = myAvatar;  // src. 
      


        // variabele om stringen makkelijker te maken 
        // bron voor het stringen van variabelen : https://chatgpt.com/share/67ab44da-3404-8000-b5ea-b96e0839aa55
        let JsonCustom = JSON.parse(data208.data.custom);

        //  Dialog 1
        let { BoyfriendName, relationship, locationMeeting, anniversaryDate } = JsonCustom;
        let dialog1 = document.getElementById('product-info-2202');
        let pTag1 = dialog1.querySelector('p');
        pTag1.textContent = `My boyfriend is ${BoyfriendName}. We have a ${relationship} year long relationship. We met at ${locationMeeting}. Our anniversary date is ${anniversaryDate}.`;


        //Dialog 2
        let { cat1, cat2, cats, genderCat, ageCat } = JsonCustom;
        let dialog2 = document.getElementById('product-info-1002');
        let pTag2 = dialog2.querySelector('p');
        pTag2.textContent = `I have ${cats}, ${cat1} and ${cat2}. Their both ${genderCat}s and ${ageCat} years old.`;

        //Dialog 3
        let { schoolYear, minor, goal1, goal2, goal3 } = JsonCustom;
        let dialog3 = document.getElementById('product-info-1003');
        let pTag3 = dialog3.querySelector('p');
        pTag3.innerHTML = `I'm now in my ${schoolYear} of CMD. For my minor, I chose ${minor}. <br> <br> My goals for this minor are:
        <br> 1) ${goal1}<br>2) ${goal2}<br>3) ${goal3}.`


        // dialog4
        let { house, dateHouse, HouseMateName } = JsonCustom;
        let dialog4 = document.getElementById('product-info-1004');
        let pTag4 = dialog4.querySelector('p');
        pTag4.innerHTML = `${dateHouse} ago, I started living on my own. My housemate's name is ${HouseMateName}, she is my sister. We live in ${house}.`


        // dialog 5 
        let { favFood } = JsonCustom;
        let dialog5 = document.getElementById('product-info-1005');
        let pTag5 = dialog5.querySelector('p');
        pTag5.innerHTML = `My favorite food is ${favFood}`

        // dialog6 
        let { newVakay, vakaySummer } = JsonCustom;
        let dialog6 = document.getElementById('product-info-1006');
        let pTag6 = dialog6.querySelector('p');
        pTag6.innerHTML = `This coming holiday, I'm going ${newVakay} and during the summer holidays I'm going to ${vakaySummer}.`

    })
    //error prevention
    .catch(error => console.error('Fout bij ophalen:', error));





// function adding numbers in inputveld
// gekoppeld aan button met vinkje 
function addNumber(number) {
    let codeInput = document.getElementById('codeInput'); //codeInput = inputveld 
    codeInput.value += number; //voegt nummers bij de andere values
}

// Function deleting numbers in inputveld 
// gekoppeld aan button met kruisje 
function clearInput() {
    document.getElementById('codeInput').value = ''; //zet naar default
}



// Functie om de productinformatie in te vullen en zichtbaar te maken
function submitCode() {
    let code = document.getElementById('codeInput').value; //filtert value van inputveld

    // Verberg alle dialoogvensters
    let allDialogs = document.querySelectorAll('dialog');
    allDialogs.forEach(function (dialog) {
        dialog.close();
    });

    // Zoek de specifieke dialoog voor de ingevoerde code en toon deze
    let dialog = document.getElementById('product-info-' + code);
    if (dialog) {
        dialog.showModal(); // Toon dialoog
    } else {
        alert("Geen match gevonden, probeer opnieuwe");
    }

    // Leeg inputveld (function)
    clearInput();
}

// Functie om een dialoog te sluiten
function closeDialog(dialogId) {
    document.getElementById(dialogId).close();
}
