let inputTraducao = document.querySelector('#inputTraducao');
let btnCript = document.querySelector('#btnCriptografar');
let btnDescript = document.querySelector('#btnDescriptografar');
let btnCopiar = document.querySelector('#btnCopiar');

let cxResultado = document.querySelector('#cxResultado');
let imgResult = document.querySelector('#imagemResultado');
let titResult = document.querySelector('#tituloResultado');
let txtResult = document.querySelector('#textoResultado');

let txtInput;
let txtCriptografado;
let txtDescriptografado;

function ocultarConteudo() {
    cxResultado.classList.remove('resultado');
    cxResultado.classList.add('resultado__unhidden');
    btnCopiar.classList.remove('resultado__botao');
    btnCopiar.classList.add('resultado__botao__unhidden');
    imgResult.style.display = 'none';
    titResult.style.display = 'none';
}

function exibicaoDoResultado(tipoTxt) {
    txtResult.textContent = tipoTxt;
    inputTraducao.value = '';
}

btnCript.addEventListener('click', function (e) {
    txtInput = inputTraducao.value;
    
    ocultarConteudo();

    txtCriptografado = txtInput
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat');

    exibicaoDoResultado(txtCriptografado);
    e.preventDefault();

    return txtCriptografado;
})

btnDescript.addEventListener('click', function (e) {
    txtInput = inputTraducao.value;

    ocultarConteudo();

    txtDescriptografado = txtInput
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');

    exibicaoDoResultado(txtDescriptografado);
    e.preventDefault();

    return txtDescriptografado;
})

btnCopiar.addEventListener('click', function (e) {
    navigator.clipboard.writeText(txtResult.textContent);
    e.preventDefault();
})