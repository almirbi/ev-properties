"use client";

import Image from "next/image";
import { Divider, PropertyCard, Row } from "./_components/PropertyCard";
import styled from "@emotion/styled";
import React from "react";
import useAsyncEffect from "use-async-effect";
import axios from "axios";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Filters, Property } from "./_components/types";
import { Toolbar } from "./_components/Toolbar";
import { useFilters } from "./_components/useFilters";

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

  const searchedProperties = useFilters({ filters, properties });

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
        {searchedProperties.map((property) => {
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

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 70px;
`;
