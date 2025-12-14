import Layout from '@/components/layout/Layout';
import { ArrowUpRight, Code, ShoppingCart, Layers, Database, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Custom Centralized CRM Development',
    icon: Database,
    description: 'A comprehensive CRM solution built for centralized customer relationship management.',
    technologies: ['Ruby on Rails', 'ReactJS', 'Figma'],
    integrations: ['Stripe', 'CC Avenue', 'Klarna', 'Sofort', 'Checkout V2'],
    features: [
      'Centralized customer data management',
      'Multiple payment gateway integrations',
      'Custom shipping integrations',
      'Third-party service integrations',
    ],
  },
  {
    title: 'eCommerce Applications Development',
    icon: ShoppingCart,
    description: 'Managed high-end eCommerce projects with various technology stacks and platforms.',
    technologies: ['Spree', 'Shopify', 'Ruby on Rails', 'PHP', 'WooCommerce', 'Magento'],
    integrations: [],
    features: [
      'Multi-platform development',
      'Mobile application integration',
      'Custom checkout solutions',
      'Inventory management systems',
    ],
  },
  {
    title: 'Multi-tenant Applications',
    icon: Layers,
    description: 'Developed scalable multi-tenant architecture solutions for enterprise clients.',
    technologies: ['Cloud Infrastructure', 'Microservices', 'API Development'],
    integrations: [],
    features: [
      'Tenant isolation and security',
      'Scalable architecture design',
      'Shared resource optimization',
      'Custom branding per tenant',
    ],
  },
  {
    title: 'SaaS Based Applications',
    icon: Globe,
    description: 'End-to-end management of SaaS application development and deployment.',
    technologies: ['Cloud Platforms', 'CI/CD Pipelines', 'DevOps'],
    integrations: [],
    features: [
      'Subscription management',
      'User authentication & authorization',
      'Analytics & reporting',
      'API integrations',
    ],
  },
  {
    title: 'CMS Based Applications',
    icon: Code,
    description: 'Management of content management system implementations for various clients.',
    technologies: ['WordPress', 'Custom CMS', 'Headless CMS'],
    integrations: [],
    features: [
      'Content workflow automation',
      'Multi-language support',
      'SEO optimization',
      'Custom plugin development',
    ],
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 animate-slide-up opacity-0">
              Portfolio
            </p>
            <h1 className="section-title mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.1s' }}>
              Featured Projects
            </h1>
            <p className="section-subtitle animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
              A showcase of successful projects delivered across various domains and technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="group bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 card-hover animate-slide-up opacity-0"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <ArrowUpRight
                      size={24}
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <p className="text-sm text-primary mb-3">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-secondary/50 text-muted-foreground text-xs px-3 py-1.5 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Integrations */}
                  {project.integrations.length > 0 && (
                    <div className="mb-6">
                      <p className="text-sm text-primary mb-3">Integrations</p>
                      <div className="flex flex-wrap gap-2">
                        {project.integrations.map((integration) => (
                          <span
                            key={integration}
                            className="bg-primary/10 text-primary text-xs px-3 py-1.5 rounded-full"
                          >
                            {integration}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  <div>
                    <p className="text-sm text-primary mb-3">Key Features</p>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2 text-muted-foreground text-sm"
                        >
                          <span className="w-1 h-1 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
