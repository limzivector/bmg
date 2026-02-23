export default function TrustBar() {
  const companies = [
    "Toshiba",
    "Kirkland & Ellis",
    "MSA Safety",
    "K2 Space",
    "National Instruments",
    "Samsung",
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50 border-y border-gray-200">
      <div className="container-custom">
        <p className="text-center text-gray-600 font-semibold text-sm mb-8 uppercase tracking-wide">
          Trusted by Leading Companies
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {companies.map((company) => (
            <div
              key={company}
              className="text-center px-4 py-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 cursor-default"
            >
              <p className="font-semibold text-gray-700 text-sm">{company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
