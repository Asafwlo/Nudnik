import { View, Text, StyleSheet } from "react-native";
import { Reminder } from "../types";

type ReminderProps = {
    reminder: Reminder;
    onClick: () => void;
};

export const ReminderItem = ({reminder, onClick}: ReminderProps) => {
    return <View style={styles.container}>
        <Text>{reminder.name}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: -1,
        height: 80,
        width: '98%',
        marginVertical: 2,
        borderColor: '#0060a9',
        borderWidth: 2,
        borderRadius: 4,
      backgroundColor: '#0995ff',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
      paddingBottom: 5,
    },
  });