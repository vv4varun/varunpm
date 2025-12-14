import Layout from '@/components/layout/Layout';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const skills = [
    'Software Development Life Cycle',
    'Custom Apps Project Management',
    'Cross-Functional Team Leadership',
    'AI-Driven Productivity & Automation',
    'Agile Methodologies',
    'JIRA Management',
    'Project Management',
    'Resource Allocation',
    'Technical Documentation & Requirements Gathering',
    'Process Improvement',
    'Backlog Prioritization',
    'Sprint Planning',
    'Stakeholder Management',
    'Wireframing',
  ];

  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 animate-slide-up opacity-0">
              About Me
            </p>
            <h1 className="section-title mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.1s' }}>
              A passionate Technical Project Manager
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Summary */}
            <div className="space-y-8 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card border border-border/50 rounded-2xl p-8">
                <h2 className="text-2xl font-serif font-semibold mb-6">Summary</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Skilled Technical Project Manager with a proven track record in delivering high-impact SaaS products, eCommerce solutions, multi-vendor marketplaces, custom web applications, and enterprise-level software. Skilled in managing full project lifecycles, aligning cross-functional teams, and applying Agile, Scrum, and DevOps methodologies to drive on-time, high-quality product delivery. Strong expertise in cloud infrastructure, CI/CD pipelines, risk management, and stakeholder communication.
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-card border border-border/50 rounded-2xl p-8">
                <h2 className="text-2xl font-serif font-semibold mb-6">Contact Information</h2>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="text-primary">Email:</span>
                    <a href="mailto:vermavarun.r@gmail.com" className="hover:text-primary transition-colors">
                      vermavarun.r@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">Phone:</span>
                    <a href="tel:+919023980449" className="hover:text-primary transition-colors">
                      +91 9023980449
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">Location:</span>
                    <span>Mohali, India 160059</span>
                  </li>
                </ul>
              </div>

              {/* Education */}
              <div className="bg-card border border-border/50 rounded-2xl p-8">
                <h2 className="text-2xl font-serif font-semibold mb-6">Education</h2>
                <div>
                  <h3 className="text-lg font-medium text-foreground">Bachelor of Computer Applications</h3>
                  <p className="text-muted-foreground">Computer Application</p>
                  <p className="text-primary text-sm mt-1">Punjab Technical University</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
              <div className="bg-card border border-border/50 rounded-2xl p-8 sticky top-32">
                <h2 className="text-2xl font-serif font-semibold mb-8">Skills & Expertise</h2>
                <div className="grid gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl hover:bg-primary/5 hover:border-primary/30 border border-transparent transition-all duration-300"
                    >
                      <CheckCircle2 size={18} className="text-primary shrink-0" />
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
