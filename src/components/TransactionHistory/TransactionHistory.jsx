import PropTypes from 'prop-types'

import { Table, TabHead, TabR, TabH, TabBody, TabD } from './TransactionHistory.style'


const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TabHead>
        <TabR>
          <TabH>Type</TabH>
          <TabH>Amount</TabH>
          <TabH>Currency</TabH>
        </TabR>
      </TabHead>


      <TabBody>
        {items.map(({ id, type, amount, currency }) => {

          return (
            <TabR key={id}>
              <TabD>{type}</TabD>
              <TabD>{amount}</TabD>
              <TabD>{currency}</TabD>
            </TabR>
          )
        })}
      </TabBody>
    </Table>
  )
};


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        }),
    ),
};


export default TransactionHistory;
