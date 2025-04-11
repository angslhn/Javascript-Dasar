// Class
// Class adalah template atau blueprint untuk membuat objek.

class Mobil {
    constructor(merek, model, tahun) {
        this.merek = merek;
        this.model = model;
        this.tahun = tahun;
    }

    status() {
        return "Mobil Aktif!";
    }

    info() {
        console.log(`Mobil Dari Merek ${this.merek} Dengan Model ${this.model} Keluaran Tahun ${this.tahun} Statusnya ${this.status()}`);
    }
}

let mobil = new Mobil("Toyota", "Avanza", "2018");

mobil.info();