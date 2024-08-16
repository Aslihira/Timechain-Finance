<style>
  .header-text {
    color: #003A4D;
    font-size: 1.8rem;
  }

  .main-content {
    color: black;
    background-color: white;
  }

  .header-container {
    margin-left: -1rem;
    padding-left: 2rem;
  }

  .logo {
    width: 180px;
    height: auto;
    margin-right: 0.5rem;
  }

  .main-title {
    font-size: 4.5rem;
    color: #003A4D;
  }

  .welcome-text {
    font-size: 1.4rem;
    background-color: #003A4D;
    color: white;
  }

  .description {
    font-size: 1.8rem;
    text-align: center;
    color: #003A4D;
  }

  .cta-button {
    font-size: 1.6rem;
  }

  .register-button {
    background-color: #007A94;
  }

  .register-button:hover {
    background-color: #005A7A;
    transform: scale(1.05);
  }

  .login-button {
    background-color: #003A4D;
  }

  .login-button:hover {
    background-color: #002A3D;
    transform: scale(1.05);
  }

  .footer-text {
    font-size: 1.5rem;
    color: #003A4D;
  }

  .footer-link {
    font-size: 1.5rem;
    color: #003A4D;
    text-decoration: none;
    transition: color 0.3s, text-shadow 0.3s;
  }

  .footer-link:hover {
    color: #007A94;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  }
</style>

<div class="min-h-screen flex flex-col">
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center header-container">
      <div class="flex items-center">
        <img src="/images/logo.png" alt="Logo" class="logo" />
        <span class="text-xl font-semibold header-text">
          <span class="text-black">TIMECHAIN</span>
          <span class="text-[#003A4D]"> FINANCE</span>
        </span>
      </div>
      <nav class="flex space-x-4">
        <!-- Add navigation links if needed -->
      </nav>
    </div>
  </header>

  <main class="flex-1 flex flex-col justify-center items-center bg-white text-black py-20 main-content">
    <div class="text-center mb-4">
      <span class="inline-block bg-[#003A4D] text-sm px-3 py-1 rounded-full mb-2 text-white welcome-text">Welcome to the</span>
      <h1 class="text-4xl font-bold mb-2 main-title">Timechain Finance</h1>
    </div>
    
    <div class="description">
      <p>Your one-stop solution for managing all your financial needs with the power of Web3 technology.</p>
      <p> Explore our platform to learn more and get started. Discover opportunities for borrowing and lending to maximize your financial potential.</p>
    </div>
    
    <div class="flex space-x-4 mt-8">
      <a href="/register" class="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 cta-button register-button">Register</a>
      <a href="/login" class="bg-[#003A4D] text-white px-4 py-2 rounded hover:bg-[#002A3D] cta-button login-button">Login</a>
    </div>
  </main>

  <footer class="bg-gray-100 text-gray-600 py-4">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <p class="footer-text">&copy; 2024 Timechain Finance™. All Rights Reserved.</p>
      <div class="flex space-x-4 ml-auto">
        <a href="https://tsoc.vercel.app/" class="footer-link">About</a>
        <a href="https://tsoc.vercel.app/" class="footer-link">Contact</a>
      </div>
    </div>
  </footer>
</div>
