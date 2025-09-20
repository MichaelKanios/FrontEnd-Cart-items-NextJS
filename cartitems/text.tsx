<div class="min-h-screen bg-rose-50 p-6">
  <!-- Title -->
  <h1 class="text-3xl font-bold mb-6">Desserts</h1>

  <!-- Container -->
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
    <!-- Left side: Products -->
    <div class="lg:col-span-3">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Product Card -->
        <div class="bg-white rounded-2xl shadow p-4 flex flex-col">
          <img src="waffle.jpg" alt="Waffle" class="rounded-xl mb-4">
          <h2 class="text-lg font-semibold">Waffle with Berries</h2>
          <p class="text-rose-600 font-bold mb-4">$6.50</p>
          <button class="mt-auto bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
            Add to Cart
          </button>
        </div>

        <!-- Περισσότερα προϊόντα εδώ... -->
      </div>
    </div>

    <!-- Right side: Cart -->
    <div class="bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-center">
      <h2 class="text-xl font-bold text-rose-600 mb-4">Your Cart (0)</h2>
      <img src="cart.png" alt="Cart" class="w-24 mb-2">
      <p class="text-gray-500 text-center">Your added items will appear here</p>
    </div>
  </div>
</div>
