type Section = { id: string; label: string };

type Props = {
  sections: Section[];
};

export default function UniversitySideMenu({ sections }: Props) {
  return (
    <aside className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
      <ul className="space-y-1 text-sm">
        {sections.map((section, index) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`flex items-center gap-2 rounded-xl px-3 py-2.5 transition ${
                index === 0
                  ? "bg-sky-50 text-sky-900 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span
                className={`h-7 w-0.5 rounded-full ${
                  index === 0 ? "bg-sky-700" : "bg-transparent"
                }`}
              />
              <span>{section.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
