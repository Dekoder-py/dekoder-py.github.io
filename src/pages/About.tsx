export default function About() {
  return (
    <div
      id="about"
      className="h-screen flex flex-col items-center justify-center text-center space-y-8"
    >
      <h2 className="text-2xl font-bold">About Me</h2>
      <p>
        I'm a 15 year old programmer based in New Zealand. <br />I enjoy
        programming, homelabbing, Raspberry Pis, and being a part of{" "}
        <a
          href="https://hackclub.com"
          target="_blank"
          className="underline hover:text-blue-600 dark:hover:text-blue-400"
        >
          Hack Club
        </a>
        !
      </p>
    </div>
  );
}
