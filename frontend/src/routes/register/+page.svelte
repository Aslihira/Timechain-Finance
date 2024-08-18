<script>
    import { registerUser } from '../../api';
    
    let name = '';
    let email = '';
    let password = '';
    let errorMessage = '';
    let successMessage = '';
  
    // @ts-ignore
    async function handleRegister(event) {
      event.preventDefault();
  
      try {
        const response = await registerUser({ name, email, password });
        successMessage = 'Registration successful! Please check your email to verify your account.';
        errorMessage = '';
        console.log('Registration successful:', response);
      } catch (error) {
        successMessage = '';
        errorMessage = 'Registration failed. Please try again.';
        console.error('Registration error:', error);
      }
    }
  </script>
  
  <nav class="bg-[#003A4D]">
    
  </nav>
  
  <section class="bg-gray-200 min-h-11/12 flex flex-col justify-center py-6">
    <h1 class="text-center text-3xl font-bold mb-4 text-[#003A4D]">Welcome to Timechain Finance</h1>
    <div class="bg-white container mx-auto max-w-md rounded-2xl shadow-lg p-8">
      <h2 class="text-center mb-8 text-2xl font-semibold text-[#003A4D]">Create Your Account</h2>
      <form class="space-y-6" on:submit={handleRegister}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            bind:value={name}
            class="block border border-gray-400 bg-[#003A4D] w-full text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            bind:value={email}
            class="block border border-gray-400 bg-[#003A4D] w-full text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            bind:value={password}
            class="block border border-gray-400 bg-[#003A4D] w-full text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
            required
          />
        </div>
        <div class="flex items-center">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            class="mr-2 text-teal-300 focus:ring-teal-300"
            required
          />
            <!-- svelte-ignore a11y-invalid-attribute -->
          <label for="terms" class="text-gray-800">
            I agree to the <a href="#" class="text-teal-500 underline hover:text-teal-600">Terms and Conditions</a>
          </label>
        </div>
        <div>
          <button
            type="submit"
            class="block w-md mx-auto bg-teal-700 hover:bg-teal-600 text-white hover:text-black font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            Create Account
          </button>
        </div>
        <div class="text-gray-700 mt-6 text-center">
          Already have an account?
          <a href="../login/" class="text-blue-500 underline hover:text-blue-700">Log in</a>.
        </div>
       
        {#if errorMessage}
          <p class="text-center text-red-500">{errorMessage}</p>
        {/if}
        {#if successMessage}
          <p class="text-center text-green-500">{successMessage}</p>
        {/if}
      </form>
    </div>
  </section>
  