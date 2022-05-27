
// OTHER WAY TO CREATE SAME FUNCTION

let myLeads = [];
const inputEl= document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");


inputBtn.addEventListener("click", function () {

    

    myLeads.push(inputEl.value);
    inputEl.value = ""; //empty input

    renderLeads();

})


function renderLeads()
{
    let listItems=""
    for(let i=0; i< myLeads.length; i++)
    {
   // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";

        listItems += `<li>
                           <a href="${myLeads[i]}" target='_blank'> 
                               ${myLeads[i]}
                            </a>
                      </li>`; // opening in new tag
    }

     ulEl.innerHTML = listItems;

}