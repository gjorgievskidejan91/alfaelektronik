'use server'

import { Ronix } from "@/lyb/models/Ronix"
import { connectDB } from "@/lyb/mongodb"


export async function getRonixItems(){
    try {
        await connectDB()
        const items = await Ronix.find()
        // console.log(items)
        return items
    } catch (error) {
        console.error('Error fetching catalog items:', error);
        return [];
    }
}