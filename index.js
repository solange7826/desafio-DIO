// Defina o nome e a quantidade de experiência (XP) do herói
let nomeDoHeroi = "Grande";
let experienciaDoHeroi = 10000; // Altere o valor para testar diferentes níveis

// Utilize uma estrutura de decisão para determinar o nível do herói
let nivelDoHeroi;

if (experienciaDoHeroi < 1000) {
    nivelDoHeroi = "Ferro";
} else if (experienciaDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (experienciaDoHeroi <= 5000) {
    nivelDoHeroi = "Prata";
} else if (experienciaDoHeroi <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (experienciaDoHeroi <= 8000) {
    nivelDoHeroi = "Platina";
} else if (experienciaDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (experienciaDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

// Exiba a mensagem com o nome e o nível do herói
console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);
