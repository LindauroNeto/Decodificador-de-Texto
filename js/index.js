let inputTraducao = document.querySelector('#inputTraducao');
let btnCript = document.querySelector('#btnCriptografar');
let btnDescript = document.querySelector('#btnDescriptografar');

let txtInput;
let inputArray = [];

btnCript.addEventListener('click', function (e) {
    txtInput = inputTraducao.value;
    for (let i = 0; i < txtInput.length; i++) {
        inputArray.push(txtInput.charAt(i));
    }

    for (let i = 0; i < inputArray.length; i++) {
        switch (inputArray[i]) {
            case 'e': // e -> enter
                inputArray[i] = "enter"
            break;

            case 'i': // i -> imes
                inputArray[i] = "imes"
            break;

            case 'a': // a -> ai
                inputArray[i] = "ai"
            break;
            
            case 'o': // o -> ober
                inputArray[i] = "ober"
            break;

            case 'u': // u -> ufat
                inputArray[i] = "ufat"
            break;
        
            default:
            break;
        }
        
    }

    e.preventDefault();
})