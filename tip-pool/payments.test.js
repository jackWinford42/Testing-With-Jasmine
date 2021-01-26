describe("payments test", function() {
    beforeEach(function () {
        billAmtInput.value = 10;
        tipAmtInput.value = 5;
    });
    it('should add a curPayment object to allPayments', function() {
        submitPaymentInfo()
        expect(Object.keys(allPayments).length).toEqual(1);
    });
    it('should create an object for the current payment values', function() {
        expect(createCurPayment()).toEqual({
            billAmt: "10",
            tipAmt: "5",
            tipPercent: 50
        });
    });
    it('should create a table row element and append it', function() {
        appendPaymentTable({billAmt: 10, tipAmt: 5, tipPercent: 50});
        expect(paymentTbody.childElementCount).toEqual(2);
    });
    it('should update the summary with an accurate row element', function() {
        updateSummary();
        expect(document.querySelector('#summaryTable tbody').childElementCount).toEqual(1);
    });
});
