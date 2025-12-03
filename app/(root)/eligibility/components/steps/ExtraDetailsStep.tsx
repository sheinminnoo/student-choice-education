import { EligibilityFormData } from "../types";

type Props = {
  data: EligibilityFormData;
  onChange: (field: keyof EligibilityFormData, value: string | boolean) => void;
  wordCount: number;
  maxWords: number;
};

export default function ExtraDetailsStep({
  data,
  onChange,
  wordCount,
  maxWords,
}: Props) {
  const overLimit = wordCount > maxWords;

  return (
    <div className="space-y-4">
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-700">
          Anything else we should know?
        </label>
        <textarea
          name="extraInfo"
          rows={4}
          value={data.extraInfo}
          onChange={(e) => onChange("extraInfo", e.target.value)}
          placeholder="Eg. gap years, visa history, work experience, special requirements..."
          className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
            overLimit
              ? "border-red-300 focus:border-red-500 focus:ring-red-200"
              : "border-slate-200 focus:border-[#041744] focus:ring-[#facc15]/60"
          }`}
        />
        <p
          className={`mt-1 text-[11px] ${
            overLimit ? "text-red-500" : "text-slate-500"
          }`}
        >
          {wordCount} / {maxWords} words
        </p>
      </div>

      <div className="flex items-start gap-2 rounded-2xl bg-slate-50 px-4 py-3">
        <input
          id="consent"
          type="checkbox"
          checked={data.consent}
          onChange={(e) => onChange("consent", e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-[#041744] focus:ring-[#facc15]"
        />
        <label
          htmlFor="consent"
          className="text-xs text-slate-600 sm:text-[13px]"
        >
          I agree that Student Choice Education may contact me by email, phone
          or WhatsApp with eligibility results, study options and related
          services. I understand my details will not be sold to third parties.
        </label>
      </div>
    </div>
  );
}
