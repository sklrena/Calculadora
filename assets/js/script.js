function calculadora() {
    const operacao = Number(prompt('Escolha uma operação: \n1 - soma(+)\n2 - subtração(-)\n3 - Multiplicação(*)\n4 - divisão real(/)\n5 - divisão inteira(%)\n6 - potenciação(**)'));

    if(!operacao || operacao >= 7) {
        alert('Erro, opção invalida, selecione outra opção!');
        calculadora();
    }else {
        let n1 = Number(prompt('insira o primeiro valor: '));
        let n2 = Number(prompt('insira o segundo valor: '));
        let resultado;
        
        if(!n1 || !n2) {
            alert('Parâmetros inválidos!');
            calculadora();
        }else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2}  = ${resultado}`);
                novaOperacao()
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao()
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao()
            }
            function divisaoReal() {
                resultado = n1/n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao()
            }
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`A sobra da divisão entre ${n1} e ${n2} é = ${resultado}`);
                novaOperacao()
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`A potenciação de ${n1} sobre ${n2} é = ${resultado}`);
                novaOperacao()
            }
        
            function novaOperacao() {
                let opcao = prompt('Deseja realizar outra operação?\n1 - sim\n2 - não');
        
                if(opcao == 1) {
                    calculadora();
                }else if(opcao == 2) { 
                    alert('Até mais');
                }else {
                    alert('Opção invalida, selecione uma opção valida');
                    novaOperacao(); 
                }
            }
        }
    
        if(operacao == 1) {
            soma();
        }else if(operacao == 2) {
            subtracao();
        }else if(operacao == 3) {
            multiplicacao();
        }else if(operacao == 4) {
            divisaoReal();
        }else if(operacao == 5) {
            divisaoInteira();
        }else if(operacao == 6) {
            potenciacao();
        }
    }
    }

calculadora();