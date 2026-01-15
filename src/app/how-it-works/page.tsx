import PageShell from "@/components/layout/PageShell";

export default function HowItWorksPage() {
  return (
    <PageShell
      title="How it Works"
      lead="A clear outline of enquiry, planning, shooting, and delivery."
    >
      <ol style={{ margin: 0, paddingLeft: "1.2rem", color: "var(--muted)" }}>
        <li>Enquiry and availability</li>
        <li>Planning call and location guidance</li>
        <li>Session day with simple direction</li>
        <li>Editing and delivery timeline</li>
      </ol>
    </PageShell>
  );
}
