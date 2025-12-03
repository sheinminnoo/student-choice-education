import { EligibilityFormData } from "../types";

type Props = {
  data: EligibilityFormData;
  onChange: (field: keyof EligibilityFormData, value: string) => void;
};

export default function EducationStep({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-700">
          Highest level of education
        </label>
        <select
          name="highestEducation"
          value={data.highestEducation}
          onChange={(e) => onChange("highestEducation", e.target.value)}
          required
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
        >
          <option value="">Select one</option>
          <option>High school (completed)</option>
          <option>High school (studying)</option>
          <option>Diploma</option>
          <option>Bachelor&apos;s degree</option>
          <option>Master&apos;s degree</option>
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Recent grades / GPA (if known)
          </label>
          <input
            name="grades"
            value={data.grades}
            onChange={(e) => onChange("grades", e.target.value)}
            placeholder="Eg. 3.2 / 4.0 or 75%"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            English test
          </label>
          <select
            name="englishTest"
            value={data.englishTest}
            onChange={(e) => onChange("englishTest", e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
          >
            <option value="">Select one</option>
            <option>No test yet</option>
            <option>IELTS</option>
            <option>PTE</option>
            <option>TOEFL</option>
            <option>Duolingo</option>
            <option>Other / local test</option>
          </select>
        </div>
      </div>
    </div>
  );
}
