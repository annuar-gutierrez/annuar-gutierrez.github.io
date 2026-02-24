
// async function pageLoad() {

// }

// pageLoad();

let zipCodeInput = document.querySelector("#zipCodeInput");
zipCodeInput.addEventListener("input", async function(){

    let url = `https://csumb.space/api/cityInfoAPI.php?zip=${zipCodeInput.value}`;
    try {
        const response = await fetch(url);
        if (!response.ok){
            throw new Error("Error accessing API endpoint");
        }
        const data = await response.json();
        console.log(data);

        document.querySelector("#cityDisplay").textContent = data.city;
        document.querySelector("#latitude").textContent = data.latitude;
        document.querySelector("#longitude").textContent = data.longitude;
        
    } catch (err){
        if (err instanceof TypeError) {
        alert("Error accessing API endpoint (network failure)");
        } else {
        alert(err.message);
        }
    }
    
})

let suggestedPassword = document.querySelector("#passwordInput");
suggestedPassword.addEventListener("click", async function(){

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
takenUsernames.addEventListener("input", async function () {

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
        
    } catch (err){
        if (err instanceof TypeError) {
        alert("Error accessing API endpoint (network failure)");
        } else {
        alert(err.message);
        }
    }
    
})
    





    // let zipCodeResult = await fetch(`https://csumb.space/api/cityInfoAPI.php?zip=${zipCodeInput.value}`);

    // let zipCodeData = await zipCodeResult.json();

    // console.log(zipCodeData);

    // document.querySelector("#cityDis").textContent = zipCodeData.city;
    // document.querySelector("#latiDis").textContent = zipCodeData.latitude;
    // document.querySelector("#longiDis").textContent = zipCodeData.longitude;


