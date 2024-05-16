// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

const hero = {
    name: "",
    exp: function(name,number){
        this.name = name;
        if (number < 1000) {
            return `O Herói de nome ${this.name} está no nível de Ferro`
        } else if (number < 2000) {
            return `O Herói de nome ${this.name} está no nível de Bronze`
        } else if (number < 5000){
            return `O Herói de nome ${this.name} está no nível de Prata`
        } else if (number < 7000){
            return `O Herói de nome ${this.name} está no nível de Ouro`
        } else if (number < 8000){
            return `O Herói de nome ${this.name} está no nível de Platina`
        } else if (number < 9000){
            return `O Herói de nome ${this.name} está no nível de Ascendente`
        } else if (number < 10000){
            return `O Herói de nome ${this.name} está no nível de Imortal`
        } else {
            return `O Herói de nome ${this.name} está no nível de Radiante`
        }
    }
}

console.log(hero.exp('Christiano', 50000));
