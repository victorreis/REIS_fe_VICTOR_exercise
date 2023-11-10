import { SearchContainer } from '@components/Search/styles';

export type SearchItem<T extends object> = {
  id: string;
  item: T;
};

export type SearchProps<T extends object> = {
  value: string;
  items: SearchItem<T>[];
  keysToSearch?: string[];
  onChange?: (newValue: string, items: SearchItem<T>[]) => void;
};

const Search = <T extends object>({
  value,
  items,
  keysToSearch,
  onChange,
}: SearchProps<T>) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;

    const newValue = e.target.value || '';
    const filteredItems = items.filter((item) => {
      return Object.entries(item.item).some(([key, itemValue]) => {
        return (
          ((keysToSearch && keysToSearch.includes(key)) || !keysToSearch) &&
          !!itemValue &&
          key !== 'id' &&
          typeof itemValue === 'string' &&
          String(itemValue).toLowerCase().includes(newValue.toLowerCase())
        );
      });
    });

    onChange(newValue, filteredItems);
  };

  return (
    <SearchContainer>
      <input data-testid="search-input" onChange={handleChange} value={value} />
    </SearchContainer>
  );
};

export default Search;
