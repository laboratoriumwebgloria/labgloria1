let data = {};
let cart = {};

const dataB = [
  [
    "Alat Laboratorium Kimia",
    "kim",
    "M184.6 475.5C181.5 482.8 179.2 490.4 177.8 498.1C163.3 506.9 146.3 512 128 512C75 512 32 469 32 416L32 128C14.3 128 0 113.7 0 96C0 78.3 14.3 64 32 64L224 64C241.7 64 256 78.3 256 96C256 113.7 241.7 128 224 128L224 383.6L184.6 475.5zM96 128L96 256L160 256L160 128L96 128zM352 64L512 64C529.7 64 544 78.3 544 96C544 113.7 529.7 128 512 128L512 281.4L603.3 494.4C605.6 499.8 607.1 505.5 607.7 511.4L608 512L607.7 512C607.9 513.8 608 515.6 608 517.4C608 549.7 581.8 576 549.4 576L282.5 576C250.2 576 223.9 549.8 223.9 517.4C223.9 515.6 224 513.8 224.2 512L223.9 512L224.2 511.4C224.8 505.6 226.3 499.8 228.6 494.4L320 281.4L320 128C302.3 128 288 113.7 288 96C288 78.3 302.3 64 320 64L352 64zM453.2 306.6C449.8 298.6 448 290.1 448 281.4L448 128L384 128L384 281.4C384 290.1 382.2 298.6 378.8 306.6L345.6 384L486.3 384L453.1 306.6z",
    [['Adaptor', 'L1A1001', 261], ['Alat Destilasi', 'L1A2001', 262], ['Baskom Kotak (50cmx20cm)', 'L1B18001', 263], ['Batang Pengaduk Kaca Panjang (d=1,5 cm)', 'L1B2001', 264], ['Batang Pengaduk Kaca Pendek (d=1 cm)', 'L1B3001', 265], ['Beaker Glass 100 ml', 'L1B4001', 266], ['Beaker Glass 1000 ml', 'L1B5001', 267], ['Beaker Glass 2000 ml', 'L1B6001', 268], ['Beaker Glass 250 ml', 'L1B7001', 269], ['Beaker Glass 50 ml', 'L1B8001', 270], ['Beaker Glass 500 ml', 'L1B9001', 271], ['Beaker Glass plastik 100 ml', 'L1B10001', 272], ['Beaker Glass Plastik 1000 Ml', 'L1B33001', 273], ['Beaker Glass plastik 50 ml', 'L1B11001', 274], ['Bosshead', 'L1B2001', 275], ['Botol Reagen Bening 1000 ml', 'L1B12001', 276], ['Botol Reagen Bening 125 Ml', 'L1B1001', 277], ['Botol Reagen Bening 500 Ml', 'L1B32001', 278], ['Botol Reagen Coklat', 'L1B13001', 279], ['Botol Semprot Besar', 'L1B14001', 280], ['Botol Semprot Sedang', 'L1B36001', 281], ['Botol Semprot Kecil', 'L1B15001', 282], ['Burette 100 ml', 'L1B18001', 283], ['Burette 25 ml', 'L1B16001', 284], ['Burette 50 ml', 'L1B17001', 285], ['Cawan Porselin', 'L1C1001', 286], ['Centrifuge Elektrik', 'L1C3001', 287], ['Centrifuge manual', 'L1C2001', 288], ['Corong Kaca 40 mm', 'L1C4001', 289], ['Corong Kaca 50 mm', 'L1C5001', 290], ['Corong kaca 60 mm', 'L1C6001', 291], ['Corong Kaca 75 mm', 'L1C7001', 292], ['Corong Pisah 125 ml', 'L1C9001', 293], ['Corong Pisah 250 ml', 'L1C8001', 294], ['Crush / Tang', 'L1C10001', 295], ['Elektroda / Plat', 'L1E1001', 296], ['Erlenmeyer 100 ml', 'L1E2001', 297], ['Erlenmeyer 1000 Ml', 'L1E5001', 298], ['Erlenmeyer 250 ml', 'L1E3001', 299], ['Erlenmeyer 500 ml', 'L1E4001', 300], ['Gelas ukur 10 ml', 'L1G1001', 301], ['Gelas ukur 100 ml', 'L1G2001', 302], ['Gelas ukur 1000 ml', 'L1G3001', 303], ['Gelas ukur 25 ml', 'L1G4001', 304], ['Gelas ukur 50 ml', 'L1G5001', 305], ['Gelas ukur 500 ml', 'L1G6001', 306], ['Kaca Arloji Besar', 'L1K1001', 307], ['Kaca Arloji Sedang', 'L1K2001', 308], ['Kaki Tiga', 'L1K3001', 309], ['Kalorimeter', 'L1K4001', 310], ['Karet Penghisap / Pipet Filler', 'L1K5001', 311], ['Kawat Kasa Asbes', 'L1K6001', 312], ['Kawat Nikrom', 'L1K7001', 313], ['Klem & Statif', 'L1K8001', 314], ['Kompor Listrik', 'L1K9001', 315], ['Labu Ukur 100 ml', 'L1F2001', 316], ['Labu Ukur 1000 ml', 'L1F1001', 317], ['Labu Ukur 25 ml', 'L1F3001', 318], ['Labu Ukur 50 ml', 'L1F4001', 319], ['Magnet Batang', 'L1M1001', 320], ['Masker Pemadam Kebakaran', 'L1M2001', 321], ['Molymod', 'L1M3001', 322], ['Mortar  & Alu', 'L1M4001', 323], ['Multimeter Analog', 'L1M5001', 324], ['Neraca digital ACIS (0.1)', 'L1N2001', 325], ['Neraca digital analitik  (0.01)', 'L1N1001', 326], ['Ose Kimia', 'L1O4001', 327], ['Pembakar Spiritus', 'L1P1001', 328], ['Penjepit Tabung Reaksi', 'L1P2001', 329], ['pH Meter', 'L1P3001', 330], ['Pipa-U', 'L1P4001', 331], ['Pipet Gondok 10 ml', 'L1P5001', 332], ['Pipet Gondok 25 ml', 'L1P6001', 333], ['Pipet Gondok 5 ml', 'L1P7001', 334], ['Pipet Gondok 50 ml', 'L1P8001', 335], ['Pipet Tetes Panjang', 'L1P9001', 336], ['Pipet Tetes Pendek', 'L1P10001', 337], ['Pipet Ukur 5 ml', 'L1P19001', 338], ['Pipet Ukur 10 ml', 'L1P18001', 339], ['Plat Cu', 'L1P11001', 340], ['Plat Fe', 'L1P12001', 341], ['Plat Pb', 'L1P13001', 342], ['Plat Tetes 12 Lubang', 'L1P14001', 343], ['Plat Zn', 'L1P15001', 344], ['Rak Tabung Reaksi', 'L1R1001', 345], ['Segitiga Porselin', 'L1S1001', 346], ['Sendok Spatula Stainless', 'L1S2001', 347], ['Sikat Erlenmeyer', 'L1S3001', 348], ['Sikat Tabung Reaksi', 'L1S4001', 349], ['Sudip', 'L1S5001', 350], ['Tabung Centrifuge (ada tutup)', 'L1T1001', 351], ['Tabung Reaksi', 'L1T2001', 352], ['Tabung Reaksi Berlengan', 'L1T3001', 353], ['Tabung Y (Gendut)', 'L1T18001', 354], ['Tabung Y / Pipa Y  (kurus)', 'L1T4001', 355], ['Termometer Air Raksa Kimia', 'L1T5001', 356], ['Termometer Alkohol Kimia', 'L1T6001', 357]],
    "Laboratorium Kimia",
  ],
  [
    "Alat Laboratorium Fisika",
    "fis",
    "M320 462.8C308.2 467.9 296.6 472.5 285.1 476.3C301.8 510.1 316.1 512 320 512C323.9 512 338.1 510.1 354.9 476.3C343.5 472.4 331.8 467.9 320 462.8zM510 320C543 365.2 554.3 410.9 533.6 448C513.4 484.3 471.1 497.3 418.4 491.2C396.4 543.3 362.7 576 320 576C277.3 576 243.6 543.3 221.6 491.2C168.9 497.3 126.6 484.3 106.4 448C85.7 410.9 97 365.2 130 320C97 274.8 85.7 229.1 106.4 192C126.6 155.7 168.9 142.7 221.6 148.8C243.6 96.7 277.2 64 320 64C362.8 64 396.4 96.7 418.4 148.8C471.1 142.7 513.4 155.6 533.6 192C554.3 229.1 543 274.8 510 320zM444.2 387.4C442.5 401.6 440.3 415.4 437.5 428.6C469.3 430 476.1 419.9 477.7 416.9C480 412.7 484.7 399 465.8 368.8C459 375.1 451.8 381.3 444.2 387.4zM437.5 211.5C440.3 224.6 442.5 238.4 444.2 252.7C451.8 258.8 459 265 465.8 271.3C484.7 241.1 480 227.3 477.7 223.2C476.1 220.3 469.3 210.2 437.5 211.5zM354.9 163.7C338.1 129.9 323.9 128 320 128C316.1 128 301.9 129.9 285.1 163.7C296.5 167.6 308.2 172.1 320 177.2C331.8 172.1 343.4 167.5 354.9 163.7zM195.9 252.6C197.6 238.3 199.8 224.6 202.6 211.4C170.8 210 164 220.1 162.4 223.1C160.1 227.3 155.4 241 174.3 271.2C181.1 264.9 188.3 258.7 195.9 252.6zM174.2 368.8C155.3 399 160 412.8 162.3 416.9C163.9 419.8 170.7 429.9 202.5 428.6C199.7 415.5 197.5 401.7 195.8 387.4C188.2 381.3 181 375.1 174.2 368.8zM400 320C400 275.8 364.2 240 320 240C275.8 240 240 275.8 240 320C240 364.2 275.8 400 320 400C364.2 400 400 364.2 400 320zM320 288C337.7 288 352 302.3 352 320C352 337.7 337.7 352 320 352C302.3 352 288 337.7 288 320C288 302.3 302.3 288 320 288z",
    [['ACDC Adaptor Fisika', 'L3A6001', 151], ['Ampere Meter', 'L3A7001', 152], ['Atraktor', 'L3A8001', 153], ['Audio Generator', 'L3A9001', 154], ['Balok Kaca', 'L3B23001', 155], ['Balok Kayu (Sebagai Beban)', 'L3B25001', 156], ['Bandul Matematis', 'L3B24001', 157], ['Barometer', 'L3B32001', 158], ['Batang Pengaduk Pendek (Fisika)', 'L3B2001', 159], ['Batang Statif (Fisika)', 'L3B3001', 160], ['Beaker Glass 1000 ml (Fisika)', 'L3B5001', 161], ['Beaker Glass 250 ml (Fisika)', 'L3B7001', 162], ['Beban Bercelah', 'L3B26001', 163], ['Beban Gantung (1000 gram)', 'L3B27001', 164], ['Bejana Berhubungan', 'L3B28001', 165], ['Bola Pingpong', 'L3B29001', 166], ['Burette 100 ml (Fisika)', 'L3B30001', 167], ['Busur', 'L3B31001', 168], ['Cermin sudut siku-siku', 'L3C14001', 169], ['Elektroskop', 'L3E5001', 170], ['Galvanometer', 'L3G9001', 171], ['Garpu Tala(Tuning Fork)', 'L3G10001', 172], ['Gelas ukur 100 ml (Fisika)', 'L3G2001', 173], ['Generator Frekuensi', 'L3G11001', 174], ['Hukum Boyle (Kaca)', 'L3H4001', 175], ['Jangka Sorong', 'L3J1001', 176], ['Kalorimeter (Fisika)', 'L3K4001', 177], ['Katrol', 'L3K16001', 178], ['Katrol Meja', 'L3K17001', 179], ['Kelereng', 'L3K18001', 180], ['Kereta Besar', 'L3K19001', 181], ['Kereta Kecil', 'L3K20001', 182], ['Kisi Difraksi', 'L3K21001', 183], ['KIT Alat Optika', 'L3K22001', 184], ['Kompas Magnet Jarum', 'L3K23001', 185], ['Kubus Materi', 'L3K24001', 186], ['Kumparan (1.200) / transformator', 'L3K26001', 187], ['Kumparan (12.000 lilitan) / transformator', 'L3K25001', 188], ['Kumparan (300 lilitan) / transformator', 'L3K27001', 189], ['Kumparan (3600 lilitan) / transformator', 'L3K28001', 190], ['Kumparan (600 lilitan) / transformator', 'L3K29001', 191], ['Laser Pointer', 'L3F9001', 192], ['Layar Kayu', 'L3F10001', 193], ['Layar Kayu Kecil + penjepit', 'L3F11001', 194], ['Lempengan Cu / Kupfer', 'L3F12001', 195], ['Lensa', 'L3F13001', 196], ['Lensa Bi concave (F.L 10cm, d=50mm)', 'L3F14001', 197], ['Lensa Bi concave (F.L 20cm, d=50mm)', 'L3F15001', 198], ['Lensa Biconcave', 'L3F16001', 199], ['Lensa Biconvex', 'L3F17001', 200], ['Lensa Double Concave (F.L 10 cm, d=50mm)', 'L3F18001', 201], ['Lensa Double Concave (F.L 10cm, d=50mm) cembung', 'L3F19001', 202], ['Lensa Double Concave (F.L 15cm, d=50mm)', 'L3F20001', 203], ['Lensa Double Concave (F.L 5cm, d=50mm)', 'L3F21001', 204], ['Loudspeaker', 'L3F22001', 205], ['Magnet Batang (Fisika)', 'L3M1001', 206], ['Magnet U (Fisika)', 'L3M29001', 207], ['Melde (AC220,50Hz)', 'L3M30001', 208], ['Meteran (50x165 FT)', 'L3M31001', 209], ['Meteran Jahit', 'L3M32001', 210], ['Mikro Ampere', 'L3M40001', 211], ['Mikrometer sekrup', 'L3M33001', 212], ['Mirror Concave (F.L 10,d=50mm)', 'L3M34001', 213], ['Mirror Concave (F.L 15,d=50mm)', 'L3M35001', 214], ['Mirror Concave (F.L 5, d=50mm)', 'L3M36001', 215], ['Mistar Kayu', 'L3M37001', 216], ['Multimeter Analog Fisika', 'L3M5001', 217], ['Multimeter Digital Fisika', 'L3M38001', 218], ['Neraca Elektronik ACIS 0.1 gram (Fisika)', 'L3N2001', 219], ['Neraca Ohauss (2 lengan / timbangan emas)', 'L3N5001', 220], ['Neraca Ohauss (3 lengan)', 'L3N7001', 221], ['Neraca ohauss (sama lengan) (0.2 gram) / spring balance / table balance', 'L3N6001', 222], ['Neraca pegas (0-2.5N / 0-250 gram)', 'L3N8001', 223], ['Neraca Pegas (0-5N / 0-1000 gram)', 'L3N9001', 224], ['Osiloscop', 'L3O3001', 225], ['Papan Bidang Miring', 'L3P24001', 226], ['Penjepit Layar', 'L3P25001', 227], ['Per Pegas', 'L3P26001', 228], ['Percobaan Atwood', 'L3P27001', 229], ['Percobaan Hukum Ohm', 'L3P28001', 230], ['Percobaan Resonansi Bunyi', 'L3P29001', 231], ['Perlengkapan Malvern', 'L3P30001', 232], ['Perlengkapan Praktikum Cahaya', 'L3P31001', 233], ['Photometer (Fisika)', 'L3P21001', 234], ['Pipa U (Fisika)', 'L3P32001', 235], ['Pipet Tetes Panjang (Fisika)', 'L3P9001', 236], ['Pipet Tetes Pendek (Fisika)', 'L3P10001', 237], ['Plat 4 jenis (Pb, Cu, Zn, Fe)', 'L3P33001', 238], ['Plat Persegi', 'L3P38001', 239], ['Plat Persegi Panjang', '-', 240], ['Plat Segitiga', '-', 241], ['Power Suply', 'L3P34001', 242], ['Prisma segitiga (kaca) 45°', 'L3P35001', 243], ['Prisma Segitiga (Kaca) 60°', 'L3P36001', 244], ['Proto Board', 'L3P37001', 245], ['Rheostat', 'L3R3001', 246], ['Retord Ring with Bosshead', 'L3R4001', 247], ['Senter', 'L3S14001', 248], ['Silinder Massa', 'L3S15001', 249], ['Silinder Massa 20 gram', 'L3S16001', 250], ['Slinky', 'L3S17001', 251], ['Stopwatch Digita (Fisika)', 'L3S12001', 253], ['Stopwatch Analog (Fisika)', 'L3S11001', 254], ['Termometer Air Raksa Fisika', 'L3T5001', 255], ['Termometer Alkohol (Fisika)', 'L3T6001', 256], ['Timbangan Badan (CAMRY)', 'L3T17001', 257], ['Variable resistor / potensiometer (0-250)', 'L3V1001', 258], ['Variable resistor / potensiometer (0-300)', 'L3V2001', 259], ['Volt Meter', 'L3V3001', 260]],
    "Laboratorium Fisika",
  ],
  [
    "Alat Laboratorium Biologi",
    "bio",
    "M480 64C497.7 64 512 78.3 512 96C512 153.8 487.6 200.8 454.6 240.5C430.5 269.4 400.8 295.6 371 320C400.8 344.5 430.5 370.6 454.6 399.5C487.6 439.1 512 486.2 512 544C512 561.7 497.7 576 480 576C462.3 576 448 561.7 448 544L192 544C192 561.7 177.7 576 160 576C142.3 576 128 561.7 128 544C128 486.2 152.4 439.2 185.4 399.5C209.5 370.6 239.2 344.5 269 320C239.2 295.5 209.5 269.4 185.4 240.5C152.4 200.8 128 153.8 128 96C128 78.3 142.3 64 160 64C177.7 64 192 78.3 192 96L448 96C448 78.3 462.3 64 480 64zM411.5 448L228.6 448C220.4 458.5 213.5 469.1 208 480L432.2 480C426.6 469.1 419.7 458.5 411.6 448zM366 400C351.7 387 336.2 374.2 320 361C303.8 374.1 288.3 387 274 400L366 400zM228.5 192L411.4 192C419.6 181.5 426.5 170.9 432 160L207.9 160C213.5 170.9 220.4 181.5 228.5 192zM274 240C288.3 253 303.8 265.8 320 279C336.2 265.9 351.7 253 366 240L274 240z",
    [['Alas Bedah Hewan', 'L2A3001', 0], ['Aneroid Sphygmomanometer (Tensi Meter)', 'L2A4001', 2], ['Auxanometer', 'L2A5001', 3], ['Baskom (Biologi)', 'L2B18001', 4], ['Batang Pengaduk Panjang (Biologi)', 'L2B2001', 5], ['Batang Pengaduk Pendek (Biologi)', 'L2B3001', 6], ['Batang Statif Panjang (Biologi)', 'L2B19001', 7], ['Beaker Glass 100 ml', 'L2B4001', 8], ['Beaker Glass 100 ml (Plastik)', 'L2B10001', 9], ['Beaker Glass 1000 ml (Biologi)', 'L2B5001', 10], ['Beaker Glass 150 ml', 'L2B35001', 11], ['Beaker Glass 250 ml', 'L2B7001', 12], ['Beaker Glass 50 ml (Biologi)', 'L2B8001', 13], ['Beaker Glass 500 ml (Biologi)', 'L2B9001', 14], ['Blood Lancet Pen', 'L2B20001', 16], ['Bosshead', 'L2B21001', 17], ['Botol kaca 1 L dan penutup', 'L2B36001', 18], ['Botol Plastik dan tutup (kecil, urine)', 'L2B22001', 19], ['Botol reagen coklat 500 ml', 'L2B34001', 20], ['Botol reagen putih 500 ml', 'L2B32001', 21], ['Botol Semprotan (Biologi)', 'L2B14001', 22], ['Bunsen / Pembakar Spiritus (Biologi)', 'L2P1001', 23], ['Cawan Arloji (Biologi)', 'L2K1001', 24], ['Cawan Petri (Biologi)', 'L2K2001', 25], ['Classic Magnifier (LOP)', 'L2C11001', 26], ['Corong Kaca 120 mm (Biologi)', 'L2C12001', 27], ['Corong Kaca 75 mm (Biologi)', 'L2C7001', 28], ['Cover Glass (Kaca Penutup)', 'L2C13001', 30], ['Dissecting Set', 'L2D1001', 31], ['Erlenmeyer 100 ml (Biologi)', 'L2E2001', 32], ['Erlenmeyer 1000 ml', 'L2E7001', 33], ['Erlenmeyer 125 ml', 'L2E8001', 34], ['Erlenmeyer 250 ml (Biologi)', 'L2E3001', 35], ['Erlenmeyer 300 ml (Biologi)', 'L2E5001', 36], ['Erlenmeyer 500 ml (Biologi)', 'L2E4001', 37], ['Gelas Ukur 10 ml (Biologi)', 'L2G1001', 38], ['Gelas Ukur 100 ml (Biologi)', 'L2G2001', 39], ['Gelas Ukur 25 ml (Biologi)', 'L2G4001', 40], ['Gelas Ukur 250 ml (Biologi)', 'L2G7001', 41], ['Gelas ukur 50 ml (Biologi)', 'L2G5001', 42], ['Gelas Ukur 500 ml (Biologi)', 'L2G6001', 43], ['Gunting', 'L2G8001', 44], ['Haemacytometer', 'L2H1001', 45], ['Hand Tally Counter', 'L2H2001', 47], ['Higrometer Putar', 'L2H3001', 48], ['Kaki Tiga (Biologi)', 'L2K3001', 49], ['Kancing Genetika', 'L2K10001', 50], ['Karet Penghisap / Pipet Filler', 'L2K5001', 51], ['Kawat Kasa (Biologi)', 'L2K11001', 52], ['KIT Maintaining Microscope', 'L2K12001', 53], ['Klem Universal', 'L2K13001', 54], ['Kompor Gas Portable', 'L2K14001', 55], ['Kuadrat lipat', 'L2K15001', 56], ['Labu Distilasi 500 ml', 'L2F5001', 57], ['Lampu Mikroskop (Binoukuler)', 'L2F6001', 58], ['Lensa Mikroskop Cahaya / Monokuler', 'L2F7001', 59], ['Lensa Okuler WF16X', 'L2F8001', 60], ['Lensa penutup mikroskop', 'L2F23001', 61], ['Mercurial Sphygmomanometer (Tensi, Air Raksa)', 'L2M6001', 62], ['Micro eye piece', 'L2M7001', 63], ['Microscopis Slide Botani (BIOLOGI SET)', 'L2M8001', 64], ['Microscopis Slide Botani (BOTANI SET)', 'L2M9001', 65], ['Microscopis Slide Botani (ZOOLOGI SET)', 'L2M10001', 66], ['Mikroskop Binokuler', 'L2M11001', 67], ['Mikroskop Cahaya', 'L2M12001', 68], ['Mikroskop Digital', 'L2M13001', 69], ['Model Dikotil', 'L2M14001', 70], ['Model Gigi', 'L2M15001', 71], ['Model Hidung', 'L2M41001', 72], ['Model Janin', 'L2M16001', 73], ['Model Kulit', 'L2M17001', 74], ['Model Lapisan Kulit Manusia', 'L2M18001', 75], ['Model Lidah', 'L2M42001', 76], ['Model Mata', 'L2M19001', 77], ['Model Meiosis', 'L2M20001', 78], ['Model Mitosis', 'L2M21001', 79], ['Model Otak', 'L2M22001', 80], ['Model Pencernaan Katak', 'L2M44001', 81], ['Model Putik', 'L2M25001', 82], ['Model Sistem Pencernan Manusia', 'L2M23001', 83], ['Model Sistem Peredaran Darah Manusia', 'L2M24001', 84], ['Model Telinga', 'L2M26001', 85], ['Model Tengkorak', 'L2M27001', 86], ['Model Tubuh Manusia', 'L2M28001', 87], ['Mortar dan Alu (Biologi)', 'L2M4001', 88], ['Multifunction Monitoring System', 'L2M43001', 89], ['Neraca digital ACIS (0.1) (Biologi)', 'L2N2001', 90], ['Neurologi Reflex Hammers / Palu', 'L2N3001', 91], ['Object Glass / Kaca Object', 'L2O1001', 92], ['Ose', 'L2O2001', 93], ['Penjepit Tabung Reaksi (Biologi)', 'L2P2001', 94], ['Photometer (Biologi)', 'L2P21001', 96], ['Pinset (Biologi)', 'L2P16001', 97], ['Pipet Tetes Biologi', 'L2P17001', 98], ['Pipet Ukur 10 ml', 'L2P18001', 99], ['Pipet Ukur 5 ml', 'L2P19001', 100], ['Pipet Ukur 25 ml', 'L2P60001', 101], ['Pisau', 'L2P20001', 102], ['Plat Tetes 12 Lubang (Biologi)', 'L2P14001', 103], ['Poster Hewan Mollusca', 'L2P43001', 104], ['Poster Hukum Mendel', 'L2P49001', 105], ['Poster Jenis Tumbuhan berbagai Divisi', 'L2P44001', 106], ['Poster Kromosom', 'L2P47001', 107], ['Poster Lumut', 'L2P50001', 108], ['Poster Margasatwa Omnivora', 'L2P51001', 109], ['Poster Molekul DNA', 'L2P39001', 110], ['Poster Molekul DNA & RNA', 'L2P38001', 111], ['Poster Molekul RNA', 'L2P40001', 112], ['Poster Organ Tubuh Manusia', 'L2P57001', 113], ['Poster Otot Manusia', 'L2P58001', 114], ['Poster pohon Evolusi', 'L2P45001', 115], ['Poster Primata', 'L2P59001', 116], ['Poster Ragam Jenis Burung', 'L2P52001', 117], ['Poster Respirasi Amphibi', 'L2P42001', 118], ['Poster Saraf Perifier/Tepi', 'L2P56001', 119], ['Poster Sistem Alat Transport Reptil', 'L2P48001', 120], ['Poster Sistem Peredaran darah Manusia', 'L2P55001', 121], ['Poster sistem Respirasi Burung', 'L2P41001', 122], ['Poster Sistem Syaraf Ikan', 'L2P46001', 123], ['Poster Tumbuhan Berbiji Terbuka dan Tertutup', 'L2P53001', 124], ['Poster Tumbuhan Paku', 'L2P54001', 125], ['Preparat Awetan Meiosis', 'L2P22001', 126], ['Preparat Awetan Mitosis', 'L2P23001', 127], ['Rak Tabung Reaksi (Biologi)', 'L2R1001', 128], ['Respirometer', 'L2R2001', 129], ['Sikat Tabung Reaksi (Biologi)', 'L2S4001', 130], ['Sistem Pernafasan Manusia', 'L2S6001', 131], ['Sistem Syaraf Manusia', 'L2S7001', 132], ['Spatula Satinless (Besar)', 'L2S8001', 133], ['Spatula Stainless (Kecil)', 'L2S9001', 134], ['Stetoskop', 'L2S10001', 135], ['Stopwatch Analog (Biologi)', 'L2S11001', 136], ['Stopwatch Digital (Biologi)', 'L2S12001', 137], ['Suntikan', 'L2S13001', 138], ['Tabung Reaksi (Biologi)', 'L2T2001', 139], ['Talenan Plastik', 'L2T7001', 140], ['Tensi Digital (OMRON)', 'L2T8001', 141], ['Termometer Alkohol (Biologi)', 'L2T6001', 142], ['Termometer Badan (GEA)', 'L2T9001', 143], ['Termometer Suhu Tanah', 'L2T10001', 144], ['Tiefe Depth', 'L2T11001', 145], ['Toples Kaca', 'L2T12001', 146], ['Torso Ginjal', 'L2T13001', 147], ['Torso Hati', 'L2T14001', 148], ['Torso Jantung', 'L2T15001', 149], ['Torso Paru-Paru', 'L2T16001', 150], ['Sterofoam Persegi', 'L', 252]],
    "Laboratorium Biologi",
  ],
  [
    "Bahan Laboratorium Biologi",
    "b-bio",
    "M400 96C441.7 96 475.9 127.8 479.7 168.5L565.3 194.8C590.7 202.6 608.1 226.1 608.1 252.7C608.1 274.5 596.4 294.6 577.4 305.4L432.9 387.5L525.4 480L576.1 480C593.8 480 608.1 494.3 608.1 512C608.1 529.7 593.8 544 576.1 544L512.1 544C503.6 544 495.5 540.6 489.5 534.6L378.9 424.2C390.6 388.2 382.1 347.1 353.5 318.5C312.9 277.9 247.2 277.9 206.6 318.4L133 388.4C126.6 394.5 126.3 404.6 132.4 411C138.5 417.4 148.6 417.6 155 411.6L228.8 341.4L228.9 341.3L229 341.2C232.5 337.7 236.3 334.6 240.3 332C268.2 313.5 306.2 316.6 330.8 341.2C355.5 365.9 358.5 404.1 339.8 432.1C337.2 435.9 334.2 439.6 330.8 443L293.8 480L384 480C401.7 480 416 494.3 416 512C416 529.7 401.7 544 384 544L96 544C60.7 544 32 515.3 32 480C32 313.6 159 176.9 321.3 161.5C328.2 124.2 360.8 96 400 96zM400 200C413.3 200 424 189.3 424 176C424 162.7 413.3 152 400 152C386.7 152 376 162.7 376 176C376 189.3 386.7 200 400 200z",
    [['Alumunium Foil', 'L2AF001', 1], ['Blood Lancet Jarum', 'L2BL001', 15], ['Cotton Buds', 'L2CB001', 29], ['Latex Surgical Hand Gloves', 'L2LH001', 46], ['pH Universal', 'L2IS001', 95], ['Cutter', 'L2CT001', 358], ['Face Mask', 'L2FM001', 359], ['Jarum Pentul', 'L2JP001', 360], ['Kapas Gulung', 'L2KP001', 361], ['Kapas Bulat', 'L2KB001', 362], ['Kapur', 'L2KA001', 363], ['Kertas Saring', 'L2KS001', 364], ['Korek', 'L2KR001', 365], ['Litmus', 'L2LT001', 366], ['Litmus Paper Blue', 'L2LB001', 367], ['Sedotan', 'L2SE001', 368], ['Silet', 'L2SI001', 369], ['Baking Powder', 'L2BP001', 370], ['Tusuk Gigi', 'L2TG001', 371], ['Tissue', 'L2TA001', 372], ['Gula', 'L2GL001', 373], ['Garam', 'L2GR001', 374], ['Gelatin Bubuk', 'L2GB001', 375], ['Acetocarmine', 'L2AC001', 376], ['Acetone 70%', 'L2AT001', 377], ['Alkohol 70%', 'l2AL001', 378], ['Alkohol 96%', 'L2AK001', 379], ['Aquades', 'L2AQ001', 380], ['Argentin Nitrat (Larutan)', 'L2AN001', 381], ['Benedict', 'L2BN001', 382], ['Biuret', 'L2BR001', 383], ['Cuka', 'L2CK001', 384], ['Diethyleter', 'L2DE001', 385], ['Eosin 1%', 'L2EO001', 386], ['Eter Alkohol 1:4', 'L2EA001', 387], ['Fenolftalein (PP)', 'L2PP001', 388], ['Formaldehyde', 'L2FD001', 389], ['Formalin 40%', 'L2FM001', 390], ['Glukosa Monohidrat', 'L2GM001', 391], ['HCL 1%', 'L2HC001', 392], ['HCL 1M', 'L2HL001', 393], ['HCL 32%', 'L2CL001', 394], ['Immersion Oil for Microscope', 'L2IO001', 395], ['Ivory Rubbing Compound', 'L2RC001', 396], ['Pottasium Chromate', 'L2KC001', 397], ['Kloroform', 'L2KO001', 398], ['Kristal Violet', 'L2KV001', 399], ['Larutan Fehling B', 'L2FB001', 400], ['Larutan NaOH', 'L2NA001', 401], ['Larutan Ringer', 'L2LR001', 402], ['Lugol', 'L2LG001', 403], ['Manganese Sulfat Monohydrate', 'L2SM001', 404], ['Methyl Red', 'L2MR001', 405], ['Methylen Blue', 'L2MB001', 406], ['NaOH Flakes', 'L2NO001', 407], ['Natrium Acetat', '-', 408], ['Parafin', 'L2PA001', 409], ['Pereaksi Millon', 'L2PM001', 410], ['Pereaksi Molisch', 'L2PL001', 411], ['Pewarnaan Gram Bakteri 1 Set', 'L2PG001', 412], ['Pottasium Hydroxide', 'L2PH001', 413], ['San Poly', 'L2SP001', 414], ['Argentin Nitrat', 'L2SN001', 415], ['Spiritus', 'L2SS001', 416], ['Sumbu Spiritus', 'L2ST001', 417], ['Sunlight Sabun Cuci', 'L2SU001', 418], ['Tingtur Iodium', 'L2TI001', 419], ['Yodium Alkohol', 'L2YA001', 420], ['Vaselin', 'L2VS001', 421]],
    "Bahan Lab Biologi",
  ],
];

const multImgs = {
  8:[8, 9, 10, 11, 12, 13, 14, 161, 162, 266, 267, 268, 269, 270, 271, 272, 273, 274],
  23:[23, 328],
  32:[32, 33, 34, 35, 36, 37, 297, 298, 299, 300],
  38:[38, , 39, 40, 41, 42, 43, 173, 301, 302, 303, 304, 305, 306],
  52:[52, 312],
  88:[88, 323],
  75:[74, 75],
  64:[64, 65, 66],
  126:[126, 127],
  96:[96, 234],
  103:[103, 343],
  99:[99, 100, 101, 338, 339],
  130:[130, 349],
  134:[134,347],
  136:[136,254],
  137:[137,253],
  142:[142,256,357],
  51:[51,311],
  93:[93, 327],
  177:[177, 310],
  258:[258, 259],
  255:[255, 356],
  20:[20,279],
  276:[276,277,278],
  283:[283,284,285],
  264:[264,265],
  206:[206, 320],
  332:[332, 333, 334, 335],
  236:[236,237, 336, 337],
  213:[213,214,215],
  217:[217,324],
  197:[197,198,199,201,202,203,204],
  6:[6, 159],
  293:[293,294],
  331:[331, 235],
  17:[17, 275]
}

function nextPage(i, to = "") {
  if (i == 1) {
    let x = document.getElementById("name");
    let y = document.getElementById("kelas-select");
    let z = document.getElementById("kelompok");
    if (x.value == "") {
      alert("Nama harus diisi!");
      x.style.borderColor = "red";
      return false;
    }
    if (y.value == "") {
      alert("Kelas harus diisi!");
      y.style.borderColor = "red";
      return false;
    }
    if (z.value == "") {
      alert("Kelompok harus diisi!");
      z.style.borderColor = "red";
      return false;
    }
  } else if (i == 2) {
    let x = document.getElementById("unit-lab-select");
    let y = document.getElementById("guru-select");
    let z = document.getElementById("judul");
    if (x.value == "") {
      alert("Unit Lab harus diisi!");
      x.style.borderColor = "red";
      return false;
    }
    if (y.value == "") {
      if (x.value != "kelas") {
        alert("Guru Mata Pelajaran harus diisi!");
        y.style.borderColor = "red";
        return false;
      }
    }
    if (z.value == "") {
      alert("Judul harus diisi!");
      z.style.borderColor = "red";
      return false;
    }
  } else if (i == 3) {
    if (!data["jp"]) {
      alert("JP harus diisi!");
      return false;
    }
  }
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.style.display = "none";
  });
  if (isFinite(i)) {
    document.getElementById("page" + (i + 1)).style.display = "block";
  } else {
    document.getElementById(to).style.display = "block";
  }
}

function prevPage(i, to = "") {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.style.display = "none";
  });
  if (isFinite(i)) {
    document.getElementById("page" + (i - 1)).style.display = "block";
  } else {
    document.getElementById(to).style.display = "block";
  }
}

function fill(id) {
  let x = document.getElementById(id);
  data[id] = x.value;
  console.log(data);
  x.style.borderColor = "#c5c5c5";
  if (id == "unit-lab-select") {
    if (x.value != "kelas") {
      document.getElementById("guru-select").removeAttribute("disabled");
      for (const t of document
        .getElementById("guru-select")
        .getElementsByClassName("guruselect")) {
        if (t.id == x.value) {
          t.removeAttribute("disabled");
          t.removeAttribute("hidden");
        } else {
          t.setAttribute("disabled", true);
          t.setAttribute("hidden", true);
        }
      }
    } else {
      document.getElementById("guru-select").setAttribute("disabled", true);
      document.getElementById("guru-select").style.borderColor = "#c5c5c5";
      document.getElementById("guru-select").value = "";
      data["guru-select"] = "";
    }
  }
}

function jampelClick(id) {
  data["jp"] = id;
  for (let x of document.getElementById("jampel").children) {
    x.classList.toggle("toggled", false);
  }

  document.getElementById(id).classList.toggle("toggled", true);
}

function selectElem(id) {
  document.getElementById(id + "-select").showPicker();
}

const datepick = document.querySelector(".datepicker");
const dates = document.querySelector(".dates");
const moInp = document.querySelector(".mo-input");
const yInp = document.querySelector(".year-input");
const nextBtn = datepick.querySelector(".next");
const prevBtn = datepick.querySelector(".prev");

let selDate = new Date();
selDate.setDate(new Date().getDate() + 1);
data["date"] = selDate;
let year = selDate.getFullYear();
let month = selDate.getMonth();

nextBtn.addEventListener("click", () => {
  if (month === 11) year++;
  month = (month + 1) % 12;
  dispDate();
});

prevBtn.addEventListener("click", () => {
  if (month === 0) year--;
  month = (month + 11) % 12;
  dispDate();
});

const updYM = () => {
  moInp.selectedIndex = month;
  yInp.value = year;
};

const handleClick = (e) => {
  const b = e.target;

  const selected = dates.querySelector(".selected-date");
  selected && selected.classList.remove("selected-date");

  b.classList.add("selected-date");
  selDate = new Date(year, month, parseInt(b.textContent));
  data["date"] = selDate;
};

const dispDate = () => {
  updYM();
  dates.innerHTML = "";

  const lastOfPrev = new Date(year, month, 0);
  for (let i = 0; i <= lastOfPrev.getDay(); i++) {
    const b = createB(lastOfPrev.getDate() - lastOfPrev.getDay() + i, true);
    dates.appendChild(b);
  }

  const lastOf = new Date(year, month + 1, 0);
  for (let i = 1; i <= lastOf.getDate(); i++) {
    const today = new Date();
    const b = createB(
      i,
      year < today.getFullYear() ||
        (month < today.getMonth() && year <= today.getFullYear()) ||
        (i < today.getDate() &&
          month <= today.getMonth() &&
          year <= today.getFullYear())
    );
    b.addEventListener("click", handleClick);
    dates.appendChild(b);
  }

  const firstOf = new Date(year, month + 1, 1);
  for (let i = firstOf.getDay(); i < 7; i++) {
    if (firstOf.getDay() === 0) break;
    const b = createB(firstOf.getDate() - firstOf.getDay() + i, true);
    dates.appendChild(b);
  }
};

const createB = (text, disabled = false) => {
  const b = document.createElement("button");
  b.textContent = text;
  b.disabled = disabled;
  if (!disabled) {
    const bDate = new Date(year, month, text).toDateString();
    b.classList.toggle("today", bDate === new Date().toDateString());
    b.classList.toggle("selected-date", bDate === selDate.toDateString());
  }
  return b;
};

function changeDate(){
  year = yInp.value;
  month = moInp.selectedIndex;
  dispDate();
}

dispDate();

const initLabData = (i) => {
  const d = document.createElement("div");

  const dLabel = document.createElement("div");
  const labLabel = document.createElement("h1");

  labLabel.textContent = "x1";
  labLabel.classList.add("labLabel");

  dLabel.appendChild(labLabel);
  dLabel.classList.add("dLabel");
  dLabel.id = dataB[i][1] + "-dL";

  const b = document.createElement("button");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  d.classList.add("button-lab-cont");
  b.classList.add("button-lab");

  svg.setAttribute("width", "9.6vw");
  svg.style.maxWidth = "114px";
  svg.style.minWidth = "55px";
  svg.setAttribute("height", "auto");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 640 640");

  path.setAttribute("d", dataB[i][2]);

  path.setAttribute("fill", "#1D1B20");

  svg.appendChild(path);
  b.appendChild(svg);
  let onclickS = 'nextPage("lab-select", "page-cart"); initCart("' + i + '");';
  b.setAttribute("onclick", onclickS);

  d.appendChild(dLabel);
  d.appendChild(b);

  const h = document.createElement("h1");
  h.textContent = dataB[i][0];
  h.style.fontSize = "2.3vh";
  d.appendChild(h);

  cart[dataB[i][1]] = {};
  cart[dataB[i][1]]["amount"] = 0;
  cart[dataB[i][1]]["item"] = {};
  for (const item of dataB[i][3]) {
    cart[dataB[i][1]]["item"][item[0]] = 0;
  }

  return d;
};

function menuLab() {
  const lab = document.getElementById("labMenu");
  for (let i = 0; i < 4; i++) {
    lab.appendChild(initLabData(i));
  }
  for (const l of Object.keys(cart)) {
    updateLabCard(l);
  }
  updateDispCart();
}

function initCart(j) {
  const title = document.getElementById("cart-title");
  const bCont = document.getElementById("lab-button-cont");

  bCont.innerHTML = '';

  title.textContent = dataB[j][4];
  for (const item of dataB[j][3]) {
    const b = document.createElement("button");
    const d = document.createElement("div");
    const i = document.createElement("img");
    const t = document.createElement("h1");

    const di = document.createElement("div");
    di.id = item[0] + '-lB';
    di.classList.add('dLabel');

    const labLabel = document.createElement("h1");
    labLabel.textContent = "x1";
    labLabel.classList.add("labLabel");

    di.appendChild(labLabel);
    di.style.marginBottom = '-25%';

    b.addEventListener('click', () => {popup(dataB[j][1], item);});
    b.classList.add('lab-item-button');

    d.classList.add('button-lab-img-cont');

    i.style.height = '100%';
    i.style.objectFit = 'contain';

    var sr = '';

    for (const R of Object.keys(multImgs)) {
      if (multImgs[R].includes(item[2])) {
        sr = `src/imgs/dataLab/${R}.png`;
        break;
      }
    }

    if (sr == '') i.src = `src/imgs/dataLab/${item[2]}.png`; else i.src = sr;

    t.textContent = item[0];
    t.style.fontSize = '0.7rem';

    d.appendChild(i);

    b.appendChild(di);
    b.appendChild(d);
    b.appendChild(t);

    bCont.appendChild(b);

    updateLabButtonItem(dataB[j][1], item[0]);
  }
}

function updateLabCard(j) {
  cart[j]["amount"] = 0;
  for (let l of Object.keys(cart[j]["item"])) {
    if (cart[j]["item"][l] > 0) cart[j]["amount"]++;
  }

  let f = document.getElementById(j + "-dL");
  f.children[0].textContent = "x" + cart[j]["amount"];
  if (cart[j]["amount"] <= 0) {
    f.style.background = "transparent";
    f.children[0].style.color = "transparent";
  } else {
    f.style.backgroundColor = '#c76b6b';
    f.children[0].style.color = "#fff";
  }
}

function updateLabButtonItem(dt, j) {
  let f = document.getElementById(j + "-lB");
  f.children[0].textContent = "x" + cart[dt]['item'][j];
  if (cart[dt]['item'][j] <= 0) {
    f.style.background = "transparent";
    f.children[0].style.color = "transparent";
  } else {
    f.style.backgroundColor = '#c76b6b';
    f.children[0].style.color = "#fff";
  }
}

function updateSearchButtonItem(dt, j) {
  let f = document.getElementById(j + "-lB-s");
  f.children[0].textContent = "x" + cart[dt]['item'][j];
  if (cart[dt]['item'][j] <= 0) {
    f.style.background = "transparent";
    f.children[0].style.color = "transparent";
  } else {
    f.style.backgroundColor = '#c76b6b';
    f.children[0].style.color = "#fff";
  }
}

menuLab();

function popup(dt, i){
  let d = document.getElementsByClassName('popup-lab-cont')[0];
  let n = document.getElementById('item-nama');
  let id = document.getElementById('item-id');
  let qt = document.getElementById('quant-text');
  let img = document.getElementById('item-img');

  let dbMin = document.getElementsByClassName('popup-button')[0];
  let dbPlus = document.getElementsByClassName('popup-button')[1];

  d.style.display = 'flex';
  n.innerText = i[0];
  id.innerText = i[1];
  qt.value = cart[dt]['item'][i[0]];
  qt.placeholder = `${dt}|${i[0]}`;

  var sr = '';

    for (const R of Object.keys(multImgs)) {
      if (multImgs[R].includes(i[2])) {
        sr = `src/imgs/dataLab/${R}.png`;
        break;
      }
    }

    if (sr == '') img.src = `src/imgs/dataLab/${i[2]}.png`; else img.src = sr;

  var new_element = dbMin.cloneNode(true);
  new_element.addEventListener('click', () => {updateCart(dt, i[0], 'dec')});
  dbMin.parentNode.replaceChild(new_element, dbMin);

  var new_element = dbPlus.cloneNode(true);
  new_element.addEventListener('click', () => {updateCart(dt, i[0], 'add')});
  dbPlus.parentNode.replaceChild(new_element, dbPlus);
}

let d = document.getElementsByClassName('popup-lab-cont')[0];
d.addEventListener('click', (event) => {
  if (event.target === d) {
    d.style.display = 'none';
  }
});

function updateCart(dt, i, type){
  if(type == "dec"){
    cart[dt]['item'][i] = parseInt(cart[dt]['item'][i]) - 1;
    if (cart[dt]['item'][i] < 0) cart[dt]['item'][i] = 0;
  } else {
    cart[dt]['item'][i] = parseInt(cart[dt]['item'][i]) + 1;
  }
  let qt = document.getElementById('quant-text');
  qt.value = cart[dt]['item'][i];
  updateLabCard(dt);
  updateLabButtonItem(dt, i);
  updateDispCart();
}

function changequant(i){
  var t = i.placeholder.split('|');
  if (i.value < 0 || i.value == '') i.value = 0;
  cart[t[0]]['item'][t[1]] = i.value;
  updateLabCard(t[0]);
  updateLabButtonItem(t[0], t[1]);
  updateDispCart();
}

function changequantDisp(l, item, i){
  if (i.value < 0 || i.value == '') i.value = 0;
  cart[l]['item'][item] = i.value;
  updateLabCard(l);
  updateLabButtonItem(l, item);
}

function updateDispCart(){
  var c = document.getElementById('cart-button-cont');
  c.innerHTML = '';
  for (const lab of Object.keys(cart)) {
    for (const item of Object.keys(cart[lab]['item'])) {
      if (cart[lab]['item'][item] > 0){
        var b = document.createElement('div');
        b.classList.add('cart-item');

        var cD = document.createElement('div');
        cD.classList.add('cart-data');

        var cI = document.createElement('div');
        cI.classList.add('cart-img');

        var imgD = document.createElement('img');

        var toCheckLab = Object.keys(cart).indexOf(lab);
        var toCheckItem = Object.keys(cart[lab]['item']).indexOf(item);

        var sr = '';

        for (const R of Object.keys(multImgs)) {
          if (multImgs[R].includes(dataB[toCheckLab][3][toCheckItem][2])) {
            sr = `src/imgs/dataLab/${R}.png`;
            break;
          }
        }

        if (sr == '') imgD.src = `src/imgs/dataLab/${dataB[toCheckLab][3][toCheckItem][2]}.png`; else imgD.src = sr;

        imgD.style.height = '100%';
        imgD.style.objectFit = 'contain';

        cI.appendChild(imgD);
        cD.appendChild(cI);

        var oD = document.createElement('div');
        oD.classList.add('obj-desc');

        var titleText = document.createElement('h1');
        titleText.textContent = item;
        titleText.classList.add('obj-desc-text');

        oD.appendChild(titleText);

        var cQc = document.createElement('div');
        cQc.classList.add('cart-quant-cont');

        var b1 = document.createElement('button');
        b1.classList.add('cart-button');

        b1.addEventListener('click', () => {updateCart(lab, item, 'dec')});

        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        var path = document.createElementNS("http://www.w3.org/2000/svg", "path");

        svg.setAttribute("viewBox", "0 0 640 640");

        path.setAttribute("d", "M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z");

        svg.appendChild(path);
        b1.appendChild(svg);
        cQc.appendChild(b1);

        let inpQuant = document.createElement('input');
        
        inpQuant.placeholder = `${lab}|${item}`;
        inpQuant.type = 'number';

        inpQuant.style.textAlign = 'center'; 
        inpQuant.style.fontSize = '2.5vh'; 
        inpQuant.style.border = 'none';

        inpQuant.classList.add('plhTrans');

        inpQuant.value = cart[lab]['item'][item];
        inpQuant.addEventListener('change', () => {changequantDisp(lab, item, inpQuant); console.log(inpQuant.placeholder, lab, item);});

        cQc.appendChild(inpQuant);

        var b2 = document.createElement('button');
        b2.classList.add('cart-button');

        b2.addEventListener('click', () => {updateCart(lab, item, 'add')});

        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        var path = document.createElementNS("http://www.w3.org/2000/svg", "path");

        svg.setAttribute("viewBox", "0 0 640 640");

        path.setAttribute("d", "M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z");

        svg.appendChild(path);
        b2.appendChild(svg);
        cQc.appendChild(b2);

        oD.appendChild(cQc);
        cD.appendChild(oD);
        b.appendChild(cD);

        c.appendChild(b);
      }
    }
  }
}

function searchPage(){
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.style.display = "none";
  });
  document.getElementById('page-search').style.display = "block";
  document.getElementById('lab-search-bar').value='';
  search('');
}

function search(inp){
  const bCont = document.getElementById("search-button-cont");
  bCont.innerHTML = '';

  for (let lab = 0; lab < dataB.length; lab++) {
    for (const item of dataB[lab][3]) {
      if (!(item[0]).toLowerCase().includes(inp.toLowerCase())){
        continue;
      }
      const b = document.createElement("button");
      const d = document.createElement("div");
      const i = document.createElement("img");
      const t = document.createElement("h1");

      const di = document.createElement("div");
      di.id = item[0] + '-lB-s';
      di.classList.add('dLabel');

      const labLabel = document.createElement("h1");
      labLabel.textContent = "x1";
      labLabel.classList.add("labLabel");

      di.appendChild(labLabel);
      di.style.marginBottom = '-25%';

      b.addEventListener('click', () => {nextPage("lab-select", "page-cart"); initCart(lab); popup(dataB[lab][1], item);});
      b.classList.add('lab-item-button');

      d.classList.add('button-lab-img-cont');

      i.style.height = '100%';
      i.style.objectFit = 'contain';

      var sr = '';

      for (const R of Object.keys(multImgs)) {
        if (multImgs[R].includes(item[2])) {
          sr = `src/imgs/dataLab/${R}.png`;
          break;
        }
      }

      if (sr == '') i.src = `src/imgs/dataLab/${item[2]}.png`; else i.src = sr;

      t.textContent = item[0];
      t.style.fontSize = '0.7rem';

      d.appendChild(i);

      b.appendChild(di);
      b.appendChild(d);
      b.appendChild(t);

      bCont.appendChild(b);

      updateSearchButtonItem(dataB[lab][1], item[0]);
    }
  }
}