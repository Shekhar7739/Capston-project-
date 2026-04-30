import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Shield, Link2, LayoutDashboard, Lightbulb, ArrowRight, Lock, Eye, Zap } from 'lucide-react';

const Home = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: Link2, title: 'URL Safety Checker', color: 'from-blue-500 to-cyan-500',
      desc: 'Instantly analyze any URL to detect phishing, malware, and suspicious patterns before you click.',
      link: '/url-checker',
    },
    {
      icon: LayoutDashboard, title: 'Threat Dashboard', color: 'from-purple-500 to-pink-500',
      desc: 'Real-time visualization of cyber threats with interactive charts and detailed analytics.',
      link: '/dashboard',
    },
    {
      icon: Lightbulb, title: 'Security Tips', color: 'from-amber-500 to-orange-500',
      desc: 'Expert cybersecurity tips covering phishing, passwords, social engineering, and more.',
      link: '/awareness',
    },
  ];

  const stats = [
    { value: '52,847+', label: 'Threats Detected' },
    { value: '99.8%', label: 'Detection Rate' },
    { value: '1.2M+', label: 'URLs Scanned' },
    { value: '24/7', label: 'Monitoring' },
  ];

  return (
    <div className="flex flex-col gap-20 pb-12">
      {/* Hero Section */}
      <section className="relative text-center pt-16 pb-8">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-8">
            <Shield className="w-4 h-4" />
            <span>Advanced Cyber Threat Protection</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            Stay Protected in the{' '}
            <span className="bg-gradient-to-r from-primary-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent block mt-2">
              Digital World
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Detect phishing URLs, monitor cyber threats in real-time, and learn how to protect yourself
            with our comprehensive cybersecurity awareness platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-primary text-white font-semibold text-lg hover:opacity-90 transition-all glow-blue"
              >
                Go to Dashboard <ArrowRight className="w-5 h-5" />
              </Link>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-primary text-white font-semibold text-lg hover:opacity-90 transition-all glow-blue"
                >
                  Get Started Free <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-all"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-5xl mx-auto px-4 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-cyber-card border border-cyber-border"
            >
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Security Tools
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Everything you need to stay safe online — all in one platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Link
              key={feature.title}
              to={user ? feature.link : '/login'}
              className="group flex flex-col p-8 rounded-2xl bg-cyber-card border border-cyber-border hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed flex-1">{feature.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-primary-400 text-sm font-medium group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-5xl mx-auto px-4 w-full pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Lock, title: 'Privacy First', desc: 'Your data stays private. We never store or share your browsing history.' },
            { icon: Zap, title: 'Lightning Fast', desc: 'Get instant results with our optimized threat detection engine.' },
            { icon: Eye, title: 'Always Watching', desc: '24/7 monitoring of emerging threats to keep you informed.' },
          ].map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
