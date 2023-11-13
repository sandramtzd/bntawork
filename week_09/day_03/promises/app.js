// const fetchDogImage = () => {
//     const request = fetch("https://dog.ceo/api/breeds/image/random")
//         .then(response => response.json())
//         .then(data => document.querySelector("#dog-image").src = data.message);
    
// } // This code is the same as .then and are both valid 

// const fetchDogImage = async () => {
//     const response = await fetch("https://dog.ceo/api/breeds/image/random");
//     const jsonData = await response.json();
//     document.querySelector("#dog-image").src = jsonData.message;
    
// }


// document.querySelector("#dog-button").addEventListener("click", fetchDogImage);

const fetchDogImage = async () => {
    const response = await fetch("https://dog.ceo/api/breed/corgi/images");
    const jsonData = await response.json();
    const imageContainer = document.createElement("div");
    
    jsonData.message.forEach(url => {
        const dogImage = document.createElement("img");
        dogImage.src = url;
        imageContainer.appendChild(dogImage);

    })
    document.querySelector("body").appendChild(imageContainer);
} 
document.querySelector("#dog-button").addEventListener("click", fetchDogImage);   