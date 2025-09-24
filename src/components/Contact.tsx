import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91-9923422923",
      href: "tel:+919923422923",
      color: "primary"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "itsshubhamk01@gmail.com",
      href: "mailto:itsshubhamk01@gmail.com",
      color: "secondary"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Pune, India",
      href: "#",
      color: "accent"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shubham-kadam-336900230/",
      color: "primary"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/itsshubhamk01",
      color: "secondary"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: "Portfolio",
      href: "#",
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/20",
          text: "text-primary",
          border: "border-primary/30",
          hover: "hover:bg-primary hover:text-primary-foreground"
        };
      case "secondary":
        return {
          bg: "bg-secondary/20",
          text: "text-secondary",
          border: "border-secondary/30",
          hover: "hover:bg-secondary hover:text-secondary-foreground"
        };
      case "accent":
        return {
          bg: "bg-accent/20",
          text: "text-accent",
          border: "border-accent/30",
          hover: "hover:bg-accent hover:text-accent-foreground"
        };
      default:
        return {
          bg: "bg-primary/20",
          text: "text-primary",
          border: "border-primary/30",
          hover: "hover:bg-primary hover:text-primary-foreground"
        };
    }
  };

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, 
                and ways to contribute to meaningful solutions. Feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const colorClasses = getColorClasses(info.color);
                
                return (
                  <a
                    key={index}
                    href={info.href}
                    className={`flex items-center gap-4 p-4 rounded-xl ${colorClasses.bg} ${colorClasses.border} border transition-all duration-300 ${colorClasses.hover} group animate-slide-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 rounded-xl ${colorClasses.bg} ${colorClasses.text} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground group-hover:text-current">
                        {info.label}
                      </div>
                      <div className="font-semibold text-foreground group-hover:text-current">
                        {info.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const colorClasses = getColorClasses(social.color);
                  
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 rounded-xl ${colorClasses.bg} ${colorClasses.text} ${colorClasses.border} border flex items-center justify-center transition-all duration-300 ${colorClasses.hover} hover:scale-110 animate-scale-in`}
                      style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-3d p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    className="bg-card/50 border-card-border"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-card/50 border-card-border"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  className="bg-card/50 border-card-border"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Tell me about your project or just say hello!"
                  className="bg-card/50 border-card-border resize-none"
                />
              </div>
              
              <Button className="btn-hero w-full group">
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-card-border text-center">
          <p className="text-muted-foreground">
            © 2025 Shubham Kadam. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;