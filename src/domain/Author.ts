export class Author {
    constructor(
        public id: string,
        public name: string,
        public nationality: string,
        public birthdate: Date,
        public books: string[] = [] // Relación con libros (IDs)
    ) {}
}
