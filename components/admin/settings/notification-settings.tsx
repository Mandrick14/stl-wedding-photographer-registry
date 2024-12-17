'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

export function NotificationSettings() {
  const [settings, setSettings] = useState<NotificationSetting[]>([
    {
      id: 'new-photographers',
      title: 'New Photographer Registrations',
      description: 'Get notified when a new photographer registers',
      enabled: true,
    },
    {
      id: 'new-bookings',
      title: 'New Bookings',
      description: 'Get notified when a new booking is made',
      enabled: true,
    },
    {
      id: 'booking-updates',
      title: 'Booking Updates',
      description: 'Get notified when a booking status changes',
      enabled: false,
    },
    {
      id: 'photographer-updates',
      title: 'Photographer Updates',
      description: 'Get notified when photographers update their profiles',
      enabled: false,
    },
  ]);

  const toggleSetting = (id: string) => {
    setSettings(settings.map(setting => 
      setting.id === id 
        ? { ...setting, enabled: !setting.enabled }
        : setting
    ));
  };

  const handleSave = () => {
    // TODO: Implement save logic
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {settings.map((setting) => (
            <div key={setting.id} className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="font-medium">{setting.title}</p>
                <p className="text-sm text-muted-foreground">
                  {setting.description}
                </p>
              </div>
              <Switch
                checked={setting.enabled}
                onCheckedChange={() => toggleSetting(setting.id)}
              />
            </div>
          ))}
          
          <div className="pt-4">
            <Button onClick={handleSave}>Save Preferences</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}