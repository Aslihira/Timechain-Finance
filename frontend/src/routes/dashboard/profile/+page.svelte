<script lang="ts">
    import { updateUserProfile } from "../../../api";
    
    let userProfile = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        address: '',
        phoneNumber: '',
        purposeOfBorrowing: '',
        financialDetails: '',
        paymentMethod: '',
    };

    async function saveProfile() {
        try {
            await updateUserProfile(userProfile);
            alert('Profile saved!');
        } catch (error) {
            console.error('Error saving profile:', error);
            alert('Failed to save profile.');
        }
    }
</script>

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
        <a href="/dashboard/loan-requests" class="text-white text-lg hover:bg-[#005770] px-4 py-2 rounded-lg transition duration-300">Browse Loan Requests</a>
        <a href="/dashboard/my-loans" class="text-white text-lg hover:bg-[#005770] px-4 py-2 rounded-lg transition duration-300">My Loans</a>
        <a href="/dashboard/wallet" class="text-white text-lg hover:bg-[#005770] px-4 py-2 rounded-lg transition duration-300">Wallet</a>
        <a href="/dashboard/profile" class="text-white text-lg hover:bg-[#005770] px-4 py-2 rounded-lg transition duration-300">Profile</a>
        <a href="/dashboard/settings" class="text-white text-lg hover:bg-[#005770] px-4 py-2 rounded-lg transition duration-300">Settings</a>
    </div>
</nav>

<!-- Profile Page Content -->
<div class="max-w-4xl mx-auto p-8 bg-[#003A4D] rounded-lg shadow-lg mt-8 mb-24">
    <div class="flex justify-between items-center mb-8 pb-4 border-b-2 border-teal-800">
        <h1 class="text-3xl font-bold text-white uppercase">Profile</h1>
        <a href="/dashboard" class="bg-[#007A94] text-white py-2 px-4 rounded-lg font-bold hover:bg-[#005770] transition duration-300">Back to Dashboard</a>
    </div>

    <form on:submit|preventDefault={saveProfile} class="space-y-6">
        <div class="space-y-2">
            <label for="name" class="block text-lg font-semibold text-white">Name</label>
            <input
                type="text"
                id="name"
                bind:value={userProfile.name}
                class="w-full p-3 border border-[#005770] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                readonly
            />
        </div>

        <div class="space-y-2">
            <label for="email" class="block text-lg font-semibold text-white">Email</label>
            <input
                type="email"
                id="email"
                bind:value={userProfile.email}
                class="w-full p-3 border border-[#005770] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                readonly
            />
        </div>

        <div class="space-y-2">
            <label for="address" class="block text-lg font-semibold text-white">Address</label>
            <input
                type="text"
                id="address"
                bind:value={userProfile.address}
                class="w-full p-3 border border-[#005770] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
        </div>

        <div class="space-y-2">
            <label for="phoneNumber" class="block text-lg font-semibold text-white">Phone Number</label>
            <input
                type="text"
                id="phoneNumber"
                bind:value={userProfile.phoneNumber}
                class="w-full p-3 border border-[#005770] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                readonly
            />
        </div>

        <div class="space-y-2">
            <label for="purposeOfBorrowing" class="block text-lg font-semibold text-white">Purpose of Borrowing</label>
            <textarea
                id="purposeOfBorrowing"
                bind:value={userProfile.purposeOfBorrowing}
                rows="4"
                class="w-full p-3 border border-[#005770] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                readonly
            ></textarea>
        </div>

        <div class="space-y-2">
            <label for="financialDetails" class="block text-lg font-semibold text-white">Financial Details</label>
            <textarea
                id="financialDetails"
                bind:value={userProfile.financialDetails}
                rows="4"
                class="w-full p-3 border border-[#005770] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                readonly
            ></textarea>
        </div>

        <div class="space-y-2">
            <label for="paymentMethod" class="block text-lg font-semibold text-white">Payment Method</label>
            <input
                type="text"
                id="paymentMethod"
                bind:value={userProfile.paymentMethod}
                class="w-full p-3 border border-[#005770] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
        </div>

        <button type="submit" class="w-full bg-[#007A94] text-white py-3 rounded-lg font-bold hover:bg-[#005770] transition duration-300">Save Profile</button>
    </form>
</div>
