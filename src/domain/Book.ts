export class Book {
    constructor(
        public id: string,
        public title: string,
        public genre: string,
        public publicationDate: Date,
        public authorId: string // Relación con un Autor
    ) {}
}
