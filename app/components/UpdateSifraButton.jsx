"use client";

import { useState } from "react";
import { updateSifraString } from "@/app/actions/updateSifraString";

export default function UpdateSifraButton() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    setLoading(true);
    const response = await updateSifraString();
    setMessage(response.message);
    setLoading(false);
  };

  return (
    <div>
      <button
        onClick={handleUpdate}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        {loading ? "Updating..." : "Update Sifra String"}
      </button>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
