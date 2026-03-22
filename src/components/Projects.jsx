function Projects() {
    return (
      <div class="section-wrap">
        <section id="projects" className="projects">
          <div class="reveal">
            <p class="section-label">Work</p>
            <h2 class="section-title">Projects</h2>
          </div>
          <div class="projects-list reveal">
            <a
              href="https://github.com/vladi93dev/album-list-api"
              class="project-card"
              target="_blank"
            >
              <div>
                <div class="project-name">Music Journal API</div>
                <div class="project-desc">
                  A RESTful API for journaling music listening experiences and
                  discovering new music. Features JWT authentication, full CRUD
                  operations, and a clean resource architecture.
                </div>
                <div class="project-tags">
                  <span class="tag">Node.js</span>
                  <span class="tag">Express</span>
                  <span class="tag">PostgreSQL</span>
                  <span class="tag">Prisma</span>
                  <span class="tag">JWT</span>
                </div>
              </div>
              <div class="project-arrow">↗</div>
            </a>

            <a
              href="#"
              class="project-card"
              target="https://github.com/vladi93dev/trip-app"
            >
              <div>
                <div class="project-name">Vacation Management System</div>
                <div class="project-desc">
                  Full-stack application for managing employee vacation
                  requests. Built with a React frontend and a Node/Express
                  backend with role-based access control.
                </div>
                <div class="project-tags">
                  <span class="tag">React</span>
                  <span class="tag">Node.js</span>
                  <span class="tag">Express</span>
                  <span class="tag">MySQL</span>
                </div>
              </div>
              <div class="project-arrow">↗</div>
            </a>
          </div>
        </section>
      </div>
    );
};

export default Projects;