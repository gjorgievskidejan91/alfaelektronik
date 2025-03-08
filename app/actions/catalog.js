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
export async function getCatalogItems(searchTerm = '') {
  console.log(searchTerm);
  try {
    await connectDB();

    // Search query
    const query = searchTerm
      ? {
          $or: [
            { title: { $regex: searchTerm, $options: 'i' } }, // Case-insensitive search on title
            { sifraString: { $regex: searchTerm, $options: 'i' } }, // Search sifraString
          ],
        }
      : {}; // No filter if no search term

    const items = await Catalog.find(query)
      .sort({ createdAt: -1 })
      .lean();

    const formattedItems = items.map(item => ({
      ...item,
      _id: item._id.toString(),
    }));

    return formattedItems;
  } catch (error) {
    console.error('Error fetching catalog items:', error);
    return [];
  }
}
