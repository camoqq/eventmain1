import { Button } from "antd";
import { useContext } from "react";
import { FormCheck } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ContextApp } from "../context/Context";

const Events = () => {
  //I am calling the state from the Context
  const {
    state: { byPastEvents },
    dispatch,
  } = useContext(ContextApp);
  return (
    <div className="events">
      <div>
        {/* This is the title */}
        <h2 style={{ color: "white" }}>Events of the week</h2>
        {/* This is the checkbox */}
        <FormCheck
          label="Past Events"
          onChange={() => dispatch({ type: "BY_PAST_EVENTS" })}
          checked={byPastEvents}
        />
      </div>

      <Link to="/selected">
        <Button>Events</Button>
      </Link>
    </div>
  );
};

export default Events;
