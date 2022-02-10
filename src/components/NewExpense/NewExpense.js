import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense= (props)=>{
    const [isEditing, setIsEditing]=useState(false);
    const saveExpenseDataHandler=(enteredExpenseData)=> {   //collecting data(expenseData object) from ExpenseForm.js and adding id to it
        const expenseData= {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);   //passing data-up to App.js
    };

    const startEditingHandler=() => {
        setIsEditing(true);
    };

    const stopEditingHandler=() => {
        setIsEditing(false);
    };

    return (                                 //conditional return statement
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler} >Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} 
            onCancel={stopEditingHandler}/>}
        </div>
    );
};
export default NewExpense;