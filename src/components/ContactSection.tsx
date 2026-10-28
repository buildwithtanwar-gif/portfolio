import React, { useState } from 'react';
import { Mail, Copy, Check, Github, Linkedin, ArrowUpRight, Sparkles, MessageSquare, Clock, Globe, Send, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  initialScope?: {
    projectType: string;
    addons: string[];
    estimatedDays: number;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialScope }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedScope, setCopiedScope] = useState(false);

  const email = 'pushkartanwer46@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyScope = () => {
    if (!initialScope) return;
    const scopeText = `PROJECT SCOPE FOR PUSHKAR TANWAR
- Architecture: ${initialScope.projectType}
- Features: ${initialScope.addons.join(', ')}
- Estimated Turnaround: ~${initialScope.estimatedDays} Business Days`;

    navigator.clipboard.writeText(scopeText);
    setCopiedScope(true);
    setTimeout(() => setCopiedScope(false), 2500);
  };

  const openMailWithTopic = (topic: string) => {
    const subject = encodeURIComponent(`Project Discussion: ${topic} — Pushkar Tanwar`);
    const body = encodeURIComponent(
      `Hi Pushkar,\n\nI would like to discuss a project regarding: ${topic}.\n\nOverview:\n[Please describe your goals, timeline, and requirements]\n\nBest regards,\n[Your Name]`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const openMailWithScope = () => {
    if (!initialScope) return;
    const subject = encodeURIComponent(`Project Inquiry: ${initialScope.projectType} — Pushkar Tanwar`);
    const body = encodeURIComponent(
      `Hi Pushkar,\n\nI configured this project scope on your portfolio:\n- Architecture: ${initialScope.projectType}\n- Features: ${initialScope.addons.join(', ')}\n- Estimated Delivery: ~${initialScope.estimatedDays} Business Days\n\nLet's connect and discuss next steps!\n\nBest regards,\n[Your Name]`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-slate-800/80 bg-[#07080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Direct Communication & Initiation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
            Let's create something extraordinary together.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light mt-3 leading-relaxed">
            I am available for select client contracts, modern frontend builds, and 3D web experiences. Reach out directly through your preferred channel with no tedious forms required.
          </p>
        </div>

        {/* If a Scope was configured via the Services Estimator, show a dedicated quick-action banner */}
        {initialScope && (
          <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-[#0B1020] via-slate-900 to-[#0B1020] border border-cyan-500/40 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-in fade-in">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Sparkles className="w-4 h-4" />
                <span>CONFIGURED PROJECT BRIEF READY</span>
              </div>
              <h4 className="text-base sm:text-lg font-display font-bold text-white">
                {initialScope.projectType}
              </h4>
              <p className="text-xs text-slate-400 font-mono">
                Features: {initialScope.addons.join(', ')} • Est. ~{initialScope.estimatedDays} days
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={handleCopyScope}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
              >
                {copiedScope ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Scope Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Scope</span>
                  </>
                )}
              </button>

              <button
                onClick={openMailWithScope}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-all active:scale-95"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Scope to Pushkar</span>
              </button>
            </div>
          </div>
        )}

        {/* Main Grid: Direct Channels & Studio Telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Primary Contact Card */}
          <div className="lg:col-span-7 bg-[#0B1020] border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  Direct Email Dispatch
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/50 text-emerald-300 border border-emerald-800/50">
                  Response in &lt; 24h
                </span>
              </div>

              {/* Email Address Display with Action Buttons */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="truncate">
                  <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1">Pushkar's Inbox</span>
                  <a
                    href={`mailto:${email}`}
                    className="text-lg sm:text-xl font-mono font-medium text-cyan-300 hover:text-cyan-200 hover:underline truncate block"
                  >
                    {email}
                  </a>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${email}?subject=Project%20Inquiry%20-%20Pushkar%20Tanwar`}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-md transition-all active:scale-95"
                  >
                    <span>Open Mail App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* One-Click Topic Starters */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                  Instant Topic Starters (Click to Compose Email)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    onClick={() => openMailWithTopic('Interactive 3D Web & Three.js Canvas')}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900 text-left transition-all group"
                  >
                    <div className="text-xs font-semibold text-white group-hover:text-cyan-300 flex items-center justify-between">
                      <span>3D Web Experience</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Three.js, WebGL & PBR Shaders</div>
                  </button>

                  <button
                    onClick={() => openMailWithTopic('Frontend Web Application Development')}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900 text-left transition-all group"
                  >
                    <div className="text-xs font-semibold text-white group-hover:text-cyan-300 flex items-center justify-between">
                      <span>Frontend Web App</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">React, TypeScript & Tailwind</div>
                  </button>

                  <button
                    onClick={() => openMailWithTopic('Mobile-First Responsive Redesign')}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900 text-left transition-all group"
                  >
                    <div className="text-xs font-semibold text-white group-hover:text-cyan-300 flex items-center justify-between">
                      <span>Responsive Redesign</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Fluid layout, a11y & Web Vitals</div>
                  </button>

                  <button
                    onClick={() => openMailWithTopic('General Inquiry or Collaboration')}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900 text-left transition-all group"
                  >
                    <div className="text-xs font-semibold text-white group-hover:text-cyan-300 flex items-center justify-between">
                      <span>Say Hello / Contract</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Freelance or full-time projects</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom note */}
            <div className="pt-6 border-t border-slate-800/80 text-xs font-mono text-slate-500 flex items-center justify-between mt-6">
              <span>SECURITY: NO SPAM GUARANTEE</span>
              <span className="text-cyan-400">ENCRYPTION: TLS DIRECT</span>
            </div>
          </div>

          {/* Right Column: Channels, Availability & Location Hub */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Social & Code Profiles */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0B1020] border border-slate-800 space-y-4 shadow-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Official Developer Profiles
              </span>

              <div className="space-y-3">
                <a
                  href="https://github.com/pushkartanwer"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-900 text-slate-300 group-hover:text-white">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">GitHub</div>
                      <div className="text-[11px] font-mono text-slate-400">github.com/pushkartanwer</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </a>

                <a
                  href="https://linkedin.com/in/pushkartanwer"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-900 text-slate-300 group-hover:text-white">
                      <Linkedin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">LinkedIn</div>
                      <div className="text-[11px] font-mono text-slate-400">linkedin.com/in/pushkartanwer</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Studio Availability Telemetry */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0B1020] border border-slate-800 space-y-4 shadow-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Studio Telemetry & Collaboration
              </span>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-cyan-400" />
                    Location
                  </span>
                  <span className="font-mono text-white">India (Available Remote Worldwide)</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-purple-400" />
                    Working Hours
                  </span>
                  <span className="font-mono text-white">Flexible UTC Overlay</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Current Status
                  </span>
                  <span className="font-mono text-emerald-300 font-medium">Accepting New Projects</span>
                </div>

                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-400 flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                    Collaboration Mode
                  </span>
                  <span className="font-mono text-white">Direct Client / Agency Contracts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
