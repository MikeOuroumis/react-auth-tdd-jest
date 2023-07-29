# Leveraging Test-Driven Development in React Application Development

This narrative explores the practical application of the test-driven development (TDD) methodology within a React project. The focus was on designing a workflow, implementing planned tests, and utilizing GitHub Actions for the automatic execution of tests.

## The TDD Workflow

The developed application consists of three distinct pages, each corresponding to a unique component. A crucial part of the workflow was writing tests for each component, ensuring a comprehensive understanding of the necessary requirements and establishing component reliability from the onset.

## The Development Process

Outlined below are the primary stages in the development process:

1. Creation of the GitHub repository.
2. Committing the initial push.
3. Setting up the development environment.
4. Configuring CI workflows for GitHub.
5. Initiation of React routing.
6. The development and successful execution of tests for several user stories, such as accessing the homepage and logging out.

## Guidelines for Project Execution

To interact with this project:

1. Use `git clone` to clone the repository to your local machine.
2. Navigate to the project directory with `cd react-auth-tdd-jest`.
3. Use `yarn install` to install dependencies.
4. The project can be run locally using `yarn start`.

## User Login

The project necessitates a user login. For the sake of the demo, please use the following credentials:

Username: tdd
Password: letmein

## Guidelines for Test Execution

With the project running locally, tests can be executed with `yarn test`. This will execute all tests written for the application.

## Major Packages Used

Below is a brief summary of the key packages used in this project:

- **Redux:** Utilized for state management across the application, providing a predictable state container that facilitated comprehension and efficient handling of state changes.
- **Jest:** Used as the main testing framework, Jest provided an intuitive API for writing tests, supported asynchronous testing, and incorporated a built-in mocking library.
- **Yarn:** Chosen over npm as the package manager, Yarn was instrumental in ensuring efficient dependency management, speedy installation, heightened performance, and robust security.
- **React Router:** Implemented for managing routing within the application, React Router enabled dynamic routing, simplifying the development of single-page applications with smooth navigation and eliminating the need for page refreshing.

The incorporation of TDD in the development of a React application provided a valuable learning experience and demonstrated the methodology's potential for future projects.
