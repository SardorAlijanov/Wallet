import React, { Component } from 'react';
import Total from './components/total/Total';
import History from './components/history/History';
import Operation from './components/operation/Operation';

class App extends Component{
  state = {
    transactions: JSON.parse(localStorage.getItem('calcMoney')) || [],
    description:'',
    amount: '',
    resultIncomes: 0,
    resultExpences: 0,
    totalBalance: 0,
  }

  componentWillMount(){
    this.getTotalBalance();
  }

  addTransaction = add =>{
    const transactions = [...this.state.transactions,
    {
      //eslint-disable-next-line
      id: `cmr${(+new Date).toString(16)}`,
      description: this.state.description,
      amount: parseFloat(this.state.amount),
      add
    } 
  ];

  this.setState({
    transactions,
    description: '',
    amount:'',
  },()=>{
    this.getTotalBalance();
    this.addStorage();
  });
}

  addAmount = e =>{
    this.setState({amount: e.target.value});
  }

  addDescription = e =>{
    this.setState({description: e.target.value});
  }

  getIncomes = () => this.state.transactions
    .reduce((accumulator, item) => item.add ? item.amount + accumulator: accumulator,0)

  getExpences = () => this.state.transactions
  .reduce((accumulator, item) => !item.add ? item.amount + accumulator: accumulator,0)

  getTotalBalance(){
    const resultIncomes = this.getIncomes();
    const resultExpences = this.getExpences();

    const totalBalance = resultIncomes - resultExpences;

    this.setState({
      resultIncomes,
      resultExpences,
      totalBalance,
    })
  }

  addStorage(){
    localStorage.setItem('calcMoney', JSON.stringify(this.state.transactions))
  }

  deleteTransaction = key =>{
    const transactions = this.state.transactions.filter(item => item.id !== key)
    this.setState({transactions}, this.getTotalBalance)
  }

  render(){
    return (
      <>
          <header>
              <h1>Wallet</h1>
              <h2>Income and Expense calculator</h2>
          </header>
  
          <main>
              <div className="container">
                <Total 
                  resultExpences={this.state.resultExpences}
                  resultIncomes={this.state.resultIncomes}
                  totalBalance={this.state.totalBalance}
                />
  
                <History 
                transactions={this.state.transactions}
                deleteTransaction={this.deleteTransaction}
                />
  
                <Operation 
                  addTransaction={this.addTransaction}
                  addDescription = {this.addDescription}
                  addAmount = {this.addAmount}
                  description = {this.state.description}
                  amount = {this.state.amount}
                />
              </div>
          </main>
  
      </>
    );
  }

}

export default App;