
import React from 'react';

interface FeatureListItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const FeatureListItem: React.FC<FeatureListItemProps> = ({ icon, children }) => {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0 mt-1 mr-3">
        {icon}
      </div>
      <span className="text-slate-700">{children}</span>
    </li>
  );
};

export default FeatureListItem;
