let inputTraducao = document.querySelector('#inputTraducao');
let btnCript = document.querySelector('#btnCriptografar');
let btnDescript = document.querySelector('#btnDescriptografar');

let cxResultado = document.querySelector('#cxResultado');
let imgResult = document.querySelector('#imagemResultado');
let titResult = document.querySelector('#tituloResultado');
let txtResult = document.querySelector('#textoResultado');

let txtInput;
let txtCriptografado;
let txtDescriptografado;

btnCript.addEventListener('click', function (e) {
    txtInput = inputTraducao.value;
    
    cxResultado.classList.remove('resultado');
    cxResultado.classList.add('resultado__unhidden');
    imgResult.style.display = 'none';
    titResult.style.display = 'none';

    txtCriptografado = txtInput
    .replaceAll('e', 'enter')
    .replaceAll('a', 'ai')
    .replaceAll('i', 'imes')
    .replaceAll('u', 'ufat')
    .replaceAll('o', 'ober');

    txtResult.textContent = txtCriptografado;
    inputTraducao.value = ''
    e.preventDefault();

    return txtCriptografado;
})

btnDescript.addEventListener('click', function (e) {
    txtInput = inputTraducao.value;

    cxResultado.classList.remove('resultado');
    cxResultado.classList.add('resultado__unhidden');
    imgResult.style.display = 'none';
    titResult.style.display = 'none';

    txtDescriptografado = txtInput
    .replaceAll('enter', 'e')
    .replaceAll('ai', 'a')
    .replaceAll('imes', 'i')
    .replaceAll('ufat', 'u')
    .replaceAll('ober', 'o');

    txtResult.textContent = txtDescriptografado;
    inputTraducao.value = ''
    e.preventDefault();

    return txtDescriptografado;
})