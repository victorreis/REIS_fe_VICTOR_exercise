import { useEffect, useMemo, useState } from 'react';

import Search, { SearchItem } from '@components/Search';
import { nanoid } from 'nanoid';

export type UserSearchProps<T extends object> = {
  items: T[];
};

function itemsToSearchItems<T extends object>(items: T[]): SearchItem<T>[] {
  return items.map((team) => ({ id: nanoid(), item: team }));
}

export function useSearch<T extends object>({ items }: UserSearchProps<T>) {
  const [searchValue, setSearchValue] = useState<string>('');
  const [itemsToBeShown, setItemsToBeShown] = useState<T[]>(items);

  useEffect(() => {
    setItemsToBeShown(items);
  }, [items]);

  const searchItems = useMemo(() => itemsToSearchItems<T>(items), [items]);

  const handleSearchChange = (
    newValue: string,
    filteredItems: SearchItem<T>[]
  ) => {
    setSearchValue(newValue);
    setItemsToBeShown(filteredItems.map((item) => item.item));
  };

  return {
    itemsToBeShown,
    renderedSearchInput: (
      <Search
        items={searchItems}
        onChange={handleSearchChange}
        value={searchValue}
      />
    ),
  };
}
