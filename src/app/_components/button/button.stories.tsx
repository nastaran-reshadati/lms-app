import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const BrandColors: Story = {
  render: () => (
    <>
      <Button>Default</Button>
      <Button variant="neutral">Neutral</Button>
      <Button variant="primary">primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="accent">accent</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="info">info</Button>
      <Button variant="success">success</Button>
      <Button variant="warning">warning</Button>
    </>
  ),
};
