import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("reders posts if request succeeds", async () => {
    // overriding the fetch function with a dummy mock function because we don't want to send a real request during testing
    window.fetch = jest.fn(); // creates the dummy mock function
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: "p1",
          title: "First post",
        },
      ],
    });

    // arrange
    render(<Async />);

    // act

    // assert
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
