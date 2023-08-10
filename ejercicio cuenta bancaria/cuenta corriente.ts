import { Cuenta } from "./cuenta";

export class CuentaCorriente extends Cuenta {
    private sobregiro: number;
  
    constructor(saldo: number, tasaAnual: number) {
      super(saldo, tasaAnual);
      this.sobregiro = 0;
    }
  
    retirar(cantidad: number): void {
      if (cantidad < this.saldo) {
        this.sobregiro= cantidad- this.saldo
        if (cantidad > this.saldo) {
          this.sobregiro = cantidad - this.saldo;
          this.saldo = 0;
        } else {
          this.saldo -= cantidad;
        }
        this.numeroretiros++;
      } else {
        console.log("No hay suficiente saldo para realizar el retiro.");
      }
    }
  
    consignar(cantidad: number): void {
      super.consignar(cantidad);
      if (this.sobregiro > 0) {
        if (cantidad <= this.sobregiro) {
          this.sobregiro -= cantidad;
        } else {
          this.sobregiro = 0;
        }
      }
    }
  
    mostrardatos(): void {
      super.mostrardatos();
      console.log(`Sobregiro: $${this.sobregiro.toFixed(2)}`);
    }
  }
