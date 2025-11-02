import SplitText from "../components/SplitText.tsx";

export default function Home() {
  return (
    <div
      id="welcome"
      className="h-screen flex flex-col items-center justify-center text-center space-y-8"
    >
      <img
        className="mx-auto"
        src="/assets/wave-club-penguin.gif"
        alt="Waving Club Penguin"
      />
      <SplitText text="Hi! I'm Kyle." className="text-3xl font-bold" />
      <h2 className="text-2xl">Welcome to my corner of the internet!</h2>
    </div>
  );
}
