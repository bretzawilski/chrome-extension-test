let myLeads = [];
let storedLeads = JSON.parse(localStorage.getItem("myLeads"));

// localStorage.setItem("myLeads", "www.examplelead.com");
function loadLeads() {
  if (storedLeads) {
    myLeads = storedLeads;
    displayLeads();
  }
}

function saveLead() {
  let newLead = inputEl.value;
  if (newLead === "") {
    return;
  } else {
    myLeads.push(newLead);
    console.log(myLeads);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
  }
  displayLeads();
}

function displayLeads() {
  let listItems = "";
  if (!myLeads) {
    return;
  } else {
    for (i = 0; i < myLeads.length; i++) {
      listItems += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`;
    }
    leadTracker.innerHTML = listItems;
  }
}

const inputButton = document.getElementById("input-btn");
inputButton.addEventListener("click", saveLead);

const leadTracker = document.getElementById("lead-tracker");

const inputEl = document.getElementById("input-el");
inputEl.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    saveLead();
  }
});

loadLeads();
// displayLeads();
