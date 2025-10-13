export default function NotFound() {
  return (
    <div
      id="not-found"
      className="h-screen flex flex-col items-center justify-center text-center space-y-8"
    >
      <h1 className="text-3xl font-bold">
        Oh no! Error 404: Page not found :(
      </h1>
      <p>
        It seems like you tried to go somewhere that doesn't exist!
        Back to{" "}
        <a
          href="/"
          className="underline hover:text-blue-600 dark:hover:text-blue-400"
        >
          home
        </a>
        !
      </p>
    </div>
  );
}
