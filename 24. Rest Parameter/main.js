// Rest parameter 
// Menggabungkan banyak variabel berisi array ke dalam function menjadi satu.

function bahanMakanan(...bahanMakanan) {
    let semuaBahanMakanan = [...bahanMakanan];

    function bukaSemuaMakanan(bahanMakanan) {
        let bahanSemuaMakanan =[];
        for(let bahan of bahanMakanan) {
            for(let semuaBahan of bahan) {
                bahanSemuaMakanan.push(semuaBahan);
            };
        };
        return bahanSemuaMakanan;
    };

    let semuaMakanan = bukaSemuaMakanan(semuaBahanMakanan);

    for (let makanan of semuaMakanan) {
        console.log(makanan);
    }
};

let buah_buahan = ["Apel", "Jeruk", "Mangga", "Anggur", "Lengkeng", "Pisang"];
let sayuran = ["Wortel", "Kol", "Cabe", "Tomat", "Bawang", "Lengkuas", "Mentimun", "Kunyit"];
let bahan_makanan =["Susu", "Telur", "Gula", "Garam", "Mentega", "Minyak", "Tepung"];

bahanMakanan(buah_buahan, sayuran, bahan_makanan);