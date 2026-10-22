export class Producto{
    // las propiedades deben ser publicas 
    public nombre: string;
    public imagen: string;
    public precio: number;



    constructor(
        nombre: string,
        imagen: string, 
        precio: number
        ){
            this.nombre = nombre;
            this.imagen = imagen;
            this.precio = precio;
        }
}