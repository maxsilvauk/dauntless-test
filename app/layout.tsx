import '#/styles/globals.css';
import { Header } from '@/components/Header';
// import { Footer } from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <title>Daunted | CoinGecko Market Pairs (USD)</title>
      <meta charSet="utf-8" />
      <meta name="language" content="english" />
      <meta httpEquiv="content-type" content="text/html" />
      <meta name="author" content="Max Silva" />

      <meta
        name="description"
        content="A test for daunted to showcase modern Next.js and Typescript code."
      />
      <body className="antialiased">
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
