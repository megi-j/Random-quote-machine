let quotes = [
{
    text: ' რაცა ღმერთსა არა სწადდეს არა საქმე არ იქმნების',
    author: "- შოთა რუსთაველი"
},
{
    text: ' გველსა ხვრელით ამოიყვანს ენა ტკბილად მოუბარი',
    author: "- შოთა რუსთაველი"
},
{
    text: ' სჯობს სიცოცხლესა ნაძრახსა სიკვდილი სახელოვანი',
    author: "- შოთა რუსთაველი"
},
{
    text: ' ავსა კაცსა ავი სიტყვა ურჩევნია სულსა, გულსა',
    author: "- შოთა რუსთაველი"
},
{
    text: ' არ-დავიწყება მოყვრისა აროდეს გვიზამს ზიანსა.',
    author: "- შოთა რუსთაველი"
},
{
    text: ' არ იცი, ვარდი უეკლოდ არავის მოუკრებიან!',
    author: "- შოთა რუსთაველი"
},
{
    text: ' არ შეუდრკების ვაჟკაცი კარგი მახვილთა კვეთასა.',
    author: "- შოთა რუსთაველი"
},
{
    text: ' არ შეუდრკების ვაჟკაცი კარგი მახვილთა კვეთასა.',
    author: "- შოთა რუსთაველი"
},
{
    text: ' ასი ათასსა აჯობებს, თუ გამორჩევით მქმნელია.',
    author: "- შოთა რუსთაველი"
},
{
    text: ' ბოროტსა სძლია კეთილმან, არსება მისი გრძელია!',
    author: "- შოთა რუსთაველი"
},
{
    text: ' განგებასა ვერვინ შეცვლის, არ-საქმნელი არ იქმნების.',
    author: "- შოთა რუსთაველი"
},
{
    text: ' გასტეხს ქვასაცა მაგარსა გვრდემლი ტყვიისა ლბილისა.',
    author: "- შოთა რუსთაველი"
},
{
    text: ' გრძელი სიტყვა მოკლედ ითქმის.',
    author: "- შოთა რუსთაველი"
},
{
    text: ' დიდი ლხინია ჭირთა თქმა, თუ კაცსა მოუხდებოდეს.',
    author: "- შოთა რუსთაველი"
},
{
    text: ' ვგმობ კაცსა აუგიანსა, ცრუსა და ღალატიანსა!',
    author: "- შოთა რუსთაველი"
},
{
    text: ' ვინ მოყვარესა არ ეძებს, იგი თავისა მტერია. ',
    author: "- შოთა რუსთაველი"
},
{
    text: ' ზოგჯერ თქმა სჯობს არა-თქმასა, ზოგჯერ თქმითაც დაშავდების.',
    author: "- შოთა რუსთაველი"
},
{
    text: ' თუ თავი შენი შენ გახლავს, ღარიბად არ იხსენები.',
    author: "- შოთა რუსთაველი"
},
{
    text: ' თქმულა: „სიწყნარე გმობილი სჯობს სიჩქარესა ქებულსა!.',
    author: "- შოთა რუსთაველი"
},
{
    text: ' თუ ლხინი გვინდა ღმრთისაგან, ჭირიცა შევიწყნაროთა.',
    author: "- შოთა რუსთაველი"
},
{
    text: ' თუ ყვავი ვარდსა იშოვნის, თავი ბულბული ჰგონია.',
    author: "- შოთა რუსთაველი"
},
{
    text: ' იგი მიენდოს სოფელსა, ვინცა თავისა მტერია!',
    author: "- შოთა რუსთაველი"
},
{
    text: ' კარგი რამ მჭირდეს, გიკვიდრეს, კარგი რა საკვირველია!',
    author: "- შოთა რუსთაველი"
},
{
    text: ' კაცი ცრუ და მოღალატე ხამს ლახვრითა დასაჭრელად.',
    author: "- შოთა რუსთაველი"
},
{
    text: ' კაცსა ღმერთი არ გასწირავს სოფლისაგან განაწირსა!',
    author: "- შოთა რუსთაველი"
},
{
    text: ' კაცი ბრძენი ვერ გასწირავს მოყვარესა მოყვარულსა.',
    author: "- შოთა რუსთაველი"
},

]
    
function setBg(){
    let rendomColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('.container').style.backgroundColor = '#' + rendomColor;
    document.getElementById('text').style.color = '#' + rendomColor;
    document.getElementById('author').style.color = '#' + rendomColor;
    document.getElementById('new-quote').style.backgroundColor = '#' + rendomColor;
    document.querySelector('.quotation').style.color = '#' + rendomColor;
    document.getElementById('tweet-quote').style.backgroundColor = '#' + rendomColor;
    document.getElementById('trumbl-quote').style.backgroundColor = '#' + rendomColor;
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


    