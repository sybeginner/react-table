import React, { useState } from "react";

const HEADERS = [
  { id: "name", label: "Name", sort: false },
  { id: "level", label: "Level" },
  { id: "role", label: "Role" },
  { id: "bounty", label: "Bounty" },
  { id: "date", label: "Join Date" },
  { id: "image", label: "Bounty Pic" },
];

const SEED_DATA = [
  {
    id: 1,
    name: "Luffy",
    level: 1,
    role: "Captain",
    bounty: 1000000,
    date: "2001-01-01",
    image: "luffy.png",
  },
  {
    id: 2,
    name: "Zoro",
    level: 2,
    role: "Right-Hand Man",
    bounty: 500000,
    date: "2002-01-01",
    image: "zoro.png",
  },
  {
    id: 3,
    name: "Sanji",
    level: 3,
    role: "Cook",
    bounty: 300000,
    date: "2003-01-01",
    image: "sanji.png",
  },
];

const TableContext = React.createContext({});

export const TableContextProvider = (props) => {
  const [data, setData] = useState(SEED_DATA);
  const [headers, setHeaders] = useState(HEADERS);

  const addRow = (data) => {
    console.log("context add new entry", data);
  };

  const deleteRow = (id) => {
    console.log("context delete row", id);
    setData((prevState) => prevState.filter((data) => data.id !== id));
  };

  const sortRow = (id, direction) => {
    console.log("context sort row", id);
    setData((prevState) => {
      const newState = [...prevState];
      if (id === "level" || id === "bounty")
        newState.sort((a, b) => {
          if (direction === "ascending") return a[id] - b[id];
          if (direction === "descending") return b[id] - a[id];
          else return 0;
        });
      else
        newState.sort((a, b) => {
          if (direction === "ascending") return a[id].localeCompare(b[id]);
          if (direction === "descending") return b[id].localeCompare(a[id]);
          else return 0;
        });
      return newState;
    });
    setHeaders((prevState) => {
      const newState = [...prevState];
      newState.forEach((header) => {
        if (header.id === id) header.sort = direction;
        else header.sort = false;
      });
      return newState;
    });
  };

  return (
    <TableContext.Provider
      value={{
        data,
        headers,
        addRow,
        deleteRow,
        sortRow,
      }}
    >
      {props.children}
    </TableContext.Provider>
  );
};

export default TableContext;
