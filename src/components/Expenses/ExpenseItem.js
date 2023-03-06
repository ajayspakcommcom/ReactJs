
import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    // const [amount, setAmount] = useState(props.amount);

    const clickHandler = (e) => {
        //console.log(e.target.innerText);
        setTitle('Updated!');
    };

    // const changeAmountHandle = () => {
    //     setAmount('78');
    // };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
                <button onClick={clickHandler}>Change Title</button>
                {/* <button onClick={changeAmountHandle}>Change Amount {amount}</button> */}
            </div>
        </Card>
    );
}

export default ExpenseItem;