
const button = document.querySelector('.btn-success');
const resetButton = document.querySelector('.btn-danger');
let Prezzo_finale;
const discountUnder18 = 20 / 100;
const discountOver65 = 40 / 100;
const outputForm = document.getElementById('Iltuobiglietto');
let outputVisibility = false;

button.addEventListener('click',
    function () {
        const km = parseInt(document.getElementById('km').value);
        const age = parseInt(document.getElementById('age').value);
        const passeggero = document.getElementById('nome').value;
        if (outputVisibility == false) {
            outputForm.classList.remove('d-none');
            outputForm.classList.add('d-block');
            outputVisibility = true;
        }
        let Prezzo_biglietto = (km * 0.21);
        if (age < 18) {
            prezzo_scontato = (Prezzo_biglietto * discountUnder18);
            Prezzo_finale = (Prezzo_biglietto - prezzo_scontato);
        } else if (age > 65) {
            prezzo_scontato = (Prezzo_biglietto * discountOver65);
            Prezzo_finale = (Prezzo_biglietto - prezzo_scontato);
        } else {
            Prezzo_finale = Prezzo_biglietto;
         }

        
         Prezzo_biglietto = Prezzo_biglietto.toFixed(2)
         Prezzo_finale = Prezzo_finale.toFixed(2);

        document.getElementById('Passeggero').innerHTML = `   ${passeggero}       `
        document.getElementById('Cbiglietto').innerHTML = `   ${Prezzo_finale} €      `


      


        if (isNaN(km) || isNaN(age) || ""(passeggero)) {
            alert("I dati inseriti non sono validi. Si prega di riprovare.")

        }
    })

    resetButton.addEventListener('click',
    function () {
        const km = parseInt(document.getElementById('km').value = '');
        const age = parseInt(document.getElementById('age').value = '');
        const passeggero = document.getElementById('nome').value = '';
        outputForm.classList.add('d-none');
    })

    button.addEventListener('click',
    function casuale() {
        num = Math.round(Math.random() * 12);
        document.getElementById("casuale").innerHTML = num;
    })
    button.addEventListener('click',
    function casuale() {
        num = Math.round(Math.random() * 12);
        document.getElementById("random").innerHTML = num;
    })