import mongoose from "mongoose";

const RonixSchema = new mongoose.Schema({
  Naziv: { type: String, required: true },
  Ident: { type: Number, required: true, unique: true },
  Zaliha: { type: Number},
  prodazna_cena: { type: Number, required: true },
}, { timestamps: true });



export const Ronix = mongoose.models.Ronix || mongoose.model("Ronix", RonixSchema);
