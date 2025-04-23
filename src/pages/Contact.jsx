export default function Contact() {
    return (
      <section className="container mt-5">
        <h1 className="text-center mb-4">Contact Us</h1>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your name"
                  required
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your email"
                  required
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
  
              <button type="submit" className="btn btn-dark w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  