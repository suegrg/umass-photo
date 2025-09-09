const OtpPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h1>Enter Username</h1>
      <form action = "/api/create-account" method = "get"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text" name="username"
          placeholder="Enter Username"
          style={{ padding: "10px", fontSize: "16px", marginBottom: "20px" }}
        />
        <button
          type="submit"
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default OtpPage;
