import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, Container } from 'semantic-ui-react'

import { Avocado } from '@components/SVGIcons'
import ShoppingCartIcon from './ShoppingCartIcon'
import { useCart } from '@store/Cart'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXbox } from '@fortawesome/free-brands-svg-icons';
import GamesIcon from '@mui/icons-material/Games';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const Navbar = () => {
  const { pathname } = useRouter()
  const { count: cartCount } = useCart()

  return (
    <Menu size="huge" borderless pointing as="header">
      <Container text>
        <Link legacyBehavior href="/" passHref >
          <Menu.Item
            active={pathname === '/'}
            title="Inicio | Todos los videojuegos"
          >
            {/* <Avocado /> */}
            {/* <FontAwesomeIcon icon={faXbox} /> */}
            <GamesIcon sx={{ fontSize: 25, margin: 0.8 }} />
            Inicio
          </Menu.Item>
        </Link>

        <Link legacyBehavior href="/about" >
          <Menu.Item
            active={pathname === '/about'}
            title="Nosotros"
          >
            <InfoIcon sx={{ fontSize: 25, margin: 0.8 }} />
            Nosotros
          </Menu.Item>

        </Link>

        <Link legacyBehavior href="/" passHref >
          <Menu.Item
            title="Contacto"
          >
            <ContactSupportIcon sx={{ fontSize: 25, margin: 0.8 }} />
            Contacto
          </Menu.Item>

        </Link>


        <Menu.Menu position="right">
          <Link legacyBehavior href="/cart" passHref >
            <Menu.Item active={pathname === '/cart'}>
              <ShoppingCartIcon cartCount={cartCount} name="Canasta" />
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Container>
      <style jsx global>{`
        .ui.menu.huge {
          font-size: 1.5rem;
        }
      `}</style>
    </Menu>
  )
}

export default Navbar
