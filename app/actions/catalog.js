"use server";


import { connectDB } from "@/lyb/mongodb";

import { Catalog } from "@/lyb/models/Catalog";
export async function addCatalogItem(formData) {
  const title = formData.get("title");
  const sifra = formData.get("sifra");
  const image = formData.get("image");
  const cena = Number(formData.get("cena"));

  try {
    await connectDB();
    const newItem = new Catalog({ title, sifra, image, cena });
    await newItem.save();
    return { success: true, message: "Item added successfully!" };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

// Function to fetch all catalog items
export async function getCatalogItems() {
    try {
      await connectDB();
      const items = await Catalog.find().lean();
      return items;
    } catch (error) {
      console.error("Error fetching catalog items:", error);
      return [];
    }
  }