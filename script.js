const form = document.getElementById('expense-form');
const textInput = document.getElementById('text');
const amountInput = document.getElementById('amount');
const expenseList = document.getElementById('expenses');

let expenses = [];

// Add Expense
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const text = textInput.value.trim();
    const amount = +amountInput.value.trim();

    if (text === '' || amount === '') {
        alert('Please enter both expense and amount');
        return;
    }

    const expense = {
        id: generateID(),
        text,
        amount
    };

    expenses.push(expense);
    addExpenseToList(expense);
    updateLocalStorage();

    textInput.value = '';
    amountInput.value = '';
});

// Generate ID
function generateID() {
    return Math.floor(Math.random() * 1000000000);
}

// Add Expense to List
function addExpenseToList(expense) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${expense.text} - Rs${expense.amount}</span>
        <button onclick="editExpense(${expense.id})">Edit</button>
        <button onclick="deleteExpense(${expense.id})">Delete</button>
    `;
    expenseList.appendChild(li);
}

// Edit Expense
function editExpense(id) {
    const expense = expenses.find(expense => expense.id === id);
    if (!expense) return;

    textInput.value = expense.text;
    amountInput.value = expense.amount;

    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('updateBtn').style.display = 'inline';
    document.getElementById('cancelBtn').style.display = 'inline';
    document.getElementById('expenseId').value = id;
}

// Update Expense
document.getElementById('updateBtn').addEventListener('click', function(e) {
    e.preventDefault();

    const id = +document.getElementById('expenseId').value;
    const text = textInput.value.trim();
    const amount = +amountInput.value.trim();

    if (text === '' || amount === '') {
        alert('Please enter both expense and amount');
        return;
    }

    expenses = expenses.map(expense =>
        expense.id === id ? { id, text, amount } : expense
    );

    updateExpenseList();
    updateLocalStorage();

    textInput.value = '';
    amountInput.value = '';
    resetForm();
});

// Delete Expense
function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    updateExpenseList();
    updateLocalStorage();
}

// Update Expense List
function updateExpenseList() {
    expenseList.innerHTML = '';
    expenses.forEach(addExpenseToList);
}

// Reset Form
function resetForm() {
    document.getElementById('submitBtn').style.display = 'inline';
    document.getElementById('updateBtn').style.display = 'none';
    document.getElementById('cancelBtn').style.display = 'none';
    document.getElementById('expenseId').value = '';
}

// Cancel Edit
document.getElementById('cancelBtn').addEventListener('click', function(e) {
    e.preventDefault();
    resetForm();
});

// Local Storage
function updateLocalStorage() {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

function getFromLocalStorage() {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
        expenses = JSON.parse(storedExpenses);
        updateExpenseList();
    }
}

getFromLocalStorage();