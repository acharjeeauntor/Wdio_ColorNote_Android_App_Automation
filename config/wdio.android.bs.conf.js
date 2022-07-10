import 'dotenv/config'
import {config} from './wdio.shared.conf'

config.user=process.env.BROWSERSTACK_USER
config.key=process.env.BROWSERSTACK_KEY

//
// ============
// Specs
// ============
config.specs = [
  './test/**/NotesFunctionality*.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
    {
        platformName:"Android",
        "appium:platformVersion": "8.0",
        "appium:deviceName":"Samsung Galaxy S9",
        "appium:automationName":"UIAutomator2",
        // "appium:app":path.join(process.cwd(),"./app/android/ApiDemos-debug.apk")
        "appium:app":"bs://840368d7255778a423468588d13e852c6370fbfe",
        "appium:autoGrantPermissions":true
    }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services=['browserstack'];

exports.config = config;