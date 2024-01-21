function calculate() {
    var amount = parseFloat(document.getElementById('amount').value);
    var duration = parseInt(document.getElementById('duration').value);

    // Ensure the duration is not more than 12 months
    duration = Math.min(duration, 12);

    var interestRate = 0.07;
    var monthlyInterestRate = interestRate / 12;
    var monthlyInvestment = amount / duration;

    var totalEarnings = 0;
    var monthlyDetailsHTML = '<h3>Monthly Details:</h3><ul>';

    for (var i = 0; i < duration; i++) {
        var monthlyEarnings = monthlyInvestment * monthlyInterestRate;
        totalEarnings += monthlyEarnings;
        var totalAmount = amount + totalEarnings;

        monthlyDetailsHTML += '<li>Month ' + (i + 1) + ': ₹' + monthlyInvestment.toFixed(2) +
                             ' (Investment) + ₹' + monthlyEarnings.toFixed(2) +
                             ' (Earnings) = ₹' + totalAmount.toFixed(2) + '</li>';
    }

    monthlyDetailsHTML += '</ul>';

    document.getElementById('investedAmount').innerText = 'Amount invested: ₹' + amount.toFixed(2);
    document.getElementById('earnings').innerText = 'Total earnings at 7% interest rate: ₹' + totalEarnings.toFixed(2);
    document.getElementById('totalAmount').innerText = 'Total amount after ' + duration + ' months: ₹' + (amount + totalEarnings).toFixed(2);
    document.getElementById('monthlyDetails').innerHTML = monthlyDetailsHTML;

    document.getElementById('result').style.display = 'block';
}

function redirectToPayment() {
    // Placeholder URL, replace this with the actual payment gateway integration URL
    var paymentGatewayURL = 'https://your-payment-gateway.com';

    // You may also pass additional parameters such as amount, order details, etc.
    // var amount = parseFloat(document.getElementById('amount').value);
    // paymentGatewayURL += '?amount=' + amount;

    window.location.href = paymentGatewayURL;
}

function resetForm() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('amount').value = '';
    document.getElementById('duration').value = '';
}
