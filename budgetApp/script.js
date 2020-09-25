let budgetInput =  document.getElementById("budget-input");
let budgetBtn = document.getElementById("budget-btn");
let budgetValue = document.getElementById("budget-value");
let expensesValue = document.getElementById("expenses-value");
let balanceValue = document.getElementById("balance-value");  
let expensesTitle = document.getElementById("expenses-title");
let expensesInput = document.getElementById("expenses-input");
let expensesBtn = document.getElementById("expenses-btn");
let divItems = document.getElementById("item-list");


document.addEventListener("DOMContentLoaded",()=>{
    budgetBtn.addEventListener("click",()=>{
        budget();
    })
    expensesBtn.addEventListener("click",()=>{
        expenses();
        generateHtml();
    })
})



function budget(){
   let budgetInputValue = Number(budgetInput.value);
    budgetValue.textContent = `$${budgetInputValue}`;
}

function expenses(){
  let expensesTitleValue = expensesTitle.value;
  let expensesInputValue = expensesInput.value;
}

function balance(){
    //hello world
}

function generateHtml(){
    return `<div class="expense-info">
    <p>- Fix A Car and buyer</p>
    <p>5000</p>
    <p><i class="fas fa-edit"></i>
    <i class="fas fa-trash"></i></p>
</div>`
}








