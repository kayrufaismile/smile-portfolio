export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <div className="brand" style={{ marginBottom: 10 }}>
            <span className="badge" aria-hidden="true" />
            <span>S.M.I.L.E-ing Boys</span>
          </div>
          <div className="smallPrint">
            © {year} S.M.I.L.E-ing Boys. Portrait-led storytelling for wellbeing.
          </div>
        </div>
        <div>
          <div className="smallPrint">
            <b style={{ color: 'var(--text)' }}>Quick links</b><br />
            <a href="/programmes">Programmes</a> · <a href="/portfolio">Portfolio</a> · <a href="/impact">Impact</a> · <a href="/#contact">Contact</a>
          </div>
          <div className="smallPrint" style={{ marginTop: 10 }}>
            <b style={{ color: 'var(--text)' }}>Social</b><br />
            Add your Instagram / YouTube / LinkedIn links here.
          </div>
        </div>
      </div>
    </footer>
  );
}
