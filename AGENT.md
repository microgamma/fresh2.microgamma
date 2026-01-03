# Microgamma Public Website

This is the Deno Fresh (2) project for the Microgamma public website.

## Project Overview

- **Framework**: Fresh 2 (Deno web framework)
- **Styling**: Tailwind CSS
- **Authentication**: Kinde OAuth
- **Build Tool**: Vite

## Available Commands

- `deno task check`: Runs formatting check, linting, and type checking
- `deno task dev`: Starts development server with hot reload
- `deno task build`: Builds the project for production
- `deno task start`: Starts the production server
- `deno task update`: Updates Fresh to the latest version

## Development

To start development, run `deno task dev`. This will start the Vite dev server.

The project includes routes for public pages (news, downloads, screenshots), private areas (dashboard, profile), and API endpoints.

## How the agent commits

When asked to commit you're just going to analyze what's staged and commit it with a relevant message using conventional commits style and emojis. The commit message will contain a descriptive title and a more detailed body to explain what has been committed. After that you'll look into the untracked files and try to find is there are any that may be relevant to the last commit (i.e.: did I forget to stage anything?). If yes let's me know otherwise you're done.