function KirimData() {
    var nama = document.getElementById("Nama").value;
    var nim = document.getElementById("Nim").value;
    var peminatan = document.querySelector("input[name=peminatan]:checked").value;
    var alamat = document.getElementById("Alamat").value;

    alert(
        "Nama Mahasiswa: " + nama +
        "\nNIM: " + nim +
        "\nPeminatan: " + peminatan +
        "\nAlamat: " + alamat
    );

    return false; // Mencegah pengiriman formulir
}
