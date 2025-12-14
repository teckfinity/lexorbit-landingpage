import { useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, Network, TreePine, Shield, CheckCircle, Users, Building, GraduationCap, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useRef } from "react";

interface CaseNode {
  id: number;
  x: number;
  y: number;
  label: string;
  size: number;
  type: "landmark" | "cited" | "citing";
  year?: string;
  description?: string;
  citations?: number;
}

export default function CitationMaps() {
  const [selectedNode, setSelectedNode] = useState<CaseNode | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const centralNode: CaseNode = { 
    id: 1, x: 50, y: 50, label: "Brown v. Board of Education", size: 60, type: "landmark",
    year: "1954", description: "Landmark Supreme Court case that declared racial segregation in public schools unconstitutional.", citations: 25847
  };
  const connectedNodes: CaseNode[] = [
    { id: 2, x: 20, y: 25, label: "Plessy v. Ferguson", size: 40, type: "cited", year: "1896", description: "Established 'separate but equal' doctrine, later overturned by Brown.", citations: 8234 },
    { id: 3, x: 80, y: 20, label: "Bolling v. Sharpe", size: 35, type: "citing", year: "1954", description: "Extended Brown's desegregation ruling to federal territories.", citations: 3421 },
    { id: 4, x: 15, y: 75, label: "McLaurin v. Oklahoma", size: 30, type: "cited", year: "1950", description: "Ruled against segregation within graduate education.", citations: 2156 },
    { id: 5, x: 85, y: 70, label: "Green v. County School Board", size: 35, type: "citing", year: "1968", description: "Required school districts to take affirmative steps to desegregate.", citations: 4532 },
    { id: 6, x: 50, y: 85, label: "Swann v. Charlotte-Mecklenburg", size: 32, type: "citing", year: "1971", description: "Upheld busing as a means to achieve school desegregation.", citations: 3876 },
  ];
  const allNodes = [centralNode, ...connectedNodes];

  const handleNodeClick = (node: CaseNode) => {
    setSelectedNode(selectedNode?.id === node.id ? null : node);
  };

  const isNodeHighlighted = (node: CaseNode) => {
    if (!selectedNode) return true;
    if (selectedNode.id === node.id) return true;
    if (selectedNode.id === centralNode.id) return true;
    if (node.id === centralNode.id) return true;
    return false;
  };

  const isLineHighlighted = (connectedNode: CaseNode) => {
    if (!selectedNode) return true;
    if (selectedNode.id === centralNode.id) return true;
    if (selectedNode.id === connectedNode.id) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navigation showBanner={true} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F1419 0%, #1A2332 100%)' }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 165, 116, 0.03) 2px, rgba(212, 165, 116, 0.03) 4px)' }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Link 
            to="/#features" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Features</span>
          </Link>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-28 h-28 rounded-3xl mx-auto mb-8 flex items-center justify-center border-2 border-gold/30 shadow-lg" style={{ background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.2), rgba(232, 204, 180, 0.1))', boxShadow: '0 12px 40px rgba(212, 165, 116, 0.2)' }}>
              <GitBranch className="w-14 h-14 text-gold" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Citation <span className="text-gold">Maps</span>
            </h1>
            <p className="text-xl text-white/85 max-w-2xl mx-auto mb-10">
              Visualize how cases connect. See citation networks, trace legal precedent, and find the strongest authorities for your arguments.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="px-10 py-6 text-lg font-bold shadow-lg hover:-translate-y-1 transition-all" style={{ background: 'linear-gradient(135deg, #D4A574, #E5C69F)', color: '#0F1419', boxShadow: '0 8px 24px rgba(212, 165, 116, 0.4)' }}>
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="px-10 py-6 text-lg border-2 border-white/30 text-white hover:border-gold hover:text-gold bg-transparent">
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-24 px-4 bg-cream-dark">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">See It in Action</h2>
            <p className="text-charcoal/70 text-lg">Click on any case to explore its connections</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div ref={containerRef} className="relative h-80 md:h-[450px] bg-navy/5 rounded-2xl overflow-hidden mb-8">
              {/* Connection Lines - Draw FIRST so they appear behind nodes */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 1 }}
              >
                {/* Lines from central node to all connected nodes */}
                {connectedNodes.map((node, index) => {
                  const highlighted = isLineHighlighted(node);
                  
                  return (
                    <motion.line 
                      key={`line-${node.id}`}
                      x1={`${centralNode.x}%`} 
                      y1={`${centralNode.y}%`} 
                      x2={`${node.x}%`} 
                      y2={`${node.y}%`} 
                      stroke={node.type === 'cited' ? 'rgba(212, 165, 116, 0.6)' : 'rgba(122, 155, 118, 0.6)'} 
                      strokeWidth={highlighted && selectedNode ? 3 : 2}
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ 
                        pathLength: 1,
                        opacity: highlighted ? 0.8 : 0.3
                      }}
                      viewport={{ once: true }}
                      transition={{ 
                        pathLength: { duration: 0.8, delay: index * 0.15 },
                        opacity: { duration: 0.5, delay: index * 0.1 }
                      }}
                      className="network-line"
                    />
                  );
                })}
                
                {/* Additional cross-connections between some outer nodes */}
                <motion.line 
                  x1={`${connectedNodes[0].x}%`} 
                  y1={`${connectedNodes[0].y}%`} 
                  x2={`${connectedNodes[2].x}%`} 
                  y2={`${connectedNodes[2].y}%`} 
                  stroke="rgba(212, 165, 116, 0.25)" 
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                />
                <motion.line 
                  x1={`${connectedNodes[1].x}%`} 
                  y1={`${connectedNodes[1].y}%`} 
                  x2={`${connectedNodes[3].x}%`} 
                  y2={`${connectedNodes[3].y}%`} 
                  stroke="rgba(122, 155, 118, 0.25)" 
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                />
              </svg>
              
              {/* Nodes - Draw SECOND so they appear on top of lines */}
              {allNodes.map((node) => {
                const highlighted = isNodeHighlighted(node);
                const isSelected = selectedNode?.id === node.id;
                
                return (
                  <motion.div
                    key={`node-${node.id}`}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ 
                      scale: highlighted ? 1 : 0.7,
                      opacity: highlighted ? 1 : 0.3
                    }}
                    viewport={{ once: true }}
                    transition={{ 
                      scale: { duration: 0.4, delay: 0.3 + node.id * 0.1 },
                      opacity: { duration: 0.3, delay: 0.3 + node.id * 0.1 }
                    }}
                    onClick={() => handleNodeClick(node)}
                    className={`absolute cursor-pointer group ${isSelected ? 'z-30' : 'z-20'}`}
                    style={{ 
                      left: `${node.x}%`, 
                      top: `${node.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <motion.div 
                      className={`rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg ${
                        node.type === 'landmark' ? 'bg-gold' : node.type === 'cited' ? 'bg-navy' : 'bg-sage'
                      }`}
                      style={{ width: node.size, height: node.size }}
                      whileHover={{ scale: 1.15 }}
                      animate={{ 
                        scale: isSelected ? 1.2 : 1,
                        boxShadow: isSelected 
                          ? '0 0 24px rgba(212, 165, 116, 0.7)' 
                          : '0 4px 16px rgba(0,0,0,0.2)'
                      }}
                    >
                      {node.id}
                    </motion.div>
                    <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap text-xs font-medium text-charcoal/80 transition-opacity ${isSelected || !selectedNode ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                      {node.label.split(' ').slice(0, 2).join(' ')}
                    </div>
                  </motion.div>
                );
              })}

              {/* Case Details Panel */}
              {selectedNode && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="absolute top-4 right-4 w-72 bg-white rounded-xl shadow-xl border border-gold/20 p-4 z-30"
                >
                  <button 
                    onClick={() => setSelectedNode(null)}
                    className="absolute top-3 right-3 text-charcoal/50 hover:text-charcoal transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold mb-3 ${
                    selectedNode.type === 'landmark' ? 'bg-gold' : selectedNode.type === 'cited' ? 'bg-navy' : 'bg-sage'
                  }`}>
                    {selectedNode.id}
                  </div>
                  <h4 className="font-heading font-bold text-navy text-lg mb-1">{selectedNode.label}</h4>
                  <p className="text-gold font-medium text-sm mb-2">{selectedNode.year}</p>
                  <p className="text-charcoal/70 text-sm mb-3 leading-relaxed">{selectedNode.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-charcoal/60">Citations:</span>
                    <span className="font-bold text-navy">{selectedNode.citations?.toLocaleString()}</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gold/10">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                      selectedNode.type === 'landmark' ? 'bg-gold/10 text-gold' : 
                      selectedNode.type === 'cited' ? 'bg-navy/10 text-navy' : 'bg-sage/10 text-sage'
                    }`}>
                      {selectedNode.type === 'landmark' ? 'Central Case' : selectedNode.type === 'cited' ? 'Cited By Central' : 'Cites Central'}
                    </span>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="flex flex-wrap gap-6 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gold" />
                <span className="text-sm text-charcoal/70">Central Case</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-navy" />
                <span className="text-sm text-charcoal/70">Cited By</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-sage" />
                <span className="text-sm text-charcoal/70">Citing Cases</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-16">
            What Makes It Powerful
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Network, title: "Visual Case Mapping", desc: "See the entire citation network at a glance. Understand how cases relate and which authorities carry the most weight." },
              { icon: TreePine, title: "Citation Trees", desc: "Trace precedent from the roots up. Find the original sources that shaped modern law in your area." },
              { icon: Shield, title: "Authority Strength", desc: "Identify which cases have been cited most frequently and most recently. Build arguments on solid ground." },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="bg-cream rounded-2xl p-8 border border-gold/20 hover:border-gold hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 rounded-xl mb-5 flex items-center justify-center" style={{ background: 'rgba(212, 165, 116, 0.12)' }}>
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #1A2332 0%, #0F1419 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center">
            {[
              { value: "65M+", label: "Cases Mapped" },
              { value: "400M+", label: "Citations Tracked" },
              { value: "6", label: "Degrees Deep" },
              { value: "Real-Time", label: "Network Updates" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-white/70 uppercase tracking-wider text-sm font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-cream-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">How It Works</h2>
            <p className="text-charcoal/70 text-lg">Simple process, powerful results</p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
            {[
              { num: "1", title: "Enter a Case", desc: "Start with any case citation. We'll map every case that cites it and every case it cites." },
              { num: "2", title: "Explore the Network", desc: "Navigate the visual map to understand relationships, authority, and precedent chains." },
              { num: "3", title: "Build Your Argument", desc: "Export key citations and use the strongest authorities in your briefs and motions." },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="flex-1 flex flex-col md:flex-row items-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg flex-1 w-full">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-black mb-6" style={{ background: 'linear-gradient(135deg, #D4A574, #E5C69F)', boxShadow: '0 4px 12px rgba(212, 165, 116, 0.3)' }}>
                    {step.num}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-3">{step.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{step.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:flex w-16 items-center justify-center text-gold text-2xl">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-16">
            Who Benefits Most
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Users, 
                title: "Appellate Attorneys", 
                desc: "Build compelling arguments by showing how precedent evolved. Demonstrate authority chains visually.",
                benefits: ["Precedent mapping", "Authority visualization", "Brief preparation"]
              },
              { 
                icon: Building, 
                title: "Research Teams", 
                desc: "Collaborate on complex research projects. Share citation maps across your team.",
                benefits: ["Team collaboration", "Research efficiency", "Knowledge sharing"]
              },
              { 
                icon: GraduationCap, 
                title: "Legal Scholars", 
                desc: "Analyze how legal doctrine develops over time. Trace the evolution of constitutional law.",
                benefits: ["Academic research", "Doctrine tracing", "Publication support"]
              },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-8 border-2 border-gold/20 hover:border-gold hover:-translate-y-2 hover:shadow-xl transition-all"
                style={{ background: 'linear-gradient(135deg, rgba(245, 230, 210, 0.15) 0%, #FFFFFF 50%)' }}
              >
                <item.icon className="w-14 h-14 text-gold mb-6" />
                <h3 className="font-heading text-2xl font-bold text-navy mb-4">{item.title}</h3>
                <p className="text-charcoal/70 leading-relaxed mb-6">{item.desc}</p>
                <ul className="space-y-2">
                  {item.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center gap-2 text-charcoal/80">
                      <CheckCircle className="w-5 h-5 text-sage" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-24 px-4 bg-cream-dark">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center rounded-3xl p-12 md:p-16 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1A2332 0%, #0F1419 100%)', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)' }}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(212, 165, 116, 0.12) 0%, transparent 70%)' }} />
            </div>
            
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">See the Bigger Picture</h2>
              <p className="text-white/85 text-lg mb-10">Join 10,000+ attorneys who visualize legal connections with LexOrbit.</p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Button size="lg" className="px-12 py-6 text-lg font-bold" style={{ background: 'linear-gradient(135deg, #D4A574, #E5C69F)', color: '#0F1419', boxShadow: '0 12px 32px rgba(212, 165, 116, 0.4)' }}>
                  Start Free Trial
                </Button>
                <Link to="/#pricing">
                  <Button size="lg" variant="outline" className="px-12 py-6 text-lg border-2 border-white/30 text-white hover:border-gold hover:text-gold bg-transparent">
                    View Pricing
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 justify-center text-white/70 text-sm">
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-sage" /> No credit card required</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-sage" /> 14-day free trial</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-sage" /> Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
