import BookModel from "../schemas/BookSchema";

export class BookRepository {
    async create(bookData: { title: string; genre: string; publicationDate: Date; authorId: number }) {
        return await BookModel.create(bookData);
    }

    async getAll() {
        return await BookModel.findAll();
    }

    async getById(id: number) {
        return await BookModel.findByPk(id);
    }
}
