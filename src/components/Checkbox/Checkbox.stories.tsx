import { Meta, StoryObj } from "@storybook/react";
import { CheckBox, CheckboxRootProps } from "./";
import { Text } from "../Text";

export default {
  title: "Components/Checkbox",
  component: CheckBox.Root,
  args: {
    children: [
      <CheckBox.Input defaultChecked={true} />,
      <CheckBox.Text>Checkbox</CheckBox.Text>,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<CheckboxRootProps>;

export const Default: StoryObj<CheckboxRootProps> = {};
export const NotChecked: StoryObj<CheckboxRootProps> = {
  args: {
    children: [
      <CheckBox.Input defaultChecked={false} />,
      <CheckBox.Text>Checkbox</CheckBox.Text>,
    ],
  },
};
