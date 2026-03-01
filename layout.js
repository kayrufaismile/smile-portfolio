import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'S.M.I.L.E-ing Boys',
  description: 'Portrait-led wellbeing and storytelling programmes supporting Black boys and young people to thrive — through joy, belonging, and emotional literacy.',
  metadataBase: new URL('https://example.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="siteMain">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
