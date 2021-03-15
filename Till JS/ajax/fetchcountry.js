function displaydetails() {

    let name = document.querySelector("#cname").value;
    
fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
        .then(response => response.json())
        .then(data => populateData(data))
        .catch(error => console.log(error.message))
}
function populateData(data){
    let c_name = data[0].name;
    let flag = data[0].flag;
    let population = data[0].population;
    let currencies = data[0].currencies[0].name;
    var html_data = ""
    html_data += `
                
                <div class="card" style="width:30rem;">
                    <img src="${flag}" class="card-img-top" alt="...">
                        <div class="card-body"> <h3>Country:${c_name}</h3>
                        <h3>Population:${population}</h3>
                        <h3>Currency:${currencies}</h3>
                        </div>
                    </div>`
    document.querySelector('#result').innerHTML = html_data

}
