function mostrarTabela(nome,salario){
    var salarioBruto = 0.0
    var total_inss = 0.0
    var Imposto = 0.0
    var teto = "Acima do teto INSS 2022"
    var Insento = 'Insento'

    salarioBruto = salario
    if(salarioBruto <= 1212.00){
       total_inss = salario * (7.5/100)
       total_inss = total_inss.toFixed(2)
    }
    else if(salarioBruto > 1212.00 && salarioBruto <= 2427.35){
       total_inss = salario * (9/100)
       total_inss = total_inss.toFixed(2)
    }
    else if(salarioBruto > 2427.36 && salarioBruto <= 3641.03){
       total_inss = salario * (12/100)
       total_inss = total_inss.toFixed(2)
    }
    else if(salarioBruto > 3641.04 && salarioBruto <= 7087.22){
       total_inss = salario * (14/100)
       total_inss = total_inss.toFixed(2)
   }
   else{
       total_inss = teto
   }

   Imposto = salario
   if(Imposto >= 0 && Imposto <= 1903.98){
       Imposto = Insento
   }
   else if(Imposto >= 1903.99 && Imposto <= 2826.65){
       Imposto = ((salario / 100) * 7.5)
       Imposto = Imposto.toFixed(2)
   }
   else if(Imposto >= 2826.66 && Imposto <= 3751.05){
       Imposto = ((salario / 100) * 15)
       Imposto = Imposto.toFixed(2)
   } 
   else if(Imposto >= 3751.06 && Imposto <= 4664.68){
       Imposto = ((salario / 100) * 22.50)
       Imposto = Imposto.toFixed(2)
   }
   else if(Imposto > 4664.68){
       Imposto = ((salario / 100) * 27.50)
       Imposto = Imposto.toFixed(2)
   }
   
    var tb = document.getElementById("tabela");
    var quantidadelinhas = tb.rows.length;
    var linha = tb.insertRow(quantidadelinhas);
    
    var colunaNome = linha.insertCell(0);
    var colunaINSS = linha.insertCell(1);
    var colunaImposto = linha.insertCell(2)

    colunaNome.innerHTML= nome;
    colunaINSS.innerHTML = total_inss
    colunaImposto.innerHTML = Imposto
}