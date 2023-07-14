import React from 'react';
import { Image, Header } from 'semantic-ui-react';
import Layout from '@components/Layout/Layout';

const xboxFacts = [
  {
    title: 'Variedad de juegos para todas las edades',
    content:
      'En Xbox Store, ofrecemos una amplia variedad de juegos para todas las edades. Desde emocionantes aventuras hasta desafiantes juegos de estrategia, tenemos algo para cada tipo de jugador.',
  },
  {
    title: 'Accesorios y hardware de Xbox de última generación',
    content:
      'Además de videojuegos, también ofrecemos una selección de accesorios y hardware de Xbox de última generación. Desde mandos personalizados hasta auriculares de alta calidad, aquí encontrarás todo lo que necesitas para mejorar tu experiencia de juego.',
  },
  {
    title: 'Descuentos y ofertas especiales',
    content:
      'En Xbox Store, nos enorgullece ofrecer descuentos y ofertas especiales en juegos y accesorios. Mantente atento a nuestras promociones para obtener grandes descuentos en tus títulos favoritos.',
  },
  {
    title: 'Comunidad de jugadores apasionados',
    content:
      'Xbox Store no solo es un lugar para comprar juegos, también es una comunidad de jugadores apasionados. Únete a nosotros y conéctate con otros jugadores, comparte tus logros y descubre nuevas amistades en el mundo del gaming.',
  },
];

const AboutPage = () => {
  return (
    <Layout>
      <section>
        <Header size="huge" as="h1" textAlign="center">
          Acerca de Xbox Store
        </Header>
        <figure style={{ display: 'flex', justifyContent: 'center', marginBottom: '5rem' }}>
          <Image src="/images/xbox-store.jpg" alt="Xbox Store logo" style={{ height: '220px'}} />
        </figure>

        <ol>
          {xboxFacts.map(({ title, content }) => (
            <li key={title}>
              <h3 className="ui header">{title}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ol>
      </section>

      <style jsx>{`
        figure,
        ol {
          padding: 0;
          margin: 0;
        }

        figure {
          margin: 2rem auto 3rem;
          text-align: center;
        }
        figcaption {
          margin-top: 0.5rem;
          font-size: 0.7rem;
          color: grey;
        }

        ol {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          grid-gap: 4.5rem 3rem;
          counter-reset: orderedlist;
        }
        li::before {
          counter-increment: orderedlist;
          content: counter(orderedlist);
          position: absolute;
          top: -43px;
          left: -5px;
          color: #008000;
          font-size: 5rem;
          font-weight: bold;
        }

        li {
          position: relative;
        }
        h3:first-child {
          padding-left: 40px;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default AboutPage;
