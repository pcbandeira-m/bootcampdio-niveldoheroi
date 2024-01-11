# Desafio Classificador de nível de Herói

**O que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

- Se XP for menor que 1.000 = Ferro
- Se XP for entre 1.001 e 2.000 = Bronze
- Se XP for entre 2.001 e 5.000 = Prata Ouro
- Se XP for entre 5.001 e 8.000 = Platina Diamante
- Se XP for entre 8.001 e 9.000 = Ascendente
- Se XP for entre 9.001 e 100.000 = Imortal
- Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final, deve-se exibir uma mensagem:
<br>
"O Herói de nome **{nome}** está no nível de **{nivel}**."

<br>

**Observação da desenvolvedora:**
Notei uma pequena falha na proposta do projeto no que se refere aos intervalos de XP para classificação de nível do Herói, pois não há igualdade para os valores escolhidos, apenas referência de "maior que" ou "menor que". Sendo assim, realizei o ajuste igualando tomando por referência o primeiro nível.