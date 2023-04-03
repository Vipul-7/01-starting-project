import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test(" renders Hello world text", () => {
    // arrange
    render(<Greeting />);

    // act
    //...nothing

    // assert
    const helloWorldElement = screen.getByText("Hello World");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'Greeting from Vipul' text if button not clicked", () => {
    render(<Greeting />);
    const greetingElement = screen.getByText("Greeting from Vipul", {
      exact: false,
    });
    expect(greetingElement).toBeInTheDocument();
  });

  test("renders 'Changed Text' text if button clicked", () => {
    // arrange
    render(<Greeting />);

    // act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // assert
    const greetingElement = screen.getByText("Changed Text", { exact: false });
    expect(greetingElement).toBeInTheDocument();
  });

  test("does not render 'Greeting from Vipul' text if button clicked", () => {
    // arrange
    render(<Greeting />);

    // act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // assert
    const greetingElement = screen.queryByText("Greeting from Vipul", {
      exact: false,
    });
    expect(greetingElement).toBeNull();
  });
});
