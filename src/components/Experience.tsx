import { Building2, Calendar, MapPin, TrendingUp, Users, Database, Shield } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-20 px-6" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Building scalable solutions with modern technologies
          </p>
        </div>

        <div className="relative space-y-12">
          {/* Experience Item - Code World Infotech */}
          <div className="timeline-item">
            <div className="card-3d p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Software Developer Intern
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Building2 className="w-4 h-4" />
                    <span className="font-medium">Code World Infotech Pvt. Ltd.</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Solapur</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Feb 2025 – May 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground mb-4">Key Achievements:</h4>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground">
                      Engineered backend features using Spring Boot & Hibernate, 
                      improving <span className="font-semibold text-primary">system efficiency by 20%</span>.
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                    <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-foreground">
                      Developed <span className="font-semibold text-secondary">secure, production-ready REST APIs</span> 
                      with OAuth2/JWT authentication and role-based access.
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Database className="w-4 h-4 text-accent" />
                    </div>
                    <p className="text-foreground">
                      Integrated ELK stack and Prometheus for 
                      <span className="font-semibold text-accent"> live monitoring and alerting</span>; 
                      reduced MTTR by 30%.
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground">
                      Delivered high-availability APIs in Agile sprints and collaborated across teams.
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                    <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-foreground">
                      <span className="font-semibold text-secondary">Supported APIs in live production for 4+ months</span>, ensuring stability and reliability.
                    </p>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="mt-6">
                  <h5 className="text-sm font-semibold text-muted-foreground mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "Spring Boot", "Hibernate", "MySQL", "REST APIs", "OAuth2", "JWT", "ELK", "Prometheus", "Agile"].map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-muted/30 text-muted-foreground border border-muted/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Item - NITS Software */}
          <div className="timeline-item">
            <div className="card-3d p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Full Stack Java Developer
                    <span className="text-primary ml-2">(Training)</span>
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Building2 className="w-4 h-4" />
                    <span className="font-medium">NITS Software</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Pune</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Jun 2022 – Jun 2023</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground mb-4">Key Achievements:</h4>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground">
                      Implemented secure authentication and optimized backend services, improving 
                      <span className="font-semibold text-primary"> system efficiency by 20%</span>
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                    <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-foreground">
                      Collaborated with a <span className="font-semibold text-secondary">6-member Agile team</span> to 
                      deliver features within sprints, using Git for version control
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Database className="w-4 h-4 text-accent" />
                    </div>
                    <p className="text-foreground">
                      Enhanced database queries, reducing 
                      <span className="font-semibold text-accent"> response time by 30%</span> for critical operations
                    </p>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="mt-6">
                  <h5 className="text-sm font-semibold text-muted-foreground mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "Spring Boot", "Hibernate", "MySQL", "Angular", "Git"].map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-muted/30 text-muted-foreground border border-muted/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
