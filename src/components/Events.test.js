import { render, screen } from "@testing-library/react";
import Events from "./Events";

test("displays events text on page", () => {
  render(<Events />);
  const HTMLElement = screen.getByText(/Events of the week/i);
  expect(HTMLElement).toBeInTheDocument();
});
