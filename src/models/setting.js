const mongoose = require("mongoose");
const SettingSchema = mongoose.Schema({
    membershipApiPath: {
        type: String,
        required: true
    },
    membershipLids: {
        type: [Number],
        rquired: true
    },
    semrushDomainOverviewLimit: {
        type: Number,
        default: 50
    },
    semrushKeywordOverviewLimit: {
        type: Number,
        default: 50
    },
    semrushCookie: {
        type: String,
        default: ""
    },
    spyfuDomainOverviewLimit: {
        type: Number,
        default: 50
    },
    spyfuKeywordOverviewLimit: {
        type: Number,
        default: 50
    },
    spyfuCookie: {
        type: String,
        default: ""
    },
    seolyzeDomainOverviewLimit: {
        type: Number,
        default: 50
    },
    seolyzeKeywordOverviewLimit: {
        type: Number,
        default: 50
    },
    seolyzeCookie: {
        type: String,
        default: ""
    }, 
    sistrixDomainOverviewLimit: {
        type: Number,
        default: 50
    },
    sistrixKeywordOverviewLimit: {
        type: Number,
        default: 50
    },
    pipiadsAdvertisementOverviewLimit: {
        type: Number,
        default: 5
    },
    pipiadsProductOverviewLimit: {
        type: Number,
        default: 5
    },
    pipiadsAdvertiserOverviewLimit: {
        type: Number,
        default: 5
    },
    keywordkegKeywordOverviewLimit: {
        type: Number,
        default: 5
    },
    sistrixCookie: {
        type: String,
        default: ""
    },
    linkcentaurCookie: {
        type: String,
        default: ""
    },
    spamzillaCookie: {
        type: String,
        default: ""
    },
    seodityCookie: {
        type: String,
        default: ""
    },
    rytrmeCookie: {
        type: String,
        default: ""
    },
    wordaiCookie: {
        type: String,
        default: ""
    },
    keywordrevealerCookie: {
        type: String,
        default: ""
    },
    nichescraperCookie: {
        type: String,
        default: ""
    },
    pipiadsCookie: {
        type: String,
        default: ""
    },
    keywordkegCookie: {
        type: String,
        default: ""
    },
    paraphraserCookie: {
        type: String,
        default: ""
    },
    buzzsumoCookie: {
        type: String,
        default: ""
    },
    articleforgeCookie: {
        type: String,
        default: ""
    },
    bigspyCookie: {
        type: String,
        default: ""
    },
    colinkriCookie: {
        type: String,
        default: ""
    },
    conlinkriCampaignLimit: {
        type: Number,
        default: 5
    },
    dinorankCookie: {
        type: String,
        default: ""
    },
    dinorankProminenceLimit: {
        type: Number,
        default: 5
    },
    yourtextCookie: {
        type: String,
        default: ""
    }
});

const Setting = mongoose.model('setting', SettingSchema);

module.exports = Setting;