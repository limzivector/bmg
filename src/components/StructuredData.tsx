interface StructuredDataProps {
  type: "organization" | "localbusiness" | "service" | "faqpage" | "breadcrumb";
  data: Record<string, unknown>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": type === "localbusiness" ? "LocalBusiness" : type === "faqpage" ? "FAQPage" : type === "breadcrumb" ? "BreadcrumbList" : type === "service" ? "Service" : "Organization",
  };

  if (type === "organization") {
    structuredData = {
      ...structuredData,
      name: "Business Moving Group",
      url: "https://businessmoving.com",
      logo: "https://businessmoving.com/logo.png",
      sameAs: [
        "https://www.facebook.com/businessmoving",
        "https://www.linkedin.com/company/businessmoving",
      ],
    };
  } else if (type === "localbusiness") {
    structuredData = {
      ...structuredData,
      name: data.name,
      address: data.address,
      telephone: data.telephone,
      email: data.email,
      description: data.description,
      priceRange: data.priceRange,
      areaServed: data.areaServed,
    };
    if (data.aggregateRating) {
      structuredData.aggregateRating = data.aggregateRating;
    }
  } else if (type === "service") {
    structuredData = {
      ...structuredData,
      name: data.name,
      description: data.description,
      areaServed: data.areaServed,
    };
    if (data.serviceType) {
      structuredData.serviceType = data.serviceType;
    }
  } else if (type === "faqpage") {
    structuredData = {
      ...structuredData,
      mainEntity: data.mainEntity,
    };
  } else if (type === "breadcrumb") {
    structuredData = {
      ...structuredData,
      itemListElement: data.itemListElement,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
