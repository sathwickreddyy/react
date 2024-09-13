import { render, screen } from "@testing-library/react";
import RestroCard from "../RestroCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props Data", () => {
    render(<RestroCard resInfo={MOCK_DATA} />);

    const name = screen.getByText("Burger King");

    expect(name).toBeInTheDocument();
});
