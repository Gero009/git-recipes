export class Recipe {
  _name!: string;
  _category?: string;
  _time! : number;
  _description!:string;

  constructor(aName: string , aTime : number, aDescription : string) {
    this.name = aName;
    this.time = aTime;
    this.description = aDescription;
  }
  
  get name(): string {
    return this._name;
  }

  set name(aName: string) {
    const trimmed = aName.trim();
    if (trimmed.length === 0) {
      throw new Error("El nombre de la receta no puede ser vacío.");
    }
    this._name = trimmed;
  }

  get category(): string | undefined {
    return this._category;
  }

  set category(aCategory: string) {
    this._category = aCategory;
  }

  get time(): number {
    return this._time;
  }

  set time(aTime: number) {
    if (aTime <= 0) {
      throw new Error("El tiempo de coccion no puede ser menor a 0.");
    }
    this._time = aTime;
  }

  get description(): string {
    return this._description;
  }

  set description(aDescription: string) {
    const trimmed = aDescription.trim();
    if (trimmed.length === 0) {
      throw new Error("La Descripcion no puede ser vacía.");
    }
    this._description = trimmed;
  }



  toString(): string {
    return `Receta: ${this.name} - categoría: ${this.category} - Descripcion: ${this.description} - Tiempo de coccion: ${this.time} `;
  }
}
