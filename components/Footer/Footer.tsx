import React from 'react';
import Link from 'next/link';
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react';

const Footer = () => (
  <Segment
    vertical
    as="footer"
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '1px solid #f2f2f2',
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h4" content="Nosotros" />
            <List>
              <List.Item>
                <Link legacyBehavior href="/about">
                  <a className="a">Conoce más</a>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4" content="Servicios" />
            <List>
              <List.Item>
                <Link legacyBehavior href="/">
                  <a className="a">Todos los productos</a>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4">Hecho por
              <a href="https://www.instagram.com/sebax_lond/" className="a"> @sebax_lond</a>
            </Header>
            <p>Con ayuda de
              <a href="https://platzi.com/" className="a"> Platzi y su curso de Next.JS</a> de
              Platzi dictado por{' '}
              <a href="https://twitter.com/jonalvarezz" className="a">@jonalvarezz</a>
            </p>
            <List horizontal style={{ display: 'flex' }}>
              <List.Item
                icon="instagram"
                style={{ display: 'flex' }}
                content={<a href="https://www.instagram.com/sebax_lond/" className="a">Instagram</a>}
              />
              <List.Item
                icon="github"
                style={{ display: 'flex' }}
                content={
                  <a href="https://github.com/SrSebax" className="a">
                    GitHub
                  </a>
                }
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>

    <style jsx>{`
      .colophon {
        text-align: center;
        margin-top: 3.2rem;
        font-size: 0.8rem;
      }
      .colophon-entry {
        color: grey;
        margin-bottom: 0;
      }
      .a {
        color: #107C10;
      }
    `}</style>
  </Segment>
);

export default Footer;
