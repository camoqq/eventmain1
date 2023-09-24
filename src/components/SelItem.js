import { Button, Card } from "antd";
import React, { useContext } from "react";
import { ContextApp } from "../context/Context";

// child component from the selected elements

const SelItem = ({ item }) => {
  const { dispatch } = useContext(ContextApp);
  return (
    <div className="two">
      <Card style={{ backgroundColor: "aliceblue" }}>
        <h2>{item.name}</h2>
        <h3>When: {item.date}</h3>
        <i>
          <p>{item.pastEvents ? "Event AVAILABLE" : "Event has passed"}</p>
        </i>
        <p>
          {" "}
          <b>Address:</b> {item.location}
        </p>
        <Button
          danger
          onClick={() => dispatch({ type: "REMOVE", payload: item })}
        >
          Remove event
        </Button>
      </Card>
    </div>
  );
};

export default SelItem;
