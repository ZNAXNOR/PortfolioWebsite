import fs from "fs";
import path from "path";

const CREDLY_API_URL = "https://www.credly.com/users/omkar-dalvi-2004/badges.json";
const CERTIFICATIONS_JSON_PATH = path.join(
  process.cwd(),
  "public",
  "certifications.json"
);

export const fetchCertifications = async () => {
  try {
    const response = await fetch(CREDLY_API_URL, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error("Failed to fetch certifications from Credly.");
    }

    const data = await response.json();

    // Save the JSON data to a file for reuse
    fs.writeFileSync(
      CERTIFICATIONS_JSON_PATH,
      JSON.stringify(data, null, 2),
      "utf8"
    );

    return data;
  } catch (error) {
    console.error("Error fetching certifications:", (error as Error).message);

    // If fetch fails, check if cached JSON exists
    if (fs.existsSync(CERTIFICATIONS_JSON_PATH)) {
      const cachedData = fs.readFileSync(CERTIFICATIONS_JSON_PATH, "utf-8");
      return JSON.parse(cachedData);
    }

    throw new Error("No cached data available and API fetch failed.");
  }
};
