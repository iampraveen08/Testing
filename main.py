from flask import Flask, render_template, request, jsonify
import random

app = Flask(__name__)

# Store user data temporarily (replace with a database in a production scenario)
users = {}

# Generate a random 6-digit OTP
def generate_otp():
    return str(random.randint(100000, 999999))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send-otp', methods=['POST'])
def send_otp():
    mobile_number = request.form.get('mobile_number')

    if mobile_number in users:
        return jsonify({'status': 'error', 'message': 'Mobile number already registered'})

    otp = generate_otp()
    users[mobile_number] = {'otp': otp}

    # In a real-world scenario, you would use an SMS gateway to send the OTP to the user's mobile number
    # For this example, we'll print the OTP to the console
    print(f"OTP for {mobile_number}: {otp}")

    return jsonify({'status': 'success', 'message': 'OTP sent successfully'})


if __name__ == '__main__':
  app.run(host='0.0.0.0', port=8080, debug=True)
