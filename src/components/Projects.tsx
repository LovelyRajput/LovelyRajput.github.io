import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Employee Retention Prediction Model",
      description: "Developed a machine learning and survival analysis solution to predict employee turnover and identify actionable retention strategies for a workforce of over 6,000 employees.",
      technologies: ["Python", "Random Forest", "Kaplan-Meier", "Machine Learning", "Data Analysis"],
      category: "ML Core",
      image: "👥",
      features: [
        "Achieved over 72% accuracy in prediction tasks",
        "Engineered data pipelines for cleansing and normalization",
        "Provided data-driven recommendations to leadership",
        "Reduced manual analysis efforts significantly"
      ]
    },
    {
      title: "Training Agent Bot",
      description: "Generated synthetic customer personas and dialogue scenarios to enhance the training of conversational agents in a contact center environment using advanced prompting techniques.",
      technologies: ["Python", "GPT-3", "LangChain", "Livekit", "FastRTC"],
      category: "Prompting & NLP",
      image: "🤖",
      features: [
        "Improved agent performance by 25%",
        "Created diverse customer personas and scenarios",
        "Real-time, multi-model voice integration",
        "Scalable backend architecture"
      ]
    },
    {
      title: "Data Extraction System",
      description: "Built an automated system using LLMs to extract structured data from various unstructured files, reducing manual effort and improving operational efficiency.",
      technologies: ["Python", "Flask", "LangChain", "LLMs", "Prompt Engineering"],
      category: "Intelligent Automation",
      image: "🗂️",
      features: [
        "Intuitive UI for file uploads and queries",
        "Advanced prompt engineering techniques",
        "Significantly reduced manual effort",
        "Enhanced user experience and workflow"
      ]
    },
    {
      title: "Excel Interviewer Platform",
      description: "Created an interactive AI tool to simulate Excel interview conversations, helping users prepare by practicing with realistic scenarios and receiving instant feedback.",
      technologies: ["React", "OpenRouter API", "LLMs", "JavaScript"],
      category: "AI-driven Education",
      image: "📊",
      features: [
        "Live interview simulation with LLMs",
        "AI-generated targeted questions",
        "Instant user feedback system",
        "Personalized practice and evaluation"
      ]
    },
    {
      title: "LLM Comparator Portal",
      description: "Developed a secure platform integrating multiple LLMs (Claude, Mistral, DeepSeek, Grok) through a single gateway, simplifying access and management for end-users.",
      technologies: ["LiteLLM", "React", "Flask", "API Gateway", "Multiple LLMs"],
      category: "Unified AI Platform",
      image: "🔗",
      features: [
        "Centralized dashboard for unified access",
        "Improved security with centralized API keys",
        "Easy model comparison and deployment",
        "Increased user productivity and efficiency"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work in AI and machine learning, demonstrating 
              practical applications and innovative solutions across various domains.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden border-border hover:border-primary transition-smooth gradient-secondary">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{project.image}</div>
                      <div>
                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                        <Badge variant="outline" className="mb-3">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button size="sm" className="flex items-center gap-2" variant="outline">
                      <Github className="w-4 h-4" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;