'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, CheckCircle, ArrowRight, Calendar, Mail } from 'lucide-react';

export default function AimvestingWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const colors = {
    darkGrey: '#1a1f2e',
    mint: '#00d084',
    pink: '#ff6b9d',
    skyBlue: '#5eb3d6',
    lightGrey: '#f5f7fa',
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const services = [
    {
      id: 'ai-adoption',
      title: 'AI Adoption & Automation',
      icon: '🤖',
      shortDesc: 'Scale without hiring. Automate workflows with AI.',
      fullDesc: 'We help you identify where AI can drive efficiency, reduce manual work, and eliminate headcount needs. From customer service automation to intelligent pricing and inventory forecasting, we\'re your conduit to successful AI implementation. Scale smarter, not bigger.',
      benefits: ['AI tool assessment & selection', 'Workflow automation design', 'Staff efficiency improvements', 'Cost & headcount reduction planning', 'Implementation roadmap & support', 'Staff training & change management'],
      price: 'From £400 per implementation plan',
    },
    {
      id: 'ebay',
      title: 'eBay Optimisation',
      icon: '📦',
      shortDesc: 'Increase sales velocity and visibility on eBay',
      fullDesc: 'From listing optimisation and pricing strategy to category selection and marketplace positioning, we\'ll help you dominate eBay.',
      benefits: ['Listing audits & keyword research', 'Pricing & competitive analysis', 'Category & attribute optimisation', 'Shipping & returns strategy'],
      price: 'From £150 per audit',
    },
    {
      id: 'amazon',
      title: 'Amazon Strategy (FBA & FBM)',
      icon: '🛍️',
      shortDesc: 'Optimise profitability across FBA and FBM',
      fullDesc: 'Whether you\'re using Fulfilled by Amazon (FBA) or Fulfilled by Merchant (FBM), we\'ll help you optimize profitability. Includes breakeven analysis, fee optimization, inventory turnover, and multi-variant strategy.',
      benefits: ['FBA & FBM fee modelling & analysis', 'Profit margin optimization', 'Inventory planning & forecasting', 'Fulfillment method comparison', 'A/B testing strategy'],
      price: 'From £200 per analysis',
    },
    {
      id: 'multichannel',
      title: 'Multi-Channel Strategy',
      icon: '🌐',
      shortDesc: 'Manage eBay, Amazon, BackMarket, OnBuy & Shopify',
      fullDesc: 'Unified inventory management, channel prioritisation, and cross-platform analytics to scale without chaos.',
      benefits: ['Channel performance analysis', 'Inventory sync & allocation', 'Platform comparison & selection', 'Growth roadmap'],
      price: 'From £300 per strategy',
    },
    {
      id: 'reviews',
      title: 'Review & Feedback Management',
      icon: '⭐',
      shortDesc: 'Protect your seller reputation and convert trust',
      fullDesc: 'Proactive feedback strategies, review campaigns, and reputation recovery to maintain a 4.9+ seller score.',
      benefits: ['Feedback strategy & templates', 'Review campaign setup', 'Negative feedback response', 'Seller health dashboard'],
      price: 'From £100 per audit',
    },
    {
      id: 'returns',
      title: 'Returns & Fulfilment',
      icon: '📮',
      shortDesc: 'Streamline post-sale operations',
      fullDesc: 'Returns processing workflows, refund timelines, and fulfilment efficiency to reduce costs and improve customer satisfaction.',
      benefits: ['Returns process optimisation', 'Fulfilment workflow design', 'Carrier partner strategy', 'Cost reduction analysis'],
      price: 'From £150 per review',
    },
    {
      id: 'consulting',
      title: 'Full eCommerce Audit',
      icon: '🔍',
      shortDesc: '360° health check and growth plan',
      fullDesc: 'Complete audit across all channels, operations, and marketing. Deliver a prioritised 90-day action plan with quick wins and long-term strategy.',
      benefits: ['Multi-channel audit', '90-day action tracker', 'Competitor benchmarking', 'Growth roadmap & KPIs'],
      price: 'From £500 per audit',
    },
  ];

  const pricingTiers = [
    {
      name: 'Seller Pro',
      price: '£24',
      period: '/month',
      desc: 'Best for SME sellers',
      features: ['Access to all calculators & tools', 'eBay Fee Calculator', 'Amazon FBA Calculator', 'Store Health Check Quiz', 'Email support (48hr response)', 'Monthly strategy brief'],
      cta: 'Start Free Trial',
      highlighted: false,
    },
    {
      name: 'Project-Based',
      price: 'From £150',
      period: 'per project',
      desc: 'One-off audits & strategies',
      features: ['Single audit or strategy project', 'Detailed audit report', 'Competitor analysis', 'Actionable recommendations', 'Follow-up consultation included', 'Turn-around: 5–7 working days'],
      cta: 'Book Discovery Call',
      highlighted: true,
    },
    {
      name: 'Retainer',
      price: 'From £500',
      period: '/month',
      desc: 'Ongoing strategy & support',
      features: ['Monthly strategy calls', 'Quarterly audits & reports', 'Priority email support', 'Access to all tools & templates', 'Ad-hoc consultancy hours', 'Custom integrations available'],
      cta: 'Schedule Call',
      highlighted: false,
    },
  ];

  const HomePage = () => (
    <div><section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6" style={{ background: colors.darkGrey }}><div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 20% 50%, ${colors.mint}, transparent 50%), radial-gradient(circle at 80% 80%, ${colors.skyBlue}, transparent 50%)` }} /><div className="max-w-4xl mx-auto text-center relative z-10"><h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: '#fff' }}>Turn eCommerce <span style={{ color: colors.mint }}>chaos</span> into <span style={{ color: colors.pink }}>profit</span></h1><p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: '#cbd5e0' }}>Expert strategy for eBay, Amazon, and multi-channel sellers. From audit to execution—we help UK SMEs scale without the headaches.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><button onClick={() => setCurrentPage('contact')} className="px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105" style={{ background: colors.mint, color: colors.darkGrey }}>Book Free Discovery Call</button><button onClick={() => setCurrentPage('services')} className="px-8 py-4 text-lg font-semibold rounded-lg border-2 transition-all hover:scale-105" style={{ borderColor: colors.pink, color: colors.pink }}>Explore Services</button></div></div></section><section className="py-16 px-6" style={{ background: colors.lightGrey }}><div className="max-w-5xl mx-auto"><div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="text-center"><div className="text-4xl font-bold mb-2" style={{ color: colors.mint }}>50+</div><p style={{ color: colors.darkGrey }}>Sellers audited & guided</p></div><div className="text-center"><div className="text-4xl font-bold mb-2" style={{ color: colors.pink }}>£2M+</div><p style={{ color: colors.darkGrey }}>Total client revenue improved</p></div><div className="text-center"><div className="text-4xl font-bold mb-2" style={{ color: colors.skyBlue }}>100%</div><p style={{ color: colors.darkGrey }}>Client satisfaction rate</p></div></div></div></section><section className="py-20 px-6" style={{ background: '#fff' }}><div className="max-w-5xl mx-auto"><h2 className="text-4xl font-bold mb-4 text-center" style={{ color: colors.darkGrey }}>What We Do</h2><p className="text-lg text-center mb-12" style={{ color: '#718096' }}>Specialist support across every channel and operation</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{services.slice(0, 3).map((service) => (<div key={service.id} className="p-6 rounded-lg border-2 transition-all hover:scale-105 cursor-pointer" style={{ borderColor: colors.mint }} onClick={() => setCurrentPage('services')}><div className="text-5xl mb-4">{service.icon}</div><h3 className="text-xl font-bold mb-2" style={{ color: colors.darkGrey }}>{service.title}</h3><p style={{ color: '#718096' }}>{service.shortDesc}</p></div>))}</div><div className="text-center mt-12"><button onClick={() => setCurrentPage('services')} className="inline-flex items-center gap-2 px-8 py-3 text-lg font-semibold rounded-lg" style={{ background: colors.mint, color: colors.darkGrey }}>View All Services <ArrowRight size={20} /></button></div></div></section><section className="py-20 px-6" style={{ background: colors.darkGrey }}><div className="max-w-5xl mx-auto"><div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"><div><div className="text-6xl mb-6">🤖</div><h2 className="text-4xl font-bold mb-6" style={{ color: colors.mint }}>Scale Without Hiring</h2><p className="text-lg mb-6 leading-relaxed" style={{ color: '#cbd5e0' }}>AI is transforming eCommerce. Most sellers don't know where to start. We're your conduit to successful AI adoption.</p><ul className="space-y-4 mb-8"><li className="flex gap-3" style={{ color: '#cbd5e0' }}><span style={{ color: colors.mint }}>→</span><span><strong>Automate pricing</strong> with intelligent algorithms</span></li><li className="flex gap-3" style={{ color: '#cbd5e0' }}><span style={{ color: colors.mint }}>→</span><span><strong>Forecast inventory</strong> accurately, reduce overstock</span></li><li className="flex gap-3" style={{ color: '#cbd5e0' }}><span style={{ color: colors.mint }}>→</span><span><strong>Automate customer service</strong> with AI chatbots</span></li><li className="flex gap-3" style={{ color: '#cbd5e0' }}><span style={{ color: colors.mint }}>→</span><span><strong>Reduce headcount needs</strong> while scaling revenue</span></li></ul><button onClick={() => setCurrentPage('services')} className="px-8 py-3 text-lg font-semibold rounded-lg transition-all hover:scale-105" style={{ background: colors.pink, color: '#fff' }}>Explore AI Adoption</button></div><div className="p-8 rounded-lg border-2" style={{ borderColor: colors.mint, background: 'rgba(0, 208, 132, 0.05)' }}><h3 className="text-2xl font-bold mb-4" style={{ color: colors.mint }}>Real Impact</h3><div className="space-y-6"><div><p className="text-sm" style={{ color: '#cbd5e0' }}>Typical Results After AI Implementation:</p><div className="mt-2 space-y-2"><p className="text-lg font-bold" style={{ color: colors.mint }}>↓ 30-40% manual work reduction</p><p style={{ color: '#cbd5e0' }}>Fewer hours spent on pricing, forecasting, customer service</p></div></div><div className="border-t" style={{ borderColor: 'rgba(0, 208, 132, 0.3)' }}></div><div><div className="mt-2 space-y-2"><p className="text-lg font-bold" style={{ color: colors.mint }}>↑ 15-25% accuracy improvement</p><p style={{ color: '#cbd5e0' }}>Better forecasting, smarter pricing, fewer errors</p></div></div><div className="border-t" style={{ borderColor: 'rgba(0, 208, 132, 0.3)' }}></div><div><div className="mt-2 space-y-2"><p className="text-lg font-bold" style={{ color: colors.mint }}>£ No new headcount needed</p><p style={{ color: '#cbd5e0' }}>Scale to £50k+ revenue without hiring staff</p></div></div></div></div></div></div></section><section className="py-20 px-6" style={{ background: colors.darkGrey }}><div className="max-w-3xl mx-auto text-center"><h2 className="text-4xl font-bold mb-6" style={{ color: '#fff' }}>Ready to scale your eCommerce business?</h2><p className="text-lg mb-8" style={{ color: '#cbd5e0' }}>Let's talk strategy. No fluff, no upsell—just honest advice on how to grow.</p><button onClick={() => setCurrentPage('contact')} className="px-10 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105" style={{ background: colors.mint, color: colors.darkGrey }}>Book a Call</button></div></section></div>
  );

  const ServicesPage = () => (<div className="py-20 px-6" style={{ background: '#fff' }}><div className="max-w-5xl mx-auto"><h1 className="text-5xl font-bold mb-4" style={{ color: colors.darkGrey }}>Our Services</h1><p className="text-xl mb-16" style={{ color: '#718096' }}>Tailored eCommerce strategy across every channel and operation</p><div className="grid grid-cols-1 gap-12">{services.map((service) => (<div key={service.id} className="border-l-4 pl-8 py-8" style={{ borderColor: colors.mint }}><div className="flex items-start justify-between mb-4"><div><div className="text-5xl mb-4">{service.icon}</div><h2 className="text-3xl font-bold" style={{ color: colors.darkGrey }}>{service.title}</h2></div><div className="text-right"><div className="text-2xl font-bold" style={{ color: colors.mint }}>{service.price}</div></div></div><p className="text-lg mb-6" style={{ color: '#718096' }}>{service.fullDesc}</p><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{service.benefits.map((benefit, idx) => (<div key={idx} className="flex items-start gap-3"><CheckCircle size={20} style={{ color: colors.mint }} className="flex-shrink-0 mt-1" /><span style={{ color: colors.darkGrey }}>{benefit}</span></div>))}</div><button onClick={() => setCurrentPage('contact')} className="mt-6 px-6 py-2 rounded-lg font-semibold transition-all hover:scale-105" style={{ background: colors.skyBlue, color: '#fff' }}>Learn More</button></div>))}</div></div></div>);

  const PricingPage = () => (<div className="py-20 px-6" style={{ background: colors.lightGrey }}><div className="max-w-5xl mx-auto"><h1 className="text-5xl font-bold mb-4 text-center" style={{ color: colors.darkGrey }}>Pricing That Scales With You</h1><p className="text-xl text-center mb-16" style={{ color: '#718096' }}>No hidden fees. No hourly rates. Just transparent, value-based pricing.</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingTiers.map((tier, idx) => (<div key={idx} className={`rounded-lg p-8 transition-all hover:scale-105 ${tier.highlighted ? 'border-2 relative -mt-6' : 'border border-gray-300'}`} style={{ background: '#fff', borderColor: tier.highlighted ? colors.pink : undefined }}>{tier.highlighted && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full font-semibold text-sm" style={{ background: colors.pink, color: '#fff' }}>Most Popular</div>}<h3 className="text-2xl font-bold mb-2" style={{ color: colors.darkGrey }}>{tier.name}</h3><p className="text-sm mb-4" style={{ color: '#718096' }}>{tier.desc}</p><div className="mb-6"><span className="text-4xl font-bold" style={{ color: colors.mint }}>{tier.price}</span><span style={{ color: '#718096' }}>{tier.period}</span></div><button onClick={() => setCurrentPage('contact')} className="w-full px-6 py-3 rounded-lg font-semibold mb-8 transition-all hover:scale-105" style={{ background: tier.highlighted ? colors.pink : colors.mint, color: tier.highlighted ? '#fff' : colors.darkGrey }}>{tier.cta}</button><ul className="space-y-3">{tier.features.map((feature, idx) => (<li key={idx} className="flex items-start gap-3"><CheckCircle size={18} style={{ color: colors.mint }} className="flex-shrink-0 mt-1" /><span style={{ color: colors.darkGrey }}>{feature}</span></li>))}</ul></div>))}</div></div></div>);

  const AboutPage = () => (<div className="py-20 px-6" style={{ background: '#fff' }}><div className="max-w-3xl mx-auto"><h1 className="text-5xl font-bold mb-8" style={{ color: colors.darkGrey }}>About Aimvesting</h1><h2 style={{ color: colors.darkGrey }} className="text-3xl font-bold mb-4 mt-8">Our Story</h2><p style={{ color: '#718096' }} className="text-lg mb-4 leading-relaxed">Aimvesting was built by eCommerce practitioners for eCommerce practitioners. We've spent years inside multi-channel operations—eBay, Amazon, BackMarket, OnBuy, Shopify—and we've seen what works and what doesn't.</p><h2 style={{ color: colors.darkGrey }} className="text-3xl font-bold mb-4 mt-8">Our Philosophy</h2><ul className="space-y-4 my-6"><li className="flex gap-4"><CheckCircle size={24} style={{ color: colors.mint }} className="flex-shrink-0" /><div><strong style={{ color: colors.darkGrey }}>Real-world focused</strong><p style={{ color: '#718096' }}>We don't do theory. Every recommendation is tested in live marketplaces.</p></div></li><li className="flex gap-4"><CheckCircle size={24} style={{ color: colors.mint }} className="flex-shrink-0" /><div><strong style={{ color: colors.darkGrey }}>Transparent pricing</strong><p style={{ color: '#718096' }}>No hidden fees, no surprise upsells. You know exactly what you're getting.</p></div></li><li className="flex gap-4"><CheckCircle size={24} style={{ color: colors.mint }} className="flex-shrink-0" /><div><strong style={{ color: colors.darkGrey }}>Growth obsessed</strong><p style={{ color: '#718096' }}>Your success is our success. We measure ourselves by your revenue growth.</p></div></li></ul></div></div>);

  const ContactPage = () => (<div className="py-20 px-6" style={{ background: colors.darkGrey }}><div className="max-w-3xl mx-auto"><h1 className="text-5xl font-bold mb-4 text-center" style={{ color: colors.mint }}>Let's Talk</h1><p className="text-lg text-center mb-12" style={{ color: '#cbd5e0' }}>Book a free 30-minute discovery call. No pitch, just strategy.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"><div className="p-8 rounded-lg bg-opacity-10 border border-opacity-30" style={{ borderColor: colors.mint }}><Calendar size={32} style={{ color: colors.mint }} className="mb-4" /><h3 className="text-xl font-bold mb-2" style={{ color: '#fff' }}>Discovery Call</h3><p style={{ color: '#cbd5e0' }} className="mb-4">30 minutes with a strategist. Discuss your goals, challenges, and next steps.</p></div><div className="p-8 rounded-lg bg-opacity-10 border border-opacity-30" style={{ borderColor: colors.pink }}><Mail size={32} style={{ color: colors.pink }} className="mb-4" /><h3 className="text-xl font-bold mb-2" style={{ color: '#fff' }}>Email</h3><p style={{ color: '#cbd5e0' }} className="mb-4">Drop us a line with your question or project brief.</p><a href="mailto:hello@aimvesting.com" className="inline-block px-6 py-2 rounded-lg font-semibold" style={{ background: colors.pink, color: '#fff' }}>hello@aimvesting.com</a></div></div><div className="p-8 rounded-lg text-center" style={{ background: colors.lightGrey, color: colors.darkGrey }}><h3 className="text-xl font-bold mb-4">Book Your Discovery Call</h3><p style={{ color: '#718096' }} className="mb-4">Use the calendar below to find a time that works for you. 30 minutes, no pressure.</p><div style={{ background: '#fff', padding: '20px', borderRadius: '8px', marginTop: '20px' }}><iframe src="https://calendly.com/louisdenninger/30min?embed_domain=aimvesting.com&embed_type=Inline" width="100%" height="600" frameBorder="0" title="Calendly" style={{ borderRadius: '8px' }}></iframe></div></div></div></div>);

  const NavigationBar = () => (<nav className={`fixed w-full z-50 transition-all ${scrolled ? 'shadow-lg' : ''}`} style={{ background: scrolled ? colors.darkGrey : 'rgba(26, 31, 46, 0.95)' }}><div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center"><div className="text-2xl font-bold" style={{ color: colors.mint }}>aimvesting</div><div className="hidden md:flex gap-8">{navItems.map((item) => (<button key={item.id} onClick={() => setCurrentPage(item.id)} className={`font-medium transition-colors ${currentPage === item.id ? 'text-white' : 'text-gray-400 hover:text-white'}`}>{item.label}</button>))}</div><button onClick={() => setCurrentPage('contact')} className="hidden md:block px-6 py-2 rounded-lg font-semibold transition-all hover:scale-105" style={{ background: colors.mint, color: colors.darkGrey }}>Get Started</button><button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden" style={{ color: colors.mint }}>{mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}</button></div>{mobileMenuOpen && (<div className="md:hidden px-6 py-4 space-y-3" style={{ background: colors.darkGrey }}>{navItems.map((item) => (<button key={item.id} onClick={() => { setCurrentPage(item.id); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-medium" style={{ color: currentPage === item.id ? colors.mint : '#cbd5e0' }}>{item.label}</button>))}<button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="w-full mt-4 px-6 py-2 rounded-lg font-semibold" style={{ background: colors.mint, color: colors.darkGrey }}>Get Started</button></div>)}</nav>);

  const Footer = () => (<footer className="py-12 px-6" style={{ background: colors.darkGrey }}><div className="max-w-5xl mx-auto"><div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"><div><div className="text-2xl font-bold mb-4" style={{ color: colors.mint }}>aimvesting</div><p style={{ color: '#cbd5e0' }}>eCommerce strategy for UK sellers</p></div><div><h4 className="font-bold mb-4" style={{ color: '#fff' }}>Services</h4><ul className="space-y-2" style={{ color: '#cbd5e0' }}><li><button onClick={() => setCurrentPage('services')} className="hover:underline">eBay</button></li><li><button onClick={() => setCurrentPage('services')} className="hover:underline">Amazon</button></li></ul></div><div><h4 className="font-bold mb-4" style={{ color: '#fff' }}>Company</h4><ul className="space-y-2" style={{ color: '#cbd5e0' }}><li><button onClick={() => setCurrentPage('about')} className="hover:underline">About</button></li></ul></div><div><h4 className="font-bold mb-4" style={{ color: '#fff' }}>Contact</h4><ul className="space-y-2" style={{ color: '#cbd5e0' }}><li><a href="mailto:hello@aimvesting.com" className="hover:underline">hello@aimvesting.com</a></li></ul></div></div><div className="border-t border-opacity-20 pt-8" style={{ borderColor: colors.mint }}><p style={{ color: '#cbd5e0' }} className="text-center">© 2024 Aimvesting. All rights reserved.</p></div></div></footer>);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'services': return <ServicesPage />;
      case 'pricing': return <PricingPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return <div className="min-h-screen flex flex-col" style={{ background: '#fff' }}><NavigationBar /><main className="flex-1 pt-16">{renderPage()}</main><Footer /></div>;
}
