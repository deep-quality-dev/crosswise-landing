export interface NavigationItem {
  label: string;
  href?: string;
}

export const NaviationItems: Array<NavigationItem> = [
  {
    label: 'About',
    href: '#About',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Docs',
    href: '/docs',
  },
];
