import PropTypes from 'prop-types'
import getRandomHexColor from './getRandomHexColor.js';
import { StnStatistics ,TitleHeader, StatList, Item, Label, Percentage } from './Statistics.styled'

const Statistics = ({ title, stats }) => {
 return (
    <StnStatistics>
     {title && <TitleHeader>{title}</TitleHeader>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
        <Item  style={{ backgroundColor: getRandomHexColor() }} key={id}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </Item>
        ))}
      </StatList>
    </StnStatistics>
  );
};

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
}



