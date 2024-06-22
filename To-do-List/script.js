const input = document.querySelector("#input-box");
const listcontainer = document.querySelector("#list-container");

const addTask = () => {
  //   console.log(input.value);
  if (input.value === "") {
    alert("you must write something ");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  input.value = "";
  saveData();
};

// Event Delegation :

listcontainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if ((e.target.tagName = "SPAN")) {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listcontainer.innerHTML);
  console.log(listcontainer.innerHTML);
}

function showList() {
  listcontainer.innerHTML = localStorage.getItem("data");
}
showList();
