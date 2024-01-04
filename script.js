const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create a new list item (li) element
        let li = document.createElement("li");

        // Set the innerHTML of the new list item to the value of the input box
        li.innerHTML = inputBox.value;

        // Append the new list item to the list container
        listContainer.appendChild(li);

        // Create a new span element (x) for deleting the task
        let span = document.createElement("span");

        // Set the innerHTML of the span to the 'x' character
        span.innerHTML = "\u00d7";

        // Append the span to the list item
        li.appendChild(span);
    }

    // Clear the input box after adding a task
    inputBox.value = '';
    saveData();
    // Add a click event listener to the list container
    listContainer.addEventListener("click", function (e) {
        // Check if the clicked element is a list item (LI)
        if (e.target.tagName === "LI") {
            // Toggle the "checked" class for styling purposes
            e.target.classList.toggle("checked");
            
        }
        // Check if the clicked element is a span (delete button)
        else if (e.target.tagName === "SPAN") {
            // Remove the parent list item when the 'x' is clicked
            e.target.parentElement.remove();
        }
    }, false);
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Show tasks when the page is loaded
showTask();
