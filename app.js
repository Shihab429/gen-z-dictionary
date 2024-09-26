fetch('allWord.json')
.then(res => res.json())
.then((data) => {
    alldata = data;
})

var alldata;
let show = document.getElementById('show');

let searchWord = () => {
        
        let inputtedWord = document.getElementById('wordInput');
        let inputtedWordLow = inputtedWord.value.toLowerCase();
        let foundWord = alldata.find( (eachWord) => {
           return eachWord.word.toLowerCase() === inputtedWordLow;
        })
    
    show.innerHTML = `বাংলা অর্থ: <br> <h3> ${foundWord.ban_des} </h3> <br> English meaning: <br> <h3>${foundWord.eng_des} </h3> <br> উদাহরণ: <h3>${foundWord.ban_example} </h3> <br> Example: <h3> </h3>`
    

}
    document.getElementById('btn').addEventListener('click', searchWord )











