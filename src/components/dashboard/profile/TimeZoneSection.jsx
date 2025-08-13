import React from 'react';
import { 
  ProfileSection, 
  FullWidthSection,
  SectionTitle 
} from '../ProfileStyles';
import TimeZoneSettings from '../../settings/TimeZoneSettings';
import { Card, CardTitle, CardContent } from '../ProfileStyles';

const TimeZoneSection = ({ userId, userTimeZone }) => {
  return (
    <ProfileSection>
      <SectionTitle>Time Zone Settings</SectionTitle>
      <FullWidthSection>
        <Card>
          <CardTitle>Manage Time Zone Preferences</CardTitle>
          <CardContent>
            <TimeZoneSettings userId={userId} initialTimeZone={userTimeZone} />
          </CardContent>
        </Card>
      </FullWidthSection>
    </ProfileSection>
  );
};

export default TimeZoneSection;
