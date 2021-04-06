import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders a <header> element", () => {
  const { container } = render(<Header />);
  expect(container.querySelector("header")).toBeInTheDocument();
});

test("renders a <h1> with the blog name", () => {
  render(<Header name="Underreacted" />);
  const h1 = screen.queryByText("Underreacted");
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});
