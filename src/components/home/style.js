import styled from 'styled-components';

export const NormalSpan = styled.span`
  font-size: 10pt;
  :hover {
    cursor: pointer;
  }
`;

export const GreySpan = styled(NormalSpan)`
  color: #828282;
`;

export const SmallSpan = styled.span`
  font-size: 7pt;
  color: #828282;
`;

export const SmallSpanLink = styled(SmallSpan)`
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const StoryDiv = styled.div`
  margin-top: 2pt;
  padding-left: 2pt;
`;
