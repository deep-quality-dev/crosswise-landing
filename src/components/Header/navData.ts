export interface NavigationItem {
  label: string;
  href?: string;
}

export const NaviationItems: Array<NavigationItem> = [
  // {
  //   label: 'About',
  //   href: '#About',
  // },
  {
    label: 'Blog',
    href: 'https://crosswise.medium.com/',
  },
  {
    label: 'Docs',
    href: 'https://crosswise.gitbook.io/',
  },
  {
    label: 'Pre-Sale Dashboard',
    href: 'https://presale.crosswise.finance/',
  },
];
