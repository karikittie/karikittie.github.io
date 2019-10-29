const contact = {
  helpText: 'contact me (note: I will not respond)',
  command: 'contact',
  handler: async (_, { clearScreen, print }) => {
    clearScreen();
    const options = [
      'You can contact me in a number of ways...',
      ' ',
      'email --> <a href="mailto:karis4@pdx.edu">karis4@pdx.edu</a>',
      'linkedin --> <a href="https://www.linkedin.com/in/karis-sponsler-279aaab3/" target="_BLANK">goto LinkedIn</a>',
      ' '
    ];
    print(options);
  },
  hidden: false
};

export default contact;
