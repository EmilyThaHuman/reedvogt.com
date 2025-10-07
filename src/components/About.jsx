import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const highlights = [
    {
      title: 'Experience',
      description: '5+ years in web development',
    },
    {
      title: 'Projects',
      description: '50+ successful projects',
    },
    {
      title: 'Clients',
      description: 'Worked with Fortune 500 companies',
    },
  ];

  const fadeInUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
        >
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Passionate about creating impactful digital solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            With a strong foundation in both front-end and back-end development,
            I bring ideas to life through clean, efficient, and scalable code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold">My Journey</h3>
            <p className="text-muted-foreground">
              I started my journey in software development during my college years,
              where I discovered my passion for creating innovative solutions to complex problems.
              Since then, I've worked with various technologies and frameworks,
              always staying at the forefront of industry trends.
            </p>
            <p className="text-muted-foreground">
              My experience spans from developing high-performance web applications
              to creating robust backend systems. I'm particularly interested in
              user experience, performance optimization, and building scalable
              architectures.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Problem Solver</Badge>
              <Badge variant="secondary">Team Player</Badge>
              <Badge variant="secondary">Quick Learner</Badge>
              <Badge variant="secondary">Detail Oriented</Badge>
            </div>
          </motion.div>

          <motion.div
            className="relative aspect-square"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg" />
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            <img
              src="/new-profile-pic.png"
              alt="Reed Vogt - CEO of ZeroTwo.ai"
              className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-90"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 