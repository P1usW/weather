"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserModel = new mongoose_1.default.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, require: true },
    weatherHistory: { type: [{ city: String, temp: Number, wind: Number, rainfall: Number }] }
});
exports.default = mongoose_1.default.model('User', UserModel);
