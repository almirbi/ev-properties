"use client";

import { css } from "@emotion/react";
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

export const cssBody3 = css`
  font-family: Engel Voelkers Text;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 175%; /* 24.5px */
  letter-spacing: 0.42px;
`;

export const Body3 = styled.span<{ color?: string }>`
  ${cssBody3};
  ${(props) => (props.color ? `color: ${props.color};` : "")};
`;
