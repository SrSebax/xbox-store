import React from 'react';
import { Header, List, Segment, Container, Icon } from 'semantic-ui-react';
import Layout from '@components/Layout/Layout';

const ContactPage = () => {
  return (
    <Layout>
      <section>
        <Container>
          <Header size="huge" as="h1" textAlign="center">
            Contacto
          </Header>
          <Segment>
            <List relaxed="very">
              <List.Item>
                <List.Icon name="phone" size="large" verticalAlign="middle" />
                <List.Content>
                  <List.Header>Teléfono</List.Header>
                  <List.Description>
                    <a style={{ color: '#000', }}>+123456789</a>
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="mail" size="large" verticalAlign="middle" />
                <List.Content>
                  <List.Header>Correo electrónico</List.Header>
                  <List.Description>
                    <a style={{ color: '#000', }}>info@example.com</a>
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="map marker alternate" size="large" verticalAlign="middle" />
                <List.Content>
                  <List.Header>Dirección</List.Header>
                  <List.Description>123 Calle Principal, Ciudad, País</List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Segment>
          <Segment textAlign="center">
            <Header as="h3" style={{ marginBottom: '1rem' }}>
              Síguenos en nuestras redes sociales
            </Header>
            <Icon.Group size="big">
              <a style={{ color: '#000', marginInline: '10px' }} href="https://github.com/SrSebax" target="_blank" rel="noopener noreferrer">
                <Icon name="github" />
              </a>
              <a style={{ color: '#000', marginInline: '10px' }} href="https://www.facebook.com/profile.php?id=100075721669236" target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" />
              </a>
              <a style={{ color: '#000', marginInline: '10px' }} href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Icon name="instagram" />
              </a>
            </Icon.Group>
          </Segment>
        </Container>
      </section>
    </Layout>
  );
};

export default ContactPage;
