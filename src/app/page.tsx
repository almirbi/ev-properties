"use client";

import Image from "next/image";
import { PropertyCard } from "./_components/PropertyCard";
import styled from "@emotion/styled";
import { SecondaryWhite100, TextDisabled, TheRed } from "./_ui/colors";
import { PlusNaked } from "./_components/Icons";

export default function Home() {
  return (
    <>
      <Toolbar />
      <PropertyCard
        onCross={() => {}}
        image={<Image width="180" height="88" alt="test" src="/" />}
        title="Hi"
      >
        Hi
      </PropertyCard>
    </>
  );
}

const Toolbar = () => {
  return (
    <ToolbarRoot>
      <Left>
        <Input />
        <Dropdown />
        <Dropdown />
      </Left>
      <Right>
        <Button>
          {/** TODO icon part of button comp */}
          <PlusNaked /> <span>Add property</span>
        </Button>
      </Right>
    </ToolbarRoot>
  );
};

const Dropdown = styled.select``;

const Input = styled.input`
  background: ${SecondaryWhite100};
  padding: 8px;
  width: 462px;
`;

const ToolbarRoot = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 13px;
  border-bottom: 1px solid ${TextDisabled};
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Right = styled.div``;

const Button = styled.button`
  background: ${TheRed};
  height: 36px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  border-radius: 4px;
  padding-left: 6px;
  padding-right: 16px;
  display: flex;
  align-items: center;
`;
