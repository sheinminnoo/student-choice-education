import { EligibilityFormData } from "../types";

type Props = {
  data: EligibilityFormData;
  onChange: (field: keyof EligibilityFormData, value: string) => void;
};

export default function StudyPlansStep({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Preferred study destination
          </label>
          <select
            name="destination"
            value={data.destination}
            onChange={(e) => onChange("destination", e.target.value)}
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
          >
            <option value="">Choose a country</option>
            <option>United Kingdom (UK)</option>
            <option>United States (USA)</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>Europe (Germany, etc.)</option>
            <option>Not sure yet</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            When do you want to start?
          </label>
          <select
            name="intake"
            value={data.intake}
            onChange={(e) => onChange("intake", e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
          >
            <option value="">Select intake</option>
            <option>Jan / Feb 2026</option>
            <option>May / Jun 2026</option>
            <option>Sep / Oct 2026</option>
            <option>2027 or later</option>
            <option>Not sure</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-slate-700">
          What do you want to study?
        </label>
        <input
          name="courseInterest"
          value={data.courseInterest}
          onChange={(e) => onChange("courseInterest", e.target.value)}
          placeholder="Eg. Computer Science, Business, Nursing"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
        />
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-slate-700">
          Budget per year (tuition + living)
        </label>
        <select
          name="budget"
          value={data.budget}
          onChange={(e) => onChange("budget", e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
        >
          <option value="">Choose a range</option>
          <option>Under £12,000</option>
          <option>£12,000 – £18,000</option>
          <option>£18,000 – £25,000</option>
          <option>More than £25,000</option>
          <option>Not sure / depends on scholarship</option>
        </select>
      </div>
    </div>
  );
}
