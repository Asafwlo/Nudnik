import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Reminder } from './components/types';
import { ReminderItem } from './components/reminder';

const mockReminders: Reminder[] = [{id: '1', name: 'First Reminder', typeId: '1', priority: 'regular', status: 'live'},{id: '2', name: 'Second Reminder', typeId: '2', priority: 'regular', status: 'live'}];
export default function App() {
  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollable}>
      {mockReminders.map(reminder => <ReminderItem key={reminder.id} reminder={reminder} onClick={() => {}} />)}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8accff91',
  },
  scrollable: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
