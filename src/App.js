import React from 'react';

function App() {
  return (
    <>
      <header>
        <h1>Wallet</h1>
        <h2>Income and Expense calculator</h2>
      </header>

      <main>
          <div class="container">
              <section class="total">
                  <header class="total__header">
                      <h3>Balance</h3>
                      <p class="total__balance">0 $</p>
                  </header>
                  <div class="total__main">
                      <div class="total__main-item total__income">
                          <h4>Incomes</h4>
                          <p class="total__money total__money-income">
                              +0 $
                          </p>
                      </div>
                      <div class="total__main-item total__expenses">
                          <h4>Expense</h4>
                         <p class="total__money total__money-expenses">
                              -0 $
                          </p>
                      </div>
                  </div>
              </section>

            <section class="history">
                <h3>History</h3>
                <ul class="history__list">
                    <li class="history__item history__item-plus">Salary
                        <span class="history__money">+30000 $</span>
                        <button class="history__delete">x</button>
                    </li>

                    <li class="history__item  history__item-minus">Paid a debt
                        <span class="history__money">-10000 $</span>
                        <button class="history__delete">x</button>
                    </li>
                </ul>
            </section>

            <section class="operation">
                <h3>New operation</h3>
                <form id="form">
                    <label>
                        <input type="text" class="operation__fields operation__name" placeholder="Reason" />
                    </label>
                    <label>
                        <input type="number" class="operation__fields operation__amount" placeholder="Enter amount" />
                    </label>
                    <div class="operation__btns">
                        <button type="submit" class="operation__btn operation__btn-subtract">EXPENSE</button>
                        <button type="submit" class="operation__btn operation__btn-add">INCOME</button>
                    </div>

                </form>
            </section>
        </div>
    </main>

    </>/*end of React.Fragment */
  );
}

export default App;
