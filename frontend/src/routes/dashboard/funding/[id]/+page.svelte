
<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    let loanId: number;
    let loanDetails: { id: number; category: string; amount: number; interestRate: number; borrowerRating: number; } | null | undefined = null;

    // Mock data for loan details
    let loanRequests = [
        { id: 1, category: 'Business', amount: 5000, interestRate: 5.5, borrowerRating: 4.5 },
        { id: 2, category: 'Education', amount: 10000, interestRate: 4.8, borrowerRating: 4.0 },
        { id: 3, category: 'Medical', amount: 8000, interestRate: 6.0, borrowerRating: 4.7 }
        // Add more sample data as needed
    ];

    onMount(() => {
        const id = parseInt($page.url.pathname.split('/').pop() || '0');
        loanId = id;
        loanDetails = loanRequests.find(request => request.id === loanId);
    });

    function handleSubmit() {
        // Handle funding logic
        alert(`Funding loan request ID: ${loanId}`);
    }
</script>

<style>
    .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 2rem;
        background-color: #f4f4f4;
        border-radius: 1rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .header {
        margin-bottom: 2rem;
        border-bottom: 2px solid #003A4D;
    }

    .title {
        font-size: 2rem;
        font-weight: bold;
        color: #003A4D;
        text-transform: uppercase;
    }

    .loan-detail {
        background-color: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 1rem;
        padding: 1.5rem;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .loan-detail h2 {
        margin-top: 0;
        font-size: 1.5rem;
        color: #003A4D;
    }

    .loan-detail p {
        margin: 0.5rem 0;
        color: #34495e;
    }

    .fund-button {
        background-color: #007A94;
        color: white;
        padding: 0.75rem 1.5rem;
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

    .back-button {
        background-color: #007A94;
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        text-decoration: none;
        font-weight: bold;
        transition: background-color 0.3s ease;
        margin-top: 1rem;
        display: block;
    }

    .back-button:hover {
        background-color: #005770;
    }
</style>

<div class="container">
    <div class="header">
        <h1 class="title">Fund Loan Request</h1>
        <a href="/dashboard" class="back-button">Back to Dashboard</a>
    </div>

    {#if loanDetails}
        <div class="loan-detail">
            <h2>{loanDetails.category}</h2>
            <p><strong>Amount:</strong> ${loanDetails.amount}</p>
            <p><strong>Interest Rate:</strong> {loanDetails.interestRate}%</p>
            <p><strong>Borrower Rating:</strong> {loanDetails.borrowerRating}</p>
            <button class="fund-button" on:click={handleSubmit}>Confirm Funding</button>
        </div>
    {:else}
        <p>Loan details not found.</p>
    {/if}
</div>
