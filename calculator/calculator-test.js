it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 50000, years: 50, rate: 0.50})).toEqual('2083.33');
  expect(calculateMonthlyPayment({amount: 1, years: 1, rate: 1})).toEqual('0.13');
  expect(calculateMonthlyPayment({amount: 100000, years: 1, rate: 100000})).toEqual('833333333.33');
});

it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 1, years: 1, rate: 0.01})).toEqual('0.08');
  expect(calculateMonthlyPayment({amount: 10, years: 1, rate: 0.1})).toEqual('0.88');
  expect(calculateMonthlyPayment({amount: 1, years: 1, rate: 0.1})).toEqual('0.09');
  //copied from solution
  expect(calculateMonthlyPayment({amount: 10043, years: 8, rate: 0.058})).toEqual('131.00');
});

it("should return a string", function() {
  expect(typeof(calculateMonthlyPayment({amount: (Math.random() + 1)*10000,
  years: (Math.random() + 1)*10, rate: Math.random() * (0.9 - 0.01) + 0.01}))).toEqual('string');
});