// Variables, Data types, Conditionals
function checkAge() {
  let age = document.getElementById("ageInput").value;
  let result=document.getElementById("ageResult")
  if (age >= 18) {
    result.textContent = "You are an adult.";
  } else if (age > 0) {
    result.textContent = "You are underage.";
  } else {
    result.textContent = "Please enter a valid age.";
  }
}


// Function 1: Adding numbers
function addNumbers(a, b) {
  return a + b;
}

// Function 2: Show total on webpage
function showTotal() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  let total = addNumbers(num1, num2);
  document.getElementById("calcResult").innerText = "Sum: " + total;
}
//Loops and arrays
function listFruits() {
  let fruits = ["Apple", "Banana", "Grape", "Orange"];
  let listContainer = document.getElementById("fruitList");
  listContainer.innerHTML = ""; // clear old list

  // For loop example
  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    listContainer.appendChild(li);
  }

  
}


// Example 1: Toggle class on button click
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.getElementById("magicText").classList.toggle("highlight");
});

// Example 2: Change text dynamically
document.getElementById("magicText").addEventListener("mouseover", () => {
  document.getElementById("magicText").innerText = "You hovered over me!";
});

document.getElementById("magicText").addEventListener("mouseout", () => {
  document.getElementById("magicText").innerText = "Click the button to highlight this text!";
});

// Example 3: Create element dynamically
let newPara = document.createElement("p");
newPara.innerText = "DOM created this new paragraph dynamically!";
document.body.appendChild(newPara);
