document.getElementsByTagName('label')[0].innerHTML = 'Usuário'
document.getElementsByTagName('label')[1].innerHTML = 'Senha'

function Enviar() {
    let inp1 = document.getElementsByTagName('input')[0].value;
    let inp2 = document.getElementsByTagName('input')[1].value;

    let lbl1 = document.getElementsByTagName('label')[0].value;
    let lbl2 = document.getElementsByTagName('label')[1].value;

    inp1 == "" ? document.getElementsByTagName('label')[0].innerHTML = 'Escreva o usuário' : console.log('error');

    inp2 == "" ? document.getElementsByTagName('label')[1].innerHTML = 'Escreva a senha' : console.log('error');
}
