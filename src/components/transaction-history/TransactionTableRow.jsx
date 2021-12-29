import PropTypes from 'prop-types';
import {
  TransactionHead,
  TransactionRow,
  TransactionItem,
  TransactionHeadItem,
TableHeaderStyle} from './Transaction.styled'


export default function TransactionHistory (props) {
     
  return (
  <TransactionHead>
    <TableHeader />
      <TableBody items={props.items}/>
      </TransactionHead>
  )  
}

 function TableHeader() {
    
   return (
     <TableHeaderStyle>
    <TransactionRow>
      <TransactionHeadItem>Type</TransactionHeadItem>
      <TransactionHeadItem>Amount</TransactionHeadItem>
      <TransactionHeadItem>Currency</TransactionHeadItem>
    </TransactionRow>
  </TableHeaderStyle>
   )  
}

function TableBody(props) {
    //console.log(props)
  return (
    <tbody>
      {props.items.map(item => (
            <TableRow key={item.id} row={item}/>
      ))}
      
    </tbody>)
    
}

function TableRow(props) {
    const {type, amount, currency} = props.row
  
  return (
     <TransactionRow>
      <TransactionItem>{type}</TransactionItem>
      <TransactionItem>{amount}</TransactionItem>
      <TransactionItem>{currency}</TransactionItem>
    </TransactionRow>
    
  )
    
}

TableBody.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
  })),
  
}