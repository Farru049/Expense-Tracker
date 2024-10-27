// Initialize the total amount to 0
let total = 0;

// Add an event listener to the expense form for submission
document.getElementById('expense-form').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the values from the input fields
    const description = document.getElementById('description').value; // Expense description
    const amount = parseFloat(document.getElementById('amount').value); // Expense amount as a number
    
    // Check if the description is not empty and amount is greater than 0
    if (description && amount > 0) {
        // Call function to add the expense to the list
        addExpense(description, amount);
        // Update the total amount with the new expense
        updateTotal(amount);
        // Clear the input fields after adding the expense
        clearForm();
    }
});

// Function to add an expense to the list
function addExpense(description, amount) {
    // Get the expense list element
    const expenseList = document.getElementById('expense-list');
    
    // Create a new list item for the expense
    const li = document.createElement('li');
    li.textContent = `${description}: $${amount.toFixed(2)}`; // Format the expense details
    
    // Create a button to remove the expense
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove'; // Button text
    removeBtn.className = 'remove-btn'; // Assign class for styling
    
    // Set the onclick event for the remove button
    removeBtn.onclick = function() {
        // Call function to remove the expense
        removeExpense(li, amount);
    };
    
    // Append the remove button to the list item
    li.appendChild(removeBtn);
    // Add the list item to the expense list
    expenseList.appendChild(li);
}

// Function to update the total amount
function updateTotal(amount) {
    total += amount; // Add the new expense amount to the total
    // Update the total displayed on the page
    document.getElementById('total').textContent = total.toFixed(2);
}

// Function to remove an expense from the list
function removeExpense(li, amount) {
    // Get the expense list element
    const expenseList = document.getElementById('expense-list');
    // Remove the specified list item from the expense list
    expenseList.removeChild(li);
    total -= amount; // Subtract the removed amount from the total
    // Update the total displayed on the page
    document.getElementById('total').textContent = total.toFixed(2);
}

// Function to clear the input fields after an expense is added
function clearForm() {
    document.getElementById('description').value = ''; // Clear the description input
    document.getElementById('amount').value = ''; // Clear the amount input
}
