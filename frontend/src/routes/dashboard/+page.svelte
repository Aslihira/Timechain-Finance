<script>
    let recentActivities = [
        { activity: "Funded Loan #12345", time: "2 hours ago" },
        { activity: "Received repayment for Loan #54321", time: "5 hours ago" },
    ];

    let notifications = [
        { message: "Upcoming repayment due tomorrow", time: "1 day ago" },
        { message: "New loan request available", time: "2 days ago" },
    ];
</script>

<div class="min-h-screen bg-gray-100">
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
    <div class="flex">
        <a href="/dashboard/loan-requests" class="text-white text-lg hover:bg-[#007A94] px-4 py-2 rounded-lg transition duration-300">Browse Loan Requests</a>
        <a href="/dashboard/my-loans" class="text-white text-lg hover:bg-[#007A94] px-4 py-2 rounded-lg transition duration-300">My Loans</a>
        <a href="/dashboard/wallet" class="text-white text-lg hover:bg-[#007A94] px-4 py-2 rounded-lg transition duration-300">Wallet</a>
        <a href="/dashboard/profile" class="text-white text-lg hover:bg-[#007A94] px-4 py-2 rounded-lg transition duration-300">Profile</a>
        <a href="/dashboard/settings" class="text-white text-lg hover:bg-[#007A94] px-4 py-2 rounded-lg transition duration-300">Settings</a>
    </div>
</nav>



    <!-- Main Content -->
    <div class="flex p-8 gap-8 max-h-[85vh]">
        <!-- Overview Section -->
        <div class="flex-2 bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>

            <!-- Card 1 -->
            <div class="bg-[#003A4D] text-white p-6 rounded-lg shadow-md mb-6">
                <div class="text-lg font-semibold mb-2">Total Active Loans</div>
                <div class="text-2xl">$50,000</div>
            </div>

            <!-- Card 2 -->
            <div class="bg-[#003A4D] text-white p-6 rounded-lg shadow-md mb-6">
                <div class="text-lg font-semibold mb-2">Recent Interest Earned</div>
                <div class="text-2xl">$1,200</div>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-4 mt-6">
                <a href="/dashboard/loan-requests" class="bg-[#007A94] text-white py-3 px-6 rounded-md text-lg font-semibold transition duration-300 hover:bg-[#005770] w-full text-center">Browse Loan Requests</a>
                <a href="/dashboard/wallet" class="bg-[#007A94] text-white py-6 px-6 rounded-md text-lg font-semibold transition duration-300 hover:bg-[#005770] w-full text-center">Add Funds</a>
                <a href="/loan-request" class="bg-[#007A94] text-white py-3 px-6 rounded-md text-lg font-semibold transition duration-300 hover:bg-[#005770] w-full text-center">Create Loan Request</a>
            </div>
        </div>

        <!-- Sidebar -->
        <div class="flex-1 bg-white p-6 rounded-lg shadow-lg overflow-y-auto">
            <!-- Recent Activities -->
            <div class="mb-8">
                <h3 class="text-xl font-bold text-gray-800 mb-4">Recent Activities</h3>
                {#each recentActivities as activity}
                    <div class="bg-gray-100 p-4 rounded-md mb-2">
                        <div class="font-medium">{activity.activity}</div>
                        <time class="text-sm text-gray-500">{activity.time}</time>
                    </div>
                {/each}
            </div>

            <!-- Notifications -->
            <div class="mb-8">
                <h3 class="text-xl font-bold text-gray-800 mb-4">Notifications</h3>
                {#each notifications as notification}
                    <div class="bg-gray-100 p-4 rounded-md mb-2">
                        <div class="font-medium">{notification.message}</div>
                        <time class="text-sm text-gray-500">{notification.time}</time>
                    </div>
                {/each}
            </div>

            <!-- Quick Links -->
            <div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">Quick Links</h3>
                <div class="bg-gray-100 p-4 rounded-md mb-2">
                    <a href="/dashboard/my-loans" class="text-blue-600 hover:underline">My Loans</a>
                </div>
                <div class="bg-gray-100 p-4 rounded-md mb-2">
                    <a href="/dashboard/wallet" class="text-blue-600 hover:underline">Wallet</a>
                </div>
                <div class="bg-gray-100 p-4 rounded-md mb-2">
                    <a href="/dashboard/profile" class="text-blue-600 hover:underline">Profile</a>
                </div>
                <div class="bg-gray-100 p-4 rounded-md mb-2">
                    <a href="/dashboard/settings" class="text-blue-600 hover:underline">Settings</a>
                </div>
            </div>
        </div>
    </div>
</div>
