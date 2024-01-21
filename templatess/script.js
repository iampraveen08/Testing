function sendOTP() {
    var mobileNumber = document.getElementById('mobile_number').value;

    // Validate the mobile number (basic validation for 10 digits)
    var mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobileNumber)) {
        alert('Please enter a valid 10-digit mobile number');
        return;
    }

    // Send the mobile number to the backend to generate and send an OTP
    fetch('/send-otp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'mobile_number': mobileNumber,
        }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        if (data.status === 'success') {
            // Display a success message or redirect the user to the next step
            document.getElementById('result').innerText = 'OTP sent successfully';
        } else {
            document.getElementById('result').innerText = 'Failed to send OTP';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'Failed to send OTP';
    });
}
