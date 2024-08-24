let inputTraducao = document.querySelector('#inputTraducao');
let btnCript = document.querySelector('#btnCriptografar');
let btnDescript = document.querySelector('#btnDescriptografar');

let txtInput;

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

btnDescript.addEventListener('click', function (e) {

    let txtDescriptografado = txtCriptografado
        .replaceAll('enter', 'e')
        .replaceAll('ai', 'i')
        .replaceAll('imes', 'i')
        .replaceAll('ufat', 'u')
        .replaceAll('ober', 'o');

    e.preventDefault;
    return txtDescriptografado;
})