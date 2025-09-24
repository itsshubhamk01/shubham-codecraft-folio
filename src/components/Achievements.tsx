import { Trophy, Code, Users, Github, Target, Zap } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "200+ Problems Solved",
      description: "Completed coding challenges on LeetCode & HackerRank",
      platform: "LeetCode & HackerRank",
      color: "primary",
      stats: "300+"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "TCS Hackathon 2025",
      description: "Participated in prestigious national level hackathon",
      platform: "Tata Consultancy Services",
      color: "secondary",
      stats: "2025"
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: "Open Source Contributor",
      description: "Active contributions to open source projects",
      platform: "GitHub Community",
      color: "accent",
      stats: "Active"
    }
  ];

  const languages = [
    { name: "English", level: "Fluent", color: "primary" },
    { name: "Hindi", level: "Native", color: "secondary" },
    { name: "Marathi", level: "Native", color: "accent" }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/20",
          text: "text-primary",
          border: "border-primary/30",
          glow: "group-hover:shadow-primary/20"
        };
      case "secondary":
        return {
          bg: "bg-secondary/20",
          text: "text-secondary",
          border: "border-secondary/30",
          glow: "group-hover:shadow-secondary/20"
        };
      case "accent":
        return {
          bg: "bg-accent/20",
          text: "text-accent",
          border: "border-accent/30",
          glow: "group-hover:shadow-accent/20"
        };
      default:
        return {
          bg: "bg-primary/20",
          text: "text-primary",
          border: "border-primary/30",
          glow: "group-hover:shadow-primary/20"
        };
    }
  };

  return (
    <section className="py-20 px-6" id="achievements">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition for technical excellence and continuous learning
          </p>
        </div>

        {/* Main Achievements */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const colorClasses = getColorClasses(achievement.color);
            
            return (
              <div 
                key={index}
                className={`card-3d p-8 group transition-all duration-500 ${colorClasses.glow} animate-scale-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center space-y-6">
                  {/* Icon & Stats */}
                  <div className="relative">
                    <div className={`w-20 h-20 mx-auto rounded-2xl ${colorClasses.bg} ${colorClasses.text} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {achievement.icon}
                    </div>
                    <div className={`absolute -top-2 -right-2 px-2 py-1 text-xs font-bold rounded-full ${colorClasses.bg} ${colorClasses.text} border ${colorClasses.border}`}>
                      {achievement.stats}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm ${colorClasses.bg} ${colorClasses.text} border ${colorClasses.border}`}>
                      {achievement.platform}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Languages</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {languages.map((language, index) => {
              const colorClasses = getColorClasses(language.color);
              
              return (
                <div 
                  key={index}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl ${colorClasses.bg} ${colorClasses.border} border animate-slide-up`}
                  style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
                >
                  <div className={`w-8 h-8 rounded-lg ${colorClasses.bg} ${colorClasses.text} flex items-center justify-center`}>
                    <Target className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">{language.name}</div>
                    <div className={`text-sm ${colorClasses.text}`}>{language.level}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card-3d p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Zap className="w-8 h-8 text-primary animate-glow-pulse" />
              <h3 className="text-2xl font-bold">Ready for New Challenges</h3>
              <Zap className="w-8 h-8 text-accent animate-glow-pulse" />
            </div>
            <p className="text-muted-foreground text-lg">
              Passionate about solving complex problems and building innovative solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;