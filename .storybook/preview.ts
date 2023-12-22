// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from "@storybook/react";

import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/blocks";
import React from "react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    doc: {
      controls: { exclude: ["controls"] },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      showPanel: false,
      // page: () => (
      //   <>
      //     <Title />
      //     <Subtitle />
      //     <Description />
      //     <Controls  />
      //     <Stories />
      //   </>
      // ),
    },
  },
};

export default preview;
