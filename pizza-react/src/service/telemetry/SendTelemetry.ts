import { TelemetryEvent } from '../../types'

// const defaultUrl = "https://vortex-sandbox.data.microsoft.com/collect/v1"
const defaultUrl = "https://web.vortex.data.microsoft.com/collect/v1"
/*
$ curl https://vortex-sandbox.data.microsoft.com/collect/v1\
  -X POST -H "Content-Type: application/json" -d '{"x":"abc"}'
*/

export interface TelemetryConfig {
    telemetryUrl: string
}

export async function SendTelemetry(
    request: TelemetryEvent,
    config: TelemetryConfig)
    : Promise<void> {
    const relayUrl = config.telemetryUrl || defaultUrl
    const params: RequestInit = {
        credentials:"omit",
        method: 'POST',
        mode: 'cors',
        headers: {
            'content-type': 'text/plain;charset=UTF-8'
        },
        body: JSON.stringify(request.payload)
    }
    const reponse = await fetch(relayUrl, params)
    const result = await reponse.json()
    return result
}

/*

curl 'https://web.vortex.data.microsoft.com/collect/v1' \
-H 'Referer: https://support.xbox.com/en-US/browse/xbox-one' \
-H 'Origin: https://support.xbox.com' \
-H 'Content-Type: text/plain;charset=UTF-8'  \
--data-binary $'{"name":"Ms.Webi.MeControl.PartnerApiCall","appId":"JS:MeControl",}' \
--compressed


curl 'https://web.vortex.data.microsoft.com/collect/v1' \
-H 'Referer: https://support.xbox.com/en-US/browse/xbox-one' \
-H 'Origin: https://support.xbox.com' \
-H 'Content-Type: application/json'  \
--data-binary $'{"name":"Ms.Webi.MeControl.PartnerApiCall","appId":"JS:MeControl",}' \
--compressed

*/

/*

fetch("https://web.vortex.data.microsoft.com/collect/v1", {
    "credentials":"omit",
    "headers":{
        "content-type":"text/plain;charset=UTF-8"
    },
    "referrer":"https://support.xbox.com/en-US/browse/xbox-one",
    "referrerPolicy":"no-referrer-when-downgrade",
    "body":"{
        \"ver\":\"2.1\",
        \"name\":\"Ms.Webi.MeControl.PartnerApiCall\",
        \"time\":\"2018-12-12T23:27:04.227Z\",
        \"appId\":\"JS:MeControl\",
        \"appVer\":\"Web:9.18275.0\",
        \"cV\":\"8L0kRdvDhD82/cIq.0\",
        \"os\":\"Windows\",
        \"data\":{
            \"partner\":\"xboxcomuhf\",
            \"controlVersion\":\"9.18275.0\",
            \"methodName\":\"load\",
            \"parameters\":\"{
                \\\"containerId\\\":\\\"*string*\\\",
                \\\"enabled\\\":\\\"*boolean*\\\",
                \\\"headerHeight\\\":\\\"*number*\\\",
                \\\"debug\\\":\\\"*boolean*\\\",
                \\\"extensibleLinks\\\":{
                    \\\"0\\\":{
                        \\\"string\\\":\\\"*string*\\\",
                        \\\"url\\\":\\\"*string*\\\",
                        \\\"id\\\":\\\"*string*\\\"
                    },
                    \\\"1\\\":{
                        \\\"string\\\":\\\"*string*\\\",
                        \\\"url\\\":\\\"*string*\\\",
                        \\\"id\\\":\\\"*string*\\\"
                    },
                    \\\"2\\\":{
                        \\\"string\\\":\\\"*string*\\\",
                        \\\"url\\\":\\\"*string*\\\",
                        \\\"id\\\":\\\"*string*\\\"
                    },
                    \\\"3\\\":{
                        \\\"string\\\":\\\"*string*\\\",
                        \\\"url\\\":\\\"*string*\\\",
                        \\\"id\\\":\\\"*string*\\\"
                    },
                    \\\"4\\\":{
                        \\\"string\\\":\\\"*string*\\\",
                        \\\"url\\\":\\\"*string*\\\",
                        \\\"id\\\":\\\"*string*\\\"
                    },
                    \\\"5\\\":{
                        \\\"string\\\":\\\"*string*\\\",
                        \\\"url\\\":\\\"*string*\\\",
                        \\\"id\\\":\\\"*string*\\\"
                    }
                },
                \\\"userData\\\":{
                    \\\"idp\\\":\\\"msa\\\",
                    \\\"firstName\\\":\\\"*string*\\\",
                    \\\"lastName\\\":\\\"*string*\\\",
                    \\\"memberName\\\":\\\"*string*\\\",
                    \\\"cid\\\":\\\"*string*\\\",
                    \\\"authenticatedState\\\":\\\"1\\\",
                    \\\"nickName\\\":\\\"*string*\\\",
                    \\\"tileUrl\\\":\\\"*string*\\\",
                    \\\"accountTier\\\":\\\"*string*\\\"
                },
                \\\"rpData\\\":{
                    \\\"preferredIdp\\\":\\\"*string*\\\",
                    \\\"msaInfo\\\":{
                        \\\"signInUrl\\\":\\\"*string*\\\",
                        \\\"signOutUrl\\\":\\\"*string*\\\",
                        \\\"meUrl\\\":\\\"*string*\\\",
                        \\\"accountSettingsUrl\\\":\\\"*string*\\\"
                    },
                    \\\"aadInfo\\\":{
                        \\\"signOutUrl\\\":\\\"*string*\\\",
                        \\\"appId\\\":\\\"*string*\\\",
                        \\\"siteUrl\\\":\\\"*string*\\\",
                        \\\"blockMsaFed\\\":\\\"*boolean*\\\"
                    }
                },
                \\\"events\\\":{
                    \\\"onEventLog\\\":\\\"*function*\\\"
                },
                \\\"signInStr\\\":\\\"*string*\\\",
                \\\"signOutStr\\\":\\\"*string*\\\",
                \\\"market\\\":\\\"*string*\\\",
                \\\"urlBase\\\":\\\"*string*\\\",
                \\\"isINT\\\":\\\"*boolean*\\\",
                \\\"mobileBreakpoints\\\":{}
            }\"
        },
        \"ext\":{
            \"javascript\":{
                \"ver\":\"1.1\",
                \"libVer\":\"4.2.3\",
                \"domain\":\"support.xbox.com\",
                \"userConsent\":false
            },
            \"app\":{
                \"env\":\"Prod\"
            }
        }
    }
    \n
    {
        \"ver\":\"2.1\",
        \"name\":\"Ms.Webi.MeControl.PartnerApiCall\",
        \"time\":\"2018-12-12T23:27:04.228Z\",
        \"appId\":\"JS:MeControl\",
        \"appVer\":\"Web:9.18275.0\",
        \"cV\":\"8L0kRdvDhD82/cIq.0\",
        \"os\":\"Windows\",
        \"data\":{
            \"partner\":\"xboxcomuhf\",
            \"controlVersion\":\"9.18275.0\",
            \"methodName\":\"setMobileState\",
            \"parameters\":\"{
                \\\"0\\\":\\\"*number*\\\"
            }\"
        },
        \"ext\":{
            \"javascript\":{
                \"ver\":\"1.1\",
                \"libVer\":\"4.2.3\",
                \"domain\":\"support.xbox.com\",
                \"userConsent\":false
            },
            \"app\":{
                \"env\":\"Prod\"
            }
        }
    }
    \n
    {
        \"ver\":\"2.1\",
        \"name\":\"Ms.Webi.OutgoingRequest\",
        \"time\":\"2018-12-12T23:27:04.228Z\",
        \"appId\":\"JS:MeControl\",
        \"appVer\":\"Web:9.18275.0\",
        \"cV\":\"8L0kRdvDhD82/cIq.1\",
        \"os\":\"Windows\",
        \"data\":{
            \"baseType\":\"Ms.Qos.OutgoingServiceRequest\",
            \"pageName\":\"None\",
            \"impressionGuid\":\"320c0971-e23a-4cc2-a152-d7b1e7d00eb9\",
            \"market\":\"en-US\",
            \"customData\":\"{
                \\\"metaTags\\\":{
                    \\\"authtype\\\":\\\"msa\\\",
                    \\\"pgpart\\\":\\\"xboxcomuhf\\\"
                },
                \\\"config\\\":{
                    \\\"ver\\\":\\\"9.18275.0\\\",
                    \\\"mkt\\\":\\\"en-US\\\",
                    \\\"ptn\\\":\\\"xboxcomuhf\\\",
                    \\\"gfx\\\":\\\"https://mem.gfx.ms/me\\\",
                    \\\"dbg\\\":false,
                    \\\"aad\\\":false,
                    \\\"int\\\":false,
                    \\\"pxy\\\":false,
                    \\\"msTxt\\\":true,
                    \\\"rwd\\\":true,
                    \\\"telEvs\\\":\\\"PageAction, PageView, ContentUpdate, OutgoingRequest, ClientError, PartnerApiCall\\\",
                    \\\"remAcc\\\":true,
                    \\\"main\\\":\\\"meBoot\\\",
                    \\\"wreply\\\":null
                },
                \\\"url\\\":\\\"https://support.xbox.com/en-US/browse/xbox-one\\\"
            }\",
            \"baseData\":{
                \"operationName\":\"meBoot\",
                \"dependencyOperationName\":\"DownloadScript\",
                \"dependencyName\":\"MeControl\",
                \"latencyMs\":18.40000000083819,
                \"succeeded\":true,
                \"targetUri\":\"https://mem.gfx.ms/me/MeControl/9.18275.0/en-US/meBoot.min.js\"
            }
        },
        \"ext\":{
            \"javascript\":{
                \"ver\":\"1.1\",
                \"libVer\":\"4.2.3\",
                \"domain\":\"support.xbox.com\",
                \"userConsent\":false
            },
            \"app\":{
                \"env\":\"Prod\"
            }
        }
    }
    \n
    {
        \"ver\":\"2.1\",
        \"name\":\"Ms.Webi.OutgoingRequest\",
        \"time\":\"2018-12-12T23:27:04.229Z\",
        \"appId\":\"JS:MeControl\",
        \"appVer\":\"Web:9.18275.0\",
        \"cV\":\"8L0kRdvDhD82/cIq.2\",
        \"os\":\"Windows\",
        \"data\":{
            \"baseType\":\"Ms.Qos.OutgoingServiceRequest\",
            \"pageName\":\"None\",
            \"impressionGuid\":\"320c0971-e23a-4cc2-a152-d7b1e7d00eb9\",
            \"market\":\"en-US\",
            \"customData\":\"{
                \\\"metaTags\\\":{
                    \\\"authtype\\\":\\\"msa\\\",
                    \\\"pgpart\\\":\\\"xboxcomuhf\\\"
                },
                \\\"config\\\":{
                    \\\"ver\\\":\\\"9.18275.0\\\",
                    \\\"mkt\\\":\\\"en-US\\\",
                    \\\"ptn\\\":\\\"xboxcomuhf\\\",
                    \\\"gfx\\\":\\\"https://mem.gfx.ms/me\\\",
                    \\\"dbg\\\":false,
                    \\\"aad\\\":false,
                    \\\"int\\\":false,
                    \\\"pxy\\\":false,
                    \\\"msTxt\\\":true,
                    \\\"rwd\\\":true,
                    \\\"telEvs\\\":\\\"PageAction, PageView, ContentUpdate, OutgoingRequest, ClientError, PartnerApiCall\\\",
                    \\\"remAcc\\\":true,
                    \\\"main\\\":\\\"meBoot\\\",
                    \\\"wreply\\\":null
                },
                \\\"url\\\":\\\"https://support.xbox.com/en-US/browse/xbox-one\\\"
            }\",
            \"baseData\":{
                \"operationName\":\"meCore\",
                \"dependencyOperationName\":\"DownloadScript\",
                \"dependencyName\":\"MeControl\",
                \"latencyMs\":87.89999998407438,
                \"succeeded\":true,
                \"targetUri\":\"https://mem.gfx.ms/me/MeControl/9.18275.0/en-US/meCore.min.js\"
            }
        },
        \"ext\":{
            \"javascript\":{
                \"ver\":\"1.1\",
                \"libVer\":\"4.2.3\",
                \"domain\":\"support.xbox.com\",
                \"userConsent\":false
            },
            \"app\":{
                \"env\":\"Prod\"
            }
        }
    }
    \n
    {
        \"ver\":\"2.1\",
        \"name\":\"Ms.Webi.PageView\",
        \"time\":\"2018-12-12T23:27:04.259Z\",
        \"appId\":\"JS:MeControl\",
        \"appVer\":\"Web:9.18275.0\",
        \"cV\":\"8L0kRdvDhD82/cIq.2.0\",
        \"os\":\"Windows\",
        \"data\":{
            \"baseType\":\"Ms.Content.PageView\",
            \"cookieEnabled\":true,
            \"isJs\":true,
            \"isLoggedIn\":true,
            \"isManual\":true,
            \"baseData\":{
                \"ver\":\"1.1\",
                \"pageName\":\"Initial Collapsed\",
                \"impressionGuid\":\"320c0971-e23a-4cc2-a152-d7b1e7d00eb9\",
                \"market\":\"en-US\",
                \"pageTags\":\"{
                    \\\"metaTags\\\":{
                        \\\"authtype\\\":\\\"msa\\\",
                        \\\"pgpart\\\":\\\"xboxcomuhf\\\"
                    },
                    \\\"config\\\":{
                        \\\"ver\\\":\\\"9.18275.0\\\",
                        \\\"mkt\\\":\\\"en-US\\\",
                        \\\"ptn\\\":\\\"xboxcomuhf\\\",
                        \\\"gfx\\\":\\\"https://mem.gfx.ms/me\\\",
                        \\\"dbg\\\":false,
                        \\\"aad\\\":false,
                        \\\"int\\\":false,
                        \\\"pxy\\\":false,
                        \\\"msTxt\\\":true,
                        \\\"rwd\\\":true,
                        \\\"telEvs\\\":\\\"PageAction, PageView, ContentUpdate, OutgoingRequest, ClientError, PartnerApiCall\\\",
                        \\\"remAcc\\\":true,
                        \\\"main\\\":\\\"meBoot\\\",
                        \\\"wreply\\\":null
                    },
                    \\\"url\\\":\\\"https://support.xbox.com/en-US/browse/xbox-one\\\"
                }\",
                \"resHeight\":1080,
                \"resWidth\":1920
            }
        },
        \"ext\":{
            \"javascript\":{
                \"ver\":\"1.1\",
                \"libVer\":\"4.2.3\",
                \"domain\":\"support.xbox.com\",
                \"userConsent\":false
            },
            \"app\":{
                \"env\":\"Prod\"
            }
        }
    }",
    "method":"POST",
    "mode":"cors"
});

fetch(
    "https://web.vortex.data.microsoft.com/collect/v1",
 {
    "credentials":"omit",
    "headers":{
         "content-type":"text/plain;charset=UTF-8"
    },
    "referrer":"https://support.xbox.com/en-US/browse/xbox-one",
    "referrerPolicy":"no-referrer-when-downgrade",
    "body":"{\"ver\":\"2.1\",\"name\":\"Ms.Webi.MeControl.PartnerApiCall\",\"time\":\"2018-12-12T23:27:04.227Z\",\"appId\":\"JS:MeControl\",\"appVer\":\"Web:9.18275.0\",\"cV\":\"8L0kRdvDhD82/cIq.0\",\"os\":\"Windows\",\"data\":{\"partner\":\"xboxcomuhf\",\"controlVersion\":\"9.18275.0\",\"methodName\":\"load\",\"parameters\":\"{\\\"containerId\\\":\\\"*string*\\\",\\\"enabled\\\":\\\"*boolean*\\\",\\\"headerHeight\\\":\\\"*number*\\\",\\\"debug\\\":\\\"*boolean*\\\",\\\"extensibleLinks\\\":{\\\"0\\\":{\\\"string\\\":\\\"*string*\\\",\\\"url\\\":\\\"*string*\\\",\\\"id\\\":\\\"*string*\\\"},\\\"1\\\":{\\\"string\\\":\\\"*string*\\\",\\\"url\\\":\\\"*string*\\\",\\\"id\\\":\\\"*string*\\\"},\\\"2\\\":{\\\"string\\\":\\\"*string*\\\",\\\"url\\\":\\\"*string*\\\",\\\"id\\\":\\\"*string*\\\"},\\\"3\\\":{\\\"string\\\":\\\"*string*\\\",\\\"url\\\":\\\"*string*\\\",\\\"id\\\":\\\"*string*\\\"},\\\"4\\\":{\\\"string\\\":\\\"*string*\\\",\\\"url\\\":\\\"*string*\\\",\\\"id\\\":\\\"*string*\\\"},\\\"5\\\":{\\\"string\\\":\\\"*string*\\\",\\\"url\\\":\\\"*string*\\\",\\\"id\\\":\\\"*string*\\\"}},\\\"userData\\\":{\\\"idp\\\":\\\"msa\\\",\\\"firstName\\\":\\\"*string*\\\",\\\"lastName\\\":\\\"*string*\\\",\\\"memberName\\\":\\\"*string*\\\",\\\"cid\\\":\\\"*string*\\\",\\\"authenticatedState\\\":\\\"1\\\",\\\"nickName\\\":\\\"*string*\\\",\\\"tileUrl\\\":\\\"*string*\\\",\\\"accountTier\\\":\\\"*string*\\\"},\\\"rpData\\\":{\\\"preferredIdp\\\":\\\"*string*\\\",\\\"msaInfo\\\":{\\\"signInUrl\\\":\\\"*string*\\\",\\\"signOutUrl\\\":\\\"*string*\\\",\\\"meUrl\\\":\\\"*string*\\\",\\\"accountSettingsUrl\\\":\\\"*string*\\\"},\\\"aadInfo\\\":{\\\"signOutUrl\\\":\\\"*string*\\\",\\\"appId\\\":\\\"*string*\\\",\\\"siteUrl\\\":\\\"*string*\\\",\\\"blockMsaFed\\\":\\\"*boolean*\\\"}},\\\"events\\\":{\\\"onEventLog\\\":\\\"*function*\\\"},\\\"signInStr\\\":\\\"*string*\\\",\\\"signOutStr\\\":\\\"*string*\\\",\\\"market\\\":\\\"*string*\\\",\\\"urlBase\\\":\\\"*string*\\\",\\\"isINT\\\":\\\"*boolean*\\\",\\\"mobileBreakpoints\\\":{}}\"},\"ext\":{\"javascript\":{\"ver\":\"1.1\",\"libVer\":\"4.2.3\",\"domain\":\"support.xbox.com\",\"userConsent\":false},\"app\":{\"env\":\"Prod\"}}}\n{\"ver\":\"2.1\",\"name\":\"Ms.Webi.MeControl.PartnerApiCall\",\"time\":\"2018-12-12T23:27:04.228Z\",\"appId\":\"JS:MeControl\",\"appVer\":\"Web:9.18275.0\",\"cV\":\"8L0kRdvDhD82/cIq.0\",\"os\":\"Windows\",\"data\":{\"partner\":\"xboxcomuhf\",\"controlVersion\":\"9.18275.0\",\"methodName\":\"setMobileState\",\"parameters\":\"{\\\"0\\\":\\\"*number*\\\"}\"},\"ext\":{\"javascript\":{\"ver\":\"1.1\",\"libVer\":\"4.2.3\",\"domain\":\"support.xbox.com\",\"userConsent\":false},\"app\":{\"env\":\"Prod\"}}}\n{\"ver\":\"2.1\",\"name\":\"Ms.Webi.OutgoingRequest\",\"time\":\"2018-12-12T23:27:04.228Z\",\"appId\":\"JS:MeControl\",\"appVer\":\"Web:9.18275.0\",\"cV\":\"8L0kRdvDhD82/cIq.1\",\"os\":\"Windows\",\"data\":{\"baseType\":\"Ms.Qos.OutgoingServiceRequest\",\"pageName\":\"None\",\"impressionGuid\":\"320c0971-e23a-4cc2-a152-d7b1e7d00eb9\",\"market\":\"en-US\",\"customData\":\"{\\\"metaTags\\\":{\\\"authtype\\\":\\\"msa\\\",\\\"pgpart\\\":\\\"xboxcomuhf\\\"},\\\"config\\\":{\\\"ver\\\":\\\"9.18275.0\\\",\\\"mkt\\\":\\\"en-US\\\",\\\"ptn\\\":\\\"xboxcomuhf\\\",\\\"gfx\\\":\\\"https://mem.gfx.ms/me\\\",\\\"dbg\\\":false,\\\"aad\\\":false,\\\"int\\\":false,\\\"pxy\\\":false,\\\"msTxt\\\":true,\\\"rwd\\\":true,\\\"telEvs\\\":\\\"PageAction, PageView, ContentUpdate, OutgoingRequest, ClientError, PartnerApiCall\\\",\\\"remAcc\\\":true,\\\"main\\\":\\\"meBoot\\\",\\\"wreply\\\":null},\\\"url\\\":\\\"https://support.xbox.com/en-US/browse/xbox-one\\\"}\",\"baseData\":{\"operationName\":\"meBoot\",\"dependencyOperationName\":\"DownloadScript\",\"dependencyName\":\"MeControl\",\"latencyMs\":18.40000000083819,\"succeeded\":true,\"targetUri\":\"https://mem.gfx.ms/me/MeControl/9.18275.0/en-US/meBoot.min.js\"}},\"ext\":{\"javascript\":{\"ver\":\"1.1\",\"libVer\":\"4.2.3\",\"domain\":\"support.xbox.com\",\"userConsent\":false},\"app\":{\"env\":\"Prod\"}}}\n{\"ver\":\"2.1\",\"name\":\"Ms.Webi.OutgoingRequest\",\"time\":\"2018-12-12T23:27:04.229Z\",\"appId\":\"JS:MeControl\",\"appVer\":\"Web:9.18275.0\",\"cV\":\"8L0kRdvDhD82/cIq.2\",\"os\":\"Windows\",\"data\":{\"baseType\":\"Ms.Qos.OutgoingServiceRequest\",\"pageName\":\"None\",\"impressionGuid\":\"320c0971-e23a-4cc2-a152-d7b1e7d00eb9\",\"market\":\"en-US\",\"customData\":\"{\\\"metaTags\\\":{\\\"authtype\\\":\\\"msa\\\",\\\"pgpart\\\":\\\"xboxcomuhf\\\"},\\\"config\\\":{\\\"ver\\\":\\\"9.18275.0\\\",\\\"mkt\\\":\\\"en-US\\\",\\\"ptn\\\":\\\"xboxcomuhf\\\",\\\"gfx\\\":\\\"https://mem.gfx.ms/me\\\",\\\"dbg\\\":false,\\\"aad\\\":false,\\\"int\\\":false,\\\"pxy\\\":false,\\\"msTxt\\\":true,\\\"rwd\\\":true,\\\"telEvs\\\":\\\"PageAction, PageView, ContentUpdate, OutgoingRequest, ClientError, PartnerApiCall\\\",\\\"remAcc\\\":true,\\\"main\\\":\\\"meBoot\\\",\\\"wreply\\\":null},\\\"url\\\":\\\"https://support.xbox.com/en-US/browse/xbox-one\\\"}\",\"baseData\":{\"operationName\":\"meCore\",\"dependencyOperationName\":\"DownloadScript\",\"dependencyName\":\"MeControl\",\"latencyMs\":87.89999998407438,\"succeeded\":true,\"targetUri\":\"https://mem.gfx.ms/me/MeControl/9.18275.0/en-US/meCore.min.js\"}},\"ext\":{\"javascript\":{\"ver\":\"1.1\",\"libVer\":\"4.2.3\",\"domain\":\"support.xbox.com\",\"userConsent\":false},\"app\":{\"env\":\"Prod\"}}}\n{\"ver\":\"2.1\",\"name\":\"Ms.Webi.PageView\",\"time\":\"2018-12-12T23:27:04.259Z\",\"appId\":\"JS:MeControl\",\"appVer\":\"Web:9.18275.0\",\"cV\":\"8L0kRdvDhD82/cIq.2.0\",\"os\":\"Windows\",\"data\":{\"baseType\":\"Ms.Content.PageView\",\"cookieEnabled\":true,\"isJs\":true,\"isLoggedIn\":true,\"isManual\":true,\"baseData\":{\"ver\":\"1.1\",\"pageName\":\"Initial Collapsed\",\"impressionGuid\":\"320c0971-e23a-4cc2-a152-d7b1e7d00eb9\",\"market\":\"en-US\",\"pageTags\":\"{\\\"metaTags\\\":{\\\"authtype\\\":\\\"msa\\\",\\\"pgpart\\\":\\\"xboxcomuhf\\\"},\\\"config\\\":{\\\"ver\\\":\\\"9.18275.0\\\",\\\"mkt\\\":\\\"en-US\\\",\\\"ptn\\\":\\\"xboxcomuhf\\\",\\\"gfx\\\":\\\"https://mem.gfx.ms/me\\\",\\\"dbg\\\":false,\\\"aad\\\":false,\\\"int\\\":false,\\\"pxy\\\":false,\\\"msTxt\\\":true,\\\"rwd\\\":true,\\\"telEvs\\\":\\\"PageAction, PageView, ContentUpdate, OutgoingRequest, ClientError, PartnerApiCall\\\",\\\"remAcc\\\":true,\\\"main\\\":\\\"meBoot\\\",\\\"wreply\\\":null},\\\"url\\\":\\\"https://support.xbox.com/en-US/browse/xbox-one\\\"}\",\"resHeight\":1080,\"resWidth\":1920}},\"ext\":{\"javascript\":{\"ver\":\"1.1\",\"libVer\":\"4.2.3\",\"domain\":\"support.xbox.com\",\"userConsent\":false},\"app\":{\"env\":\"Prod\"}}}","method":"POST",
    
    "mode":"cors"}
    
    );

*/

/*

curl 'https://web.vortex.data.microsoft.com/collect/v1' 
-H 'Referer: https://support.xbox.com/en-US/browse/xbox-one' 
-H 'Origin: https://support.xbox.com' 
-H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36' 
-H 'Content-Type: text/plain;charset=UTF-8' 
--data-binary $'{
    "ver":"2.1",
    "name":"Ms.Webi.MeControl.PartnerApiCall",
    "time":"2018-12-12T23:27:04.227Z",
    "appId":"JS:MeControl",
    "appVer":"Web:9.18275.0",
    "cV":"8L0kRdvDhD82/cIq.0",
    "os":"Windows",
    "data":{
        "partner":"xboxcomuhf",
        "controlVersion":"9.18275.0",
        "methodName":"load",
        "parameters":"{
            \\"containerId\\":\\"*string*\\",
            \\"enabled\\":\\"*boolean*\\",
            \\"headerHeight\\":\\"*number*\\",
            \\"debug\\":\\"*boolean*\\",
            \\"extensibleLinks\\":{
                \\"0\\":{
                    \\"string\\":\\"*string*\\",
                    \\"url\\":\\"*string*\\",
                    \\"id\\":\\"*string*\\"
                },
                \\"1\\":{
                    \\"string\\":\\"*string*\\",
                    \\"url\\":\\"*string*\\",
                    \\"id\\":\\"*string*\\"
                },
                \\"2\\":{
                    \\"string\\":\\"*string*\\",
                    \\"url\\":\\"*string*\\",
                    \\"id\\":\\"*string*\\"
                },
                \\"3\\":{
                    \\"string\\":\\"*string*\\",
                    \\"url\\":\\"*string*\\",
                    \\"id\\":\\"*string*\\"
                },
                \\"4\\":{
                    \\"string\\":\\"*string*\\",
                    \\"url\\":\\"*string*\\",
                    \\"id\\":\\"*string*\\"
                },
                \\"5\\":{
                    \\"string\\":\\"*string*\\",
                    \\"url\\":\\"*string*\\",
                    \\"id\\":\\"*string*\\"
                }
            },
            \\"userData\\":{
                \\"idp\\":\\"msa\\",
                \\"firstName\\":\\"*string*\\",
                \\"lastName\\":\\"*string*\\",
                \\"memberName\\":\\"*string*\\",
                \\"cid\\":\\"*string*\\",
                \\"authenticatedState\\":\\"1\\",
                \\"nickName\\":\\"*string*\\",
                \\"tileUrl\\":\\"*string*\\",
                \\"accountTier\\":\\"*string*\\"
            },
            \\"rpData\\":{
                \\"preferredIdp\\":\\"*string*\\",
                \\"msaInfo\\":{
                    \\"signInUrl\\":\\"*string*\\",
                    \\"signOutUrl\\":\\"*string*\\",
                    \\"meUrl\\":\\"*string*\\",
                    \\"accountSettingsUrl\\":\\"*string*\\"
                },
                \\"aadInfo\\":{
                    \\"signOutUrl\\":\\"*string*\\",
                    \\"appId\\":\\"*string*\\",
                    \\"siteUrl\\":\\"*string*\\",
                    \\"blockMsaFed\\":\\"*boolean*\\"
                }
            },
            \\"events\\":{
                \\"onEventLog\\":\\"*function*\\"
            },
            \\"signInStr\\":\\"*string*\\",
            \\"signOutStr\\":\\"*string*\\",
            \\"market\\":\\"*string*\\",
            \\"urlBase\\":\\"*string*\\",
            \\"isINT\\":\\"*boolean*\\",
            \\"mobileBreakpoints\\":{}
        }"
    },
        "ext":{
            "javascript":{
                "ver":"1.1",
                "libVer":"4.2.3",
                "domain":"support.xbox.com",
                "userConsent":false},
                "app":{
                    "env":"Prod"
                }
            }
        }
        \n
        {
            "ver":"2.1",
            "name":"Ms.Webi.MeControl.PartnerApiCall",
            "time":"2018-12-12T23:27:04.228Z",
            "appId":"JS:MeControl",
            "appVer":"Web:9.18275.0",
            "cV":"8L0kRdvDhD82/cIq.0",
            "os":"Windows",
            "data":{
                "partner":"xboxcomuhf",
                "controlVersion":"9.18275.0",
                "methodName":"setMobileState",
                "parameters":"{
                    \\"0\\":\\"*number*\\"
                }"
            },
            "ext":{
                "javascript":{
                    "ver":"1.1",
                    "libVer":"4.2.3",
                    "domain":"support.xbox.com",
                    "userConsent":false
                },
                "app":{
                    "env":"Prod"
                }
            }
        }
        \n
        {
            "ver":"2.1",
            "name":"Ms.Webi.OutgoingRequest",
            "time":"2018-12-12T23:27:04.228Z",
            "appId":"JS:MeControl",
            "appVer":"Web:9.18275.0","cV":"8L0kRdvDhD82/cIq.1",
            "os":"Windows",
            "data":{
                "baseType":"Ms.Qos.OutgoingServiceRequest",
                "pageName":"None",
                "impressionGuid":"320c0971-e23a-4cc2-a152-d7b1e7d00eb9",
                "market":"en-US",
                "customData":"{
                    \\"metaTags\\":{
                        \\"authtype\\":\\"msa\\",
                        \\"pgpart\\":\\"xboxcomuhf\\"
                    },
                    \\"config\\":{
                        \\"ver\\":\\"9.18275.0\\",
                        \\"mkt\\":\\"en-US\\",
                        \\"ptn\\":\\"xboxcomuhf\\",
                        \\"gfx\\":\\"https://mem.gfx.ms/me\\",
                        \\"dbg\\":false,
                        \\"aad\\":false,
                        \\"int\\":false,
                        \\"pxy\\":false,
                        \\"msTxt\\":true,
                        \\"rwd\\":true,
                        \\"telEvs\\":\\"PageAction, PageView, ContentUpdate, OutgoingRequest, ClientError, PartnerApiCall\\",
                        \\"remAcc\\":true,
                        \\"main\\":\\"meBoot\\",
                        \\"wreply\\":null
                    },
                    \\"url\\":\\"https://support.xbox.com/en-US/browse/xbox-one\\"
                }"
                ,"baseData":{
                    "operationName":"meBoot",
                    "dependencyOperationName":"DownloadScript",
                    "dependencyName":"MeControl",
                    "latencyMs":18.40000000083819,
                    "succeeded":true,
                    "targetUri":"https://mem.gfx.ms/me/MeControl/9.18275.0/en-US/meBoot.min.js"
                }
            },
            "ext":{
                "javascript":{
                    "ver":"1.1",
                    "libVer":"4.2.3",
                    "domain":"support.xbox.com",
                    "userConsent":false
                },
                "app":{
                    "env":"Prod"
                }
            }
        }
        \n
        {
            "ver":"2.1",
            "name":"Ms.Webi.OutgoingRequest",
            "time":"2018-12-12T23:27:04.229Z",
            "appId":"JS:MeControl",
            "appVer":"Web:9.18275.0",
            "cV":"8L0kRdvDhD82/cIq.2",
            "os":"Windows",
            "data":{
                "baseType":"Ms.Qos.OutgoingServiceRequest",
                "pageName":"None",
                "impressionGuid":"320c0971-e23a-4cc2-a152-d7b1e7d00eb9",
                "market":"en-US",
                "customData":"{
                    \\"metaTags\\":{
                        \\"authtype\\":\\"msa\\",
                        \\"pgpart\\":\\"xboxcomuhf\\"
                    },
                    \\"config\\":{
                        \\"ver\\":\\"9.18275.0\\",
                        \\"mkt\\":\\"en-US\\",
                        \\"ptn\\":\\"xboxcomuhf\\",
                        \\"gfx\\":\\"https://mem.gfx.ms/me\\",
                        \\"dbg\\":false,
                        \\"aad\\":false,
                        \\"int\\":false,
                        \\"pxy\\":false,
                        \\"msTxt\\":true,
                        \\"rwd\\":true,
                        \\"telEvs\\":\\"PageAction, PageView, ContentUpdate, OutgoingRequest, ClientError, PartnerApiCall\\",
                        \\"remAcc\\":true,
                        \\"main\\":\\"meBoot\\",
                        \\"wreply\\":null
                    },
                    \\"url\\":\\"https://support.xbox.com/en-US/browse/xbox-one\\"
                }",
                "baseData":{
                    "operationName":"meCore",
                    "dependencyOperationName":"DownloadScript",
                    "dependencyName":"MeControl",
                    "latencyMs":87.89999998407438,
                    "succeeded":true,
                    "targetUri":"https://mem.gfx.ms/me/MeControl/9.18275.0/en-US/meCore.min.js"
                }
            },
            "ext":{
                "javascript":{
                    "ver":"1.1",
                    "libVer":"4.2.3",
                    "domain":"support.xbox.com",
                    "userConsent":false
                },
                "app":{
                    "env":"Prod"
                }
            }
        }
        \n
        {
            "ver":"2.1",
            "name":"Ms.Webi.PageView",
            "time":"2018-12-12T23:27:04.259Z",
            "appId":"JS:MeControl",
            "appVer":"Web:9.18275.0",
            "cV":"8L0kRdvDhD82/cIq.2.0",
            "os":"Windows",
            "data":{
                "baseType":"Ms.Content.PageView",
                "cookieEnabled":true,
                "isJs":true,
                "isLoggedIn":true,
                "isManual":true,
                "baseData":{
                    "ver":"1.1",
                    "pageName":"Initial Collapsed",
                    "impressionGuid":"320c0971-e23a-4cc2-a152-d7b1e7d00eb9",
                    "market":"en-US",
                    "pageTags":"{
                        \\"metaTags\\":{
                            \\"authtype\\":\\"msa\\",
                            \\"pgpart\\":\\"xboxcomuhf\\"
                        },
                        \\"config\\":{
                            \\"ver\\":\\"9.18275.0\\",
                            \\"mkt\\":\\"en-US\\",
                            \\"ptn\\":\\"xboxcomuhf\\",
                            \\"gfx\\":\\"https://mem.gfx.ms/me\\",
                            \\"dbg\\":false,
                            \\"aad\\":false,
                            \\"int\\":false,
                            \\"pxy\\":false,
                            \\"msTxt\\":true,
                            \\"rwd\\":true,
                            \\"telEvs\\":\\"PageAction, PageView, ContentUpdate, OutgoingRequest, ClientError, PartnerApiCall\\",
                            \\"remAcc\\":true,
                            \\"main\\":\\"meBoot\\",
                            \\"wreply\\":null
                        },
                        \\"url\\":\\"https://support.xbox.com/en-US/browse/xbox-one\\"
                    }",
                    "resHeight":1080,
                    "resWidth":1920
                }
            },
            "ext":{
                "javascript":{
                    "ver":"1.1",
                    "libVer":"4.2.3",
                    "domain":"support.xbox.com",
                    "userConsent":false
                },
        "app":{
            "env":"Prod"}
        }
    }' 

--compressed















*/

/*
curl 
GET https://web.vortex.data.microsoft.com/collect/v1/t.js
?ver=%272.1%27
&name=%27Ms.Webi.ContentUpdate%27
&time=%272018-12-06T00%3A04%3A55.879Z%27
&os=%27Android%27
&appId=%27JS%3AXboxWebSupport%27
&-ver=%271.0%27
&-impressionGuid=%279b4b7ca4-692e-4eed-8d2e-06d5e431ee1f%27
&-pageName=%27support%2F%27
&-uri=%27https%3A%2F%2Fsupport.xbox.com%2Fen-US%2F%27
&-market=%27en-us%27
&-pageTags=%27%7B%22browserGroup%22%3A%22Other.Chrome%22%2C%22metaTags%22%3A%7B%22ms.locale%22%
&3A%22%22%7D%7D%27
&-pageHeight=2618
&-vpHeight=616
&-vpWidth=360
&-actionType=%27R%27
&-behavior=0
&-vScrollOffset=107
&-hScrollOffset=0
&-contentVer=%272.0%27
&-content=%27%5B%7B%22containerName
&%22%3A%22Live%20Status%20Notification%22%2C%22cN%22%3A%22Xbox%20Live%20service%20is%20active.%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20See%20details%20%3E%22%2C%22cT%22%3A%22legacyOmniture%22%7D%2C%7B%22containerName%22%3A%22Xbox%20Support%3A%20What%20do%20you%20need%20help%20with%3F%22%2C%22cN%22%3A%22Xbox%20One%22%2C%22cT%22%3A%22legacyOmniture%22%7D%2C%7B%22containerName%22%3A%22Xbox%20Support%3A%20What%20do%20you%20need%20help%20with%3F%22%2C%22cN%22%3A%22Xbox%20360%22%2C%22cT%22%3A%22legacyOmniture%22%7D%2C%7B%22containerName%22%3A%22Xbox%20Support%3A%20What%20do%20you%20need%20help%20with%3F%22%2C%22cN%22%3A%22Xbox%20on%20Windows%2010%22%2C%22cT%22%3A%22legacyOmniture%22%7D%2C%7B%22containerName%22%3A%22Xbox%20Support%3A%20What%20do%20you%20need%20help%20with%3F%22%2C%22cN%22%3A%22Games%22%2C%22cT%22%3A%22legacyOmniture%22%7D%2C%7B%22containerName%22%3A%22Xbox%20Support%3A%20What%20do%20you%20need%20help%20with%3F%22%2C%22cN%22%3A%22Billing%22%2C%22cT%22%3A%22legacyOmniture%22%7D%2C%7B%22containerName%22%3A%22Xbox%20Support%3A%20What%20do%20you%20need%20help%20with%3F%22%2C%22cN%22%3A%22My%20account%22%2C%22cT%22%3A%22legacyOmniture%22%7D%5D%27
&*baseType=%27Ms.Content.ContentUpdate%27
&*title=%27Xbox%20One%20Support%20%7C%20Xbox%20360%20Support%20%7C%20Xbox%20Live%20and%20Billing%20Support%27
&*cookieEnabled=true
&*isJs=true
&*isDomComplete=false
&*isLoggedIn=false
&ext-app-env=%27prod%27
&ext-javascript-ver=%271.1%27
&ext-javascript-libVer=%274.2.11%27
&ext-javascript-domain=%27support.xbox.com%27
&ext-javascript-msfpc=%27GUID%3D5bc54c4c8b85436d94e8a8a194249e89%26HASH%3D5bc5%26LV%3D201810%26V%3D4%26LU%3D1539978905230%27
&ext-javascript-userConsent=true
&ext-javascript-anid=%27A%3D5BB77D588FF3D5B1EF748944FFFFFFFF%27
&$mscomCookies=false

HTTP/1.1
*/