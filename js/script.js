let km;
let age;
let Username;
const button = document.querySelector('btn-success');
const resetButton = document.querySelector('btn-danger');
let prezzo_scontato = 0;
let Prezzo_finale;
const discountUnder18 = 20/100;
const discountOver65 = 40/100;
let Prezzo_biglietto = (km * 0.21);

button.addEventListener('click',
    function() {
        Username = parseInt(document.getElementById('name').value);
        km = parseInt(document.getElementById('km').value);
        age = parseInt(document.getElementById('age').value);
        if (age < 18) {
            prezzo_scontato = (Prezzo_biglietto * discountUnder18);
            Prezzo_finale = (Prezzo_biglietto - prezzo_scontato);
        } else if (age > 65) {
            prezzo_scontato = (Prezzo_biglietto * discountOver65);
            Prezzo_finale = (Prezzo_biglietto - prezzo_scontato);
        } else   {        
        const Username = document.getElementsByClassName('.outputName');
        const Prezzo_finale =document.getElementsByClassName('.outputCosto')
        }

        if(isNaN(km) || isNaN(age)) {
            location.reload();
        }})

       