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

it("Should Load Restaurant Menu Component and cart should be updated accordingly on clicks", async () => {
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

    const numberOfFoodItemsRendered = screen.getAllByTestId("foodItems");

    expect(numberOfFoodItemsRendered.length).toBe(14);

    const addButtons = screen.getAllByRole("button", { name: "Add +" });

    expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
    fireEvent.click(addButtons[0]);
    fireEvent.click(addButtons[1]);
    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toEqual(14 + 2); // 14 from RestaurantMenu's Items List and 2 from this page items list.
    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
    expect(screen.getAllByTestId("foodItems").length).toEqual(14); // the cart is cleared.

    expect(screen.getByText("Cart is Empty. Add Items to cart!")).toBeInTheDocument();
});
