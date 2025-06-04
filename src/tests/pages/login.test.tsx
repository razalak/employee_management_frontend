import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";
import Login from "../../pages/login/Login";
// Mock react-router-dom's useNavigate
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});
// Mock the store
const mockStore = configureStore({
  reducer: {
    employee: (state = { employees: [] }) => state,
    department: (state = { departments: [] }) => state,
    employeeApi: (state = {}) => state,
  },
});
// Mock the login mutation
const mockLoginMutation = vi.fn();
vi.mock("../../api-service/auth/login.api", () => ({
  useLoginMutation: () => [
    () => ({
      unwrap: () => mockLoginMutation(),
    }),
    { isLoading: false },
  ],
}));
describe("Login Page", () => {
  const renderLogin = () => {
    return render(
      <Provider store={mockStore}>
        <Login />
      </Provider>
    );
  };
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it("should match snapshot", () => {
    const { container } = renderLogin();
    expect(container).toMatchSnapshot();
  });

  // Test 2: Render login form with all required elements
  it("should render login form with all required elements", () => {
    renderLogin();

    // Check if username input is present
    const usernameInput = screen.getByLabelText("Username");
    expect(usernameInput).toBeInTheDocument();

    // Check if password input is present
    const passwordInput = screen.getByLabelText("Password");
    expect(passwordInput).toBeInTheDocument();

    // Check if submit button is present
    const submitButton = screen.getByRole("button", { name: /log in/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
  });

  it("should handle successful login", async () => {
    mockLoginMutation.mockResolvedValueOnce({ token: "fake-token" });

    renderLogin();

    // Fill in the form
    const usernameInput = screen.getByLabelText("Username");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button", { name: /log in/i });

    await userEvent.type(usernameInput, "test@example.com");
    await userEvent.type(passwordInput, "password123");

    // Submit the form
    await userEvent.click(submitButton);

    // Wait for the login mutation to resolve and navigation to occur
    await waitFor(() => {
      expect(mockLoginMutation).toHaveBeenCalled();
      expect(mockNavigate).toHaveBeenCalledWith("/employee");
    });
  });
});

