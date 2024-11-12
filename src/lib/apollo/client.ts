import axios from 'axios';

const APOLLO_API_KEY = import.meta.env.VITE_APOLLO_API_KEY;
const BASE_URL = 'https://api.apollo.io/v1';

const apolloClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${APOLLO_API_KEY}`
  }
});

export const enrichCompanyData = async (domain: string) => {
  try {
    const response = await apolloClient.post('/organizations/enrich', {
      domain
    });
    return response.data;
  } catch (error) {
    console.error('Apollo enrichment error:', error);
    throw error;
  }
};

export const findProspects = async (companyId: string, criteria: any) => {
  try {
    const response = await apolloClient.post('/mixed_people/search', {
      organization_ids: [companyId],
      ...criteria
    });
    return response.data;
  } catch (error) {
    console.error('Apollo prospect search error:', error);
    throw error;
  }
};