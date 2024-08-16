<script lang="ts">
    // Example state for settings
    let userSettings = {
        emailNotifications: true,
        twoFactorAuth: false,
        privacySettings: {
            dataSharing: true,
            profileVisibility: 'Public',
        },
    };

    function saveSettings() {
        // Logic to save the settings (e.g., API call)
        alert('Settings saved!');
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
    .form-group select {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ddd;
        border-radius: 0.5rem;
        font-size: 1rem;
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
        <h1 class="title">Settings</h1>
        <a href="/dashboard" class="back-button">Back to Dashboard</a>
    </div>

    <form on:submit|preventDefault={saveSettings}>
        <div class="form-group">
            <label for="emailNotifications">Email Notifications</label>
            <input type="checkbox" id="emailNotifications" bind:checked={userSettings.emailNotifications} />
            <label for="emailNotifications">Enable</label>
        </div>

        <div class="form-group">
            <label for="twoFactorAuth">Two-Factor Authentication</label>
            <input type="checkbox" id="twoFactorAuth" bind:checked={userSettings.twoFactorAuth} />
            <label for="twoFactorAuth">Enable</label>
        </div>

        <div class="form-group">
            <label for="dataSharing">Data Sharing</label>
            <select id="dataSharing" bind:value={userSettings.privacySettings.dataSharing}>
                <option value="true">Allow</option>
                <option value="false">Do Not Allow</option>
            </select>
        </div>

        <div class="form-group">
            <label for="profileVisibility">Profile Visibility</label>
            <select id="profileVisibility" bind:value={userSettings.privacySettings.profileVisibility}>
                <option value="Public">Public</option>
                <option value="Private">Private</option>
            </select>
        </div>

        <button type="submit" class="save-button">Save Settings</button>
    </form>
</div>
