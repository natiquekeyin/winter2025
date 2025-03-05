const History = ({ title, text }) => {
  // let tl = props.title;
  // let tx = props.text;

  // let { title, text } = props;
  const x = true;
  return (
    <>
      <h2 className="demo">History</h2>
      <h4 className="head">This history is of {title}</h4>
      <p style={headingStyle}>{text}</p>
      {x ? <button>Yes</button> : <button>No</button>}
    </>
  );
};

const headingStyle = {
  color: "blue",
  backgroundColor: "pink",
};

export default History;
