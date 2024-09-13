import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../../Body";
import MOCK_DATA from "../../mocks/mockRestroListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("Should Search Res Lost for burger text input", async () => {
    // Whenever we are doing state updates in any async function in our component
    // We have to wrap the render in the act function.
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>,
        ),
    );

    // Screen should show 20 burger restro cards
    let listOfCards = screen.getAllByTestId("resCard");
    expect(listOfCards.length).toBe(20);

    const searchBtn = screen.getByRole("button", { name: "Search" });

    expect(searchBtn).toBeInTheDocument();

    const searchInput = screen.getByTestId("searchInput");

    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: "burger" } });

    fireEvent.click(searchBtn);

    // Screen should show 2 burger restro cards
    listOfCards = screen.getAllByTestId("resCard");

    expect(listOfCards.length).toBe(2);
});

it("Should display Top Rated Restaurants", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>,
        ),
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(20);

    const filterButton = screen.getByRole("button", { name: "Top Rated Restaurents" });

    expect(filterButton).toBeInTheDocument();

    fireEvent.click(filterButton);

    // Screen should show 4 burger restro cards
    const cardsAfterFiler = screen.getAllByTestId("resCard");

    expect(cardsAfterFiler.length).toBe(4);
});
