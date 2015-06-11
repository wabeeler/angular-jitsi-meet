var angular = require('angular');

//Mock objects that jitsi-meet xmpp module depends on
config = {
    hosts: {}
};
Strophe = {};
APP = {
    UI: {
        checkForNickNameAndJoin: function() {}
    }
};

jm = require('angular-jitsi-meet');

angular
    .module('app', [jm.name])
    .controller('AppCtrl', AppCtrl);

angular
    .module('app2', [jm.xmpp.name, jm.desktopsharing.name, jm.RTC.name, jm.Settings.name])
    .controller('AppCtrl', AppCtrl);

AppCtrl.$inject = ['xmpp', 'desktopsharing', 'RTC', 'Settings'];

function AppCtrl(XMPP, desktopSharingService, RTC, Settings) {
    app = this;
    app.XMPP = XMPP;
    app.isConnected = (XMPP.getConnection() != null && XMPP.getConnection().connected);

    APP.XMPP = XMPP;
    APP.desktopsharing = desktopSharingService;
    APP.Settings = Settings
    APP.RTC = RTC
}

module.exports = APP;