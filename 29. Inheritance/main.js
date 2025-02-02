// Inheritance

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
        console.log(`Mobil Dari Merek ${this.merek} Dengan Model ${this.model} Keluaran Tahun ${this.tahun}, Dan Pemakaian ${this.pemakaian} Tahun Statusnya ${this.status()}`);
    }
}

class newMobil extends Mobil {
    constructor (merek, model, tahun, pemakaian) {
        super(merek, model, tahun);
        this.pemakaian = pemakaian;
    }
}

let mobil = new newMobil("Toyota", "Avanza", 2018, 6);

mobil.info();