import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      title: 'Backend Development',
      description: 'Building robust and scalable server-side applications',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'SQL/NoSQL', level: 85 },
        { name: 'RESTful APIs', level: 90 },
      ],
    },
    {
      title: 'Tools & Technologies',
      description: 'Utilizing modern development tools and practices',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'AWS/Cloud', level: 75 },
        { name: 'CI/CD', level: 85 },
      ],
    },
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
    'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS',
    'GraphQL', 'REST', 'Tailwind CSS', 'Git', 'GitHub Actions',
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-4">
            Skills & Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technical Proficiency
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive overview of my technical skills and expertise in
            various areas of software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      >
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge variant="secondary" className="px-4 py-2">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 