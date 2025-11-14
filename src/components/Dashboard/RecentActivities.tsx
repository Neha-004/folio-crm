import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, Building } from 'lucide-react';
import { mockActivities, mockContacts } from '@/lib/mockData';
import { ActivityType } from '@/lib/types';

const activityIcons: Record<ActivityType, typeof Phone> = {
  call: Phone,
  mail: Mail,
  visit: Building,
};

export function RecentActivities() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockActivities.slice(0, 5).map((activity) => {
            const Icon = activityIcons[activity.activityType];
            const contact = mockContacts.find(c => c.id === activity.contactPersonId);
            
            return (
              <div key={activity.id} className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-primary/10">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{contact?.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(activity.date).toLocaleDateString()} at {activity.time}
                  </p>
                </div>
                <Badge variant="secondary" className="capitalize">
                  {activity.activityType}
                </Badge>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
