import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, GraduationCap, Briefcase, Award } from "lucide-react";

const PersonalInfo = () => {
  const personalDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "lovelyrajput2509@gmail.com",
      href: "mailto:lovelyrajput2509@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7669780806",
      href: "tel:+917669780806"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New Delhi, India",
      href: null
    }
  ];

  const education = {
    institution: "Delhi University",
    college: "Shyama Prasad Mukherjee College for Women",
    degree: "Bachelor of Science in Computer Science",
    duration: "2020-2023",
    location: "New Delhi, India"
  };

  const experience = {
    position: "AI/ML Engineer Intern",
    company: "Provana India Private Limited",
    duration: "Feb 2025 - Aug 2025"
  };

  const certifications = [
    "AI Course: TechSaksham Program",
    "Web Development Bootcamp: Shape AI",
    "Artificial Intelligence Job Simulation: Cognizant",
    "Career Essentials in Generative AI: Microsoft and LinkedIn Learning",
    "Artificial Intelligence Fundamentals: IBM Certified"
  ];

  return (
    <section id="personal-info" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Personal <span className="text-gradient">Information</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="gradient-secondary border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Contact Details
                </h3>
                <div className="space-y-4">
                  {personalDetails.map((item, index) => (
                    <div key={index}>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-background/50 transition-smooth group"
                        >
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                            <item.icon className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-sm">{item.label}</p>
                            <p className="text-muted-foreground text-sm">{item.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-3 rounded-lg">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <item.icon className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-sm">{item.label}</p>
                            <p className="text-muted-foreground text-sm">{item.value}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education & Experience */}
            <div className="space-y-6">
              {/* Education */}
              <Card className="gradient-secondary border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    Education
                  </h3>
                  <div>
                    <h4 className="font-semibold">{education.degree}</h4>
                    <p className="text-muted-foreground text-sm mb-1">{education.institution}</p>
                    <p className="text-muted-foreground text-sm mb-1">{education.college}</p>
                    <p className="text-muted-foreground text-sm">{education.duration} • {education.location}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="gradient-secondary border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Experience
                  </h3>
                  <div>
                    <h4 className="font-semibold">{experience.position}</h4>
                    <p className="text-muted-foreground text-sm mb-1">{experience.company}</p>
                    <p className="text-muted-foreground text-sm">{experience.duration}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Certifications */}
          <Card className="gradient-secondary border-border mt-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background/30">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p className="text-sm">{cert}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;