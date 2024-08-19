<script lang="ts">
    let userSettings = {
        emailNotifications: true,
        twoFactorAuth: false,
        privacySettings: {
            dataSharing: true,
            profileVisibility: 'Public',
        },
    };

    function saveSettings() {
        alert('Settings saved!');
    }
</script>

<div class="min-h-screen flex justify-center items-center bg-gray-100">
    <div class="max-w-4xl w-full p-8 rounded-lg shadow-lg mb-24" style="background-color: #003A4D;">
        <div class="flex justify-between items-center mb-8 pb-4 border-b-2 border-teal-800">
            <h1 class="text-3xl font-bold text-white uppercase">Settings</h1>
            <a href="/dashboard" class="bg-[#007A94] text-white py-2 px-4 rounded-lg font-bold hover:bg-[#005770] transition duration-300">Back to Dashboard</a>
        </div>

        <form on:submit|preventDefault={saveSettings} class="space-y-6">
            <div class="space-y-2">
                <label for="emailNotifications" class="block text-lg font-semibold text-gray-200">Email Notifications</label>
                <div class="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="emailNotifications"
                        bind:checked={userSettings.emailNotifications}
                        class="form-checkbox h-5 w-5 text-teal-500"
                    />
                    <label for="emailNotifications" class="text-gray-200">Enable</label>
                </div>
            </div>

            <div class="space-y-2">
                <label for="twoFactorAuth" class="block text-lg font-semibold text-gray-200">Two-Factor Authentication</label>
                <div class="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="twoFactorAuth"
                        bind:checked={userSettings.twoFactorAuth}
                        class="form-checkbox h-5 w-5 text-teal-500"
                    />
                    <label for="twoFactorAuth" class="text-gray-200">Enable</label>
                </div>
            </div>

            <div class="space-y-2">
                <label for="dataSharing" class="block text-lg font-semibold text-gray-200">Data Sharing</label>
                <select
                    id="dataSharing"
                    bind:value={userSettings.privacySettings.dataSharing}
                    class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                    <option value="true">Allow</option>
                    <option value="false">Do Not Allow</option>
                </select>
            </div>

            <div class="space-y-2">
                <label for="profileVisibility" class="block text-lg font-semibold text-gray-200">Profile Visibility</label>
                <select
                    id="profileVisibility"
                    bind:value={userSettings.privacySettings.profileVisibility}
                    class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                </select>
            </div>

            <button type="submit" class="w-full bg-[#007A94] text-white py-3 rounded-lg font-bold hover:bg-[#005770] transition duration-300">Save Settings</button>
        </form>
    </div>
</div>
