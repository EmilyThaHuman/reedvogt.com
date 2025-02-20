import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web App', 'Mobile', 'API', 'UI/UX'];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with real-time inventory management and secure payment processing.',
      image: '/project-1.jpg',
      category: 'Web App',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/yourusername/project-1',
      liveUrl: 'https://project-1.com',
    },
    {
      title: 'Task Management API',
      description: 'RESTful API for task management with authentication, real-time updates, and detailed documentation.',
      image: '/project-2.jpg',
      category: 'API',
      technologies: ['Express.js', 'PostgreSQL', 'JWT', 'Socket.io'],
      githubUrl: 'https://github.com/yourusername/project-2',
      liveUrl: 'https://api-docs.project-2.com',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Interactive dashboard for social media analytics with real-time data visualization.',
      image: '/project-3.jpg',
      category: 'UI/UX',
      technologies: ['React', 'D3.js', 'Tailwind CSS', 'Firebase'],
      githubUrl: 'https://github.com/yourusername/project-3',
      liveUrl: 'https://project-3.com',
    },
    {
      title: 'Fitness Tracking App',
      description: 'Mobile application for tracking workouts and nutrition with personalized recommendations.',
      image: '/project-4.jpg',
      category: 'Mobile',
      technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/yourusername/project-4',
      liveUrl: 'https://project-4.com',
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather forecasting application with interactive maps and alerts.',
      image: '/project-5.jpg',
      category: 'Web App',
      technologies: ['React', 'OpenWeatherAPI', 'Mapbox', 'Tailwind CSS'],
      githubUrl: 'https://github.com/yourusername/project-5',
      liveUrl: 'https://project-5.com',
    },
    {
      title: 'Blog CMS',
      description: 'Content management system for blogs with markdown support and SEO optimization.',
      image: '/project-6.jpg',
      category: 'Web App',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS S3'],
      githubUrl: 'https://github.com/yourusername/project-6',
      liveUrl: 'https://project-6.com',
    },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A collection of my most notable projects, showcasing my skills
            and experience in different areas of software development.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Button
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary transition-colors"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 