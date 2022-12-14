import { Meta, StoryObj } from "@storybook/react";
import { Link, LinkProps } from ".";

export default {
  title: "Components/Link",
  component: Link,
  args: {
    children: "Link",
  },
} as Meta<LinkProps>;

export const Default = {};
