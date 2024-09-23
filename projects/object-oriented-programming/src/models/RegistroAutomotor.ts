import { v4 as uuidv4 } from "uuid";

type TVehiculo = "auto" | "moto" | "camion";
type Vehiculo = Auto | Moto | Camion;

export class RegistroAutomotor {
  // Al no utilizar herencia
  // se declaran diferentes propiedades
  // para cada tipo de vehiculo
  private autos: Auto[];
  private motos: Moto[];
  private camiones: Camion[];

  constructor() {
    this.autos = [];
    this.motos = [];
    this.camiones = [];
  }

  public listarVehiculos(type?: TVehiculo): Auto[] | Moto[] | Camion[] | any {
    if (type === undefined) {
      return {
        autos: this.autos,
        motos: this.motos,
        camiones: this.camiones,
      };
    }
    if (type === "auto") {
      return this.autos;
    } else if (type === "moto") {
      return this.motos;
    } else {
      return this.camiones;
    }
  }

  public agregarVehiculo(vehiculo: Vehiculo) {
    if (vehiculo instanceof Auto) {
      this.autos.push(vehiculo);
    } else if (vehiculo instanceof Moto) {
      this.motos.push(vehiculo);
    } else {
      this.camiones.push(vehiculo);
    }
  }

  public eliminarVehiculo(vehiculo: Vehiculo) {
    if (vehiculo instanceof Auto) {
      this.autos = this.autos.filter((v) => v.getId() != vehiculo.getId());
    } else if (vehiculo instanceof Moto) {
      this.motos = this.motos.filter((v) => v.getId() != vehiculo.getId());
    } else {
      this.camiones = this.camiones.filter(
        (v) => v.getId() != vehiculo.getId()
      );
    }
  }

  public editarVehiculo(vehiculo: Vehiculo) {
    if (vehiculo instanceof Auto) {
      const index = this.autos.findIndex((v) => v.getId() === vehiculo.getId());
      this.autos[index] = vehiculo;
    } else if (vehiculo instanceof Moto) {
      const index = this.motos.findIndex((v) => v.getId() === vehiculo.getId());
      this.motos[index] = vehiculo;
    } else {
      const index = this.camiones.findIndex(
        (v) => v.getId() === vehiculo.getId()
      );
      this.camiones[index] = vehiculo;
    }
  }
}

export class Auto {
  private id: string;
  private marca: string;
  private modelo: string;
  constructor(marca: string, modelo: string, id?: string) {
    this.marca = marca;
    this.modelo = modelo;
    this.id = id ? id : uuidv4();
  }
  public getId(): string {
    return this.id;
  }
  public getMarca(): string {
    return this.marca;
  }
  public getModelo(): string {
    return this.modelo;
  }

  public setMarca(marca: string): void {
    this.marca = marca;
  }

  public setModelo(modelo: string): void {
    this.modelo = modelo;
  }
}

export class Moto {
  private id: string;
  private marca: string;
  private modelo: string;
  constructor(marca: string, modelo: string, id?: string) {
    this.marca = marca;
    this.modelo = modelo;
    this.id = id ? id : uuidv4();
  }
  public getId(): string {
    return this.id;
  }
  public getMarca(): string {
    return this.marca;
  }
  public getModelo(): string {
    return this.modelo;
  }
  public setMarca(marca: string): void {
    this.marca = marca;
  }

  public setModelo(modelo: string): void {
    this.modelo = modelo;
  }
}

export class Camion {
  private id: string;
  private marca: string;
  private modelo: string;
  constructor(marca: string, modelo: string, id?: string) {
    this.marca = marca;
    this.modelo = modelo;
    this.id = id ? id : uuidv4();
  }
  public getId(): string {
    return this.id;
  }
  public getMarca(): string {
    return this.marca;
  }
  public getModelo(): string {
    return this.modelo;
  }
  public setMarca(marca: string): void {
    this.marca = marca;
  }

  public setModelo(modelo: string): void {
    this.modelo = modelo;
  }
}
