function Contact() {
    return (
        <div class="section-wrap">
        <section id="contact" className="contact">
          <div class="reveal">
            <p class="section-label">Contact</p>
            <h2 class="section-title">Let's talk</h2>
          </div>
          <div class="contact-wrap reveal">
            <p class="contact-text">
              I'm currently open to full-time and freelance opportunities —
              backend, full-stack, or API work. If you have a project in mind or
              just want to connect, reach out.
            </p>
            <div class="contact-links">
              <a href="mailto:vladi.sem93@gmail.com" class="contact-link">
                <span>Email</span>
                <span>→</span>
              </a>
              <a
                href="https://github.com/vladi93dev/"
                class="contact-link"
                target="_blank"
              >
                <span>GitHub</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    )
};

export default Contact;