export class Car {
    private color: string = "white";

    constructor(private model:string, private make:string){

    };

    getColor(): string {
        return this.color;
    }

    getMake(): string {
        return this.make;
    }
}