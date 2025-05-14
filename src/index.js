// ... existing code ...

// Apply dark mode if saved in localStorage
if (localStorage.getItem('darkMode') === 'true' || 
    (!localStorage.getItem('darkMode') && 
     window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
}

// ... existing code ...