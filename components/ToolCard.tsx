import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToolDef } from '../types';
import { GlowingEffect } from './ui/glowing-effect';

const ToolCard: React.FC<{ tool: ToolDef }> = ({ tool }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(tool.path)}
      className="w-full h-full min-h-[14rem] list-none text-left group"
    >
      <div className="relative h-full rounded-2xl border p-2">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 border border-slate-700/50 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-slate-600/50 p-2 bg-slate-800/30 group-hover:bg-slate-700/50 transition-colors">
              <tool.icon className="w-5 h-5 text-blue-400" />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                {tool.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ToolCard;