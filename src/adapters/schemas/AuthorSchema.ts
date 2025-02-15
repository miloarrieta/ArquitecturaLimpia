import { DataTypes } from "sequelize";
import { sequelize } from "../../config/database";

const AuthorModel = sequelize.define("Author", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nationality: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    tableName: "authors",
    timestamps: false,
});

export default AuthorModel;
