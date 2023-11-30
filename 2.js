class Pegawai {
  constructor(nama, umur, gaji) {
    this.nama = nama;
    this.umur = umur;
    this.gaji = gaji;
  }

  getInfo() {
    console.log(`Nama: ${this.nama}`);
    console.log(`Umur: ${this.umur}`);
    console.log(`Gaji: ${this.gaji}`);
  }

  getPotongan() {
    if (this.gaji > 8000000) {
      return this.gaji * 0.02;
    } else {
      return this.gaji * 0.01;
    }
  }
}

class PegawaiTetap extends Pegawai {
  constructor(nama, umur, gaji, jabatan) {
    super(nama, umur, gaji);
    this.jabatan = jabatan;
  }

  getInsentif() {
    switch (this.jabatan.toLowerCase()) {
      case "manager":
        return 5000000;
      case "assistant manager":
        return 3000000;
      case "supervisor":
        return 2000000;
      default:
        return 0;
    }
  }

  getGajiTotal() {
    const insentif = this.getInsentif();
    const potongan = this.getPotongan();
    const gajiTotal = this.gaji + insentif - potongan;
    console.log(`Gaji Total: ${gajiTotal}`);
  }
}

class PegawaiKontrak extends Pegawai {
  constructor(nama, umur, gaji, durasi) {
    super(nama, umur, gaji);
    this.durasi = durasi;
  }

  getGajiTotal() {
    const potongan = this.getPotongan();
    const totalGaji = this.gaji - potongan;
    console.log(`Total Gaji: ${totalGaji}`);
  }
}

class Dosen extends Pegawai {
  constructor({ nama, umur, gaji, sksMengajar, honorPerSks }) {
    super(nama, umur, gaji);
    this.sksMengajar = sksMengajar;
    this.honorPerSks = honorPerSks;
  }

  getHonorMengajar() {
    return this.sksMengajar * this.honorPerSks;
  }

  getPotonganHonorMengajar() {
    return 0.01 * this.getHonorMengajar();
  }

  getHonorMengajarBersih() {
    return this.getHonorMengajar() - this.getPotonganHonorMengajar();
  }

  getGajiTotal() {
    const totalGaji = this.gaji + this.getHonorMengajarBersih();
    console.log(`Total Gaji: ${totalGaji}`);
  }
}

const pegTetap = new PegawaiTetap(
  "Budianto Tanuwijaya",
  35,
  10000000,
  "manager"
);
console.log("Isi Dari Pegawai Tetap");
console.log(pegTetap);
console.log("Gaji Insentif: ", pegTetap.getInsentif());
console.log("Gaji Total: ", pegTetap.getGajiTotal());
console.log("\n\n");

const pegKontrak = new PegawaiKontrak("Helmi Andi", 30, 10000000, 2);
console.log("Isi Dari Pegawai Kontrak");
console.log(pegKontrak);
console.log("Durasi Kontrak (Tahun):", pegKontrak.durasi);
console.log("Gaji Total:", pegKontrak.getGajiTotal());
console.log("\n\n");

const dataDosen = {
  umur: 40,
  nama: "Herlambang",
  sksMengajar: 10,
  honorPerSks: 50000,
  gaji: 5000000,
};

const dosen1 = new Dosen(dataDosen);
console.log("Isi Dari Data Dosen 1:");
console.log(dosen1);
console.log("Honor Mengajar:", dosen1.getHonorMengajar());
console.log("Gaji Total:", dosen1.getGajiTotal());
