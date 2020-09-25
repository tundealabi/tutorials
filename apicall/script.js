let form = document.querySelector("form");
let inputElement = document.getElementById("search");
let cardElement = document.getElementById("cards");
let searchValue;
console.log(cardElement);
function formSubmission(e){
    e.preventDefault();
    searchValue = inputElement.value;
    apiCall(searchValue);
    clearField();
}

function clearField(){
    inputElement.value = "";
}

function display(items){
    let htmlResult = "";
    items.data.forEach(item=>{
         htmlResult += HTML(item);
    });
    cardElement.innerHTML = htmlResult;
}

function HTML(resultObj){
    return `<div class="card">
    <img src=${resultObj.images.original.url} class="card-img-top" alt=${resultObj.title}>
    <div class="card-body">
      <h5 class="card-title">${resultObj.title}</h5>
    </div>
  </div>`
}

function apiCall(search){
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&limit=3&api_key=dc6zaTOxFJmzC`)
            .then(response=>response.json())
            .then(result=>display(result))
            .catch(err=>console.log("This is the error==>",err));
}

document.addEventListener("DOMContentLoaded",()=>{
    form.addEventListener("submit",formSubmission);
})