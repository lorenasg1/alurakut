import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import { Box } from '../components/Box';
import { MainGrid } from '../components/MainGrid';
import { ProfileSidebar } from '../components/ProfileSidebar';
import {
  AlurakutMenu,
  AlurakutMenuProfileSidebar,
  OrkutNostalgicIconSet,
} from '../lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../ProfileRelations';

export default function Home() {
  const githubUser = 'lorenasg1';
  const favoritePeople = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ];

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <AlurakutMenuProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem-vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: 'profileRelationsArea' }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({favoritePeople.length})
            </h2>
            <ul>
              {favoritePeople &&
                favoritePeople.map((person) => {
                  return (
                    <li>
                      <a href={`/users/${person}`} key={person}>
                        <img src={`https://github.com/${person}.png`} alt="" />
                        <span>{person}</span>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>comunidades</Box>
        </div>
      </MainGrid>
    </>
  );
}
