// Operator logika 
// && = AND
// || = OR
// !  = NOT

let jam = 18;
let salam = "";

switch (jam) {
    case jam >= 0 && jam <= 3:
        salam = "Selamat Malam!";
        break;       
    case jam > 3 && jam <= 5:
        salam = "Selamat Dini Hari!";
        break;    
    case jam > 5 && jam <= 10: 
        salam = "Selamat Pagi!";
        break;
    case jam > 10 && jam <= 14: 
        salam = "Selamat Siang!";
        break;
    case jam > 14 && jam <= 18:
        salam = "Selamat Sore!";
        break;
    case jam > 18 && jam <= 24:
        salam = "Selamat Malam!";
        break;
    default:
        salam = "Maaf jam tidak valid!"
};