function calculatorHargaBuku(buku, diskon, pajak, stok, order){
    let totalPembayaran = 0;
    const harga=buku.harga;
    const totalDiskon=harga * (diskon/100);
    const hargaSetelahDiskon = harga - totalDiskon;
    const jumlahPajak = hargaSetelahDiskon * (pajak/100);
    const hargaSetelahPajak = hargaSetelahDiskon + jumlahPajak;
    let totalHargaBuku = 0;
    let totalHargaSetelahDiskon = 0;
    let totalPajak = 0;

    for (let index = 0; index < order; index++){
        if(buku && buku.harga && index < stok) {
            totalHargaSetelahDiskon += hargaSetelahDiskon;
            totalHargaBuku += buku.harga;
            totalPajak += jumlahPajak;
        } else {
            console.log("stok habis kasiannnn");
            break;
        }
    }
        totalPembayaran = totalHargaSetelahDiskon + totalPajak;
        if (buku && buku.harga && order <= stok) {
        console.group();
        console.log("judul buku : ", buku.title);
        console.log("Harga buku : ", harga);
        console.log("jumlah yang dibeli : ", order);
        console.log("Total keseluruhan : ", totalHargaBuku);
        console.log("Presentase diskon : ", diskon,"%");
        console.log("Harga setelah diskon : ",hargaSetelahDiskon);
        console.log("Presentase PPN : ",pajak,"%");
        console.log("Biaya PPN : ", totalPajak);
        // console.log("Total Pembayaran buku : ",hargaSetelahPajak);
        console.log("Total Pembayaran buku : ", totalPembayaran);
        if(stok - order === 0)
            console.log("stok habis maaf");
        else console.log("stok ada, silahkan order");
        console.groupEnd();
    }
    return totalPembayaran;   
}

calculatorHargaBuku({title: "buku matahari", harga:15000 }, 50, 10, 10, 9);
calculatorHargaBuku({title: "buku hujan", harga:10000 }, 50, 10, 10, 9);