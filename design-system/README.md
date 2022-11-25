# Design system

This directory could be shipped as a separate package, that's why we extract it out of the `src`. But what's there?

In our case, it may combine several things:

- MUI theme setup;
- library of non-native components widely used throughout Omni apps;
- Storybook representing all the elements and their combination, giving us _the feel_ of the project, _examples_ on how to use them and _a great playground_ to test it (or just try it).

## Setup

**If you're a dev who wants to launch it locally**, you'll need to clone the repo and install all the dependencies, using `design-system` as you working directory.

The project is built with vite, but dev vite server doesn't give you anything here. Instead, run `yarn storybook` to see the stories created for the design system.

> The first launch may take some time, but after that it'll be in a flash

Voilà! The storybook server is running, and you may explore what's been built.

## Explore the stories

You don't have to run the storybook locally. You may find the published version [here](https://63808dbddcc903dc6453d28c-astsfzltvv.chromatic.com/)

In the left menu, you may see _Atoms_, _Molecules_, _Organisms_, _Templates_ and _Pages_. For a deeper explanation, you may refer to the [original source of Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/). In general,

- atoms are the smallest pieces of UI that can't be destructured (to be fair, they may, but it makes no sense, like destructuring a word into separate letters);
- molecules are some collections of atoms that are not functional or meaningful on their own, but may provide some common patterns;
- organisms are collections of atoms, molecules and other organisms that may present complete yet reusable pieces of UI;
- templates are combinations of everything that was listed before **in a form of a full app page** with some mock data (we display _where_ content will be and _in what shape_, but we don't care about the content itself);
- pages are templates filled with some actual content, to provide better feeling of what a project could be in the wilds.

I want to emphasize that these categories relate only to design, and they don't have to be reflected in project file structure or something along those lines.

There's one specific story for buttons that shows how we could organize our stories to display [all the variations of a button](https://63808dbddcc903dc6453d28c-astsfzltvv.chromatic.com/?path=/docs/atoms-button-demo--button). It doesn't have all the variants set up properly, it's rather a demonstration of the depth we could achieve in terms of variations design.

All the other stories describe the elements actually used to build the screens you may see in the [demo app](../README.md).

One more emphasis I want to make is that most of the components are provided by MUI, and all the changes are made to the theme rather than to a custom component that just _styles things_.

I'll be glad to add any additional description you feel is lacking, so contact me if you have any important ideas. But don't forget that it's just a demo of what _could_ be done, and if we accept this proposal, we'll iterate through all the stuff again to build the best system.
