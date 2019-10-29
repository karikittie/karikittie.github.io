const viewSource = {
  helpText: 'goto source code for this project',
  command: 'view-source',
  handler: async () => {
    window.location.href = 'https://github.com/karikittie/karikittie.github.io/tree/develop';
  },
  hidden: false
};

export default viewSource;
