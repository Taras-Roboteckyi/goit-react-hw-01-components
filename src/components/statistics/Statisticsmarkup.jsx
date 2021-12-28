import PropTypes from 'prop-types';

const StatisticList = (props) => {

    const { title, stats } = props;
    
    return (
<section class="statistics">
       {title && <h2 class="title">{title}</h2>} 
       
       <ul class="stat-list">
    
          {stats.map(stat => (
      <li key={stat.id} class="item">
        <span class="label">{stat.label}</span>
        <span class="percentage">{stat.percentage}</span>
      </li>
    ))}
      </ul>
 </section>
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