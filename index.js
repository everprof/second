const input = document.querySelector(".head input"),
  addButton = document.querySelector("#add"),
  list = document.querySelector(".list");

addButton.addEventListener("click", function () {
  input.value !== "" && setLocalItems();
  input.value = "";
  input.focus();
});

function setLocalItems() {
  let getItems = JSON.parse(localStorage.getItem("list"));

  if (getItems === null) {
    myArray = [];
  } else {
    myArray = getItems;
  }
  myArray.push(input.value);
  localStorage.setItem("list", JSON.stringify(myArray));
  console.log(myArray);
  // let elemnt;
  // elemnt = `<div class="items"><span>${getValues}</span> <span><button>Del</button></span></div>`;
  // list.innerHTML += elemnt;
  showList();
}

const showList = () => {
  let getItems = JSON.parse(localStorage.getItem("list"));
  let result = "";
  if (getItems === null) {
    myArray = [];
  } else {
    myArray = getItems;
  }
  for (let i = 0; i < myArray.length; i++) {
    result += `<div class="items"><span>${myArray[i]}</span> <span><button class="del" >Del</button></span></div>`;
  }
  list.innerHTML = result;
  del();
};
showList();

function del() {
  let getItems = JSON.parse(localStorage.getItem("list"));
  if (getItems === null) {
    myArray = [];
  } else {
    myArray = getItems;
  }
  let allDel = document.querySelectorAll(".del");
  for (let i = 0; i < allDel.length; i++) {
    allDel[i].onclick = () => {
      allDel[i].remove(parent);
    };
  }
}
del();
