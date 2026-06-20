import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { HomePage } from "@/features/home/home-page";

describe("/", () => {
  it("renders the home page", () => {
    // Arrange
    // Act
    render(<HomePage />);

    // Assert
  });
});
