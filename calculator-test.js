it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 17000,
    years: 7,
    rate: 5,
  }
  expect(calculateMonthlyPayment(values)).toEqual('240.28');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 855525658,
    years: 7.3,
    rate: 19.5,
  }
  expect(calculateMonthlyPayment(values)).toEqual('18380556.18');
});

describe('should return invalid input', function () {
  it('should return invalid with no inputs', function() {
    const values = {
      amount: '',
      years: '',
      rate: '',
    }
    expect(calculateMonthlyPayment(values)).toEqual('Invalid Input')
  })

  it('should return invalid with non numerical inputs', function () {
    const values = {
      amount: 'hello',
      years: 'goodbye',
      rate: 17.5,
    }
    expect(calculateMonthlyPayment(values)).toEqual('Invalid Input')
  })
})


