import mongoose from "mongoose";

const CatalogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  sifra: { type: Number, required: true, unique: true },
  image: { type: String, required: true },
  cena: { type: Number, required: true },
});

export const Catalog = mongoose.models.Catalog || mongoose.model("Catalog", CatalogSchema);
