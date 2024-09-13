import { render } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestroListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("Should render the Body Component with Search", async () => {
    // Whenever we are doing state updates in any async function in our component
    // We have to wrap the render in the act function.
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>,
        ),
    );
});
