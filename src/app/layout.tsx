"use client";

import styled from "@emotion/styled";
// TODO alias
import { mq } from "./_ui/MediaQueries";
import Image from "next/image";
import { Global, css } from "@emotion/react";
import {
  SecondaryGreyA100,
  SecondaryWhite100,
  undocumented1F0F0,
} from "./_ui/colors";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;

            position: relative;
          }

          * {
            box-sizing: border-box;
          }
        `}
      />
      <body>
        <Container>
          <SideBlock>
            <Image src="/logo.svg" width={41} height="17" alt="ev logo" />
          </SideBlock>
          <Content>
            <TopBar />
            <ChildrenWrapper>{children}</ChildrenWrapper>
          </Content>
        </Container>
      </body>
    </html>
  );
}

const topBarHeight = 68;
const sideWidth = 72;

const ChildrenWrapper = styled.div`
  width: 100%;
`;

const Content = styled.main`
  background: ${SecondaryGreyA100};
  width: 100%;
  padding-top: ${topBarHeight}px;
  margin-left: ${sideWidth}px;
  width: calc(100vw - ${sideWidth}px);
`;

const TopBar = styled.div`
  height: ${topBarHeight}px;
  width: 100%;
  background: ${SecondaryWhite100};
  border-bottom: 1px solid ${undocumented1F0F0};
  position: fixed;
  top: 0;
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: max-content;
  grid-template-columns: ${sideWidth}px auto;
  width: 100%;
`;

const SideBlock = styled.aside`
  display: none;
  height: 100vh;
  width: ${sideWidth}px;
  padding: 28px 15px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
  z-index: 80;
  text-align: center;
  position: fixed;
  background: ${SecondaryWhite100};

  ${mq[1]} {
    display: block;
  }
`;
