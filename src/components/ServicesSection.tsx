import React, { useState } from 'react';
import { SERVICES, PROJECT_TYPES, ADDON_FEATURES } from '../data/servicesData';
import { ServicePackage } from '../types';
import { Box, Code, Smartphone, Cpu, CheckCircle2, Calculator, ArrowRight, Clock, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onScopeSelected: (scopeSummary: {
    projectType: string;
    addons: string[];
    estimatedDays: number;
  }) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onScopeSelected }) => {
  const [selectedType, setSelectedType] = useState<string>(PROJECT_TYPES[0].id);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([ADDON_FEATURES[0].id]);

  const currentTypeObj = PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate estimated business days
  const baseDays = currentTypeObj.baseDays;
  const addonDays = selectedAddons.reduce((acc, currId) => {
    const addon = ADDON_FEATURES.find((a) => a.id === currId);
    return acc + (addon ? addon.days : 0);
  }, 0);
  const totalDays = baseDays + addonDays;

  const handleInitiateWithScope = () => {
    onScopeSelected({
      projectType: currentTypeObj.label,
      addons: selectedAddons.map((id) => ADDON_FEATURES.find((a) => a.id === id)?.label || id),
      estimatedDays: totalDays,
    });
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Box':
        return <Box className="w-5 h-5 text-cyan-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-purple-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 border-t border-slate-800/80 bg-[#0B1020]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Client Services & Engineering Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            How Pushkar Can Elevate Your Next Project
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Available for select client contracts, agency collaborations, and custom frontend engineering. All deliverables are built on modern web standards with zero bloated dependencies.
          </p>
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-20">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#0B1020] border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    Service Spec
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mb-5">{service.tagline}</p>

                {/* Deliverables */}
                <div className="space-y-2 mb-6">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/70">
                <div className="text-[11px] text-slate-400 mb-2">
                  <span className="text-slate-500 font-mono">Best For: </span>
                  {service.idealFor}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {service.techFocus.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Scope & Turnaround Estimator */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0B1020] to-[#07080D] border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-2">
                <Calculator className="w-4 h-4" />
                <span>INTERACTIVE ESTIMATOR</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Configure Your Project Scope
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Select your desired requirements to estimate timeline and generate a tailored project brief.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center gap-4 self-stretch lg:self-auto justify-between lg:justify-start">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-400" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Estimated Delivery</span>
                  <span className="text-lg sm:text-xl font-bold font-display text-white">
                    ~{totalDays} to {totalDays + 4} Business Days
                  </span>
                </div>
              </div>

              <button
                onClick={handleInitiateWithScope}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-md active:scale-95 whitespace-nowrap"
              >
                <span>Initiate with Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Configuration Choices */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
            {/* 1. Base Project Type */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                1. Select Primary Architecture
              </h4>
              <div className="space-y-2">
                {PROJECT_TYPES.map((t) => (
                  <div
                    key={t.id}
                    onClick={() => setSelectedType(t.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      selectedType === t.id
                        ? 'bg-slate-900 border-cyan-400 text-white'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-semibold text-white">{t.label}</div>
                      <div className="text-[11px] text-slate-400">{t.description}</div>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 ml-2 whitespace-nowrap">
                      ~{t.baseDays}d base
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Add-on Features */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                2. Optional Capabilities & Features
              </h4>
              <div className="space-y-2">
                {ADDON_FEATURES.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-slate-900 border-purple-400/80 text-white'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                            isChecked
                              ? 'bg-purple-500 border-purple-400 text-white'
                              : 'border-slate-700 bg-slate-900'
                          }`}
                        >
                          {isChecked && '✓'}
                        </div>
                        <span className="text-xs text-slate-200">{addon.label}</span>
                      </div>
                      <span className="text-[11px] font-mono text-purple-400">
                        +{addon.days}d
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
