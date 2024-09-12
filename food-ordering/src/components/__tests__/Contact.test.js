import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

test("Should load contact us component", () => {
    render(<Contact />); // will render to jsdom

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument(); // throws Support for the experimental syntax 'jsx' isn't currently enabled (5:12):
});
