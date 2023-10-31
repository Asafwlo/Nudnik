type Entity = {
    id: string;
}

type Reminder = Entity & {
    name: string;
    typeId: string;
    priority: 'regular' | 'important';
    status: 'live' | 'done' | 'snooze';
}

type ReminderOnce = Entity & {
    dateTime: Date;
}

type ReminderRepeat = Entity & {
    startDate: Date;
    endDate?: Date;
    every?: number;
    repeatType: 'day' | 'week' | 'weekDay' | 'month' | 'year' | 'start' | 'end';
    history: Date[];
}

export {Reminder, ReminderOnce, ReminderRepeat}