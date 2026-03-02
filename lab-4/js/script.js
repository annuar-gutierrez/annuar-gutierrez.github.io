async function pageLoad() {

    let url = `https://csumb.space/api/allStatesAPI.php`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        console.log(data);

        let statesSelect = document.querySelector('#statesSelect');

        let plzSelect = document.createElement('option');
        plzSelect.value = "0";
        plzSelect.textContent = "Select a State";
        statesSelect.appendChild(plzSelect);

        for (let stateData of data) {
            console.log(stateData);

            let stateOption = document.createElement('option');
            
            
            stateOption.id = stateData.usps;
            
            stateOption.textContent = stateData.state;
            
            stateOption.value = stateData.usps;
            
            statesSelect.appendChild(stateOption);
        }

    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)");
        } else {
            alert(err.message);
        }
    }
}
pageLoad();



// async function pageLoad() {

// }

// pageLoad();

let zipCodeInput = document.querySelector("#zipCodeInput");
zipCodeInput.addEventListener("change", async function(){

    let url = `https://csumb.space/api/cityInfoAPI.php?zip=${zipCodeInput.value}`;

    document.querySelector("#cityDisplay").textContent = "";
    document.querySelector("#latitude").textContent = "";
    document.querySelector("#longitude").textContent = "";
    document.querySelector("#cityError").textContent = "";
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error accessing API endpoint');
        }
        const data = await response.json();
        
        if (data == false) {
            document.querySelector("#cityError").textContent = "City Not found";
            document.querySelector("#cityError").style.color = "red";
        } else {
            document.querySelector('#cityDisplay').textContent = data.city;
            document.querySelector('#latitude').textContent = data.latitude;
            document.querySelector('#longitude').textContent = data.longitude;
        }
    } catch (err){
        if (err instanceof TypeError) {
        alert("Error accessing API endpoint (network failure)");
        } else {
        alert(err.message);
        }
    }
    
});

countySelect.addEventListener("change", async function(){

    let state = document.querySelector("statesSelect").value;

    let urlCounty = `https://csumb.space/api/countyListAPI.php?state=${statesSelect}`;

    try {
        const response = await fetch(urlCounty);
        if(!response.ok){
            throw new Error("Error accessing API endpoint");
        }
        const data = await response.json();

        let countySelect = document.querySelector('#countySelect');

        let plzSelectO = document.createElement('option');
        plzSelectO.value = "0";
        plzSelectO.textContent = "Select a County";
        countySelect.appendChild(plzSelectO);

        for (let countyData of data) {
            console.log(countyData);

            let countyOption = document.createElement('option');
            
            
            countyOption.textContent = countyData.county; 
            countyOption.value = countyData.county;
            
            countySelect.appendChild(countyOption);
        }


    } catch (err){
        if (err instanceof TypeError) {
        alert("Error accessing API endpoint (network failure)");
        } else {
        alert(err.message);
        }
    }
});

let suggestedPassword = document.querySelector("#passwordInput");
suggestedPassword.addEventListener("change", async function(){

    let urlPass = `https://csumb.space/api/suggestedPassword.php?length=8`;

    try {
        const response = await fetch(urlPass);
        if(!response.ok){
            throw new Error("Error accessing API endpoint");
        }
        const data = await response.json();

        document.querySelector("#suggestedPassword").textContent = " | Suggested Password: " + data.password + "  |";


    } catch (err){
        if (err instanceof TypeError) {
        alert("Error accessing API endpoint (network failure)");
        } else {
        alert(err.message);
        }
    }
    
});
    
let takenUsernames = document.querySelector("#usernameInput");
takenUsernames.addEventListener("change", async function () {

    let urlNames = `https://csumb.space/api/usernamesAPI.php?username=${usernameInput.value}`;

    try {
        const response = await fetch(urlNames);
        if (!response.ok){
            throw new Error("Error accessing API endpoint");
        }
        const data = await response.json();
        console.log(data);

        if(data.available){
            document.querySelector("#usernameMessage").textContent = " Username is Available";
            document.querySelector("#usernameMessage").style.color = "green";
        } else {
            document.querySelector("#usernameMessage").textContent = " Username is Taken";
            document.querySelector("#usernameMessage").style.color = "red";
        }

        if (username.length < 3) {
            document.querySelector("#usernameMessage").textContent = " Username is too short";
            document.querySelector("#usernameMessage").style.color = "red";
            isValid = false;
        }

        if (!isValid) {
           document.querySelector("#submitButton").style.display = "none";
        } else {
            document.querySelector("#submitButton").style.display = "inline";
        }
        
    } catch (err){
        if (err instanceof TypeError) {
        alert("Error accessing API endpoint (network failure)");
        } else {
        alert(err.message);
        }
    }
    
});







    // let zipCodeResult = await fetch(`https://csumb.space/api/cityInfoAPI.php?zip=${zipCodeInput.value}`);

    // let zipCodeData = await zipCodeResult.json();

    // console.log(zipCodeData);

    // document.querySelector("#cityDis").textContent = zipCodeData.city;
    // document.querySelector("#latiDis").textContent = zipCodeData.latitude;
    // document.querySelector("#longiDis").textContent = zipCodeData.longitude;


