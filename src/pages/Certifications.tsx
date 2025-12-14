import Layout from '@/components/layout/Layout';
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';

const certifications = [
  {
    title: 'Agile Expert Certificate of Proficiency',
    description: 'Demonstrated expertise in Agile methodologies including Scrum, Kanban, and Lean practices for effective project management.',
    skills: ['Scrum Framework', 'Kanban', 'Sprint Planning', 'Retrospectives', 'User Stories'],
  },
  {
    title: 'Project Management Fundamentals',
    description: 'Comprehensive understanding of project management principles, methodologies, and best practices.',
    skills: ['Project Lifecycle', 'Risk Management', 'Stakeholder Communication', 'Resource Planning', 'Budget Management'],
  },
  {
    title: 'Generative AI Overview for Project Managers',
    description: 'Understanding of AI-driven tools and automation techniques to enhance project management efficiency.',
    skills: ['AI Tools Integration', 'Automation Workflows', 'Productivity Enhancement', 'AI-Assisted Decision Making'],
  },
  {
    title: 'Introduction to API Testing',
    description: 'Foundational knowledge in API testing methodologies and tools for ensuring software quality.',
    skills: ['API Testing', 'Quality Assurance', 'Test Automation', 'Integration Testing'],
  },
];

const Certifications = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 animate-slide-up opacity-0">
              Credentials
            </p>
            <h1 className="section-title mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.1s' }}>
              Certifications
            </h1>
            <p className="section-subtitle animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
              Professional certifications that validate expertise and commitment to continuous learning.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 card-hover animate-slide-up opacity-0"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award size={32} className="text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div>
                  <p className="text-sm text-primary mb-3">Skills Acquired</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 bg-secondary/50 text-muted-foreground text-xs px-3 py-1.5 rounded-full"
                      >
                        <CheckCircle2 size={12} className="text-primary" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-gradient-to-br from-primary/5 to-transparent border border-border/50 rounded-2xl p-8 text-center animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-serif font-semibold mb-4">Commitment to Growth</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I believe in continuous learning and staying updated with the latest industry trends and technologies. These certifications represent my dedication to professional excellence and delivering value in every project I undertake.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Certifications;
