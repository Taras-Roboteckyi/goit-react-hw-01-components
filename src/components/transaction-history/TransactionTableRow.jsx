import PropTypes from 'prop-types';

export default function TransactionHistory (props) {
     
  return (
  <table class="transaction-history">
    <TableHeader />
      <TableBody items={props.items}/>
      </table>
  )  
}

 function TableHeader() {
    
   return (
     <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
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
     <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    
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