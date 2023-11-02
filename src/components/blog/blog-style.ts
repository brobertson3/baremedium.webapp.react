import { css, styled, keyframes} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Shared from '../shared-style'

interface IFAProps {
  width: number;
  height: number;
  $iconcolor?: string;
  $isOpen?: boolean;
}

interface IFilterListProps {
  $isOpen: boolean;
}

interface ISearchBoxProps {
  $isnotexpanded: boolean;
}

interface ISummaryCoverProps {
  $coverurl: string;
}

// Keyframes
const visibleAnimation = keyframes`
  from { opacity: 0; top: 50px; }
  to { opacity: 1; top: 0; }
`

// CSS
const animationName = css`
  animation-name: ${visibleAnimation};
`

export const BlogFilterCheckbox = styled.input`
  appearance: none;
  background-color: transparent;
  margin: 0;
  font: inherit;
  color: ${Shared.customBlue};
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid ${Shared.customBlue};
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;

  &:before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${Shared.customBlue};
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  &:checked:before {
    transform: scale(1);
  }

  &:focus {
    outline: max(2px, 0.15em) solid currentColor;
    outline-offset: max(2px, 0.15em);
  }

  &:disabled {
    color: ${Shared.greyBackgroundColor};
    cursor: not-allowed;
  }
`

export const BlogFilterCardsContainer = styled.div`
  flex-basis: 80%;

  @media (max-width: 600px) {
    margin-right: 24px;
  }
`

export const BlogFilterContainer = styled.div`
  flex-basis: 20%;

  @media (max-width: 600px) {

  }
`

export const BlogFilterDropdownButton = styled.button`
  height: 30px;
`

export const BlogFilterList = styled.ul<IFilterListProps>`
  list-style: none;
  padding-left: 0;
  margin-top: 24px;
  height: ${props => props.$isOpen ? '100%' : '0'};
  opacity: ${props => props.$isOpen ? '1' : '0'};
  transition: all 2.5s;
`

export const BlogFilterListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

export const BlogFilterText = styled.p`
  display: inline-block;
  margin: 0 0 0 12px;
`

export const BlogFilterTitle = styled.h2`
  display: inline-block;
`

export const BlogFilterTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid currentColor;
`

export const BlogLayout = styled.div`
  display: flex;
  justify-content: space-between;

  position: relative;
  top: 50px; 
  opacity: 0;
  ${animationName}
  animation-duration: 0.7s;
  animation-delay: 1.6s;
  animation-fill-mode: forwards;

  @media (max-width: 600px) {
    display: block;
  }
`

export const BlogSummaryCardContainer = styled.div`
  width: calc((100% / 3) - ((20px / 3) + 4px));
  border: 2px solid ${Shared.customBlue};
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    border-color: ${Shared.customRed};
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const BlogSummaryCardContent = styled.div`
  padding: 0 8px;
`

export const BlogSummaryCardCoverContainer = styled.div<ISummaryCoverProps>`
  width: 100%;
  height: 100%;
  background: center / cover no-repeat url(${props => props.$coverurl});
  transition: all 0.5s;

  &:hover {
    transform: scale(1.2);
  }
`

export const BlogSummaryCardCoverOuterContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 200px;  
`

export const BlogSummaryCardLearnMore = styled.p`
  margin: 8px 0;
  color: ${Shared.customBlue};
  font-weight: 500;
  cursor: pointer;
  display: inline-block;
`

export const BlogSummaryCardMeta = styled.p`
  margin: 4px 0;
  font-size: 1rem;
`

export const BlogSummaryCardTitle = styled.h4`
  margin-bottom: 12px;
`

export const BlogSummaryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px 10px;
  margin-left: 24px;
`

export const BlogSummaryEmptyContainer = styled.div`
  width: 100%;
  text-align: center;
`

export const CustomFontAwesomeIcon = styled(FontAwesomeIcon)<IFAProps>`
  width: ${props => props.width}px; 
  height: ${props => props.height}px;
  ${props => props.$iconcolor ? `color: ${props.$iconcolor};` : ''}
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 3s;
`

export const SearchBox = styled.input`
  width: calc(100% - 104px);
  padding: 8px 88px 8px 16px;
  border-radius: 100px;
  font-size: 20px;
  transition: width ease-in-out 0.5s;
  outline: 0;
  border-width: 0;
`

export const SearchBoxButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 80px;
  background-color: ${Shared.greyBackgroundColor};
  border: none;
  border-radius: 100px;

  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${Shared.greyHoveredBackgroundColor};
  }
`

export const SearchBoxContainer = styled.div<ISearchBoxProps>`
  width: ${props => props.$isnotexpanded ? '30%' : '100%'};
  position: relative;
  margin-bottom: 64px;
  transition: width 0.5s ease-in-out;

  top: 50px; 
  opacity: 0;
  ${animationName}
  animation-duration: 0.7s;
  animation-delay: 1.6s;
  animation-fill-mode: forwards;

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const Title = styled.h1`
  margin: 16px 0;
  color: #fff;
  text-align: center;
  
  position: relative;
  top: 50px; 
  opacity: 0;
  ${animationName}
  animation-duration: 0.7s;
  animation-delay: 1.2s;
  animation-fill-mode: forwards;

  @media (max-width: 1068px) {
    font-size: 3rem;
  }

  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`

export const TitleContainer = styled.div`
  padding: 160px 0 80px;
`