import Giscus from "@giscus/react";

export default function Guestbook() {
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-3xl py-8 text-center text-macchiato-text">The Guestbook</h1>
      <Giscus
        repo="dekoder-py/codingcorner.dev"
        repoId="R_kgDOP_sp8w"
        mapping="number"
        term="29"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="catppuccin_macchiato"
        lang="en"
      />
    </div>
  );
}
