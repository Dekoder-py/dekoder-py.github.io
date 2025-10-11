export default function Blog() {
  return (
    <div id="blog" className="h-screen flex flex-col space-y-8">
      <h2 className="text-2xl font-bold">Blog</h2>
      <div id="entry" className="space-y-2">
        <h3 className="text-xl">Making this site</h3>
        <h4 className="font-bold">12 October 2025</h4>
        <p>
          This site was my first web project. I learned React, TypeScript, and
          Tailwind CSS to make this site.
        </p>
      </div>
    </div>
  );
}
