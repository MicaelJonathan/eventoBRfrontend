import { getEvents } from '@/services/eventService';

export function useGetEvents() {
  const handleGetEvents = async () => {
    try {
      const response = await getEvents();
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.error('Um erro aconteceu ao tentar pegar os eventos do servidor!');
      console.error(e);
    }
  };

  return { handleGetEvents };
}
