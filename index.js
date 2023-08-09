const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke")

const apiKey = "BI8YfFDgwl1r4FFGENADaw==0DljYJLNqIVC2WaS";

const options = {
    method: "GET",
    headers: {
        "X-Api-key": apiKey,

    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    try {
        
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading..."
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE";

    jokeEl.innerText = data[0].joke;
        
    } catch (error) {
        jokeEl.innerText = "An error happened or No internet, try again later";
        btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE";
        console.log(error);
    }

        
    }

   

btnEl.addEventListener("click", getJoke);