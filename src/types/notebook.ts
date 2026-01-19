export interface Notebook {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  color: 'mint' | 'lavender' | 'peach' | 'cream' | 'sky';
  sourceCount: number;
  updatedAt: string;
}
