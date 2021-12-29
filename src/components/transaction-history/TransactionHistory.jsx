import transactions from './transactions.json';
import TransactionHistory from './TransactionTableRow';
import { ContainerTransaction } from './Transaction.styled'


export default function TransactionApp() {
    return (
        <ContainerTransaction>
        <TransactionHistory items={transactions} />
        </ContainerTransaction>
       
    )
}
