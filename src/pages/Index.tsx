import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Index = () => {
  const skills = [
    'Project Management',
    'Agile & Scrum',
    'Cross-Functional Leadership',
    'SaaS & eCommerce',
    'CI/CD & DevOps',
    'Stakeholder Management',
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-6 animate-slide-up opacity-0" style={{ animationDelay: '0.1s' }}>
              Technical Project Manager
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold leading-tight mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
              Hi, I'm{' '}
              <span className="text-gradient">Varun Kumar</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-12 animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
              Delivering high-impact SaaS products, eCommerce solutions, and enterprise software with expertise in Agile, DevOps, and cross-functional team leadership.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:gap-4"
              >
                Get in Touch
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 border border-border px-8 py-4 rounded-full font-medium hover:border-primary hover:text-primary transition-all duration-300"
              >
                View Experience
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Core Expertise</h2>
            <p className="section-subtitle mx-auto">
              Specialized skills honed through years of delivering complex projects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="bg-secondary/50 border border-border/50 rounded-xl p-6 text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              >
                <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="section-title mb-6">Let's Work Together</h2>
          <p className="section-subtitle mx-auto mb-12">
            Have a project in mind? I'd love to hear about it.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-5 rounded-full font-medium text-lg hover:bg-primary/90 transition-all duration-300 glow-effect hover:gap-4"
          >
            <Mail size={20} />
            Get in Touch
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
