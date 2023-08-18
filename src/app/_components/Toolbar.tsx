"use client";

import styled from "@emotion/styled";
import { SecondaryWhite100, TextDisabled, TheRed } from "../_ui/colors";
import { PlusNaked } from "../_components/Icons";
import React from "react";
import "react-modern-drawer/dist/index.css";
import { Filters } from "./types";

type ToolbarProps = {
  onChange: (filters: Filters) => void;
  filters: Filters;
  onClick: () => void;
};

export const Toolbar = ({ onChange, filters, onClick }: ToolbarProps) => {
  return (
    <ToolbarRoot>
      <Left>
        <Input />
        <Dropdown
          onChange={(e) => {
            if (e.target.value === "-") {
              onChange({
                ...filters,
                type: undefined,
              });
            } else {
              onChange({
                ...filters,
                type: e.target.value as Filters["type"],
              });
            }
          }}
        >
          <option>-</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
        </Dropdown>
        <Dropdown
          onChange={(e) => {
            onChange({
              ...filters,
              sort: e.target.value as "1" | "2" | "3" | "4",
            });
          }}
        >
          <option>-</option>
          <option value={1}>Price descending</option>
          <option value={2}>Price ascending</option>
          <option value={3}>Name descending</option>
          <option value={4}>Name ascending</option>
        </Dropdown>
      </Left>
      <Right>
        <Button onClick={onClick}>
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
