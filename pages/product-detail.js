
import Link from "next/link";
import { Button } from "../components/ui/button";

export default function ProductDetail() {
  return (
    <main className="bg-neutral-900 text-white min-h-screen font-serif p-8">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Architect: Draft I</h1>
        <p className="italic text-lg mb-6">"Structure over noise. Obsession over applause."</p>
        <p className="mb-6 text-md text-neutral-300">
          A digital manifesto for sovereign builders. <br />
          Designed to be read in silence, applied in solitude, and lived with obsession.
        </p>
        <p className="text-2xl font-semibold mb-6">$20</p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg">
            Buy Now
          </Button>
        </a>
        <p className="text-sm mt-4 text-neutral-400">
          Delivered via Google Drive link after purchase.
        </p>
      </section>
    </main>
  );
}
