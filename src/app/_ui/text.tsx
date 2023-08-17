"use client";

import styled from "@emotion/styled";

// todo, css prop; one component? Text
export const Subtitle1Regular = styled.span<{ color?: string }>`
  font-family: Helvetica Neue;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 175%;
  letter-spacing: 0.48px;

  ${(props) => (props.color ? `color: ${props.color};` : "")};
`;
