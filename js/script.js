// Seleção de elementos do DOM
const allPass = document.querySelectorAll('.input-pass');
const allLabels = document.querySelectorAll('.lblPass');
const btnSeePass = document.querySelectorAll('.btn-see-pass');

const changePass = document.querySelector('#change-pass');
const newPass = document.querySelector('#new-pass');
const newPassConfirm = document.querySelector('#new-pass-confirm');

const labelPass = document.querySelector('.labelPass'); 
const labelNewPass = document.querySelector('.labelNewPass');   
const labelNewPassConfirm = document.querySelector('.labelNewPassConfirm');

const btnPass = document.querySelector('.btn-see-pass-1');
const btnNewPass = document.querySelector('.btn-see-pass-2');
const btnPassConfirm = document.querySelector('.btn-see-pass-3');

const errorMsgPass = document.querySelector('.message-error-pass');
const errorMsgNewPass = document.querySelector('.message-error-new-pass');
const errorMsgNewPassConfirm = document.querySelector('.message-error-new-pass-confirm');

const btnCancel = document.querySelector('.btn-change-cancel');

const btnSave = document.querySelector('.btn-change-save');

// Funções utilitárias para manipulação de classes
function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}

// Validação de senha
function validatePassword(password) {
    return password && password.length > 6;
}

// Alternar a visibilidade das senhas
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

// Gerenciar classes das labels ao clicar e ao perder foco no input
allPass.forEach((input, index) => {
    input.addEventListener('click', () => {
        addClass(allLabels[index], 'activeLbl');
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            removeClass(allLabels[index], 'activeLbl');
        }
    });
});

// Verificar se as senhas são válidas
function validPass(element, label, btnSeePass, errorMsg) {
    element.addEventListener('input', () => {
        if (validatePassword(element.value)) {
            removeClass(element, 'error-input');
            removeClass(label, 'errorLbl');
            removeClass(btnSeePass, 'errorBtn');
            removeClass(errorMsg, 'show');
        }
    });
}

// Limpar campos
function clean (element, label, btnSeePass, errorMsg){
    removeClass(element, 'error-input');
    removeClass(label, 'errorLbl');
    removeClass(btnSeePass, 'errorBtn');
    removeClass(errorMsg, 'show');
    element.value = '';
}

// Aplicar validações
validPass(changePass, labelPass, btnPass, errorMsgPass);
validPass(newPass, labelNewPass, btnNewPass, errorMsgNewPass);
validPass(newPassConfirm, labelNewPassConfirm, btnPassConfirm, errorMsgNewPassConfirm);

// Validar formulário ao salvar
btnSave.addEventListener('click', () => {
    const isValidPass = validatePassword(changePass.value);
    const isValidNewPass = validatePassword(newPass.value);
    const isValidNewPassConfirm = validatePassword(newPassConfirm.value);

    let validForm = true;

    if (!isValidPass) {
        validForm = false;
        addClass(changePass, 'error-input');
        addClass(labelPass, 'errorLbl');
        addClass(btnPass, 'errorBtn');
        addClass(errorMsgPass, 'show');
    }

    if (!isValidNewPass) {
        validForm = false;
        addClass(newPass, 'error-input');
        addClass(labelNewPass, 'errorLbl');
        addClass(btnNewPass, 'errorBtn');
        addClass(errorMsgNewPass, 'show');
    }

    if (newPassConfirm.value !== newPass.value || !isValidNewPassConfirm) {
        validForm = false;
        addClass(newPassConfirm, 'error-input');
        addClass(labelNewPassConfirm, 'errorLbl');
        addClass(btnPassConfirm, 'errorBtn');
        addClass(errorMsgNewPassConfirm, 'show');
    }

    if (validForm) {
        console.log('Formulário válido, pode prosseguir');
    } else {
        console.log('Formulário inválido, corrija os erros.');
    }
});

// Botão para fechar e cancel a alteração de senha

btnCancel.addEventListener('click', ()=> {
    clean(changePass, labelPass, btnPass, errorMsgPass);
    clean(newPass, labelNewPass, btnNewPass, errorMsgNewPass);
    clean(newPassConfirm, labelNewPassConfirm, btnPassConfirm, errorMsgNewPassConfirm);
});