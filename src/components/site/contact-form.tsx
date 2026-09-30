import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="max-w-md space-y-8">
      <Field label="Name" name="name" type="text" />
      <Field label="Email" name="email" type="email" />
      <div>
        <label htmlFor="message" className="eyebrow block">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-3 w-full resize-none border-b border-input bg-transparent pb-2 text-[0.98rem] outline-none transition-colors focus:border-primary"
        />
      </div>
      <button
        type="submit"
        className="border border-foreground/25 px-6 py-3 text-xs tracking-[0.16em] uppercase transition-colors hover:bg-foreground hover:text-background"
      >
        {sent ? "Thank you" : "Send"}
      </button>
      {sent && (
        <p className="text-sm text-muted-foreground">
          This form isn't connected yet — please email me directly in the meantime.
        </p>
      )}
    </form>
  );
}

function Field({ label, name, type }: { label: string; name: string; type: string }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-3 w-full border-b border-input bg-transparent pb-2 text-[0.98rem] outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
