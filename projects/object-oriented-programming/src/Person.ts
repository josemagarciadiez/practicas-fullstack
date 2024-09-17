// Pilares de la OOP

// 1.   Abstracción
// 2.   Herencia
// 3.   Encapsulamiento
// 4.   Polimorfismo

export class Person {
  // Properties
  private name: string;
  private id: number;

  public constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
  // Getters methods
  public getName(): string {
    return this.name;
  }

  public getId(): number {
    return this.id;
  }

  // Setters methods
  public setName(name: string): void {
    this.name = name;
  }

  public setId(id: number): void {
    this.id = id;
  }
}
