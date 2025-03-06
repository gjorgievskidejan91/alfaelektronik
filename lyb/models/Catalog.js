import mongoose from "mongoose";

const CatalogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    sifra: { type: Number, required: true, unique: true },
    image: { type: String, required: true },
    cena: { type: Number, required: true }
  },
  { timestamps: true } // This will add createdAt and updatedAt fields automatically
);



export const Catalog = mongoose.models.Catalog || mongoose.model("Catalog", CatalogSchema);
