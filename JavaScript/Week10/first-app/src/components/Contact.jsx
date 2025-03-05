function Contact({ color, guest, loading }) {
  // const loading = false;
  return (
    <>
      <h5>Contact me at noman.atique@keyin.com</h5>
      {loading ? (
        <h4>Loading.....</h4>
      ) : (
        <h2 style={{ backgroundColor: loading ? color : "blue" }}>
          Welcome {guest}!!!
        </h2>
      )}
    </>
  );
}

export default Contact;
