// Switch

let hari = parseInt(prompt("Masukan hari berdasarkan angka"));

switch (hari) {
  case 1:
    alert("Sekarang adalah hari senin!");
    break;
  case 2:
    alert("Sekarang adalah hari selasa!");
    break;
  case 3:
    alert("Sekarang adalah hari rabu!");
    break;
  case 4:
    alert("Sekarang adalah hari kamis!");
    break;
  case 5:
    alert("Sekarang adalah hari jum'at!");
    break;
  case 6:
    alert("Sekarang adalah hari sabtu!");
    break;
  case 7:
    alert("Sekarang adalah hari minggu!");
    break;
  default:
    alert("Kamu hanya dapat memilih angka 1 - 7 saja.");
    break;
};