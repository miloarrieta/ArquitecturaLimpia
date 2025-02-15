import AuthorModel from "../schemas/AuthorSchema";

export class AuthorRepository {
    async create(authorData: { name: string; nationality: string; birthdate: Date }) {
        return await AuthorModel.create(authorData);
    }

    async getAll() {
        return await AuthorModel.findAll();
    }

    async getById(id: number) {
        return await AuthorModel.findByPk(id);
    }
}
