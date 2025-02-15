import { DataTypes } from "sequelize";
import { sequelize } from "../../config/database";
import AuthorModel from "./AuthorSchema";

const BookModel = sequelize.define("Book", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    publicationDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: AuthorModel,
            key: "id",
        }
    }
}, {
    tableName: "books",
    timestamps: false,
});

// Definir la relación entre Autor y Libro
AuthorModel.hasMany(BookModel, { foreignKey: "authorId" });
BookModel.belongsTo(AuthorModel, { foreignKey: "authorId" });

export default BookModel;
