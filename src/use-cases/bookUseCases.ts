import { Book } from "../domain/Book";
import { BookRepository } from "../adapters/repositories/BookRepository";

export class BookUseCases {
    constructor(private bookRepository: BookRepository) {}

    async createBook(title: string, genre: string, publicationDate: Date, authorId: string) {
        const book = new Book(Date.now().toString(), title, genre, publicationDate, authorId);
        return await this.bookRepository.create(book);
    }

    async getAllBooks() {
        return await this.bookRepository.getAll();
    }

    async getBookById(id: string) {
        return await this.bookRepository.getById(id);
    }
}
