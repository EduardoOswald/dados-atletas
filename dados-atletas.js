class Atleta{
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calculaCategoria(){
        if (this.idade >= 9 && this.idade <= 11){
            return " Infantil";
        } else if (this.idade <= 13){
            return " Juvenil";
        } else if (this.idade <= 15){
            return " Intermediario";
        } else if (this.idade <= 30){
            return " Adulto";
        } else{
            return " Sem categoria";
        }
    }
    calculaIMC(){
        return this.peso / (this.altura * this.altura);        
    }
    calculaMediaValida(){                          
        let notasOrdenadas = this.notas.sort((a, b) => a - b);        
        let notasValidas = notasOrdenadas.slice(1, -1);
                
        let soma = notasValidas.reduce(function(total, atual){
            return total + atual;
        },0)
        return soma / notasValidas.length;        
        }    
    
    obtemNomeAtleta(){
        return this.nome;
    }
    obtemIdadeAtleta(){
        return this.idade;
    }
    obtemPesoAtleta(){
        return this.peso;
    }
    obtemNotasAtleta(){
        return this.notas.join(", ");
    }
    obtemCategoria(){
        return this.calculaCategoria();
    }
    obtemIMC(){
        return this.calculaIMC();
    }
    obtemMediaValida(){
        return this.calculaMediaValida();
    }
}

// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88])

    console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
    console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
    console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
    console.log(`Altura: ${atleta.altura}`);
    console.log(`Notas: ${atleta.obtemNotasAtleta()}`);
    console.log(`Categoria: ${atleta.obtemCategoria()}`);
    console.log(`IMC: ${atleta.obtemIMC()}`);
    console.log(`Média Válida: ${atleta.obtemMediaValida()}`);
    console.log("");
