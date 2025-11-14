export interface Address {
  postal: string;
  block: string;
  street: string;
  city: string;
  state: string;
  country: string;
  pin: string;
}

export interface Contact {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  reportingManager?: string;
  currentCompanyId?: string;
  pastCompanies: string[];
  address: Address;
  createdAt: string;
}

export interface Company {
  id: string;
  name: string;
  HQ: string;
  placeOfOffice: string;
  email: string;
  website: string;
  poc: string[];
  currentContactPersonId?: string;
  sector: string;
  address: Address;
  createdAt: string;
}

export interface Forecast {
  bestCase: number;
  commit: number;
  closed: number;
}

export interface Competition {
  name: string;
  status: 'cold' | 'warm' | 'hot';
}

export type OpportunityStatus = 
  | 'qualify'
  | 'meet'
  | 'present'
  | 'propose'
  | 'negotiate'
  | 'won'
  | 'lost'
  | 'notApproaching';

export interface Opportunity {
  id: string;
  name: string;
  companyId: string;
  keyPersonId: string;
  openDate: string;
  closeDate: string;
  amount: number;
  description: string;
  sector: string;
  status: OpportunityStatus;
  forecast: Forecast;
  competition: Competition[];
  remarks: string;
  createdAt: string;
}

export type ActivityType = 'visit' | 'mail' | 'call';

export interface Activity {
  id: string;
  title: string;
  date: string;
  time: string;
  activityType: ActivityType;
  contactPersonId: string;
  linkedTo: {
    type: 'opportunity' | 'contact' | 'company';
    id: string;
  };
  remark: string;
  createdAt: string;
}

export type ExpenseCategory = 'travel' | 'food' | 'other';

export interface Expense {
  id: string;
  category: ExpenseCategory;
  amount: number;
  date: string;
  note: string;
  linkedToOpportunityId?: string;
  createdAt: string;
}

export interface DashboardStats {
  totalOpportunities: number;
  wonThisMonth: number;
  totalForecast: Forecast;
  bigDeals: Opportunity[];
  todaysSchedule: Activity[];
  recentActivities: Activity[];
  monthlyExpenses: number;
}
