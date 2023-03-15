const input = document.querySelector('#input')
const form = document.querySelector('form')
const div = document.querySelector('.containerMsj')

const showMessage = (msj) => {
    div.innerHTML = `
        <p>${msj}</p>
    `
}

const isEmpty = (inputValue) => {
    let vacio = false

    if (!inputValue.length == 0) {
        vacio = true
        return vacio
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputValue = input.value

    function caracteresIguales(str) {
        let todosIguales = true;
        let contador = {};
    
        for (let i = 0; i < str.length; i++) {
            let caracter = str.charAt(i);
            if (contador.hasOwnProperty(caracter)) {
                contador[caracter]++;
            } else {
                contador[caracter] = 1;
            }
        }
    
        let frecuencia = -1;
        for (let valor of Object.values(contador)) {
            if (frecuencia === -1) {
                frecuencia = valor;
            } else if (frecuencia !== valor) {
                todosIguales = false;
                break;
            }
        }
    
        if (todosIguales) {
            // let caracteres = JSON.stringify(contador)
              showMessage(`Los caracteres de "${inputValue}" se repiten la misma cantidad de veces`)
              return
        } else {
            showMessage(`Los caracteres de "${inputValue}" no repiten la misma cantidad de veces`)
            return
        }
    }

    if (isEmpty(inputValue)) {
        caracteresIguales(inputValue)
    } else {
        showMessage("No ingreso texto")
        return
    }

})


