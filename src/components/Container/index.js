import React from 'react';
import styled from 'styled-components';

const ContainerUI = styled.div``;

export default function Container(props) {
  const { children } = props;

  return (
    <ContainerUI>
      {children}
    </ContainerUI>
  );
}
