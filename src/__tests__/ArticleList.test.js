import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Article from "../components/Article";

test("renders a <article> element", () => {
  const { container } = render(
    <Article
      title={"Components 101"}
      date={"December 15, 2020"}
      preview={"Setting up the building blocks of your site"}
    />
  );
  expect(container.querySelector("article")).toBeInTheDocument();
});

test("renders a <h3> with the title of the post", () => {
  render(
    <Article
      title={"Components 101"}
      date={"December 15, 2020"}
      preview={"Setting up the building blocks of your site"}
    />
  );
  const h3 = screen.queryByText(/Components 101/);
  expect(h3).toBeInTheDocument();
  expect(h3.tagName).toBe("H3");
});

test("renders a <small> with the date of the post", () => {
  render(
    <Article
      title={"Components 101"}
      date={"December 15, 2020"}
      preview={"Setting up the building blocks of your site"}
    />
  );
  const small = screen.queryByText(/December 15, 2020/);
  expect(small).toBeInTheDocument();
  expect(small.tagName).toBe("SMALL");
});

test("uses a default value for the date if no date is passed as a prop", () => {
  render(
    <Article
      title={"Components 101"}
      preview={"Setting up the building blocks of your site"}
    />
  );
  const small = screen.queryByText(/January 1, 1970/);
  expect(small).toBeInTheDocument();
});

test("renders a <p> with the preview text", () => {
  render(
    <Article
      title={"Components 101"}
      date={"December 15, 2020"}
      preview={"Setting up the building blocks of your site"}
    />
  );
  const p = screen.queryByText(/Setting up the building blocks of your site/);
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe("P");
});
