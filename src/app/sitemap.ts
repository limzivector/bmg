import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://businessmoving.com";

  const services = [
    "office-movers",
    "warehouse-moving",
    "industrial-movers",
    "cubicle-movers",
    "office-decommissioning",
    "project-management",
    "out-of-town-dealer-support",
    "office-reconfiguration",
  ];

  const serviceUrls: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...serviceUrls,
  ];
}
