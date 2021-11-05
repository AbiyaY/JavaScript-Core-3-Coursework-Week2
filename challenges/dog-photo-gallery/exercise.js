const btnEl = document.getElementById("gallery");
const ulEl = document.getElementById("randomImage");

btnEl.addEventListener("click", getGallery);

function getGallery() {
     fetch("https://dog.ceo/api/breeds/image/random")
     .then(response => {
         if(response.status == 200){
             return response.json();
         } 
         throw `${response.status}`;
     })
     .then(data => {
         let liEl = document.createElement("li");
         let imgEl = document.createElement("img");
         ulEl.innerHTML = "";
         imgEl.setAttribute("src", data.message);
         ulEl.appendChild(liEl);
         liEl.appendChild(imgEl);
     }).catch(error => console.log(error));
    
}