import { 
  Code2, 
  Database, 
  Server, 
  Wrench, 
  Brain, 
  Zap, 
  Coffee, 
  MessageSquare, 
  Shield, 
  GitBranch, 
  Container, 
  Layers 
} from "lucide-react";

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Java", "C++", "Python", "JavaScript"],
      color: "primary"
    },
    {
      title: "Frameworks",
      icon: <Server className="w-6 h-6" />,
      skills: ["Spring Boot", "Hibernate", "J2EE", "React.js", "Node.js", "Django"],
      color: "secondary"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
      color: "warning"
    },
    {
      title: "Messaging & Streaming",
      icon: <MessageSquare className="w-6 h-6" />,
      skills: ["Kafka", "RabbitMQ"],
      color: "accent"
    },
    {
      title: "Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Docker", "Git", "AWS", "JUnit", "Mockito"],
      color: "primary"
    },
    {
      title: "Core Concepts & Practices",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        "Microservices",
        "System Design",
        "OAuth2/JWT",
        "REST APIs",
        "TDD",
        "Agile",
        "CI/CD",
        "Security Awareness",
        "OOP"
      ],
      color: "secondary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "border-primary/30 hover:border-primary hover:text-primary";
      case "secondary":
        return "border-secondary/30 hover:border-secondary hover:text-secondary";
      case "accent":
        return "border-accent/30 hover:border-accent hover:text-accent";
      case "warning":
        return "border-warning/30 hover:border-warning hover:text-warning";
      default:
        return "border-primary/30 hover:border-primary hover:text-primary";
    }
  };

  return (
    <section className="py-20 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical</span> Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across modern technologies and development practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="card-3d p-8 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                category.color === 'primary' ? 'bg-primary/20 text-primary' :
                category.color === 'secondary' ? 'bg-secondary/20 text-secondary' :
                category.color === 'accent' ? 'bg-accent/20 text-accent' :
                'bg-warning/20 text-warning'
              }`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className={`skill-badge ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30">
            <Zap className="w-6 h-6 text-primary animate-glow-pulse" />
            <span className="text-lg font-semibold">
              <span className="text-accent">300+</span> Coding Problems Solved
            </span>
            <Coffee className="w-6 h-6 text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
