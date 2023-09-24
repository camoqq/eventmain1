import { Button } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextApp } from "../context/Context";
import SelItem from "./SelItem";

const Selected = () => {
  const {
    state: { selected },
  } = useContext(ContextApp);
  return (
    // This is the parent component from the selected elements
    <div className="eve1">
      <div className="par">
        <h1
          className="eve"
          style={{ color: "white", padding: "5px", borderRadius: "10px" }}
        >
          Events to attend
        </h1>
        <span className="span1">
          <Link to="/">
            <Button danger>Back</Button>
          </Link>
        </span>
      </div>
      {/* This is my child component from the elements that were selected to be be displayed in the next page */}
      <div>
        <div className="one1 ">
          {selected.map((item) => {
            return <SelItem item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Selected;
