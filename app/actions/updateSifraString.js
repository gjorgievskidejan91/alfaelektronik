"use server";

import { connectDB } from "@/lyb/mongodb";
import { Catalog } from "@/lyb/models/Catalog";

export async function updateSifraString() {
  try {
    await connectDB();

    await Catalog.updateMany(
      {}, // Update all documents
      [{ $set: { sifraString: { $toString: "$sifra" } } }]
    );

    return { success: true, message: "✅ sifraString field updated successfully!" };
  } catch (error) {
    console.error("❌ Error updating sifraString:", error);
    return { success: false, message: "❌ Failed to update sifraString." };
  }
}
