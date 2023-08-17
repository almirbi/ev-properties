"use client";

import styled from "@emotion/styled";
import {
  SecondaryWhite100,
  ShadeGreyE100,
  undocumented1F0F0,
} from "../_ui/colors";
import { Subtitle1Regular } from "../_ui/text";
import { CrossNaked } from "./Icons";

type Props = {
  image: React.ReactNode;
  title: string;
  children: React.ReactNode;
  onCross: () => void;
};

export const PropertyCard = ({ image, title, children, onCross }: Props) => {
  return (
    <Root>
      <Wrapper>
        <Header>
          <Subtitle1Regular color={ShadeGreyE100}>{title}</Subtitle1Regular>
          <CloseWrapper onClick={onCross}>
            <CrossNaked />
          </CloseWrapper>
        </Header>
        <Content>
          <ImageWrapper>{image}</ImageWrapper>
          <Values>{children}</Values>
        </Content>
      </Wrapper>
    </Root>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CloseWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Root = styled.div`
  padding: 8px 12px 8px 8px;
  min-width: 277px;
  display: inline-block;
  border: 1px solid ${undocumented1F0F0};
  background: ${SecondaryWhite100};
`;

const ImageWrapper = styled.div`
  width: 130px;
  height: 88px;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  align-items: center;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  gap: 12px;
`;

const Values = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 160px;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const Divider = styled.hr`
  height: 1px;
  background-color: ${undocumented1F0F0};
`;
