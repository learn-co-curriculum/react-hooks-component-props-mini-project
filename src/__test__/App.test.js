import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

const testData = {
  name: "Underreacted",
  image: "logo.png",
  about: "A blog about learning React",
  posts: [
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
  ],
};

test("renders the correct child components", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".App")).toBeInTheDocument();
  expect(container.querySelector(".App header")).toBeInTheDocument();
  expect(container.querySelector(".App aside")).toBeInTheDocument();
  expect(container.querySelector(".App main")).toBeInTheDocument();
});
