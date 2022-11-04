import { render, screen, fireEvent } from "@testing-library/react-native";
import SwitchToggle from "../src/components/productsPage/switch";
describe("when the switch is pressed", () => {
  it("should fire `props.toggleSwitch`", () => {
    render(<SwitchToggle />)
    const switchComponent = screen.getByTestId("switch");
    fireEvent(switchComponent, "valueChange", true);
  });
});
