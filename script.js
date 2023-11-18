
   //função para Altura do gancho 
function evalInput(strInput) {
    // Valor fixo
    var valorFixo = "alturadogancho=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }
    
    //função para o Altura do quadril 
		function evalInput1(strInput) {
    // Valor fixo
    var valorFixo = "alturadoquadril=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }

//função para a altura do cintura 
		function evalInput2(strInput) {
    // Valor fixo
    var valorFixo = "cintura=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }
    
    //função para o comprimento do joelho
		function evalInput3(strInput) {
    // Valor fixo
    var valorFixo = "comprimentodojoelho=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }

 //função para o comprimento total 
		function evalInput4(strInput) {
    // Valor fixo
    var valorFixo = "comprimentototal=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }

 //função para o largura da barra
		function evalInput5(strInput) {
    // Valor fixo
    var valorFixo = "larguradabarra=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }



//função para o quadril
		function evalInput6(strInput) {
    // Valor fixo
    var valorFixo = "quadril=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }


function enviarValores() {
	    var alturaGanchoValue = document.getElementsByName('inputField')[0].value;
            var alturaQuadrilValue = document.getElementsByName('inputField1')[0].value;
            var cinturaValue = document.getElementsByName('inputField2')[0].value;
            var comprimentodoJoelhoValue = document.getElementsByName('inputField3')[0].value;
            var comprimentoTotalValue = document.getElementsByName('inputField4')[0].value;
            var larguradaBarraValue = document.getElementsByName('inputField5')[0].value;
            var quadrilValue = document.getElementsByName('inputField6')[0].value;

            evalInput(alturaGanchoValue);
            evalInput1(alturaQuadrilValue);
            evalInput2(cinturaValue);
            evalInput3(comprimentodoJoelhoValue);
	    evalInput4(comprimentoTotalValue);
            evalInput5(larguradaBarraValue);
	evalInput6(quadrilValue);
		    }
