let heroName = prompt("Digite o nome do seu Herói:");
let xp = prompt("Digite a quantidade de XP do seu Herói:");

if (xp <= 1000) {
  alert(`O Herói de nome ${heroName} está no nível Ferro.`);
} else if (xp > 1000 && xp <= 2000) {
  alert(`O Herói de nome ${heroName} está no nível Bronze.`);
} else if (xp > 2000 && xp <= 5000) {
  alert(`O Herói de nome ${heroName} está no nível Prata Ouro.`);
} else if (xp > 5000 && xp <= 8000) {
  alert(`O Herói de nome ${heroName} está no nível Platina Diamante.`);
} else if (xp > 8000 && xp <= 9000) {
  alert(`O Herói de nome ${heroName} está no nível Ascendente.`);
} else if (xp > 9000 && xp <= 10000) {
  alert(`O Herói de nome ${heroName} está no nível Imortal.`);
} else if (xp > 10000) {
  alert(`O Herói de nome ${heroName} está no nível Bronze.`);
} else {
  alert(`Quantidade de XP inválida. Comece novamente e digite um outro valor.`);
}