//your code here!
const list = document.getElementById("infi-list");

let count = 1; // To number the items

// Add initial 10 items
function addInitialItems() {
  for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + count++;
    list.appendChild(li);
  }
}

// Add 2 new items when scroll reaches bottom
function addMoreItems() {
  for (let i = 0; i < 2; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + count++;
    list.appendChild(li);
  }
}

// Detect scroll end
list.addEventListener("scroll", function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addMoreItems();
  }
});

// Call initial display
addInitialItems();

