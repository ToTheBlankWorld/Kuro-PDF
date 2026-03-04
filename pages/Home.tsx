import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TOOLS } from '../constants';
import ToolCard from '../components/ToolCard';
import FileUploadDemo from '../components/file-upload-demo';
import { ToolCategory } from '../types';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  // Filter tools by category
  const pdfTools = TOOLS.filter(t => t.category === ToolCategory.PDF);
  const wordTools = TOOLS.filter(t => t.category === ToolCategory.WORD);

  const navigate = useNavigate();

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Convert your<br />file easily
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 mt-8">
          Convert your Audio, Video and other Files from one format to another online for free!
          (Reference Design Implementation)
        </p>

        {/* Hero Card */}
        <div className="glass-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl shadow-indigo-900/20 relative overflow-hidden mt-12">
          {/* Dotted Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          </div>

          <div className="relative z-10">
            <FileUploadDemo />
            <div className="mt-6">
              <Link to="/tools" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                Explore all tools <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-indigo-500 rounded-full block"></span>
            PDF Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pdfTools.map(tool => <ToolCard key={tool.id} tool={tool} />)}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-cyan-500 rounded-full block"></span>
            Word Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wordTools.map(tool => <ToolCard key={tool.id} tool={tool} />)}
          </div>
        </div>


      </section>
    </div>
  );
};

export default Home;