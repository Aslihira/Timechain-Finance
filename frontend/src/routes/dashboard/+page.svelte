<!-- File: src/routes/dashboard/+page.svelte -->
<script>
    let recentActivities = [
        { activity: "Funded Loan #12345", time: "2 hours ago" },
        { activity: "Received repayment for Loan #54321", time: "5 hours ago" },
        // Add more recent activities here
    ];

    let notifications = [
        { message: "Upcoming repayment due tomorrow", time: "1 day ago" },
        { message: "New loan request available", time: "2 days ago" },
        // Add more notifications here
    ];
</script>

<style>
    .dashboard-header {
        background-color: #003A4D;
        color: #fff;
        padding: 1.5rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .dashboard-logo {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        font-weight: bold;
    }

    .dashboard-logo img {
        width: 120px; /* Adjust size as necessary */
        height: auto;
        margin-right: 1rem;
    }

    .dashboard-nav {
        display: flex;
        gap: 1.5rem;
    }

    .nav-link {
        color: #fff;
        font-size: 1.25rem;
        font-weight: 500;
        text-decoration: none;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
    }

    .nav-link:hover {
        background-color: #005770;
    }

    .dashboard-content {
        display: flex;
        padding: 2rem;
        gap: 2rem;
        background-color: #f4f4f4;
    }

    .overview-section {
        flex: 2;
        background-color: #fff;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .overview-header {
        font-size: 1.75rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
    }

    .overview-card {
        background-color: #003A4D;
        color: #fff;
        padding: 1.5rem;
        border-radius: 1rem;
        margin-bottom: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .card-content {
        font-size: 1.25rem;
    }

    .action-buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
    }

    .cta-button {
        flex: 1;
        background-color: #007A94;
        color: #fff;
        font-size: 1.25rem;
        font-weight: bold;
        padding: 1rem;
        border-radius: 0.5rem;
        text-align: center;
        text-decoration: none;
        transition: background-color 0.3s ease;
    }

    .cta-button:hover {
        background-color: #005770;
    }

    .sidebar {
        flex: 1;
        background-color: #fff;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .sidebar-section {
        margin-bottom: 2rem;
    }

    .sidebar-header {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    .sidebar-item {
        background-color: #f4f4f4;
        padding: 1rem;
        border-radius: 0.5rem;
        margin-bottom: 0.75rem;
        font-size: 1rem;
    }

    .sidebar-item time {
        display: block;
        font-size: 0.875rem;
        color: #888;
    }
</style>

<div class="dashboard-header">
    <div class="dashboard-logo">
        <img src="/images/transparent_lighter_logo.png" alt="Logo" />
        Timechain Finance
    </div>
   
    <nav class="dashboard-nav">
        <a href="/dashboard/loan requests" class="nav-link">Browse Loan Requests</a>
        <a href="/dashboard/my-loans" class="nav-link">My Loans</a>
        <a href="/dashboard/wallet" class="nav-link">Wallet</a>
        <a href="/dashboard/profile" class="nav-link">Profile</a>
        <a href="/dashboard/settings" class="nav-link">Settings</a>
    </nav>
</div>

<div class="dashboard-content">
    <div class="overview-section">
        <div class="overview-header">Dashboard Overview</div>

        <div class="overview-card">
            <div class="card-content">
                <div>Total Active Loans</div>
                <div>10</div>
            </div>
            <div class="card-content">
                <div>Total Funds Added</div>
                <div>$50,000</div>
            </div>
            <div class="card-content">
                <div>Recent Interest Earned</div>
                <div>$1,200</div>
            </div>
        </div>

        <div class="overview-card">
            <div class="card-content">
                <div>Total Active Loan Requests</div>
                <div>5</div>
            </div>
            <div class="card-content">
                <div>Total Funds Received</div>
                <div>$25,000</div>
            </div>
            <div class="card-content">
                <div>Upcoming Repayments</div>
                <div>$3,000</div>
            </div>
        </div>

        <div class="action-buttons">
            <a href="/dashboard/loan requests" class="cta-button">Browse Loan Requests</a>
            <a href="/dashboard/wallet" class="cta-button">Add Funds</a>
            <a href="/loan-request" class="cta-button">Create Loan Request</a>
        </div>
    </div>

    <div class="sidebar">
        <div class="sidebar-section">
            <div class="sidebar-header">Recent Activities</div>
            {#each recentActivities as activity}
                <div class="sidebar-item">
                    {activity.activity}
                    <time>{activity.time}</time>
                </div>
            {/each}
        </div>

        <div class="sidebar-section">
            <div class="sidebar-header">Notifications</div>
            {#each notifications as notification}
                <div class="sidebar-item">
                    {notification.message}
                    <time>{notification.time}</time>
                </div>
            {/each}
        </div>

        <div class="sidebar-section">
            <div class="sidebar-header">Quick Links</div>
            <div class="sidebar-item"><a href="/dashboard/my-loans">My Loans</a></div>
            <div class="sidebar-item"><a href="/dashboard/wallet">Wallet</a></div>
            <div class="sidebar-item"><a href="/dashboard/profile">Profile</a></div>
            <div class="sidebar-item"><a href="/dashboard/settings">Settings</a></div>
        </div>
    </div>
</div>
