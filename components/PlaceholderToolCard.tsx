export default function PlaceholderToolCard({ title }: { title: string }) {
  return (
    <div style={{ padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>{title}</h2>
      <p>Placeholder component for future tool UI.</p>
    </div>
  );
}
