

async function submit() {
    let apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/'.concat(document.getElementById('inputWord').value);
    let myJSON = JSON.stringify(apiUrl);
        const response = await fetch(apiUrl);

        const data = await response.json(); 
        console.log(data);

        const word = data[0];
        let displayWord = word.word;
        let phonetic = word.phonetic;
        

        document.getElementById("searchedWord").innerHTML = displayWord;
        document.getElementById("searchedPhonetic").innerHTML = phonetic;

        for (let i = 0; i<=word.meanings.length-1; i++){
            
            const element = document.getElementById("meaningDiv");
            const boxNode = document.createElement("div");
            boxNode.id = 'nexBox';
            boxNode.classList.add("box");
            boxNode.classList.add("content");

            var artOfSpeechTextNode = document.createTextNode(word.meanings[i].partOfSpeech);
            boxNode.appendChild(artOfSpeechTextNode);
            
            element.appendChild(boxNode);

            for (let j = 0; j<=word.meanings[i].definitions.length-1; j++){
                const list = document.createElement("ul");

                const node = document.createElement("li");

                // Create a text node:
                var textnode = document.createTextNode(word.meanings[i].definitions[j].definition);

                // Append the text node to the "li" node:
                node.appendChild(textnode);

                // Append the "li" node to the list:
                list.appendChild(node);

                boxNode.appendChild(list);

                const element2 = document.getElementById("sec");
                element2.appendChild(element);
            }
        }
}

