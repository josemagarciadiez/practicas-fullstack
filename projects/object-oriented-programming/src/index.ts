class Television {
  private isOn: boolean | undefined;

  constructor(isOn: boolean) {
    this.isOn = isOn;
  }

  checkState(): void {
    if (this.isOn) {
      console.log("El televisor esta encendido.");
    } else {
      console.log("El televisor esta apagado.");
    }
  }
  turnOn(): void {
    this.isOn = true;
  }
  turnOff(): void {
    this.isOn = false;
  }
}

const myTv = new Television(false);

myTv.checkState();
myTv.turnOn();
myTv.checkState();
