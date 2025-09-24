import { ExternalLink, Github, Database, Users, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Government Scheme Portal",
      description: "A citizen-focused welfare portal enabling easy access to government schemes with integrated authentication and database-driven workflow management.",
      technologies: ["Spring Boot", "MongoDB", "React.js"],
      achievements: [
        {
          icon: <TrendingUp className="w-4 h-4" />,
          text: "Reduced manual processing by 40%",
          color: "primary"
        },
        {
          icon: <Users className="w-4 h-4" />,
          text: "Citizen-focused design",
          color: "accent"
        }
      ],
      githubUrl: "#",
      liveUrl: "#",
      color: "primary"
    },
    {
      title: "CollegeInfo Feedback System",
      description: "A real-time feedback platform enabling seamless communication between students and faculty with instant data synchronization.",
      technologies: ["Java", "XML", "Firebase"],
      achievements: [
        {
          icon: <Users className="w-4 h-4" />,
          text: "200+ students/faculty engaged",
          color: "secondary"
        },
        {
          icon: <Zap className="w-4 h-4" />,
          text: "30% improved communication",
          color: "warning"
        }
      ],
      githubUrl: "#",
      liveUrl: "#",
      color: "secondary"
    },
    {
      title: "Travel Agency Management System",
      description: "A Java-based application to manage travel bookings, customer data, and payment workflows with robust backend logic.",
      technologies: ["Java", "JDBC", "MySQL", "Swing"],
      achievements: [
        {
          icon: <Database className="w-4 h-4" />,
          text: "Centralized booking & customer data",
          color: "primary"
        },
        {
          icon: <TrendingUp className="w-4 h-4" />,
          text: "Increased booking efficiency by 35%",
          color: "accent"
        }
      ],
      githubUrl: "#",
      liveUrl: "#",
      color: "primary"
    },
    {
      title: "Space Impact Game",
      description: "A modern reimplementation of the classic Space Impact arcade game using Java and game loops.",
      technologies: ["Java", "JavaFX", "OOP"],
      achievements: [
        {
          icon: <Zap className="w-4 h-4" />,
          text: "Smooth 60 FPS game loop",
          color: "secondary"
        },
        {
          icon: <Users className="w-4 h-4" />,
          text: "Enhanced player experience",
          color: "accent"
        }
      ],
      githubUrl: "#",
      liveUrl: "#",
      color: "secondary"
    },
    {
      title: "Weather Application",
      description: "A weather forecasting application built with Java, fetching live data from OpenWeatherMap APIs with a clean UI.",
      technologies: ["Java", "REST APIs", "JSON", "Swing"],
      achievements: [
        {
          icon: <TrendingUp className="w-4 h-4" />,
          text: "Real-time weather updates",
          color: "primary"
        },
        {
          icon: <Zap className="w-4 h-4" />,
          text: "Integrated live API data",
          color: "warning"
        }
      ],
      githubUrl: "#",
      liveUrl: "#",
      color: "primary"
    },
    {
      title: "Smart Inventory Management System",
      description: "A full-featured inventory management system with AI-powered demand forecasting and real-time analytics.",
      technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "Weka/ML"],
      achievements: [
        {
          icon: <TrendingUp className="w-4 h-4" />,
          text: "AI-based demand forecasting",
          color: "primary"
        },
        {
          icon: <Database className="w-4 h-4" />,
          text: "Reduced stockouts by 25%",
          color: "accent"
        }
      ],
      githubUrl: "#",
      liveUrl: "#",
      color: "secondary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          border: "border-primary/30 hover:border-primary",
          button: "bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground",
          glow: "hover:shadow-primary/20"
        };
      case "secondary":
        return {
          border: "border-secondary/30 hover:border-secondary",
          button: "bg-secondary/20 text-secondary hover:bg-secondary hover:text-secondary-foreground",
          glow: "hover:shadow-secondary/20"
        };
      default:
        return {
          border: "border-primary/30 hover:border-primary",
          button: "bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground",
          glow: "hover:shadow-primary/20"
        };
    }
  };

  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building solutions that make a real impact with modern technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            
            return (
              <div 
                key={index}
                className={`card-3d p-8 ${colorClasses.border} transition-all duration-500 ${colorClasses.glow}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-6">
                  {/* Project Header */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-muted-foreground">Key Achievements:</h4>
                    {project.achievements.map((achievement, achievementIndex) => (
                      <div 
                        key={achievementIndex}
                        className="flex items-center gap-3 p-3 rounded-lg bg-card/30 border border-card-border/50"
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          achievement.color === 'primary' ? 'bg-primary/20 text-primary' :
                          achievement.color === 'secondary' ? 'bg-secondary/20 text-secondary' :
                          achievement.color === 'accent' ? 'bg-accent/20 text-accent' :
                          'bg-warning/20 text-warning'
                        }`}>
                          {achievement.icon}
                        </div>
                        <span className="text-foreground font-medium">{achievement.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-sm rounded-lg bg-muted/20 text-muted-foreground border border-muted/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`${colorClasses.button} border transition-all duration-300`}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`${colorClasses.button} border transition-all duration-300`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Activity */}
        <div className="mt-16 text-center">
          <div className="card-3d p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Open Source Contributions</h3>
            <p className="text-muted-foreground mb-6">
              Active contributor to the development community with consistent project work
            </p>
            <div className="flex justify-center items-center gap-4">
              <Github className="w-8 h-8 text-muted-foreground" />
              <span className="text-lg font-semibold">
                Active <span className="text-primary">Open-Source Contributor</span> on GitHub
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
