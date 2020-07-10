class Pessoa {
  constructor(nome, altura, peso) {
    this.nome = nome;
    this.altura;
    this.peso;
  }
}

class Vingador extends Pessoa {
  constructor(nome, altura, peso, poderes, temArmadura, isMembroFundador) {
    super(nome, altura, peso);
    this.poderes = poderes;
    this.temArmadura = temArmadura;
    this.isMembroFundador = isMembroFundador;
  }

  lutar() {
    alert(`${this.nome} está lutando usando ${this.poderes[0]}`);
  }
}

const thor = new Vingador(
  "Thor",
  "1.85",
  "100kg",
  ["Super Força", "Raio"],
  true,
  true
);

const starLord = new Vingador(
  "Peter Quill",
  "1.90",
  "83kg"[
    ("Ótimo Atirador",
    "Mestre em Combate Corpo-a-Corpo",
    "Grande Estrategista",
    "Piloto",
    "Conhecimento Universal")
  ],
  true,
  false
);

document.getElementById("lutar").onclick = function () {
  thor.lutar();
};

class OperaçoesMatematicas {
  static soma(a, b) {
    return a + b;
  }
}

const sum = OperaçoesMatematicas.soma(1, 3);

alert(sum);
