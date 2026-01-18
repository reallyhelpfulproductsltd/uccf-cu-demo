/**
 * Fetches and displays a list of Christian Unions
 * from UCCF's public API in a readable format.
 *
 * Designed to be simple, defensive, and easy to understand.
 */

const API_URL = "https://v1.data.uccf.io/api/christian-unions/expand";

async function fetchChristianUnions() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const json = await response.json();

    // --- DEBUG (safe to leave in for this exercise) ---
    console.log("Top-level keys:", Object.keys(json));
    if (json.data) {
      console.log("Data-level keys:", Object.keys(json.data));
    }

    /**
     * The API response is nested.
     * We defensively look for an array of Christian Unions
     * rather than assuming a fixed structure.
     */

    if (Array.isArray(json.data)) {
      return json.data;
    }

    if (json.data?.items && Array.isArray(json.data.items)) {
      return json.data.items;
    }

    if (json.data?.christianUnions && Array.isArray(json.data.christianUnions)) {
      return json.data.christianUnions;
    }

    // Fallback: search for the first array in data
    for (const value of Object.values(json.data || {})) {
      if (Array.isArray(value)) {
        return value;
      }
    }

    return [];
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }
}

function displayChristianUnions(unions) {
  if (!Array.isArray(unions) || unions.length === 0) {
    console.log("No Christian Unions found.");
    return;
  }

  console.log("\nChristian Unions");
  console.log("----------------\n");

  unions.forEach((cu, index) => {
    console.log(`${index + 1}. ${cu.name || "Unnamed Christian Union"}`);

    if (cu.institution?.name) {
      console.log(`   Institution: ${cu.institution.name}`);
    }

    if (cu.location?.city) {
      console.log(`   Location: ${cu.location.city}`);
    }

    console.log("");
  });
}

async function run() {
  const unions = await fetchChristianUnions();
  displayChristianUnions(unions);
}

run();
