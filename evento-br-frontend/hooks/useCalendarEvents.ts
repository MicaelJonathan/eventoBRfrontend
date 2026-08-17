import { useGetEvents } from './useGetEvents';
import { isSameLocalDay, parseLocalDate } from '@/lib/date';
import { getEventsResponseType } from '@/types/getEventsResponse';
import { useCallback, useEffect, useMemo, useState } from 'react';

export function useCalendarEvents() {
  const [events, setEvents] = useState<getEventsResponseType[] | null>(null);
  const [loading, setLoading] = useState(false);
  const { handleGetEvents } = useGetEvents();

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    setEvents(await handleGetEvents());
    setLoading(false);
  }, [handleGetEvents]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchEvents();
  }, []);

  const markedDates = useMemo(() => events?.map((e) => parseLocalDate(e.date_Time)), [events]);

  const getEventsForDate = useCallback(
    (date: Date) => {
      events?.filter((e) => {
        isSameLocalDay(parseLocalDate(e.date_Time), date);
      });
    },
    [events]
  );

  return { events, loading, markedDates, getEventsForDate, refetch: fetchEvents };
}
