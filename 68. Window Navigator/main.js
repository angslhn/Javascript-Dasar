// Mengakses objek window.navigator
console.log("Nama Browser:", window.navigator.appName);
console.log("Versi Browser:", window.navigator.appVersion);
console.log("User Agent:", window.navigator.userAgent);
console.log("Platform:", window.navigator.platform);
console.log("Bahasa Browser:", window.navigator.language);
console.log("Online Status:", window.navigator.onLine);
console.log("Cookies Diaktifkan:", window.navigator.cookieEnabled);

// Mengecek apakah browser mendukung service worker
if ('serviceWorker' in navigator) {
    console.log("Service Worker didukung");
} else {
    console.log("Service Worker tidak didukung");
}