import PageShell from "@/components/layout/PageShell";

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      lead="Add your enquiry form and preferred contact method."
    >
      <form style={{ maxWidth: 720, display: "grid", gap: 12 }}>
        <label style={{ display: "grid", gap: 6 }}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            required
            style={{
              padding: "12px 14px",
              borderRadius: 12,
              border: "1px solid rgba(17,17,17,.18)",
              font: "inherit",
            }}
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span>Email</span>
          <input
            type="email"
            name="email"
            required
            style={{
              padding: "12px 14px",
              borderRadius: 12,
              border: "1px solid rgba(17,17,17,.18)",
              font: "inherit",
            }}
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span>Message</span>
          <textarea
            name="message"
            rows={6}
            style={{
              padding: "12px 14px",
              borderRadius: 12,
              border: "1px solid rgba(17,17,17,.18)",
              font: "inherit",
              resize: "vertical",
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            justifySelf: "start",
            padding: "12px 16px",
            borderRadius: 999,
            border: "1px solid rgba(17,17,17,.18)",
            background: "#111",
            color: "#fff",
            font: "inherit",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>
    </PageShell>
  );
}
