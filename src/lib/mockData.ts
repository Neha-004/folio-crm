import { Contact, Company, Opportunity, Activity, Expense } from './types';

export const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'John Smith',
    title: 'CTO',
    phone: '+1-555-0101',
    email: 'john.smith@techcorp.com',
    reportingManager: 'Sarah Johnson',
    currentCompanyId: '1',
    pastCompanies: ['2', '3'],
    address: {
      postal: '10001',
      block: 'A',
      street: '123 Tech Street',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      pin: '10001'
    },
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    title: 'CEO',
    phone: '+1-555-0102',
    email: 'sarah.j@techcorp.com',
    currentCompanyId: '1',
    pastCompanies: [],
    address: {
      postal: '10001',
      block: 'A',
      street: '123 Tech Street',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      pin: '10001'
    },
    createdAt: '2024-01-10T10:00:00Z'
  },
  {
    id: '3',
    name: 'Michael Chen',
    title: 'VP Sales',
    phone: '+1-555-0103',
    email: 'mchen@innovate.io',
    currentCompanyId: '2',
    pastCompanies: ['4'],
    address: {
      postal: '94102',
      block: 'B',
      street: '456 Innovation Ave',
      city: 'San Francisco',
      state: 'CA',
      country: 'USA',
      pin: '94102'
    },
    createdAt: '2024-01-20T10:00:00Z'
  }
];

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'TechCorp Solutions',
    HQ: 'New York, USA',
    placeOfOffice: 'Manhattan',
    email: 'info@techcorp.com',
    website: 'https://techcorp.com',
    poc: ['1', '2'],
    currentContactPersonId: '2',
    sector: 'Technology',
    address: {
      postal: '10001',
      block: 'A',
      street: '123 Tech Street',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      pin: '10001'
    },
    createdAt: '2024-01-05T10:00:00Z'
  },
  {
    id: '2',
    name: 'Innovate Labs',
    HQ: 'San Francisco, USA',
    placeOfOffice: 'SoMa',
    email: 'contact@innovate.io',
    website: 'https://innovate.io',
    poc: ['3'],
    currentContactPersonId: '3',
    sector: 'Software',
    address: {
      postal: '94102',
      block: 'B',
      street: '456 Innovation Ave',
      city: 'San Francisco',
      state: 'CA',
      country: 'USA',
      pin: '94102'
    },
    createdAt: '2024-01-12T10:00:00Z'
  }
];

export const mockOpportunities: Opportunity[] = [
  {
    id: '1',
    name: 'Enterprise Software Deal',
    companyId: '1',
    keyPersonId: '2',
    openDate: '2024-01-15',
    closeDate: '2024-03-30',
    amount: 250000,
    description: 'Enterprise software licensing and implementation',
    sector: 'Technology',
    status: 'propose',
    forecast: {
      bestCase: 300000,
      commit: 250000,
      closed: 0
    },
    competition: [
      { name: 'CompetitorA', status: 'warm' },
      { name: 'CompetitorB', status: 'cold' }
    ],
    remarks: 'Strong potential, decision expected Q1',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Cloud Migration Project',
    companyId: '2',
    keyPersonId: '3',
    openDate: '2024-02-01',
    closeDate: '2024-04-15',
    amount: 180000,
    description: 'Complete cloud infrastructure migration',
    sector: 'Software',
    status: 'meet',
    forecast: {
      bestCase: 200000,
      commit: 180000,
      closed: 0
    },
    competition: [
      { name: 'CompetitorC', status: 'hot' }
    ],
    remarks: 'Initial meetings scheduled',
    createdAt: '2024-02-01T10:00:00Z'
  }
];

export const mockActivities: Activity[] = [
  {
    id: '1',
    title: 'Initial Discovery Call',
    date: '2024-11-15',
    time: '10:00',
    activityType: 'call',
    contactPersonId: '2',
    linkedTo: { type: 'opportunity', id: '1' },
    remark: 'Discussed requirements and timeline',
    createdAt: '2024-11-14T10:00:00Z'
  },
  {
    id: '2',
    title: 'Site Visit - HQ',
    date: '2024-11-16',
    time: '14:00',
    activityType: 'visit',
    contactPersonId: '3',
    linkedTo: { type: 'opportunity', id: '2' },
    remark: 'Tour of current infrastructure',
    createdAt: '2024-11-14T11:00:00Z'
  }
];

export const mockExpenses: Expense[] = [
  {
    id: '1',
    category: 'travel',
    amount: 450,
    date: '2024-11-10',
    note: 'Flight to client meeting',
    linkedToOpportunityId: '1',
    createdAt: '2024-11-10T10:00:00Z'
  },
  {
    id: '2',
    category: 'food',
    amount: 120,
    date: '2024-11-11',
    note: 'Client lunch meeting',
    linkedToOpportunityId: '2',
    createdAt: '2024-11-11T13:00:00Z'
  }
];
