import Layout from '@/components/layout/Layout';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'IT Project Manager',
    company: 'Bluebash Consulting Pvt Ltd',
    location: 'Mohali',
    period: 'July 2021 - Current',
    responsibilities: [
      'Delivered & managed multiple projects across SaaS, CRM, eCommerce, multi-vendor, and enterprise application domains using Agile and hybrid methodologies.',
      'Created and maintained project roadmaps, resource allocation plans, and project documentation using tools like JIRA and Confluence.',
      'Led sprint planning, daily stand-ups, retrospectives, and stakeholder demos, ensuring consistent project progress and alignment.',
      'Collaborated with engineering, DevOps, QA, UI/UX, and product teams to define and achieve technical and business objectives.',
      'Implemented CI/CD pipelines and DevOps best practices, reducing deployment time and improving system reliability.',
      'Monitored project KPIs, risk logs, and delivery metrics to ensure compliance with timelines, budgets, and quality standards.',
      'Translated complex business requirements into detailed technical specifications and prioritized actionable development tasks.',
      'Promoted engineering excellence by enforcing coding standards, security protocols, and documentation practices.',
    ],
  },
  {
    title: 'Sr. Business Analyst & Web Consultant',
    company: 'Tech Striker',
    location: 'Mohali, India',
    period: 'October 2017 - June 2021',
    responsibilities: [
      'Led requirement analysis, pre-sales, and post-sales activities for diverse client projects.',
      'Prepared detailed project proposals and documentation aligned with client goals and scope.',
      'Divided projects into modules; collaborated with international clients and analyzed web solutions.',
      'Communicated and negotiated with stakeholders while managing deliverables and mitigating risks.',
      'Acted as a liaison between clients and development teams for smooth project execution.',
      'Coordinated SDLC-based projects using PHP, Shopify, Magento, and Laravel technologies.',
      'Guided Agile practices, integrated documentation standards, and supported hybrid Agile-Waterfall teams.',
    ],
  },
  {
    title: 'Business Manager & Analyst',
    company: 'Simsaw INC.',
    location: 'Mohali',
    period: 'August 2015 - September 2017',
    responsibilities: [
      'Managed business operations, budgeting, and resource planning to drive efficiency and profitability.',
      'Analyzed market trends and customer insights to identify opportunities and recommend improvements.',
      'Bridged business and technical teams by translating requirements into clear, actionable specifications.',
    ],
  },
  {
    title: 'Business Analyst',
    company: 'Rex Web Solutions',
    location: 'Mohali',
    period: 'February 2014 - July 2015',
    responsibilities: [
      'Conducted detailed requirement analysis to define clear project scope and directions.',
      'Collaborated with stakeholders to establish deliverables and maintain effective communication across the project life cycle.',
      'Supported pre-sales and post-sales efforts, created proposals, and drove successful project planning and execution.',
    ],
  },
  {
    title: 'Jr. Business Developer',
    company: 'Webnnor Informatics Pvt Ltd',
    location: 'Chandigarh',
    period: 'May 2013 - January 2014',
    responsibilities: [
      'Assisted in identifying potential clients and business opportunities through market research and lead generation activities.',
      'Supported senior business developers in preparing proposals, conducting client meetings, and building relationships to drive business growth and revenue.',
      'Developed, maintained and utilized a diverse client base.',
    ],
  },
];

const Experience = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 animate-slide-up opacity-0">
              Career Journey
            </p>
            <h1 className="section-title mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.1s' }}>
              Professional Experience
            </h1>
            <p className="section-subtitle animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
              Over 10+ years of experience in project management, business analysis, and software delivery.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border/50 md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-16 animate-slide-up opacity-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10" />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-20 md:pl-0`}>
                  <div className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 card-hover">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-2 text-muted-foreground text-sm">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-6">{exp.company}</p>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li
                          key={respIndex}
                          className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
