import { fetchCertifications } from "./generate-data";
import Image from "next/image";

type Certification = {
  id: string;
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
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-4">Credly Certification Badges</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => {
          const { id } = cert;
          const { badge_template } = cert;
          const issuer =
            badge_template.issuer.entities.find(
              (entity) => entity.label === "Issued by"
            )?.entity.name || "Unknown Issuer";

          return (
            <a key={id} target="_blank" rel="noopener noreferrer" href={`http://www.credly.com/badges/${id}`}
              className="hover:drop-shadow-2xl focus:ring-gray-700 focus:ring-offset-4">
              <div className="max-w-sm h-96 flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                {/* Badge Image */}
                <div className="flex justify-center p-4">
                  <Image
                    className="rounded-lg"
                    src={badge_template.image_url}
                    alt={badge_template.name}
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                </div>

                {/* Badge Details */}
                <div className="p-4 flex flex-col justify-between h-full">
                  <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    {badge_template.name}
                  </h5>
                  <h6 className="text-gray-600 dark:text-gray-400 text-sm text-center">
                    <strong>Issued by:</strong> {issuer}
                  </h6>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-400 text-sm mt-4 line-clamp-3">
                    <strong>Description:</strong>{" "}
                    {badge_template.description}
                  </p>

                  {/* Issued Date */}
                  <h6 className="text-gray-600 dark:text-gray-400 text-sm text-center mt-4">
                    <strong>Issued on:</strong>{" "}
                    {cert.issued_at ? formatDate(cert.issued_at) : "Unknown Date"}
                  </h6>

                  {/* Footnote */}
                  <p className="pt-1 font-light leading-relaxed mx-auto text-slate-500 text-sm max-w-3xl">
                    Click the card to view more details
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
