"use client"
const handleVerifyOtp = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
  const token = (e.currentTarget.elements.namedItem("otp") as HTMLInputElement).value;
  const response = await fetch("/api/verify-otp", {
    method: "POST",
    headers: {
      email,
      token
    }
  });
  console.log(response.status)
  if (response.ok) {
    window.localStorage.setItem("session", await response.text());
    const params = new URLSearchParams({
      email
    })
    window.location.assign(`/`)
  }
};

const OtpPage = () => {
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email") ?? "";
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            <h1>Enter OTP</h1>
            <form
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            onSubmit={handleVerifyOtp}
            >
                <input
                    type="text"
                    name="otp"
                    placeholder="Enter OTP"
                    style={{ padding: '10px', fontSize: '16px', marginBottom: '20px' }}
                />
                <input
                    type="text"
                    name="email"
                    defaultValue={email}
                    hidden
                    aria-hidden
                />
                <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default OtpPage;