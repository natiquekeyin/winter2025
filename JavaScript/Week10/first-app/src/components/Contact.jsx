function Contact({ color, guest, loading, onClick }) {
  // const loading = false;
  return (
    <>
      <h5>Contact me at noman.atique@keyin.com</h5>
      {loading ? (
        <h4 style={{ backgroundColor: color }}>Loading.....</h4>
      ) : (
        <h2 style={{ backgroundColor: loading ? color : "blue" }}>
          Welcome {guest}!!!
        </h2>
      )}
      <button onClick={onClick}>Event</button>
    </>
  );
}

export default Contact;
