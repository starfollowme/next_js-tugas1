import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[1fr_auto] items-center justify-items-center px-6 sm:px-16 py-20 gap-12">
      <main className="text-center space-y-6 max-w-xl">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          className="mx-auto dark:invert"
        />

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Halo 👋, Saya Irham!
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg">
          Ini adalah proyek Next.js pertamaku dengan TailwindCSS. Dibuat untuk belajar dan eksperimen dengan teknologi modern.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a
            href="https://github.com/irhamdev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition px-6 py-3 text-sm font-medium"
          >
            GitHub Saya
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition px-6 py-3 text-sm font-medium"
          >
            Dokumentasi Next.js
          </a>
        </div>
      </main>

      <footer className="text-sm text-neutral-500 dark:text-neutral-400 text-center">
        Dibuat dengan ❤️ oleh Irham — 2025
      </footer>
    </div>
  );
}
