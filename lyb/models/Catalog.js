import mongoose from "mongoose";

const CatalogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  sifra: { type: Number, required: true, unique: true },
  sifraString: { type: String, default: function() { return this.sifra.toString(); } }, // Auto-generate
  image: { type: String, required: true },
  cena: { type: Number, required: true },
}, { timestamps: true });



export const Catalog = mongoose.models.Catalog || mongoose.model("Catalog", CatalogSchema);
