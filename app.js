fetch('allWord.json')
.then(res => res.json())
.then((data) => {
    alldata = data;
})

var alldata;
let show = document.getElementById('show');
let inputtedWord = document.getElementById('wordInput');
let suggestion = document.getElementById('suggestion');
let searchBtn = document.getElementById('btn');

inputtedWord.addEventListener('search', () => {
    
        suggestion.innerHTML = "";
})

let searchWord = () => {
        if(!inputtedWord.value){
            show.innerHTML = `<h2 style="color: red; opacity: 0.9; margin-top: 20px; text-align: center;">Enter a word...</h2>`
        }
        else{
            let inputtedWordLow = inputtedWord.value.toLowerCase();
            let foundWord = alldata.find( (eachWord) => {
                return eachWord.word.toLowerCase() === inputtedWordLow;
            })
            if(!foundWord){
                show.innerHTML = `<h2 style="text-align: center;"> No Word Found </h2>`
            }
            else{
                show.innerHTML = `বাংলা অর্থ: <br> <h3> ${foundWord.ban_des} </h3> <br> English meaning: <br> <h3>${foundWord.eng_des} </h3> <br> উদাহরণ: <h3>${foundWord.ban_example} </h3> <br> Example: <h3>${foundWord.eng_example} </h3>`
                }
                
            }
        
        
    

}
    document.getElementById('btn').addEventListener('click', searchWord )

function suggestWords(){
    let userInput = inputtedWord.value.toLowerCase();
    let suggestionField = document.getElementById('suggestion');

    suggestionField.innerHTML = '';

    if(!userInput) return;

    let relatedWords = alldata.filter(singleRelatedData => singleRelatedData.word.toLowerCase().includes(userInput));
    
    relatedWords.forEach(singleRelWord => {
        let singleRelWordDiv = document.createElement('div');
        singleRelWordDiv.textContent = singleRelWord.word;
        singleRelWordDiv.onclick = () => fillInput(singleRelWord.word);
        suggestionField.appendChild(singleRelWordDiv);

        function fillInput(word){
            inputtedWord.value = word;
            suggestionField.innerHTML = '';
            searchBtn.click();
        }
    })
}








