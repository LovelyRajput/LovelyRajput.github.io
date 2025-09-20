import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Deep expertise in ML algorithms, neural networks, and model optimization"
    },
    {
      icon: Code,
      title: "AI Development",
      description: "Building scalable AI solutions with modern frameworks and tools"
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Extracting insights from complex datasets using statistical methods"
    },
    {
      icon: TrendingUp,
      title: "Model Deployment",
      description: "Deploying ML models to production with MLOps best practices"
    }
  ];

  const skills = [
    "Python", "JavaScript", "Machine Learning", "Deep Learning", "Generative AI", 
    "Large Language Models (LLMs)", "Prompt Engineering", "Natural Language Processing",
    "LangChain", "GPT-3", "React", "Flask", "OpenRouter API", "LiteLLM", 
    "Data Analysis", "Model Deployment", "Database Management", "Git", "GitHub", 
    "Jupyter Notebooks", "Synthetic Data Generation", "File Data Extraction", 
    "API Development", "UI Design", "Data Preprocessing", "Random Forest", "Neural Networks"
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate AI/ML engineer with expertise in developing intelligent systems 
              that drive business value. My journey spans from research to production, 
              focusing on creating scalable and impactful AI solutions.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Story */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a dedicated AI/ML Engineer with a Bachelor's in Computer Science from Delhi University. 
                  My journey began with a passion for transforming complex data into actionable insights 
                  and building intelligent systems that solve real-world business challenges.
                </p>
                <p>
                  Currently working as an AI/ML Engineer Intern at Provana Private Limited, I've developed 
                  machine learning models achieving up to 85% accuracy in employee retention prediction, 
                  automated data extraction pipelines reducing manual processing by 70%, and created 
                  synthetic customer personas that enhanced training effectiveness by 25%.
                </p>
                <p>
                  My expertise spans from traditional ML algorithms to cutting-edge LLMs, with hands-on 
                  experience in model deployment, NLP pipelines, and building unified AI platforms. 
                  I'm passionate about leveraging AI to drive business value and operational efficiency.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">What I Do</h3>
              <div className="grid gap-4">
                {highlights.map((item, index) => (
                  <Card key={index} className="p-4 gradient-secondary border-border hover:border-primary transition-smooth">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;