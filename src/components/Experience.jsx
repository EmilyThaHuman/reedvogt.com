import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovators Inc.',
      period: '2022 - Present',
      description: 'Leading the development of enterprise-level web applications and mentoring junior developers.',
      achievements: [
        'Architected and implemented a microservices-based platform that improved system scalability by 300%',
        'Led a team of 5 developers in delivering 3 major projects ahead of schedule',
        'Introduced automated testing practices that reduced bug reports by 60%',
      ],
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Docker'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client-facing web applications and internal tools.',
      achievements: [
        'Built a real-time analytics dashboard that increased client satisfaction by 40%',
        'Optimized database queries resulting in 50% faster page load times',
        'Implemented CI/CD pipelines that reduced deployment time by 70%',
      ],
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis', 'GitLab CI'],
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Web Agency',
      period: '2018 - 2020',
      description: 'Created responsive and interactive web interfaces for various client projects.',
      achievements: [
        'Developed 20+ custom websites with modern UI/UX practices',
        'Reduced bounce rates by 45% through performance optimization',
        'Created a reusable component library used across multiple projects',
      ],
      technologies: ['React', 'TypeScript', 'SASS', 'Webpack', 'Jest'],
    },
  ];

  const fadeInUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
        >
          <Badge variant="outline" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            A timeline of my professional experience and key achievements in
            the software development industry.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              className="relative pl-8 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                      <p className="text-muted-foreground">{experience.company}</p>
                    </div>
                    <Badge variant="outline">{experience.period}</Badge>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {experience.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {experience.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 