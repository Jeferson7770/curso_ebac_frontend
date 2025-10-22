// Classe base (abstração)
class Personagem {
    constructor(nome, pontosDeVida, poder) {
        this.nome = nome;
        this.pontosDeVida = pontosDeVida;
        this.poder = poder;
    }

    atacar() {
        console.log(`${this.nome} está atacando com ${this.poder}!`);
    }

    defender() {
        console.log(`${this.nome} está se defendendo!`);
    }
}

// Classes herdeiras
class Mago extends Personagem {
    conjurarMagia() {
        console.log(`${this.nome} lançou uma magia poderosa de ${this.poder}! ✨`);
    }

    defender() {
        console.log(`${this.nome} criou um escudo mágico de energia arcana! 🔮`);
    }
}

class Guerreiro extends Personagem {
    usarEspada() {
        console.log(`${this.nome} se esquivou habilmente com ${this.poder}! ⚔️`);
    }

    defender() {
        console.log(`${this.nome} levantou o escudo e bloqueou o golpe! 🛡️`);
    }
}

class Paladino extends Personagem {
    curarAliado() {
        console.log(`${this.nome} usou ${this.poder} para curar um aliado! 🔥`);
    }

    defender() {
        console.log(`${this.nome} invocou uma aura divina para se proteger! ☀️`);
    }
}

// Instâncias (objetos)
const mago = new Mago("Baltasar", 200, "Arcanismo");
const guerreiro = new Guerreiro("Yasuke", 500, "Fúria do Samurai");
const paladino = new Paladino("Malcolm", 350, "Chama Sagrada");

// Testando os métodos
mago.atacar();
mago.conjurarMagia();
mago.defender();

guerreiro.atacar();
guerreiro.usarEspada();
guerreiro.defender();

paladino.atacar();
paladino.curarAliado();
paladino.defender();

// Mostrando no terminal 
console.table([
  { Classe: "Mago", Nome: mago.nome, Vida: mago.pontosDeVida, Poder: mago.poder },
  { Classe: "Guerreiro", Nome: guerreiro.nome, Vida: guerreiro.pontosDeVida, Poder: guerreiro.poder },
  { Classe: "Paladino", Nome: paladino.nome, Vida: paladino.pontosDeVida, Poder: paladino.poder }
]);
