it('should sum totals from allPayments object for any payment type', function () {
    allPayments = {'A':{'test': 1},
    'B' : {'test': 2},
    'C' : {'test': 3}};
    expect(sumPaymentTotal('test')).toEqual(6);
});

it('should calculate an accurate tip', function() {
    expect(calculateTipPercent(20,10)).toEqual(50);
});

it('should append a newly created td', function() {
    let newTR = document.createElement('tr');
    appendTd(newTR, "");
    expect(newTR.childElementCount).toEqual(1);
});

it('should append a delete button', function() {
    let newTr = document.createElement('tr');
    appendDeleteBtn(newTr);
    expect(newTr.childElementCount).toEqual(1);
});