/* eslint-disable comma-dangle */
/* eslint-disable semi */
// PrintStatement
const { AccountMovement, PrintStatement } = require('../bank');

describe('Account, Transaction', () => {
  let testAcc, testPrint;

  beforeEach(() => {
    testAcc = new AccountMovement();
    testPrint = new PrintStatement(testAcc.transactions);
    testAcc.transactions = [];
  });
  // ---TEST 1 - £1000 deposit on 10/01/2012 ---
  it('£1000 deposit on 10/01/2012', () => {
    const expected = [
      {
        depositDate: '10/01/2012',
        type: 'credit',
        amount: 1000,
        balance: 1000,
      },
    ];
    testAcc.movement(1000, 10, 1, 2012);
    const result = testAcc.transactions;
    expect(result).toEqual(expected);
  });
  // ---TEST 2 - £1000 deposit on 1/01/2012, £2000 deposit on 13/01/2012: balance of £3000 ---
  it('£1000 deposit on 1/01/2012, £2000 deposit on 13/01/2012: balance of £3000', () => {
    const expected = [
      {
        depositDate: '10/01/2012',
        type: 'credit',
        amount: 1000,
        balance: 1000,
      },
      {
        depositDate: '13/01/2012',
        type: 'credit',
        amount: 2000,
        balance: 3000,
      },
    ];
    testAcc.movement(1000, 10, 1, 2012);
    testAcc.movement(2000, 13, 1, 2012);
    const result = testAcc.transactions;
    expect(result).toEqual(expected);
  });
  // ---TEST 3 - £1000 deposit on 1/01/2012, £2000 deposit on 13/01/2012, £500 withdrawal on 14/01/2012: balance of £2500 ---
  it('£1000 deposit on 1/01/2012, £2000 deposit on 13/01/2012, £500 withdrawal on 14/01/2012: balance of £2500', () => {
    const expected = [
      {
        depositDate: '10/01/2012',
        type: 'credit',
        amount: 1000,
        balance: 1000,
      },
      {
        depositDate: '13/01/2012',
        type: 'credit',
        amount: 2000,
        balance: 3000,
      },
      {
        depositDate: '14/01/2012',
        type: 'debit',
        amount: -500,
        balance: 2500,
      },
    ];
    testAcc.movement(1000, 10, 1, 2012);
    testAcc.movement(2000, 13, 1, 2012);
    testAcc.movement(-500, 14, 1, 2012);
    const result = testAcc.transactions;
    expect(result).toEqual(expected);
  });
  // ---TEST 4 - Test Printing of Statement - header ---
  it('returns the header ', () => {
    const expected =
      ['date       ||credit     ||debit      ||balance    '] + '\n';
    const result = testPrint.formatStatement();
    expect(result).toEqual(expected);
  });
});
