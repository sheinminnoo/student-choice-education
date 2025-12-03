import { EligibilityFormData } from "../types";

type Props = {
  data: EligibilityFormData;
  onChange: (field: keyof EligibilityFormData, value: string) => void;
};

export default function PersonalDetailsStep({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Full name
          </label>
          <input
            name="fullName"
            value={data.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            required
            placeholder="Eg. Aung Min"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={(e) => onChange("email", e.target.value)}
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Phone (with country code)
          </label>
          <input
            name="phone"
            value={data.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            placeholder="+44 7xxx xxx xxx"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Nationality
          </label>
          <input
            name="nationality"
            value={data.nationality}
            onChange={(e) => onChange("nationality", e.target.value)}
            placeholder="Eg. Myanmar"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
          />
        </div>
      </div>
    </div>
  );
}
