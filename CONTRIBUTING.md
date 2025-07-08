# CONTRIBUTING.md

Thank you for your interest in contributing to **Rakkucraft**!
This project aims to build a modern alternative to WordPress.

## How to start contributing

We welcome all kinds of contributions:

- Code improvements
- Documentation updates
- Bug reports and feature requests
- Community support and feedback

Please be respectful and inclusive in all interactions.

## Developing Rakkucraft

We will show the flow of development next.

### Install dependencies

You will need to install and configure the following dependencies on your machine to build **Rakkucraft**:

- Git
- Node.js v22(LTS)
- pnpm version 10.x.x or higher

### Fork the repo

To contribute code to Rakkucraft, you must fork the [Rakkucraft App repo](https://github.com/rakkucraft/rakkucraft-app).

### Clone the repo

1. Clone your GitHub forked repo:

```bash
git clone https://github.com/<github_username>/rakkucraft-app.git
```

2. Go to the Rakkucraft App directory:

```bash
cd rakkucraft-app
```

### Install dependencies

1. Install the dependencies in the root of the repo.

```bash
pnpm install
```

2. After that you can run the apps simultaneously with the following.

```bash
pnpm dev
```

## Issues

If you find a bug, please create an Issue and we’ll triage it.

- Please search [existing Issues](https://github.com/rakkucraft/rakkucraft-app/issues) before creating a new one.
- Please include a clear description of the problem along with steps to reproduce it. Exact steps with screenshots and urls really help here.

## Pull Requests

We actively welcome your Pull Requests! A couple of things to keep in mind before you submit:

- If you’re fixing an Issue, make sure someone else hasn’t already created a PR fixing the same issue. Likewise, make sure to link your PR to the related Issue(s).
- We will always try to accept the first viable PR that resolves the Issue.
- If you’re submitting a new feature, make sure you have opened a [Discussion](https://github.com/orgs/rakkucraft/discussions) to discuss the new feature before opening a PR.

Prior to submitting your PR, please conduct the following pre-flight checks:

- Run `pnpm build` locally to ensure that your code builds successfully without having to wait on us to approve Vercel Preview deploys.
- Ensure that the Prettier tests run successfully on your PR.
