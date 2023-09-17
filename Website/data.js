 const nama ="Muhammad Hafizan Alhaqi";
let usia = 50;

let biodata = document.getElementById('biodata');


function generateBiodata() {
    let generasi;

    if (usia > 10 && usia < 18) {
         generasi ="generasi remaja";
    } 
    else if(usia > 18 && usia < 30) {
        generasi = "generasi dewas";
    } 
    else if (usia >= 30) {
        generasi = "generasi tua lu nyet";
    }
    else if (usia > 2 && usia < 10) {
        generasi = "generasi anak anak";
    }
    else {  
        generasi = "generasi bayi"
    }
    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();