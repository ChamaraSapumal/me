const technologies = [
  { id: 1, name: "Frontend Framework", value: "React" },
  { id: 2, name: "Backend Framework", value: "Spring Boot" },
  { id: 3, name: "Database Management", value: "MySQL" },
  { id: 4, name: "CSS Framework", value: "Tailwind CSS" },
  { id: 5, name: "Version Control", value: "Git" },
];

export default function Technologies() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{tech.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent sm:text-5xl">
                {tech.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
