<script>
    import { loginUser } from '../../api';
  
    let email = '';
    let password = '';
    let errorMessage = '';
    let successMessage = '';
  
    // @ts-ignore
    async function handleLogin(event) {
      event.preventDefault();
  
      try {
        const response = await loginUser({ email, password });
        successMessage = 'Login successful!';
        errorMessage = '';
        console.log('Login successful:', response);
  
       
        localStorage.setItem('authToken', response.data.token);
  
       
        window.location.href = '/dashboard';
      } catch (error) {
        successMessage = '';
        errorMessage = 'Login failed. Please check your credentials and try again.';
        console.error('Login error:', error);
      }
    }
  </script>
  
  <nav class="bg-[#003A4D]">
   
  </nav>
  
  <section class="bg-gray-200 min-h-11/12 flex flex-col justify-center py-6">
    <h1 class="text-center text-3xl font-bold mb-4 text-[#003A4D]">Welcome Back to Timechain Finance</h1>
    <div class="bg-white container mx-auto max-w-md rounded-2xl shadow-lg p-8">
      <h2 class="text-center mb-8 text-2xl font-semibold text-[#003A4D]">Log in to Your Account</h2>
      <form class="space-y-6" on:submit={handleLogin}>
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
        <div>
          <button
            type="submit"
            class="block w-md mx-auto bg-teal-700 hover:bg-teal-600 text-white hover:text-black font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            Log In
          </button>
        </div>
        <div class="text-gray-700 mt-6 text-center">
          Don't have an account? 
          <a href="../register/" class="text-blue-500 underline hover:text-blue-700">Register</a>.
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
  