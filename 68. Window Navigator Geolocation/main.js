// Navigator Geolocation

// Mendapatkan lokasi saat ini
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);
    },
    (error) => {
      console.error("Error mendapatkan lokasi:", error.message);
    },
    {
      enableHighAccuracy: true, // Gunakan GPS untuk akurasi tinggi
      timeout: 5000, // Batas waktu pengambilan lokasi (ms)
      maximumAge: 0, // Tidak menggunakan cache lokasi lama
    }
  );
}

// Melacak perubahan lokasi secara real-time
let latestPosition = null;

const watchID = navigator.geolocation.watchPosition(
  (position) => {
    latestPosition = position; // Simpan lokasi terbaru
    console.log("Posisi diperbarui:");
    console.log("Latitude:", position.coords.latitude);
    console.log("Longitude:", position.coords.longitude);
  },
  (error) => {
    console.error("Error:", error.message);
  },
  { enableHighAccuracy: true }
);

// Ambil lokasi terbaru setelah 30 detik
setTimeout(() => {
  if (latestPosition) {
    console.log("Lokasi terbaru setelah 30 detik:");
    console.log("Latitude:", latestPosition.coords.latitude);
    console.log("Longitude:", latestPosition.coords.longitude);
  } else {
    console.log("Belum ada lokasi yang diperbarui.");
  }

  // Hentikan pelacakan agar tidak terus berjalan
  navigator.geolocation.clearWatch(watchID);
}, 30000);