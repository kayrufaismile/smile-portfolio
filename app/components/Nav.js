import Link from 'next/link';

export default function Nav() {
  return (
    <header className="nav">
      <div className="container navInner">
        <Link href="/" className="brand" aria-label="S.M.I.L.E-ing Boys home">
          <span className="badge" aria-hidden="true" />
          <span>S.M.I.L.E-ing</span>
          <span className="brandAccent">Boys</span>
        </Link>

        <nav className="navLinks" aria-label="Primary">
          <Link href="/programmes">Programmes</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/impact">Impact</Link>
          <Link href="/signup" className="navCta">Sign up</Link>
          <a href="/#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
