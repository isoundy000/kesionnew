import request from"../api/plv-request";import{URL}from"../utils/config";const{mainHost:mainHost}=URL,historyUrl=`${mainHost}/live/v3/channel/chat/get-history-contents`,removeHistoryUrl=`${mainHost}/live/v3/channel/chat/remove-content`,questionHistoryUrl=`${mainHost}/live/v3/channel/chat/get-question-contents`,getCurrentSign=`${mainHost}/live/v3/channel/chat/get-checkin`,getCheckinList=`${mainHost}/live/v3/channel/chat/get-checkin-list`,userUrl=`${mainHost}/live/v3/channel/chat/get-user-list`,bannedListUrl=`${mainHost}/live/v3/channel/chat/get-banned-list`,microphoneStatusUrl=`${mainHost}/live/v3/channel/chat/get-microphone-status`,getIsKicked=`${mainHost}/live/v3/channel/chat/is-kicked`;export default{getIsKicked:(e,t)=>request(getIsKicked,{qs:{roomId:e,userId:t},method:"POST"}),setNickname:(e,t)=>request(`${mainHost}/${e}/set-nickname`,{body:{nickname:t}}),getOnlineUserList:e=>request(userUrl,{body:{channelId:e,page:1,pageSize:100,hide:0}}),getHistoryMessage:(e,t,n)=>request(historyUrl,{body:{channelId:e.roomName,start:t,end:t+n,hideIp:0,fullMessage:1}}),getQuestionHistoryMessage:(e,t=0,n=20)=>request(questionHistoryUrl,{body:{channelId:e,start:t,end:t+n}}),getCurrentSignRecord:e=>request(getCurrentSign,{body:{channelId:e.channelId,checkinId:e.checkinId}}),getHistorySignRecord:e=>request(getCheckinList,{body:{channelId:e.channelId,startDate:e.startIndate,endDate:e.endIndate}}),getBannedList:e=>request(bannedListUrl,{body:{channelId:e,type:"ip"}}),removeHistoryUrl:(e,t)=>request(removeHistoryUrl,{body:{channelId:t.roomName,id:e}}),checkCurrentStatus:e=>request(microphoneStatusUrl,{body:{channelId:e}})};