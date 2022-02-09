import './ExpenseItem.css'

function ExpenseItem(props) {
    // const expenseDate = new Date(2022, 1, 7);
    // const expenseTitle = "Groceries";
    // const expenseAmt = 1234;
    return (
        <div className="expense-item">
            <div>{props.expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.expenseTitle}</h2>
                <div className="expense-item__price">Rs.{props.expenseAmt}</div>
            </div>
        </div>
    )
}
export default ExpenseItem