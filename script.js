document.addEventListener('DOMContentLoaded', () => {
    const materiData = {
        pengertian: `
            <div class="course-header">
                <i class="fas fa-book-open" style="font-size: 3em; margin-bottom: 15px; color: #fbc02d;"></i>
                <h2>1. Mengenal SPLDV</h2>
                <p>Dasar utama sistem persamaan linear dua variabel</p>
            </div>
            <div id="materi-body">
                    <p>Sistem Persamaan Linear Dua Variabel (SPLDV) adalah kumpulan dua atau lebih persamaan linear yang memiliki dua variabel yang sama.</p>
                    <p>Disebut <strong>Linear</strong> karena jika digambarkan ke dalam koordinat Kartesius, persamaan tersebut akan membentuk sebuah <strong>Garis Lurus</strong>. Sedangkan kata <strong>Sistem</strong> berarti ada lebih dari satu persamaan yang harus diselesaikan secara bersamaan untuk menemukan nilai variabel yang tepat.</p>
                
                <div class="materi-section" style="margin: 25px 0;">
                    <h4>Ciri-Ciri Utama SPLDV:</h4>
                    <div class="step-container">
                        <div class="step-card">
                            <div class="step-number"><i class="fas fa-check"></i></div>
                            <div>Menggunakan relasi tanda hubung <strong>sama dengan (=)</strong>.</div>
                        </div>
                        <div class="step-card">
                            <div class="step-number"><i class="fas fa-check"></i></div>
                            <div>Terdiri dari <strong>dua variabel</strong> yang berbeda (misalnya x dan y).</div>
                        </div>
                        <div class="step-card">
                            <div class="step-number"><i class="fas fa-check"></i></div>
                            <div>Kedua variabel hanya memiliki <strong>pangkat satu</strong> (tidak boleh ada kuadrat atau akar).</div>
                        </div>
                    </div>
                </div>

                <div class="concept-box">
                    <h4>Bentuk Umum:</h4>
                    <div class="math-display-large">
                        $$ \\begin{cases} a_1x + b_1y &= c_1 \\\\ a_2x + b_2y &= c_2 \\end{cases} $$
                    </div>
                </div>

                <div class="step-container">
                    <div class="step-card">
                        <div class="step-number">1</div>
                        <div><strong>Variabel (x, y):</strong> Nilai yang belum diketahui dan ingin kita cari.</div>
                    </div>
                    <div class="step-card">
                        <div class="step-number">2</div>
                        <div><strong>Koefisien (a, b):</strong> Angka yang menempel pada variabel.</div>
                    </div>
                    <div class="step-card">
                        <div class="step-number">3</div>
                        <div><strong>Konstanta (c):</strong> Angka tetap yang tidak memiliki variabel.</div>
                    </div>
                </div>
            </div>
        `,
        substitusi: `
            <div class="course-header">
                <i class="fas fa-exchange-alt" style="font-size: 3em; margin-bottom: 15px; color: #fbc02d;"></i>
                <h2>Metode Substitusi</h2>
                <p>Metode "Mengganti" Nilai Variabel</p>
            </div>
            <div id="materi-body">
                <p><b>Metode Substitusi</b> adalah cara menyelesaikan SPLDV dengan cara <b>mengganti</b> atau menyatakan satu variabel ke dalam variabel lainnya. Intinya, kita mengubah dua persamaan menjadi satu persamaan saja agar nilainya bisa kita temukan.</p>

                <h4><i class="fas fa-list-ol" style="color: #fbc02d;"></i> Langkah Penyelesaian:</h4>
                <div class="step-container">
                    <div class="step-card">
                        <div class="step-number">1</div>
                        <div>Pilih salah satu persamaan, ubah menjadi bentuk <b>x = ...</b> atau <b>y = ...</b></div>
                    </div>
                    <div class="step-card">
                        <div class="step-number">2</div>
                        <div>Masukkan (substitusikan) persamaan baru tersebut ke dalam persamaan yang lainnya.</div>
                    </div>
                    <div class="step-card">
                        <div class="step-number">3</div>
                        <div>Selesaikan hitungan aljabar tersebut untuk mendapatkan nilai variabel pertama.</div>
                    </div>
                    <div class="step-card">
                        <div class="step-number">4</div>
                        <div>Masukkan nilai variabel yang sudah didapat ke persamaan awal untuk mencari nilai variabel kedua.</div>
                    </div>
                </div>

                <hr style="border: 1px dashed #ddd; margin: 40px 0;">

                <div class="premium-equation-container" style="margin-top: 40px; text-align: left;">
                <div class="concept-box">
                    <h4 class="box-label">Contoh Soal 1</h4>
                    <p>Tentukan himpunan penyelesaian dari:</p>
                    <div class="math-display-large">
                        $$ \\begin{cases} x + y &= 4 \\\\ x + 3y &= 8 \\end{cases} $$
                    </div>
                </div>
                    <div style="background: #f0f7ff; padding: 15px; border-radius: 10px; font-size: 0.9em;">
                        <b>Pembahasan:</b><br>
                        1. Ubah persamaan (1) menjadi: $$x = 4 - y$$<br>
                        2. Substitusikan ke persamaan (2): $$(4 - y) + 3y = 8$$<br>
                        3. Hitung: $$4 + 2y = 8 \\rightarrow 2y = 4 \\rightarrow \\mathbf{y = 2}$$<br>
                        4. Cari x: $$x = 4 - 2 \\rightarrow \\mathbf{x = 2}$$<br>
                        <p style="margin-top: 10px; font-weight: bold; color: #001f3f;">Kunci Jawaban: (x, y) = (2, 2)</p>
                    </div>
                </div>

                <div class="premium-equation-container" style="margin-top: 30px; text-align: left;">
                <div class="concept-box">
                    <h4 class="box-label">Contoh Soal 2</h4>
                    <p>Tentukan nilai x dan y dari:</p>
                    <div class="math-display-large">
                        $$ \\begin{cases} y &= 2x - 1 \\\\ 3x + y &= 9 \\end{cases} $$
                </div>
                </div>
                    <div style="background: #f0f7ff; padding: 15px; border-radius: 10px; font-size: 0.9em;">
                        <b>Pembahasan:</b><br>
                        1. Persamaan (1) sudah dalam bentuk $$y = 2x - 1$$.<br>
                        2. Substitusikan langsung ke persamaan (2): $$3x + (2x - 1) = 9$$<br>
                        3. Hitung: $$5x - 1 = 9 \\rightarrow 5x = 10 \\rightarrow \\mathbf{x = 2}$$<br>
                        4. Cari y: $$y = 2(2) - 1 \\rightarrow \\mathbf{y = 3}$$<br>
                        <p style="margin-top: 10px; font-weight: bold; color: #001f3f;">Kunci Jawaban: (x, y) = (2, 3)</p>
                    </div>
                </div>
            </div>
        `,
        eliminasi: `
            <div class="course-header">
                <i class="fas fa-eraser" style="font-size: 3em; margin-bottom: 15px; color: #fbc02d;"></i>
                <h2>Metode Eliminasi</h2>
                <p>Teknik "Menghilangkan" Salah Satu Variabel</p>
            </div>
            <div id="materi-body">
                <p><b>Metode Eliminasi</b> adalah cara menyelesaikan SPLDV dengan cara <b>menghilangkan</b> salah satu variabel untuk mencari nilai variabel lainnya. Proses ini dilakukan dengan menjumlahkan atau mengurangkan kedua persamaan setelah koefisien variabel yang ingin dihilangkan sudah bernilai sama.</p>
                
                <div class="concept-box">
                    <h4>Kapan Menggunakan Eliminasi?</h4>
                    <p>Gunakan metode ini jika angka (koefisien) pada variabel sudah sama atau mudah untuk disamakan melalui perkalian sederhana agar proses hitung lebih cepat.</p>
                </div>

                <h4>Langkah Penyelesaian:</h4>
                <div class="step-container">
                    <div class="step-card">
                        <div class="step-number">1</div>
                        <div>Pilih variabel yang ingin dieliminasi (x atau y).</div>
                    </div>
                    <div class="step-card">
                        <div class="step-number">2</div>
                        <div>Samakan koefisien variabel tersebut dengan mengalikan persamaan dengan angka tertentu.</div>
                    </div>
                    <div class="step-card">
                        <div class="step-number">3</div>
                        <div>Jumlahkan (jika tanda beda) atau kurangkan (jika tanda sama) kedua persamaan hingga variabel tersebut hilang.</div>
                    </div>
                    <div class="step-card">
                        <div class="step-number">4</div>
                        <div>Selesaikan persamaan yang tersisa untuk mendapatkan nilai variabel pertama.</div>
                    </div>
                </div>

                <div class="pro-tip" style="margin-bottom: 40px;">
                    <i class="fas fa-check-circle"></i>
                    <p><strong>Ingat:</strong> Jika tanda koefisien sama (keduanya + atau keduanya -), gunakan operasi <b>PENGURANGAN</b>.</p>
                </div>

                <hr style="border: 1px dashed #ddd; margin: 40px 0;">

                <div class="premium-equation-container" style="text-align: left;">
                    <div class="concept-box">
                        <h4 class="box-label">Contoh Soal 1</h4>
                        <p>Tentukan nilai x dan y dari sistem berikut:</p>
                        <div class="math-display-large">
                            $$ \\begin{cases} 2x + y &= 7 \\\\ x + y &= 4 \\end{cases} $$
                        </div>
                    </div>
                    <div style="background: #f0f7ff; padding: 20px; border-radius: 15px;">
                        <b>Pembahasan:</b><br>
                        1. Karena koefisien y sudah sama (+1), langsung kita kurangkan:<br>
                        $$ (2x - x) + (y - y) = 7 - 4 $$
                        2. Maka ditemukan nilai x:<br>
                        $$ x = 3 $$
                        3. Cari nilai y dengan memasukkan x ke persamaan kedua:<br>
                        $$ 3 + y = 4 $$
                        $$ y = 1 $$
                        <p style="margin-top: 15px; font-weight: bold; color: #001f3f;">Kunci Jawaban: (x, y) = (3, 1)</p>
                    </div>
                </div>

                <div class="premium-equation-container" style="margin-top: 40px; text-align: left;">
                    <div class="concept-box">
                        <h4 class="box-label">Contoh Soal 2</h4>
                        <p>Selesaikan persamaan dengan koefisien berbeda:</p>
                        <div class="math-display-large">
                            $$ \\begin{cases} 3x + 2y &= 12 \\\\ x + y &= 5 \\end{cases} $$
                        </div>
                    </div>
                    <div style="background: #f0f7ff; padding: 20px; border-radius: 15px;">
                        <b>Pembahasan:</b><br>
                        1. Samakan koefisien y dengan mengalikan persamaan bawah dengan 2:<br>
                        $$ 2(x + y = 5) \\rightarrow 2x + 2y = 10 $$
                        2. Kurangkan persamaan atas dengan hasil baru:<br>
                        $$ (3x - 2x) = 12 - 10 $$
                        $$ x = 2 $$
                        3. Cari nilai y:<br>
                        $$ 2 + y = 5 $$
                        $$ y = 3 $$
                        <p style="margin-top: 15px; font-weight: bold; color: #001f3f;">Kunci Jawaban: (x, y) = (2, 3)</p>
                    </div>
                </div>
            </div>
        `,
        campuran: `
            <div class="course-header">
                <i class="fas fa-layer-group" style="font-size: 3em; margin-bottom: 15px; color: #fbc02d;"></i>
                <h2>Metode Campuran</h2>
                <p>Strategi Tercepat: Gabungan Eliminasi & Substitusi</p>
            </div>
            <div id="materi-body">
                <p><b>Metode Campuran</b> adalah cara menyelesaikan SPLDV dengan menggabungkan teknik <b>Eliminasi</b> dan <b>Substitusi</b>. Ini adalah metode yang paling sering digunakan dalam kehidupan nyata karena proses pengerjaannya yang sangat efisien dan cepat.</p>
                
                <div class="concept-box">
                    <h4>Mengapa Metode Campuran?</h4>
                    <p>Melakukan eliminasi dua kali seringkali memakan waktu lama, sedangkan substitusi murni dari awal bisa menghasilkan angka pecahan yang rumit. Dengan metode campuran, kita mengambil "jalan tengah" yang paling mudah.</p>
                </div>

                <h4>Alur Pengerjaan:</h4>
                <div class="step-container">
                    <div class="step-card">
                        <div class="step-number">1</div>
                        <div>Gunakan <b>Metode Eliminasi</b> untuk menghilangkan salah satu variabel dan menemukan nilai variabel pertama.</div>
                    </div>
                    <div class="step-card">
                        <div class="step-number">2</div>
                        <div>Setelah mendapatkan satu nilai, <b>masukkan (substitusikan)</b> nilai tersebut ke salah satu persamaan asli yang paling sederhana.</div>
                    </div>
                    <div class="step-card">
                        <div class="step-number">3</div>
                        <div>Selesaikan perhitungan aljabar tersebut untuk mendapatkan nilai variabel yang kedua.</div>
                    </div>
                </div>

                <hr style="border: 1px dashed #ddd; margin: 40px 0;">

                <div class="premium-equation-container" style="text-align: left;">
                    <div class="concept-box">
                        <h4 class="box-label">Contoh Soal 1</h4>
                        <p>Tentukan nilai x dan y dari sistem berikut:</p>
                        <div class="math-display-large">
                            $$ \\begin{cases} x + y &= 5 \\\\ x - y &= 1 \\end{cases} $$
                        </div>
                    </div>
                    <div style="background: #f0f7ff; padding: 20px; border-radius: 15px;">
                        <b>Pembahasan:</b><br>
                        1. <b>Eliminasi y</b> (karena koefisien sudah sama namun beda tanda, kita gunakan penjumlahan):<br>
                        $$ (x + x) + (y + (-y)) = 5 + 1 $$
                        $$ 2x = 6 \\rightarrow x = 3 $$
                        2. <b>Substitusi x = 3</b> ke persamaan $x + y = 5$:<br>
                        $$ 3 + y = 5 $$
                        $$ y = 5 - 3 \\rightarrow y = 2 $$
                        <p style="margin-top: 15px; font-weight: bold; color: #001f3f;">Kunci Jawaban: (x, y) = (3, 2)</p>
                    </div>
                </div>

                <div class="premium-equation-container" style="margin-top: 40px; text-align: left;">
                    <div class="concept-box">
                        <h4 class="box-label">Contoh Soal 2</h4>
                        <p>Selesaikan persamaan dengan teknik pengali:</p>
                        <div class="math-display-large">
                            $$ \\begin{cases} 3x + 2y &= 12 \\\\ x + y &= 5 \\end{cases} $$
                        </div>
                    </div>
                    <div style="background: #f0f7ff; padding: 20px; border-radius: 15px;">
                        <b>Pembahasan:</b><br>
                        1. <b>Eliminasi x</b> (Kalikan persamaan bawah dengan 3 agar koefisien x sama):<br>
                        $$ 3x + 2y = 12 $$
                        $$ 3(x + y = 5) \\rightarrow 3x + 3y = 15 $$
                        2. Kurangkan kedua persamaan tersebut:<br>
                        $$ (3x - 3x) + (2y - 3y) = 12 - 15 $$
                        $$ -y = -3 \\rightarrow y = 3 $$
                        3. <b>Substitusi y = 3</b> ke persamaan $x + y = 5$:<br>
                        $$ x + 3 = 5 $$
                        $$ x = 2 $$
                        <p style="margin-top: 15px; font-weight: bold; color: #001f3f;">Kunci Jawaban: (x, y) = (2, 3)</p>
                    </div>
                </div>

                <div class="pro-tip" style="margin-top: 30px;">
                    <i class="fas fa-star" style="color: #fbc02d;"></i>
                    <p><strong>Strategi Juara:</strong> Metode ini adalah senjata terbaik untuk memenangkan <b>Level 17 sampai Level 20</b> di game Xudoku Math Plus!</p>
                </div>
            </div>
        `,
    grafik: `
        <div class="course-header">
            <i class="fas fa-chart-line" style="font-size: 3em; margin-bottom: 15px; color: #fbc02d;"></i>
            <h2>Metode Grafik</h2>
            <p>Visualisasi Solusi pada Koordinat Kartesius</p>
        </div>
        <div id="materi-body">
            <p><b>Metode Grafik</b> adalah cara mencari penyelesaian SPLDV dengan menggambar setiap persamaan linear sebagai sebuah garis lurus pada koordinat Kartesius. Titik di mana kedua garis tersebut saling bertemu (berpotongan) adalah jawaban dari sistem tersebut.</p>
            
            <div class="concept-box">
                <h4>Konsep Utama:</h4>
                <p>Himpunan penyelesaian (HP) dari SPLDV adalah koordinat <b>titik potong (x, y)</b>. Jika kedua garis sejajar dan tidak pernah bertemu, maka sistem tersebut tidak memiliki penyelesaian.</p>
            </div>

            <h4>Langkah Penyelesaian:</h4>
            <div class="step-container">
                <div class="step-card">
                    <div class="step-number">1</div>
                    <div>Tentukan titik potong sumbu x (saat y = 0) dan sumbu y (saat x = 0) untuk tiap persamaan.</div>
                </div>
                <div class="step-card">
                    <div class="step-number">2</div>
                    <div>Gambarkan titik-titik tersebut pada bidang Kartesius.</div>
                </div>
                <div class="step-card">
                    <div class="step-number">3</div>
                    <div>Hubungkan titik-titik tersebut hingga membentuk garis lurus yang panjang.</div>
                </div>
                <div class="step-card">
                    <div class="step-number">4</div>
                    <div>Tentukan koordinat titik potong kedua garis tersebut sebagai solusi akhir $(x, y)$.</div>
                </div>
            </div>

            <hr style="border: 1px dashed #ddd; margin: 40px 0;">

            <div class="premium-equation-container" style="text-align: left;">
                <div class="concept-box">
                    <h4 class="box-label">Contoh Soal 1</h4>
                    <p>Tentukan penyelesaian dari sistem berikut menggunakan grafik:</p>
                    <div class="math-display-large">
                        $$ \\begin{cases} x + y &= 4 \\\\ x - y &= 0 \\end{cases} $$
                    </div>
                </div>
                <div style="background: #f0f7ff; padding: 20px; border-radius: 15px;">
                    <b>Pembahasan:</b><br>
                    1. <b>Garis Pertama (x + y = 4):</b><br>
                    $$ \\text{Jika } x=0, \\text{ maka } y=4 \\rightarrow (0, 4) $$
                    $$ \\text{Jika } y=0, \\text{ maka } x=4 \\rightarrow (4, 0) $$
                    2. <b>Garis Kedua (x - y = 0):</b><br>
                    $$ \\text{Jika } x=0, \\text{ maka } y=0 \\rightarrow (0, 0) $$
                    $$ \\text{Jika } x=2, \\text{ maka } y=2 \\rightarrow (2, 2) $$
                    3. <b>Hasil Grafik:</b><br>
                    Setelah digambar, kedua garis bertemu tepat di titik (2, 2).
                    
                    <div style="text-align: center; margin: 15px 0;">
                        <img src="assets/grafik1.jpeg" alt="Grafik Soal 1" style="max-width: 100%; border-radius: 10px; border: 2px solid #ddd;">
                        <p style="font-size: 0.8em; color: #666;">[Gambar: Visualisasi garis x+y=4 dan x-y=0]</p>
                    </div>

                    <p style="margin-top: 15px; font-weight: bold; color: #001f3f;">Kunci Jawaban: (x, y) = (2, 2)</p>
                </div>
            </div>

            <div class="premium-equation-container" style="margin-top: 40px; text-align: left;">
                <div class="concept-box">
                    <h4 class="box-label">Contoh Soal 2</h4>
                    <p>Cari titik potong dari sistem persamaan berikut:</p>
                    <div class="math-display-large">
                        $$ \\begin{cases} 2x + y &= 6 \\\\ x + 2y &= 6 \\end{cases} $$
                    </div>
                </div>
                <div style="background: #f0f7ff; padding: 20px; border-radius: 15px;">
                    <b>Pembahasan:</b><br>
                    1. <b>Garis Pertama (2x + y = 6):</b><br>
                    $$ \\text{Titik potong: } (0, 6) \\text{ dan } (3, 0) $$
                    2. <b>Garis Kedua (x + 2y = 6):</b><br>
                    $$ \\text{Titik potong: } (0, 3) \\text{ dan } (6, 0) $$
                    3. <b>Hasil Grafik:</b><br>
                    Kedua garis akan saling memotong di koordinat (2, 2).

                    <div style="text-align: center; margin: 15px 0;">
                        <img src="assets/grafik2.jpeg" alt="Grafik Soal 2" style="max-width: 100%; border-radius: 10px; border: 2px solid #ddd;">
                        <p style="font-size: 0.8em; color: #666;">[Gambar: Visualisasi garis 2x+y=6 dan x+2y=6]</p>
                    </div>

                    <p style="margin-top: 15px; font-weight: bold; color: #001f3f;">Kunci Jawaban: (x, y) = (2, 2)</p>
                </div>
            </div>

            <div class="pro-tip" style="margin-top: 30px;">
                <i class="fas fa-search-plus"></i>
                <p><strong>Tips Ketelitian:</strong> Pastikan skala pada sumbu x dan y sama besar. Jika skala tidak konsisten, titik potong yang kamu temukan bisa meleset dari jawaban asli!</p>
            </div>
        </div>
    `,
    // ... (metode grafik)
        // Tambahkan eliminasi, campuran, dan grafik dengan pola yang sama...
    };

    window.openModul = function(id) {
        const displayArea = document.getElementById('materi-dynamic-content'); // ID container materi kamu
        
        if (materiData[id]) {
            // 1. Masukkan kontennya dulu
            displayArea.innerHTML = materiData[id];
            
            // 2. Lakukan pindah frame (pindah halaman)
            document.getElementById('materi-dashboard-view').classList.add('hidden');
            document.getElementById('materi-content-view').classList.remove('hidden');

            // 3. WAJIB: Perintahkan MathJax untuk memproses rumus yang baru masuk tadi
            if (window.MathJax && window.MathJax.typeset) {
                window.MathJax.typeset(); 
            }
        }
    };

    window.backToDashboard = function() {
        const dashboard = document.getElementById('materi-dashboard-view');
        const contentView = document.getElementById('materi-content-view');
        
        // Tampilkan kembali grid modul
        contentView.classList.add('hidden');
        dashboard.classList.remove('hidden');
    };
    

   
    // ========== DATA LEVEL XUDOKU ==========
    const levels = [
        // Level 1
        { type: 'sudoku', size: 4, board: [[0, 4, 3, 0], [3, 0, 0, 2], [0, 2, 1, 0], [1, 0, 0, 4]], solution: [[2, 4, 3, 1], [3, 1, 4, 2], [4, 2, 1, 3], [1, 3, 2, 4]], instruction: "Gunakan angka 1 sampai 4. Angka tidak boleh sama dalam satu baris, kolom, dan kotak 2x2." },
        // Level 2
        { type: 'sudoku', size: 6, customGrid: '6x4', board: [[4,0,6,0,2,5],[0,5,0,4,0,3],[2,0,5,0,4,1],[0,4,1,6,0,0]], solution: [[4,3,6,1,2,5],[1,5,2,4,6,3],[2,6,5,3,4,1],[3,4,1,6,5,2]], instruction: "Gunakan angka 1 sampai 6. Angka tidak boleh sama dalam satu baris, kolom, dan kotak 2x2." },
        // Level 3
        { type: 'sudoku', size: 4, board: [['C','D',0, 'B'],[0,'A',0,0],['A',0,'D','C'],[0,'C','B',0]], solution: [['C','D','A','B'],['B','A','C','D'],['A','B','D','C'],['D','C','B','A']], instruction: "Gunakan huruf (A, B, C, D) untuk melengkapi setiap kotak yang kosong, dalam 1 kotak besar, 1 baris, dan 1 kolom, tidak boleh ada huruf yang sama." },
        // Level 4
        { type: 'sudoku', size: 6, customGrid: '6x4', board: [[0, 'C', 'F', 0, 'E', 'D'],['D', 0, 0, 'C', 0, 0],['C', 0, 'A', 'B', 0, 'E'],['E', 'F', 'B', 0, 0, 'A']], solution: [['B','C','F','A','E','D'],['D','A','E','C','B','F'],['C','D','A','B','F','E'],['E','F','B','D','C','A']], instruction: "Gunakan huruf A sampai F. Huruf tidak boleh sama dalam satu baris, kolom, dan kotak 3x2." },
        // Level 5
        { type: 'sudoku', size: 9, board: [[0,1,0,4,9,7,0,2,0],[8,0,7,5,0,6,4,1,0],[6,0,0,1,2,0,0,7,5],[1,0,0,2,0,5,9,0,3],[0,5,3,7,1,4,0,8,6],[0,6,2,3,0,9,7,0,1],[2,0,9,6,4,1,5,3,7],[7,4,0,8,0,3,1,0,0],[5,3,0,0,7,0,0,6,4]], solution: [[3,1,5,4,9,7,6,2,8],[8,2,7,5,3,6,4,1,9],[6,9,4,1,2,8,3,7,5],[1,7,8,2,6,5,9,4,3],[9,5,3,7,1,4,2,8,6],[4,6,2,3,8,9,7,5,1],[2,8,9,6,4,1,5,3,7],[7,4,6,8,5,3,1,9,2],[5,3,1,9,7,2,8,6,4]], instruction: "Gunakan angka 1 sampai 9. Angka tidak boleh sama dalam satu baris, kolom, dan kotak 3x3." },
        // Level 6
        { type: 'sudoku', size: 9, board: [[0,3,8,0,1,4,0,0,9],[1,0,0,0,5,0,0,8,0],[0,6,7,8,0,3,0,2,0],[3,0,0,1,0,9,4,0,0],[7,0,2,4,0,0,9,5,3],[0,0,0,0,3,2,0,1,0],[0,0,3,0,2,0,6,0,0],[6,0,0,7,0,0,8,0,0],[4,5,1,3,0,0,0,9,7]], solution: [[2,3,8,6,1,4,5,7,9],[1,9,4,2,5,7,3,8,6],[5,6,7,8,9,3,1,2,4],[3,8,5,1,7,9,4,6,2],[7,1,2,4,8,6,9,5,3],[9,4,6,5,3,2,7,1,8],[8,7,3,9,2,5,6,4,1],[6,2,9,7,4,1,8,3,5],[4,5,1,3,6,8,2,9,7]], instruction: "Gunakan angka 1 sampai 9. Angka tidak boleh sama dalam satu baris, kolom, dan kotak 3x3." },
        // Level 7 - Persamaan & Pertidaksamaan Dinamis
        { 
            type: 'equation', 
            puzzles: [ 
                { q: ['12', '+', '22', '=', '20', '+', '?'], target: 14 }, 
                { q: ['48', '+', '25', '=', '17', '+', '?'], target: 56 }, 
                // Pertidaksamaan 1: Hasil tidak boleh 4
                { q: ['2', '+', '8', '+', '?', '≠', '6', '+', '6', '+', '2'], forbidden: 4 }, 
                // Pertidaksamaan 2: Total input tidak boleh 7
                { q: ['4', '+', '?', '+', '?', '≠', '1', '+', '7', '+', '3'], forbiddenTotal: 7 } 
            ], 
            instruction: "Lengkapi kotak agar persamaan (=) dan pertidaksamaan (≠) terpenuhi! Untuk pertidaksamaan, jawaban bisa bervariasi." 
        },
        // Level 8
        { 
            type: 'crossword',
            grid: [
                ['Start', '185', '-', '14', '=', '?', null],
                [null, null, null, null, null, '-', null],
                [null, null, null, null, null, '?', null],
                [null, null, null, null, null, '=',  null],
                [null, '?', '=', '40', '-', '122', null],
                [null, '-',  null, null, null, null, null],
                [null,'7', null, null, null, null, null],
                [null,'=', null, null, null, null, null],
                [null,'?', '-', '21', '=', '54', null],
                [null, null, null, null, null, '-', null],
                [null, null, null, null, null, '?', null],
                [null, null, null, null, null, '=', null],
                [null, null, null, null, 'Finish', '-6', null],
                
            ],
            // Jawaban sesuai urutan tanda '?' dari atas-kiri ke bawah-kanan
            solution: ["171", "49", "82", "75", "60"],
            instruction: "Lengkapi teka-teki pengurangan berantai di bawah!"
        },
        // Level 9
        { 
            type: 'crossword',
            grid: [
                // Baris 0: 5 x 7 = 35
                ['5', 'x', '7', '=', '?', null, null], 
                // Baris 1: x (vertikal)
                ['x', null, 'x', null, null, null, null],
                // Baris 2: 14 x 3 = 42 | dan ada 2 (awal eq 6)
                ['14', 'x', '3', '=', '?', null, '2'],
                // Baris 3: = (vertikal)
                ['=', null, '=', null, '=', null, 'x'],
                // Baris 4: 70 | 21 | 42 | 8
                ['?', null, '?', null, '?', null, '8'],
                // Baris 5: null | = | x | =
                [null, null, null, null, 'x', null, 'x'],
                // Baris 6: 1 x 3 = 3 | 16
                ['?', 'x', '3', '=', '3', null, '1'],
                // Baris 7: x (vertikalZ)
                ['x', null, null, null, 'x', null,'='],
                // Baris 8: 9 | 7 x 2 = 14
                ['9', null, '?', 'x', '2', '=', '?'],
                // Baris 9: x (vertikal)
                ['x', null, 'x', null, null, null, null],
                // Baris 10: 3 | 0 (vertikal)
                ['?', null, '?', null, null, null, null],
                // Baris 11: = (vertikal)
                ['=', null, '=', null, null, null, null],
                // Baris 12: 27 | 0 = 2 x 0
                ['27', null, '0', '=', '2', 'x', '?']
            ],

            // Jawaban sesuai urutan tanda '?' dari kiri-atas ke kanan-bawah
            solution: ["35", "42", "70", "21", "7", "1", "8", "16", "3", "0", "0"],
            instruction: "Selesaikan teka-teki silang perkalian di bawah dengan melengkapi kotak yang kosong!"
        },
        // Level 10
        {
            type: 'fraction',
            instruction: "Perhatikan contoh pada kotak A untuk mengisi kotak B, C, dan D agar pecahan sesuai dengan gambar!",
            puzzles: [
                {
                    id: 'A', title: 'CONTOH A', grid: [5, 5], 
                    shaded: [0, 4, 6, 8, 11, 13, 16, 18, 20, 24], 
                    example: true, 
                    display: "10/25 = 2/5"
                },
                {
                    id: 'B', title: 'KOTAK B', grid: [5, 6], 
                    shaded: [3, 5, 6, 9, 11, 13, 15, 17, 21, 22, 24, 27], 
                    solution: ["12", "30", "6", "15", "2", "5"]
                },
                {
                    id: 'C', title: 'KOTAK C', grid: [4, 5], 
                    shaded: [2, 5, 6, 8, 9, 11, 12, 13, 17, 18], 
                    solution: ["10", "20", "2", "4", "1", "2"]
                },
                {
                    id: 'D', title: 'KOTAK D', grid: [4, 4], 
                    shaded: [5, 11], 
                    solution: ["2", "16", "1", "8"]
                }
            ]
        },
        // Level 11
        {
            type: 'card_game',
            instruction: "Selesaikan pertanyaan pada ke-4 kartu! Isilah kotak bertanda tanya (?) langsung pada kartu, dan temukan nilai A, B, C, dan D pada kotak di bawah kartu.",

            cards: [
                {
                    id: 1, title: 'Card 1', op: '+',
                    rows: [["4", "2", "1"], ["3", "?", "9"], ["A", "A", "B"]],
                    gridSolutions: ["4"], // Untuk tanda tanya di baris 2
                    footerInputs: [
                        { label: 'A', sol: '7' },
                        { label: 'B', sol: '0' }
                    ]
                },
                {
                    id: 2, title: 'Card 2', op: '-',
                    rows: [["5", "4", "?"], ["3", "?", "2"], ["C", "B", "A"]],
                    gridSolutions: ["9", "4"], // Berurutan untuk tanda tanya
                    footerInputs: [
                        { label: 'C', sol: '2' }
                    ]
                },
                {
                    id: 3, title: 'Card 3', op: '×',
                    rows: [["4", "3"], ["1", "?"], ["D", "B", "C"]],
                    gridSolutions: ["4"],
                    footerInputs: [
                        { label: 'D', sol: '6' }
                    ]
                },
                {
                    id: 4, title: 'Card 4', isFormula: true,
                    formula: "(B + A) × D / C", // (0 + 7) * 6 / 2 = 21
                    solution: "21"
                }
            ]
        },
        // Level 12 
        { 
            type: 'sum_logic', 
            board: [
                [4, 9, 3, 5], 
                [0, 5, 0, 4], 
                [2, 7, 5, 0]
            ], 
            colors: [
                ['b', 'p', 'y', 'b'], // Baris 1: Biru, Pink, Kuning, Biru
                ['p', 'y', 'b', 'p'], // Baris 2: Pink, Pink, Biru, Pink
                ['y', 'b', 'p', 'y']  // Baris 3: Kuning, Biru, Pink, Kuning
            ], 
            sums: { b: 18, p: 21, y: 11 }, 
            solution: [
                [4, 9, 3, 5], 
                [3, 5, 2, 4], 
                [2, 7, 5, 1]
            ], 
            instruction: "Isilah kotak kosong menggunakan angka 1-9. Aturan: Tidak boleh ada angka sama dalam satu baris, kolom, atau warna. Jumlah angka pada tiap warna harus sesuai petunjuk!" 
        },
        // Level 13 - Persamaan Linear Dua Variabel
        {
            type: 'linear_table',
            equation: 'x - y = 4',
            xValues: [-2, -1, 0, 1, 2],
            solution: ["-6", "-5", "-4", "-3", "-2"],
            instruction: "Gunakan persamaan x - y = 4 untuk menentukan nilai y dengan cara mensubstitusikan nilai x yang ada pada tabel di bawah ini!"
        },
        // Level 14 - Rolling Wheels (Berdasarkan sketsa terbaru)
        {
            type: 'rolling_wheels',
            equations: [
                { q: '2x = 8', var: 'x', sol: '4' },
                { q: '4y - x = 4', var: 'y', sol: '2' }
            ],
            // Data rumus dan hasil yang diharapkan (x=4, y=2)
            wheelData: [
                { expr: '2x', sol: '8' },     // 2 * 4
                { expr: 'y + 1', sol: '3' },  // 2 + 1
                { expr: 'x + 1', sol: '5' },  // 4 + 1
                { expr: '2x - 1', sol: '7' }, // 2(4) - 1
                { expr: 'y', sol: '2' },      // 2
                { expr: 'x', sol: '4' },      // 4
                { expr: 'y / y', sol: '1' },  // 2 / 2
                { expr: 'x + y', sol: '6' }   // 4 + 2
            ],
            instruction: "Cari nilai x dan y terlebih dahulu, lalu gunakan untuk melengkapi bagian roda yang masih kosong agar nilainya setara dengan roda angka!"
        },
        // Level 15 - Algebra Sudoku
        {
            type: 'algebra_sudoku',
            instruction: "Gunakan angka 1 sampai 4 untuk melengkapi setiap kotak yang kosong. Selesaikan terlebih dahulu persamaan di bawah untuk mengetahui nilai X dan y. Dalam 1 kotak besar, 1 baris, dan 1 kolom, tidak boleh ada angka yang sama.",
            equations: [
                { q: '2x + y = 7', var: 'x', sol: '2' },
                { q: 'x + y = 5', var: 'y', sol: '3' }
            ],
            // 0 = Input kosong, string = angka/variabel tetap
            board: [
                ['Y', '1', 'X', '4'],
                [0, 0, 0, 'Y'],
                ['X', '4', 'Y', '1'],
                ['1', 0, 0, 0]
            ],
            // Variabel pengganti untuk logika pengecekan
            vars: { 'X': 2, 'Y': 3 },
            // Solusi akhir papan Sudoku 4x4
            solutionMatrix: [
                [3, 1, 2, 4],
                [4, 2, 1, 3],
                [2, 4, 3, 1],
                [1, 3, 4, 2]
            ]
        },
        // Data Level 16
        {
            type: 'triangle_algebra',
            instruction: "Selesaikan persamaan SPLDV untuk mencari nilai x dan y, lalu isi semua kotak di dalam segitiga agar terisi angka 1 sampai 16 secara acak!",
            equations: [
                { q: '2x + y = 10', var: 'x', sol: '4' },
                { q: 'x + y = 6', var: 'y', sol: '2' }
            ],
            // Struktur Segitiga: [Nilai tetap atau Ekspresi Aljabar]
            // Solusi: x=4, y=2
            triangleRows: [
                ['1'],                                      // Baris 1
                ['3', 'x', 'y'],                            // Baris 2
                ['7', '9', '2x', '5', '3y'],                // Baris 3
                ['13', '4x-1', '14', '10', 'x^2', '11', '3x'] // Baris 4
            ],
            // Jawaban yang harus dihitung user berdasarkan x=4, y=2
            calcSolutions: {
                'x': '4', 'y': '2', '2x': '8', '3y': '6', 
                '4x-1': '15', 'x^2': '16', '3x': '12'
            }
        },
        // Data Level 17
        {
            type: 'dual_spldv_sudoku',
            instruction: "Selesaikan kedua sistem SPLDV untuk menemukan nilai x₁ dan x₂, lalu isi kotak kosong dengan angka tersebut (aturan: tidak boleh ada angka sama dalam satu baris/kolom)!",
            systems: [
                { eq: ['2x - y = -1', 'x + y = -2'], var: 'x₁', sol: '-1' },
                { eq: ['3x + y = -8', 'x - y = 0'], var: 'x₂', sol: '-2' }
            ],
            // Papan 2x2: 0 adalah input, string adalah angka tetap
            board: [
                ['-1', 0],
                [0, 0]
            ],
            solutionMatrix: [
                ['-1', '-2'],
                ['-2', '-1']
            ]
        },
        // Data Level 18
        {
            type: 'ladder_algebra',
            instruction: "Cari nilai a dan b melalui SPLDV, lalu lengkapi kotak kosong pada tangga angka (1 s.d 6). Tangga kiri bernilai positif, tangga kanan bernilai negatif!",
            equations: [
                { q: 'a + b = 2', var: 'a', sol: '5' },
                { q: '2a - 3b = 19', var: 'b', sol: '-3' }
            ],
            // Papan 3x6: 0 adalah input user, null adalah ruang hampa
            board: [
                ['1', null, null, '-1', '-2', 0],
                [0, '3', null, null, 0, '-5'],
                ['4', 0, '6', null, null, '-6']
            ],
            solutionMatrix: [
                ['1', null, null, '-1', '-2', '-3'],
                ['2', '3', null, null, '-4', '-5'],
                ['4', '5', '6', null, null, '-6']
            ]
        },
        // Data Level 19
        {
            type: 'variable_sudoku_3x3',
            instruction: "Selesaikan persamaan untuk mencari b dan c. Cari nilai a dari selisih c dan b (a = c - b). Kemudian lengkapi papan Sudoku 3x3 menggunakan angka 1, 2, dan 3!",
            equations: [
                { q: 'b + c = 3', var: 'b', sol: '1' },
                { q: '3b - c = 1', var: 'c', sol: '2' }
            ],
            // a = c - b -> 2 - 1 = 1
            vars: { 'a': '1', 'b': '1', 'c': '2' },
            // a, b, c diletakkan di papan sebagai teks tetap
            board: [
                ['a', 0, 0],
                [0, '3', 0],
                ['3', 'b', 'c']
            ],
            solutionMatrix: [
                ['1', '2', '3'],
                ['2', '3', '1'],
                ['3', '1', '2']
            ]
        },
        // Data Level 20 (Final Level)
        {
            type: 'ludo_algebra_final',
            instruction: "Cari nilai x dan y dari SPLDV. Hitung hasil dari 9 kotak ekspresi di bawah, lalu masukkan NOMOR kotak tersebut ke sarang warna yang sesuai dengan nilainya!",
            equations: [
                { q: '3x + 2y = 12', var: 'x', sol: '2' },
                { q: 'x - y = -1', var: 'y', sol: '3' }
            ],
            // x=2, y=3
            expressions: [
                { id: 1, expr: '2y - 1', res: 5 },  // Blue
                { id: 2, expr: '6x', res: 12 },      // Red
                { id: 3, expr: '2x + 1', res: 5 },  // Blue
                { id: 4, expr: 'x + y', res: 5 },   // Blue
                { id: 5, expr: '4x', res: 8 },       // Yellow
                { id: 6, expr: '4y', res: 12 },      // Red
                { id: 7, expr: '5y', res: 15 },      // Green
                { id: 8, expr: 'x + 2y', res: 8 },  // Yellow
                { id: 9, expr: '2xy', res: 12 } // Red
            ],
            nests: [
                { color: 'red', label: 'Merah (Hasil = 12)', correctIds: ['2', '6', '9'] },
                { color: 'blue', label: 'Biru (Hasil = 5)', correctIds: ['1', '3', '4'] },
                { color: 'yellow', label: 'Kuning (Hasil = 8)', correctIds: ['5', '8'] },
                { color: 'green', label: 'Hijau (Hasil = 15)', correctIds: ['7'] }
            ]
        }
                
            ];

        
    while (levels.length < 20) {
        levels.push({ type: 'equation', puzzles: [], instruction: "Level dalam pengembangan." });
    }
    // ========== PENGATURAN STATE & UI ==========
    let currentLevel = 0;
    let unlockedLevel = parseInt(localStorage.getItem('unlockedXudokuLevel')) || 1;

    let musicOn = false;
    let sfxOn = true;

    const ui = {
        tabs: document.querySelectorAll('.nav-tab'),
        tabContents: document.querySelectorAll('.tab-content'),
        playGameBtn: document.getElementById('play-game-btn'),
        levelSelectModal: document.getElementById('level-select-modal'),
        helpModal: document.getElementById('help-modal'),
        closeButtons: document.querySelectorAll('.close-button'),
        helpButton: document.getElementById('help-button'),
        levelMapContainer: document.getElementById('level-map-container'),
        gameBoardContainer: document.getElementById('game-board-container'),
        levelTitle: document.getElementById('level-title'),
        levelInstruction: document.getElementById('level-instruction'),
        checkAnswerBtn: document.getElementById('check-answer-btn'),
        openLevelMapBtn: document.getElementById('open-level-map-btn'),
        musicToggle: document.getElementById('music-toggle'),
        sfxToggle: document.getElementById('sfx-toggle'),
        bgMusic: document.getElementById('bg-music'),
        sfxCorrect: document.getElementById('sfx-correct'),
        sfxWrong: document.getElementById('sfx-wrong')
    };

    
    // ========== LOGIKA AUDIO ==========
    function toggleMusic() {
        musicOn = !musicOn;
        if (musicOn) {
            ui.bgMusic.play();
            ui.musicToggle.classList.add('active');
        } else {
            ui.bgMusic.pause();
            ui.musicToggle.classList.remove('active');
        }
    }

    function toggleSfx() {
        sfxOn = !sfxOn;
        ui.sfxToggle.classList.toggle('active', sfxOn);
    }
    
    // ========== LOGIKA NAVIGASI & MODAL ==========
    window.showLevelMap = function() {
        document.getElementById('level-selection-view').classList.remove('hidden');
        document.getElementById('game-play-view').classList.add('hidden');
        populateLevelMap();
    };
    // Pastikan fungsi ini bisa dipanggil dari atribut onclick di HTML
    window.switchTab = function(targetTab) {
        // 1. Sembunyikan semua konten halaman (Materi, Game, Tentang, dll)
        const allContents = document.querySelectorAll('.tab-content');
        allContents.forEach(content => content.classList.remove('active'));

        // 2. Hapus status 'active' (garis kuning) dari semua link di menu navigasi
        const allNavLinks = document.querySelectorAll('.nav-tab');
        allNavLinks.forEach(link => link.classList.remove('active'));

        // 3. Tampilkan halaman yang dipilih
        const targetContent = document.getElementById(targetTab);
        if (targetContent) {
            targetContent.classList.add('active');
        }

        // 4. Tambahkan garis kuning ke menu navigasi yang sesuai
        const activeNavLink = document.querySelector(`.nav-tab[data-tab="${targetTab}"]`);
        if (activeNavLink) {
            activeNavLink.classList.add('active');
        }

        // 5. Jika masuk ke tab 'game', jalankan fungsi peta level
        if (targetTab === 'game') {
            if (typeof showLevelMap === 'function') showLevelMap();
        }

        // Scroll ke atas otomatis setiap pindah halaman agar rapi
        window.scrollTo(0, 0);
    };
    function switchTab(targetTab) {
        ui.tabContents.forEach(content => content.classList.remove('active'));
        ui.tabs.forEach(tab => tab.classList.remove('active'));
        
        document.getElementById(targetTab).classList.add('active');
        const activeTab = document.querySelector(`.nav-tab[data-tab="${targetTab}"]`);
        if (activeTab) activeTab.classList.add('active');

        if (targetTab === 'game') {
            showLevelMap(); // Otomatis ke peta saat klik tab game
        }
    }

    function openLevelSelect() {
        populateLevelMap();
        ui.levelSelectModal.style.display = 'block';
    }

    function populateLevelMap() {
        ui.levelMapContainer.innerHTML = '';
        levels.forEach((levelData, index) => {
            const levelNumber = index + 1;
            const levelNode = document.createElement('div');
            levelNode.className = 'level-node';
            levelNode.textContent = levelNumber;
            if (Object.keys(levelData).length === 0) {
                 levelNode.classList.add('locked');
            } else if (levelNumber <= unlockedLevel) {
                levelNode.addEventListener('click', () => selectLevel(levelNumber));
                if (levelNumber === currentLevel) {
                    levelNode.classList.add('current');
                }
            } else {
                levelNode.classList.add('locked');
            }
            ui.levelMapContainer.appendChild(levelNode);
        });
    }

    function selectLevel(levelNum) {
        currentLevel = levelNum;
        ui.levelSelectModal.style.display = 'none';
        // Tidak perlu switchTab('game') lagi karena sudah pasti di tab game
        startLevel(levelNum);
    }
    function showLevelMap() {
        document.getElementById('level-selection-view').classList.remove('hidden');
        document.getElementById('game-play-view').classList.add('hidden');
        
        // Targetkan container di tab Game
        const mapContainer = document.querySelector('#game #level-map-container');
        if (mapContainer) {
            mapContainer.innerHTML = '';
            levels.forEach((level, index) => {
                const num = index + 1;
                const node = document.createElement('div');
                node.className = 'level-node';
                node.textContent = num;

                // Logika Unlock
                if (num <= unlockedLevel) {
                    node.onclick = () => startLevel(num);
                    if (num === unlockedLevel) node.classList.add('current');
                } else {
                    node.classList.add('locked');
                }
                mapContainer.appendChild(node);
            });
        }
    }
    function switchTab(targetTab) {
        ui.tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(targetTab).classList.add('active');
        
        if (targetTab === 'game') {
            showLevelMap(); // Langsung munculkan peta saat klik Game
        }
    }
    function startLevel(levelNumber) {
        const levelData = levels[levelNumber - 1];
        
        // 1. Validasi Data
        if (!levelData || Object.keys(levelData).length === 0) {
            alert(`Level ${levelNumber} belum tersedia.`);
            return;
        }

        currentLevel = levelNumber;

        // 2. Transisi Tampilan (Peta -> Game Board)
        const selectionView = document.getElementById('level-selection-view');
        const playView = document.getElementById('game-play-view');

        if (selectionView) selectionView.classList.add('hidden');
        if (playView) playView.classList.remove('hidden');

        // 3. Reset UI & Container Papan
        ui.levelTitle.innerHTML = `Level ${levelNumber}`;
        ui.levelInstruction.textContent = levelData.instruction; 
        ui.gameBoardContainer.innerHTML = ''; // Membersihkan papan sebelumnya
        
        // 4. Reset Tombol Cek Jawaban (Menghapus listener lama agar tidak double)
        const newCheckBtn = ui.checkAnswerBtn.cloneNode(true);
        ui.checkAnswerBtn.parentNode.replaceChild(newCheckBtn, ui.checkAnswerBtn);
        ui.checkAnswerBtn = document.getElementById('check-answer-btn');
        ui.checkAnswerBtn.classList.remove('hidden');
        
        if (ui.openLevelMapBtn) ui.openLevelMapBtn.classList.remove('hidden');

        // 5. Render Papan Sesuai Tipe
        switch (levelData.type) {
            case 'sudoku':
                createSudokuBoard(levelData);
                ui.checkAnswerBtn.onclick = () => checkSudokuSolution(levelData);
                break;
            case 'equation':
                createEquationBoard(levelData);
                ui.checkAnswerBtn.onclick = () => checkEquationSolution(levelData);
                break;
            case 'sum_logic':
                createSumLogicBoard(levelData);
                ui.checkAnswerBtn.onclick = () => checkSudokuSolution(levelData);
                break;
            case 'algebra':
                createAlgebraBoard(levelData);
                ui.checkAnswerBtn.onclick = () => checkAlgebraSolution(levelData);
                break;
            case 'crossword':
                createCrosswordBoard(levelData);
                ui.checkAnswerBtn.onclick = () => checkCrosswordSolution(levelData);
                break;
            case 'fraction':
                createFractionBoard(levelData);
                ui.checkAnswerBtn.onclick = () => checkFractionSolution(levelData);
                break; // PERBAIKAN: Tambahkan break agar tidak lanjut ke card_game
            case 'card_game':
                createCardBoard(levelData);
                ui.checkAnswerBtn.onclick = () => checkCardSolution(levelData);
                break;
            case 'linear_table':
                createLinearTableBoard(levelData);
                ui.checkAnswerBtn.onclick = () => checkLinearTableSolution(levelData);
                break;
            case 'rolling_wheels':
                createRollingWheelsBoard(levelData);
                ui.checkAnswerBtn.onclick = () => checkRollingWheelsSolution(levelData);
                break;
            case 'algebra_sudoku':
                createAlgebraSudokuBoard(levelData);
                ui.checkAnswerBtn.onclick = () => checkAlgebraSudokuSolution(levelData);
                break;
            case 'triangle_algebra':
                createTriangleAlgebraBoard(levelData);
                ui.checkAnswerBtn.onclick = () => checkTriangleAlgebraSolution(levelData);
                break;
            case 'dual_spldv_sudoku':
                createDualSPLDVBoard(levelData);
                ui.checkAnswerBtn.onclick = () => checkDualSPLDVSolution(levelData);
                break;
            case 'ladder_algebra':
                createLadderAlgebraBoard(levelData);
                ui.checkAnswerBtn.onclick = () => checkLadderAlgebraSolution(levelData);
                break;
            case 'variable_sudoku_3x3':
                createVariableSudoku3x3Board(levelData);
                ui.checkAnswerBtn.onclick = () => checkVariableSudoku3x3Solution(levelData);
                break;
            case 'ludo_algebra_final':
                createLudoAlgebraBoard(levelData);
                ui.checkAnswerBtn.onclick = () => checkLudoAlgebraSolution(levelData);
                break;
            default:
                console.error("Tipe game tidak dikenal:", levelData.type);
        }
    }
    
    // ========== FUNGSI-FUNGSI GAME ==========

    function createSudokuBoard(levelData) {
        const grid = document.createElement('div');
        grid.classList.add('sudoku-grid', `grid-${levelData.customGrid || levelData.size + 'x' + levelData.size}`);
        levelData.board.forEach((row, i) => {
            row.forEach((value, j) => {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                if (value !== 0) {
                    cell.innerText = value;
                    cell.classList.add('given');
                } else {
                    const input = document.createElement('input');
                    input.type = 'text'; input.maxLength = '1';
                    input.dataset.row = i; input.dataset.col = j;
                    cell.appendChild(input);
                }
                grid.appendChild(cell);
            });
        });
        ui.gameBoardContainer.appendChild(grid);
    }
    function checkSudokuSolution(levelData) {
        const inputs = ui.gameBoardContainer.querySelectorAll('input');
        let isCorrect = true;

        inputs.forEach(input => {
            const row = parseInt(input.dataset.row);
            const col = parseInt(input.dataset.col);
            const userValue = input.value.toUpperCase().trim();
            const solutionValue = String(levelData.solution[row][col]);

            if (userValue !== solutionValue) {
                isCorrect = false;
                input.classList.add('error'); // Tandai merah jika salah
            } else {
                input.classList.remove('error'); // Hapus merah jika sudah benar
            }
        });

        // Pesan "Coba lagi" akan muncul setelah kotak berubah merah
        showResult(isCorrect);
    }
    function createEquationBoard(levelData) {
        const container = document.createElement('div');
        // ... (fungsi ini tidak berubah)
        container.className = 'equation-container';
        levelData.puzzles.forEach((puzzle) => {
            const row = document.createElement('div');
            row.className = 'equation-row';
            puzzle.q.forEach(part => {
                if (part === '?') {
                    const input = document.createElement('input');
                    input.type = 'text'; input.maxLength = '2';
                    input.className = 'equation-input';
                    row.appendChild(input);
                } else {
                    const span = document.createElement('span');
                    span.innerText = part;
                    row.appendChild(span);
                }
            });
            container.appendChild(row);
        });
        ui.gameBoardContainer.appendChild(container);
    }
    function checkEquationSolution(levelData) {
        const puzzleRows = ui.gameBoardContainer.querySelectorAll('.equation-row');
        let allCorrect = true;

        puzzleRows.forEach((row, index) => {
            const puzzle = levelData.puzzles[index];
            const inputs = [...row.querySelectorAll('input')];
            
            // Bersihkan warna merah sebelumnya
            inputs.forEach(input => input.classList.remove('error'));

            // Cek jika ada kotak yang masih kosong
            if (inputs.some(input => input.value.trim() === "")) {
                allCorrect = false;
                inputs.forEach(input => { if(input.value.trim() === "") input.classList.add('error'); });
                return;
            }

            const values = inputs.map(input => parseInt(input.value.trim()));
            let rowCorrect = true;

            // LOGIKA PENGECEKAN DINAMIS
            if (puzzle.target !== undefined) {
                // Untuk Persamaan (=) -> misal baris 1 & 2
                if (values[0] !== puzzle.target) rowCorrect = false;
            } 
            else if (puzzle.forbidden !== undefined) {
                // Untuk Pertidaksamaan (≠) -> misal baris 3 (Hasil tidak boleh 4)
                if (values[0] === puzzle.forbidden) rowCorrect = false;
            } 
            else if (puzzle.forbiddenTotal !== undefined) {
                // Untuk Pertidaksamaan (≠) -> misal baris 4 (Total input tidak boleh 7)
                const currentTotal = values.reduce((a, b) => a + b, 0);
                if (currentTotal === puzzle.forbiddenTotal) rowCorrect = false;
            }

            // Jika baris ini salah, beri warna merah pada inputnya
            if (!rowCorrect) {
                allCorrect = false;
                inputs.forEach(input => input.classList.add('error'));
            }
        });

        // Panggil modal/alert setelah semua kotak yang salah sudah berwarna merah
        showResult(allCorrect);
    }
    function createSumLogicBoard(levelData) {
        // ... (fungsi ini tidak berubah)
        const grid = document.createElement('div');
        grid.className = 'sum-logic-grid';
        levelData.board.forEach((row, i) => {
            row.forEach((value, j) => {
                const cell = document.createElement('div');
                cell.classList.add('cell', `color-${levelData.colors[i][j]}`);
                if (value !== 0) {
                    cell.innerText = value;
                    cell.classList.add('given');
                } else {
                    const input = document.createElement('input');
                    input.type = 'text'; input.maxLength = '1';
                    input.dataset.row = i; input.dataset.col = j;
                    cell.appendChild(input);
                }
                grid.appendChild(cell);
            });
        });
        ui.gameBoardContainer.appendChild(grid);
    } 
    function createAlgebraBoard(levelData) {
        // ... (fungsi ini tidak berubah)
        const container = document.createElement('div');
        container.className = 'algebra-container';
        container.innerHTML = `
            <div class="algebra-equations">
                <p>${levelData.equations[0].q} &nbsp; &rarr; &nbsp; x = <input type="text" id="x-input" maxlength="2"></p>
                <p>${levelData.equations[1].q} &nbsp; &rarr; &nbsp; y = <input type="text" id="y-input" maxlength="2"></p>
            </div>`;
        ui.gameBoardContainer.appendChild(container);
    }
    
    // LABEL: FUNGSI UNTUK MEMBUAT PAPAN TEKA-TEKI SILANG
    function createCrosswordBoard(levelData) {
        const container = document.createElement('div');
        container.className = 'crossword-grid';
        
        levelData.grid.forEach((row) => {
            row.forEach((cellValue) => {
                const cell = document.createElement('div');
                if (cellValue === null) {
                    cell.className = 'cw-empty'; // Kotak hampa
                } else if (cellValue === '?') {
                    cell.className = 'cw-cell';
                    const input = document.createElement('input');
                    input.type = 'text';
                    cell.appendChild(input);
                } else if (cellValue === 'Start' || cellValue === 'Finish') {
                    cell.className = 'cw-cell cw-label';
                    cell.textContent = cellValue.toUpperCase();
                } else {
                    cell.className = 'cw-cell';
                    cell.textContent = cellValue;
                }
                container.appendChild(cell);
            });
        });
        ui.gameBoardContainer.appendChild(container);
    }
    // LABEL: FUNGSI CEK JAWABAN CROSSWORD
    function checkCrosswordSolution(levelData) {
        const inputs = ui.gameBoardContainer.querySelectorAll('.cw-cell input');
        let isCorrect = true;
        
        inputs.forEach((input, index) => {
            // Ambil nilai user dan bandingkan dengan array solution
            const userVal = input.value.trim();
            const correctVal = levelData.solution[index];

            if (userVal !== correctVal) {
                isCorrect = false;
                input.classList.add('error'); // Tambahkan warna merah jika salah
            } else {
                input.classList.remove('error'); // Hapus warna merah jika benar
            }
        });
        
        // Tampilkan modal "Coba lagi" atau "Perfect"
        showResult(isCorrect);
    }
function createFractionBoard(levelData) {
    const container = document.createElement('div');
    container.className = 'fraction-level-container';

    levelData.puzzles.forEach(p => {
        const puzzleBox = document.createElement('div');
        puzzleBox.className = 'fraction-puzzle-box';
        if(p.example) puzzleBox.classList.add('example-box');

        puzzleBox.innerHTML = `<h3>${p.title}</h3>`;

        // Buat Grid Visual
        const gridEl = document.createElement('div');
        gridEl.className = 'fraction-grid';
        gridEl.style.gridTemplateColumns = `repeat(${p.grid[1]}, 30px)`;
        
        for (let i = 0; i < (p.grid[0] * p.grid[1]); i++) {
            const cell = document.createElement('div');
            cell.className = 'fraction-cell';
            if (p.shaded.includes(i)) cell.classList.add('shaded');
            gridEl.appendChild(cell);
        }
        puzzleBox.appendChild(gridEl);

        // Buat Isian Pecahan
        const inputArea = document.createElement('div');
        inputArea.className = 'fraction-input-area';
        
        if (p.example) {
            inputArea.innerHTML = `<span class="fraction-text">${p.display}</span>`;
        } else {
            let inputsHTML = '';
            for (let j = 0; j < p.solution.length; j += 2) {
                inputsHTML += `
                    <div class="fraction-input-group">
                        <input type="text" class="frac-num" maxlength="2">
                        <div class="frac-line"></div>
                        <input type="text" class="frac-den" maxlength="2">
                    </div>
                    ${j < p.solution.length - 2 ? '<span class="equal-sign">=</span>' : ''}
                `;
            }
            inputArea.innerHTML = inputsHTML;
        }
        
        puzzleBox.appendChild(inputArea);
        container.appendChild(puzzleBox);
    });

    ui.gameBoardContainer.appendChild(container);
}
function checkFractionSolution(levelData) {
    const inputs = ui.gameBoardContainer.querySelectorAll('.fraction-input-area input');
    let allCorrect = true;
    let inputIdx = 0;

    // Filter puzzle yang bukan 'example' (melewati Kotak A)
    levelData.puzzles.filter(p => !p.example).forEach(p => {
        p.solution.forEach(val => {
            const currentInput = inputs[inputIdx];
            const userVal = currentInput.value.trim();
            
            // Bandingkan jawaban user dengan kunci jawaban di data level
            if (userVal !== val) {
                allCorrect = false;
                currentInput.classList.add('error'); // Jadi merah jika salah
            } else {
                currentInput.classList.remove('error'); // Hapus merah jika sudah benar
            }
            inputIdx++;
        });
    });

    // Panggil modal "Coba lagi" bersamaan dengan munculnya warna merah
    showResult(allCorrect);
}
function createCardBoard(levelData) {
    const container = document.createElement('div');
    container.className = 'card-level-grid';

    levelData.cards.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = 'math-card';
        cardEl.innerHTML = `<div class="card-title">${card.title}</div>`;

        if (card.isFormula) {
            // Card 4 (Rumus Pecahan)
            const formulaArea = document.createElement('div');
            formulaArea.className = 'card-formula-area';
            formulaArea.innerHTML = `
                <div class="fraction-formula">
                    <div class="frac-numerator">${card.formula.split('/')[0]}</div>
                    <div class="frac-line-main"></div>
                    <div class="frac-denominator">${card.formula.split('/')[1]}</div>
                </div>
                <div class="formula-result-row">
                    <span>=</span>
                    <input type="text" class="card-input-box-large" data-sol="${card.solution}">
                </div>
            `;
            cardEl.appendChild(formulaArea);
        } else {
            // Card 1, 2, 3 (Hitung Bersusun)
            const mathTable = document.createElement('div');
            mathTable.className = 'card-math-column-style';
            
            // Salin array solusi grid agar bisa diambil satu-satu
            let solutions = [...(card.gridSolutions || [])];

            card.rows.forEach((row, rowIndex) => {
                if (rowIndex === 1) {
                    const opEl = document.createElement('div');
                    opEl.className = 'card-math-operator-row';
                    opEl.textContent = card.op;
                    mathTable.appendChild(opEl);
                }
                if (rowIndex === card.rows.length - 1) {
                    const separator = document.createElement('div');
                    separator.className = 'math-separator-line-wide';
                    mathTable.appendChild(separator);
                }

                const rowEl = document.createElement('div');
                rowEl.className = 'card-math-row';
                
                row.forEach(cellValue => {
                    const cellEl = document.createElement('div');
                    cellEl.className = 'card-math-cell';
                    
                    if (cellValue === '?') {
                        // Jika tanda tanya, buat kotak input langsung di grid
                        const input = document.createElement('input');
                        input.type = 'text';
                        input.className = 'card-grid-input';
                        input.maxLength = 1;
                        input.dataset.sol = solutions.shift();
                        cellEl.appendChild(input);
                    } else {
                        // Jika angka atau variabel (A, B, dst), tampilkan teks biasa
                        cellEl.textContent = cellValue;
                    }
                    rowEl.appendChild(cellEl);
                });
                mathTable.appendChild(rowEl);
            });
            cardEl.appendChild(mathTable);

            // Input di bawah kartu (Untuk Variabel A, B, C, D)
            const footerArea = document.createElement('div');
            footerArea.className = 'card-question-area';
            card.footerInputs.forEach(input => {
                const qRow = document.createElement('div');
                qRow.className = 'card-q-row';
                qRow.innerHTML = `<span>${input.label} = </span>
                                  <input type="text" class="card-input-box" data-sol="${input.sol}">`;
                footerArea.appendChild(qRow);
            });
            cardEl.appendChild(footerArea);
        }
        container.appendChild(cardEl);
    });
    ui.gameBoardContainer.appendChild(container);
}
function checkCardSolution(levelData) {
    // Ambil semua input di dalam container (grid ?, footer A-D, dan formula)
    const inputs = ui.gameBoardContainer.querySelectorAll('input');
    let allCorrect = true;

    inputs.forEach(input => {
        const userVal = input.value.trim();
        const correctVal = input.dataset.sol; // Mengambil kunci jawaban dari dataset

        if (userVal !== correctVal) {
            allCorrect = false;
            input.classList.add('error'); // Beri warna merah jika salah
        } else {
            input.classList.remove('error'); // Hapus merah jika benar
        }
    });

    // Panggil modal "Coba lagi" atau "Perfect"
    showResult(allCorrect);
}
// LABEL: FUNGSI RENDER SUM LOGIC DENGAN SIGMA
function createSumLogicBoard(levelData) {
    const mainWrapper = document.createElement('div');
    mainWrapper.className = 'sum-logic-wrapper';

    // Buat Grid Tabel
    const grid = document.createElement('div');
    grid.className = 'sum-logic-grid';
    levelData.board.forEach((row, i) => {
        row.forEach((value, j) => {
            const cell = document.createElement('div');
            cell.classList.add('cell', `color-${levelData.colors[i][j]}`);
            if (value !== 0) {
                cell.innerText = value;
                cell.classList.add('given');
            } else {
                const input = document.createElement('input');
                input.type = 'text'; input.maxLength = '1';
                input.dataset.row = i; input.dataset.col = j;
                cell.appendChild(input);
            }
            grid.appendChild(cell);
        });
    });
    mainWrapper.appendChild(grid);

    // TAMBAHKAN INDIKATOR SIGMA DI BAWAHNYA
    const sigmaInfo = document.createElement('div');
    sigmaInfo.className = 'sigma-container';
    sigmaInfo.innerHTML = `
        <div class="sigma-item color-p"><span>&Sigma;</span> Pink = ${levelData.sums.p}</div>
        <div class="sigma-item color-b"><span>&Sigma;</span> Biru = ${levelData.sums.b}</div>
        <div class="sigma-item color-y"><span>&Sigma;</span> Kuning = ${levelData.sums.y}</div>
    `;
    mainWrapper.appendChild(sigmaInfo);

    ui.gameBoardContainer.appendChild(mainWrapper);
}
function createLinearTableBoard(levelData) {
    const container = document.createElement('div');
    container.className = 'linear-table-container';

    container.innerHTML = `
        <div class="linear-equation-display">${levelData.equation}</div>
        <table class="math-table">
            <tr class="row-x">
                <th>Jika x</th>
                ${levelData.xValues.map(val => `<td>${val}</td>`).join('')}
            </tr>
            <tr class="row-arrow">
                <td></td>
                ${levelData.xValues.map(() => `<td><i class="fas fa-arrow-down"></i></td>`).join('')}
            </tr>
            <tr class="row-y">
                <th>Maka y</th>
                ${levelData.xValues.map((_, i) => `<td><input type="text" class="table-input" data-index="${i}" maxlength="3"></td>`).join('')}
            </tr>
        </table>
    `;
    ui.gameBoardContainer.appendChild(container);
}
function checkLinearTableSolution(levelData) {
    const inputs = ui.gameBoardContainer.querySelectorAll('.table-input');
    let allCorrect = true;

    inputs.forEach(input => {
        const index = input.dataset.index;
        if (input.value.trim() !== levelData.solution[index]) {
            allCorrect = false;
            input.classList.add('error'); // Merah jika salah
        } else {
            input.classList.remove('error');
        }
    });
    showResult(allCorrect);
}
function createRollingWheelsBoard(levelData) {
    const container = document.createElement('div');
    container.className = 'rolling-wheels-container';

    // Area Persamaan (Kiri)
    const eqArea = document.createElement('div');
    eqArea.className = 'wheels-eq-box';
    eqArea.innerHTML = `
        <div class="eq-inner">
            <h3>Cari Variabel:</h3>
            ${levelData.equations.map(eq => `
                <div class="eq-row">
                    <span class="eq-q">${eq.q}</span>
                    <span class="eq-arrow">&rarr;</span>
                    <span class="eq-var">${eq.var} = </span>
                    <input type="text" class="var-input" data-sol="${eq.sol}">
                </div>
            `).join('')}
        </div>
    `;
    container.appendChild(eqArea);

    // Area Roda (Kanan)
    const wheelWrapper = document.createElement('div');
    wheelWrapper.className = 'wheel-visual-wrapper';
    
    const wheel = document.createElement('div');
    wheel.className = 'rolling-wheel';
    
    // Membuat 8 segmen roda
    levelData.wheelData.forEach((item, index) => {
        const slice = document.createElement('div');
        slice.className = 'wheel-slice';
        // Putar segmen sesuai urutan (360/8 = 45 derajat)
        slice.style.transform = `rotate(${index * 45}deg)`;
        
        slice.innerHTML = `
            <div class="slice-content" style="transform: rotate(-${index * 45}deg)">
                <div class="expr-label">${item.expr}</div>
                <input type="text" class="wheel-input" data-sol="${item.sol}">
            </div>
        `;
        wheel.appendChild(slice);
    });
    
    wheelWrapper.appendChild(wheel);
    container.appendChild(wheelWrapper);
    ui.gameBoardContainer.appendChild(container);
}
function checkRollingWheelsSolution(levelData) {
    // Mengambil semua input baik dari kotak variabel (kiri) maupun roda (kanan)
    const inputs = ui.gameBoardContainer.querySelectorAll('input');
    let isCorrect = true;

    inputs.forEach(input => {
        const userVal = input.value.trim();
        const correctVal = input.dataset.sol; // Mengambil kunci jawaban dari dataset

        if (userVal !== correctVal) {
            isCorrect = false;
            input.classList.add('error'); // Beri warna merah jika salah
        } else {
            input.classList.remove('error'); // Hapus merah jika benar
        }
    });

    // Panggil modal "Coba lagi" tepat saat kotak yang salah sudah berwarna merah
    showResult(isCorrect);
}
function createAlgebraSudokuBoard(levelData) {
    const container = document.createElement('div');
    container.className = 'algebra-sudoku-wrapper';

    const eqBox = document.createElement('div');
    eqBox.className = 'equations-header-box';
    eqBox.innerHTML = `
        <div class="eq-display">
            <p>2X + Y = 7</p>
            <p>X + Y = 5</p>
        </div>
        <div class="var-input-group">
            <span>X = <input type="text" id="ans-x" class="small-input" maxlength="1"></span>
            <span>Y = <input type="text" id="ans-y" class="small-input" maxlength="1"></span>
        </div>
    `;
    container.appendChild(eqBox);

    const grid = document.createElement('div');
    grid.className = 'sudoku-grid grid-4x4';
    levelData.board.forEach((row, i) => {
        row.forEach((cellValue, j) => {
            const cell = document.createElement('div');
            cell.className = 'cell';
            if (cellValue !== 0) {
                cell.innerText = cellValue;
                cell.classList.add('given');
            } else {
                const input = document.createElement('input');
                input.type = 'text'; input.maxLength = '1';
                input.dataset.row = i; input.dataset.col = j;
                cell.appendChild(input);
            }
            grid.appendChild(cell);
        });
    });
    container.appendChild(grid);
    ui.gameBoardContainer.appendChild(container);

    // FIX: Gunakan sintaks MathJax v2 agar tidak crash
    if (window.MathJax && window.MathJax.Hub) {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, container]);
    }
}
function checkAlgebraSudokuSolution(levelData) {
    const xInput = document.getElementById('ans-x');
    const yInput = document.getElementById('ans-y');
    const gridInputs = ui.gameBoardContainer.querySelectorAll('.sudoku-grid input');
    let isCorrect = true;

    // Cek Variabel Aljabar
    if (xInput.value.trim() !== levelData.vars['X'].toString()) {
        xInput.classList.add('error'); isCorrect = false;
    } else { xInput.classList.remove('error'); }

    if (yInput.value.trim() !== levelData.vars['Y'].toString()) {
        yInput.classList.add('error'); isCorrect = false;
    } else { yInput.classList.remove('error'); }

    // Cek Grid
    gridInputs.forEach(input => {
        const r = parseInt(input.dataset.row);
        const c = parseInt(input.dataset.col);
        if (input.value.trim() !== levelData.solutionMatrix[r][c].toString()) {
            isCorrect = false;
            input.classList.add('error');
        } else { input.classList.remove('error'); }
    });
    showResult(isCorrect);
}
function createTriangleAlgebraBoard(levelData) {
    const container = document.createElement('div');
    container.className = 'triangle-level-wrapper';

    // 1. Header Persamaan (Gaya Kuning Muda Level 15)
    const eqBox = document.createElement('div');
    eqBox.className = 'equations-header-box';
    eqBox.innerHTML = `
        <div class="eq-display">
            <p>2x + y = 10</p>
            <p>x + y = 6</p>
        </div>
        <div class="var-input-group">
            <span>x = <input type="text" id="triangle-x" class="small-input" maxlength="2"></span>
            <span>y = <input type="text" id="triangle-y" class="small-input" maxlength="2"></span>
        </div>
    `;
    container.appendChild(eqBox);

    // 2. Visual Segitiga
    const triangleContainer = document.createElement('div');
    triangleContainer.className = 'triangle-grid-container';

    levelData.triangleRows.forEach((row, rowIndex) => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'triangle-row';
        
        row.forEach((cell) => {
            const box = document.createElement('div');
            box.className = 'triangle-box';
            
            // Jika cell adalah angka tetap (1, 3, 7, dll)
            if (!isNaN(cell)) {
                box.innerText = cell;
                box.classList.add('fixed');
            } else {
                // Jika cell adalah variabel/rumus (x, 2x, x^2, dll)
                box.innerHTML = `<span class="expr-hint">${cell}</span>
                                 <input type="text" class="triangle-input" data-expr="${cell}" maxlength="2">`;
            }
            rowDiv.appendChild(box);
        });
        triangleContainer.appendChild(rowDiv);
    });

    container.appendChild(triangleContainer);
    ui.gameBoardContainer.appendChild(container);
}
function checkTriangleAlgebraSolution(levelData) {
    const xVar = document.getElementById('triangle-x');
    const yVar = document.getElementById('triangle-y');
    const triangleInputs = ui.gameBoardContainer.querySelectorAll('.triangle-input');
    let isCorrect = true;

    if (xVar.value.trim() !== "4") { xVar.classList.add('error'); isCorrect = false; } else { xVar.classList.remove('error'); }
    if (yVar.value.trim() !== "2") { yVar.classList.add('error'); isCorrect = false; } else { yVar.classList.remove('error'); }

    triangleInputs.forEach(input => {
        if (input.value.trim() !== levelData.calcSolutions[input.dataset.expr]) {
            isCorrect = false;
            input.classList.add('error');
        } else { input.classList.remove('error'); }
    });
    showResult(isCorrect);
}
function createDualSPLDVBoard(levelData) {
    const container = document.createElement('div');
    container.className = 'dual-spldv-wrapper';

    // 1. Tampilkan Dua Kotak Persamaan
    const headerBox = document.createElement('div');
    headerBox.className = 'dual-eq-container';
    
    levelData.systems.forEach((sys, index) => {
        const box = document.createElement('div');
        box.className = 'equations-header-box mini'; // Gunakan gaya kuning dari Level 15
        box.innerHTML = `
            <div class="eq-display small">
                <p>${sys.eq[0]}</p>
                <p>${sys.eq[1]}</p>
            </div>
            <div class="var-input-group">
                <span>x${index + 1} = <input type="text" id="ans-x${index + 1}" class="small-input" maxlength="2"></span>
            </div>
        `;
        headerBox.appendChild(box);
    });
    container.appendChild(headerBox);

    // 2. Buat Papan Sudoku 2x2
    const grid = document.createElement('div');
    grid.className = 'sudoku-grid grid-2x2';
    
    levelData.board.forEach((row, i) => {
        row.forEach((cellValue, j) => {
            const cell = document.createElement('div');
            cell.className = 'cell large-text';
            
            if (cellValue !== 0) {
                cell.innerText = cellValue;
                cell.classList.add('given');
            } else {
                const input = document.createElement('input');
                input.type = 'text'; input.maxLength = '2';
                input.dataset.row = i; input.dataset.col = j;
                cell.appendChild(input);
            }
            grid.appendChild(cell);
        });
    });

    container.appendChild(grid);
    ui.gameBoardContainer.appendChild(container);

    // Render MathJax jika diperlukan
    if (window.MathJax && window.MathJax.Hub) {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, container]);
    }
}
function checkDualSPLDVSolution(levelData) {
    const x1Input = document.getElementById('ans-x1');
    const x2Input = document.getElementById('ans-x2');
    const gridInputs = ui.gameBoardContainer.querySelectorAll('.sudoku-grid input');
    let isCorrect = true;

    if (x1Input.value.trim() !== "-1") { x1Input.classList.add('error'); isCorrect = false; }
    else { x1Input.classList.remove('error'); }

    if (x2Input.value.trim() !== "-2") { x2Input.classList.add('error'); isCorrect = false; }
    else { x2Input.classList.remove('error'); }

    gridInputs.forEach(input => {
        const r = input.dataset.row;
        const c = input.dataset.col;
        if (input.value.trim() !== levelData.solutionMatrix[r][c]) {
            isCorrect = false;
            input.classList.add('error');
        } else { input.classList.remove('error'); }
    });
    showResult(isCorrect);
}
function createLadderAlgebraBoard(levelData) {
    const container = document.createElement('div');
    container.className = 'ladder-level-wrapper';

    // 1. Header Persamaan (Gaya Kuning Level 15)
    const eqBox = document.createElement('div');
    eqBox.className = 'equations-header-box';
    eqBox.innerHTML = `
        <div class="eq-display">
            <p>a + b = 2</p>
            <p>2a - 3b = 19</p>
        </div>
        <div class="var-input-group">
            <span>a = <input type="text" id="ans-a" class="small-input" maxlength="2"></span>
            <span>b = <input type="text" id="ans-b" class="small-input" maxlength="2"></span>
        </div>
    `;
    container.appendChild(eqBox);

    // 2. Visual Tangga Angka
    const grid = document.createElement('div');
    grid.className = 'ladder-grid';
    
    levelData.board.forEach((row, i) => {
        row.forEach((cellValue, j) => {
            const cell = document.createElement('div');
            if (cellValue === null) {
                cell.className = 'ladder-empty';
            } else if (cellValue === 0) {
                cell.className = 'ladder-cell';
                const input = document.createElement('input');
                input.type = 'text'; input.maxLength = '2';
                input.dataset.row = i; input.dataset.col = j;
                cell.appendChild(input);
            } else {
                cell.className = 'ladder-cell given';
                cell.innerText = cellValue;
            }
            grid.appendChild(cell);
        });
    });

    container.appendChild(grid);
    ui.gameBoardContainer.appendChild(container);
}
// --- LOGIKA FEEDBACK MERAH LEVEL 18 ---
function checkLadderAlgebraSolution(levelData) {
    const aInput = document.getElementById('ans-a');
    const bInput = document.getElementById('ans-b');
    const gridInputs = ui.gameBoardContainer.querySelectorAll('.ladder-grid input');
    
    let isCorrect = true;

    // 1. Cek Variabel Aljabar (Kunci: a=5, b=-3)
    if (aInput.value.trim() !== "5") {
        aInput.classList.add('error'); // Jadi merah jika bukan 5
        isCorrect = false;
    } else {
        aInput.classList.remove('error');
    }

    if (bInput.value.trim() !== "-3") {
        bInput.classList.add('error'); // Jadi merah jika bukan -3
        isCorrect = false;
    } else {
        bInput.classList.remove('error');
    }

    // 2. Cek Seluruh Kotak Tangga (1-6 dan -1 sampai -6)
    gridInputs.forEach(input => {
        const r = input.dataset.row;
        const c = input.dataset.col;
        const userVal = input.value.trim();
        const correctVal = levelData.solutionMatrix[r][c];

        if (userVal !== correctVal) {
            isCorrect = false;
            input.classList.add('error'); // Tandai merah kotak yang salah
        } else {
            input.classList.remove('error');
        }
    });

    // 3. Tampilkan pesan modal (muncul bersamaan dengan warna merah)
    showResult(isCorrect);
}
function createVariableSudoku3x3Board(levelData) {
    const container = document.createElement('div');
    container.className = 'algebra-sudoku-wrapper';

    // 1. Header Persamaan SPLDV
    const eqBox = document.createElement('div');
    eqBox.className = 'equations-header-box';
    eqBox.innerHTML = `
        <div class="eq-display">
            <p>b + c = 3</p>
            <p>3b - c = 1</p>
            <p style="font-size: 0.8em; color: #666;">a = c - b</p>
        </div>
        <div class="var-input-group">
            <span>a=<input type="text" id="ans-a" class="small-input" maxlength="1"></span>
            <span>b=<input type="text" id="ans-b" class="small-input" maxlength="1"></span>
            <span>c=<input type="text" id="ans-c" class="small-input" maxlength="1"></span>
        </div>
    `;
    container.appendChild(eqBox);

    // 2. Grid Sudoku 3x3
    const grid = document.createElement('div');
    grid.className = 'sudoku-grid grid-3x3';
    
    levelData.board.forEach((row, i) => {
        row.forEach((cellValue, j) => {
            const cell = document.createElement('div');
            cell.className = 'cell';
            
            if (cellValue !== 0) {
                // Tampilkan variabel a, b, c atau angka 3 sebagai teks tetap
                cell.innerText = cellValue;
                cell.classList.add('given-var');
            } else {
                const input = document.createElement('input');
                input.type = 'text'; input.maxLength = '1';
                input.dataset.row = i; input.dataset.col = j;
                cell.appendChild(input);
            }
            grid.appendChild(cell);
        });
    });

    container.appendChild(grid);
    ui.gameBoardContainer.appendChild(container);
}
// --- LOGIKA FEEDBACK MERAH LEVEL 19 ---
function checkVariableSudoku3x3Solution(levelData) {
    const aEl = document.getElementById('ans-a');
    const bEl = document.getElementById('ans-b');
    const cEl = document.getElementById('ans-c');
    const gridInputs = ui.gameBoardContainer.querySelectorAll('.sudoku-grid input');
    
    let isCorrect = true;

    // 1. Cek Variabel Aljabar (a=1, b=1, c=2)
    if (aEl.value.trim() !== "1") {
        aEl.classList.add('error'); isCorrect = false;
    } else { aEl.classList.remove('error'); }

    if (bEl.value.trim() !== "1") {
        bEl.classList.add('error'); isCorrect = false;
    } else { bEl.classList.remove('error'); }

    // PERBAIKAN: Di bawah ini sebelumnya tertulis cIn, diubah menjadi cEl
    if (cEl.value.trim() !== "2") {
        cEl.classList.add('error'); isCorrect = false;
    } else { cEl.classList.remove('error'); }

    // 2. Cek Seluruh Kotak Sudoku 3x3
    gridInputs.forEach(input => {
        const r = input.dataset.row;
        const c = input.dataset.col;
        const userVal = input.value.trim();
        const correctVal = levelData.solutionMatrix[r][c];

        if (userVal !== correctVal) {
            isCorrect = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    showResult(isCorrect);
}
// --- LOGIKA FEEDBACK MERAH LEVEL 20 (FINAL) ---
function createLudoAlgebraBoard(levelData) {
    const container = document.createElement('div');
    container.className = 'ludo-level-wrapper';

    // 1. Header SPLDV Tetap Sama
    const eqBox = document.createElement('div');
    eqBox.className = 'equations-header-box';
    eqBox.innerHTML = `
        <div class="eq-display"><p>3x + 2y = 12</p><p>x - y = -1</p></div>
        <div class="var-input-group">
            <span>x = <input type="text" id="ans-x" class="small-input" maxlength="1"></span>
            <span>y = <input type="text" id="ans-y" class="small-input" maxlength="1"></span>
        </div>
    `;
    container.appendChild(eqBox);

    // 2. Grid 9 Kotak (Sekarang bisa diklik)
    const exprGrid = document.createElement('div');
    exprGrid.className = 'ludo-expr-grid';
    levelData.expressions.forEach(item => {
        const box = document.createElement('div');
        box.className = 'ludo-expr-box';
        box.id = `box-${item.id}`;
        box.dataset.selectedColor = ""; // Tempat menyimpan warna yang dipilih
        box.innerHTML = `<span class="box-num">${item.id}.</span><p>${item.expr}</p>`;
        
        // Fungsi saat kotak diklik
        box.onclick = () => showColorPicker(box);
        
        exprGrid.appendChild(box);
    });
    container.appendChild(exprGrid);

    // 3. Legend Warna (Hanya sebagai petunjuk, tanpa input)
    const legend = document.createElement('div');
    legend.className = 'ludo-nests-container';
    legend.innerHTML = `
        <div class="nest-box nest-red">Merah (Hasil = 12)</div>
        <div class="nest-box nest-blue">Biru (Hasil = 5)</div>
        <div class="nest-box nest-yellow">Kuning (Hasil = 8)</div>
        <div class="nest-box nest-green">Hijau (Hasil = 15)</div>
    `;
    container.appendChild(legend);

    ui.gameBoardContainer.appendChild(container);
}
function showColorPicker(box) {
    // Hapus picker lain jika ada yang masih terbuka
    const oldPicker = document.querySelector('.color-picker-overlay');
    if (oldPicker) oldPicker.remove();

    const picker = document.createElement('div');
    picker.className = 'color-picker-overlay';
    
    const colors = ['red', 'blue', 'yellow', 'green'];
    colors.forEach(color => {
        const btn = document.createElement('button');
        btn.className = `color-btn btn-${color}`;
        btn.onclick = (e) => {
            e.stopPropagation(); // Agar tidak memicu click pada box lagi
            // Reset class warna lama
            box.className = 'ludo-expr-box'; 
            // Tambah warna baru
            box.classList.add(`bg-${color}`);
            box.dataset.selectedColor = color;
            picker.remove();
        };
        picker.appendChild(btn);
    });

    box.appendChild(picker);
}
function checkLudoAlgebraSolution(levelData) {
    const xEl = document.getElementById('ans-x');
    const yEl = document.getElementById('ans-y');
    let isCorrect = true;

    // 1. Cek SPLDV (x=2, y=3)
    if (xEl.value.trim() !== "2") { xEl.classList.add('error'); isCorrect = false; }
    if (yEl.value.trim() !== "3") { yEl.classList.add('error'); isCorrect = false; }

    // 2. Cek Warna Tiap Kotak
    levelData.expressions.forEach(item => {
        const box = document.getElementById(`box-${item.id}`);
        const userColor = box.dataset.selectedColor;
        
        // Cari warna yang seharusnya berdasarkan hasil perhitungan item.res
        let targetColor = "";
        if (item.res === 12) targetColor = "red";
        else if (item.res === 5) targetColor = "blue";
        else if (item.res === 8) targetColor = "yellow";
        else if (item.res === 15) targetColor = "green";

        if (userColor !== targetColor) {
            isCorrect = false;
            box.classList.add('error'); // Beri efek getar/merah jika salah
        } else {
            box.classList.remove('error');
        }
    });

    showResult(isCorrect);
}
    function checkAlgebraSolution(levelData) {
        // ... (fungsi ini tidak berubah)
        const xVal = document.getElementById('x-input').value;
        const yVal = document.getElementById('y-input').value;
        const isCorrect = (parseInt(xVal) === levelData.equations[0].a && parseInt(yVal) === levelData.equations[1].a);
        showResult(isCorrect);
    }

    // Fungsi untuk memunculkan modal kemenangan
    function showResult(isCorrect) {
        if (isCorrect) {
            if (sfxOn) ui.sfxCorrect.play();
            
            // 1. Pilih kata pujian secara acak
            const praises = ["PERFECT!", "COOL!", "GOOD!"];
            const randomPraise = praises[Math.floor(Math.random() * praises.length)];
            document.getElementById('praise-text').innerText = randomPraise;

            // 2. Update progress level
            if (currentLevel === unlockedLevel && currentLevel < 20) {
                unlockedLevel++;
                localStorage.setItem('unlockedXudokuLevel', unlockedLevel);
            }

            // 3. Tampilkan Modal
            const completeModal = document.getElementById('complete-modal');
            completeModal.style.display = 'block';

            // 4. Atur tombol Next Level
            const modalNextBtn = document.getElementById('modal-next-btn');
            if (currentLevel < 20) {
                modalNextBtn.innerHTML = 'Next Level <i class="fas fa-arrow-right"></i>';
                modalNextBtn.onclick = () => {
                    completeModal.style.display = 'none';
                    startLevel(currentLevel + 1);
                };
            } else {
                modalNextBtn.innerHTML = '🏆 Tamat! Ke Peta';
                modalNextBtn.onclick = () => {
                    completeModal.style.display = 'none';
                    showLevelMap();
                };
            }
        } else {
            if (sfxOn) ui.sfxWrong.play();
            alert('🤔 Hmm, ada yang salah. Coba lagi!');
        }
    }

    // Fungsi untuk mengulangi level yang sama
    window.retryLevel = function() {
        document.getElementById('complete-modal').style.display = 'none';
        startLevel(currentLevel); // Muat ulang level yang sedang aktif
    };
    
    function resetGameView() {
        ui.gameBoardContainer.innerHTML = '';
        ui.checkAnswerBtn.classList.add('hidden');
        ui.openLevelMapBtn.classList.add('hidden');
        ui.levelTitle.textContent = '';
        ui.levelInstruction.textContent = '';
    }
    

    // ========== EVENT LISTENERS (REVISI NAVIGASI) ==========

    // 1. Navigasi Tab Utama (Home, Materi, Game, Tentang)
    ui.tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.dataset.tab;
            switchTab(target);
        });
    });

    // 2. Tombol "Mulai Bermain" (Ada di Hero Section & Content Box Home)
    const heroStartBtn = document.querySelector('.cta-button.large');
    if (heroStartBtn) {
        heroStartBtn.onclick = () => switchTab('game');
    }
    
    if (ui.playGameBtn) {
        ui.playGameBtn.addEventListener('click', () => switchTab('game'));
    }

    // 3. Navigasi di Dalam Tab Game (Peta <-> Board)
    // Tombol "Kembali ke Peta" di footer permainan
    const backBtn = document.getElementById('back-to-map-btn');
    if (backBtn) {
        backBtn.addEventListener('click', showLevelMap);
    }

    // Tombol "Pilih Level" (Jika Ade masih menggunakan id open-level-map-btn di UI)
    if (ui.openLevelMapBtn) {
        ui.openLevelMapBtn.addEventListener('click', showLevelMap);
    }

    // 4. Pengaturan Modal (Hanya untuk Bantuan/Help)
    if (ui.helpButton) {
        ui.helpButton.addEventListener('click', () => ui.helpModal.style.display = 'block');
    }

    ui.closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (ui.levelSelectModal) ui.levelSelectModal.style.display = 'none';
            if (ui.helpModal) ui.helpModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target == ui.levelSelectModal || e.target == ui.helpModal) {
            e.target.style.display = 'none';
        }
    });

    // 5. Audio Listeners (Musik & SFX)
    if (ui.musicToggle) {
        ui.musicToggle.addEventListener('click', toggleMusic);
    }
    if (ui.sfxToggle) {
        ui.sfxToggle.addEventListener('click', toggleSfx);
    }

    // 6. Inisialisasi Tampilan Saat Pertama Kali Load
    switchTab('home');

    // Menghapus warna merah saat pemain mulai mengetik ulang
    document.addEventListener('input', (e) => {
        if (e.target.tagName === 'INPUT') {
            e.target.classList.remove('error');
        }
    });

}); // Akhir dari DOMContentLoaded