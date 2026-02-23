
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
    
    





    // let zipCodeResult = await fetch(`https://csumb.space/api/cityInfoAPI.php?zip=${zipCodeInput.value}`);

    // let zipCodeData = await zipCodeResult.json();

    // console.log(zipCodeData);

    // document.querySelector("#cityDis").textContent = zipCodeData.city;
    // document.querySelector("#latiDis").textContent = zipCodeData.latitude;
    // document.querySelector("#longiDis").textContent = zipCodeData.longitude;


