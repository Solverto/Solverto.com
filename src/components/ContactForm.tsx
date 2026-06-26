"use client";

import { useState } from "react";
import { languages } from "@/lib/translations";
import { useLanguage } from "./LanguageProvider";

export function ContactForm() {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="glass-panel reveal grid gap-4 rounded-2xl p-5 sm:p-7"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t.contact.name} name="name" required />
        <Field label={t.contact.company} name="company" />
        <Field label={t.contact.email} name="email" type="email" required />
        <label className="grid gap-2 text-sm font-bold text-bone">
          {t.contact.projectType}
          <select
            className="min-h-12 rounded-lg border border-white/10 bg-obsidian px-3 text-bone outline-none focus:border-gold"
            name="projectType"
            required
          >
            {t.contact.projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <Field label={t.contact.budgetRange} name="budgetRange" />
        <Field label={t.contact.deadline} name="deadline" />
      </div>

      <label className="grid gap-2 text-sm font-bold text-bone">
        {t.contact.preferredLanguage}
        <select
          className="min-h-12 rounded-lg border border-white/10 bg-obsidian px-3 text-bone outline-none focus:border-gold"
          name="preferredLanguage"
          defaultValue={language}
        >
          {languages.map((item) => (
            <option key={item.code} value={item.code}>
              {item.label}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-sm font-bold text-bone">
        {t.contact.message}
        <textarea
          className="min-h-36 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 text-bone outline-none focus:border-gold"
          name="message"
          required
        />
      </label>

      <button
        className="min-h-12 rounded-xl bg-gold px-5 text-sm font-black text-obsidian transition hover:bg-amber"
        type="submit"
      >
        {t.contact.submit}
      </button>

      {submitted ? (
        <p className="rounded-xl border border-cyan/30 bg-cyan/10 p-4 text-sm font-bold text-bone">
          {t.contact.success}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-bone">
      {label}
      <input
        className="min-h-12 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-bone outline-none focus:border-gold"
        name={name}
        required={required}
        type={type}
      />
    </label>
  );
}
