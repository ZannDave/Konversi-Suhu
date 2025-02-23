// # Ngambil Nilai

const suhu = document.getElementById('inputSuhu')
const opsiKonversi = document.getElementById('inputOpsi')
const button = document.getElementById('enter')

// end - 

// # System atau function

button.addEventListener('click', function() {
    if (suhu.value == '' || opsiKonversi.value == '') {
        alert('Suhu & Opsi tidak boleh kosong!')
        console.info('ERROR : Suhu & Opsi tidak boleh kosong!')
    } else if (opsiKonversi.value == 1) {
        function konversiCKeF () {
            let hasilKonversiCKeF = (Number(suhu.value) * 9 / 5) + 32
            let msgCF = `${suhu.value}C di Konversi ke F  -> ${hasilKonversiCKeF}F`
            alert(msgCF)
            console.info(msgCF)
        }
        konversiCKeF()
    } else if (opsiKonversi.value == 2) {
        function konversiFKeC () {
            let hasilKonversiFKeC = (Number(suhu.value) - 32) * 5 / 9
            let msgFC = `${suhu.value}F di Konversi ke C  -> ${hasilKonversiFKeC}C`
            alert(msgFC)
            console.info(msgFC)
        }
        konversiFKeC()
    } else if (opsiKonversi.value == 3) {
        function konversiCKeK () {
           let hasilKonversiCKeK = (Number(suhu.value) + 273.15)
           let msgCK = `${suhu.value}C di konversi ke K  -> ${hasilKonversiCKeK}K`
           alert(msgCK)
           console.info(msgCK)
        }
        konversiCKeK()
    } else if (opsiKonversi.value == 4) {
        function konversiKKeC () {
            let hasilKonversiKKeC = (Number(suhu.value) - 273.15)
            let msgKC = `${suhu.value}K di konversi ke C  -> ${hasilKonversiKKeC}C`
            alert(msgKC)
            console.info(msgKC)
        }
        konversiKKeC()
    } else if (opsiKonversi.value == 5) {
        function konversiFKeK () {
            let hasilKonversiFKeK = (Number(suhu.value) - 32) * 5 / 9 + 273.15
            let msgFK = `${suhu.value}F di konversi ke K  -> ${hasilKonversiFKeK}K`
            alert(msgFK)
            console.info(msgFK)
        }
        konversiFKeK()
    } else if (opsiKonversi.value == 6) {
        function konversiKKeF () {
            let hasilKonversiKKeF = (Number(suhu.value) - 273.15) * 9 / 5 + 32 
            let msgKF = `${suhu.value}K di konversi ke F  -> ${hasilKonversiKKeF}F`
            alert(msgKF)
            console.info(msgKF)
        }
        konversiKKeF()
    } else {
        alert('Pilih opsi yang tersedia!')
        console.info('ERROR : Pilih opsi yang tersedia!')
    }
})

// end - p