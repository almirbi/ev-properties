import React from "react";
import { Filters, Property } from "./types";

type Props = {
  filters: Filters;
  properties: Property[];
};

export function useFilters({ filters, properties }: Props) {
  const filteredSortedProperties = React.useMemo<Property[]>(() => {
    if (!filters.sort && !filters.filter) {
      return properties;
    }

    let newArray = [...properties];

    if (filters.filter) {
      const filteredArray = newArray.filter((property) => {
        return property.type === filters.filter;
      });

      newArray = filteredArray;
    }

    if (filters.sort) {
      const sort = filters.sort;

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

    return newArray;
  }, [filters.filter, filters.sort, properties]);

  const searchedProperties = React.useMemo<Property[]>(() => {
    const searchTerm = filters.search?.toLowerCase();
    if (searchTerm) {
      console.log();
      return filteredSortedProperties.filter((property) => {
        return property.title.toLowerCase().includes(searchTerm);
      });
    }
    return filteredSortedProperties;
  }, [filters.search, filteredSortedProperties]);

  return searchedProperties;
}
