import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useTheme } from "../useTheme";
import { ThemeProvider } from "../ThemeProvider";

// Helper component to test the ThemeProvider with children
const TestComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme} data-testid="toggle-button">
        Toggle Theme
      </button>
    </div>
  );
};

describe("ThemeProvider", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should render children with default light theme", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("theme").textContent).toBe("light");
  });

  it("Should toggle theme when the toggle button is clicked", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByTestId("toggle-button"));

    expect(screen.getByTestId("theme").textContent).toBe("dark");
  });
});
