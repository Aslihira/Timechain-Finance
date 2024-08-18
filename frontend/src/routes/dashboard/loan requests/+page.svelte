<script lang="ts">
    
    let loanRequests = [
        {
            id: 1,
            category: 'Business',
            amount: 5000,
            interestRate: 5.5,
            borrowerRating: 4.5
        },
        {
            id: 2,
            category: 'Education',
            amount: 10000,
            interestRate: 4.8,
            borrowerRating: 4.0
        },
        {
            id: 3,
            category: 'Medical',
            amount: 8000,
            interestRate: 6.0,
            borrowerRating: 4.7
        },
      
    ];
</script>

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
</style>

<div class="container">
    <div class="header">
        <h1 class="title">Browse Loan Requests</h1>
        <a href="/dashboard" class="back-button">Back to Dashboard</a>
    </div>

    <div class="loan-list">
        {#each loanRequests as request}
            <div class="loan-item">
                <h2>{request.category}</h2>
                <p><strong>Amount:</strong> ${request.amount}</p>
                <p><strong>Interest Rate:</strong> {request.interestRate}%</p>
                <p><strong>Borrower Rating:</strong> <span class="borrower-rating">{request.borrowerRating}</span></p>
                <a href={`/dashboard/funding/${request.id}`} class="fund-button">Fund Loan</a>
            </div>
        {/each}
    </div>
</div>
