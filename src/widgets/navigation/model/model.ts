export interface INavigation {
  title: string;
  link: string;
}

export const items: INavigation[] = [
  { title: 'Books', link: '/books' },
  { title: 'Characters', link: '/characters' },
  { title: 'Spells', link: '/spells' },
  { title: 'Houses', link: '/houses' },
];
