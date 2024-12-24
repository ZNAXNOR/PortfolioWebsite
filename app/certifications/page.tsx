import React from "react";

type Certification = {
  badge_template: {
    image_url: string;
    name: string;
    organization: { name: string };
  };
  issued_at: string;
};

async function fetchCertifications(): Promise<Certification[]> {
  const API_URL = "https://www.credly.com/users/omkar-dalvi-2004/badges.json";

  try {
    const response = await fetch(API_URL, { next: { revalidate: 3600 } }); // Cache data for 1 hour
    if (!response.ok) {
      throw new Error("Failed to fetch data from Credly API");
    }
    const data: { data: Certification[] } = await response.json();
    return data.data;
  } catch (err) {
    console.error(err);
    throw new Error("Error fetching certifications");
  }
}

export default async function CertificationsPage() {
  let certifications: Certification[];

  try {
    certifications = await fetchCertifications();
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-red-500 text-xl">
          Error: Unable to fetch certifications.
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-4">Certifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => {
          const badge = cert.badge_template;
          const organizationName =
            badge.organization?.name || "Unknown Organization";
          const badgeName = badge.name || "Unknown Badge";
          const imageUrl = badge.image_url || "/placeholder.png"; // Default image
          const issuedDate = cert.issued_at || "Unknown Date";

          return (
            <div key={index} className="border p-4 rounded shadow-md">
              <img
                src={imageUrl}
                alt={badgeName}
                className="h-20 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-center">{badgeName}</h2>
              <p className="text-sm text-center">
                Issued by: {organizationName}
              </p>
              <p className="text-sm text-center">Date: {issuedDate}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
