import { Meta, StoryObj } from "@storybook/react";
import { FormsFooter, FormsFooterProps } from "./FormsFooter";
import { Link } from "./Link";

export default {
  title: "Components/FormsFooter",
  component: FormsFooter,
  args: {
    children: <Link>Footer with link</Link>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<FormsFooterProps>;

export const Default: StoryObj<FormsFooterProps> = {};
