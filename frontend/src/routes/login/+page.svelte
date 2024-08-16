<nav class="bg-[#003A4D]">
  <div class="max-w-screen-xl p-6">
      <a href="/" class="flex items-center -space-x-6">
          <img src="/images/transparent_lighter_logo.png" class="h-12" alt="tcf logo" />
          <span class="uppercase text-2xl font-semibold whitespace-nowrap text-white">timechain <span class="text-teal-300">finance</span></span>
      </a>
  </div>
</nav>

<section class="bg-gray-200 min-h-11/12 flex flex-col justify-center py-6">
  <h1 class="text-center text-3xl font-bold mb-4 text-[#003A4D]">Welcome Back!</h1>
  <div class="bg-white container mx-auto max-w-lg rounded-2xl shadow-lg p-10">
      <h2 class="text-center mb-8 text-2xl font-semibold text-[#003A4D]">Log In</h2>
      <form class="space-y-6">
          <div>
              <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  class="block border border-gray-400 bg-[#003A4D] w-full text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
                  required
              />
          </div>
          <div>
              <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  class="block border border-gray-400 bg-[#003A4D] w-full text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
                  required
              />
          </div>
          <div class="flex items-center">
              <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  class="mr-2 text-teal-300 focus:ring-teal-300"
              />
              <label for="remember" class="text-gray-800"> Remember me </label>
          </div>
          <div>
              <button
                  type="submit"
                  class="block w-md mx-auto bg-teal-700 hover:bg-teal-600 text-white hover:text-black text-xl font-bold py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                  Log In
              </button>
          </div>
          <div class="text-gray-700 mt-6 text-center">
              Don't have an account?
              <a
                  href="../register/"
                  class="text-blue-500 underline hover:text-blue-700"
              >
                  Sign Up
              </a>.
          </div>
      </form>
  </div>
</section>
