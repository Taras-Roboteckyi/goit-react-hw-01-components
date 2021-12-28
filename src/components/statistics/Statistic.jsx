import data from './data.json'
import StatisticList from './Statisticsmarkup'


export default function Statistic() {
    return (
        <div>
        <StatisticList title="Upload stats" stats={data} />
        <StatisticList stats={data} />;
        </div>
       
    )
}