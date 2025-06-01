// ===============================
// 🌟 AOS Scroll Animation Init
// ===============================
AOS.init({
    duration: 1000,
    once: true,
  });
  
  // ===============================
  // 🌓 Theme Toggle Logic
  // ===============================
  const toggleBtn = document.getElementById("theme-toggle");
  const html = document.documentElement;
  
  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
  }
  
  // Theme switch toggle
  toggleBtn?.addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
  });
  
  // ===============================
  // 📢 Toast Notification Functions
  // ===============================
  function showToast(message, color = 'bg-green-600') {
    const toast = document.getElementById('toast');
    const messageSpan = document.getElementById('toast-message');
  
    toast.classList.remove('translate-x-full');
    toast.classList.add(color);
    messageSpan.textContent = message;
    toast.style.display = 'flex';
  
    setTimeout(hideToast, 4000);
  }
  
  function hideToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('translate-x-full');
    setTimeout(() => {
      toast.style.display = 'none';
      toast.className = 'fixed bottom-6 right-6 z-50 hidden max-w-xs w-full px-6 py-4 rounded-lg shadow-lg text-white font-medium flex items-center justify-between transition-transform transform translate-x-full';
    }, 300);
  }
  
  // ===============================
  // 📬 Form Submission Handling
  // ===============================
  const form = document.getElementById('contact-form');
  
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const formData = new FormData(form);
  
    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
  
      if (res.ok) {
        form.reset();
        showToast("✅ Message sent successfully!");
      } else {
        const data = await res.json();
        if (data.errors) {
          showToast("⚠️ " + data.errors.map(err => err.message).join(", "), 'bg-red-600');
        } else {
          throw new Error("Unknown error");
        }
      }
    } catch (err) {
      showToast("❌ Submission failed. Please try again.", 'bg-red-600');
    }
  });
  
  // ===============================
  // 🖼️ Swiper Carousel Init
  // ===============================
  const swiper = new Swiper(".mySwiper", {
    effect: "slide",
    grabCursor: true,
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  