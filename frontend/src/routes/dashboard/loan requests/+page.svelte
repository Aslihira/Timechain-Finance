<script lang="ts">
    // Sample data for loan requests
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
        // Add more sample data as needed
    ];

    // Variables for filtering
    let selectedCategory = '';
    let minAmount = 0;
    let maxAmount = Infinity;
    let minInterestRate = 0;
    let maxInterestRate = Infinity;
    let minBorrowerRating = 0;
    let maxBorrowerRating = 5;

    // Computed filtered loan requests
    $: filteredRequests = loanRequests.filter((request) => {
        return (
            (selectedCategory === '' || request.category === selectedCategory) &&
            request.amount >= minAmount &&
            request.amount <= maxAmount &&
            request.interestRate >= minInterestRate &&
            request.interestRate <= maxInterestRate &&
            request.borrowerRating >= minBorrowerRating &&
            request.borrowerRating <= maxBorrowerRating
        );
    });

    // Function to clear filters
    function clearFilters() {
        selectedCategory = '';
        minAmount = 0;
        maxAmount = Infinity;
        minInterestRate = 0;
        maxInterestRate = Infinity;
        minBorrowerRating = 0;
        maxBorrowerRating = 5;
    }
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

    .filter-container {
        display: flex;
        gap: 2rem;
        margin-bottom: 2rem;
        flex-wrap: wrap;
    }

    .filter-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        flex: 1;
        min-width: 250px;
    }

    .filter-group label {
        font-weight: bold;
        color: #2c3e50;
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

    .clear-filters {
        background-color: #f44336;
        color: white;
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
        margin-bottom: 2rem;
    }

    .clear-filters:hover {
        background-color: #e53935;
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

    <div class="filter-container">
        <div class="filter-group">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label>Category</label>
            <select bind:value={selectedCategory}>
                <option value="">All</option>
                <option value="Business">Business</option>
                <option value="Education">Education</option>
                <option value="Medical">Medical</option>
                <!-- Add more categories as needed -->
            </select>
        </div>

        <div class="filter-group">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label>Amount Range</label>
            <input type="number" bind:value={minAmount} placeholder="Min" />
            <input type="number" bind:value={maxAmount} placeholder="Max" />
        </div>

        <div class="filter-group">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label>Interest Rate (%)</label>
            <input type="number" step="0.1" bind:value={minInterestRate} placeholder="Min" />
            <input type="number" step="0.1" bind:value={maxInterestRate} placeholder="Max" />
        </div>

        <div class="filter-group">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label>Borrower Rating</label>
            <input type="number" step="0.1" bind:value={minBorrowerRating} placeholder="Min" />
            <input type="number" step="0.1" bind:value={maxBorrowerRating} placeholder="Max" />
        </div>
    </div>

    <button class="clear-filters" on:click={clearFilters}>Clear Filters</button>

    <div class="loan-list">
        {#each filteredRequests as request}
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
