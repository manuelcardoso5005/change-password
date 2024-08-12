// Pegar os dados do DOM
const allPass = document.querySelectorAll('.input-pass');
const allLabels = document.querySelectorAll('.lblPass');
const btnSeePass = document.querySelectorAll('.btn-see-pass');

const changePass = document.querySelector('#change-pass');
const newPass = document.querySelector('#new-pass');

const labelPass = document.querySelector('.labelPass'); 
const labelNewPass = document.querySelector('.labelNewPass');   


const btnSeePas1 = document.querySelector('.btn-see-pass-1');

const errorMsgPass = document.querySelector('.message-error-pass');

const btnSave = document.querySelector('.btn-change-save');

// Função para adicionar uma classe
function addClass(element, className) {
    element.classList.add(className);
}

// Função para remover uma classe
function removeClass(element, className) {
    element.classList.remove(className);
}

// Verifica se a senha não está vazia e tem mais de 6 caracteres
function validatePassword(password) {
    if (password && password.length > 6) {
        return true; // Senha válida
    } else {
        return false; // Senha inválida
    }
}

// Alternar a visibilidade da senha
btnSeePass.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const input = allPass[index];
        
        if (input.type === 'password') {
            input.type = 'text';
            removeClass(btn, 'bi-eye');
            addClass(btn, 'bi-eye-slash');
        } else {
            input.type = 'password';
            removeClass(btn, 'bi-eye-slash');
            addClass(btn, 'bi-eye');
        }
    });
});

// Adicionar a classe "activeLbl" à label correspondente quando o input é clicado
allPass.forEach((input, index) => {
    input.addEventListener('click', () => {
        addClass(allLabels[index], 'activeLbl');
    });

    // Remover a classe "activeLbl" quando o input perde o foco e está vazio
    input.addEventListener('blur', () => {
        if (input.value === '') {
            removeClass(allLabels[index], 'activeLbl');
        }
    });
});

function validPass(element, label, btnSeePass, errorMsg){
    element.addEventListener('input', ()=> {
        if(validatePassword(element.value)){
            removeClass(element, 'error-input');
            removeClass(label, 'errorLbl');
            removeClass(btnSeePass, 'errorBtn');
            removeClass(errorMsg, 'show');
        }
    });
}

validPass(changePass, labelPass, btnSeePas1, errorMsgPass);

btnSave.addEventListener('click', () => {
    const isValidPass = validatePassword(changePass.value);

    let validForm = true; // Use 'let' para permitir a reatribuição

    if (!isValidPass) {
        validForm = false;
        addClass(changePass, 'error-input');
        addClass(labelPass, 'errorLbl');
        addClass(btnSeePas1, 'errorBtn');
        addClass(errorMsgPass, 'show');
        console.log('nao avança');
    }

    // Aqui você pode adicionar mais validações e lógica para o envio do formulário
    if (validForm) {
        console.log('Formulário válido, pode prosseguir');
        // Lógica para salvar as alterações ou prosseguir com o formulário
    }
});
