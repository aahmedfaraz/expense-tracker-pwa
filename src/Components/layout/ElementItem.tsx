import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import globalContext from '../../Context/Global/globalContext';
import alertContext from '../../Context/Alert/alertContext';

type historyElement = {
    description: string,
    amount: number | null,
    type: string
}

type props = {
    element: historyElement,
    index: number
}

const ElementItem : React.FC<props> = ({index, element: {description, amount, type}}) => {
    const {history, clearTransaction} = useContext(globalContext);
    const {displayAlert} = useContext(alertContext);

    // Check if transaction is valid to clear the given element otherwise show alert message
    const validateClearTransaction = (index: number) => {
        let totalIncome = 0;
        let totalExpenses = 0;
        const check = history.filter((ele : historyElement,ind : number) => ind !== index);
        if(check.filter((element : historyElement) => element.type === 'income').length > 0) {
            totalIncome = check.filter((element : historyElement) => element.type === 'income').map((element : historyElement) => element.amount).reduce((acc:number, amount:number) => acc + amount);
        }
        if(check.filter((element : historyElement) => element.type === 'expenses').length > 0){
            totalExpenses = check.filter((element : historyElement) => element.type === 'expenses').map((element : historyElement) => element.amount).reduce((acc:number, amount:number) => acc + amount);         
        }
        return totalIncome - totalExpenses >= 0;
    }

    // Print amount in separated format
    const printAmount = (amount : number | null) : string => {
        if(amount === null) {
            amount = 0;
        }
        return amount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Clear element when click on [x] button
    const clearElement = () => {
        if(validateClearTransaction(index)) {
            clearTransaction(index);
        } else {
          displayAlert('To delete this income you have to delete some of your expenses');
        }
    }
    
    return (
        <div className="element">
            <div className={`${type} box`}>
                <div className="description">{description}</div>
                <div className="amount">{printAmount((amount))}</div>
            </div>
            <div className="cancel-button" onClick={clearElement}>x</div>
        </div>
    )
}

ElementItem.prototype = {
    index: PropTypes.number.isRequired,
    element: PropTypes.object.isRequired,
}

export default ElementItem;
