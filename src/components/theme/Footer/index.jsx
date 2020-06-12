import React from 'react';
import { Container, Temp, GrommetIcon } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Craig Kaneshiro</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
          <span aria-label="love" role="img">
            💖
          </span>{' '}
          by{' '}
          <a href="https://www.google.com/?ref=portfolio-dev" rel="noopener noreferrer" target="_blank">
            Craig
          </a>
        </span>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon, grommetIcon }) => (                     
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            {/* <img width="24" src={icon} alt={name} />             */}
            <GrommetIcon tag={grommetIcon}></GrommetIcon>
          </a>        
        ))}
      </Links>      
    </Flex>
  </Wrapper>
);
