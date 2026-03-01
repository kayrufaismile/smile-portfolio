import Link from 'next/link';

export default function SignupPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h2" style={{ marginTop: 10 }}>Sign up</h1>
        <p className="sub">
          Join the mailing list for programme dates, exhibitions and partnership opportunities.
        </p>

        <div className="grid2" style={{ marginTop: 18 }}>
          <div className="card">
            <h2 className="h3" style={{ marginTop: 0 }}>Mailing list</h2>
            <p className="smallPrint" style={{ color: 'var(--muted)' }}>
              This is a simple form placeholder. To make it live, replace the <b>action</b> URL with your Mailchimp,
              ConvertKit or Formspree endpoint.
            </p>

            <form
              action="#"
              method="POST"
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Form placeholder — connect an email provider endpoint to make this live.');
              }}
            >
              <label className="label">
                Full name
                <input className="input" name="name" autoComplete="name" required />
              </label>
              <label className="label">
                Email
                <input className="input" name="email" type="email" autoComplete="email" required />
              </label>
              <label className="label">
                I’m interested in…
                <select className="input" name="interest" defaultValue="Programmes">
                  <option>Programmes</option>
                  <option>Exhibitions</option>
                  <option>Partnership / Sponsorship</option>
                  <option>Press / Media</option>
                </select>
              </label>
              <button className="btn btnPrimary" type="submit">Sign up</button>
            </form>
          </div>

          <div className="card">
            <h2 className="h3" style={{ marginTop: 0 }}>Prefer to book a programme?</h2>
            <p className="sub">
              If you’re a school, funder or partner and want to talk delivery, use the contact section on the homepage.
            </p>
            <div className="ctaRow">
              <a className="btn btnPrimary" href="/#contact">Contact</a>
              <Link className="btn" href="/impact">See impact</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
