import { v1 as uuid } from "uuid";

const CreateRoom = (props) => {
  function create() {
    const id = uuid();
    props.history.push(`/webinar/room/${id}`);
  }

  return <button onClick={create}>Create room</button>;
};

export default CreateRoom;
