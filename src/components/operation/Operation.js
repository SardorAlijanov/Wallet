import React from 'react';

export default function Operation({ addTransaction, addDescription, addAmount, description, amount }){
     return(
        <section className="operation">
                <h3>New operation</h3>
                <form id="form">
                    <label>
                        <input type="text" 
                        onChange={addDescription}
                        className="operation__fields operation__name"
                        placeholder="Reason" 
                        value = {description}/>
                    </label>
                    <label>
                        <input type="number" 
                        onChange={addAmount}
                        className="operation__fields operation__amount"
                        placeholder="Enter amount" 
                        value={amount}
                        />
                    </label>
                    <div className="operation__btns">
                        <button
                            onClick = {()=>addTransaction(false)}
                            type="button"
                            className="operation__btn operation__btn-subtract">EXPENSE
                        </button> 
                        <button 
                        onClick = {()=>addTransaction(true)}
                        type="button"
                        className="operation__btn operation__btn-add">INCOME</button>
                    </div>

                </form>
            </section>
    )
}