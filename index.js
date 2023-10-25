
const nome = "Rodrigo";
const xp = 2001;

let msg = "";

// estruturas de if's aninhadas para verificar qual o nível do herói
if  (xp < 1000){
    msg = "Ferro";
}
else if (xp <= 2000 ){
    msg = "Bronze";
}
else if (xp <= 5000 ){
    msg = "Prata";
}
else if (xp <= 7000 ){
    msg = "Ouro";
}
else if (xp <= 8000 ){
    msg = "Platina";
}
else if (xp <= 9000 ){
    msg = "Ascendente";
}
else if (xp <= 10000 ){
    msg = "Imortal";
}
else{
    msg = "Radiante";
}

console.log (`O Herói de nome **${nome}** está no nível de **${msg}**`)