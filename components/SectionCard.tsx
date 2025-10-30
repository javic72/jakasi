
import React from 'react';

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, children }) => {
  return (
    <section className="bg-white shadow-lg rounded-xl mb-8 overflow-hidden">
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
        <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
      </div>
      <div className="p-6 md:p-8">
        {children}
      </div>
    </section>
  );
};

export default SectionCard;
