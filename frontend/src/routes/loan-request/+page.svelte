<script lang="ts">
    import { createLoanRequest } from '../../api'; 

    let loanRequest = {
        amount: '',
        purpose: '',
        duration: '',
        interestRate: ''
    };

    async function submitRequest() {
    try {
        const response = await createLoanRequest({
            amount: Number(loanRequest.amount),
            purpose: loanRequest.purpose,
            termMonths: Number(loanRequest.duration),
            interestRate: Number(loanRequest.interestRate)
        });

        console.log('Response:', response);

        if (response.status === 201) {
            alert('Loan request submitted successfully!');
            
            loanRequest = {
                amount: '',
                purpose: '',
                duration: '',
                interestRate: ''
            };
        } else {
            console.warn('Unexpected status code:', response.status);
            alert('Failed to submit loan request.');
        }
    } catch (error) {
        console.error('Error submitting loan request:', error);
        alert('An error occurred while submitting the loan request.');
    }
}

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
    <div class="flex space-x-4">
        <a href="/dashboard/loan-requests" class="text-white text-lg hover:bg-[#005770] px-4 py-2 rounded-lg transition duration-300">Browse Loan Requests</a>
        <a href="/dashboard/my-loans" class="text-white text-lg hover:bg-[#005770] px-4 py-2 rounded-lg transition duration-300">My Loans</a>
        <a href="/dashboard/wallet" class="text-white text-lg hover:bg-[#005770] px-4 py-2 rounded-lg transition duration-300">Wallet</a>
        <a href="/dashboard/profile" class="text-white text-lg hover:bg-[#005770] px-4 py-2 rounded-lg transition duration-300">Profile</a>
        <a href="/dashboard/settings" class="text-white text-lg hover:bg-[#005770] px-4 py-2 rounded-lg transition duration-300">Settings</a>
    </div>
</nav>

<!-- Loan Request Page Content -->
<div class="max-w-4xl mx-auto p-8 bg-[#003A4D] rounded-lg shadow-lg mt-8 mb-24">
    <div class="flex justify-between items-center mb-8 pb-4 border-b-2 border-teal-800">
        <h1 class="text-3xl font-bold text-white uppercase">Create Loan Request</h1>
        <a href="/dashboard" class="bg-[#007A94] text-white py-2 px-4 rounded-lg font-bold hover:bg-[#005770] transition duration-300">Back to Dashboard</a>
    </div>

    <form on:submit|preventDefault={submitRequest} class="space-y-6">
        <div class="space-y-2">
            <label for="amount" class="block text-lg font-semibold text-white">Amount</label>
            <input
                id="amount"
                type="number"
                bind:value={loanRequest.amount}
                placeholder="Enter the amount"
                required
                class="w-full p-3 border border-[#005770] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
        </div>

        <div class="space-y-2">
            <label for="purpose" class="block text-lg font-semibold text-white">Purpose</label>
            <textarea
                id="purpose"
                bind:value={loanRequest.purpose}
                placeholder="Describe the purpose of the loan"
                rows="4"
                required
                class="w-full p-3 border border-[#005770] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            ></textarea>
        </div>

        <div class="space-y-2">
            <label for="duration" class="block text-lg font-semibold text-white">Duration (in months)</label>
            <input
                id="duration"
                type="number"
                bind:value={loanRequest.duration}
                placeholder="Enter the duration"
                required
                class="w-full p-3 border border-[#005770] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
        </div>

        <div class="space-y-2">
            <label for="interestRate" class="block text-lg font-semibold text-white">Preferred Interest Rate (%)</label>
            <input
                id="interestRate"
                type="number"
                step="0.1"
                bind:value={loanRequest.interestRate}
                placeholder="Enter the interest rate"
                required
                class="w-full p-3 border border-[#005770] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
        </div>

        <button type="submit" class="w-full bg-[#007A94] text-white py-3 rounded-lg font-bold hover:bg-[#005770] transition duration-300">Submit Request</button>
    </form>
</div>
