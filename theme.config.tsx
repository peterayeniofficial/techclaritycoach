import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Tech Clarity Coach</span>,
  project: {
    link: "https://github.com/peterayeniofficial/techclaritycoach",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/peterayeniofficial/techclaritycoach",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – TCC",
    };
  },
  footer: {
    text: "Curated with ❤️ by Peter Ayeni - Free Forever",
  },
};

export default config;
