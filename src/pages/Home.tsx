export default function Home() {
  return (
    <div
      id="welcome"
      className="h-screen flex flex-col items-center justify-center text-center space-y-8"
    >
      <img
        className="mx-auto"
        src="https://emoji.slack-edge.com/T0266FRGM/wave-club-penguin/0dcab120e2e8d96e.gif"
        alt="Waving Club Penguin"
      />
      <h1 className="text-3xl font-bold">Hi! I'm Kyle.</h1>
      <h2 className="text-2xl">Welcome to my corner of the internet!</h2>
    </div>
  );
}
