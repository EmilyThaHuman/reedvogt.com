import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Sparkles, Brain, Zap, Globe } from 'lucide-react';

const Projects = () => {
  const project = {
    title: 'ZeroTwo.ai',
    tagline: 'Building the Future with AI-Powered Applications',
    description: 'As CEO and Lead AI Engineer, I founded ZeroTwo.ai to revolutionize how businesses leverage artificial intelligence. We specialize in cutting-edge AI solutions including multi-agent systems, conversational AI, advanced RAG architectures, and enterprise AI orchestration.',
    longDescription: 'ZeroTwo.ai is at the forefront of AI innovation, providing next-generation AI platforms that combine multiple specialized AI agents to revolutionize creative and technical workflows. Our platform supports 15+ AI providers, custom model integration, and advanced vector search capabilities.',
    image: '/new-profile-pic.png',
    liveUrl: 'https://zerotwo.ai/',
    technologies: [
      'OpenAI GPT-4',
      'Claude AI',
      'Next.js',
      'React',
      'Node.js',
      'Supabase',
      'PostgreSQL',
      'Vector Databases',
      'Multi-Agent Systems',
      'RAG Architecture',
      'TypeScript',
      'Tailwind CSS',
    ],
    features: [
      {
        icon: <Brain className="w-6 h-6" />,
        title: 'Multi-Agent Orchestration',
        description: 'Coordinating specialized AI agents for complex tasks with autonomous decision-making capabilities.',
      },
      {
        icon: <Sparkles className="w-6 h-6" />,
        title: 'Advanced RAG Architecture',
        description: 'Custom vector search and knowledge retrieval systems for enhanced AI responses.',
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'Real-time AI Collaboration',
        description: 'Live AI-assisted editing, brainstorming, and content generation.',
      },
      {
        icon: <Globe className="w-6 h-6" />,
        title: 'Enterprise AI Integration',
        description: 'Supporting 15+ AI providers with custom model deployment and scaling.',
      },
    ],
    stats: [
      { label: 'AI Models Integrated', value: '15+' },
      { label: 'AI Agents Deployed', value: '100+' },
      { label: 'Vector Embeddings', value: '50M+' },
      { label: 'AI-Generated Assets', value: '10K+' },
    ],
  };

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
            Featured Company
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My Company
          </h2>
          <p className="text-lg text-muted-foreground">
            As CEO and Lead AI Engineer, I founded ZeroTwo.ai to revolutionize
            how businesses leverage artificial intelligence.
          </p>
        </motion.div>

        {/* Main Project Card */}
        <motion.div
          className="max-w-6xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-square md:aspect-auto overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="text-center">
                    <h3 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      ZeroTwo.ai
                    </h3>
                    <p className="text-xl text-muted-foreground mb-8">
                      {project.tagline}
                    </p>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Visit ZeroTwo.ai
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="p-8 md:p-12">
                <Badge className="mb-4">CEO & Lead AI Engineer</Badge>
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>
                <p className="text-muted-foreground mb-6">
                  {project.longDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 8).map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {project.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="p-3 rounded-full bg-primary/10 text-primary w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {project.stats.map((stat, index) => (
            <Card key={stat.label}>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge variant="outline" className="px-4 py-2">
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

export default Projects; 