console.log("tá rodando")

function mascara_dinheiro_cifrao()
{
    var dinheiro_formatado = document.getElementsByTagName("input")[2].value

    if (dinheiro_formatado[0]!="R")
    {
        if(dinheiro_formatado[0]!=undefined)
        {
            document.getElementsByTagName("input")[2].value="R"+dinheiro_formatado[0];
        }
    }

    if (dinheiro_formatado[1]!="$")
    {
        if(dinheiro_formatado[1]!=undefined)
        {
            document.getElementsByTagName("input")[2].value=dinheiro_formatado[0]+"$"+dinheiro_formatado[1];
        }
    }
}

function mascara_dinheiro_virgula ()
{
    var dinheiro_formatado = document.getElementsByTagName("input")[2].value;


    if (dinheiro_formatado[dinheiro_formatado.length-3]!=",") 
    {

        if (dinheiro_formatado[dinheiro_formatado.length-2]==",") 
        {

            document.getElementsByTagName("input")[2].value = dinheiro_formatado+"0";
        }
        else
        {

            if (dinheiro_formatado[dinheiro_formatado.length-1]==",") 
            {

                document.getElementsByTagName("input")[2].value = dinheiro_formatado+"00";
            }
            else
            {

                document.getElementsByTagName("input")[2].value = dinheiro_formatado+",00";
            }
        }

    }
}

function moeda(z){
    v = z.value;
    v=v.replace(/\D/g,"")
    z.value = v;
}
