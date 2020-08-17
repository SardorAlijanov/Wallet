import React from 'react';

export default function Total({ resultExpences, resultIncomes, totalBalance }){
    return (
        <section className="total">
            <header className="total__header"> 
                <h3>Balance</h3>
                <p className="total__balance">{totalBalance} $</p>
            </header>
            <div className="total__main">
                <div className="total__main-item total__income">
                    <h4>Incomes</h4>
                    <p className="total__money total__money-income">
                        +{resultIncomes} $
                    </p>
                </div>
                <div className="total__main-item total__expenses">
                    <h4>Expense</h4>
                    <p className="total__money total__money-expenses">
                        -{resultExpences} $
                    </p>
                </div>
            </div>
        </section>
    );
}