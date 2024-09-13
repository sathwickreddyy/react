import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import applicationStore from "../../utils/redux/applicationStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header Component With A login Button", () => {
    // to fix error related to redux logic we need to wrap with Provider
    /**
     * Should load Header Component With A login Button

    could not find react-redux context value; please ensure the component is wrapped in a <Provider>

      16 |
      17 |     // Step 6: Now subsribe to the store using a Selector.
    > 18 |     const cartItems = useSelector((store) => store.cart.items);
         |                                  ^
      19 |     console.log(cartItems);
      20 |
      21 |     useEffect(() => {
     */
    render(
        <BrowserRouter>
            <Provider store={applicationStore}>
                {/* New issue: Now it doesn't understand react-dom related components like Link */}
                {/* 
                    console.error
                            The above error occurred in the <Link> component:
                            
                    To fix this we need to wrap with Browser Router
                */}
                <Header />
            </Provider>
        </BrowserRouter>,
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    expect(loginButton).toBeInTheDocument();
});

it("Should change login to logout on click on button", () => {
    render(
        <BrowserRouter>
            <Provider store={applicationStore}>
                <Header />
            </Provider>
        </BrowserRouter>,
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    expect(loginButton).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
});
