import { Sequelize } from "sequelize";

// Configuración de la base de datos SQLite con Sequelize
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite", // Archivo de la base de datos
    logging: false, // Deshabilita logs de SQL en la consola
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("🔥 SQLite Database Connected");
    } catch (error) {
        console.error("❌ Error connecting to SQLite", error);
    }
};

export { sequelize, connectDB };
