import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../../RestaurantMenu";
import MOCK_DATA from "../../mocks/mockRestaurantMenu.json";
import { Provider } from "react-redux";
import applicationStore from "../../../utils/redux/applicationStore";
import Header from "../../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../../Cart";

// jest.fn() creates a mock function
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("Should load the Restaurant Menu Component", async () => {
    await act(async () =>
        render(
            <Provider store={applicationStore}>
                <BrowserRouter>
                    <RestaurantMenu />
                </BrowserRouter>
            </Provider>,
        ),
    );

    const accordianHeader = screen.getByText("Recommended (14)");
    expect(accordianHeader).toBeInTheDocument();
});

it("Should expand the accordion to show food items", async () => {
    await act(async () =>
        render(
            <Provider store={applicationStore}>
                <BrowserRouter>
                    <RestaurantMenu />
                </BrowserRouter>
            </Provider>,
        ),
    );

    const accordianHeader = screen.getByText("Recommended (14)");
    fireEvent.click(accordianHeader);

    const numberOfFoodItemsRendered = screen.getAllByTestId("foodItems");
    expect(numberOfFoodItemsRendered.length).toBe(14);
});

it("Should add items to the cart", async () => {
    await act(async () =>
        render(
            <Provider store={applicationStore}>
                <BrowserRouter>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </BrowserRouter>
            </Provider>,
        ),
    );

    const accordianHeader = screen.getByText("Recommended (14)");
    fireEvent.click(accordianHeader);
    const addButtons = screen.getAllByRole("button", { name: "Add +" });
    expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
    fireEvent.click(addButtons[0]);
    fireEvent.click(addButtons[1]);
    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();
});

it("Should clear the cart", async () => {
    await act(async () =>
        render(
            <Provider store={applicationStore}>
                <BrowserRouter>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </BrowserRouter>
            </Provider>,
        ),
    );
    const accordianHeader = screen.getByText("Recommended (14)");
    fireEvent.click(accordianHeader);
    const addButtons = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addButtons[5]);
    expect(screen.getByText("Cart (3 items)")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
    expect(screen.getByText("Cart is Empty. Add Items to cart!")).toBeInTheDocument();
});
