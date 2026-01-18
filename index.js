/**
 * Simple script to fetch and display Christian Union data
 * from UCCF public API in a friendly format.
 */

const API_URL = "https://v1.data.uccf.io/api/christian-unions/expand";

async function fetchChristianUnions() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.data || [];
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

  console.log("\nChristian Unions\n----------------\n");

  unions.forEach((cu) => {
    console.log(`• ${cu.name}`);
    if (cu.institution?.name) {
      console.log(`  Institution: ${cu.institution.name}`);
    }
    if (cu.location?.city) {
      console.log(`  Location: ${cu.location.city}`);
    }
    console.log("");
  });
}

async function run() {
  const unions = await fetchChristianUnions();
  displayChristianUnions(unions);
}

run();
