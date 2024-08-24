let inputTraducao = document.querySelector('#inputTraducao');
let btnCript = document.querySelector('#btnCriptografar');
let btnDescript = document.querySelector('#btnDescriptografar');

let txtInput;
let inputArray = [];
let inputResultado;

btnCript.addEventListener('click', function (e) {
    txtInput = inputTraducao.value;

   let txtCriptografado = txtInput
        .replaceAll('e', 'enter')
        .replaceAll('a', 'ai')
        .replaceAll('i', 'imes')
        .replaceAll('u', 'ufat')
        .replaceAll('o', 'ober');

    e.preventDefault();
    return txtCriptografado;
})