import {Cuenta} from "./cuenta";
import { CuentaCorriente } from "./cuenta corriente";
import { CuentaAhorros } from "./cuenta de ahorros";

// Prueba de las funcionalidades de las cuentas de ahorros y corriente
const cuentaAhorros = new CuentaAhorros(15000, 5);
cuentaAhorros.consignar(2000);
cuentaAhorros.retirar(500);
cuentaAhorros.extractoMensual();
cuentaAhorros.mostrardatos();

const cuentaCorriente = new CuentaCorriente(8000, 3);
cuentaCorriente.consignar(1000);
cuentaCorriente.retirar(3000);
cuentaCorriente.extractoMensual();
cuentaCorriente.mostrardatos();