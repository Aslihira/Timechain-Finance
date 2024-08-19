<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import { getAllApprovedLoans, fundLoan as fundLoanApi } from '../../../api';

    interface Loan {
        id: string;
        borrower: {
            name: string;
        };
        amount: number;
        purpose: string;
        interestRate: number;
        termMonths: number;
        borrowerRating?: number;
    }

    let approvedLoans: Loan[] = [];
    let selectedLoan: Loan | null = null;
    const showModal = writable(false);
    const showFundModal = writable(false);
    let errorMessage = '';

    function generateRandomRating(): number {
        return parseFloat((Math.random() * (5 - 3) + 3).toFixed(1));
    }

    async function fetchApprovedLoans() {
        try {
            const response = await getAllApprovedLoans();
            approvedLoans = response.data.map((loan: Loan) => ({
                ...loan,
                borrowerRating: generateRandomRating(),
            }));
        } catch (error) {
            errorMessage = 'Failed to load loans. Please try again later.';
        }
    }

    function openModal(loan: Loan) {
        selectedLoan = loan;
        showModal.set(true);
    }

    function closeModal() {
        showModal.set(false);
        selectedLoan = null;
    }

    function openFundModal() {
        showModal.set(false);
        showFundModal.set(true);
    }

    function closeFundModal() {
        showFundModal.set(false);
    }

    async function fundLoan() {
        if (selectedLoan) {
            try {
                const formData = new FormData(document.querySelector('form')!);
                const amount = formData.get('amount') as string;
                const paymentMethod = formData.get('paymentMethod') as string;

                await fundLoanApi(selectedLoan.id, {
                    amount: parseFloat(amount),
                });

                alert('Loan funded successfully!');
                closeFundModal();
            } catch (error) {
                alert('Failed to fund loan. Please try again later.');
            }
        }
    }

    onMount(() => {
        fetchApprovedLoans();
    });
</script>

<div class="container">
    <div class="header">
        <h1 class="title">Browse Loan Requests</h1>
        <a href="/dashboard" class="back-button">Back to Dashboard</a>
    </div>

    <div class="loan-list">
        {#each approvedLoans as request}
            <div class="loan-item">
                <h2>{request.purpose}</h2>
                <p><strong>Amount:</strong> ${request.amount}</p>
                <p><strong>Interest Rate:</strong> {request.interestRate}%</p>
                <p><strong>Borrower Rating:</strong> <span class="borrower-rating">{request.borrowerRating}</span></p>
                <button on:click={() => openModal(request)} class="fund-button">Know More</button>
            </div>
        {/each}
    </div>

    {#if $showModal && selectedLoan}
        <div class="modal" role="dialog" aria-labelledby="loan-details-title">
            <div class="modal-content" role="document">
                <h2 id="loan-details-title" class="text-2xl font-bold mb-4">Loan Details</h2>
                <p><strong>Category:</strong> {selectedLoan.purpose}</p>
                <p><strong>Amount:</strong> ${selectedLoan.amount}</p>
                <p><strong>Interest Rate:</strong> {selectedLoan.interestRate}%</p>
                <p><strong>Term (Months):</strong> {selectedLoan.termMonths}</p>
                <p><strong>Borrower Rating:</strong> {selectedLoan.borrowerRating}</p>
                <button on:click={openFundModal} class="mt-4 fund-button">Fund Loan</button>
                <button on:click={closeModal} class="mt-2 close-button">Close</button>
            </div>
        </div>
    {/if}

    {#if $showFundModal}
        <div class="modal" role="dialog" aria-labelledby="fund-loan-title">
            <div class="modal-content" role="document">
                <h2 id="fund-loan-title" class="text-2xl font-bold mb-4">Fund Loan</h2>
                <form on:submit|preventDefault={fundLoan}>
                    <div class="mb-4">
                        <label for="amount" class="block text-gray-700">Amount to Lend:</label>
                        <input type="number" id="amount" name="amount" class="w-full border-gray-300 rounded p-2 mt-1" placeholder="Enter amount" required />
                    </div>
                    <div class="mb-4">
                        <label for="paymentMethod" class="block text-gray-700">Payment Method:</label>
                        <select id="paymentMethod" name="paymentMethod" class="w-full border-gray-300 rounded p-2 mt-1" required>
                            <option value="Credit_Card">Credit Card</option>
                            <option value="UPI">UPI</option>
                            <option value="Debit_Card">Debit Card</option>
                            <option value="Net_Banking">Net Banking</option>
                            <option value="Wallet">Wallet</option>
                        </select>
                    </div>
                    <button type="submit" class="fund-button">Confirm</button>
                    <button type="button" on:click={closeFundModal} class="ml-4 close-button">Cancel</button>
                </form>
            </div>
        </div>
    {/if}
</div>

<style>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        background-color: #f4f4f4;
        border-radius: 1rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid #003A4D;
    }

    .title {
        font-size: 2rem;
        font-weight: bold;
        color: #003A4D;
        text-transform: uppercase;
    }

    .back-button {
        background-color: #007A94;
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        text-decoration: none;
        font-weight: bold;
        transition: background-color 0.3s ease;
    }

    .back-button:hover {
        background-color: #005770;
    }

    .loan-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1.5rem;
    }

    .loan-item {
        background-color: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 1rem;
        padding: 1.5rem;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s;
    }

    .loan-item:hover {
        transform: translateY(-5px);
    }

    .loan-item h2 {
        margin-top: 0;
        font-size: 1.5rem;
        color: #003A4D;
    }

    .loan-item p {
        margin: 0.5rem 0;
        color: #34495e;
    }

    .loan-item .borrower-rating {
        font-weight: bold;
        color: #f39c12;
    }

    .fund-button {
        background-color: #007A94;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        text-decoration: none;
        font-weight: bold;
        text-align: center;
        display: block;
        margin-top: 1rem;
        transition: background-color 0.3s ease;
    }

    .fund-button:hover {
        background-color: #005770;
    }

    .modal {
        position: fixed;
        inset: 0;
        background-color: rgba(31, 41, 55, 0.75);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 50;
    }

    .modal-content {
        background-color: white;
        padding: 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
        max-width: 600px;
        width: 90%;
    }

    .close-button {
        background-color: #f4f4f4;
        color: #333;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        text-decoration: none;
        text-align: center;
        display: block;
        margin-top: 1rem;
        transition: background-color 0.3s ease;
    }

    .close-button:hover {
        background-color: #e5e7eb;
    }
</style>
