import PropTypes from 'prop-types';
import {
  ContainerStatistic,
  Title,
  StatisList,
Item} from './Statistic.styled'
const StatisticList = (props) => {

    const { title, stats } = props;
    
    return (
<ContainerStatistic>
       {title && <Title>{title}</Title>} 
       
       <StatisList>
    
          {stats.map(({id,label, percentage}) => (
      <Item key={id} >
        <span>{label}</span>
        <span>{percentage}</span>
      </Item>
    ))}
      </StatisList>
 </ContainerStatistic>
    )
}

export default StatisticList

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
  })),
  
}