import React from 'react';
import styled from 'styled-components';

const MainUI = styled.div`
  padding: 20px 12px;
  margin: 0 auto;
  width: 100%;
  max-width: 768px;
`;

export default function Main(props) {
  const { children } = props;

  return (
    <MainUI>
      {children}
    </MainUI>
  );
}
