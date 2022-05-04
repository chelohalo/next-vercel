import { ActiveLink } from "./ActiveLink";

import styles from './NavBar.module.css'


const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const NavBar = () => {
  return (
    <nav className={styles['menu-container']}>
{
  menuItems.map(({text,href})=> (
    <ActiveLink key={href} text={text} href={href}></ActiveLink>

  )
    )

}
</nav>

    // <nav className={styles['menu-container']}>
    //   <ActiveLink text='Home' href="/"></ActiveLink>
    //   <ActiveLink text='About' href="/about"></ActiveLink>
    //   <ActiveLink text='Contact' href="/contact"></ActiveLink>
    //   <ActiveLink text='Pricing' href="/pricing"></ActiveLink>
    // </nav>
  );
};
