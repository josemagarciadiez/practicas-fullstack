class Motor {
  private tipo: "nafta" | "diesel";
  private esTurbo: boolean;
  private litros: "1.4" | "1.6" | "2.0";

  public constructor(
    tipo: "nafta" | "diesel",
    litros: "1.4" | "1.6" | "2.0",
    esTurbo?: boolean
  ) {
    this.tipo = tipo;
    this.esTurbo = esTurbo ? esTurbo : false;
    this.litros = litros;
  }

  public getTipo(): "nafta" | "diesel" {
    return this.tipo;
  }

  public checkTurbo(): boolean {
    return this.esTurbo;
  }

  public getLitros(): "1.4" | "1.6" | "2.0" {
    return this.litros;
  }
}

class Rueda {
  private rodado: number;

  public constructor(rodado: number) {
    this.rodado = rodado;
  }

  public getRodado(): number {
    return this.rodado;
  }
}

class Aut {
  private marca: string;
  private modelo: string;
  private version: string;
  private año: string;
  private motor: Motor;
  private ruedas: Rueda[];

  public constructor(
    marca: string,
    modelo: string,
    version: string,
    motor: Motor,
    ruedas: Rueda[],
    año?: string
  ) {
    this.marca = marca;
    this.modelo = modelo;
    this.version = version;
    this.motor = motor;
    this.ruedas = ruedas;
    this.año = año ? año : "2024";
  }
}
