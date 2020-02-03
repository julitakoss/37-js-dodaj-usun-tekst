let dodaj = document.getElementById('dodaj');
let usun = document.getElementById('usun');
let paragraf = document.getElementById('tekst');

    dodaj.onclick = function(){
        paragraf.textContent = 'Akademia 108';
}
    usun.onclick = function(){
        paragraf.textContent = '';
}
