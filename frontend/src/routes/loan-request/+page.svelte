<script lang="ts">
    let loanRequest = {
        amount: '',
        purpose: '',
        duration: '',
        interestRate: ''
    };

    // Function to handle form submission
    async function submitRequest() {
        // Example URL for submission, adjust based on your API
        const response = await fetch('/api/loan-requests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loanRequest)
        });

        if (response.ok) {
            alert('Loan request submitted successfully!');
            // Optionally, redirect or reset form
        } else {
            alert('Failed to submit loan request.');
        }
    }
</script>

<style>
    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        background-color: #f4f4f4;
        border-radius: 1rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .header {
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
        display: inline-block;
        margin-bottom: 1rem;
    }

    .back-button:hover {
        background-color: #005770;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    .form-group label {
        font-weight: bold;
        color: #2c3e50;
        display: block;
        margin-bottom: 0.5rem;
    }

    .form-group input, .form-group textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
        box-sizing: border-box;
    }

    .form-group textarea {
        resize: vertical;
    }

    .submit-button {
        background-color: #007A94;
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        border: none;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .submit-button:hover {
        background-color: #005770;
    }
</style>

<div class="container">
    <div class="header">
        <h1 class="title">Create Loan Request</h1>
        <a href="/dashboard" class="back-button">Back to Dashboard</a>
    </div>

    <form on:submit|preventDefault={submitRequest}>
        <div class="form-group">
            <label for="amount">Amount</label>
            <input
                id="amount"
                type="number"
                bind:value={loanRequest.amount}
                placeholder="Enter the amount"
                required
            />
        </div>

        <div class="form-group">
            <label for="purpose">Purpose</label>
            <textarea
                id="purpose"
                bind:value={loanRequest.purpose}
                placeholder="Describe the purpose of the loan"
                rows="4"
                required
            ></textarea>
        </div>

        <div class="form-group">
            <label for="duration">Duration (in months)</label>
            <input
                id="duration"
                type="number"
                bind:value={loanRequest.duration}
                placeholder="Enter the duration"
                required
            />
        </div>

        <div class="form-group">
            <label for="interestRate">Preferred Interest Rate (%)</label>
            <input
                id="interestRate"
                type="number"
                step="0.1"
                bind:value={loanRequest.interestRate}
                placeholder="Enter the interest rate"
                required
            />
        </div>

        <button type="submit" class="submit-button">Submit Request</button>
    </form>
</div>
