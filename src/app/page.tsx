"use client";

import Image from "next/image";
import { Divider, PropertyCard, Row } from "./_components/PropertyCard";
import styled from "@emotion/styled";
import { SecondaryWhite100, TextDisabled, TheRed } from "./_ui/colors";
import { PlusNaked } from "./_components/Icons";
import React from "react";
import useAsyncEffect from "use-async-effect";
import axios, { AxiosResponse } from "axios";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

type PropertyType = "house" | "apartment";

type Property = {
  floors: number;
  rooms: number;
  price: string;
  id: string;
  createdAt: string;
  type: PropertyType;
  title: string;
};

type Filters = {
  type?: PropertyType;
  // TODO can be nicer
  sort?: "1" | "2" | "3" | "4";
};

const sortMap = {
  "1": {
    type: "price",
    val: -1,
  },
  "2": {
    type: "price",
    val: 1,
  },
  "3": {
    type: "title",
    val: -1,
  },
  "4": {
    type: "title",
    val: 1,
  },
};

export default function Home() {
  const [properties, setProperties] = React.useState<Property[]>([]);
  useAsyncEffect(async () => {
    // TODO instance
    if (properties.length === 0) {
      const { data } = await axios.get<Property[]>(
        "https://6438f9604660f26eb1a7568b.mockapi.io/api/properties"
      );
      setProperties(data);
    }

    // TODO exhausted deps
  }, [properties, setProperties]);

  const [filters, setFilters] = React.useState<Filters>({});

  const filteredSortedProperties = React.useMemo<Property[]>(() => {
    if (!filters.sort && !filters.type) {
      return properties;
    }

    const newArray = [...properties];
    if (filters.sort) {
      console.log(filters);
      const sort = sortMap[filters.sort];

      if (sort?.type) {
        newArray.sort((a, b) => {
          const type = sort.type as keyof Property;
          if (typeof a[type] !== "string" || typeof b[type] !== "string") {
            return 0;
          }
          if (
            (a[type] as string).toLowerCase() <
            (b[type] as string).toLowerCase()
          ) {
            return sort.val * -1;
          }
          if (
            (a[type] as string).toLowerCase() >
            (b[type] as string).toLowerCase()
          ) {
            return sort.val * 1;
          }

          return 0;
        });
      }
    }

    return filters.type
      ? newArray.filter((property) => {
          return property.type === filters.type;
        })
      : newArray;
  }, [filters, properties]);

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Toolbar
        onChange={(newFilters) =>
          setFilters((curr) => ({ ...curr, ...newFilters }))
        }
        filters={filters}
        onClick={toggleDrawer}
      />
      <Wrapper>
        {filteredSortedProperties.map((property) => {
          return (
            <PropertyCard
              key={`prop-id-${property.id}`}
              onCross={async () => {
                try {
                  const { data } = await axios.delete<Property>(
                    `https://6438f9604660f26eb1a7568b.mockapi.io/api/properties/${property.id}`
                  );
                  setProperties(
                    properties.filter((property) => property.id !== data.id)
                  );
                } catch (e) {
                  console.error((e as Error).message);
                }
              }}
              image={
                <Image width="180" height="88" alt="test" src="/visual.jpg" />
              }
              title={property.title}
            >
              <Row>
                <div>Rooms</div>
                <div>{property.rooms}</div>
              </Row>
              <Row>
                <div>Floors</div>
                <div>{property.floors}</div>
              </Row>
              <Divider />
              <Row>
                <div>Price</div>
                <div>{property.price} EUR</div>
              </Row>
            </PropertyCard>
          );
        })}
      </Wrapper>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <div>Hello World</div>
      </Drawer>
    </>
  );
}

type ToolbarProps = {
  onChange: (filters: Filters) => void;
  filters: Filters;
  onClick: () => void;
};

const Toolbar = ({ onChange, filters, onClick }: ToolbarProps) => {
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

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 70px;
`;

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
