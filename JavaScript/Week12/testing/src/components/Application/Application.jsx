const Application = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Some job</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name here"
            value="Alan"
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio"></textarea>
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>

          <select id="job-location">
            <option value="">Select a Country</option>
            <option value="CA">Canada</option>
            <option value="GB">United Kingdom</option>
            <option value="AU">Australia</option>
          </select>
        </div>

        <div>
          <label>
            <input type="checkbox" id="terms" />I agree to the conditions
          </label>
        </div>
        <input type="submit" value="Add" />
        <input type="reset" value="Clear" />
      </form>
    </>
  );
};
export default Application;
