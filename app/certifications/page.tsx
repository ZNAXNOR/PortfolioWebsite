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
            <div
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow 
                  dark:bg-gray-800 dark:border-gray-700 hover:drop-shadow-2xl"
            >
              <div className="flex px-auto text-centre place-item-centre">
                <Link
                  href={badge_template.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="rounded-t-lg"
                    src={badge_template.image_url}
                    alt={badge_template.name}
                    width={150}
                    height={150}
                  />
                </Link>
              </div>
              <div className="p-5">
                <a href={badge_template.url}>
                  <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                    {badge_template.name}
                  </h5>
                </a>
                <h6
                  className="font-bold text-gray-600 dark:text-gray-400 leading-snug tracking-normal mx-auto my-6 w-full text-sm
                       max-w-xs lg:max-w-md"
                >
                  <strong>Issued by</strong> {issuer}
                </h6>
                <p
                  className="m-3 p-3 text-gray-700 dark:text-gray-400 max-w-sm border bg-gray-100
                            border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  {badge_template.description}
                </p>
                <h6
                  className="font-bold text-gray-600 dark:text-gray-400 leading-snug tracking-normal mx-auto my-6 w-full text-sm
                       max-w-xs lg:max-w-md"
                >
                  <strong>Issued on</strong>{" "}
                  {cert.issued_at ? formatDate(cert.issued_at) : "Unknown Date"}
                </h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
