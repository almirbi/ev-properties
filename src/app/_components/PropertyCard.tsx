"use client";

import styled from "@emotion/styled";
import { undocumented1F0F0 } from "../_ui/colors";
import { Subtitle1Regular } from "../_ui/text";

type Props = {
  image: React.ReactNode;
  title: string;
  children: React.ReactNode;
};

export const PropertyCard = ({ image, title, children }: Props) => {
  return (
    <Root>
      <Header>
        <Subtitle1Regular>{title}</Subtitle1Regular>
      </Header>
      <Content>
        <ImageWrapper>{image}</ImageWrapper>
        <Values>
          <Row>
            <div>Rooms</div>
            <div>4</div>
          </Row>
          <Row>
            <div>Floor</div>
            <div>4</div>
          </Row>
          <Row>
            <div>Price</div>
            <div>865.000 EUR</div>
          </Row>
        </Values>
      </Content>
    </Root>
  );
};

const Root = styled.div`
  padding: 8px 12px 8px 8px;
`;

const ImageWrapper = styled.div`
  width: 130px;
  height: 88px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  gap: 12px;
`;

const Values = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const Divider = styled.hr`
  height: 1px;
  background-color: ${undocumented1F0F0};
`;
