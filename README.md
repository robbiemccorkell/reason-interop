# React ReasonML Javascript Interop

Basic implementation of a Hacker News client.

## Running JS application

### Install
```
yarn
```
### Run
First start the Bucklescript compiler
```
yarn start
```

Then in another tab, run the javascript bundler
```
yarn webpack
```

Then simply open `src/index.html` in your browser.


### Test
To run the tests any reason files must first be compiled to javascript:
```
yarn build
yarn test
```

### Further Reading

Documentation:
- [ReasonML documentation](https://reasonml.github.io/)
- [Bucklescript documentation](https://bucklescript.github.io)

Projects:
- Generate a bucklescript react project: `bsb -init my-react-app -theme react`
- Generate a reason scripts app: `yarn create react-app my-app -- --scripts-version reason-scripts`
- Reason React [example project](https://github.com/reasonml-community/reason-react-example)
- Full ReasonML [hacker news client](https://github.com/reasonml-community/reason-react-hacker-news)
- [ReasonML React Native app](https://github.com/FormidableLabs/seattlejsconf-app)
