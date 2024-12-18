# Dados dos Atletas

Este projeto implementa a classe `Atleta` em JavaScript, que modela um atleta com atributos como nome, idade, peso, altura e notas de desempenho. A classe oferece métodos para calcular a categoria, o IMC, e a média válida das notas do atleta.

## Tecnologias Utilizadas

- **JavaScript**: Linguagem utilizada para implementar a lógica do código.

## Estrutura da Classe

### Construtor
O construtor inicializa os atributos do atleta:

```javascript
constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
}
```

### Métodos Principais

#### `calculaCategoria()`
Determina a categoria do atleta com base na idade:
- **Infantil**: 9 a 11 anos
- **Juvenil**: até 13 anos
- **Intermediário**: até 15 anos
- **Adulto**: até 30 anos
- **Sem categoria**: até 9 anos ou acima de 30 anos

#### `calculaIMC()`
Calcula o Índice de Massa Corporal (IMC) usando a fórmula:

imc = peso / (altura x altura)

#### `calculaMediaValida()`
Calcula a média válida das notas do atleta:
1. Ordena as notas em ordem crescente.
2. Remove a menor e a maior nota.
3. Calcula a média das notas restantes.

#### Métodos de Obtenção de Dados
Os métodos a seguir retornam os dados do atleta:
- `obtemNomeAtleta()`
- `obtemIdadeAtleta()`
- `obtemPesoAtleta()`
- `obtemNotasAtleta()`
- `obtemCategoria()`
- `obtemIMC()`
- `obtemMediaValida()`

### Exemplo de Uso

O exemplo abaixo demonstra como usar a classe `Atleta`:

```javascript
const atleta = new Atleta(
    "Cesar Abascal",
    30,
    80,
    1.70,
    [10, 9.34, 8.42, 10, 7.88]
);

console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.altura}`);
console.log(`Notas: ${atleta.obtemNotasAtleta()}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média Válida: ${atleta.obtemMediaValida()}`);
```

### Saída Esperada

```text
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10, 9.34, 8.42, 10, 7.88
Categoria: Adulto
IMC: 27.68
Média Válida: 9.25
```
## Conceitos Aplicados

  - Implementação de classe.
  - Uso de construtor.
  - Uso de comparação com `if()` e `else()`.

- **Manipulação de Arrays**:
  - Uso de `sort()` para ordenar as notas.
  - Uso de `slice()` para selecionar as notas válidas.
  - Uso de `reduce()` para calcular a soma das notas.

Sinta-se à vontade para adaptar o código às suas necessidades ou expandi-lo com mais funcionalidades.
