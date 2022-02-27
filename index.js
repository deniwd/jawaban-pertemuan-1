// Tugas Algoritma dan Pseudocode 1
/**
 * Tentukan algoritma dan pseudocode untuk menghitung massa jenis dari sebuah benda.
 *
 * ALGORITMA
 * ------------
 *
 * 1. Buat variable massa
 * 2. Buat variable volume
 * 3. Buat variable rho 
 * 4. Isi rho dengan rumus massa dibagi volume
 * 5. Cetak rho
 *
 * PSEUDOCODE
 * ----------
 *
 * STORE massa WITH ANY NUMBER
 * STORE volume WITH ANY NUMBER
 *
 * SET rho WITH massa DIVIDE volume
 * DISPLAY rho
 */

// CODING

var massa = 10;
var volume = 3;

var rho = massa / volume;
console.log(rho);


// Tugas Algoritma dan Pseudocode 2
/**
 * Tentukan algoritma dan pseudocode untuk menghitung rumus luas permukaan tabung.
 *
 * ALGORITMA
 * ---------
 *
 * 1. Buat variable r => jari - jari
 * 2. Buat variable tinggi
 * 3. Gunakan konstanta phi = Math.PI
 * 4. Buat variable luas_permukaan_tabung
 * 5. Isi luas_permukaan_tabung dengan rumus = dalam kurung 2 kali phi kali tinggi kali r tambah dalam kurung 2 kali phi kali r kali r
 * 6. Cetak luas_permukaan_tabung
 *
 * PSEUDOCODE
 * -----------
 *
 * STORE r WITH ANY NUMBER
 * STORE tinggi WITH ANY NUMBER
 * STORE phi WITH Math.PI
 *
 * SET luas_permukaan_tabung WITH (2 MULTIPLY phi MULTIPLY tinggi MULTIPLY r ) ADD (2 MULTIPLY phi MULTIPLY r MULTIPLY r)
 * DISPLAY luas_permukaan_tabung
 */

// CODING

var r = 2;
var tinggi = 3
var phi = Math.PI;

var luas_permukaan_tabung = ( 2 * phi * tinggi * r ) + ( 2 * phi * r * r);
console.log(luas_permukaan_tabung);


// Tugas Variable dan Tipe Data 1
/**
 * Tentukan algoritma dan pseudocode untuk menghitung volume setengah bola
 *
 * ALGORITMA
 * ---------
 *
 * 1. Buat variable r => jari - jari
 * 2. Gunakan konstanta phi = Math.PI
 * 3. Buat variable volume
 * 5. Isi volume dengan rumus = 1 bagi 2 kali phi kali r kali r kali r
 * 6. Cetak volume
 *
 * PSEUDOCODE
 * -----------
 *
 * STORE r WITH ANY NUMBER
 * STORE phi WITH Math.PI
 *
 * SET volume WITH 1 DIVIDE 2 MULTIPLY phi MULTIPLY r MULTIPLY r MULTIPLY r
 * DISPLAY volue
 */

// CODING

var r = 3;
var phi = Math.PI;

var volume = 1 / 2 * phi * r * r * r;
console.log(volume);


// Tugas Variable dan Tipe Data 2

// CODING
// var username = prompt("Siapa nama anda?");

var username = "Deni";
console.log("Selamat belajar, " + username + "!");


// Tugas Variable dan Tipe Data 3

// random number
var name = "admin";
var status = true;

// random dari angka 1-9
var acak = Math.floor(Math.random()*8+1);

console.log(name+acak+status);



