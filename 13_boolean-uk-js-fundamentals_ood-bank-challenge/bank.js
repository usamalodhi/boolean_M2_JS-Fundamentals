/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable space-before-function-paren */

const moment = require('moment');
const fs = require('fs');
const { sep } = require('path');
const _ = require('underscore');
const fixedWidthString = require('fixed-width-string');

function transactionDate(day, month, year) {
  const date = new Date(`${month},${day},${year}`);
  moment(date).format('DD/MM/YYYY');
  return moment(date).format('DD/MM/YYYY');
}

class AccountMovement {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  movement(amount, day, month, year) {
    const type = amount > 0 ? 'credit' : 'debit';
    this.balance = this.balance + amount;
    const depositObj = {
      depositDate: transactionDate(day, month, year),
      type: type,
      amount: amount,
      balance: this.balance,
    };
    return this.transactions.push(depositObj);
  }
}

class PrintStatement {
  constructor(printObj) {
    this.header = [
      fixedWidthString('date', 11),
      fixedWidthString('credit', 11),
      fixedWidthString('debit', 11),
      fixedWidthString('balance', 11),
    ].join('||');
    this.printObj = printObj;
  }

  sortDates() {
    // sort by dates using sortBy from underscore library
    this.printObj = _.sortBy(this.printObj, 'depositDate');
  }

  formatStatement() {
    this.sortDates();
    const spaces = '           ';
    let statementTable = this.header + '\n';
    for (let i = this.printObj.length - 1; i >= 0; i--) {
      let statementRow = null;
      if (this.printObj[i].type === 'credit') {
        statementRow = [
          fixedWidthString(this.printObj[i].depositDate, 11),
          fixedWidthString(Math.abs(this.printObj[i].amount).toFixed(2), 11),
          spaces,
          fixedWidthString(this.printObj[i].balance.toFixed(2), 11),
        ].join('||');
      }
      if (this.printObj[i].type === 'debit') {
        statementRow = [
          fixedWidthString(this.printObj[i].depositDate, 11),
          spaces,
          fixedWidthString(Math.abs(this.printObj[i].amount).toFixed(2), 11),
          fixedWidthString(this.printObj[i].balance.toFixed(2), 11),
        ].join('||');
      }
      statementRow += '\n';
      statementTable += statementRow;
    }
    return statementTable;
  }
}

// Writing to File
testAccount = new AccountMovement();
testAccount.movement(1000, 10, 1, 2012);
testAccount.movement(2000.0, 13, 1, 2012);
testAccount.movement(-500.0, 14, 1, 2012);
const testPrint = new PrintStatement(testAccount.transactions);
fs.writeFile('output.md', testPrint.formatStatement(), (err) => {
  if (err) throw err;
});
// creates file called output.md which contains the above printed out

module.exports = {
  AccountMovement,
  PrintStatement,
};
