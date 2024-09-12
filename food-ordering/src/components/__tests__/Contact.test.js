import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
    test("Should load contact us component", () => {
        render(<Contact />); // will render to jsdom

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument(); // throws Support for the experimental syntax 'jsx' isn't currently enabled (5:12):
    });

    test("Should load button inside Contact component", () => {
        render(<Contact />);

        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit");

        expect(button).toBeInTheDocument();
    });

    it("Should load input name inside Contact component", () => {
        render(<Contact />);

        const inputName = screen.getByPlaceholderText("name");

        expect(inputName).toBeInTheDocument();
    });

    it("Should load two input boxes inside Contact component", () => {
        render(<Contact />);

        const inputBoxes = screen.getAllByRole("textbox");

        expect(inputBoxes.length).toBe(2);
    });
});
