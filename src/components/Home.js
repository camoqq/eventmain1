import React, { useContext } from "react";
import { ContextApp } from "../context/Context";
import CardComp from "./CardComp";
import Events from "./Events";

const Home = () => {
  //I am bringing the state from the Context Component here:
  const {
    state: { eventss, byPastEvents },
  } = useContext(ContextApp);

  const changedEv = () => {
    let newEvents = eventss;
    if (!byPastEvents) {
      newEvents = newEvents.filter((item) => item.pastEvents);
    }
    return newEvents;
  };

  return (
    <div className="bHome">
      {/* This is my events component */}
      <Events />
      <div className="home">
        {/* This is my CardComponent */}
        {changedEv().map((ev) => {
          return <CardComp ev={ev} />;
        })}
      </div>
    </div>
  );
};

export default Home;
