const clearScreen = {
  helpText: 'clears the screen',
  command: 'clear',
  handler: async (_, { clearScreen }) => clearScreen(),
  hidden: false
};

export default clearScreen;
