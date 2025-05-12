import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import results from "../../../../.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Tests: Story = {
  render: (args) => <Button {...args}>Click Here</Button>,
};
Tests.decorators = [withTests({ results })];

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

export const ButtonSize: Story = {
  render: () => (
    <>
      <Button size="tiny">neutral</Button>
      <Button size="small">neutral</Button>
      <Button size="normal">neutral</Button>
      <Button size="large">neutral</Button>
    </>
  ),
};

export const IconButton: Story = {
  render: () => (
    <>
      <Button variant="neutral">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        Submit
      </Button>
      <Button variant="neutral">
        Submit
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </Button>
    </>
  ),
};
