# Rakkucraft App

This is the official web application for **Rakkucraft**, an open-source platform aiming to provide a modern alternative to WordPress.

This repository hosts the **authentication-enabled community site**, integrating a **drag-and-drop builder** and **deployment pipeline** using:

- **Next.js** (App Router architecture)
- **Supabase** (Auth, Database, and Storage)
- **Cloudflare Workers** (Hosting and serverless logic)

## 🚧 Status

This project is currently in **early development**.  
The first stable release is being planned.

## 📦 Tech Stack (Planned)

- [Next.js](https://nextjs.org/) – App Router architecture
- [Supabase](https://supabase.com/) – Authentication, Database, and Storage
- [Cloudflare Workers](https://developers.cloudflare.com/workers/) – Hosting and serverless logic
- [TypeScript](https://www.typescriptlang.org/) – Static typing
- [Tailwind CSS](https://tailwindcss.com/) – UI styling

## 📚 Overview

Rakkucraft reimagines the WordPress experience using a modern tech stack—empowering users to build, manage, and deploy websites with familiar workflows and vastly improved performance.

This application will support:

- 🔐 Role-based authentication for secure user access
- 🧱 Drag-and-drop project builder with live preview and export features
- 💬 Community tools including comments, feedback threads, and publishing flows
- 📊 Dashboard for managing user-generated sites and assets

Additionally, Rakkucraft offers:

- 🛠️ A scalable and cost-efficient alternative to legacy WordPress infrastructure
- 🌏 Benefits for stakeholders across the ecosystem: users, web agencies, and modern developers
- 💰 A high-return marketplace for selling themes and plugins
- 📨 Development opportunities for contributors via user-submitted Rakkucraft projects

## 🔁 Environment Structure

Rakkucraft consists of:

- 🏠 **Rakkucraft**: Our core platform, built and maintained by the development team.  
  It provides community features, content editing tools, and manages deployment workflows.

- 🌐 **User Environment**: A semi-automatically generated site for each user.  
  These environments are built using infrastructure provided by Rakkucraft.  
  Users manage content and appearance, which are reflected via automated mechanisms.

Note: User Environments are not directly part of the application codebase—they are created by users using the tools and pipelines offered by Rakkucraft.

## ✨ Service Name Meaning

The name "Rakkucraft" combines the Japanese word "Raku" (楽), meaning "easy" or "relaxing," with "Craft," symbolizing creation and craftsmanship.

Together, Rakkucraft represents a platform that makes web creation both approachable and thoughtfully designed—merging ease of use with the power of modern development tools.

## 🎯 Mission

Rakkucraft empowers creators by combining the accessibility of WordPress-like workflows with the performance and scalability of modern technologies.  
Our mission is to provide an open, adaptable, and community-driven platform for building the next generation of websites—one that prioritizes flexibility, collaboration, and global inclusivity.

## 🌍 Why OSS?

We believe that open-source development fosters creativity, trust, and innovation.  
By making Rakkucraft open and participatory, we invite developers, designers, and creators from all backgrounds to collaborate, share insights, and shape a platform that serves real-world needs.

This approach also ensures that:

- 🌐 Global talent can contribute and learn together
- 🤝 Code and ideas evolve through peer review and shared ownership
- 🎁 Contributors may receive visibility, project opportunities, and income through the Rakkucraft ecosystem

## 🧪 How to Run Locally

```bash
pnpm install
pnpm dev
```

## 📄 License

MIT License
