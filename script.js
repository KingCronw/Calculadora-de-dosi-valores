
function Calcular() {

    //Pegar o valor dos dois inputs || Take the value of the two inputs //
    var value1 = parseFloat(document.getElementById("value1").value);
    var value2 = parseFloat(document.getElementById("value2").value);

   

    //Formula e calculo ||  Formula and calculation //
    var adição = value1 + value2;
    alert( "A soma dos número fornecidos é: " + adição );

    var subtração = value1 - value2;
    alert( "A subtração dos números fornecidos é: " + subtração );

    var multiplicação = value1 * value2;
    alert( "A multiplicação dos números fornecidos é: " + multiplicação );

    var divisao = value1 / value2;
    alert( "A divisão dos números fornecidos é: " + divisao );

    var potencia = ( value1 + value2 ) ** 2;
    alert( "A potenciação total da soma é: " + potencia );
    
  
    if ( value1 % value2 === 0)  {
        alert( "A soma dos numeros informados é par" );
    }else{
        alert("A soma dos números informados é impar");
    }
}
