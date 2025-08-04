# Time Zone Handling in Hyacinth Attendance System

## Overview

This document explains how time zones are handled throughout the Hyacinth Attendance system. The system is designed to work correctly regardless of the user's physical location or their device's time zone settings.

## Core Concepts

### Storage Format

- All timestamps are stored in Firestore as UTC timestamps using `Timestamp.now()` or the utility function `getCurrentTimestamp()`
- UTC storage ensures consistent data storage regardless of where users or servers are located

### User Time Region

- Each user has a `timeRegion` field in their profile (default: 'Asia/Manila')
- This represents the time zone in which the user is expected to work
- Schedule calculations and status determinations (early, late, on-time) use this time zone
- Users can update their time zone in settings if needed

### Display Format

- Times are always displayed adjusted to the user's configured time zone
- The `TimeZoneDisplay` component handles consistent formatting across the application
- Hover tooltips provide additional time information (local, UTC, ISO)

## Implementation Details

### Key Components

1. **timeZoneUtils.js**
   - Core utility functions for time zone handling
   - Functions for converting between timestamps and time zones
   - Status determination logic based on user's time region

2. **TimeZoneDisplay.jsx**
   - React component for displaying times with proper time zone context
   - Shows tooltips with additional time information

3. **TimeFormatContext.jsx**
   - Provides user's time format preferences (12/24 hour)
   - Detects system time zone
   - Manages user's time zone preference

4. **TimeZoneMismatchNotification.jsx**
   - Alerts users when their device time zone differs from their configured work time zone

5. **TimeZoneSettings.jsx**
   - UI for users to select and update their preferred time zone

### Status Determination Process

1. When a user clocks in or out, the current time is recorded as a UTC timestamp
2. The status is determined by comparing the timestamp to the user's schedule in their configured time zone
3. All calculations use the user's `timeRegion`, not their device's local time
4. Thresholds for early, on-time, late, etc. are applied in the context of the user's time zone

### Handling Time Zone Mismatches

- The system detects when a user's device time zone differs from their configured time region
- A warning notification is shown to the user
- Status calculations still use the correct time zone regardless of device settings
- Users can update their time zone in settings if they've relocated

## Developer Guidelines

### Recording Time

Always use `getCurrentTimestamp()` from timeZoneUtils.js to record timestamps:

```javascript
import { getCurrentTimestamp } from '../utils/timeZoneUtils';

// Record attendance
const timestamp = getCurrentTimestamp();
```

### Displaying Time

Always use the TimeZoneDisplay component to show times:

```jsx
import TimeZoneDisplay from '../components/common/TimeZoneDisplay';

// In your component
<TimeZoneDisplay timestamp={record.timestamp} timeZone={userTimeZone} />
```

### Time Calculations

Use the time zone utilities for calculations:

```javascript
import { timestampToZonedDate, calculateTimeDifferenceInMinutes } from '../utils/timeZoneUtils';

// Convert timestamp to date in user's time zone
const zonedDate = timestampToZonedDate(timestamp, userTimeZone);

// Calculate difference between two time objects
const diffMinutes = calculateTimeDifferenceInMinutes(time1, time2);
```

## User Guidelines

### Setting Your Time Zone

1. Go to Settings
2. Select "Time Zone Settings"
3. Choose your work time zone from the dropdown
4. Click "Save Settings"

### Understanding Time Zone Warnings

If you see a time zone mismatch warning:

1. Your device's time zone is different from your configured work time zone
2. This could happen if you're traveling or working remotely
3. Your attendance will still be calculated based on your configured work time zone
4. Update your time zone settings if you've permanently relocated

### Attendance Status Logic

- **Early**: Clocking in more than 15 minutes before scheduled time
- **On Time**: Clocking in within 5 minutes after scheduled time
- **Late**: Clocking in more than 5 minutes after scheduled time
- **Incomplete**: Clocking out more than 30 minutes before scheduled end time
- **Complete**: Clocking out on or after scheduled end time
- **Overtime**: Clocking out more than 30 minutes after scheduled end time

All these determinations are made using your configured work time zone, not your device's local time.

## Troubleshooting

### Incorrect Time Display

- Check your time zone settings in your profile
- Verify your device's system time and time zone are accurate
- Hover over times to see detailed time information including UTC time

### Unexpected Status Determination

- Verify your scheduled work hours in the system
- Check your configured time region matches your expected work location
- Contact your administrator if your schedule needs to be updated

### Migration Issues

If historical records show incorrect statuses after migration:
- Administrators can re-run the migration script
- Specific records can be manually corrected if needed
