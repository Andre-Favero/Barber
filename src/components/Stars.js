import React from 'react';
import styled from 'styled-components';
import Starfull from '../assets/star.svg';
import StarHalf from '../assets/star_half.svg';
import StarEmpty from '../assets/star_empty.svg';

const StarArea = styled.View`
  flex-direction: row;
`;
const StarView = styled.View`
  flex-direction: row;
`;
const StarText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-left: 5px;
  color: #ffaa00;
`;

export default ({stars, showNumber}) => {
  let s = [0, 0, 0, 0, 0];
  let floor = Math.floor(stars);
  let left = stars - floor;
  for (var i = 0; i < floor; i++) {
    s[i] = 2;
  }
  if (left > 0) {
    s[i] = 1;
  }
  return (
    <StarArea>
      {s.map((i, k) => (
        <StarView key={k}>
          {i === 0 && <StarEmpty width="18" height="18" fill="#ffaa00" />}
          {i === 1 && <StarHalf width="18" height="18" fill="#faaf00" />}
          {i === 2 && <Starfull width="18" height="18" fill="#ffaa00" />}
        </StarView>
      ))}
      {showNumber && <StarText> {stars} </StarText>}
    </StarArea>
  );
};
