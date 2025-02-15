import express from "express";
import { connectDB, sequelize } from "./config/database";
import authorRoutes from "./routes/authorRoutes";
import bookRoutes from "./routes/bookRoutes";
import AuthorModel from "./adapters/schemas/AuthorSchema";
import BookModel from "./adapters/schemas/BookSchema";

const app = express();
app.use(express.json());

app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);

const startServer = async () => {
    await connectDB();
    await sequelize.sync(); // Crea las tablas si no existen
    console.log("📦 Database synchronized");

    app.listen(3000, () => console.log("🚀 Server running on port 3000"));
};

startServer();
