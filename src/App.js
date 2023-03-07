
import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {id:'e1', title: 'Toilet Paper', amount: 94.67, date: new Date(2021, 7, 14)},
  {id:'e2', title: 'New Tv', amount: 799.49, date: new Date(2021, 2, 12)},
  {id:'e3', title: 'Car Insurance', amount: 297.67, date: new Date(2021, 2, 28)},
  {id:'e4', title: 'New Desk (Wooden)', amount: 297.67, date: new Date(2021, 5, 12)},
  {id:'e5', title: 'Bharat Varansi', amount: 600, date: new Date(2023, 5, 12)}];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {      
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
       <Expenses items={expenses} />
    </div>
  );
}

export default App;
