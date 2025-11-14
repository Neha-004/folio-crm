import { useState } from 'react';
import { Plus, Search, DollarSign, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockOpportunities, mockCompanies, mockContacts } from '@/lib/mockData';

const statusColors: Record<string, string> = {
  qualify: 'bg-muted',
  meet: 'bg-blue-100 text-blue-800',
  present: 'bg-purple-100 text-purple-800',
  propose: 'bg-yellow-100 text-yellow-800',
  negotiate: 'bg-orange-100 text-orange-800',
  won: 'bg-success/20 text-success',
  lost: 'bg-destructive/20 text-destructive',
  notApproaching: 'bg-muted',
};

export default function Opportunities() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOpportunities = mockOpportunities.filter(opp =>
    opp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Opportunities</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Opportunity
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search opportunities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredOpportunities.map((opp) => {
          const company = mockCompanies.find(c => c.id === opp.companyId);
          const contact = mockContacts.find(c => c.id === opp.keyPersonId);
          
          return (
            <Card key={opp.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg">{opp.name}</span>
                  <Badge className={statusColors[opp.status] || ''}>
                    {opp.status}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-success" />
                  <span className="text-2xl font-bold">${(opp.amount / 1000).toFixed(0)}K</span>
                </div>
                
                {company && (
                  <div>
                    <p className="text-xs text-muted-foreground">Company</p>
                    <p className="text-sm font-medium">{company.name}</p>
                  </div>
                )}
                
                {contact && (
                  <div>
                    <p className="text-xs text-muted-foreground">Key Contact</p>
                    <p className="text-sm font-medium">{contact.name}</p>
                  </div>
                )}
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Close: {new Date(opp.closeDate).toLocaleDateString()}</span>
                </div>
                
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground">Forecast</p>
                  <div className="grid grid-cols-3 gap-2 mt-1">
                    <div>
                      <p className="text-xs text-muted-foreground">Best</p>
                      <p className="text-sm font-medium">${(opp.forecast.bestCase / 1000).toFixed(0)}K</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Commit</p>
                      <p className="text-sm font-medium">${(opp.forecast.commit / 1000).toFixed(0)}K</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Closed</p>
                      <p className="text-sm font-medium">${(opp.forecast.closed / 1000).toFixed(0)}K</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
