import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "MCA – Master of Computer Applications",
      institution: "Savitribai Phule Pune University",
      period: "2023 – 2025",
      cgpa: "7.38/10",
      color: "primary",
      status: "Pursuing"
    },
    {
      degree: "BCS – Bachelor of Computer Science",
      institution: "Punyashlok Ahilyadevi Holkar Solapur University",
      period: "2019 – 2022",
      cgpa: "9.36/10",
      color: "secondary",
      status: "Completed"
    }
  ];

  const certifications = [
    {
      name: "AWS - Solutions Architecture Job Simulation",
      issuer: "Forage",
      desc: "Hands-on simulation covering AWS architecture design and deployment.",
      color: "primary"
    },
    {
      name: "Master Android Application - Build 3 Applications From Scratch",
      issuer: "Udemy",
      desc: "Developed 3 fully functional Android apps using Java and modern practices.",
      color: "secondary"
    },
    {
      name: "Accenture Nordics - Software Engineering Job Simulation",
      issuer: "Forage",
      desc: "Simulated real-world software engineering tasks with Accenture Nordics team.",
      color: "accent"
    },
    {
      name: "Tata - GenAI Powered Data Analytics Job Simulation",
      issuer: "Forage",
      desc: "Applied Generative AI techniques for business data analytics.",
      color: "warning"
    },
    {
      name: "ISC2 Candidate",
      issuer: "ISC2",
      desc: "Recognized candidate for ISC2 cybersecurity certification (valid till Mar 2026).",
      color: "primary"
    },
    {
      name: "AWS Academy Graduate - Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      desc: "Learned AWS Cloud fundamentals, services, and architecture best practices.",
      color: "secondary"
    },
    {
      name: "Cloud Essentials",
      issuer: "IBM",
      desc: "Fundamentals of cloud computing, deployment models, and services.",
      color: "accent"
    },
    {
      name: "Containers & Kubernetes Essentials",
      issuer: "IBM",
      desc: "Hands-on training with Docker containers and Kubernetes orchestration.",
      color: "warning"
    },
    {
      name: "Docker Essentials: A Developer Introduction",
      issuer: "IBM",
      desc: "Learned Docker basics for containerized application development.",
      color: "primary"
    },
    {
      name: "Python for Data Science",
      issuer: "IBM",
      desc: "Practical exposure to Python libraries for data analysis and visualization.",
      color: "secondary"
    },
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "edX",
      desc: "Introduction to AWS services, billing, and security concepts.",
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/20 text-primary border-primary/30";
      case "secondary":
        return "bg-secondary/20 text-secondary border-secondary/30";
      case "accent":
        return "bg-accent/20 text-accent border-accent/30";
      case "warning":
        return "bg-warning/20 text-warning border-warning/30";
      default:
        return "bg-primary/20 text-primary border-primary/30";
    }
  };

  return (
    <section className="py-20 px-6" id="education">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Academic excellence and continuous learning journey
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Academic Background</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="card-3d p-8 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start gap-4 mb-4 lg:mb-0">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${getColorClasses(
                        edu.color
                      )}`}
                    >
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                        <span
                          className={`ml-2 px-2 py-1 text-xs rounded-full ${
                            edu.status === "Pursuing"
                              ? "bg-primary/20 text-primary"
                              : "bg-accent/20 text-accent"
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-muted-foreground mb-1">CGPA</div>
                    <div
                      className={`text-2xl font-bold ${
                        edu.color === "primary" ? "text-primary" : "text-secondary"
                      }`}
                    >
                      {edu.cgpa}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="card-3d p-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${getColorClasses(
                      cert.color
                    )}`}
                  >
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
