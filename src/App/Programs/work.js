const smAudience = [
"  _____                     _____         _           _____       _ _                 ",
"  |   __|_ _ ___ _ _ ___ _ _|     |___ ___| |_ ___ _ _|  _  |_ _ _| |_|___ ___ ___ ___ ",
"  |__   | | |  _| | | -_| | | | | | . |   | '_| -_| | |     | | | . | | -_|   |  _| -_|",
"  |_____|___|_|  \\_/|___|_  |_|_|_|___|_|_|_,_|___|_  |__|__|___|___|_|___|_|_|___|___|",
"                        |___|                     |___|                                ",
'  Survey Monkey - Audience: <a href="#">https://www.surveymonkey.com/collect/audience/preview/</a>'
];

const work = {
  helpText: 'shows some of my recent work',
  command: 'work',
  handler: async (_, { clearScreen, print }) => {
    clearScreen();
    print(smAudience);
    print(' ');
    print();
  },
  hidden: false
};

export default work;
