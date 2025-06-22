# Aplikasi Kalkulator Sederhana

Aplikasi kalkulator ini adalah implementasi dari kalkulator web dengan fungsi aritmatika sederhana. Aplikasi ini memungkinkan pengguna untuk melakukan operasi penambahan, pengurangan, perkalian, dan pembagian.

## Fitur

* **Operasi Dasar:** Penambahan (`+`), Pengurangan (`-`), Perkalian (`x`), Pembagian (`/`).
* **Input Angka:** Tombol angka (0-9) untuk memasukkan nilai.
* **Desimal:** Tombol desimal (`.`) untuk angka non-integer.
* **Persentase:** Tombol persentase (`%`) untuk menghitung persentase dari angka saat ini.
* **All Clear (AC):** Tombol untuk mereset kalkulator.
* **Tampilan Hasil:** Layar tampilan yang menunjukkan angka saat ini dan hasil perhitungan.

## Cara Menggunakan

1.  Buka file `index.html` di browser web Anda.
2.  Klik tombol angka untuk memasukkan nilai.
3.  Klik tombol operator (`+`, `-`, `x`, `/`) untuk memilih operasi.
4.  Masukkan angka berikutnya.
5.  Klik tombol `=` untuk melihat hasilnya.
6.  Gunakan tombol `AC` untuk menghapus semua input dan mereset kalkulator.
7.  Gunakan tombol `%` untuk mengubah angka saat ini menjadi nilai persentasenya (misal: 50 menjadi 0.5).

## Struktur Proyek
* `index.html`: Struktur dasar HTML kalkulator.
* `style.css`: Styling untuk tampilan kalkulator.
* `script.js`: Logika JavaScript yang mengendalikan fungsionalitas kalkulator.

## Test Case Kalkulasi

Berikut adalah beberapa skenario pengujian untuk memverifikasi fungsionalitas kalkulator:

### Penambahan

1.  **Angka Positif:**
    * **Input:** `7` `+` `3` `=`
    * **Hasil yang Diharapkan:** `10`
2.  **Angka Positif & Negatif:**
    * **Input:** `10` `+` `-5` `=`
    * **Hasil yang Diharapkan:** `5` (perlu dukungan input angka negatif, atau uji `10 - 5 =` sebagai alternatif jika input negatif tidak langsung didukung)
3.  **Desimal:**
    * **Input:** `3` `.` `5` `+` `2` `=`
    * **Hasil yang Diharapkan:** `5.5`

### Pengurangan

1.  **Angka Positif:**
    * **Input:** `15` `-` `8` `=`
    * **Hasil yang Diharapkan:** `7`
2.  **Hasil Negatif:**
    * **Input:** `5` `-` `10` `=`
    * **Hasil yang Diharapkan:** `-5`
3.  **Desimal:**
    * **Input:** `7` `.` `5` `-` `2` `.` `5` `=`
    * **Hasil yang Diharapkan:** `5`

### Perkalian

1.  **Angka Positif:**
    * **Input:** `6` `x` `4` `=`
    * **Hasil yang Diharapkan:** `24`
2.  **Dengan Nol:**
    * **Input:** `9` `x` `0` `=`
    * **Hasil yang Diharapkan:** `0`
3.  **Desimal:**
    * **Input:** `2` `.` `5` `x` `2` `=`
    * **Hasil yang Diharapkan:** `5`

### Pembagian

1.  **Angka Positif:**
    * **Input:** `20` `/` `5` `=`
    * **Hasil yang Diharapkan:** `4`
2.  **Desimal:**
    * **Input:** `10` `/` `4` `=`
    * **Hasil yang Diharapkan:** `2.5`
3.  **Pembagian dengan Nol (Error Handling):**
    * **Input:** `10` `/` `0` `=`
    * **Hasil yang Diharapkan:** `Error` (atau pesan error yang telah Anda implementasikan)

### Fungsi Tambahan

1.  **Persentase:**
    * **Input:** `50` `%`
    * **Hasil yang Diharapkan:** `0.5`
    * **Input:** `200` `x` `10` `%` `=`
    * **Hasil yang Diharapkan:** `20`
2.  **Tombol Desimal:**
    * **Input:** `3` `.` `.` `5` (menekan desimal dua kali)
    * **Hasil yang Diharapkan:** `3.5` (hanya satu desimal yang muncul)
3.  **Clear All (AC):**
    * **Input:** `1` `+` `2` `AC`
    * **Hasil yang Diharapkan:** `0` (layar kalkulator kembali ke 0)
4.  **Menekan `=` Tanpa Operasi:**
    * **Input:** `7` `=`
    * **Hasil yang Diharapkan:** `7` (angka tetap di layar, tidak ada error)
5.  **Chain Operator (Sequential):**
    * **Input:** `5` `+` `5` `+` `2` `=`
    * **Hasil yang Diharapkan:** `12`
    * **Input:** `10` `-` `2` `x` `3` `=`
    * **Hasil yang Diharapkan:** `24` (karena (10-2) = 8, lalu 8 x 3 = 24)