console.log("tá rodando")

function mascara_dinheiro() {
    var dinheiro_formato = document.getElementsByName("dinheiro").value

    if (dinheiro_formato[0] != "R") {
        if (dinheiro_formato[0] != undefined) {
            document.getElementsByName("dinheiro").value = "R$" + dinheiro_formato[0]
        }
    }

    if (dinheiro_formato[1] != "$") {
        if (dinheiro_formato[1] != undefined) {
            document.getElementsByName("dinheiro").value = dinheiro_formato[0] + "$" + dinheiro_formato[1];
        }
    }
}

function mascara_dinheiro_virgula () 
{
    var dinheiro_formato = document.getElementsByName("dinheiro").value;


    if (dinheiro_formato[dinheiro_formato.length-3]!=",") 
    {

        if (dinheiro_formato[dinheiro_formato.length-2]==",") 
        {

            document.getElementById("dinheiro").value = dinheiro_formato+"0";
        }
        else
        {

            if (dinheiro_formato[dinheiro_formato.length-1]==",") 
            {

                document.getElementById("dinheiro").value = dinheiro_formato+"00";
            }
            else
            {

                document.getElementById("dinheiro").value = dinheiro_formato+",00";
            }
        }

    }
  
}

function moeda(z){
    v = document.getElementsByName("dinheiro").value;
    
    v=v.replace(/\D/g,"") // permite digitar apenas numero
}