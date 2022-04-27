import { render, screen } from "@testing-library/react"
import App from "../App"

describe("The App component renders correctly", () => {
	it("renders correctly", async () => {
		render(<App />)
		const heading = screen.getByText(/If you are seeing this be careful/i)
		expect(heading).toBeInTheDocument()
	})
})
