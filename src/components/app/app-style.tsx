import styled from 'styled-components'

interface IMainDivProps {
  $noscroll: boolean;
}

export const MainDiv = styled.div<IMainDivProps>`
  background-color: #16161D;
  padding: 16px 32px;
  position: relative;
  overflow-x: hidden;

  @media (max-width: 600px) {
    padding: 20px 24px;
  }
`