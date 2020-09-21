import React from 'react';

import Feed from '../Feed'

import { Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Raylson Andrews</h1>
        <h2>@raylsonandrews</h2>

        <p>
          Javascript Developer (ReactJs, NodeJs).
        </p>

        <ul>
          <li>
            <LocationIcon />
            Fortaleza, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 22 de Julho de 1996.
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>100</strong>
          </span>
          <span>
            <strong>100 </strong> Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;