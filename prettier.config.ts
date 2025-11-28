const config: import('prettier').Config = {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  semi: true,
  singleQuote: true,
  experimentalTernaries: true,
  htmlWhitespaceSensitivity: 'ignore',
  trailingComma: 'all',
};

export default config;
