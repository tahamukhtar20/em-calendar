export interface Tform {
  title: string;
  participents: string[];
  date: Date;
  end: Date;
}
export interface TempForm {
  title: string;
  participents: string[];
  date: string;
  time: string;
  endTime: string | null;
}
