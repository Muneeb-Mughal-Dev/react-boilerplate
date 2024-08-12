import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="bg-background text-foreground w-screen h-svh sm:h-lvh flex items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary/50">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-foreground-100">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>

          <Link
            to="/"
            className="inline-flex text-white bg-primary/80 hover:bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4 transition-colors ease-out duration-200"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};
