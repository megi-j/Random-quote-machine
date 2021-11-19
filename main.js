let quotes = [
{
    text: ' რაცა ღმერთსა არა სწადდეს არა საქმე არ იქმნების',
    author: "- შოთა რუსთაველი",
},
{
    text: ' გველსა ხვრელით ამოიყვანს ენა ტკბილად მოუბარი',
    author: "- შოთა რუსთაველი",
},
{
    text: ' სჯობს სიცოცხლესა ნაძრახსა სიკვდილი სახელოვანი',
    author: "- შოთა რუსთაველი",
},
{
    text: ' ელეგია',
    author: "- აკაკი წერეთელი",
},
{
    text: ' შენ ჯვარს იწერდი იმ ღამეს მერი',
    author: "- გალაკტიონი",
},
]
    
function setBg(){
    let rendomColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('.container').style.backgroundColor = '#' + rendomColor;
    document.getElementById('text').style.color = '#' + rendomColor;
    document.getElementById('author').style.color = '#' + rendomColor;
    document.getElementById('new-quote').style.backgroundColor = '#' + rendomColor;
    document.querySelector('.quotation').style.color = '#' + rendomColor;
}

function setTxt(){
    let randomObj = quotes[Math.floor(Math.random()*quotes.length)];
    let randomTxt = randomObj.text;
    let randomAuthor = randomObj.author;
    let currentAuthor = document.getElementById('author');
    let currentTxt = document.getElementById('text');
    currentTxt.innerText = randomTxt;  
    currentAuthor.innerText = randomAuthor;
}

document.getElementById('new-quote').addEventListener('click', function(){
    setBg();
    setTxt();

});


    