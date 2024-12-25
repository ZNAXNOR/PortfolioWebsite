import { fetchCertifications } from "./generate-data";
import Link from 'next/link';
import Image from "next/image";

type Certification = {
  badge_template: {
    name: string;
    description: string;
    url: string;
    image_url: string;
    issuer: {
      entities: { label: string; entity: { name: string; url: string } }[];
    };
  };
  issued_at: string;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

export default async function CertificationsPage() {
  const certificationsData = await fetchCertifications();

  const certifications: Certification[] = certificationsData?.data || [];

  return (
    (<div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-4">Certifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => {
          const { badge_template } = cert;
          const issuer =
            badge_template.issuer.entities.find(
              (entity) => entity.label === "Issued by"
            )?.entity.name || "Unknown Issuer";

          return (
            (<div key={index} className="border p-4 rounded shadow-md">
              <Link
                href={badge_template.url}
                target="_blank"
                rel="noopener noreferrer"
                legacyBehavior>
                <Image
                  src={badge_template.image_url}
                  alt={badge_template.name}
                  className="h-20 mx-auto mb-4"
                />
              </Link>
              <h2 className="text-xl font-semibold text-center">
                {badge_template.name}
              </h2>
              <p className="text-sm text-center mt-2">
                <strong>Issued by:</strong> {issuer}
              </p>
              <p className="text-sm text-center mt-1">
                <strong>Date:</strong>{" "}
                {cert.issued_at ? formatDate(cert.issued_at) : "Unknown Date"}
              </p>
              <p className="text-sm mt-3">{badge_template.description}</p>
              <Link
                href={badge_template.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline block text-center mt-4"
              >
                View Certification
              </Link>
            </div>)
          );
        })}
      </div>
    </div>)
  );
}
