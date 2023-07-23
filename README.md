# GitFlow Workflow for DeliverIT

Our team will be using the GitFlow workflow for managing the development and maintenance of our application, DeliverIT as a solution to the problem of maintaining a software project in which several developers or teams are collaborating.

## Branching Strategy

Our repository will have two main branches with an infinite lifetime:

1. **Main**: This branch will contain the official release history, and each commit on this branch will represent a new production release. All the code in the master branch is deployable and is essentially production-ready.

2. **Develop**: This branch serves as an integration branch for features. It contains the complete history of the project, whereas main contains an abridged version. All the code in the develop branch is in a beta state, testable and runnable, but not necessarily production-ready.

In addition to these main branches, we will maintain various support branches:

- **Feature branches**: These branches are used to develop new features for the upcoming or a distant future release. When starting development of a feature, the target release in which this feature will be incorporated may well be unknown at that point. The essence of a feature branch is that it exists as long as the feature is in development, but will eventually be merged back into develop or discarded.

- **Bugfix branches**: These branches are used to prepare code fixes for the upcoming or a distant future release. They allow for minor bug fixes and preparing meta-data for a release (version number, build dates, etc.). By doing all of this work on a bugfix branch, the develop branch is cleared to receive features for the next big release.

- **Hotfix branches**: These branches are very much like bugfix branches in that they are also meant to prepare for a new production release, albeit unplanned. They arise from the necessity to act immediately upon an undesired state of a live production version. When a critical bug in a production version must be resolved immediately, a hotfix branch may be branched off from the corresponding tag on the master branch that marks the production version.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

test

# GitFlow Workflow for DeliverIT

Our team will be using the GitFlow workflow for managing the development and maintenance of our application, DeliverIT as a solution to the problem of maintaining a software project in which several developers or teams are collaborating.

## Branching Strategy

Our repository will have two main branches with an infinite lifetime:

1. **Main**: This branch will contain the official release history, and each commit on this branch will represent a new production release. All the code in the master branch is deployable and is essentially production-ready.

2. **Develop**: This branch serves as an integration branch for features. It contains the complete history of the project, whereas main contains an abridged version. All the code in the develop branch is in a beta state, testable and runnable, but not necessarily production-ready.

In addition to these main branches, we will maintain various support branches:

- **Feature branches**: These branches are used to develop new features for the upcoming or a distant future release. When starting development of a feature, the target release in which this feature will be incorporated may well be unknown at that point. The essence of a feature branch is that it exists as long as the feature is in development, but will eventually be merged back into develop or discarded.

- **Bugfix branches**: These branches are used to prepare code fixes for the upcoming or a distant future release. They allow for minor bug fixes and preparing meta-data for a release (version number, build dates, etc.). By doing all of this work on a bugfix branch, the develop branch is cleared to receive features for the next big release.

- **Hotfix branches**: These branches are very much like bugfix branches in that they are also meant to prepare for a new production release, albeit unplanned. They arise from the necessity to act immediately upon an undesired state of a live production version. When a critical bug in a production version must be resolved immediately, a hotfix branch may be branched off from the corresponding tag on the master branch that marks the production version.

# Deliverit Project Versioning Policy

The main purpose of this document is to outline when to increment each component of the project version number (MAJOR, MINOR, PATCH) based on the nature of the changes:

## MAJOR Version Increment:

The MAJOR version will increment when there are backward-incompatible changes to the project. Backward-incompatible changes are those that:
Remove or change existing API interfaces, making the previous versions incompatible with the new version.
Introduce breaking changes that might require modifications to the user's code to work with the new version.
The MAJOR version will be updated when there are significant architectural changes or major refactoring.
Examples of MAJOR version increments: 1.0.0 to 2.0.0, 3.1.0 to 4.0.0, etc.

## MINOR Version Increment:

The MINOR version will increment when there are new backward-compatible features, improvements, or enhancements added to the project.
The MINOR version will be updated when you there is new functionality without breaking existing APIs or requiring code modifications for compatibility.
Examples of MINOR version increments: 1.0.0 to 1.1.0, 2.3.0 to 2.4.0, etc.

## PATCH Version Increment:

The PATCH version will increment when there are backward-compatible bug fixes, security patches, or minor updates that do not introduce new features.
The PATCH version will be updated when issues or bugs in the existing functionality are resolved.
Examples of PATCH version increments: 1.0.0 to 1.0.1, 2.1.0 to 2.1.2, etc.

## Procedure

When there is a change in the project version number, the listed version in the package.json must be updated.

Before committing that change, tags should be added in GIT and pushed to the remote repository:
COMMANDS
git tag [tag name]
git push –tags -u origin [branch name]

If needed, git branches named “release” can be used in the development process.

-----------------------------------------------------------------------------------------------------------------

# Project Creation Process

## Front-End

The front-end part of the project named  **deliverit-front** uses NextJs as the framework, along with selected languages, libraries, and frameworks such as Typescript, React, and Tailwind. Configuration files necessary for the application to work with Docker have also been added.

Typescript, React, Tailwind.


To create the front-end project, follow these steps:


1. On your local computer, create a project folder called "deliverit-front" 

2. Install the NextJs framework using the following command:

	$ npx create-next-app@latest

3. As a result of the previous command, the following folder structure is automatically created for the Front-End:

![Alt text](public/images/image-18.png)


4. Manually create the "Components" and "utils" folders in the root, and within each folder, add an "index.tsx" file.

5. Manually create the "styles" folder in the root and add a "globals.css" file within it:

![Alt text](public/images/image-19.png)


6. Complete the content of the "tsconfig.json" file.

7. Create the "services," "hooks," "redux," "adapters," and "interceptors" folders in the root (the last one for 
   intercepting axios requests), and within each folder, create an "index.ts" file.

8. For the configuration of the ".eslintrc.json" file, adopt the recommended settings from the project's 
   instructions, available at the following link:

     https://github.com/Faridmurzone/linters-and-config  


9. Manually create the "Dockerfile" and define its content as follows:

![Alt text](public/images/image-20.png)


10. Manually create the "docker-compose.yml" file and define its content as follows:

![Alt text](public/images/image-21.png)


11. Upload the project to the empty repository previously created on Github using the following command:

	$ git remote add origin https://github.com/FacundoInza/deliverit-front.git

    The result should look like this:

![Alt text](public/images/image-22.png)


Our team performed various tests to ensure that the "deliverit-front" repository is functioning and ready to start developing functionalities for the next sprint.