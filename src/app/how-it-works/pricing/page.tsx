import PageShell from "@/components/layout/PageShell";

export default function PricingPage() {
  return (
    <PageShell
      title="Pricing"
      lead="Present a small number of packages with inclusions and optional add-ons."
    >
      <div style={{ display: "grid", gap: "16px" }}>
        <div style={{ border: "1px solid rgba(17,17,17,.10)", borderRadius: 18, padding: 18 }}>
          <div style={{ fontFamily: "var(--serif)", fontSize: 22, marginBottom: 6 }}>Package One</div>
          <div style={{ color: "var(--muted)" }}>Coverage, deliverables, travel details.</div>
        </div>

        <div style={{ border: "1px solid rgba(17,17,17,.10)", borderRadius: 18, padding: 18 }}>
          <div style={{ fontFamily: "var(--serif)", fontSize: 22, marginBottom: 6 }}>Package Two</div>
          <div style={{ color: "var(--muted)" }}>Coverage, deliverables, engagement option.</div>
        </div>
      </div>
    </PageShell>
  );
}
