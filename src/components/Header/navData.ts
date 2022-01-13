import {
  CROSS_DOCS_LINK,
  GITHUB_LINK,
  MEDIUM_LINK,
  PRESALE_CROSS_LINK,
  DISCORD_LINK
} from '@/constants/index';

export interface NavigationItem {
  label: string;
  href?: string;
}

export const NaviationItems: Array<NavigationItem> = [
  {
    label: 'CrossDocs',
    href: CROSS_DOCS_LINK,
  },
  {
    label: 'Blog',
    href: MEDIUM_LINK,
  },
  {
    label: 'Github',
    href: GITHUB_LINK,
  },
  {
    label: 'Discord',
    href: DISCORD_LINK,
  },
  {
    label: 'Pre-Sale Dashboard',
    href: PRESALE_CROSS_LINK,
  },
];
