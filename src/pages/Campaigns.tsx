import React from 'react';
import CampaignList from '../components/Campaigns/CampaignList';
import CampaignMetrics from '../components/Campaigns/CampaignMetrics';
import { PlusCircle } from 'lucide-react';

const Campaigns = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Campaigns</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
          <PlusCircle className="w-4 h-4" />
          New Campaign
        </button>
      </div>

      <CampaignMetrics />
      <CampaignList />
    </div>
  );
};

export default Campaigns;