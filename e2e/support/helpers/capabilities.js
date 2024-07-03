module.exports = {
    loaderCapabilities() {

        const user = ''
        const acess_key = ''

        switch (process.env.AMBIENT) {
            case 'local-android':
                return {
                    appiumV2: true,
                    platform: process.env.PLATFORM,
                    desiredCapabilities: {
                        "app": process.env.APP ? process.env.APP : '',
                        platformName: process.env.PLATFORM,
                        platformVersion: process.env.VERSION,
                        udid: process.env.UDID,
                        deviceName: process.env.DEVICE,
                        appPackage: process.env.APPPACKAGE,
                        appActivity: process.env.APPACTIVITY,
                        automationName: "UiAutomator2",
                        unicodeKeyboard: true,
                        resetKeyboard: true,
                        autoGrantPermissions: true
                    }
                }
                break;
            case 'local-ios':
                return {
                    appiumV2: true,
                    platform: process.env.PLATFORM,
                    desiredCapabilities: {
                        // app: process.env.APP ? process.env.APP : '',
                        platformName: process.env.PLATFORM,
                        platformVersion: process.env.VERSION,
                        udid: process.env.UDID,
                        deviceName: process.env.DEVICE,
                        automationName: "XCuiTest",
                        newCommandTimeout: "100000",
                        adbExecTimeout: "100000",
                        locationServicesAuthorized: true,
                        locationServicesEnabled: true,
                        autoAcceptAlerts: true,
                        autoDismissAlerts: false,
                        bundleId: 'com.apple.Preferences',
                        "settings[snapshotMaxDepth]": "62",
                        connectHardwareKeyboard: true
                    }
                }
                break;
            case 'remote-android':
                return {
                    automationName: "Appium",
                    app: "",
                    host: "hub-cloud.browserstack.com",
                    port: 4444,
                    platform: process.env.PLATFORM,
                    user: user,
                    key: acess_key,
                    device: process.env.DEVICE,
                    platformVersion: process.env.VERSION,
                    desiredCapabilities: {
                        buildName: "",
                        projectName: "Sample",
                        unicodeKeyboard: true,
                        resetKeyboard: true,
                    }
                }
            case 'remote-ios':
                return {
                    automationName: "Appium",
                    bundleId: '',
                    host: "hub-cloud.browserstack.com",
                    port: 4444,
                    platform: process.env.PLATFORM,
                    user: user,
                    key: acess_key,
                    device: process.env.DEVICE,
                    platformVersion: process.env.VERSION,
                    desiredCapabilities: {
                        buildName: "",
                        projectName: "Sample",
                        locationServicesAuthorized: true,
                        locationServicesEnabled: true,
                        autoAcceptAlerts: true,
                        autoDismissAlerts: false,
                    }
                }
            default:
                throw new Error(`Ambiente "${process.env.AMBIENT}" é invalido`)
        }
    }
} 