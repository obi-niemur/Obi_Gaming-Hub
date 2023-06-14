import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props{
    onSelectSortOrder: (sortOrder: string)=>void;
    sortName: string;
}

const SortSelector = ({ onSelectSortOrder, sortName }: Props) => {
  const sortOrders = [
    { value: "", label: "Relavance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currenSortOrder = sortOrders.find(f=>f.value === sortName)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currenSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((data) => (
          <MenuItem
            onClick={() => onSelectSortOrder(data.value)}
            key={data.label}
            value={data.value}
          >
            {data.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector