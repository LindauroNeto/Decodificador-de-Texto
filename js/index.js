let inputTraducao = document.querySelector('#inputTraducao');
let btnCript = document.querySelector('#btnCriptografar');
let btnDescript = document.querySelector('#btnDescriptografar');

let txtInput;
let inputArray = [];
let inputResultado;

btnCript.addEventListener('click', function (e) {
    txtInput = inputTraducao.value;

    // v Não está funcionando, não sei o por que
    for (let i = 0; i < txtInput.length; i++) {
        switch (txtInput.charAt(i)) {
            case 'e': // e -> enter
                txtInput.replace(txtInput.charAt(i), "enter");
                console.log("achou a letra  e");
            break;

            case 'i': // i -> imes
                txtInput.replace(txtInput.charAt(i), "imes");
                console.log("achou a letra  i");
            break;

            case 'a': // a -> ai
                txtInput.replace(txtInput.charAt(i), "ai");
                console.log("achou a letra  a");
            break;
            
            case 'o': // o -> ober
                txtInput.replace(txtInput.charAt(i), "ober");
                console.log("achou a letra  o");
            break;

            case 'u': // u -> ufat
                txtInput.replace(txtInput.charAt(i), "ufat");
                console.log("achou a letra  u");
            break;

            default:
                console.log("testes")
            break;
        }
        
    }

    e.preventDefault();
    console.log(txtInput);
})