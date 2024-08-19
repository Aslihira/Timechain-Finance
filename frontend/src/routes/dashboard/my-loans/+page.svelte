<script lang="ts">
    // Sample data for loan details
    let loanDetails = {
        loanId: 1,
        category: "Business",
        amount: 5000,
        interestRate: 5.5,
        borrowerRating: 4.5,
        repaymentStatus: "On Track",
        totalRepayment: 6000, // Total amount to be repaid by the borrower
        amountPaid: 2000, // Amount already paid by the borrower
        remainingRepayment: 4000, // Remaining amount to be repaid
        totalInterestEarned: 1200, // Total interest earned by the lender
        remainingInterestToBeReceived: 800, // Remaining interest to be received
        performanceUpdates: [
            { type: "Repayment received", date: "2024-08-01" },
            { type: "Interest payment recorded", date: "2024-08-15" },
        ],
    };

    // Function to handle repayment
    function handleRepay() {
        // Implement repayment logic here
        alert("Repayment initiated.");
    }

    // Function to handle reminder
    function handleReminder() {
        // Implement reminder logic here
        alert("Reminder set for repayment.");
    }
</script>

<div class="container">
    <!-- Borrower Repayment Details -->
    <div class="section">
        <a href="/dashboard" class="back-button">Back to Dashboard</a>
        <div class="section-header">Repayment Details</div>
        <div class="details">
            <p><strong>Loan ID:</strong> {loanDetails.loanId}</p>
            <p><strong>Category:</strong> {loanDetails.category}</p>
            <p><strong>Amount:</strong> ${loanDetails.amount}</p>
            <p><strong>Interest Rate:</strong> {loanDetails.interestRate}%</p>
            <p>
                <strong>Repayment Status:</strong>
                <span class="status">{loanDetails.repaymentStatus}</span>
            </p>
            <p>
                <strong>Total Repayment Amount:</strong>
                ${loanDetails.totalRepayment}
            </p>
            <p><strong>Amount Paid:</strong> ${loanDetails.amountPaid}</p>
            <p>
                <strong>Remaining Repayment:</strong>
                ${loanDetails.remainingRepayment}
            </p>
            <button class="button" on:click={handleRepay}>Repay</button>
        </div>
    </div>

    <!-- Lender Interest Earned -->
    <div class="section">
        <div class="section-header">Interest Earned</div>
        <div class="details">
            <p>
                <strong>Total Interest Earned:</strong>
                ${loanDetails.totalInterestEarned}
            </p>
            <p>
                <strong>Remaining Interest to be Received:</strong>
                ${loanDetails.remainingInterestToBeReceived}
            </p>
            <button class="button reminder" on:click={handleReminder}
                >Set Reminder</button
            >
        </div>
    </div>

    <!-- Performance Updates -->
    <div class="section performance-updates">
        <div class="section-header">Performance Updates</div>
        <ul>
            {#each loanDetails.performanceUpdates as update}
                <li>{update.type} - {update.date}</li>
            {/each}
        </ul>
    </div>
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

    .section {
        margin-bottom: 2rem;
    }

    .section-header {
        font-size: 1.5rem;
        font-weight: bold;
        color: #003a4d;
        border-bottom: 2px solid #003a4d;
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
    }

    .details {
        background-color: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 1rem;
        padding: 1.5rem;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .details p {
        margin: 0.5rem 0;
        color: #34495e;
    }

    .details .status {
        font-weight: bold;
    }

    .performance-updates {
        margin-top: 1rem;
    }

    .performance-updates ul {
        list-style-type: none;
        padding: 0;
    }

    .performance-updates li {
        background-color: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
        padding: 0.75rem;
        margin-bottom: 0.5rem;
    }

    .button {
        background-color: #ff5722;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        text-decoration: none;
        font-weight: bold;
        text-align: center;
        display: inline-block;
        margin-top: 1rem;
        transition: background-color 0.3s ease;
        cursor: pointer;
        border: none;
    }

    .button:hover {
        background-color: #E64A19;
    }

    .button.reminder {
        background-color: #ff5722;
    }

    .button.reminder:hover {
        background-color: #e64a19;
    }

    .back-button {
        background-color: #007a94;
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        text-decoration: none;
        font-weight: bold;
        transition: background-color 0.3s ease;
        display: block;
        margin-top: 2rem;
        text-align: center;
    }

    .back-button:hover {
        background-color: #005770;
    }
</style>
