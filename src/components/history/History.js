import React from 'react';
import HistoryItem from './HistoryItem';

const History = ({transactions, deleteTransaction}) =>{
    return(
    <section className="history">
        <h3>History</h3>
            <ul className="history__list">
            {transactions.map(item=>
                <HistoryItem
                    key = {item.id}
                    transaction={item}
                    deleteTransaction={deleteTransaction}
                />
            )}
            </ul>
    </section>
    )
}

export default History;