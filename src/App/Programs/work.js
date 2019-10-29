const smAudience = [
"  _____                     _____         _           _____       _ _                 ",
"  |   __|_ _ ___ _ _ ___ _ _|     |___ ___| |_ ___ _ _|  _  |_ _ _| |_|___ ___ ___ ___ ",
"  |__   | | |  _| | | -_| | | | | | . |   | '_| -_| | |     | | | . | | -_|   |  _| -_|",
"  |_____|___|_|  \\_/|___|_  |_|_|_|___|_|_|_,_|___|_  |__|__|___|___|_|___|_|_|___|___|",
"                        |___|                     |___|                                ",
' ',
'  Survey Monkey - Audience: <a href="https://www.surveymonkey.com/collect/audience/preview/" target="_BLANK">Audience - preview page</a>',
'    -> I currently work here and have made much of what you see if you follow the link.'
];

const apptree = [
"    _____              ___________                      ",
"    /  _  \\ ______ _____\\__    ___/______   ____   ____  ",
"   /  /_\\  \\\\____ \\\\____ \\|    |  \\_  __ \\_/ __ \\_/ __ \\ ",
"  /    |    \\  |_> >  |_> >    |   |  | \\/\\  ___/\\  ___/ ",
"  \\____|__  /   __/|   __/|____|   |__|    \\___  >\\___  >",
"          \\/|__|   |__|                        \\/     \\/ ",
' ',
'  AppTree Software: <a href="https://www.apptreerevolution.com/" target="_BLANK">homepage</a>',
'    -> I made custom Java applications for our business partners'
]

const work = {
  helpText: 'shows some of my recent work',
  command: 'work',
  handler: async (_, { clearScreen, print }) => {
    clearScreen();
    print(smAudience);
    print(' ');
    print(apptree);
    print(' ');
    print();
  },
  hidden: false
};

export default work;
