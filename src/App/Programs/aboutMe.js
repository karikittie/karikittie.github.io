const bio = [
  "I'm a person of above-average height and below-average volleyball and basketball",
  "skills. I live in Portland, Oregon and it's where my heart resides as well. I've",
  "lived a few lives: musician, pastor, baker, barista, manager and atheist are a few",
  "of the identities I've applied to myself over the years. Currently, I'm making code",
  "for money and producing sarcasm in my free time. Working at Survey Monkey (which is",
  "pretty cool) and desperately trying to finish a degree in computer science."
];

const aboutMe = {
  helpText: 'prints some info about me',
  command: 'about',
  handler: async (_, { clearScreen, print }) => {
    clearScreen();
    print(bio);
  },
  hidden: false
};

export default aboutMe;
