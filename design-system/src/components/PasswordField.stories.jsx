import PasswordField from "./PasswordField";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title: "Molecules/Text Field/Password Field",
};

export const _PasswordField = () => <PasswordField />;

export const ShowPassword = () => <PasswordField placeholder="Password" />;
ShowPassword.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByPlaceholderText("Password");
  await userEvent.type(input, "MyStr0ngPa$s");
  expect(input).toHaveAttribute("type", "password");
  const showPassToggleButton = canvas.getByRole("button");
  await userEvent.click(showPassToggleButton);
  expect(input).toHaveAttribute("type", "text");
};
