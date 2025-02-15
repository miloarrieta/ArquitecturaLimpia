async getAuthorById(id: string) {
    const authorId = parseInt(id, 10); // Convertimos el string a number
    if (isNaN(authorId)) {
        throw new Error("Invalid ID format");
    }
    return await this.authorRepository.getById(authorId);
}
