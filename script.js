let incrementBtn = document.getElementById("increment-btn");
let countEl = document.getElementById("count-el");
let count = 0;

function incrementCount() {
  incrementBtn.addEventListener("click", () => {
    count += 1;
    countEl.textContent = count;
  });
}
incrementCount();

let saveEl = document.getElementById("save-el");

function saveCount() {
  let savedCount = count + " - ";
  saveEl.textContent += savedCount;
  countEl.textContent = 0;
  count = 0;
}
