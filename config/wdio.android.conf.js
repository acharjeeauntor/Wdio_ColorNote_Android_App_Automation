import path from 'path'
import {config} from './wdio.shared.conf'

// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
  './src/test/NotesFunctionality*.js',
  //'./src/test/ChecklistFunctionality*.js',
];

// config.suites={
//   login: [

// ]
// }


//
// ============
// Capabilities
// ============
config.capabilities = [
    {
        platformName:"Android",
        "appium:platformVersion": "6.0.1",
        "appium:deviceName":"546b6902",
        "appium:automationName":"UIAutomator2",
        "appium:app":path.join(process.cwd(),"./app/ColorNote+Notepad.apk"),
        "appium:autoGrantPermissions":true
    }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services=['appium'];

exports.config = config;