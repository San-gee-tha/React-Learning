import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <ExpenseItem expenseDate={expenses[0].date} expenseTitle={expenses[0].title} expenseAmt={expenses[0].amount}></ExpenseItem>   
      <ExpenseItem expenseDate={expenses[1].date} expenseTitle={expenses[1].title} expenseAmt={expenses[1].amount} ></ExpenseItem>   
      <ExpenseItem expenseDate={expenses[2].date} expenseTitle={expenses[2].title} expenseAmt={expenses[2].amount}></ExpenseItem>   
      <ExpenseItem expenseDate={expenses[3].date} expenseTitle={expenses[3].title} expenseAmt={expenses[3].amount} ></ExpenseItem>  
     {/* { expenses && expenses.array.forEach((element) => 
         <ExpenseItem expenseDate={element.date} expenseTitle={element.title} expenseAmt={element.amount}></ExpenseItem> 
      )
     } */}
    </div>
  );
}

export default App;
