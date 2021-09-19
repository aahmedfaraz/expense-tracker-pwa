import React, {useContext} from 'react';
import globalContext from '../../Context/Global/globalContext';

type historyElement = {
    description: string,
    amount: number,
    type: string
}

const AmountDetailsComponent:React.FC = () => {
    const {history} = useContext(globalContext);

    const getTotals = () : {totalIncome: number, totalExpenses: number} => {
        // Calculate Total Income and Expenses
        let totalIncome = 0;
        let totalExpenses = 0;
        if(history.filter((element: historyElement) => element.type === 'income').length > 0) {
            totalIncome = history.filter((element: historyElement) => element.type === 'income').map((element: historyElement) => element.amount).reduce((acc:number, amount:number) => acc + amount);
        }
        if(history.filter((element: historyElement) => element.type === 'expenses').length > 0){
            totalExpenses = history.filter((element: historyElement) => element.type === 'expenses').map((element: historyElement) => element.amount).reduce((acc:number, amount:number) => acc + amount);
        }
        return {
            totalIncome,
            totalExpenses
        }
    }

    // Print amount format
    const printAmount = (amount: number) : string => {
        return amount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const {totalIncome, totalExpenses} = getTotals();
    
    // render
    return (
        <div className="amount-details-container">
            <p className="totals">Total Income <span id="total-income">{printAmount(totalIncome)}</span></p>
            <p className="totals">Total Expenses <span id="total-expenses">{printAmount(totalExpenses)}</span></p>
        </div>
    )
}

export default AmountDetailsComponent;