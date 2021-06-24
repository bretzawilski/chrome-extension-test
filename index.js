const myLeads = [];

function saveLead() {
  let newLead = inputEl.value;
  if (newLead === "") {
    return;
  } else {
    myLeads.push(newLead);
    console.log(myLeads);
    inputEl.value = "";
  }
  displayLeads();
}

// function saveLeadEnter(e) {
//   if (e.key !== 'enter')
// }

function displayLeads() {
  // leadTracker.innerHTML = "";
  let listItems = "";
  if (!myLeads) {
    return;
  } else {
    for (i = 0; i < myLeads.length; i++) {
      // const addLead = document.createElement("li");
      // addLead.textContent = myLeads[i];
      // leadTracker.appendChild(addLead);
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
