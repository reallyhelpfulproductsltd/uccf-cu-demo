/**
 * Fetches and displays a list of Christian Unions
 * from UCCF's public API in a readable format.
 *
 * This script assumes the API returns a top-level array
 * of Christian Union objects (as confirmed by inspection).
 */

const API_URL = "https://v1.data.uccf.io/api/christian-unions/expand";

async function fetchChristianUnions() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Unexpected API response format");
    }

    return data;
  } catch (error) {
    console.error("Error fetching Christian Unions:", error.message);
    return [];
  }
}

function displayChristianUnions(unions) {
  if (unions.length === 0) {
    console.log("No Christian Unions found.");
    return;
  }

  console.log("\nChristian Unions");
  console.log("----------------\n");

  unions.forEach((cu, index) => {
    console.log(`${index + 1}. ${cu.name}`);

    if (cu.full_name) {
      console.log(`   Full name: ${cu.full_name}`);
    }

    if (cu.institutions && cu.institutions.length > 0) {
      const institution = cu.institutions[0];
      console.log(`   Institution: ${institution.name}`);

      if (institution.region?.name) {
        console.log(`   Region: ${institution.region.name}`);
      }
    }

    if (cu.website) {
      console.log(`   Website: ${cu.website}`);
    }

    console.log("");
  });
}

async function run() {
  const unions = await fetchChristianUnions();
  displayChristianUnions(unions);
}

run();
