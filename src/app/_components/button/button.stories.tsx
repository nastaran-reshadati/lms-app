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
export const OutlinedButton: Story = {
  render: () => (
    <>
      <Button>Default</Button>
      <Button isOutline={true} variant="neutral">
        Neutral
      </Button>
      <Button isOutline={true} variant="primary">
        primary
      </Button>
      <Button isOutline={true} variant="secondary">
        secondary
      </Button>
      <Button isOutline={true} variant="accent">
        accent
      </Button>
      <Button isOutline={true} variant="ghost">
        ghost
      </Button>
      <Button isOutline={true} variant="info">
        info
      </Button>
      <Button isOutline={true} variant="success">
        success
      </Button>
      <Button isOutline={true} variant="warning">
        warning
      </Button>
    </>
  ),
};

export const BrandColorsWithLoading: Story = {
  render: () => (
    <>
      <Button>Default</Button>
      <Button isLoading={true} loadingText="loading" variant="neutral">
        Neutral
      </Button>
      <Button isLoading={true} loadingText="loading" variant="primary">
        primary
      </Button>
      <Button isLoading={true} loadingText="loading" variant="secondary">
        secondary
      </Button>
      <Button isLoading={true} loadingText="loading" variant="accent">
        accent
      </Button>
      <Button isLoading={true} loadingText="loading" variant="ghost">
        ghost
      </Button>
      <Button isLoading={true} loadingText="loading" variant="info">
        info
      </Button>
      <Button isLoading={true} loadingText="loading" variant="success">
        success
      </Button>
      <Button isLoading={true} loadingText="loading" variant="warning">
        warning
      </Button>
    </>
  ),
};

export const ButtonWithColors: Story = {
  render: () => (
    <>
      <Button loadingText="loading" variant="neutral">
        neutral
      </Button>
      <Button loadingText="loading" variant="primary">
        primary
      </Button>
      <Button loadingText="loading" variant="secondary">
        secondary
      </Button>
      <Button loadingText="loading" variant="accent">
        accent
      </Button>
      <Button loadingText="loading" variant="success">
        success
      </Button>
      <Button loadingText="loading" variant="info">
        info
      </Button>
      <Button loadingText="loading" variant="warning">
        warning
      </Button>
      <Button loadingText="loading" variant="error">
        error
      </Button>
    </>
  ),
};
