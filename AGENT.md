# Microgamma Public Website

This is the Deno Fresh (2) project for the Microgamma public website.

## Agent Guidelines

- **NEVER** run servers, tests, or scripts automatically
- **NEVER** commit changes automatically - wait for explicit instruction
- Only perform these actions when explicitly requested by the user

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

The project includes routes for public pages (news, downloads, screenshots),
private areas (dashboard, profile), and API endpoints.

## How the agent commits

When asked to commit you're just going to analyze what's staged and commit it
with a relevant message using conventional commits style and emojis. The commit
message will contain a descriptive title and a more detailed body to explain
what has been committed. After that you'll look into the untracked files and try
to find is there are any that may be relevant to the last commit (i.e.: did I
forget to stage anything?). If yes let's me know otherwise you're done.

# What's Microgamma

Microgamma is an innovative music player that has the potential of moving the
music market in a new direction. With microgamma you can buy your digital music
and "phisically" own it and listen to it while still having the freedom of
listen it anywhere. So... What's the difference with buying it and still
listening through your preferred streaming provider, right? well the difference
is in the fact the 1- you won't need to pay a

```
-- Notes from Grok discussion

1 - Underground tech movement. 2 - Lack of control over music: specifically consider the fact that spotify (for example) can change the album cover of your favorite album without you knowing it of having anything to do with it (this should leverage the fact that music lovers want to OWN their music: for example someone could like to have the picture of their own vynil signed by the artist). 3 - All of them: microgamma is a great choise for the audiophile who needs to OWN his/her music. But is also a privacy-focused solution for tech-savvy users. For this case consider the following: Microgamma will allow a tech-savvy user to provide their onw infrastructure use have premium features. In other words you pay premium features only if you want us to provide them. If you can you provide them yourself. A clear example is enabling AI capabilities. In this case you can provide your OpenAI apiKey in order to add AI capabilities into the app or pay us for doing that for you. Same goes for even running the Microgamma streamer on prems. But it's also an accessible solution for regular music lover that do not want pay for a streaming service because they acknoledge that at the end of the year they've could have bounght several whatever (CD/Vynil/Digital Copy) and now if the wante to quit the subscription they would be left with nothing. 4. Yes I want high highlight how still very experimental Microgamma is. While it can be used for everyday music listening/streaming (like I myself do) it is still in fast evolution and my north star is to give the right steer to the streaming/music market giving people access to a "self-owned" and "user-friendly"  music streaming technology.
```
