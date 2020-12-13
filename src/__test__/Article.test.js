import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Article from "../components/Article";

const posts = [
  {
    id: 1,
    title: "Components 101",
    date: "December 15, 2020",
    preview: "Setting up the building blocks of your site",
  },
  {
    id: 2,
    title: "React Data Flow",
    date: "December 11, 2020",
    preview: "Passing props is never passé",
  },
  {
    id: 3,
    title: "Function Components vs Class Components",
    date: "December 10, 2020",
    preview: "React, meet OOJS.",
  },
];

test("renders a <article> element", () => {
  const { container } = render(<Article />);
  expect(container.querySelector("article")).toBeInTheDocument();
});

test("renders a <h3> with the title of the post", () => {
  render(
    <Article
      title={posts[0].title}
      date={posts[0].date}
      preview={posts[0].preview}
    />
  );
  const h3 = screen.queryByText(posts[0].title);
  expect(h3).toBeInTheDocument();
  expect(h3.tagName).toBe("H3");
});

test("renders a <small> with the date of the post", () => {
  render(
    <Article
      title={posts[0].title}
      date={posts[0].date}
      preview={posts[0].preview}
    />
  );
  const small = screen.queryByText(posts[0].date);
  expect(small).toBeInTheDocument();
  expect(small.tagName).toBe("SMALL");
});

test("uses a default value for the date if no date is passed as a prop", () => {
  render(<Article title={posts[0].title} preview={posts[0].preview} />);
  const small = screen.queryByText("January 1, 1970");
  expect(small).toBeInTheDocument();
});

test("renders a <p> with the preview text", () => {
  render(<Article title={posts[0].title} preview={posts[0].preview} />);
  const p = screen.queryByText(posts[0].preview);
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe("P");
});
