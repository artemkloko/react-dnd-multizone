import { useState } from "react";

import { Transform } from "react-dnd-multizone";

export type Item = {
  id: string;
  color: string;
  transform: Transform;
} & Pick<React.HTMLAttributes<HTMLDivElement>, "style">;

type UseItemsState = {
  ids: Item["id"][];
  byId: {
    [key: string]: Item;
  };
};

export const useItems = (items: Item[]) => {
  const initialState = {
    ids: items.map(item => item.id),
    byId: items.reduce<UseItemsState["byId"]>((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {})
  };
  const [state, setState] = useState<UseItemsState>(initialState);

  const update = (item: Item) => {
    setState({
      ...state,
      byId: {
        ...state.byId,
        [item.id]: item
      }
    });
  };

  return { state, update };
};

export const dummyItems: Item[] = [
  {
    id: "a",
    transform: { top: 0, left: 100, width: 150, height: 50 },
    color: "red"
  },
  {
    id: "b",
    transform: { top: 100, left: 0, width: 150, height: 50 },
    color: "blue"
  },
  {
    id: "c",
    transform: { top: 50, left: 50, width: 150, height: 50 },
    color: "green"
  }
];
