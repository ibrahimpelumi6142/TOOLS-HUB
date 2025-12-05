import Link from "next/link";

export default function HomePage() {
  const tools = [
    { title: "PDF to Word", path: "/tools/pdf-to-word" },
    { title: "Merge PDF", path: "/tools/pdf-merge" },
    { title: "Image Resizer", path: "/tools/image-resizer" },
    { title: "Image Compressor", path: "/tools/image-compressor" },
    { title: "AI Summarizer", path: "/tools/ai-summarizer" },
    { title: "Instagram Downloader", path: "/tools/instagram-downloader" },
    { title: "TikTok Downloader", path: "/tools/tiktok-downloader" },
    { title: "YouTube Thumbnail", path: "/tools/youtube-thumbnail" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">🚀 ToolsHub</h1>
        <p className="text-gray-600 text-lg">
          All-in-one online utility platform — tools for PDF, images, AI and more.
        </p>
      </header>

      {/* Tools Grid */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link key={tool.title} href={tool.path}>
            <div className="p-6 bg-white shadow-md rounded-xl cursor-pointer hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">{tool.title}</h2>
              <p className="text-gray-500">Click to open tool</p>
            </div>
          </Link>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center mt-16 text-gray-500">
        Built by <strong>Lasisi Ibrahim Pelumi</strong> • ToolsHub © 2025
      </footer>
    </main>
  );
}
