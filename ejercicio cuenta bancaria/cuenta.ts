export class Cuenta {
    protected saldo: number
    protected numeroconsignaciones:number
    protected numeroretiros: number
    protected tasaanual: number
    protected comisionmensual:number

    constructor(saldo:number, tasaanual:number) {
        this.saldo= saldo
        this.tasaanual= tasaanual
        this.numeroconsignaciones=0
        this.numeroretiros=0
        this.comisionmensual=0
    }

    consignar(cantidad:number) {
        this.saldo += cantidad
        this.numeroconsignaciones++;
    }

    retirar(cantidad:number){
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
            this.numeroretiros++;
          } else {
            console.log("No hay suficiente saldo para realizar el retiro.");
          }
    }


    calcularInteresMensual(): void {
        const interes = (this.saldo * this.tasaanual) / 12 / 100;
        this.saldo += interes;
    }

    extractoMensual(): void {
        this.saldo -= this.comisionmensual;
        this.calcularInteresMensual();
    }

    mostrardatos(){
        console.log(`saldo: ${this.saldo}`);
        console.log(`numero de consignaciones: ${this.numeroconsignaciones}`);
        console.log(`numero de retiros: ${this.numeroretiros}`);
        console.log(`tasa anual: ${this.tasaanual}`);
        console.log(`comision mensual: ${this.comisionmensual}`);
    }


}



  
 