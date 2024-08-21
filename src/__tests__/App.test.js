import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders the correct child components", () => {
  const { getByText, getByAltText } = render(<App />);

  // Assuming blogData contains specific content to test against
  // For the Header component
  expect(getByText(/Underreacted/i)).toBeInTheDocument();

  // Check if the logo image is rendered
  expect(getByAltText(/blog logo/i)).toBeInTheDocument();

  // Check if the post titles and previews are rendered correctly
  expect(getByText(/Components 101/i)).toBeInTheDocument();
  expect(getByText(/React Data Flow/i)).toBeInTheDocument();
  expect(getByText(/Function vs Class Components/i)).toBeInTheDocument();

  // Optionally, check for specific previews or dates
  expect(getByText(/Setting up the building blocks of your site/i)).toBeInTheDocument();
  expect(getByText(/December 15, 2020/i)).toBeInTheDocument();

 
});