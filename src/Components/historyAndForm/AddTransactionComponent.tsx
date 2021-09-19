import React, {useContext, useState} from 'react'
import globalContext from '../../Context/Global/globalContext';
import alertContext from '../../Context/Alert/alertContext';

type historyElement = {
    description: string,
    amount: number | null,
    type: string
}

const AddTransactionComponent:React.FC = () => {
    const {history, addTransaction} = useContext(globalContext);
    const {displayAlert} = useContext(alertContext);

    const initialState:historyElement = {
        description: "",
        amount: null,
        type: 'expenses'
    }

    const [state, setState] = useState(initialState);
    const {description, amount, type} = state;

    // To update local state at every change in input
    const onChange = (e:any) => setState({...state,[e.target.name]:e.target.value});

    // Check if transaction is valid to add a new element otherwise show alert message
    const validateAddTransaction = () => {
        const radioIncomeButton : any = document.getElementById('radio-income');
        const amountElement : any = document.getElementById('amount');

        const type : string = radioIncomeButton.checked ? 'income' : 'expenses';

        if(type === 'expenses'){
            const amount = amountElement.value;
            let totalIncome = 0;
            let totalExpenses = 0;
            if(history.filter((element: historyElement) => element.type === 'income').length > 0) {
                totalIncome = history.filter((element: historyElement) => element.type === 'income').map((element: historyElement) => element.amount).reduce((acc:number, amount:number) => acc + amount);
            }
            if(history.filter((element: historyElement) => element.type === 'expenses').length > 0){
                totalExpenses = history.filter((element: historyElement) => element.type === 'expenses').map((element: historyElement) => element.amount).reduce((acc:number, amount:number) => acc + amount);         
            }
            let balance = totalIncome - totalExpenses;          
            return balance - parseInt(amount) >= 0;
        } else {
            return true;
        }
    }

    // Submit form
    const submit = (e:any) => {
        e.preventDefault();
        if(description.trim() !== "" && amount !== null){
            if(validateAddTransaction()) {
                addTransaction(description, amount, type);
                // Reset inputs
                setState({
                    description: "",
                    amount: null,
                    type: 'expenses'
                });
            } else {
                displayAlert('You do not have enough balance');
            }
        } else {
            displayAlert('Some credentials are missing');
        }
    }
    
    return (
        <form>
            <h2>Add Transaction</h2>
            <div className="form-controls">
                <label htmlFor="description">Description</label>
                <input type="text" id="description" name="description" value={description} onChange={onChange} placeholder="Description Here"></input>
            </div>
            <div className="form-controls">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" name="amount" value={amount === null ? "" : amount} onChange={onChange} placeholder="Transaction Amount Here"></input>
            </div>
            <div className="form-controls">
                <label>Type</label>
                <div>
                    <input type="radio" name="type" value="income" checked={type==='income'} onChange={onChange} id="radio-income"/><label htmlFor="radio-income">Income</label>
                    <input type="radio" name="type" value="expenses" checked={type==='expenses'} onChange={onChange} id="radio-expenses"/><label htmlFor="radio-expenses">Expenses</label>
                </div>
            </div>
            <button className="btn" id="add" onClick={submit}>Add <i className="fas fa-plus"></i></button>
        </form>
    )
}

export default AddTransactionComponent;