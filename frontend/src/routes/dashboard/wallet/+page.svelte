<script lang="ts">
  import { addFundsToWallet } from '../../../api';

  let amount: number = 0;
  let paymentMethod: string = '';
  let successMessage: string = '';
  let errorMessage: string = '';

  const handleAddFunds = async () => {
    if (amount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }

    try {   
      await addFundsToWallet({ amount, paymentMethod });
      successMessage = 'Funds added successfully!';
    } catch (error) {
      errorMessage = 'Failed to add funds. Please try again.';
    }
  };
</script>

 <!-- Navbar -->
   <nav class="bg-[#003A4D] text-white p-3 flex justify-between items-center shadow-md">
    <div class="flex items-center space-x-4">
        <a href="/" class="flex items-center -space-x-8">
            <img src="/images/transparent_lighter_logo.png" class="h-12" alt="tcf logo" />
            <span class="uppercase text-2xl font-semibold whitespace-nowrap text-white ml-2">
                timechain <span class="text-teal-300">finance</span>
            </span>
        </a>
    </div>
    <div class="flex">
        <a href="/dashboard/loan-requests" class="text-white text-lg hover:bg-[#005770] px-4 py-2 rounded-lg transition duration-300">Browse Loan Requests</a>
        <a href="/dashboard/my-loans" class="text-white text-lg hover:bg-[#005770] px-4 py-2 rounded-lg transition duration-300">My Loans</a>
        <a href="/dashboard/wallet" class="text-white text-lg hover:bg-[#005770] px-4 py-2 rounded-lg transition duration-300">Wallet</a>
        <a href="/dashboard/profile" class="text-white text-lg hover:bg-[#005770] px-4 py-2 rounded-lg transition duration-300">Profile</a>
        <a href="/dashboard/settings" class="text-white text-lg hover:bg-[#005770] px-4 py-2 rounded-lg transition duration-300">Settings</a>
    </div>
</nav>

<!-- Main content -->
<div class="p-8 bg-gray-100 min-h-[80vh]">
  <div class="bg-white p-8 rounded-lg shadow-lg">
    <h2 class="text-xl font-semibold text-gray-800 mb-4">Add Funds</h2>
    <div class="mb-4">
      <label for="amount" class="block mb-2 text-gray-700">Amount</label>
      <input
        type="number"
        id="amount"
        bind:value={amount}
        placeholder="Enter amount"
        class="w-full p-3 border border-gray-300 rounded-md text-base"
      />
    </div>

    <div class="mb-4">
      <label for="paymentMethod" class="block mb-2 text-gray-700">Payment Method</label>
      <select
        id="paymentMethod"
        bind:value={paymentMethod}
        class="w-full p-3 border border-gray-300 rounded-md text-base"
      >
      <option value="Credit_Card">Credit Card</option>
        <option value="UPI">UPI</option>
        <option value="Net_Banking">Net Banking</option>
        <option value="Debit_Card">Debit Card</option>
        <option value="Wallet">Wallet</option>
      </select>
    </div>

    <button
      class="bg-[#003A4D] text-white py-3 px-6 rounded-md text-base font-semibold transition duration-300 hover:bg-teal-700 w-full"
      on:click={handleAddFunds}
    >
      Add Funds
    </button>

    {#if successMessage}
      <div class="mt-4 text-center text-green-600 font-medium">
        {successMessage}
      </div>
    {/if}

    {#if errorMessage}
      <div class="mt-4 text-center text-red-600 font-medium">
        {errorMessage}
      </div>
    {/if}
  </div>

  <div class="flex justify-center mt-8">
    <a
      href="/dashboard"
      class="bg-[#003A4D] text-white py-3 px-6 rounded-md text-base font-semibold transition duration-300 hover:bg-teal-700"
    >
      Back to Dashboard
    </a>
  </div>
</div>
