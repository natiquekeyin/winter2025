const History = (props) => {
  return (
    <>
      <h2 className="demo">History</h2>
      <h4 className="head">This history is of {props.title.toUpperCase()}</h4>
      <p>{props.text}</p>
    </>
  );
};

export default History;
