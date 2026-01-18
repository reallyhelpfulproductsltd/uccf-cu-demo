/**
 * Temporary inspection script to understand
 * the UCCF Christian Unions API response structure.
 */

const API_URL = "https://v1.data.uccf.io/api/christian-unions/expand";

async function run() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const json = await response.json();

    console.log("FULL RESPONSE (truncated):");
    console.log(
      JSON.stringify(json, null, 2).slice(0, 3000)
    );

  } catch (error) {
    console.error("Error:", error.message);
  }
}

run();
