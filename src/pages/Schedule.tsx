import { useState } from 'react';
import { Plus, Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockActivities, mockContacts } from '@/lib/mockData';

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const sortedActivities = [...mockActivities].sort((a, b) => 
    new Date(a.date + 'T' + a.time).getTime() - new Date(b.date + 'T' + b.time).getTime()
  );

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Schedule</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Activity
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sortedActivities.map((activity) => {
                const contact = mockContacts.find(c => c.id === activity.contactPersonId);
                
                return (
                  <div key={activity.id} className="flex gap-4 p-4 rounded-lg border border-border hover:border-primary transition-colors">
                    <div className="flex flex-col items-center justify-center p-2 bg-primary/10 rounded-lg min-w-[60px]">
                      <span className="text-xs text-muted-foreground">
                        {new Date(activity.date).toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                      <span className="text-2xl font-bold">
                        {new Date(activity.date).getDate()}
                      </span>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">{activity.title}</h4>
                        <Badge variant="outline" className="capitalize">
                          {activity.activityType}
                        </Badge>
                      </div>
                      
                      {contact && (
                        <p className="text-sm text-muted-foreground">
                          with {contact.name}
                        </p>
                      )}
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{activity.time}</span>
                      </div>
                      
                      {activity.remark && (
                        <p className="text-sm text-muted-foreground">{activity.remark}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Today's Activities</p>
              <p className="text-2xl font-bold">3</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">This Week</p>
              <p className="text-2xl font-bold">12</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Upcoming</p>
              <p className="text-2xl font-bold">{mockActivities.length}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
