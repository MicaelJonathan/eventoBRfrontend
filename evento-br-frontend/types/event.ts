export interface EventType {
  id: string;
  title: string;
  imageUrl: string;
  spot: string;
  date: string;
  hour: string;
  participantsQuantity: number;
  saved?: boolean;
}
