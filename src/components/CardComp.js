import { Card, Image } from "antd";
import { useContext } from "react";
import { ContextApp } from "../context/Context";

const CardComp = ({ ev }) => {
  const { dispatch } = useContext(ContextApp);

  return (
    <div className="card">
      {/* This is the Card from AntDesign */}

      <Card
        onClick={() => dispatch({ type: "ADD", payload: ev })}
        hoverable={true}
        cover={
          <div className="an">
            <Image src={ev.image} />
          </div>
        }
      >
        <h2>{ev.name}</h2>
        <h3>When: {ev.date}</h3>
        <i>
          <p>{ev.pastEvents ? "Event AVAILABLE" : "Event has passed"}</p>
        </i>

        <p>
          <b>Address:</b> {ev.location}
        </p>
        <p>
          <b>Description:</b> {ev.description}
        </p>
      </Card>
    </div>
  );
};

export default CardComp;
