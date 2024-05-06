import ExpenseList from './ExpenseList';
import ExpenseForm from './ExpenseForm';
import { ToastContainer } from 'react-toastify';

const HomePage = () => (
    <div style={{ width: '60%', margin: 'auto' }}>
        <ToastContainer />
        <h4>New Expense</h4>
        <ExpenseForm />
        <hr style={{ border: '1px solid grey' }} />
        <h4>Your Expenses</h4>
        <ExpenseList />
    </div>
);

export default HomePage;