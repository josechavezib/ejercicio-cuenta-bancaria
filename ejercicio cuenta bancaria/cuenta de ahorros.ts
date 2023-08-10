import { Cuenta } from "./cuenta";

export class CuentaAhorros extends Cuenta {
    private activa: boolean;
  
    constructor(saldo: number, tasaAnual: number) {
      super(saldo, tasaAnual);
      this.activa = saldo >= 10000;
    }
  
    consignar(cantidad: number): void {
      if (this.activa) {
        super.consignar(cantidad);
      } else {
        console.log("La cuenta de ahorros está inactiva. No se puede consignar.");
      }
    }
  
    retirar(cantidad: number): void {
      if (this.activa) {
        super.retirar(cantidad);
      } else {
        console.log("La cuenta de ahorros está inactiva. No se puede retirar.");
      }
    }
  
    extractoMensual(): void {
      if (this.numeroretiros > 4) {
        this.comisionmensual += (this.numeroretiros - 4) * 1000;
      }
      super.extractoMensual();
      this.activa = this.saldo >= 10000;
    }
  
    mostrardatos(): void {
      super.mostrardatos();
      console.log(`Comisión mensual: ${this.comisionmensual}`);
      console.log(`Cuenta activa: ${this.activa}`);
    }
  }
  