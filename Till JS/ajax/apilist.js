function Displaycontry() {
    let name = document.querySelector("#cntry").value
    const request = new XMLHttpRequest
    request.open("get", `https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
    request.send()
    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            if ((request.status >= 200 & request.status < 300)) {
                let data = JSON.parse(request.responseText)
                console.log(data);
                let c_name = data[0]["name"];

                let flag = data[0]["flag"];
                let population = data[0]["population"];
                let currency = data[0].currencies[0].name;
                console.log(c_name, flag, population, currency);
                html_data = ""
                html_data += `<div class="card" style="width: 18rem;">
               <img src="${flag}" class="card-img-top" alt="...">
               <div class="card-body">
               <h2>countryname:${c_name}</h2>
               <h2>population:${population}</h2>
               <h2>curency:${currency}</h2>
               </div>
             </div>`
                document.querySelector("#dt").innerHTML = html_data


            }

        }

    }
}
function Displaying() {
    const request1 = new XMLHttpRequest
    request1.open("get", `https://restcountries.eu/rest/v2/all`)
    request1.send()
    request1.onreadystatechange = () => {
        if (request1.readyState == 4) {
            if ((request1.status >= 200 & request1.status < 300)) {
                let data = JSON.parse(request1.responseText)
                let html_data = ""
                data.forEach(element => html_data += `<option value=${element.name}>${element.name}</option>`);
                document.querySelector("#cntry").innerHTML = html_data


            }
            

        }



    }
}