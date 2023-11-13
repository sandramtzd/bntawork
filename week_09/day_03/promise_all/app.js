// Create multiple fetch requests with similar URLS
// only difference between urls is a page number
// Use promise.all magic


const allPromises = [];

for(let i = 1; i < 3; i++){
    allPromises.push(
        fetch(`https://api.disneyapi.dev/character?page=${i}&pageSize=300`)
        .then((response) => response.json()) 
    )

}

Promise.all(allPromises)
.then((allResults) => {
    console.log(allResults);
    // {[]}
    const allCharacters = allResults.map((result) => result.data).flat()
    console.log(allCharacters)

    const characterList = document.querySelector("ul");


    allCharacters.forEach((character) => {
        const characterLi = document.createElement("li");
        const characterAnchor = document.createElement("a");

        characterAnchor.textContent = character.name;
        characterAnchor.href = character.sourceUrl;

        characterLi.appendChild(characterAnchor);


        // characterLi.textContent = character.name;
        characterList.appendChild(characterLi);
    })
})
