document.getElementsByClassName('form-control')[0].placeholder = 'E-mail';
    document.getElementsByClassName('form-control')[1].placeholder = 'Senha';
    document.getElementsByClassName('form-control')[2].placeholder = 'CPF';
    document.getElementsByClassName('form-control')[3].placeholder = 'Telefone';

    document.getElementsByTagName('label')[0].innerHTML = 'E-mail';
    document.getElementsByTagName('label')[1].innerHTML = 'Senha';
    document.getElementsByTagName('label')[2].innerHTML = 'CPF';
    document.getElementsByTagName('label')[3].innerHTML = 'Telefone';

    function mascara_telefone()
        {
            
         var tel = document.getElementById("telefone").value
            console.log(tel)
            tel=tel.slice(0,14) 
            console.log(tel)
            document.getElementById("telefone").value=tel
            tel=document.getElementById("telefone").value.slice(0,10)
            console.log(tel)
           
            //máscara
            var tel_formatado = document.getElementById("telefone").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
        }

    function mascara_cpf()

        { 
            var cpf_formatado = document.getElementById("cpf").value

            var cpf = document.getElementById("cpf").value
            console.log(cpf)
            cpf=cpf.slice(0,14) 
            console.log(cpf)
            document.getElementById("cpf").value = cpf
            cpf=document.getElementById("cpf").value.slice(0,10)
            console.log(cpf)
            //xxx.xxx.xxx-xx
            //012 3 456 7 89D '11' pu
            if (cpf_formatado[3]!=".")
            {
                if (cpf_formatado[3]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,3)+"."+cpf_formatado[3];
                }
            }

            if (cpf_formatado[7]!=".")
            {
                if (cpf_formatado[7]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,7)+"."+cpf_formatado[7];
                }
            }

            if (cpf_formatado[11]!="-")
            {
                if (cpf_formatado[11]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,11)+"."+cpf_formatado[11];
                }
            }
        
            if (cpf_formatado[11]!="-")
            {
                if(cpf_formatado[11]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,11)+"-"+cpf_formatado[11]
                }
            }

        }       