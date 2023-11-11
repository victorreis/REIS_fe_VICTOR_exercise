# Changes

[Back to main README](./README.md)

1. Improve project config files, rules etc
    1. `.czrc` from commitizen to ensure following conventional-commits
    1. `.editorconfig` for IDE compatibility
    1. `.eslintrc.js`: improved by adding more plugins, extensions so making it more strict and complete
    1. `.lintstagedrc` for automatically linting files according to their file extensions
    1. `.npmrc` for ensuring node versions
    1. `.prettierrc` improved for standardizing the formatting
    1. `.stylelintrc` for linting style files
    1. `babel.config.js` for sintax convertion
    1. `jest.config.js` for more detailed test configurations
    1. `tsconfig.json` improved for stricter rules
    1. changed from CRA to vite for better performance
    1. `husky` for creating pre-commit for checking tests, linting, formating and testing and for the commitizen
    1. `.vscode/settings.json` and `.vscode/extensions.json` for ensuring the project will use the same basic settings and extensions

1. `App`
    1. Extracted `router` for another folder to follow SRP
    1. Use `<GlobalStyle>` to standardize styles globally
    1. Use `<PageContainer>` to have a cool scrollbar

1. Test configs
    1. delete `setupTests` and start using of `src/configs/tests/GlobalSetup.config.tsx`


1. Components
    1. Turn `GlobalComponents` into regular components to separate responsibilities
    1. Extract `useNavigate` and `useLocation` from the non-page components, to make them presentational (less coupling)
    1. Refactor all the component types, handle functions (like handleClick), booleans etc for better readability
    1. Create a new component `TextInput` for separaring responsibilities and for better looking
    1. Create a new component `Search` that uses `TextInput` to encapsulate the filtering logic


1. Hooks
    1. create the useSearch hook to share the text-searching functionally between pages

1. Types and Models
    1. Extract types and create models for them: `Column`, `Team`, `Item` and `User`
    1. Better organize types for the pages, components, utilities etc

1. Pages
    1. `UserOverview` now is able to get data through `useLocation` but also for data fetching in case of directly accessing a user link. Also added the loading state to it.
    1. `TeamOverview`: code reorganized, mapper functions extracted to services, bring non-presentational logic from the components to here. Add the search field and use the `useSearch` hook.
    1. `Teams` code reorganized .....
