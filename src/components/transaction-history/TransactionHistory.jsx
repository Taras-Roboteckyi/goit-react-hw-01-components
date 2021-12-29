import transactions from './transactions.json';
import TransactionHistory from './TransactionTableRow';

export default function TransactionApp() {
    return (
        <div>
        <TransactionHistory items={transactions} />
        </div>
       
    )
}
