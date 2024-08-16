<script lang="ts">
    // Sample data for user profile
    let userProfile = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        address: '',
        phoneNumber: '',
        purposeOfBorrowing: '',
        financialDetails: '',
        paymentMethod: '',
    };

    function saveProfile() {
        // Logic to save the profile (e.g., API call)
        alert('Profile saved!');
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

    .form-group {
        margin-bottom: 1.5rem;
    }

    .form-group label {
        font-weight: bold;
        color: #2c3e50;
        display: block;
        margin-bottom: 0.5rem;
    }

    .form-group input,
    .form-group textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ddd;
        border-radius: 0.5rem;
        font-size: 1rem;
    }

    .form-group textarea {
        resize: vertical;
    }

    .save-button {
        background-color: #007A94;
        color: white;
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 0.5rem;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .save-button:hover {
        background-color: #005770;
    }
</style>

<div class="container">
    <div class="header">
        <h1 class="title">Profile</h1>
        <a href="/dashboard" class="back-button">Back to Dashboard</a>
    </div>

    <form on:submit|preventDefault={saveProfile}>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" bind:value={userProfile.name} />
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" bind:value={userProfile.email} />
        </div>

        <div class="form-group">
            <label for="address">Address</label>
            <input type="text" id="address" bind:value={userProfile.address} />
        </div>

        <div class="form-group">
            <label for="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" bind:value={userProfile.phoneNumber} />
        </div>

        <div class="form-group">
            <label for="purposeOfBorrowing">Purpose of Borrowing</label>
            <textarea id="purposeOfBorrowing" bind:value={userProfile.purposeOfBorrowing} rows="4"></textarea>
        </div>

        <div class="form-group">
            <label for="financialDetails">Financial Details</label>
            <textarea id="financialDetails" bind:value={userProfile.financialDetails} rows="4"></textarea>
        </div>

        <div class="form-group">
            <label for="paymentMethod">Payment Method</label>
            <input type="text" id="paymentMethod" bind:value={userProfile.paymentMethod} />
        </div>

        <button type="submit" class="save-button">Save Profile</button>
    </form>
</div>
