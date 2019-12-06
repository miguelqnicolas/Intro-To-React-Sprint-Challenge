# Questions

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React is a user interface library. It allows you to update the state without refreshing the page and only updates the specific component that is changing.

2. What does it mean to think in React?

    It means to think about how you are going to structure the components of a page. In React, you usually want components to have only one purpose and you want them to be reusable.

3. Describe state.

    State refers to the current state of a variable. It can be changed by the set state function.

4. Describe props.

    Props are passed from the parent to child components and allows the child to use what is passed through.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

    A side effect is something that happens as a result of state or prop change. The hook useEffect() can watch for state or prop changes by including them in the array dependency. If left empty, it will only run once everytime the page is loaded.
