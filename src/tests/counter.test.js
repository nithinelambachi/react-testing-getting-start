//installl react testing library
import Counter from "../components/Counter";
import { render, fireEvent, screen, getByText } from "@testing-library/react";
//use this in test last test case
import userEvent from "@testing-library/user-event";

describe("Test the component is visible", () => {
	test("Counter component is visible", () => {
		const { getByText, /*dont use this on the first time*/ getByTestId } =
			render(<Counter />);
		//explain this first
		const data = getByText("0");
		expect(data).toBeInTheDocument();
		//simplify the code
		expect(getByText("Increment")).toBeInTheDocument();
		//using another method
		const counter = getByTestId("decrement");
		expect(counter).toBeInTheDocument();
	});
});292

describe("Checking the counter value is changing or not", () => {
	it("Counter value is incrementing", () => {
		const { getByText } = render(<Counter />);
		const increment = getByText("Increment");
		fireEvent.click(increment);
		const counter = getByText("1");
		expect(counter).toBeInTheDocument();
	});
	it("Counter value is decrementing", () => {
		const { getByText, getByTestId } = render(<Counter />);
		const decrement = getByTestId("decrement");
		userEvent.click(decrement);
		const counter = getByText("-1");
		expect(counter).toBeInTheDocument();
	});
});
