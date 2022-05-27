//document.getElementById("count-el").innerText = 2 // document refers to html document
// ctr + alt + n for run js
// ctr + k + c  comments multiple lines
// Document Object Model (DOM) :: Is just how you use js to modify the website (D=HTML, O= (document object representation))

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment()
{
    count += 1;
    countEl.textContent = count;
    console.log("clicked");
}

function save(){
    saveEl.textContent += " "+count+" - ";  // inner text and text content ara almost the same
    countEl.textContent = 0;
    count = 0;

    console.log("Count: "+count)
}