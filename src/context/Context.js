import React, { createContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { Reducer } from "./Reducer";

export const ContextApp = createContext();

const Context = ({ children }) => {
  // This is the data that i got from the faker json website

  const eventss = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.department(),
    image: faker.image.nightlife(640, 480, true),
    date: faker.date.weekday(),
    location: faker.location.streetAddress(),
    description: faker.lorem.word(5),
    pastEvents: faker.datatype.boolean(),
  }));
  console.log(eventss);
  // Use reducer hook with initial state

  const [state, dispatch] = useReducer(Reducer, {
    eventss: eventss,
    selected: [],
    byPastEvents: false,
  });

  return (
    // Context that wraps the whole app with the help of children
    <ContextApp.Provider value={{ state, dispatch }}>
      {children}
    </ContextApp.Provider>
  );
};

export default Context;
