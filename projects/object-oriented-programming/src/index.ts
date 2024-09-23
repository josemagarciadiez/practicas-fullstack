import {
  Auto,
  Camion,
  Moto,
  RegistroAutomotor,
} from "./models/RegistroAutomotor";

const registro = new RegistroAutomotor();

const camion_1 = new Camion("Volvo", "FM");
const camion_2 = new Camion("Iveco", "Cursor 330");
const camion_3 = new Camion("Mercedes Benz", "1114");

registro.agregarVehiculo(camion_1);
registro.agregarVehiculo(camion_2);
registro.agregarVehiculo(camion_3);

const auto_1 = new Auto("Peugeot", "308");
const auto_2 = new Auto("Volkswagen", "Taos");
const auto_3 = new Auto("Jeep", "Renegade");
const auto_4 = new Auto("Ford", "Focus");

registro.agregarVehiculo(auto_1);
registro.agregarVehiculo(auto_2);
registro.agregarVehiculo(auto_3);
registro.agregarVehiculo(auto_4);

const moto_1 = new Moto("Honda", "Wave200");
const moto_2 = new Moto("Kawasaki", "Ninja");

console.log("----------------------------------")
console.log(registro.listarVehiculos());



console.log("----------------------------------")

registro.agregarVehiculo(moto_1);
registro.agregarVehiculo(moto_2);

registro.eliminarVehiculo(auto_2);

auto_3.setModelo("Compass")

registro.editarVehiculo(auto_3);
console.log(registro.listarVehiculos());
