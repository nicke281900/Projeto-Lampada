const calcular = document.getElementById('calcular');
function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !=='' && altura !=='' && peso !==''){

       const valorIMC =(peso /(altura * altura)).toFixed(1);
       
       let classificacao = '';
        if(valorIMC < 18.5){
            classificacao = 'pareciendo un pallilo de fosforo, se cuida';
            }
            else if(valorIMC < 25){
                classificacao = 'con el peso normal';
            }else if(valorIMC < 30){
                classificacao = 'levemente acima del peso';
            }else if(valorIMC < 35){
                classificacao = 'con obesidade nivel 1';

            }else if(valorIMC <40){
                classificacao = 'con obesidade nivel 2';
            }else{
                classificacao = 'con obesidad nivel 3. se cuide !!'; 
            }
            resultado.textContent = `${nome} su IMC és de ${valorIMC} e usted está ${classificacao}`
            }
             else{
        resultado.textContent = 'Preencha todos los canpos';
                 }
            }
calcular.addEventListener('click', imc);