document.getElementsByTagName('label')[0].innerHTML = 'Administrador'
document.getElementsByTagName('label')[1].innerHTML = 'Senha'

function Enviar() {
    let inp1 = document.getElementsByTagName('input')[0].value;
    let inp2 = document.getElementsByTagName('input')[1].value;

    let lbl1 = document.getElementsByTagName('label')[0].value;
    let lbl2 = document.getElementsByTagName('label')[1].value;

    inp1 == "" ? document.getElementsByTagName('label')[0].innerHTML = 'Cadastre seu e-mail' : window.alert('confirmado');

    inp2 == "" ? document.getElementsByTagName('label')[1].innerHTML = 'Escreva uma senha' : window.alert('confirmado');
    
}
