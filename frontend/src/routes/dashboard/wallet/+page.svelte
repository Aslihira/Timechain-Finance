<script lang="ts">
    let amount: number = 0;
    let paymentMethod: string = 'satoshi';
  
    const handleAddFunds = () => {
      if (amount <= 0) {
        alert('Please enter a valid amount.');
        return;
      }
  
      // Simulate adding funds and recording on the blockchain
      console.log(`Adding ${amount} to wallet using ${paymentMethod}.`);
      //api here
    };
  </script>
  
  <style>
    .page-container {
      padding: 2rem;
      background-color: #f4f4f4;
    }
  
    .header {
      background-color: #003A4D;
      color: #fff;
      padding: 1rem;
      text-align: center;
      border-radius: 0.5rem;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      margin-bottom: 1.5rem;
    }
  
    .header h1 {
      font-size: 1.75rem;
      margin: 0;
    }
  
    .button-container {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
    }
  
    .back-button {
      background-color: #007A94;
      color: #fff;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      text-decoration: none;
      font-size: 1rem;
      font-weight: bold;
      transition: background-color 0.3s ease;
    }
  
    .back-button:hover {
      background-color: #005770;
    }
  
    .wallet-container {
      background-color: #fff;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
  
    .wallet-container h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #2c3e50;
    }
  
    .form-group {
      margin-bottom: 1rem;
    }
  
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: #34495e;
    }
  
    .form-group input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #e5e7eb;
      border-radius: 0.5rem;
      font-size: 1rem;
    }
  
    .form-group select {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #e5e7eb;
      border-radius: 0.5rem;
      font-size: 1rem;
    }
  
    .submit-button {
      background-color: #007A94;
      color: #fff;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-size: 1rem;
      font-weight: bold;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    .submit-button:hover {
      background-color: #005770;
    }
  </style>
  
  <div class="page-container">
    <div class="header">
      <h1>Wallet</h1>
    </div>
  
    <div class="button-container">
      <a href="/dashboard" class="back-button">Back to Dashboard</a>
    </div>
  
    <div class="wallet-container">
      <h2>Add Funds</h2>
      <div class="form-group">
        <label for="amount">Amount </label>
        <input type="number" id="amount" bind:value={amount} placeholder="Enter amount" />
      </div>
      <div class="form-group">
        <label for="paymentMethod">Payment Method</label>
        <select id="paymentMethod" bind:value={paymentMethod}>
          <option value="satoshi">Satoshi</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="credit card">Credit Card</option>
          <option value="paypal">Paypal</option>
        </select>
      </div>
      <button class="submit-button" on:click={handleAddFunds}>Add Funds</button>
    </div>
  </div>
  