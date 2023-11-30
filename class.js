class SayurMayur {
  constructor(nama, warna) {
    this.nama = nama;
    this.warna = warna;
  }

  getInfo() {
    return `ini adalah ${this.nama} ${this.warna}.`;
  }
}

class Wortel extends SayurMayur {
  constructor(nama, warna, panjang) {
    super(nama, warna);
    this.panjang = panjang;
  }

  tumbuh() {
    return `Sayuran ${this.nama} sedang tumbuh!`;
  }
}

class Tomat extends SayurMayur {
  constructor(nama, warna, ukuran) {
    super(nama, warna);
    this.ukuran = ukuran;
  }

  matang() {
    return `sayuran ${this.nama} sedang matang!`;
  }
}

class Brokoli extends SayurMayur {
  constructor(nama, warna, kualitas) {
    super(nama, warna);
    this.kualitas = kualitas;
  }

  panen() {
    return `sayuran ${this.nama} ini siap untuk dipanen!`;
  }
}

function TambahSayuran() {
  const sayuranWortel = new Wortel("Wortel", "Oren", 15);
  const sayuranTomat = new Tomat("Tomat", "Merah", "Medium");
  const sayuranBrokoli = new Brokoli("Brokoli", "Hijau", 10);

  return [sayuranWortel, sayuranTomat, sayuranBrokoli];
}

const sayuranku = TambahSayuran();
sayuranku.forEach((sayuran) => {
  console.log(sayuran.getInfo());
});

console.log(sayuranku[0].tumbuh());
console.log(sayuranku[1].matang());
console.log(sayuranku[2].panen());
