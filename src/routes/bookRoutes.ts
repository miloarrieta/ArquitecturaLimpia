import express from "express";
import { BookUseCases } from "../use-cases/bookUseCases";
import { BookRepository } from "../adapters/repositories/BookRepository";

const router = express.Router();
const bookUseCases = new BookUseCases(new BookRepository());

router.post("/", async (req, res) => {
    const { title, genre, publicationDate, authorId } = req.body;
    const book = await bookUseCases.createBook(title, genre, new Date(publicationDate), authorId);
    res.json(book);
});

router.get("/", async (_, res) => {
    const books = await bookUseCases.getAllBooks();
    res.json(books);
});

export default router;
