// Immediately Invoked Function Expression
// Function yang langsung di panggil setelah dibuat.

(function() {
    console.log("Hallo Semua!");
})()

// Contoh penggunaan sederhana
const appConfig = (() => {
    const apiKey = "12345";
    const apiUrl = "https://example.com"

    return {
        getApiKey: () => {
            return apiKey;
        },
        getApiUrl: () => {
            return apiUrl;
        }
    }
})()

console.log(appConfig.getApiKey());
console.log(appConfig.getApiUrl());