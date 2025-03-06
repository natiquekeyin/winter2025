const History = ({ title = "Default", text = "Default", onClick }) => {
  // let tl = props.title;
  // let tx = props.text;

  // let { title, text } = props;
  const x = true;

  // const onClick = () => {
  //   console.log("click");
  // };

  return (
    <>
      <h2 className="demo">History</h2>
      <h4 className="head">This history is of {title}</h4>
      <p style={headingStyle}>{text}</p>
      {x ? <button>Yes</button> : <button>No</button>}
      <button onClick={onClick}>Event Button</button>
    </>
  );
};

const headingStyle = {
  color: "blue",
  backgroundColor: "pink",
};

export default History;
