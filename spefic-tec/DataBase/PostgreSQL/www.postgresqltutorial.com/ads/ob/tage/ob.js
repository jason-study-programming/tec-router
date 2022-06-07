function removejscssfile(filename, filetype){
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none"; //determine element type to create nodelist from
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none"; //determine corresponding attribute to test for
    var allsuspects=document.getElementsByTagName(targetelement);
    for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
    if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!==null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
        allsuspects[i].parentNode.removeChild(allsuspects[i]); //remove element by calling parentNode.removeChild()
    }
}
removejscssfile("https://securepubads.g.doubleclick.net/tag/js/gpt.js", "js");
removejscssfile("https://www.googletagservices.com/tag/js/gpt.js", "js");
var script = document.createElement('script');
script.src = "https://www.googletagservices.com/tag/js/gpt.js";
var scriptload_=true;
script.onload = function () {
    //do stuff with the script
    scriptload_=true;
};
document.head.appendChild(script);
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var gptAdSlots = []; 
var REFRESH_KEY = 'refresh';
var REFRESH_VALUE = 'true';
var tracking=false;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
       
        REFRESH_VALUE="false";
    } else {
       
        REFRESH_VALUE="true";
    }
});
var default_IR_Tag="default";
var Slot_default={"adsSlot_970x90":"/21722279357/970x90_OB_Tage" ,
				"adsSlot_970x90_size":[[250, 250], [336, 280], 'fluid', [970, 90], [300, 250], [728, 90]] , 

				"adsSlot_970x90atf":"/21722279357/970x90_ATF_OB_Tage" , 
				"adsSlot_970x90atf_size":"[[728, 90], [970, 90], [320, 100]]" ,

				"adsSlot_970x250":"/21722279357/970x250_OB_Tage" , 
				"adsSlot_970x250_size":[[300, 250], [336, 280], [728, 90], [250, 250], 'fluid', [970, 250], [970, 90]] ,

				"adsSlot_300x600":"/21722279357/300x600_OB_Tage" , 
				"adsSlot_300x600_size":[[300, 250], [336, 280], 'fluid', [250, 250], [300, 600]] ,

				"adsSlot_336x280":"/21722279357/336x280_OB_Tage" , 
				"adsSlot_336x280_size":[[300, 250], 'fluid', [336, 280], [250, 250]] ,

				"adsSlot_300x250":"/21722279357/300x250_OB_Tage" , 
				"adsSlot_300x250_size":[[250, 250], [300, 250], 'fluid'] ,

				"adsSlot_160x600":"/21722279357/160x600_OB_Tage" , 
				"adsSlot_160x600_size":[[336, 280], [160, 600], [300, 250]] ,

				"adsSlot_120x600":"/21722279357/120x600_OB_Tage" , 
				"adsSlot_120x600_size":[[336, 280], [120, 600], [300, 250]] ,

				"adsSlot_750x300":"/21722279357/750x300_OB_Tage" , 
				"adsSlot_750x300_size":[[300, 250], [336, 280], 'fluid', [750, 300], [250, 250]] ,

				"adsSlot_700x300":"/21722279357/700x300_OB_Tage" , 
				"adsSlot_700x300_size":[[300, 250], 'fluid', [250, 250], [336, 280], [700, 300]] ,

				"adsSlot_728x90":"/21722279357/728x90_OB_Tage" , 
				"adsSlot_728x90_size":[[250, 250], [336, 280], [300, 250], [728, 90], 'fluid'],

				"adsSlot_728x90atf":"/21722279357/728x90_ATF_OB_Tage" , 
				"adsSlot_728x90atf_size":[[320, 100], [728, 90]] ,

				"adsSlot_650x300":"/21722279357/650x300_OB_Tage" , 
				"adsSlot_650x300_size":[[250, 250], [336, 280], 'fluid', [650, 300], [300, 250]] ,

				"adsSlot_320x50":"/21722279357/320x50_OB_Tage" ,
				"adsSlot_320x50_size":[[320, 50], [300, 50]] ,

				"adsSlot_320x100":"/21722279357/320x100_OB_Tage" ,
				"adsSlot_320x100_size":[[250, 100], [300, 50], [320, 100], [320, 50], 'fluid', [300, 100]] ,

				"adsSlot_336x280atf":"/21722279357/336x280_ATF_OB_Tage" ,
				"adsSlot_336x280atf_size":[[336, 280], [320, 100]] ,

				"adsSlot_s120x600":"/21722279357/120x600_Sticky_OB_Tage" , 
				"adsSlot_s120x600_size":[[120, 600], [160, 600], [728, 90], [320, 100], [300, 50]] ,

				"adsSlot_rs120x600":"/21722279357/120x600_RH_Sticky_OB_Tage" , 
				"adsSlot_rs120x600_size":[[120, 600], [160, 600], [728, 90], [320, 100], [300, 50]],

				"adsSlot_s160x600":"/21722279357/160x600_Sticky_OB_Tage" , 
				"adsSlot_s160x600_size":[[160, 600], [728, 90], [320, 100], [300, 50]] ,

				"adsSlot_s970x90":"/21722279357/970x90_Sticky_OB_Tage" ,
				"adsSlot_s970x90_size":[[320, 50], [300, 50], [970, 90], [320, 100], [300, 100], 'fluid', [728, 90]] ,

				"adsSlot_s320x100":"/21722279357/320x100_Sticky_OB_Tage" ,
				"adsSlot_s320x100_size":[[250, 100], [300, 100], [320, 50], [300, 50], [320, 100]] ,

				"adsSlot_1200x90atf":"/21722279357/1200x90_ATF_OB_Tage" ,
				"adsSlot_1200x90atf_size":[[970, 90], [1200, 90], [728, 90], [320, 100]] ,

				"adsSlot_1200x90":"/21722279357/1200x90_OB_Tage" ,
				"adsSlot_1200x90_size":[[300, 250], 'fluid', [970, 90], [1200, 90], [250, 250], [336, 280], [728, 90]],

				"adsSlot_1200x250":"/21722279357/1200x250_OB_Tage" ,
				"adsSlot_1200x250_size":[[750, 250], [728, 90], [970, 90], [1200, 90], [300, 250], [1200, 250], 'fluid', [250, 250], [336, 280], [970, 250]]
			};
var default_All_Slot={ "default": Slot_default }; 
var SECONDS_TO_WAIT_AFTER_VIEWABILITY = 40;
var increaserevWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var StopClick1="20s";
var StopClick2="30s";
var StopClick3="40s";
var StopClick4="3m";
var BlockIpClick2="20s";
var BlockIpClick3="30s";
var BlockIpClick5="3m";
var BlockIpClick7="5m";
var BlockIpClick9="10m";
var BlockIpClick10="60m";
var BlockIpCookieTime="10m";
var CookieInterval="10m";
var stopadsclick='0';
var adsrefresh=false;
var adsrefreshtime=0;
var BlockAds=false;
var myConfObj = {
  iframeMouseOver : false,
  iframeMainClass : false
};
var Responsive='data-full-width-responsive="true"';
var DefaultCss='style="position:relative; text-align:center; margin:5px 0px 5px 0px;"';
var DefaultAdsCss='style="display:inline-block;min-width:200px;max-width:420px;width:100%;height:280px" ';
var DomainName = window.location.hostname;
DomainName = DomainName.replace("www.", "");
var SrcDomain="https://secureads.increaserev.com";
// var SrcDomain="http://dev.increaserev.com/statsmin3";
var irviewport="true";
var irviewportReferesh=false;
var _970x90=0;
var _970x250=0;
var _728x90=0;
var _750x300=0;
var _700x300=0;
var _650x300=0;
var _600x300=0;
var _300x250=0;
var _336x280=0;
var _120x600=0;
var _120x6002=0;
var _160x600=0;
var _300x600=0;
var _s120x600=0;
var _s120x6002=0;
var _rs120x600=0;
var _ms320x100=0;
var _s970x90=0;
var _s970x902=0;
var _320x100=0;
var _336x280atf=0;
var _970x90atf=0;
var _infeed=0;
var default_refreshAdsCode=false;var default_IRDefaultAds_=true;var _ir__IpAddress;
_ir__GetIpAddress();
function _ir__GetIpAddress(AllRun=true){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var dataArray = xhttp.responseText.split("\n");
var strIP = dataArray[2];
var strIPResult = strIP.replace("ip=", "");
_ir__IpAddress=strIPResult;
if(AllRun){
var incRevBlockIp=readCookie("incRevBlockIp");
if(incRevBlockIp!=_ir__IpAddress){
_ir__SendIpAddress(strIPResult);
} }else{ 
return strIPResult; } } };
xhttp.open("GET", "https://www.cloudflare.com/cdn-cgi/trace?format=json", true);
xhttp.send(); }
var incRevBlockAll = readCookie("IRcookieTime");
if(!incRevBlockAll){
GetCookieTime();
}else{
var obj = JSON.parse(incRevBlockAll);
StopClick1=obj.stopclick1;
StopClick2=obj.stopclick2;
StopClick3=obj.stopclick3;
StopClick4=obj.stopclick4;
BlockIpClick2=obj.blockipclick2;
BlockIpClick3=obj.blockipclick3;
BlockIpClick5=obj.blockipclick5;
BlockIpClick7=obj.blockipclick7;
BlockIpClick9=obj.blockipclick9;
BlockIpClick10=obj.blockipclick10;
CookieInterval=obj.cookiesinterval;
irviewport=obj.viewport;
BlockIpCookieTime=obj.blockcookies;
stopadsclick=obj.stopadsclick;
adsrefresh=obj.adsrefresh;
adsrefreshtime=obj.adsrefreshtime;
var AdsEvent_='';
if(parseInt(stopadsclick)>0){
AdsEvent_=default_IRpointerEvents();
DefaultAdsCss='style="display:inline-block;min-width:200px;max-width:420px;width:100%;height:280px;'+AdsEvent_+'" '; }}
function GetCookieTime(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var Data = xhttp.responseText;
Data = Data.toLowerCase();
var obj = JSON.parse(Data);
StopClick1=obj.stopclick1;
StopClick2=obj.stopclick2;
StopClick3=obj.stopclick3;
StopClick4=obj.stopclick4;
BlockIpClick2=obj.blockipclick2;
BlockIpClick3=obj.blockipclick3;
BlockIpClick5=obj.blockipclick5;
BlockIpClick7=obj.blockipclick7;
BlockIpClick9=obj.blockipclick9;
BlockIpClick10=obj.blockipclick10;
CookieInterval=obj.cookiesinterval;
irviewport=obj.viewport;
BlockIpCookieTime=obj.blockcookies;
stopadsclick=obj.stopadsclick;
adsrefresh=obj.adsrefresh;
adsrefreshtime=obj.adsrefreshtime;
var AdsEvent_='';
if(parseInt(stopadsclick)>0){
AdsEvent_=default_IRpointerEvents();
DefaultAdsCss='style="display:inline-block;min-width:200px;max-width:420px;width:100%;height:280px;'+AdsEvent_+'" ';}
createCookie("IRcookieTime",Data,CookieInterval);} };
xhttp.open("GET", SrcDomain+"/InvalidAds/getcookietime.php?domain="+DomainName, true);
xhttp.send(); }
if(default_IRDefaultAds_){default_mcmIRAds_All();}
function _ir__SendIpAddress(ipAddress){
var incRevIpCheck=readCookie("incRevIpCheck");
if(incRevIpCheck){BlockAds=false;
}else{
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var Data = xhttp.responseText;
Data = Data.toLowerCase();
var obj = JSON.parse(Data);
if(obj.status=="block"){
BlockAds=true;
BlockIpCookieTime=parseInt(BlockIpCookieTime)*parseInt(obj.count)+"m";
createCookie("incRevBlockIp",ipAddress,BlockIpCookieTime);
}else{
createCookie("incRevIpCheck",ipAddress,BlockIpCookieTime);
BlockAds=false;
if(default_IRDefaultAds_){default_mcmIRAds_All();}}}};
xhttp.open("GET", SrcDomain+"/InvalidAds/checkblock.php?ip="+ipAddress+"&domain="+DomainName, true);
xhttp.send(); } }
var irMyVar;
function mcmIRmyfunction() {
var MainClass = document.getElementsByClassName("increaserev");
var MainClassLength;
for (MainClassLength = 0; MainClassLength < MainClass.length; MainClassLength++) {
if (!MainClass[MainClassLength].hasAttribute("AdsEventDone") && MainClass[MainClassLength].hasAttribute("AdsStatus")) {
var Ifram=MainClass[MainClassLength].getElementsByTagName("iframe");
var iframLength;
if(Ifram.length=="0" || Ifram.length==0){
clearTimeout(irMyVar);
irMyVar=setTimeout(function(){  mcmIRmyfunction(); }, 2000);
}else{
for (iframLength = 0; iframLength < Ifram.length; iframLength++) {
iframID=Ifram[iframLength].getAttribute("id");
var className_=MainClass[MainClassLength].getAttribute("Ir-Ads-Unit");
className_=className_.replace("increaserev ", "");
Ifram[iframLength].setAttribute('adsType', className_);
var elem_=document.getElementById(iframID);
if (typeof(elem_) != 'undefined' && elem_ != null){
document.getElementById(iframID).addEventListener('mouseover',function(){            
myConfObj.iframeMouseOver = true; 
var adsType=document.getElementById(this.id).getAttribute("adsType");
myConfObj.iframeMainClass=adsType;
});
document.getElementById(iframID).onfocus = function() {
myConfObj.iframeMouseOver = true; 
var adsType=document.getElementById(this.id).getAttribute("adsType");
myConfObj.iframeMainClass=adsType;
};
document.getElementById(iframID).addEventListener('mouseout',function(){
myConfObj.iframeMouseOver = false;
myConfObj.iframeMainClass=false;
});
document.getElementById(iframID).onblur = function() {
myConfObj.iframeMouseOver = false;
myConfObj.iframeMainClass=false;
};
}
MainClass[MainClassLength].setAttribute("AdsEventDone","Done");
}}}}}
function mcmIrStopAdsClicking() {
var MainClass = document.getElementsByClassName("increaserev");
var MainClassLength;
for (MainClassLength = 0; MainClassLength < MainClass.length; MainClassLength++) {
if(MainClass[MainClassLength].getElementsByTagName("iradsdiv")[0]){
MainClass[MainClassLength].getElementsByTagName("iradsdiv")[0].style.pointerEvents = "none";
var className_=MainClass[MainClassLength].getAttribute("Ir-Ads-Unit");
className_=className_.replace("increaserev ", "");
MainClass[MainClassLength].setAttribute('onclick', "mcmIrInvalidClick('"+className_+"')");
}}}
function mcmIrAdsClicking() {
var MainClass = document.getElementsByClassName("increaserev");
var MainClassLength;
for (MainClassLength = 0; MainClassLength < MainClass.length; MainClassLength++) {
if(MainClass[MainClassLength].getElementsByTagName("iradsdiv")[0]){
MainClass[MainClassLength].getElementsByTagName("iradsdiv")[0].style.pointerEvents = "unset";
MainClass[MainClassLength].removeAttribute("onclick");
var className_=MainClass[MainClassLength].getAttribute("Ir-Ads-Unit");
className_=className_.replace("increaserev ", "");
}}}
var IrInvalidClickTimeOut;
function mcmIrInvalidClick(className=null){
if(className){
var AdsType='';
if(className=='970x90'){ AdsType='970x90';  }
if(className=='970x250'){ AdsType='970x250';  }
if(className=='728x90'){ AdsType='728x90';  }
if(className=='750x300'){ AdsType='750x300';  }
if(className=='700x300'){ AdsType='700x300';  }
if(className=='650x300'){ AdsType='650x300';  }
if(className=='600x300'){ AdsType='600x300';  }
if(className=='300x250'){ AdsType='300x250';  }
if(className=='300x250Dex'){ AdsType='300x250';  }
if(className=='336x280'){ AdsType='336x280';  }
if(className=='336x280Dex'){ AdsType='336x280';  }
if(className=='120x600'){ AdsType='120x600';  }
if(className=='120x6002'){ AdsType='120x6002';  }
if(className=='160x600'){ AdsType='160x600';  }
if(className=='300x600'){ AdsType='300x600';  }
if(className=='s120x600'){ AdsType='s120x600';  }
if(className=='s120x6002'){ AdsType='s120x6002';  }
if(className=='rs120x600'){ AdsType='rs120x600';  }
if(className=='ms320x100'){ AdsType='ms320x100';  }
if(className=='ts320x100'){ AdsType='ms320x100';  }
if(className=='s970x90'){ AdsType='s970x90';  }
if(className=='s970x902'){ AdsType='s970x902';  }
if(className=='ts728x90'){ AdsType='s970x90';  }
if(className=='320x100'){ AdsType='320x100';  }
if(className=='320x50'){ AdsType='320x100';  }
if(className=='336x280atf'){ AdsType='336x280atf';  }
if(className=='970x90atf'){ AdsType='970x90atf';  }
if(className=='infeed'){ AdsType='infeed';  }
var AdsRole="_0";
var incRevAdsClick = readCookie("incRevAdsClick");
var incRevAdsClick_1m=readCookie("incRevAdsClick_1m");var incRevAdsClick_3m=readCookie("incRevAdsClick_3m");var incRevAdsClick_5m=readCookie("incRevAdsClick_5m");var incRevAdsClick_7m=readCookie("incRevAdsClick_7m");var incRevAdsClick_10m=readCookie("incRevAdsClick_10m");var incRevAdsClick_1h=readCookie("incRevAdsClick_1h");
if(incRevAdsClick==1){
if(StopClick1!="0s"){
AdsRole="_1";
} }else if(incRevAdsClick==2){ if(StopClick2!="0s"){AdsRole="_2";} 
}else if(incRevAdsClick==3){ if(StopClick3!="0s"){AdsRole="_3";} 
}else if(incRevAdsClick==4){ if(StopClick4!="0s"){AdsRole="_4";} }
var incRevAdsClickCount = readCookie("incRevAdsClickCount");
if(incRevAdsClick_1m){if(parseInt(incRevAdsClickCount)>=2){AdsRole="_5";}}
if(incRevAdsClick_3m){if(parseInt(incRevAdsClickCount)>=3){AdsRole="_6";}}
if(incRevAdsClick_5m){if(parseInt(incRevAdsClickCount)>=5){AdsRole="_7";}}
if(incRevAdsClick_7m){if(parseInt(incRevAdsClickCount)>=7){AdsRole="_8";}}
if(incRevAdsClick_10m){if(parseInt(incRevAdsClickCount)>=9){AdsRole="_9";}}
if(incRevAdsClick_1h){if(parseInt(incRevAdsClickCount)>=10){AdsRole="_10";}}
myConfObj.iframeMouseOver = false;
myConfObj.iframeMainClass=false;
var InvalidClicksCount=readCookie("InvalidClicksCount"+AdsRole);
if(InvalidClicksCount){
var InvalidClicksCount_ = JSON.parse(InvalidClicksCount);
var InvalidData={};
var InvalidData_={};
var InvalidData_2={};
var obj = InvalidClicksCount_; 
for(var i in obj){
if(obj[i]["970x90"]){ var increment = (AdsType == '970x90') ? '1' :'0'; InvalidData_2["970x90"]=parseInt(obj[i]["970x90"])+parseInt(increment); }
if(obj[i]["970x250"]){ var increment = (AdsType == '970x250') ? '1' :'0'; InvalidData_2["970x250"]=parseInt(obj[i]["970x250"])+parseInt(increment); }
if(obj[i]["728x90"]){  var increment = (AdsType == '728x90') ? '1' :'0'; InvalidData_2["728x90"]=parseInt(obj[i]["728x90"])+parseInt(increment); }
if(obj[i]["750x300"]){ var increment = (AdsType == '750x300') ? '1' :'0'; InvalidData_2["750x300"]=parseInt(obj[i]["750x300"])+parseInt(increment); }
if(obj[i]["700x300"]){ var increment = (AdsType == '700x300') ? '1' :'0'; InvalidData_2["700x300"]=parseInt(obj[i]["700x300"])+parseInt(increment); }
if(obj[i]["650x300"]){ var increment = (AdsType == '650x300') ? '1' :'0'; InvalidData_2["650x300"]=parseInt(obj[i]["650x300"])+parseInt(increment); }
if(obj[i]["600x300"]){ var increment = (AdsType == '600x300') ? '1' :'0'; InvalidData_2["600x300"]=parseInt(obj[i]["600x300"])+parseInt(increment); }
if(obj[i]["300x250"]){ var increment = (AdsType == '300x250') ? '1' :'0'; InvalidData_2["300x250"]=parseInt(obj[i]["300x250"])+parseInt(increment); }
if(obj[i]["300x250Dex"]){ var increment = (AdsType == '300x250') ? '1' :'0'; InvalidData_2["300x250"]=parseInt(obj[i]["300x250"])+parseInt(increment); }
if(obj[i]["336x280"]){ var increment = (AdsType == '336x280') ? '1' :'0'; InvalidData_2["336x280"]=parseInt(obj[i]["336x280"])+parseInt(increment); }
if(obj[i]["336x280Dex"]){ var increment = (AdsType == '336x280') ? '1' :'0'; InvalidData_2["336x280"]=parseInt(obj[i]["336x280"])+parseInt(increment); }
if(obj[i]["120x600"]){ var increment = (AdsType == '120x600') ? '1' :'0'; InvalidData_2["120x600"]=parseInt(obj[i]["120x600"])+parseInt(increment); }
if(obj[i]["120x6002"]){ var increment = (AdsType == '120x6002') ? '1' :'0'; InvalidData_2["120x6002"]=parseInt(obj[i]["120x6002"])+parseInt(increment); }
if(obj[i]["160x600"]){ var increment = (AdsType == '160x600') ? '1' :'0'; InvalidData_2["160x600"]=parseInt(obj[i]["160x600"])+parseInt(increment); }
if(obj[i]["300x600"]){ var increment = (AdsType == '300x600') ? '1' :'0'; InvalidData_2["300x600"]=parseInt(obj[i]["300x600"])+parseInt(increment); }
if(obj[i]["s120x600"]){ var increment = (AdsType == 's120x600') ? '1' :'0'; InvalidData_2["s120x600"]=parseInt(obj[i]["s120x600"])+parseInt(increment); }
if(obj[i]["s120x6002"]){ var increment = (AdsType == 's120x6002') ? '1' :'0'; InvalidData_2["s120x6002"]=parseInt(obj[i]["s120x6002"])+parseInt(increment); }
if(obj[i]["rs120x600"]){ var increment = (AdsType == 'rs120x600') ? '1' :'0'; InvalidData_2["rs120x600"]=parseInt(obj[i]["rs120x600"])+parseInt(increment); }
if(obj[i]["ms320x100"]){ var increment = (AdsType == 'ms320x100') ? '1' :'0'; InvalidData_2["ms320x100"]=parseInt(obj[i]["ms320x100"])+parseInt(increment); }
if(obj[i]["ts320x100"]){ var increment = (AdsType == 'ms320x100') ? '1' :'0'; InvalidData_2["ms320x100"]=parseInt(obj[i]["ms320x100"])+parseInt(increment); }
if(obj[i]["s970x90"]){ var increment = (AdsType == 's970x90') ? '1' :'0'; InvalidData_2["s970x90"]=parseInt(obj[i]["s970x90"])+parseInt(increment); }
if(obj[i]["s970x902"]){ var increment = (AdsType == 's970x902') ? '1' :'0'; InvalidData_2["s970x902"]=parseInt(obj[i]["s970x902"])+parseInt(increment); }
if(obj[i]["ts728x90"]){ var increment = (AdsType == 's970x90') ? '1' :'0'; InvalidData_2["s970x90"]=parseInt(obj[i]["s970x90"])+parseInt(increment); }
if(obj[i]["320x100"]){ var increment = (AdsType == '320x100') ? '1' :'0'; InvalidData_2["320x100"]=parseInt(obj[i]["320x100"])+parseInt(increment); }
if(obj[i]["320x50"]){ var increment = (AdsType == '320x100') ? '1' :'0'; InvalidData_2["320x100"]=parseInt(obj[i]["320x100"])+parseInt(increment); }
if(obj[i]["336x280atf"]){ var increment = (AdsType == '336x280atf') ? '1' :'0'; InvalidData_2["336x280atf"]=parseInt(obj[i]["336x280atf"])+parseInt(increment); }
if(obj[i]["970x90atf"]){ var increment = (AdsType == '970x90atf') ? '1' :'0'; InvalidData_2["970x90atf"]=parseInt(obj[i]["970x90atf"])+parseInt(increment); }
if(obj[i]["infeed"]){ var increment = (AdsType == 'infeed') ? '1' :'0'; InvalidData_2["infeed"]=parseInt(obj[i]["infeed"])+parseInt(increment); }
}
var increment=1;
if(InvalidClicksCount_.undefined){
if(parseInt(InvalidClicksCount_.undefined[AdsType])>0){increment=parseInt(InvalidClicksCount_.undefined[AdsType])+1;}}
if(InvalidClicksCount_._1){
if(parseInt(InvalidClicksCount_._1[AdsType])>0){increment=parseInt(InvalidClicksCount_._1[AdsType])+1;}
}if(InvalidClicksCount_._2){
if(parseInt(InvalidClicksCount_._2[AdsType])>0){
increment=parseInt(InvalidClicksCount_._2[AdsType])+1;
}
}if(InvalidClicksCount_._3){if(parseInt(InvalidClicksCount_._3[AdsType])>0){increment=parseInt(InvalidClicksCount_._3[AdsType])+1;}
}if(InvalidClicksCount_._4){if(parseInt(InvalidClicksCount_._4[AdsType])>0){increment=parseInt(InvalidClicksCount_._4[AdsType])+1;}
}if(InvalidClicksCount_._5){if(parseInt(InvalidClicksCount_._5[AdsType])>0){increment=parseInt(InvalidClicksCount_._5[AdsType])+1;}
}if(InvalidClicksCount_._6){if(parseInt(InvalidClicksCount_._6[AdsType])>0){increment=parseInt(InvalidClicksCount_._6[AdsType])+1;}
}if(InvalidClicksCount_._7){if(parseInt(InvalidClicksCount_._7[AdsType])>0){increment=parseInt(InvalidClicksCount_._7[AdsType])+1;}
}if(InvalidClicksCount_._8){if(parseInt(InvalidClicksCount_._8[AdsType])>0){increment=parseInt(InvalidClicksCount_._8[AdsType])+1;}
}if(InvalidClicksCount_._9){if(parseInt(InvalidClicksCount_._9[AdsType])>0){increment=parseInt(InvalidClicksCount_._9[AdsType])+1;}
}if(InvalidClicksCount_._10){if(parseInt(InvalidClicksCount_._10[AdsType])>0){increment=parseInt(InvalidClicksCount_._10[AdsType])+1;}
}
InvalidData_2[AdsType]=increment;
InvalidData[AdsRole]=InvalidData_2;
InvalidData=JSON.stringify(InvalidData);
createCookie("InvalidClicksCount"+AdsRole,InvalidData,"86400s");
}else{
var InvalidData={};
var InvalidData_={};
var InvalidData_2={};
InvalidData_2[AdsType]=1;
InvalidData[AdsRole]=InvalidData_2;
InvalidData=JSON.stringify(InvalidData);
createCookie("InvalidClicksCount"+AdsRole,InvalidData,"86400s");
}
clearTimeout(IrInvalidClickTimeOut);
IrInvalidClickTimeOut=setTimeout(function(){ mcmIrInvalidClick_(); }, 2000);
}}
function mcmIrInvalidClick_(){
if(!_ir__IpAddress){
_ir__IpAddress=_ir__GetIpAddress(false);
}
var Os=_ir_operatingSytem();
var InvalidData={};
var InvalidData_={};
var InvalidData_2={};
for (var j = 0; j <=10; j++) {
if(j=="0" || j==0){
var InvalidClicksCount=readCookie("InvalidClicksCountundefined");
var InvalidClicksCountcookie="InvalidClicksCountundefined";
}else{
var InvalidClicksCount=readCookie("InvalidClicksCount_"+j);
var InvalidClicksCountcookie="InvalidClicksCount_"+j;
}
if(InvalidClicksCount){
var InvalidClicksCount_ = JSON.parse(InvalidClicksCount);
var obj = InvalidClicksCount_; 
for(var i in obj){
if(obj[i]["970x90"]){ InvalidData_2["970x90"]=parseInt(obj[i]["970x90"]); }
if(obj[i]["970x250"]){ InvalidData_2["970x250"]=parseInt(obj[i]["970x250"]); }
if(obj[i]["728x90"]){  InvalidData_2["728x90"]=parseInt(obj[i]["728x90"]); }
if(obj[i]["750x300"]){ InvalidData_2["750x300"]=parseInt(obj[i]["750x300"]); }
if(obj[i]["700x300"]){  InvalidData_2["700x300"]=parseInt(obj[i]["700x300"]); }
if(obj[i]["650x300"]){ InvalidData_2["650x300"]=parseInt(obj[i]["650x300"]); }
if(obj[i]["600x300"]){  InvalidData_2["600x300"]=parseInt(obj[i]["600x300"]); }
if(obj[i]["300x250"]){  InvalidData_2["300x250"]=parseInt(obj[i]["300x250"]); }
if(obj[i]["300x250Dex"]){  InvalidData_2["300x250"]=parseInt(obj[i]["300x250"]); }
if(obj[i]["336x280"]){  InvalidData_2["336x280"]=parseInt(obj[i]["336x280"]); }
if(obj[i]["336x280Dex"]){  InvalidData_2["336x280"]=parseInt(obj[i]["336x280"]); }
if(obj[i]["120x600"]){  InvalidData_2["120x600"]=parseInt(obj[i]["120x600"]); }
if(obj[i]["120x6002"]){  InvalidData_2["120x6002"]=parseInt(obj[i]["120x6002"]); }
if(obj[i]["160x600"]){  InvalidData_2["160x600"]=parseInt(obj[i]["160x600"]); }
if(obj[i]["300x600"]){  InvalidData_2["300x600"]=parseInt(obj[i]["300x600"]); }
if(obj[i]["s120x600"]){  InvalidData_2["s120x600"]=parseInt(obj[i]["s120x600"]); }
if(obj[i]["s120x6002"]){  InvalidData_2["s120x6002"]=parseInt(obj[i]["s120x6002"]); }
if(obj[i]["rs120x600"]){  InvalidData_2["rs120x600"]=parseInt(obj[i]["rs120x600"]); }
if(obj[i]["ms320x100"]){  InvalidData_2["ms320x100"]=parseInt(obj[i]["ms320x100"]); }
if(obj[i]["ts320x100"]){  InvalidData_2["ms320x100"]=parseInt(obj[i]["ms320x100"]); }
if(obj[i]["s970x90"]){ InvalidData_2["s970x90"]=parseInt(obj[i]["s970x90"]); }
if(obj[i]["s970x902"]){ InvalidData_2["s970x902"]=parseInt(obj[i]["s970x902"]); }
if(obj[i]["ts728x90"]){ InvalidData_2["s970x90"]=parseInt(obj[i]["s970x90"]); }
if(obj[i]["320x100"]){ InvalidData_2["320x100"]=parseInt(obj[i]["320x100"]); }
if(obj[i]["320x50"]){ InvalidData_2["320x100"]=parseInt(obj[i]["320x100"]); }
if(obj[i]["336x280atf"]){ InvalidData_2["336x280atf"]=parseInt(obj[i]["336x280atf"]); }
if(obj[i]["970x90atf"]){ InvalidData_2["970x90atf"]=parseInt(obj[i]["970x90atf"]); }
if(obj[i]["infeed"]){ InvalidData_2["infeed"]=parseInt(obj[i]["infeed"]); }
}
InvalidData[j]=InvalidData_2;InvalidData_2={};createCookie(InvalidClicksCountcookie,"","1s");
}}
InvalidData=JSON.stringify(InvalidData);
if(_ir__IpAddress!='' && DomainName!='' && Os!='' ){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var Data = xhttp.responseText;
}};
xhttp.open("GET", SrcDomain+"/InvalidAds/addInvalidClick.php?ip="+_ir__IpAddress+"&domain="+DomainName+"&os="+Os+"&adstype="+InvalidData+"&roletype="+InvalidData, true);
xhttp.send();
}}
function mcmIrvalidClick(className=null){
if(className){
var AdsType='';
if(className=='970x90'){ AdsType='970x90';  }
if(className=='970x250'){ AdsType='970x250';  }
if(className=='728x90'){ AdsType='728x90';  }
if(className=='750x300'){ AdsType='750x300';  }
if(className=='700x300'){ AdsType='700x300'; }
if(className=='650x300'){ AdsType='650x300';  }
if(className=='600x300'){ AdsType='600x300'; }
if(className=='300x250'){ AdsType='300x250'; }
if(className=='300x250Dex'){ AdsType='300x250'; }
if(className=='336x280'){ AdsType='336x280';  }
if(className=='336x280Dex'){ AdsType='336x280';  }
if(className=='120x600'){ AdsType='120x600'; }
if(className=='120x6002'){ AdsType='120x6002'; }
if(className=='160x600'){ AdsType='160x600';  }
if(className=='300x600'){ AdsType='300x600'; }
if(className=='s120x600'){ AdsType='s120x600';  }
if(className=='s120x6002'){ AdsType='s120x6002'; }
if(className=='rs120x600'){ AdsType='rs120x600'; }
if(className=='ms320x100'){ AdsType='ms320x100';  }
if(className=='ts320x100'){ AdsType='ms320x100';  }
if(className=='s970x90'){ AdsType='s970x90'; }
if(className=='ts728x90'){ AdsType='s970x90'; }
if(className=='s970x902'){ AdsType='s970x902';  }
if(className=='320x100'){ AdsType='320x100';  }
if(className=='320x50'){ AdsType='320x100';  }
if(className=='336x280atf'){ AdsType='336x280atf'; }
if(className=='970x90atf'){ AdsType='970x90atf'; }
if(className=='infeed'){ AdsType='infeed'; }
var url =window.location.href.split('?')[0];
if(url!='' && DomainName!='' && AdsType!='' ){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var Data = xhttp.responseText;
}};
xhttp.open("GET", SrcDomain+"/InvalidAds/addadsclick.php?ip="+_ir__IpAddress+"&domain="+DomainName+"&url="+url+"&adstype="+AdsType, true);
xhttp.send();
}}}
function default_mcmIrinit(){
var incRevBlockAll = readCookie("incRevBlockAll");
if(incRevBlockAll=="all"){mcmIrStopAdsClicking();}
var ThisURL = readCookie(window.location.href);
if(ThisURL>=1){mcmIrStopAdsClicking();}}
function default_mcmIrreinit(){
var ThisURL = readCookie("irmypageActive");
if(ThisURL==window.location.href){
var ThisURL2 = readCookie(window.location.href);
if(ThisURL2>=1){mcmIrStopAdsClicking();}else{mcmIrAdsClicking();}
}else{
var incRevBlockAll = readCookie("incRevBlockAll");
if(incRevBlockAll=="all"){
mcmIrStopAdsClicking();
}else{
mcmIrAdsClicking();}}
var incRevBlockIp=readCookie("incRevBlockIp");
if(incRevBlockIp==_ir__IpAddress){
mcmIrStopAdsClicking();}
setTimeout(function(){ 
default_mcmIrreinit();
}, 1200);}
function default_mcmirallmyfun(){
mcmIRmyfunction();
if(stopadsclick>0){
var time=parseInt(stopadsclick)*1000;
mcmIrStopAdsClicking();
setTimeout(function(){ default_mcmIrreinit(); default_mcmIrinit();  }, time);
}else{  default_mcmIrreinit(); default_mcmIrinit();}}
window.addEventListener('blur',function(){ 
if(myConfObj.iframeMainClass){
mcmIrvalidClick(myConfObj.iframeMainClass);
}
if(myConfObj.iframeMouseOver){ 
var incRevAdsClick = readCookie("incRevAdsClick");
if(incRevAdsClick==1){ 
createCookie("incRevAdsClick","2","1440m");
createCookie("incRevBlockAll","all",StopClick2);
createCookie(window.location.href,"1",StopClick2); 
}else if(incRevAdsClick==2){ 
createCookie("incRevAdsClick","3","1440m");
createCookie("incRevBlockAll","all",StopClick3);
createCookie(window.location.href,"1",StopClick3); 
}else if(incRevAdsClick==3){ 
createCookie("incRevAdsClick","4","1440m");
createCookie("incRevBlockAll","all",StopClick4); 
createCookie(window.location.href,"1",StopClick4); 
}else{
createCookie("incRevAdsClick","1","1440m");
createCookie(window.location.href,"1",StopClick1); }
createCookie(window.location.href+"_","1","60m"); 
createCookie("irmypageActive",window.location.href,"60m"); 
var incRevAdsClickCount = readCookie("incRevAdsClickCount");
if(incRevAdsClickCount){ createCookie("incRevAdsClickCount",parseInt(incRevAdsClickCount)+1,"1440m"); }else{ createCookie("incRevAdsClickCount","1","1440m"); }
var incRevAdsClick_1m=readCookie("incRevAdsClick_1m");var incRevAdsClick_3m=readCookie("incRevAdsClick_3m");var incRevAdsClick_5m=readCookie("incRevAdsClick_5m");var incRevAdsClick_7m=readCookie("incRevAdsClick_7m");var incRevAdsClick_10m=readCookie("incRevAdsClick_10m");var incRevAdsClick_1h=readCookie("incRevAdsClick_1h");
var incRevAdsClickCount = readCookie("incRevAdsClickCount");
if(incRevAdsClick_1m){
if(parseInt(incRevAdsClickCount)>=2){
AddBlockIpAddress();
createCookie("1m",_ir__IpAddress,"1440m");}
}else{
if(!incRevAdsClick_1h){
createCookie("incRevAdsClick_1m","check",BlockIpClick2); //20 sec
}}
if(incRevAdsClick_3m){
if(parseInt(incRevAdsClickCount)>=3){
AddBlockIpAddress();
createCookie("3m",_ir__IpAddress,"1440m");}
}else{
if (!incRevAdsClick_1h) {
createCookie("incRevAdsClick_3m","check",BlockIpClick3); }}
if(incRevAdsClick_5m){
if(parseInt(incRevAdsClickCount)>=5){
AddBlockIpAddress();
createCookie("5m",_ir__IpAddress,"1440m");}
}else{
if (!incRevAdsClick_1h) {
createCookie("incRevAdsClick_5m","check",BlockIpClick5); // 3 min
}}
if(incRevAdsClick_7m){
if(parseInt(incRevAdsClickCount)>=7){
AddBlockIpAddress();
createCookie("7m",_ir__IpAddress,"1440m");}
}else{
if (!incRevAdsClick_1h) {
createCookie("incRevAdsClick_7m","check",BlockIpClick7);  
}}
if(incRevAdsClick_10m){
if(parseInt(incRevAdsClickCount)>=9){
AddBlockIpAddress();
createCookie("10m",_ir__IpAddress,"1440m");}
}else{
if (!incRevAdsClick_1h) {
createCookie("incRevAdsClick_10m","check",BlockIpClick9);  
}}
if(incRevAdsClick_1h){
if(parseInt(incRevAdsClickCount)>=10){
AddBlockIpAddress();
createCookie("1h",_ir__IpAddress,"1440m");}
}else{
createCookie("incRevAdsClick_1h","check",BlockIpClick10);}
mcmIrStopAdsClicking();}
});
function AddBlockIpAddress(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var Data = xhttp.responseText;
Data = Data.toLowerCase();
if(Data=="block"){
createCookie("incRevBlockIp",_ir__IpAddress,BlockIpCookieTime);
}}};
var Os=_ir_operatingSytem();
xhttp.open("GET", SrcDomain+"/InvalidAds/addblockip.php?ip="+_ir__IpAddress+"&domain="+window.location.hostname+"&Os="+Os, true);
xhttp.send();
}
function createCookie(name,value,minutes) {
if (minutes) {
var str = minutes; 
var CheckSec = String(str).match(/s/g);
var CheckMin = String(str).match(/m/g);
var date = new Date();
var strResult = String(str).replace("s", "");
strResult = String(strResult).replace("m", "");
if(CheckSec=="s"){date.setTime(date.getTime()+(strResult*1000));}
if(CheckMin=="m"){date.setTime(date.getTime()+(strResult*60*1000));}
var expires = "; expires="+date.toGMTString();
} else {var expires = "";}
document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(name) {
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++) {
var c = ca[i];
while (c.charAt(0)==' ') c = c.substring(1,c.length);
if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
}
return null;
}
function randomNumber(minimum, maximum){ return Math.round( Math.random() * (maximum - minimum) + minimum);}
if(irdomainkey){ }else{var irdomainkey=randomNumber(123,123456789);}
var _970x90_RequestCount=0;
var _970x250_RequestCount=0;
var _728x90_RequestCount=0;
var _750x300_RequestCount=0;
var _300x250_RequestCount=0;
var _336x280_RequestCount=0;
var _120x600_RequestCount=0;
var _160x600_RequestCount=0;
var _300x600_RequestCount=0;
var _s120x600_RequestCount=0;
var _rs120x600_RequestCount=0;
function default_IRpointerEvents(){
return 'pointer-events:none;';
}
var default_mcm1200x250_array = [];
function default_mcmIRAds_1200x250(ClassName='bidmcm1200x250',AdRequest=true){
var x = document.getElementsByClassName(ClassName);
var i; var delay=0;
    for (i = 0; i < x.length; i++) {
        if(isInViewport(x[i])){
            if (!x[i].hasAttribute("AdsStatus")) {
            	_970x250=parseInt(_970x250)+1;
				var unitcss="";var btncss="";var adscss=""; adsfil=false;
				var AdsEvent_='';
				if(parseInt(stopadsclick)>0){
				AdsEvent_=default_IRpointerEvents();
				}
				var Tag=default_IR_Tag;
googletag.cmd.push(function() {
	i_=i;
var ab1200x250 = googletag.sizeMapping().addSize([1200, 640], [1200, 250]).addSize([1200, 480], [1200, 90]).addSize([970, 640], [970, 250]).addSize([970, 480], [970, 90]).addSize([728, 640], [728, 90]).addSize([350, 400], [336, 280]).addSize([320, 300], [300, 250]).addSize([0, 0], [88, 31]).build();
for (var i2_ = 0; i2_ <=i_; i2_++) {
	if(i2_<x.length){
		if(default_mcm1200x250_array.indexOf(i2_) !== -1){} else{
		    
	        default_mcm1200x250_array.push(i2_);
	  			googletag.defineSlot(default_All_Slot[Tag]["adsSlot_1200x250"], default_All_Slot[Tag]["adsSlot_1200x250_size"], 'div-gpt-ad-1650283759589-'+i2_).defineSizeMapping(ab1200x250).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
	    }
    }
}

if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
setTimeout(ads_(x[i],i,Tag), 1000);	
}); 
function ads_(elem,i,Tag){
    
    if(typeof elem==="undefined" || elem===""){

    }else{
				 var ID='div-gpt-ad-1650283759589-'+i;
                var AdsDIV = document.createElement('DIV');
                AdsDIV.setAttribute('id', ID);
                var mainDIV = document.createElement('IRADSDIV');
                mainDIV.appendChild(AdsDIV);
                elem.appendChild(mainDIV);
                AdsDIV.appendChild(mcmgoogleadsPush(ID));
                elem.setAttribute("AdsStatus","Done");
				elem.setAttribute("Ir-Ads-Unit","970x250");
				elem.setAttribute("Ir-Ads-Unit2","1200x250");
				elem.setAttribute("Ir-Ads-Unit-type","DFP");
				elem.setAttribute("Ir-Ads-Unit-tag",Tag);
				}
}
				
            }        }    }}
var default_mcm1200x90_array = [];
function default_mcmIRAds_1200x90(ClassName='bidmcm1200x90',AdRequest=true){
var x = document.getElementsByClassName(ClassName);
var i; var delay=0;
    for (i = 0; i < x.length; i++) {
        if(isInViewport(x[i])){
            if (!x[i].hasAttribute("AdsStatus")) {
            	_970x250=parseInt(_970x250)+1;
				var unitcss="";var btncss="";var adscss=""; adsfil=false;
				var AdsEvent_='';
				if(parseInt(stopadsclick)>0){
				AdsEvent_=default_IRpointerEvents();
				}
				var Tag=default_IR_Tag;
googletag.cmd.push(function() {
	i_=i;
var a1200x90 = googletag.sizeMapping().addSize([1200, 480], [1200, 90]).addSize([970, 480], [970, 90]).addSize([728, 480], [728, 90]).addSize([350, 400], [336, 280]).addSize([300, 300], [300, 250]).addSize([0, 0], [88, 31]).build();
for (var i2_ = 0; i2_ <=i_; i2_++) {
	if(i2_<x.length){
		if(default_mcm1200x90_array.indexOf(i2_) !== -1){} else{
	        default_mcm1200x90_array.push(i2_);
	  googletag.defineSlot(default_All_Slot[Tag]["adsSlot_1200x90"], default_All_Slot[Tag]["adsSlot_1200x90_size"], 'div-gpt-ad-1631618276223-'+i2_).defineSizeMapping(a1200x90).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
	    }
	}
}
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
setTimeout(ads_(x[i],i,Tag), 1000);	
}); 
               
function ads_(elem,i,Tag){
	if(typeof elem==="undefined" || elem===""){

    }else{
				 var ID='div-gpt-ad-1631618276223-'+i;
                var AdsDIV = document.createElement('DIV');
                AdsDIV.setAttribute('id', ID);
                var mainDIV = document.createElement('IRADSDIV');
                mainDIV.appendChild(AdsDIV);
                elem.appendChild(mainDIV);
                AdsDIV.appendChild(mcmgoogleadsPush(ID));
                elem.setAttribute("AdsStatus","Done");
				elem.setAttribute("Ir-Ads-Unit","970x250");
				elem.setAttribute("Ir-Ads-Unit2","1200x90");
				elem.setAttribute("Ir-Ads-Unit-type","DFP");
				elem.setAttribute("Ir-Ads-Unit-tag",Tag);
			}
}
            }        }    }}
var default_mcm1200x90atf_array = [];
function default_mcmIRAds_atf1200x90(ClassName='bidmcm1200x90atf',AdRequest=true){
var x = document.getElementsByClassName(ClassName);
var i; var delay=0;
    for (i = 0; i < x.length; i++) {
        if(isInViewport(x[i])){
            if (!x[i].hasAttribute("AdsStatus")) {
            	_970x250=parseInt(_970x250)+1;
				var unitcss="";var btncss="";var adscss=""; adsfil=false;
				var AdsEvent_='';
				if(parseInt(stopadsclick)>0){
				AdsEvent_=default_IRpointerEvents();
				}
				var Tag=default_IR_Tag;
googletag.cmd.push(function() {
	i_=i;//i_=reverseNum(i-1);

var atf1200x90 = googletag.sizeMapping().addSize([1200, 480], [1200, 90]).addSize([970, 480], [970, 90]).addSize([728, 480], [728, 90]).addSize([350, 400], [320, 100]).addSize([300, 300], [320, 100]).addSize([0, 0], [88, 31]).build();
for (var i2_ = 0; i2_ <=i_; i2_++) {
	if(i2_<x.length){
		if(default_mcm1200x90atf_array.indexOf(i2_) !== -1){} else{
	        default_mcm1200x90atf_array.push(i2_);
	        googletag.defineSlot(default_All_Slot[Tag]["adsSlot_1200x90atf"], default_All_Slot[Tag]["adsSlot_1200x90atf_size"], 'div-gpt-ad-1631618368877-'+i2_).defineSizeMapping(atf1200x90).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
	    }
	}
}
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
setTimeout(ads_(x[i],i,Tag), 1000);	
}); 
function ads_(elem,i,Tag){
	if(typeof elem==="undefined" || elem===""){

    }else{
				var ID='div-gpt-ad-1631618368877-'+i;
                var AdsDIV = document.createElement('DIV');
                AdsDIV.setAttribute('id', ID);
                var mainDIV = document.createElement('IRADSDIV');
                mainDIV.appendChild(AdsDIV);
                elem.appendChild(mainDIV);
                AdsDIV.appendChild(mcmgoogleadsPush(ID));
                elem.setAttribute("AdsStatus","Done");
				elem.setAttribute("Ir-Ads-Unit","970x250");
				elem.setAttribute("Ir-Ads-Unit2","1200x90atf");
				elem.setAttribute("Ir-Ads-Unit-type","DFP");
				elem.setAttribute("Ir-Ads-Unit-tag",Tag);
			}
}
// setTimeout(ads_(x[i],i,Tag), 1000);					
            }        }    }}
var default_mcm970x90_array = [];            
function default_mcmIRAds_970x90(ClassName='bidmcm970x90',AdRequest=true){
var x = document.getElementsByClassName(ClassName);
var i; var delay=0;
    for (i = 0; i < x.length; i++) {
        if(isInViewport(x[i])){
            if (!x[i].hasAttribute("AdsStatus")) {
            	_970x90=parseInt(_970x90)+1;
				var unitcss="";var btncss="";var adscss=""; adsfil=false;
				var AdsEvent_='';
				if(parseInt(stopadsclick)>0){
				AdsEvent_=default_IRpointerEvents();
				}
				var Tag=default_IR_Tag;
googletag.cmd.push(function() {
	i_=i;//i_=reverseNum(i-1);

var a970x90 = googletag.sizeMapping().addSize([970, 480], [970, 90]).addSize([728, 480], [728, 90]).addSize([350, 400], [336, 280]).addSize([300, 300], [300, 250]).addSize([0, 0], [88, 31]).build();
for (var i2_ = 0; i2_ <=i_; i2_++) {
	if(i2_<x.length){
		if(default_mcm970x90_array.indexOf(i2_) !== -1){} else{
	        default_mcm970x90_array.push(i2_);
			
			googletag.defineSlot(default_All_Slot[Tag]["adsSlot_970x90"], default_All_Slot[Tag]["adsSlot_970x90_size"], 'div-gpt-ad-1629189064367-'+i2_).defineSizeMapping(a970x90).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
	    }
	}
}
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
setTimeout(ads_(x[i],i,Tag), 1000);	
}); 
                
function ads_(elem,i,Tag){
	if(typeof elem==="undefined" || elem===""){

    }else{
				 var ID='div-gpt-ad-1629189064367-'+i;
                var AdsDIV = document.createElement('DIV');
                AdsDIV.setAttribute('id', ID);
				var mainDIV = document.createElement('IRADSDIV');
                mainDIV.appendChild(AdsDIV);
                elem.appendChild(mainDIV);
                AdsDIV.appendChild(mcmgoogleadsPush(ID));
                elem.setAttribute("AdsStatus","Done");
				elem.setAttribute("Ir-Ads-Unit","970x90");
				elem.setAttribute("Ir-Ads-Unit-type","DFP");
				elem.setAttribute("Ir-Ads-Unit-tag",Tag);
			}
}
// setTimeout(ads_(x[i],i,Tag), 1000);				
            }        }    }}
var default_mcm970x90atf_array = [];    
function default_mcmmcmIRAds_970x90ATF(ClassName='bidmcm970x90atf',AdRequest=true){
var x = document.getElementsByClassName(ClassName);
var i; var delay=0;
    for (i = 0; i < x.length; i++) {
        if(isInViewport(x[i])){
            if (!x[i].hasAttribute("AdsStatus")) {
            	_970x90atf=parseInt(_970x90atf)+1;
				var unitcss="";var btncss="";var adscss=""; adsfil=false;
				var AdsEvent_='';
				if(parseInt(stopadsclick)>0){
				AdsEvent_=default_IRpointerEvents();
				}
				var Tag=default_IR_Tag;
googletag.cmd.push(function() {
i_=i;//i_=reverseNum(i-1);
var atf970x90 = googletag.sizeMapping().addSize([970, 480], [970, 90]).addSize([728, 480], [728, 90]).addSize([350, 400], [320, 100]).addSize([300, 300], [320, 100]).addSize([0, 0], [88, 31]).build();

for (var i2_ = 0; i2_ <=i_; i2_++) {
	if(i2_<x.length){
		if(default_mcm970x90atf_array.indexOf(i2_) !== -1){} else{
	        default_mcm970x90atf_array.push(i2_);
	        googletag.defineSlot(default_All_Slot[Tag]["adsSlot_970x90atf"], default_All_Slot[Tag]["adsSlot_970x90atf_size"], 'div-gpt-ad-1630494604164-'+i2_).defineSizeMapping(atf970x90).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
	    }
	}
}
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
setTimeout(ads_(x[i],i,Tag), 1000);	
}); 
                
function ads_(elem,i,Tag){
	if(typeof elem==="undefined" || elem===""){

    }else{
				 // var ID='div-gpt-ad-1630494604164-'+i+'-'+Tag;
				 var ID='div-gpt-ad-1630494604164-'+i;
                var AdsDIV = document.createElement('DIV');
                AdsDIV.setAttribute('id', ID);
                var mainDIV = document.createElement('IRADSDIV');
                mainDIV.appendChild(AdsDIV);
                elem.appendChild(mainDIV);
                AdsDIV.appendChild(mcmgoogleadsPush(ID));
                elem.setAttribute("AdsStatus","Done");
				elem.setAttribute("Ir-Ads-Unit","970x90atf");
				elem.setAttribute("Ir-Ads-Unit-type","DFP");
				elem.setAttribute("Ir-Ads-Unit-tag",Tag);
			}
}
// setTimeout(ads_(x[i],i,Tag), 1000);				
            }        }    }}
var default_mcm970x250_array = [];  
function default_mcmIRAds_970x250(ClassName='bidmcm970x250',AdRequest=true){
var x = document.getElementsByClassName(ClassName);
var i; var delay=0;
    for (i = 0; i < x.length; i++) {
        if(isInViewport(x[i])){
            if (!x[i].hasAttribute("AdsStatus")) {
            	_970x250=parseInt(_970x250)+1;
				var unitcss="";var btncss="";var adscss=""; adsfil=false;
				var AdsEvent_='';
				if(parseInt(stopadsclick)>0){
				AdsEvent_=default_IRpointerEvents();
				}
				var Tag=default_IR_Tag;
googletag.cmd.push(function() {
i_=i;//i_=reverseNum(i-1);
var b970x250 = googletag.sizeMapping().addSize([970, 640], [970, 250]).addSize([970, 480], [970, 90]).addSize([728, 480], [728, 90]).addSize([350, 400], [336, 280]).addSize([320, 300], [300, 250]).addSize([0, 0], [88, 31]).build();
for (var i2_ = 0; i2_ <=i_; i2_++) {
	if(i2_<x.length){
		if(default_mcm970x250_array.indexOf(i2_) !== -1){} else{
	        default_mcm970x250_array.push(i2_);
	        googletag.defineSlot(default_All_Slot[Tag]["adsSlot_970x250"], default_All_Slot[Tag]["adsSlot_970x250_size"], 'div-gpt-ad-1629893376960-'+i2_).defineSizeMapping(b970x250).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
	    }
	}
}
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
setTimeout(ads_(x[i],i,Tag), 1000);	
}); 
                
function ads_(elem,i,Tag){
	if(typeof elem==="undefined" || elem===""){

    }else{
				 var ID='div-gpt-ad-1629893376960-'+i;
                var AdsDIV = document.createElement('DIV');
                AdsDIV.setAttribute('id', ID);
                var mainDIV = document.createElement('IRADSDIV');
                mainDIV.appendChild(AdsDIV);
                elem.appendChild(mainDIV);
                AdsDIV.appendChild(mcmgoogleadsPush(ID));
                elem.setAttribute("AdsStatus","Done");
				elem.setAttribute("Ir-Ads-Unit","970x250");
				elem.setAttribute("Ir-Ads-Unit-type","DFP");
				elem.setAttribute("Ir-Ads-Unit-tag",Tag);
			}
}
// setTimeout(ads_(x[i],i,Tag), 1000);					
            }        }    }}
var default_mcm300x600_array = [];  
function default_mcmIRAds_300x600(ClassName='bidmcm300x600',AdRequest=true){
var x = document.getElementsByClassName(ClassName);
var i; var delay=0;
    for (i = 0; i < x.length; i++) {
        if(isInViewport(x[i])){
            if (!x[i].hasAttribute("AdsStatus")) {
            	_300x600=parseInt(_300x600)+1;
				var unitcss="";var btncss="";var adscss=""; adsfil=false;
				var AdsEvent_='';
				if(parseInt(stopadsclick)>0){
				AdsEvent_=default_IRpointerEvents();
				}
				var Tag=default_IR_Tag;
googletag.cmd.push(function() {
i_=i;//i_=reverseNum(i-1);
var c300x600 = googletag.sizeMapping().addSize([1024, 640], [300, 600]).addSize([350, 400], [336, 280]).addSize([320, 300], [300, 250]).addSize([0, 0], [88, 31]).build();
for (var i2_ = 0; i2_ <=i_; i2_++) {
	if(i2_<x.length){
		if(default_mcm300x600_array.indexOf(i2_) !== -1){} else{
	        default_mcm300x600_array.push(i2_);
	        googletag.defineSlot(default_All_Slot[Tag]["adsSlot_300x600"], default_All_Slot[Tag]["adsSlot_300x600_size"], 'div-gpt-ad-1629189469111-'+i2_).defineSizeMapping(c300x600).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
	    }
	}
}
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
setTimeout(ads_(x[i],i,Tag), 1000);	
}); 
                
function ads_(elem,i,Tag){
	if(typeof elem==="undefined" || elem===""){

    }else{
				 var ID='div-gpt-ad-1629189469111-'+i;
                var AdsDIV = document.createElement('DIV');
                AdsDIV.setAttribute('id', ID);
                var mainDIV = document.createElement('IRADSDIV');
                mainDIV.appendChild(AdsDIV);
                elem.appendChild(mainDIV);
                AdsDIV.appendChild(mcmgoogleadsPush(ID));
                elem.setAttribute("AdsStatus","Done");
				elem.setAttribute("Ir-Ads-Unit","300x600");
				elem.setAttribute("Ir-Ads-Unit-type","DFP");
				elem.setAttribute("Ir-Ads-Unit-tag",Tag);
}
}
// setTimeout(ads_(x[i],i,Tag), 1000);				
            }        }    }}
var default_mcm336x280_array = [];
function default_mcmIRAds_336x280(ClassName='bidmcm336x280',AdRequest=true){
var x = document.getElementsByClassName(ClassName);
var i; var delay=0;
    for (i = 0; i < x.length; i++) {
        if(isInViewport(x[i])){
            if (!x[i].hasAttribute("AdsStatus")) {
            	_336x280=parseInt(_336x280)+1;
				var unitcss="";var btncss="";var adscss=""; adsfil=false;
				var AdsEvent_='';
				if(parseInt(stopadsclick)>0){
				AdsEvent_=default_IRpointerEvents();
				}
				var Tag=default_IR_Tag;
googletag.cmd.push(function() {
i_=i;//i_=reverseNum(i-1);
var d336x280 = googletag.sizeMapping().addSize([350, 400], [336, 280]).addSize([320, 300], [300, 250]).addSize([0, 0], [88, 31]).build();
for (var i2_ = 0; i2_ <=i_; i2_++) {
	if(i2_<x.length){
		if(default_mcm336x280_array.indexOf(i2_) !== -1){} else{
	        default_mcm336x280_array.push(i2_);
	        googletag.defineSlot(default_All_Slot[Tag]["adsSlot_336x280"], default_All_Slot[Tag]["adsSlot_336x280_size"], 'div-gpt-ad-1629189613001-'+i2_).defineSizeMapping(d336x280).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());	
	  
	    }
	}
}
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
setTimeout(ads_(x[i],i,Tag), 1000);	
}); 
function ads_(elem,i,Tag){
	if(typeof elem==="undefined" || elem===""){

    }else{
							var ID='div-gpt-ad-1629189613001-'+i;
            var AdsDIV = document.createElement('DIV');
            AdsDIV.setAttribute('id', ID);
            var mainDIV = document.createElement('IRADSDIV');
            mainDIV.appendChild(AdsDIV);
            elem.appendChild(mainDIV);
            AdsDIV.appendChild(mcmgoogleadsPush(ID));
            elem.setAttribute("AdsStatus","Done");
				elem.setAttribute("Ir-Ads-Unit","336x280");
				elem.setAttribute("Ir-Ads-Unit-type","DFP");
				elem.setAttribute("Ir-Ads-Unit-tag",Tag); 
}
}
// setTimeout(ads_(x[i],i,Tag), 1000);
            }        }    }}
var default_mcm300x250_array = []; 
function default_mcmIRAds_300x250(ClassName='bidmcm300x250',AdRequest=true){
var x = document.getElementsByClassName(ClassName);
var i; var delay=0;
    for (i = 0; i < x.length; i++) {
        if(isInViewport(x[i])){
            if (!x[i].hasAttribute("AdsStatus")) {
            	_300x250=parseInt(_300x250)+1;
				var unitcss="";var btncss="";var adscss=""; adsfil=false;
				var AdsEvent_='';
				if(parseInt(stopadsclick)>0){
				AdsEvent_=default_IRpointerEvents();
				}
				var Tag=default_IR_Tag;
googletag.cmd.push(function() {
i_=i;//i_=reverseNum(i-1);
var e300x250 = googletag.sizeMapping().addSize([320, 300], [300, 250]).addSize([0, 0], [88, 31]).build();
for (var i2_ = 0; i2_ <=i_; i2_++) {
	if(i2_<x.length){
		if(default_mcm300x250_array.indexOf(i2_) !== -1){} else{
	        default_mcm300x250_array.push(i2_);
	        googletag.defineSlot(default_All_Slot[Tag]["adsSlot_300x250"],default_All_Slot[Tag]["adsSlot_300x250_size"], 'div-gpt-ad-1629190401556-'+i2_).defineSizeMapping(e300x250).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
	    }
	}
}
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
setTimeout(ads_(x[i],i,Tag), 1000);
}); 
               
function ads_(elem,i,Tag){
	if(typeof elem==="undefined" || elem===""){

    }else{
				 var ID='div-gpt-ad-1629190401556-'+i;
                var AdsDIV = document.createElement('DIV');
                AdsDIV.setAttribute('id', ID);
                var mainDIV = document.createElement('IRADSDIV');
                mainDIV.appendChild(AdsDIV);
                elem.appendChild(mainDIV);
                AdsDIV.appendChild(mcmgoogleadsPush(ID));
                elem.setAttribute("AdsStatus","Done");
				elem.setAttribute("Ir-Ads-Unit","300x250");
				elem.setAttribute("Ir-Ads-Unit-type","DFP");
				elem.setAttribute("Ir-Ads-Unit-tag",Tag);
}
}
// setTimeout(ads_(x[i],i,Tag), 1000);
            }        }    }}
var default_mcm160x600_array = []; 
function default_mcmIRAds_160x600(ClassName='bidmcm160x600',AdRequest=true){
var x = document.getElementsByClassName(ClassName);
var i; var delay=0;
    for (i = 0; i < x.length; i++) {
        if(isInViewport(x[i])){
            if (!x[i].hasAttribute("AdsStatus")) {
            	_160x600=parseInt(_160x600)+1;
				var unitcss="";var btncss="";var adscss=""; adsfil=false;
				var AdsEvent_='';
				if(parseInt(stopadsclick)>0){
				AdsEvent_=default_IRpointerEvents();
				}
				var Tag=default_IR_Tag;
googletag.cmd.push(function() {
i_=i;//i_=reverseNum(i-1);
var g160x600 = googletag.sizeMapping().addSize([1024, 640], [160, 600]).addSize([1024, 640], [120, 600]).addSize([350, 400], [336, 280]).addSize([320, 300], [300, 250]).addSize([0, 0], [88, 31]).build();
for (var i2_ = 0; i2_ <=i_; i2_++) {
	if(i2_<x.length){
		if(default_mcm160x600_array.indexOf(i2_) !== -1){} else{
	        default_mcm160x600_array.push(i2_);
	        googletag.defineSlot(default_All_Slot[Tag]["adsSlot_160x600"], default_All_Slot[Tag]["adsSlot_160x600_size"], 'div-gpt-ad-1629190633390-'+i2_).defineSizeMapping(g160x600).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
	    }
	}
}
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
setTimeout(ads_(x[i],i,Tag), 1000);
}); 
               
function ads_(elem,i,Tag){
	if(typeof elem==="undefined" || elem===""){

    }else{
				  // var ID='div-gpt-ad-1629190633390-'+i+'-'+Tag;
				  var ID='div-gpt-ad-1629190633390-'+i;
                var AdsDIV = document.createElement('DIV');
                AdsDIV.setAttribute('id', ID);
                var mainDIV = document.createElement('IRADSDIV');
                mainDIV.appendChild(AdsDIV);
                elem.appendChild(mainDIV);
                AdsDIV.appendChild(mcmgoogleadsPush(ID));
                elem.setAttribute("AdsStatus","Done");
				elem.setAttribute("Ir-Ads-Unit","160x600");
				elem.setAttribute("Ir-Ads-Unit-type","DFP");
				elem.setAttribute("Ir-Ads-Unit-tag",Tag);
}
}
// setTimeout(ads_(x[i],i,Tag), 1000);
            }        }    }}
var default_mcm120x600_array = []; 
function default_mcmIRAds_120x600(ClassName='bidmcm120x600',AdRequest=true){
var x = document.getElementsByClassName(ClassName);
var i; var delay=0;
    for (i = 0; i < x.length; i++) {
        if(isInViewport(x[i])){
            if (!x[i].hasAttribute("AdsStatus")) {
            	_120x600=parseInt(_120x600)+1;
				var unitcss="";var btncss="";var adscss=""; adsfil=false;
				var AdsEvent_='';
				if(parseInt(stopadsclick)>0){
				AdsEvent_=default_IRpointerEvents();
				}
				var Tag=default_IR_Tag;
googletag.cmd.push(function() {
i_=i;//i_=reverseNum(i-1);
var h120x600 = googletag.sizeMapping().addSize([1024, 640], [120, 600]).addSize([350, 400], [336, 280]).addSize([320, 300], [300, 250]).addSize([0, 0], [88, 31]).build();
for (var i2_ = 0; i2_ <=i_; i2_++) {
	if(i2_<x.length){
		if(default_mcm120x600_array.indexOf(i2_) !== -1){} else{
	        default_mcm120x600_array.push(i2_);
	        googletag.defineSlot(default_All_Slot[Tag]["adsSlot_120x600"], default_All_Slot[Tag]["adsSlot_120x600_size"], 'div-gpt-ad-1629190739000-'+i2_).defineSizeMapping(h120x600).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
	    }
	}
}
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
setTimeout(ads_(x[i],i,Tag), 1000);
}); 
                
function ads_(elem,i,Tag){
	if(typeof elem==="undefined" || elem===""){

    }else{
				  // var ID='div-gpt-ad-1629190739000-'+i+'-'+Tag;
				  var ID='div-gpt-ad-1629190739000-'+i;
                var AdsDIV = document.createElement('DIV');
                AdsDIV.setAttribute('id', ID);
                var mainDIV = document.createElement('IRADSDIV');
                mainDIV.appendChild(AdsDIV);
                elem.appendChild(mainDIV);
                AdsDIV.appendChild(mcmgoogleadsPush(ID));
                elem.setAttribute("AdsStatus","Done");
				elem.setAttribute("Ir-Ads-Unit","120x600");
				elem.setAttribute("Ir-Ads-Unit-type","DFP");
				elem.setAttribute("Ir-Ads-Unit-tag",Tag);
}
}
// setTimeout(ads_(x[i],i,Tag), 1000);
				}        }    }}
var default_mcm750x300_array = []; 
function default_mcmIRAds_750x300(ClassName='bidmcm750x300',AdRequest=true){
var x = document.getElementsByClassName(ClassName);
var i; var delay=0;
    for (i = 0; i < x.length; i++) {
        if(isInViewport(x[i])){
            if (!x[i].hasAttribute("AdsStatus")) {
            	_750x300=parseInt(_750x300)+1;
				var unitcss="";var btncss="";var adscss=""; adsfil=false;
				var AdsEvent_='';
				if(parseInt(stopadsclick)>0){
				AdsEvent_=default_IRpointerEvents();
				}
				var Tag=default_IR_Tag;
googletag.cmd.push(function() {
i_=i;//i_=reverseNum(i-1);
var i750x300 = googletag.sizeMapping().addSize([800, 640], [750, 300]).addSize([350, 400], [336, 280]).addSize([320, 300], [300, 250]).addSize([0, 0], [88, 31]).build();

for (var i2_ = 0; i2_ <=i_; i2_++) {
	if(i2_<x.length){
		if(default_mcm750x300_array.indexOf(i2_) !== -1){} else{
	        default_mcm750x300_array.push(i2_);
	        googletag.defineSlot(default_All_Slot[Tag]["adsSlot_750x300"], default_All_Slot[Tag]["adsSlot_750x300_size"] , 'div-gpt-ad-1629190995124-'+i2_).defineSizeMapping(i750x300).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
	    }
	}
}
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
setTimeout(ads_(x[i],i,Tag), 1000);
}); 
               
                
function ads_(elem,i,Tag){
	if(typeof elem==="undefined" || elem===""){

    }else{
				   var ID='div-gpt-ad-1629190995124-'+i;
                var AdsDIV = document.createElement('DIV');
                AdsDIV.setAttribute('id', ID);
                var mainDIV = document.createElement('IRADSDIV');
                mainDIV.appendChild(AdsDIV);
                elem.appendChild(mainDIV);
                AdsDIV.appendChild(mcmgoogleadsPush(ID));
                elem.setAttribute("AdsStatus","Done");
				elem.setAttribute("Ir-Ads-Unit","750x300");
				elem.setAttribute("Ir-Ads-Unit-type","DFP");
				elem.setAttribute("Ir-Ads-Unit-tag",Tag);
}
}
// setTimeout(ads_(x[i],i,Tag), 1000);
            }        }    }}
var default_mcm700x300_array = []; 
function default_mcmIRAds_700x300(ClassName='bidmcm700x300',AdRequest=true){
var x = document.getElementsByClassName(ClassName);
var i; var delay=0;
    for (i = 0; i < x.length; i++) {
        if(isInViewport(x[i])){
            if (!x[i].hasAttribute("AdsStatus")) {
            	_700x300=parseInt(_700x300)+1;
				var unitcss="";var btncss="";var adscss=""; adsfil=false;
				var AdsEvent_='';
				if(parseInt(stopadsclick)>0){
				AdsEvent_=default_IRpointerEvents();
				}
				var Tag=default_IR_Tag;
googletag.cmd.push(function() {
i_=i;//i_=reverseNum(i-1);
var x700x300 = googletag.sizeMapping().addSize([800, 640], [700, 300]).addSize([350, 400], [336, 280]).addSize([320, 300], [300, 250]).addSize([0, 0], [88, 31]).build();
for (var i2_ = 0; i2_ <=i_; i2_++) {
	if(i2_<x.length){
		if(default_mcm700x300_array.indexOf(i2_) !== -1){} else{
	        default_mcm700x300_array.push(i2_);
	        googletag.defineSlot(default_All_Slot[Tag]["adsSlot_700x300"], default_All_Slot[Tag]["adsSlot_700x300_size"], 'div-gpt-ad-1629190995125-'+i2_).defineSizeMapping(x700x300).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
	    }
	}
}
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
setTimeout(ads_(x[i],i,Tag), 1000);
}); 
                
function ads_(elem,i,Tag){
	if(typeof elem==="undefined" || elem===""){

    }else{
				   // var ID='div-gpt-ad-1629190995125-'+i+'-'+Tag;
				   var ID='div-gpt-ad-1629190995125-'+i;
                var AdsDIV = document.createElement('DIV');
                AdsDIV.setAttribute('id', ID);
                var mainDIV = document.createElement('IRADSDIV');
                mainDIV.appendChild(AdsDIV);
                elem.appendChild(mainDIV);
                AdsDIV.appendChild(mcmgoogleadsPush(ID));
                elem.setAttribute("AdsStatus","Done");
				elem.setAttribute("Ir-Ads-Unit","700x300");
				elem.setAttribute("Ir-Ads-Unit-type","DFP");
				elem.setAttribute("Ir-Ads-Unit-tag",Tag);
}
}
// setTimeout(ads_(x[i],i,Tag), 1000);
            }        }    }}
var default_mcm728x90_array = []; 
function default_mcmIRAds_728x90(ClassName='bidmcm728x90',AdRequest=true){
var x = document.getElementsByClassName(ClassName);
var i; var delay=0;
    for (i = 0; i < x.length; i++) {
        if(isInViewport(x[i])){
            if (!x[i].hasAttribute("AdsStatus")) {
            	_728x90=parseInt(_728x90)+1;
				var unitcss="";var btncss="";var adscss=""; adsfil=false;
				var AdsEvent_='';
				if(parseInt(stopadsclick)>0){
				AdsEvent_=default_IRpointerEvents();
				}
				var Tag=default_IR_Tag;
googletag.cmd.push(function() {
i_=i;//i_=reverseNum(i-1);
var l728x90 = googletag.sizeMapping().addSize([728, 440], [728, 90]).addSize([350, 400], [336, 280]).addSize([320, 300], [300, 250]).addSize([0, 0], [88, 31]).build();
for (var i2_ = 0; i2_ <=i_; i2_++) {
	if(i2_<x.length){
		if(default_mcm728x90_array.indexOf(i2_) !== -1){} else{
	        default_mcm728x90_array.push(i2_);
	        googletag.defineSlot(default_All_Slot[Tag]["adsSlot_728x90"], default_All_Slot[Tag]["adsSlot_728x90_size"], 'div-gpt-ad-1629189345220-'+i2_).defineSizeMapping(l728x90).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
	    }
	}
}
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
setTimeout(ads_(x[i],i,Tag), 1000);
}); 
               
function ads_(elem,i,Tag){
	if(typeof elem==="undefined" || elem===""){

    }else{
				   // var ID='div-gpt-ad-1629189345220-'+i+'-'+Tag;
				   var ID='div-gpt-ad-1629189345220-'+i;
                var AdsDIV = document.createElement('DIV');
                AdsDIV.setAttribute('id', ID);
                var mainDIV = document.createElement('IRADSDIV');
                mainDIV.appendChild(AdsDIV);
                elem.appendChild(mainDIV);
                AdsDIV.appendChild(mcmgoogleadsPush(ID));
                elem.setAttribute("AdsStatus","Done");
				elem.setAttribute("Ir-Ads-Unit","728x90");
				elem.setAttribute("Ir-Ads-Unit-type","DFP");
				elem.setAttribute("Ir-Ads-Unit-tag",Tag);
}
}
// setTimeout(ads_(x[i],i,Tag), 1000);				
            }        }    }}

var default_mcm728x90atf_array = []; 
function default_mcmIRAds_728x90ATF(ClassName='bidmcm728x90atf',AdRequest=true){
var x = document.getElementsByClassName(ClassName);
var i; var delay=0;
    for (i = 0; i < x.length; i++) {
        if(isInViewport(x[i])){
            if (!x[i].hasAttribute("AdsStatus")) {
            	_728x90=parseInt(_728x90)+1;
				var unitcss="";var btncss="";var adscss=""; adsfil=false;
				var AdsEvent_='';
				if(parseInt(stopadsclick)>0){
				AdsEvent_=default_IRpointerEvents();
				}
				var Tag=default_IR_Tag;
googletag.cmd.push(function() {
i_=i;//i_=reverseNum(i-1);
var atf728x90 = googletag.sizeMapping().addSize([728, 640], [728, 90]).addSize([350, 400], [320, 100]).addSize([320, 300], [320, 100]).addSize([0, 0], [88, 31]).build();
for (var i2_ = 0; i2_ <=i_; i2_++) {
	if(i2_<x.length){
		if(default_mcm728x90atf_array.indexOf(i2_) !== -1){} else{
	        default_mcm728x90atf_array.push(i2_);
	        googletag.defineSlot(default_All_Slot[Tag]["adsSlot_728x90atf"], default_All_Slot[Tag]["adsSlot_728x90atf_size"], 'div-gpt-ad-1635389345011-'+i2_).defineSizeMapping(atf728x90).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
	    }
	}
}
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
setTimeout(ads_(x[i],i,Tag), 1000);
}); 
               
function ads_(elem,i,Tag){
	if(typeof elem==="undefined" || elem===""){

    }else{
				   var ID='div-gpt-ad-1635389345011-'+i;
                var AdsDIV = document.createElement('DIV');
                AdsDIV.setAttribute('id', ID);
                var mainDIV = document.createElement('IRADSDIV');
                mainDIV.appendChild(AdsDIV);
                elem.appendChild(mainDIV);
                AdsDIV.appendChild(mcmgoogleadsPush(ID));
                elem.setAttribute("AdsStatus","Done");
				elem.setAttribute("Ir-Ads-Unit","728x90atf");
				elem.setAttribute("Ir-Ads-Unit-type","DFP");
				elem.setAttribute("Ir-Ads-Unit-tag",Tag);
}
}
// setTimeout(ads_(x[i],i,Tag), 1000);				
            }        }    }}
var default_mcm650x300_array = []; 
function default_mcmIRAds_650x300(ClassName='bidmcm650x300',AdRequest=true){
var x = document.getElementsByClassName(ClassName);
var i; var delay=0;
    for (i = 0; i < x.length; i++) {
        if(isInViewport(x[i])){
            if (!x[i].hasAttribute("AdsStatus")) {
            	_650x300=parseInt(_650x300)+1;
				var unitcss="";var btncss="";var adscss=""; adsfil=false;
				var AdsEvent_='';
				if(parseInt(stopadsclick)>0){
				AdsEvent_=default_IRpointerEvents();
				}
				var Tag=default_IR_Tag;
googletag.cmd.push(function() {
i_=i;//i_=reverseNum(i-1);
var u650x300 = googletag.sizeMapping().addSize([800, 640], [650, 300]).addSize([350, 400], [336, 280]).addSize([320, 300], [300, 250]).addSize([0, 0], [88, 31]).build();
for (var i2_ = 0; i2_ <=i_; i2_++) {
	if(i2_<x.length){
		if(default_mcm650x300_array.indexOf(i2_) !== -1){} else{
	        default_mcm650x300_array.push(i2_);
	        googletag.defineSlot(default_All_Slot[Tag]["adsSlot_650x300"], default_All_Slot[Tag]["adsSlot_650x300_size"], 'div-gpt-ad-1631535408781-'+i2_).defineSizeMapping(u650x300).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
	    }
	}
}
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
setTimeout(ads_(x[i],i,Tag), 1000);
}); 
                
function ads_(elem,i,Tag){
	if(typeof elem==="undefined" || elem===""){

    }else{
				   var ID='div-gpt-ad-1631535408781-'+i;
                var AdsDIV = document.createElement('DIV');
                AdsDIV.setAttribute('id', ID);
                var mainDIV = document.createElement('IRADSDIV');
                mainDIV.appendChild(AdsDIV);
                elem.appendChild(mainDIV);
                AdsDIV.appendChild(mcmgoogleadsPush(ID));
                elem.setAttribute("AdsStatus","Done");
				elem.setAttribute("Ir-Ads-Unit","650x300");
				elem.setAttribute("Ir-Ads-Unit-type","DFP");
				elem.setAttribute("Ir-Ads-Unit-tag",Tag);
}
}
// setTimeout(ads_(x[i],i,Tag), 1000);					
            }        }    }}
var default_mcm320x50_array = []; 
function default_mcmIRAds_320x50(ClassName='bidmcm320x50',AdRequest=true){
var x = document.getElementsByClassName(ClassName);
var i; var delay=0;
    for (i = 0; i < x.length; i++) {
        if(isInViewport(x[i])){
            if (!x[i].hasAttribute("AdsStatus")) {
            	_320x100=parseInt(_320x100)+1;
				var unitcss="";var btncss="";var adscss=""; adsfil=false;
				var AdsEvent_='';
				if(parseInt(stopadsclick)>0){
				AdsEvent_=default_IRpointerEvents();
				}
				var Tag=default_IR_Tag;
googletag.cmd.push(function() {
i_=i;//i_=reverseNum(i-1);
var v320x50 = googletag.sizeMapping().addSize([320, 250], [320, 50]).addSize([0, 0], [88, 31]).build();

for (var i2_ = 0; i2_ <=i_; i2_++) {
	if(i2_<x.length){
		if(default_mcm320x50_array.indexOf(i2_) !== -1){} else{
	        default_mcm320x50_array.push(i2_);
	        	googletag.defineSlot(default_All_Slot[Tag]["adsSlot_320x50"], default_All_Slot[Tag]["adsSlot_320x50_size"], 'div-gpt-ad-1631536095697-'+i2_).defineSizeMapping(v320x50).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
	    }
	}
}
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
setTimeout(ads_(x[i],i,Tag), 1000);
}); 
              
function ads_(elem,i,Tag){
	if(typeof elem==="undefined" || elem===""){

    }else{
				    // var ID='div-gpt-ad-1631536095697-'+i+'-'+Tag;
				    var ID='div-gpt-ad-1631536095697-'+i;
                var AdsDIV = document.createElement('DIV');
                AdsDIV.setAttribute('id', ID);
                var mainDIV = document.createElement('IRADSDIV');
                mainDIV.appendChild(AdsDIV);
                elem.appendChild(mainDIV);
                AdsDIV.appendChild(mcmgoogleadsPush(ID));
                elem.setAttribute("AdsStatus","Done");
				elem.setAttribute("Ir-Ads-Unit","320x100");
				elem.setAttribute("Ir-Ads-Unit-type","DFP");
				elem.setAttribute("Ir-Ads-Unit-tag",Tag);
}
}
// setTimeout(ads_(x[i],i,Tag), 1000);					
            }
        }
    }
}
var default_mmcm320x100_array = []; 
function default_mcmIRAds_320x100(ClassName='bidmcm320x100',AdRequest=true){
var x = document.getElementsByClassName(ClassName);
var i; var delay=0;
    for (i = 0; i < x.length; i++) {
        if(isInViewport(x[i])){
            if (!x[i].hasAttribute("AdsStatus")) {
            	_320x100=parseInt(_320x100)+1;
				var unitcss="";var btncss="";var adscss=""; adsfil=false;
				var AdsEvent_='';
				if(parseInt(stopadsclick)>0){
				AdsEvent_=default_IRpointerEvents();
				}
				var Tag=default_IR_Tag;
googletag.cmd.push(function() {
i_=i;//i_=reverseNum(i-1);
var w320x100 = googletag.sizeMapping().addSize([320, 250], [320, 100]).addSize([0, 0], [88, 31]).build();
for (var i2_ = 0; i2_ <=i_; i2_++) {
	if(i2_<x.length){
		if(default_mmcm320x100_array.indexOf(i2_) !== -1){} else{
	        default_mmcm320x100_array.push(i2_);
	        googletag.defineSlot(default_All_Slot[Tag]["adsSlot_320x100"], default_All_Slot[Tag]["adsSlot_320x100_size"], 'div-gpt-ad-1631608042214-'+i2_).defineSizeMapping(w320x100).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());

	    }
	}
}
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
setTimeout(ads_(x[i],i,Tag), 1000);
}); 
                
function ads_(elem,i,Tag){
	if(typeof elem==="undefined" || elem===""){

    }else{
				    // var ID='div-gpt-ad-1631608042214-'+i+'-'+Tag;
				    var ID='div-gpt-ad-1631608042214-'+i;
                var AdsDIV = document.createElement('DIV');
                AdsDIV.setAttribute('id', ID);
                var mainDIV = document.createElement('IRADSDIV');
                mainDIV.appendChild(AdsDIV);
                elem.appendChild(mainDIV);
                AdsDIV.appendChild(mcmgoogleadsPush(ID));
                elem.setAttribute("AdsStatus","Done");
				elem.setAttribute("Ir-Ads-Unit","320x100");
				elem.setAttribute("Ir-Ads-Unit-type","DFP");
				elem.setAttribute("Ir-Ads-Unit-tag",Tag);
}
}
// setTimeout(ads_(x[i],i,Tag), 1000);					
            }        } }}
var default_mcm336x280atf_array = []; 
function default_mcmIRAds_atf336x280(ClassName='bidmcm336x280atf',AdRequest=true){
var x = document.getElementsByClassName(ClassName);
var i; var delay=0;
    for (i = 0; i < x.length; i++) {
        if(isInViewport(x[i])){
            if (!x[i].hasAttribute("AdsStatus")) {
            	_336x280=parseInt(_336x280)+1;
				var unitcss="";var btncss="";var adscss=""; adsfil=false;
				var AdsEvent_='';
				if(parseInt(stopadsclick)>0){
				AdsEvent_=default_IRpointerEvents();
				}
				var Tag=default_IR_Tag;
googletag.cmd.push(function() {
i_=i;//i_=reverseNum(i-1);
var atf336x280 = googletag.sizeMapping().addSize([640, 400], [336, 280]).addSize([320, 300], [320, 100]).addSize([0, 0], [88, 31]).build();

for (var i2_ = 0; i2_ <=i_; i2_++) {
	if(i2_<x.length){
		if(default_mcm336x280atf_array.indexOf(i2_) !== -1){} else{
	        default_mcm336x280atf_array.push(i2_);
	        googletag.defineSlot(default_All_Slot[Tag]["adsSlot_336x280atf"], default_All_Slot[Tag]["adsSlot_336x280atf_size"], 'div-gpt-ad-1631536513935-'+i2_).defineSizeMapping(atf336x280).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
	    }
	}
}
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
setTimeout(ads_(x[i],i,Tag), 1000);
}); 
                
function ads_(elem,i,Tag){
	if(typeof elem==="undefined" || elem===""){

    }else{
				   // var ID='div-gpt-ad-1631536513935-'+i+'-'+Tag;
				   var ID='div-gpt-ad-1631536513935-'+i;
                var AdsDIV = document.createElement('DIV');
                AdsDIV.setAttribute('id', ID);
               var mainDIV = document.createElement('IRADSDIV');
                mainDIV.appendChild(AdsDIV);
                elem.appendChild(mainDIV);
                AdsDIV.appendChild(mcmgoogleadsPush(ID));
                elem.setAttribute("AdsStatus","Done");
				elem.setAttribute("Ir-Ads-Unit","336x280");
				elem.setAttribute("Ir-Ads-Unit-type","DFP");
				elem.setAttribute("Ir-Ads-Unit-tag",Tag);
}
}
// setTimeout(ads_(x[i],i,Tag), 1000);					
            }
        }
    }
}
function default_mcmIRAds_sticky120x600($this='',ClassName='bidmcms120x600',AdRequest=true){
var x = document.getElementsByClassName(ClassName); var i; var delay=0;
var continer=document.querySelector(".container");
var cWidth=0;
if(continer){ cWidth=continer.clientWidth; }
var width_=parseInt(increaserevWidth)-parseInt(cWidth);
for (i = 0; i < x.length; i++) {
if (!x[i].hasAttribute("AdsStatus")) {var BtnText='Close';
var positionCheck=x[i].hasAttribute("IR-position"); var position="";
if(positionCheck){position=x[i].getAttribute("IR-position");position = position.replace(/\s/g, '');position = position.split(",");  }
if (x[i].hasAttribute("IR-Btn-Text")) { BtnText=x[i].getAttribute("IR-Btn-Text"); }
if(BtnText=='' || BtnText==null){BtnText='Close';}
var unitcss="";var btncss="";var adscss=""; adsfil=false; var AdsEvent_='';
var AdsCheck=x[i].hasAttribute("IR-Ads"); var AdsCount=1;
if(AdsCheck){AdsCount=x[i].getAttribute("IR-Ads");}
var height="100px";
if( position.includes("mh50") ){height="50px";}
var unitcss1='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; bottom:0px; left:0px; transform: translateX(0.02%);padding:5px;"';  
var adscss1='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';
var btncss1='';
var asdsty1='style="clear: none !important;display: block !important;float: none !important;height: 5px !important;margin: 0px !important;max-height: none !important;top: -2px;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 101% !important;background-color: rgb(250, 250, 250) !important;box-shadow: 0 4px 2px -2px grey;"';
var asdsty1='';
var adsleftsty1='style="clear: none !important;display: block !important;float: none !important;height: 100% !important;margin: 0px !important;max-height: none !important;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: -1px 0px 3px 0px grey;"';
var adsleftsty1='';
var adsrightsty1='style="clear: none !important;margin-left: 0;display: block !important;float: right !important;height: 100% !important;margin: 0px !important;max-height: none !important;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;right: -0.8%;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: 2px 0 5px -2px grey;"';
var adsrightsty1='';
var foterclosebtn1='<b onclick="" style="cursor: pointer;margin: 0px !important;position: absolute !important;top: -26px !important;right: 0% !important;display: block !important;width: 28px !important;text-align: center;padding: 4px;min-height: 15px;height: auto !important;max-height: 24px;pointer-events: initial !important;background-color: rgb(250, 250, 250) !important;box-shadow: -3px -3px 5px -1px grey;"><svg style="vertical-align: text-top;fill: rgb(97, 97, 97);width: 14px !important;height: 14px !important;" height="365.696pt" viewBox="0 0 365.696 365.696" width="365.696pt" xmlns=""><path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"/></svg></b>';
var unitcss2='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; bottom:0px; right:0px; transform: translateX(0.02%);padding:5px;"';  
var adscss2='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';
var btncss2='';var asdsty2='';var adsleftsty2='';var adsrightsty2='';
var foterclosebtn1='<b><svg style="cursor: pointer;margin: 0px !important; position: absolute !important; top:-25px !important; right: 0% !important; display: block !important; width: 60px !important; height: 30px !important; transform: rotate(180deg) !important; pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottoms" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottoms)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="22" y1="5" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></line></line><line x1="28" y1="12" x2="34" y2="5"><line></line></line></g></svg></b>';
var foterclosebtn2='<b><svg style="cursor: pointer;margin: 0px !important; position: absolute !important; top:-25px !important; left: 0% !important; display: block !important; width: 60px !important; height: 30px !important; transform:rotate(180deg) scaleX(-1) !important; pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottomrs" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottomrs)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="22" y1="5" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></line></line><line x1="28" y1="12" x2="34" y2="5"><line></line></line></g></svg></b>';
var events_1='onclick="IRCloseDIVLeft(this)"';
var events_2='onclick="IRCloseDIVRight(this)"';
if(increaserevWidth>=1480){
var adscss1='style="display:inline-block;max-width:160px; min-width:100px; width:auto;height:600px;'+AdsEvent_+'" ';
adscss2='style="display:inline-block;max-width:160px; min-width:100px; width:auto;height:600px;'+AdsEvent_+'" ';

if(parseInt(width_)>=337){
    var adscss1='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';
    adscss2='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';    
  }else if(parseInt(width_)>=257){
    var adscss1='style="display:inline-block;width:120px;height:600px;'+AdsEvent_+'" ';
    adscss2='style="display:inline-block;width:120px;height:600px;'+AdsEvent_+'" '; 
  }else if(parseInt(width_)>=217){
    var adscss1='style="display:inline-block;width:100px;height:600px;'+AdsEvent_+'" ';
    adscss2='style="display:inline-block;width:100px;height:600px;'+AdsEvent_+'" '; 
  }else{
    unitcss1='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; bottom:-1px; width:728px; left:50%; transform: translateX(-50%)"'; 
    adscss1='style="display:inline-block;width:728px;height:90px;'+AdsEvent_+'" ';
    btncss1='style="position:fixed; text-shadow: 1px 1px 5px black, 0 0 5px black, 0 0 5px black; font-size:17px; font-family:arial; cursor: pointer; top:-22px; right:0%; color:white;"';
    var asdsty1='style="clear: none !important;display: block !important;float: none !important;height: 5px !important;margin: 0px !important;max-height: none !important;top: 0;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 101% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;"';
    var adsleftsty1='style="clear: none !important;display: block !important;float: none !important;height: 100% !important;margin: 0px !important;max-height: none !important;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: -1px 0px 3px 0px grey;"';
    var adsrightsty1='style="clear: none !important;margin-left: 0;display: block !important;float: right !important;height: 100% !important;margin: 0px !important;max-height: none !important;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;right: -0.8%;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: 2px 0 5px -2px grey;"';
    foterclosebtn1='<b><svg onclick="IRCloseDIVBottom(this,2)" style="cursor: pointer;margin: 0px !important; position: absolute !important; top: -25px !important; right: -0.6% !important; display: block !important; width: 80px !important; height: 30px !important;transform: rotate(180deg); pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottom3" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottom3)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></g></svg></b>';
    events_1="";
    adscss2='style="display:inline-block;width:120px;height:600px;'+AdsEvent_+'" ';
  }
}else if(increaserevWidth>=768){
unitcss1='style="height: 105px !important; padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; bottom:-1px; width:728px; left:50%; transform: translateX(-50%)"'; 
adscss1='style="display:inline-block;width:728px;height:90px;'+AdsEvent_+'" ';
btncss1='style="position:fixed; text-shadow: 1px 1px 5px black, 0 0 5px black, 0 0 5px black; font-size:17px; font-family:arial; cursor: pointer; top:-22px; right:0%; color:white;"';
var asdsty1='style="clear: none !important;display: block !important;float: none !important;height: 5px !important;margin: 0px !important;max-height: none !important;top: 0;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 101% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;"';
var adsleftsty1='style="clear: none !important;display: block !important;float: none !important;height: 100% !important;margin: 0px !important;max-height: none !important;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: -1px 0px 3px 0px grey;"';
var adsrightsty1='style="clear: none !important;margin-left: 0;display: block !important;float: right !important;height: 100% !important;margin: 0px !important;max-height: none !important;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;right: -0.8%;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: 2px 0 5px -2px grey;"';
foterclosebtn1='<b><svg onclick="IRCloseDIVBottom(this,2)" style="cursor: pointer;margin: 0px !important; position: absolute !important; top: -25px !important; right: -0.6% !important; display: block !important; width: 80px !important; height: 30px !important;transform: rotate(180deg); pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottom3" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottom3)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></g></svg></b>';
events_1="";
adscss2='style="display:inline-block;width:120px;height:600px;'+AdsEvent_+'" ';
}else{
AdsCount=1;
var adscss1='style="display:inline-block;min-width:250px;max-width:98%;width:98%;height:'+height+';'+AdsEvent_+'" ';
var asdsty1='style="clear: none !important;display: block !important;float: none !important;height: 5px !important;margin: 0px !important;max-height: none !important;top: 0;left: 0px;max-width: 99.5% !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 99.5% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;"';
unitcss1='style="padding: 3px;padding-top: 5px;height: auto;max-height: 108px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; bottom:-1px; width: 100%;max-width: 100%; left:50%; transform: translateX(-50%)"';  
foterclosebtn1='<b><svg onclick="IRCloseDIVBottom(this,2)" style="cursor: pointer;margin: 0px !important; position: absolute !important; top: -25px !important; right: -0.6% !important; display: block !important; width: 80px !important; height: 30px !important;transform: rotate(180deg); pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottom4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottom4)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></g></svg></b>';
events_1="";
if( position.includes("top") ){
        unitcss1='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; top:-1px; width:320px; left:50%; transform: translateX(-50%)"';  
        var asdsty1='style="left: 0%;bottom: -3px;transform: scaleX(-1);clear: none !important;display: block !important;float: none !important;height: 5px !important;margin: 0px !important;max-height: none !important;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 100% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: 0 4px 2px -2px grey;"';
        foterclosebtn1='<b><svg onclick="IRCloseDIVTop(this,2)" style="cursor: pointer;margin: 0px !important; position: absolute !important; top: 0px !important; left: 0% !important; display: block !important; width: 80px !important; height: 30px !important; transform: none !important; pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottom" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottom)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></g></svg></b>';
}}
var dexktop=true;var tablet=true;var mobile=true;
if(position.includes("do")){dexktop=true;tablet=false;mobile=false;}
else if(position.includes("to")){dexktop=false;tablet=true;mobile=false;}
else if(position.includes("mo")){dexktop=false;tablet=false;mobile=true;}
if( position.includes("do") && position.includes("to") && position.includes("mo")){ dexktop=true;tablet=true;mobile=true;}
else if( position.includes("do") && position.includes("to") ){ dexktop=true;tablet=true;mobile=false;}
else if( position.includes("do") && position.includes("mo") ){ dexktop=true;tablet=false;mobile=true;}
else if( position.includes("to") && position.includes("mo") ){ dexktop=false;tablet=true;mobile=true;}
var adsshow=false;
if(increaserevWidth>=1300){if(dexktop){adsshow=true;}
}else if(increaserevWidth>=768){if(tablet){adsshow=false;}
}else{if(mobile){adsshow=false;}}
if (x[i].hasAttribute("IR-Tag")) {  var Tag=x[i].getAttribute("IR-Tag"); }
else{ var Tag=default_IR_Tag; }

googletag.cmd.push(function() {
i_=i;//i_=reverseNum(i-1);
var t120x600rs = googletag.sizeMapping().addSize([1480, 600], [160, 600]).addSize([1367, 600], [120, 600]).addSize([768, 340], [728, 90]).addSize([320, 400], [320, 100]).addSize([300, 300], [300, 50]).addSize([0, 0], [88, 31]).build();
var k120x600s = googletag.sizeMapping().addSize([1480, 600], [160, 600]).addSize([1367, 600], [120, 600]).addSize([768, 340], [728, 90]).addSize([320, 400], [320, 100]).addSize([300, 300], [300, 50]).addSize([0, 0], [88, 31]).build();

// for (var i2_ = 0; i2_ <i; i2_++) {
	googletag.defineSlot(default_All_Slot[Tag]["adsSlot_s120x600"], default_All_Slot[Tag]["adsSlot_s120x600_size"], 'div-gpt-ad-1629191771690-0-a').defineSizeMapping(k120x600s).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
	googletag.defineSlot(default_All_Slot[Tag]["adsSlot_s120x600"], default_All_Slot[Tag]["adsSlot_s120x600_size"], 'div-gpt-ad-1629191771690-1-a').defineSizeMapping(k120x600s).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
// }
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
}); 

var id1='div-gpt-ad-1629191771690-0-a';
var id2='div-gpt-ad-1629191771690-1-a';
var divleft=document.createElement("div");
divleft.innerHTML='<iradsdiv class="InMargin_Top" '+unitcss1+'><div class="left" '+adsleftsty1+'></div><div class="right" '+adsrightsty1+'></div><div '+asdsty1+'  '+events_1+'> '+foterclosebtn1+' </div><div '+adscss1+'><div id="'+id1+'"></div></div></iradsdiv>';
divleft.appendChild(mcmgoogleadsPush(id1));
var divright=document.createElement("div");
divright.innerHTML='<iradsdiv class="InMargin_Top" '+unitcss2+'><div class="left" '+adsleftsty2+'></div><div class="right" '+adsrightsty2+'></div><div '+asdsty2+' '+events_2+'> '+foterclosebtn2+' </div><div '+adscss2+'><div id="'+id2+'"></div></div></iradsdiv>';
divright.appendChild(mcmgoogleadsPush(id2));
// if(adsshow){
//     if(position.includes("rightonly")){if(AdsCount>=2){  x[i].appendChild(divright); }
//     }else{if(AdsCount>=2){  x[i].appendChild(divright); }}}
//      x[i].appendChild(divleft);
// x[i].setAttribute("AdsStatus","Done");
// x[i].setAttribute("Ir-Ads-Unit","s120x600");
// x[i].setAttribute("Ir-Ads-Unit-tag",Tag);

function ads_(elem,adsshow,position,AdsCount,divleft,divright,Tag){

if(typeof elem==="undefined" || elem===""){

    }else{
	if(adsshow){
    if(position.includes("rightonly")){if(AdsCount>=2){  elem.appendChild(divright); }
    }else{if(AdsCount>=2){  elem.appendChild(divright); }}}
     elem.appendChild(divleft);
elem.setAttribute("AdsStatus","Done");
elem.setAttribute("Ir-Ads-Unit","s120x600");
elem.setAttribute("Ir-Ads-Unit-tag",Tag);

				//    // var ID='div-gpt-ad-1631536513935-'+i+'-'+Tag;
				//    var ID='div-gpt-ad-1631536513935-'+i;
    //             var AdsDIV = document.createElement('DIV');
    //             AdsDIV.setAttribute('id', ID);
    //            var mainDIV = document.createElement('IRADSDIV');
    //             mainDIV.appendChild(AdsDIV);
    //             elem.appendChild(mainDIV);
    //             AdsDIV.appendChild(mcmgoogleadsPush(ID));
    //             elem.setAttribute("AdsStatus","Done");
				// elem.setAttribute("Ir-Ads-Unit","336x280");
				// elem.setAttribute("Ir-Ads-Unit-type","DFP");
				// elem.setAttribute("Ir-Ads-Unit-tag",Tag);
}
}
setTimeout(ads_(x[i],adsshow,position,AdsCount,divleft,divright,Tag), 1000);	

}
}}
function default_mcmIRAds_sticky160x600($this='',ClassName='bidmcms160x600',AdRequest=true){
var x = document.getElementsByClassName(ClassName); var i; var delay=0;
var continer=document.querySelector(".container");
var cWidth=0;
if(continer){ cWidth=continer.clientWidth; }
var width_=parseInt(increaserevWidth)-parseInt(cWidth);
for (i = 0; i < x.length; i++) {
if (!x[i].hasAttribute("AdsStatus")) {var BtnText='Close';
var positionCheck=x[i].hasAttribute("IR-position"); var position="";
if(positionCheck){position=x[i].getAttribute("IR-position");position = position.replace(/\s/g, '');position = position.split(",");  }
if (x[i].hasAttribute("IR-Btn-Text")) { BtnText=x[i].getAttribute("IR-Btn-Text"); }
if(BtnText=='' || BtnText==null){BtnText='Close';}
var unitcss="";var btncss="";var adscss=""; adsfil=false; var AdsEvent_='';
var AdsCheck=x[i].hasAttribute("IR-Ads"); var AdsCount=1;
if(AdsCheck){AdsCount=x[i].getAttribute("IR-Ads");}
var height="100px";
if( position.includes("mh50") ){height="50px";}
var unitcss1='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; bottom:0px; left:0px; transform: translateX(0.02%);padding:5px;"';  
var adscss1='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';
var btncss1='';
var asdsty1='style="clear: none !important;display: block !important;float: none !important;height: 5px !important;margin: 0px !important;max-height: none !important;top: -2px;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 101% !important;background-color: rgb(250, 250, 250) !important;box-shadow: 0 4px 2px -2px grey;"';
var asdsty1='';
var adsleftsty1='style="clear: none !important;display: block !important;float: none !important;height: 100% !important;margin: 0px !important;max-height: none !important;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: -1px 0px 3px 0px grey;"';
var adsleftsty1='';
var adsrightsty1='style="clear: none !important;margin-left: 0;display: block !important;float: right !important;height: 100% !important;margin: 0px !important;max-height: none !important;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;right: -0.8%;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: 2px 0 5px -2px grey;"';
var adsrightsty1='';
var foterclosebtn1='<b onclick="" style="cursor: pointer;margin: 0px !important;position: absolute !important;top: -26px !important;right: 0% !important;display: block !important;width: 28px !important;text-align: center;padding: 4px;min-height: 15px;height: auto !important;max-height: 24px;pointer-events: initial !important;background-color: rgb(250, 250, 250) !important;box-shadow: -3px -3px 5px -1px grey;"><svg style="vertical-align: text-top;fill: rgb(97, 97, 97);width: 14px !important;height: 14px !important;" height="365.696pt" viewBox="0 0 365.696 365.696" width="365.696pt" xmlns=""><path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"/></svg></b>';
var unitcss2='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; bottom:0px; right:0px; transform: translateX(0.02%);padding:5px;"';  
var adscss2='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';
var btncss2='';var asdsty2='';var adsleftsty2='';var adsrightsty2='';
var foterclosebtn1='<b><svg style="cursor: pointer;margin: 0px !important; position: absolute !important; top:-25px !important; right: 0% !important; display: block !important; width: 60px !important; height: 30px !important; transform: rotate(180deg) !important; pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottoms" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottoms)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="22" y1="5" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></line></line><line x1="28" y1="12" x2="34" y2="5"><line></line></line></g></svg></b>';
var foterclosebtn2='<b><svg style="cursor: pointer;margin: 0px !important; position: absolute !important; top:-25px !important; left: 0% !important; display: block !important; width: 60px !important; height: 30px !important; transform:rotate(180deg) scaleX(-1) !important; pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottomrs" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottomrs)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="22" y1="5" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></line></line><line x1="28" y1="12" x2="34" y2="5"><line></line></line></g></svg></b>';
var events_1='onclick="IRCloseDIVLeft(this)"';
var events_2='onclick="IRCloseDIVRight(this)"';
if(increaserevWidth>=1280){
var adscss1='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';
adscss2='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';
if(parseInt(width_)>=337){
    var adscss1='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';
    adscss2='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';    
  }else if(parseInt(width_)>=257){
    var adscss1='style="display:inline-block;width:120px;height:600px;'+AdsEvent_+'" ';
    adscss2='style="display:inline-block;width:120px;height:600px;'+AdsEvent_+'" '; 
  }else if(parseInt(width_)>=217){
    var adscss1='style="display:inline-block;width:100px;height:600px;'+AdsEvent_+'" ';
    adscss2='style="display:inline-block;width:100px;height:600px;'+AdsEvent_+'" '; 
  }else{
    unitcss1='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; bottom:-1px; width:728px; left:50%; transform: translateX(-50%)"'; 
    adscss1='style="display:inline-block;width:728px;height:90px;'+AdsEvent_+'" ';
    btncss1='style="position:fixed; text-shadow: 1px 1px 5px black, 0 0 5px black, 0 0 5px black; font-size:17px; font-family:arial; cursor: pointer; top:-22px; right:0%; color:white;"';
    var asdsty1='style="clear: none !important;display: block !important;float: none !important;height: 5px !important;margin: 0px !important;max-height: none !important;top: 0;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 101% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;"';
    var adsleftsty1='style="clear: none !important;display: block !important;float: none !important;height: 100% !important;margin: 0px !important;max-height: none !important;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: -1px 0px 3px 0px grey;"';
    var adsrightsty1='style="clear: none !important;margin-left: 0;display: block !important;float: right !important;height: 100% !important;margin: 0px !important;max-height: none !important;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;right: -0.8%;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: 2px 0 5px -2px grey;"';
    foterclosebtn1='<b><svg onclick="IRCloseDIVBottom(this,2)" style="cursor: pointer;margin: 0px !important; position: absolute !important; top: -25px !important; right: -0.6% !important; display: block !important; width: 80px !important; height: 30px !important;transform: rotate(180deg); pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottom3" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottom3)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></g></svg></b>';
    events_1="";
    adscss2='style="display:inline-block;width:120px;height:600px;'+AdsEvent_+'" ';
  }
}else if(increaserevWidth>=768){
unitcss1='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; bottom:-1px; width:728px; left:50%; transform: translateX(-50%)"'; 
adscss1='style="display:inline-block;width:728px;height:90px;'+AdsEvent_+'" ';
btncss1='style="position:fixed; text-shadow: 1px 1px 5px black, 0 0 5px black, 0 0 5px black; font-size:17px; font-family:arial; cursor: pointer; top:-22px; right:0%; color:white;"';
var asdsty1='style="clear: none !important;display: block !important;float: none !important;height: 5px !important;margin: 0px !important;max-height: none !important;top: 0;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 101% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;"';
var adsleftsty1='style="clear: none !important;display: block !important;float: none !important;height: 100% !important;margin: 0px !important;max-height: none !important;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: -1px 0px 3px 0px grey;"';
var adsrightsty1='style="clear: none !important;margin-left: 0;display: block !important;float: right !important;height: 100% !important;margin: 0px !important;max-height: none !important;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;right: -0.8%;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: 2px 0 5px -2px grey;"';
foterclosebtn1='<b><svg onclick="IRCloseDIVBottom(this,2)" style="cursor: pointer;margin: 0px !important; position: absolute !important; top: -25px !important; right: -0.6% !important; display: block !important; width: 80px !important; height: 30px !important;transform: rotate(180deg); pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottom3" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottom3)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></g></svg></b>';
events_1="";
adscss2='style="display:inline-block;width:120px;height:600px;'+AdsEvent_+'" ';
}else{
AdsCount=1;
var adscss1='style="display:inline-block;min-width:250px;max-width:320px;width:100%;height:'+height+';'+AdsEvent_+'" ';
var asdsty1='style="clear: none !important;display: block !important;float: none !important;height: 5px !important;margin: 0px !important;max-height: none !important;top: 0;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 101% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;"';
unitcss1='style="padding: 3px;padding-top: 5px;height: auto;max-height: 108px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; bottom:-1px; width: 100%;max-width: 100%; left:50%; transform: translateX(-50%)"';  
foterclosebtn1='<b><svg onclick="IRCloseDIVBottom(this,2)" style="cursor: pointer;margin: 0px !important; position: absolute !important; top: -25px !important; right: -0.6% !important; display: block !important; width: 80px !important; height: 30px !important;transform: rotate(180deg); pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottom4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottom4)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></g></svg></b>';
events_1="";
if( position.includes("top") ){
        unitcss1='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; top:-1px; width:320px; left:50%; transform: translateX(-50%)"';  
        var asdsty1='style="left: 0%;bottom: -3px;transform: scaleX(-1);clear: none !important;display: block !important;float: none !important;height: 5px !important;margin: 0px !important;max-height: none !important;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 100% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: 0 4px 2px -2px grey;"';
        foterclosebtn1='<b><svg onclick="IRCloseDIVTop(this,2)" style="cursor: pointer;margin: 0px !important; position: absolute !important; top: 0px !important; left: 0% !important; display: block !important; width: 80px !important; height: 30px !important; transform: none !important; pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottom" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottom)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></g></svg></b>';
}}
var dexktop=true;var tablet=true;var mobile=true;
if(position.includes("do")){dexktop=true;tablet=false;mobile=false;}
else if(position.includes("to")){dexktop=false;tablet=true;mobile=false;}
else if(position.includes("mo")){dexktop=false;tablet=false;mobile=true;}
if( position.includes("do") && position.includes("to") && position.includes("mo")){ dexktop=true;tablet=true;mobile=true;}
else if( position.includes("do") && position.includes("to") ){ dexktop=true;tablet=true;mobile=false;}
else if( position.includes("do") && position.includes("mo") ){ dexktop=true;tablet=false;mobile=true;}
else if( position.includes("to") && position.includes("mo") ){ dexktop=false;tablet=true;mobile=true;}
var adsshow=false;
if(increaserevWidth>=1250){if(dexktop){adsshow=true;}
}else if(increaserevWidth>=767){if(tablet){adsshow=true;}
}else{if(mobile){adsshow=true;}}
if (x[i].hasAttribute("IR-Tag")) {  var Tag=x[i].getAttribute("IR-Tag"); }
else{ var Tag=default_IR_Tag; }

googletag.cmd.push(function() {
i_=i;//i_=reverseNum(i-1);
var j160X600s = googletag.sizeMapping().addSize([1300, 720], [160, 600]).addSize([768, 768], [728, 90]).addSize([320, 400], [320, 100]).addSize([300, 300], [300, 50]).addSize([0, 0], [88, 31]).build();
// for (var i2_ = 0; i2_ <i; i2_++) {

	googletag.defineSlot(default_All_Slot[Tag]["adsSlot_s160x600"], default_All_Slot[Tag]["adsSlot_s160x600_size"], 'div-gpt-ad-1629190895522-0-a').defineSizeMapping(j160X600s).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
	googletag.defineSlot(default_All_Slot[Tag]["adsSlot_s160x600"], default_All_Slot[Tag]["adsSlot_s160x600_size"], 'div-gpt-ad-1629190895522-1-a').defineSizeMapping(j160X600s).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());

// }
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
}); 

var id1='div-gpt-ad-1629190895522-0-a';
var id2='div-gpt-ad-1629190895522-1-a';
var divleft=document.createElement("div");
divleft.innerHTML='<iradsdiv class="InMargin_Top" '+unitcss1+'><div class="left" '+adsleftsty1+'></div><div class="right" '+adsrightsty1+'></div><div '+asdsty1+'  '+events_1+'> '+foterclosebtn1+' </div><div '+adscss1+'><div id="'+id1+'"></div></div></iradsdiv>';
divleft.appendChild(mcmgoogleadsPush(id1));
var divright=document.createElement("div");
divright.innerHTML='<iradsdiv class="InMargin_Top" '+unitcss2+'><div class="left" '+adsleftsty2+'></div><div class="right" '+adsrightsty2+'></div><div '+asdsty2+' '+events_2+'> '+foterclosebtn2+' </div><div '+adscss2+'><div id="'+id2+'"></div></div></iradsdiv>';
divright.appendChild(mcmgoogleadsPush(id2));
// if(adsshow){
//     if(position.includes("rightonly")){if(AdsCount>=2){  x[i].appendChild(divright); }
//     }else{ x[i].appendChild(divleft);if(AdsCount>=2){  x[i].appendChild(divright); }}}
// x[i].setAttribute("AdsStatus","Done");
// x[i].setAttribute("Ir-Ads-Unit","s160x600");
// x[i].setAttribute("Ir-Ads-Unit-tag",Tag);


function ads_(elem,adsshow,position,AdsCount,divleft,divright,Tag){

if(typeof elem==="undefined" || elem===""){

    }else{
	if(adsshow){
    if(position.includes("rightonly")){if(AdsCount>=2){  elem.appendChild(divright); }
    }else{ elem.appendChild(divleft);if(AdsCount>=2){  elem.appendChild(divright); }}}
elem.setAttribute("AdsStatus","Done");
elem.setAttribute("Ir-Ads-Unit","s160x600");
elem.setAttribute("Ir-Ads-Unit-tag",Tag);

				//    // var ID='div-gpt-ad-1631536513935-'+i+'-'+Tag;
				//    var ID='div-gpt-ad-1631536513935-'+i;
    //             var AdsDIV = document.createElement('DIV');
    //             AdsDIV.setAttribute('id', ID);
    //            var mainDIV = document.createElement('IRADSDIV');
    //             mainDIV.appendChild(AdsDIV);
    //             elem.appendChild(mainDIV);
    //             AdsDIV.appendChild(mcmgoogleadsPush(ID));
    //             elem.setAttribute("AdsStatus","Done");
				// elem.setAttribute("Ir-Ads-Unit","336x280");
				// elem.setAttribute("Ir-Ads-Unit-type","DFP");
				// elem.setAttribute("Ir-Ads-Unit-tag",Tag);
}
}
setTimeout(ads_(x[i],adsshow,position,AdsCount,divleft,divright,Tag), 1000);


}}}
function default_mcmIRAds_rsticky120x600($this='',ClassName='bidmcmrs120x600',AdRequest=true){
var x = document.getElementsByClassName(ClassName); var i; var delay=0;
var continer=document.querySelector(".container");
var cWidth=0;var adsshow2=true;
if(continer){ cWidth=continer.clientWidth; }
var width_=parseInt(increaserevWidth)-parseInt(cWidth);
for (i = 0; i < x.length; i++) {
if (!x[i].hasAttribute("AdsStatus")) {var BtnText='Close';
var positionCheck=x[i].hasAttribute("IR-position"); var position="";
if(positionCheck){position=x[i].getAttribute("IR-position");position = position.replace(/\s/g, '');position = position.split(",");  }
if (x[i].hasAttribute("IR-Btn-Text")) { BtnText=x[i].getAttribute("IR-Btn-Text"); }
if(BtnText=='' || BtnText==null){BtnText='Close';}
var unitcss="";var btncss="";var adscss=""; adsfil=false; var AdsEvent_='';
var AdsCheck=x[i].hasAttribute("IR-Ads"); var AdsCount=1;
if(AdsCheck){AdsCount=x[i].getAttribute("IR-Ads");}
AdsCount=1;
var height="100px";
if( position.includes("mh50") ){height="50px";}
var unitcss1='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; bottom:0px; right:0px; transform: translateX(0.02%);padding:5px;"';  
var adscss1='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';
var btncss1='';
var asdsty1='style="clear: none !important;display: block !important;float: none !important;height: 5px !important;margin: 0px !important;max-height: none !important;top: -2px;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 101% !important;background-color: rgb(250, 250, 250) !important;box-shadow: 0 4px 2px -2px grey;"';
var asdsty1='';
var adsleftsty1='style="clear: none !important;display: block !important;float: none !important;height: 100% !important;margin: 0px !important;max-height: none !important;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: -1px 0px 3px 0px grey;"';
var adsleftsty1='';
var adsrightsty1='style="clear: none !important;margin-left: 0;display: block !important;float: right !important;height: 100% !important;margin: 0px !important;max-height: none !important;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;right: -0.8%;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: 2px 0 5px -2px grey;"';
var adsrightsty1='';
var foterclosebtn1='<b onclick="" style="cursor: pointer;margin: 0px !important;position: absolute !important;top: -26px !important;right: 0% !important;display: block !important;width: 28px !important;text-align: center;padding: 4px;min-height: 15px;height: auto !important;max-height: 24px;pointer-events: initial !important;background-color: rgb(250, 250, 250) !important;box-shadow: -3px -3px 5px -1px grey;"><svg style="vertical-align: text-top;fill: rgb(97, 97, 97);width: 14px !important;height: 14px !important;" height="365.696pt" viewBox="0 0 365.696 365.696" width="365.696pt" xmlns=""><path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"/></svg></b>';
var unitcss2='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; bottom:0px; right:0px; transform: translateX(0.02%);padding:5px;"';  
var adscss2='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';
var btncss2='';var asdsty2='';var adsleftsty2='';var adsrightsty2='';
var foterclosebtn1='<b><svg style="cursor: pointer;margin: 0px !important; position: absolute !important; top:-25px !important; left: 0% !important; display: block !important; width: 56px !important; height: 30px !important; transform: rotate(180deg) !important; pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottoms" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottoms)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="22" y1="5" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></line></line><line x1="28" y1="12" x2="34" y2="5"><line></line></line></g></svg></b>';
var foterclosebtn2='<b><svg style="cursor: pointer;margin: 0px !important; position: absolute !important; top:-25px !important; left: 0% !important; display: block !important; width: 60px !important; height: 30px !important; transform:rotate(180deg) scaleX(-1) !important; pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottomrs" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottomrs)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="22" y1="5" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></line></line><line x1="28" y1="12" x2="34" y2="5"><line></line></line></g></svg></b>';
var events_1='onclick="IRCloseDIVRight(this)"';
var events_2='onclick="IRCloseDIVRight(this)"';
if(increaserevWidth>=1480){
var adscss1='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';
adscss2='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';
if(parseInt(width_)>=337){
	adsshow2=true;
    var adscss1='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';
    adscss2='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';    
  }else if(parseInt(width_)>=257){
  	adsshow2=true;
    var adscss1='style="display:inline-block;width:120px;height:600px;'+AdsEvent_+'" ';
    adscss2='style="display:inline-block;width:120px;height:600px;'+AdsEvent_+'" '; 
  }else if(parseInt(width_)>=217){
  	adsshow2=true;
    var adscss1='style="display:inline-block;width:100px;height:600px;'+AdsEvent_+'" ';
    adscss2='style="display:inline-block;width:100px;height:600px;'+AdsEvent_+'" '; 
  }else{
  	adsshow2=false;
    unitcss1='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; bottom:-1px; width:728px; right:0%; transform: translateX(0%)"'; 
    adscss1='style="display:inline-block;width:728px;height:90px;'+AdsEvent_+'" ';
    btncss1='style="position:fixed; text-shadow: 1px 1px 5px black, 0 0 5px black, 0 0 5px black; font-size:17px; font-family:arial; cursor: pointer; top:-22px; right:0%; color:white;"';
    var asdsty1='style="clear: none !important;display: block !important;float: none !important;height: 5px !important;margin: 0px !important;max-height: none !important;top: 0;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 101% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;"';
    var adsleftsty1='style="clear: none !important;display: block !important;float: none !important;height: 100% !important;margin: 0px !important;max-height: none !important;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: -1px 0px 3px 0px grey;"';
    var adsrightsty1='style="clear: none !important;margin-left: 0;display: block !important;float: right !important;height: 100% !important;margin: 0px !important;max-height: none !important;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;right: -0.8%;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: 2px 0 5px -2px grey;"';
    foterclosebtn1='<b><svg onclick="IRCloseDIVBottom(this,2)" style="cursor: pointer;margin: 0px !important; position: absolute !important; top: -25px !important; right: -0.6% !important; display: block !important; width: 80px !important; height: 30px !important;transform: rotate(180deg); pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottom3" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottom3)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></g></svg></b>';
    events_1="";
    adscss2='style="display:inline-block;width:120px;height:600px;'+AdsEvent_+'" ';
  }
}else if(increaserevWidth>=768){
	adsshow2=false;
var adscss1='style="display:inline-block;width:120px;height:600px;'+AdsEvent_+'" ';
adscss2='style="display:inline-block;width:120px;height:600px;'+AdsEvent_+'" ';
if(parseInt(width_)>=337){
    var adscss1='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';
    adscss2='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';    
  }else if(parseInt(width_)>=257){
    var adscss1='style="display:inline-block;width:120px;height:600px;'+AdsEvent_+'" ';
    adscss2='style="display:inline-block;width:120px;height:600px;'+AdsEvent_+'" '; 
  }else if(parseInt(width_)>=217){
    var adscss1='style="display:inline-block;width:100px;height:600px;'+AdsEvent_+'" ';
    adscss2='style="display:inline-block;width:100px;height:600px;'+AdsEvent_+'" '; 
  }else{
    unitcss1='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; bottom:-1px; width:728px; right:0%; transform: translateX(0%)"'; 
    adscss1='style="display:inline-block;width:728px;height:90px;'+AdsEvent_+'" ';
    btncss1='style="position:fixed; text-shadow: 1px 1px 5px black, 0 0 5px black, 0 0 5px black; font-size:17px; font-family:arial; cursor: pointer; top:-22px; right:0%; color:white;"';
    var asdsty1='style="clear: none !important;display: block !important;float: none !important;height: 5px !important;margin: 0px !important;max-height: none !important;top: 0;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 101% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;"';
    var adsleftsty1='style="clear: none !important;display: block !important;float: none !important;height: 100% !important;margin: 0px !important;max-height: none !important;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: -1px 0px 3px 0px grey;"';
    var adsrightsty1='style="clear: none !important;margin-left: 0;display: block !important;float: right !important;height: 100% !important;margin: 0px !important;max-height: none !important;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;right: -0.8%;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: 2px 0 5px -2px grey;"';
    foterclosebtn1='<b><svg onclick="IRCloseDIVBottom(this,2)" style="cursor: pointer;margin: 0px !important; position: absolute !important; top: -25px !important; right: -0.6% !important; display: block !important; width: 80px !important; height: 30px !important;transform: rotate(180deg); pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottom3" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottom3)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></g></svg></b>';
    events_1="";
    adscss2='style="display:inline-block;width:120px;height:600px;'+AdsEvent_+'" ';
  }
}else{
	adsshow2=false;
AdsCount=1;
var adscss1='style="display:inline-block;min-width:250px;max-width:320px;width:100%;height:'+height+';'+AdsEvent_+'" ';
var asdsty1='style="clear: none !important;display: block !important;float: none !important;height: 5px !important;margin: 0px !important;max-height: none !important;top: 0;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 101% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;"';
unitcss1='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; bottom:-1px; width:95%; left:50%; transform: translateX(-50%)"';  
foterclosebtn1='<b><svg onclick="IRCloseDIVBottom(this,2)" style="cursor: pointer;margin: 0px !important; position: absolute !important; top: -25px !important; right: -0.6% !important; display: block !important; width: 80px !important; height: 30px !important;transform: rotate(180deg); pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottom4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottom4)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></g></svg></b>';
events_1="";
if( position.includes("top") ){
        unitcss1='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; top:-1px; width:320px; left:50%; transform: translateX(-50%)"';  
        var asdsty1='style="left: 0%;bottom: -3px;transform: scaleX(-1);clear: none !important;display: block !important;float: none !important;height: 5px !important;margin: 0px !important;max-height: none !important;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 100% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: 0 4px 2px -2px grey;"';
        foterclosebtn1='<b><svg onclick="IRCloseDIVTop(this,2)" style="cursor: pointer;margin: 0px !important; position: absolute !important; top: 0px !important; left: 0% !important; display: block !important; width: 80px !important; height: 30px !important; transform: none !important; pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottom" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottom)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></g></svg></b>';
}}
var dexktop=true;var tablet=true;var mobile=true;
if(position.includes("do")){dexktop=true;tablet=false;mobile=false;}
else if(position.includes("to")){dexktop=false;tablet=true;mobile=false;}
else if(position.includes("mo")){dexktop=false;tablet=false;mobile=true;}
if( position.includes("do") && position.includes("to") && position.includes("mo")){ dexktop=true;tablet=true;mobile=true;}
else if( position.includes("do") && position.includes("to") ){ dexktop=true;tablet=true;mobile=false;}
else if( position.includes("do") && position.includes("mo") ){ dexktop=true;tablet=false;mobile=true;}
else if( position.includes("to") && position.includes("mo") ){ dexktop=false;tablet=true;mobile=true;}
var adsshow=false;
if(increaserevWidth>=1250){if(dexktop){adsshow=true;}
}else if(increaserevWidth>=1025){if(tablet){adsshow=false;}
}else{if(mobile){adsshow=false;}}
if(adsshow && adsshow2){
if (x[i].hasAttribute("IR-Tag")) {  var Tag=x[i].getAttribute("IR-Tag"); }
else{ var Tag=default_IR_Tag; }


googletag.cmd.push(function() {
i_=i;//i_=reverseNum(i-1);
var t120x600rs = googletag.sizeMapping().addSize([1480, 600], [160, 600]).addSize([1367, 600], [120, 600]).addSize([768, 340], [728, 90]).addSize([320, 400], [320, 100]).addSize([300, 300], [300, 50]).addSize([0, 0], [88, 31]).build();
var k120x600s = googletag.sizeMapping().addSize([1480, 600], [160, 600]).addSize([1367, 600], [120, 600]).addSize([768, 340], [728, 90]).addSize([320, 400], [320, 100]).addSize([300, 300], [300, 50]).addSize([0, 0], [88, 31]).build();

// for (var i2_ = 0; i2_ <i; i2_++) {

	googletag.defineSlot(default_All_Slot[Tag]["adsSlot_rs120x600"],default_All_Slot[Tag]["adsSlot_rs120x600_size"], 'div-gpt-ad-1629191771690-2-a').defineSizeMapping(t120x600rs).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
	googletag.defineSlot(default_All_Slot[Tag]["adsSlot_rs120x600"],default_All_Slot[Tag]["adsSlot_rs120x600_size"], 'div-gpt-ad-1629191771690-3-a').defineSizeMapping(t120x600rs).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());

// }
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
}); 

var id1='div-gpt-ad-1629191771690-2-a';
var id2='div-gpt-ad-1629191771690-3-a';
var divleft=document.createElement("div");
divleft.innerHTML='<iradsdiv class="InMargin_Top" '+unitcss1+'><div class="left" '+adsleftsty1+'></div><div class="right" '+adsrightsty1+'></div><div '+asdsty1+'  '+events_1+'> '+foterclosebtn1+' </div><div '+adscss1+'><div id="'+id1+'"></div></div></iradsdiv>';
divleft.appendChild(mcmgoogleadsPush(id1));
var divright=document.createElement("div");
divright.innerHTML='<iradsdiv class="InMargin_Top" '+unitcss2+'><div class="left" '+adsleftsty2+'></div><div class="right" '+adsrightsty2+'></div><div '+asdsty2+' '+events_2+'> '+foterclosebtn2+' </div><div '+adscss2+'><div id="'+id2+'"></div></div></iradsdiv>';
divright.appendChild(mcmgoogleadsPush(id2));
    // if(position.includes("rightonly")){if(AdsCount>=2){  x[i].appendChild(divright); }
    // }else{ x[i].appendChild(divleft);if(AdsCount>=2){  x[i].appendChild(divright); }}
// x[i].setAttribute("AdsStatus","Done");
// x[i].setAttribute("Ir-Ads-Unit","rs120x600");
// x[i].setAttribute("Ir-Ads-Unit-tag",Tag);


function ads_(elem,adsshow,position,AdsCount,divleft,divright,Tag){

if(typeof elem==="undefined" || elem===""){

    }else{
	if(adsshow){
    if(position.includes("rightonly")){if(AdsCount>=2){  elem.appendChild(divright); }
    }else{ elem.appendChild(divleft);if(AdsCount>=2){  elem.appendChild(divright); }}}
elem.setAttribute("AdsStatus","Done");
elem.setAttribute("Ir-Ads-Unit","rs120x600");
elem.setAttribute("Ir-Ads-Unit-tag",Tag);

				//    // var ID='div-gpt-ad-1631536513935-'+i+'-'+Tag;
				//    var ID='div-gpt-ad-1631536513935-'+i;
    //             var AdsDIV = document.createElement('DIV');
    //             AdsDIV.setAttribute('id', ID);
    //            var mainDIV = document.createElement('IRADSDIV');
    //             mainDIV.appendChild(AdsDIV);
    //             elem.appendChild(mainDIV);
    //             AdsDIV.appendChild(mcmgoogleadsPush(ID));
    //             elem.setAttribute("AdsStatus","Done");
				// elem.setAttribute("Ir-Ads-Unit","336x280");
				// elem.setAttribute("Ir-Ads-Unit-type","DFP");
				// elem.setAttribute("Ir-Ads-Unit-tag",Tag);
}
}
setTimeout(ads_(x[i],adsshow,position,AdsCount,divleft,divright,Tag), 1000);
}

}}}
function default_mcmIRAds_sticky160x600($this='',ClassName='bidmcms160x600',AdRequest=true){
var x = document.getElementsByClassName(ClassName); var i; var delay=0;
var continer=document.querySelector(".container");
var cWidth=0;
if(continer){ cWidth=continer.clientWidth; }
var width_=parseInt(increaserevWidth)-parseInt(cWidth);
for (i = 0; i < x.length; i++) {
if (!x[i].hasAttribute("AdsStatus")) {var BtnText='Close';
var positionCheck=x[i].hasAttribute("IR-position"); var position="";
if(positionCheck){position=x[i].getAttribute("IR-position");position = position.replace(/\s/g, '');position = position.split(",");  }
if (x[i].hasAttribute("IR-Btn-Text")) { BtnText=x[i].getAttribute("IR-Btn-Text"); }
if(BtnText=='' || BtnText==null){BtnText='Close';}
var unitcss="";var btncss="";var adscss=""; adsfil=false; var AdsEvent_='';
var AdsCheck=x[i].hasAttribute("IR-Ads"); var AdsCount=1;
if(AdsCheck){AdsCount=x[i].getAttribute("IR-Ads");}
var height="100px";
if( position.includes("mh50") ){height="50px";}
var unitcss1='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; bottom:0px; left:0px; transform: translateX(0.02%);padding:5px;"';  
var adscss1='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';
var btncss1='';
var asdsty1='style="clear: none !important;display: block !important;float: none !important;height: 5px !important;margin: 0px !important;max-height: none !important;top: -2px;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 101% !important;background-color: rgb(250, 250, 250) !important;box-shadow: 0 4px 2px -2px grey;"';
var asdsty1='';
var adsleftsty1='style="clear: none !important;display: block !important;float: none !important;height: 100% !important;margin: 0px !important;max-height: none !important;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: -1px 0px 3px 0px grey;"';
var adsleftsty1='';
var adsrightsty1='style="clear: none !important;margin-left: 0;display: block !important;float: right !important;height: 100% !important;margin: 0px !important;max-height: none !important;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;right: -0.8%;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: 2px 0 5px -2px grey;"';
var adsrightsty1='';
var foterclosebtn1='<b onclick="" style="cursor: pointer;margin: 0px !important;position: absolute !important;top: -26px !important;right: 0% !important;display: block !important;width: 28px !important;text-align: center;padding: 4px;min-height: 15px;height: auto !important;max-height: 24px;pointer-events: initial !important;background-color: rgb(250, 250, 250) !important;box-shadow: -3px -3px 5px -1px grey;"><svg style="vertical-align: text-top;fill: rgb(97, 97, 97);width: 14px !important;height: 14px !important;" height="365.696pt" viewBox="0 0 365.696 365.696" width="365.696pt" xmlns=""><path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"/></svg></b>';
var unitcss2='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; bottom:0px; right:0px; transform: translateX(0.02%);padding:5px;"';  
var adscss2='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';
var btncss2='';var asdsty2='';var adsleftsty2='';var adsrightsty2='';
var foterclosebtn1='<b><svg style="cursor: pointer;margin: 0px !important; position: absolute !important; top:-25px !important; right: 0% !important; display: block !important; width: 60px !important; height: 30px !important; transform: rotate(180deg) !important; pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottoms" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottoms)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="22" y1="5" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></line></line><line x1="28" y1="12" x2="34" y2="5"><line></line></line></g></svg></b>';
var foterclosebtn2='<b><svg style="cursor: pointer;margin: 0px !important; position: absolute !important; top:-25px !important; left: 0% !important; display: block !important; width: 60px !important; height: 30px !important; transform:rotate(180deg) scaleX(-1) !important; pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottomrs" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottomrs)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="22" y1="5" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></line></line><line x1="28" y1="12" x2="34" y2="5"><line></line></line></g></svg></b>';
var events_1='onclick="IRCloseDIVLeft(this)"';
var events_2='onclick="IRCloseDIVRight(this)"';
if(increaserevWidth>=1280){
var adscss1='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';
adscss2='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';
if(parseInt(width_)>=337){
    var adscss1='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';
    adscss2='style="display:inline-block;width:160px;height:600px;'+AdsEvent_+'" ';    
  }else if(parseInt(width_)>=257){
    var adscss1='style="display:inline-block;width:120px;height:600px;'+AdsEvent_+'" ';
    adscss2='style="display:inline-block;width:120px;height:600px;'+AdsEvent_+'" '; 
  }else if(parseInt(width_)>=217){
    var adscss1='style="display:inline-block;width:100px;height:600px;'+AdsEvent_+'" ';
    adscss2='style="display:inline-block;width:100px;height:600px;'+AdsEvent_+'" '; 
  }else{
    unitcss1='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; bottom:-1px; width:728px; left:50%; transform: translateX(-50%)"'; 
    adscss1='style="display:inline-block;width:728px;height:90px;'+AdsEvent_+'" ';
    btncss1='style="position:fixed; text-shadow: 1px 1px 5px black, 0 0 5px black, 0 0 5px black; font-size:17px; font-family:arial; cursor: pointer; top:-22px; right:0%; color:white;"';
    var asdsty1='style="clear: none !important;display: block !important;float: none !important;height: 5px !important;margin: 0px !important;max-height: none !important;top: 0;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 101% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;"';
    var adsleftsty1='style="clear: none !important;display: block !important;float: none !important;height: 100% !important;margin: 0px !important;max-height: none !important;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: -1px 0px 3px 0px grey;"';
    var adsrightsty1='style="clear: none !important;margin-left: 0;display: block !important;float: right !important;height: 100% !important;margin: 0px !important;max-height: none !important;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;right: -0.8%;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: 2px 0 5px -2px grey;"';
    foterclosebtn1='<b><svg onclick="IRCloseDIVBottom(this,2)" style="cursor: pointer;margin: 0px !important; position: absolute !important; top: -25px !important; right: -0.6% !important; display: block !important; width: 80px !important; height: 30px !important;transform: rotate(180deg); pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottom3" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottom3)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></g></svg></b>';
    events_1="";
    adscss2='style="display:inline-block;width:120px;height:600px;'+AdsEvent_+'" ';
  }
}else if(increaserevWidth>=768){
unitcss1='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; bottom:-1px; width:728px; left:50%; transform: translateX(-50%)"'; 
adscss1='style="display:inline-block;width:728px;height:90px;'+AdsEvent_+'" ';
btncss1='style="position:fixed; text-shadow: 1px 1px 5px black, 0 0 5px black, 0 0 5px black; font-size:17px; font-family:arial; cursor: pointer; top:-22px; right:0%; color:white;"';
var asdsty1='style="clear: none !important;display: block !important;float: none !important;height: 5px !important;margin: 0px !important;max-height: none !important;top: 0;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 101% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;"';
var adsleftsty1='style="clear: none !important;display: block !important;float: none !important;height: 100% !important;margin: 0px !important;max-height: none !important;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: -1px 0px 3px 0px grey;"';
var adsrightsty1='style="clear: none !important;margin-left: 0;display: block !important;float: right !important;height: 100% !important;margin: 0px !important;max-height: none !important;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;right: -0.8%;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: 2px 0 5px -2px grey;"';
foterclosebtn1='<b><svg onclick="IRCloseDIVBottom(this,2)" style="cursor: pointer;margin: 0px !important; position: absolute !important; top: -25px !important; right: -0.6% !important; display: block !important; width: 80px !important; height: 30px !important;transform: rotate(180deg); pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottom3" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottom3)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></g></svg></b>';
events_1="";
adscss2='style="display:inline-block;width:120px;height:600px;'+AdsEvent_+'" ';
}else{
AdsCount=1;
var adscss1='style="display:inline-block;min-width:250px;max-width:320px;width:100%;height:'+height+';'+AdsEvent_+'" ';
var asdsty1='style="clear: none !important;display: block !important;float: none !important;height: 5px !important;margin: 0px !important;max-height: none !important;top: 0;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 101% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;"';
unitcss1='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; bottom:-1px; width:95%; left:50%; transform: translateX(-50%)"';  
foterclosebtn1='<b><svg onclick="IRCloseDIVBottom(this,2)" style="cursor: pointer;margin: 0px !important; position: absolute !important; top: -25px !important; right: -0.6% !important; display: block !important; width: 80px !important; height: 30px !important;transform: rotate(180deg); pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottom4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottom4)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></g></svg></b>';
events_1="";
if( position.includes("top") ){
        unitcss1='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; top:-1px; width:320px; left:50%; transform: translateX(-50%)"';  
        var asdsty1='style="left: 0%;bottom: -3px;transform: scaleX(-1);clear: none !important;display: block !important;float: none !important;height: 5px !important;margin: 0px !important;max-height: none !important;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 100% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: 0 4px 2px -2px grey;"';
        foterclosebtn1='<b><svg onclick="IRCloseDIVTop(this,2)" style="cursor: pointer;margin: 0px !important; position: absolute !important; top: 0px !important; left: 0% !important; display: block !important; width: 80px !important; height: 30px !important; transform: none !important; pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottom" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottom)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></g></svg></b>';
}}
var dexktop=true;var tablet=true;var mobile=true;
if(position.includes("do")){dexktop=true;tablet=false;mobile=false;}
else if(position.includes("to")){dexktop=false;tablet=true;mobile=false;}
else if(position.includes("mo")){dexktop=false;tablet=false;mobile=true;}
if( position.includes("do") && position.includes("to") && position.includes("mo")){ dexktop=true;tablet=true;mobile=true;}
else if( position.includes("do") && position.includes("to") ){ dexktop=true;tablet=true;mobile=false;}
else if( position.includes("do") && position.includes("mo") ){ dexktop=true;tablet=false;mobile=true;}
else if( position.includes("to") && position.includes("mo") ){ dexktop=false;tablet=true;mobile=true;}
var adsshow=false;
if(increaserevWidth>=1250){if(dexktop){adsshow=true;}
}else if(increaserevWidth>=767){if(tablet){adsshow=true;}
}else{if(mobile){adsshow=true;}}
if (x[i].hasAttribute("IR-Tag")) {  var Tag=x[i].getAttribute("IR-Tag"); }
else{ var Tag=default_IR_Tag; }

googletag.cmd.push(function() {
i_=i;//i_=reverseNum(i-1);
var j160X600s = googletag.sizeMapping().addSize([1300, 720], [160, 600]).addSize([768, 768], [728, 90]).addSize([320, 400], [320, 100]).addSize([300, 300], [300, 50]).addSize([0, 0], [88, 31]).build();
// for (var i2_ = 0; i2_ <i; i2_++) {

	googletag.defineSlot(default_All_Slot[Tag]["adsSlot_s120x600"], default_All_Slot[Tag]["adsSlot_s120x600_size"], 'div-gpt-ad-1629190895522-3-a').defineSizeMapping(j160X600s).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
	googletag.defineSlot(default_All_Slot[Tag]["adsSlot_s120x600"], default_All_Slot[Tag]["adsSlot_s120x600_size"], 'div-gpt-ad-1629190895522-4-a').defineSizeMapping(j160X600s).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());


// }
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
}); 

var id1='div-gpt-ad-1629190895522-3-a';
var id2='div-gpt-ad-1629190895522-4-a';
var divleft=document.createElement("div");
divleft.innerHTML='<iradsdiv class="InMargin_Top" '+unitcss1+'><div class="left" '+adsleftsty1+'></div><div class="right" '+adsrightsty1+'></div><div '+asdsty1+'  '+events_1+'> '+foterclosebtn1+' </div><div '+adscss1+'><div id="'+id1+'"></div></div></iradsdiv>';
divleft.appendChild(mcmgoogleadsPush(id1));
var divright=document.createElement("div");
divright.innerHTML='<iradsdiv class="InMargin_Top" '+unitcss2+'><div class="left" '+adsleftsty2+'></div><div class="right" '+adsrightsty2+'></div><div '+asdsty2+' '+events_2+'> '+foterclosebtn2+' </div><div '+adscss2+'><div id="'+id2+'"></div></div></iradsdiv>';
divright.appendChild(mcmgoogleadsPush(id2));
// if(adsshow){
//     if(position.includes("rightonly")){if(AdsCount>=2){  x[i].appendChild(divright); }
//     }else{ x[i].appendChild(divleft);if(AdsCount>=2){  x[i].appendChild(divright); }}}
// x[i].setAttribute("AdsStatus","Done");
// x[i].setAttribute("Ir-Ads-Unit","s160x600");
// x[i].setAttribute("Ir-Ads-Unit-tag",Tag);


function ads_(elem,adsshow,position,AdsCount,divleft,divright,Tag){

if(typeof elem==="undefined" || elem===""){

    }else{
	if(adsshow){
    if(position.includes("rightonly")){if(AdsCount>=2){  elem.appendChild(divright); }
    }else{ elem.appendChild(divleft);if(AdsCount>=2){  elem.appendChild(divright); }}}
elem.setAttribute("AdsStatus","Done");
elem.setAttribute("Ir-Ads-Unit","s160x600");
elem.setAttribute("Ir-Ads-Unit-tag",Tag);

				//    // var ID='div-gpt-ad-1631536513935-'+i+'-'+Tag;
				//    var ID='div-gpt-ad-1631536513935-'+i;
    //             var AdsDIV = document.createElement('DIV');
    //             AdsDIV.setAttribute('id', ID);
    //            var mainDIV = document.createElement('IRADSDIV');
    //             mainDIV.appendChild(AdsDIV);
    //             elem.appendChild(mainDIV);
    //             AdsDIV.appendChild(mcmgoogleadsPush(ID));
    //             elem.setAttribute("AdsStatus","Done");
				// elem.setAttribute("Ir-Ads-Unit","336x280");
				// elem.setAttribute("Ir-Ads-Unit-type","DFP");
				// elem.setAttribute("Ir-Ads-Unit-tag",Tag);
}
}
setTimeout(ads_(x[i],adsshow,position,AdsCount,divleft,divright,Tag), 1000);


}}}

function default_mcmIRAds_sticky970x90($this='',ClassName='bidmcms970x90',AdRequest=true){
var x = document.getElementsByClassName(ClassName);
var i; var delay=0;
for (i = 0; i < x.length; i++) {
if (!x[i].hasAttribute("AdsStatus")) {var BtnText='Close';
if (x[i].hasAttribute("IR-Btn-Text")) { BtnText=x[i].getAttribute("IR-Btn-Text"); }
if(BtnText=='' || BtnText==null){BtnText='Close';}
var unitcss="";var btncss="";var adscss=""; adsfil=false;
var AdsEvent_='';
var positionCheck=x[i].hasAttribute("IR-position"); var position="";
if(positionCheck){position=x[i].getAttribute("IR-position");position = position.replace(/\s/g, '');position = position.split(",");  }
var fixed_="bottom:-1px;"; var c_btn="right: 0% !important;transform: rotate(180deg);";
var c_fun='onclick="IRCloseDIVBottom(this)"';
if( position.includes("top") ){
	fixed_="top:-1px;";
	c_btn="top: 100px !important; left: 0% !important;transform: rotate(0deg);";
	c_fun='onclick="IRCloseDIVTop(this)"';
}
if(increaserevWidth>=1024){
unitcss='style="padding:3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; '+fixed_+' min-width:320px;max-width:976px;width:100%;height:96px; left:50%; transform: translateX(-50%);"';  
adscss='style="display:inline-block;min-width:320px;max-width:970px;width:100%;height:90px;'+AdsEvent_+'" ';
btncss='style="position:fixed; text-shadow: 1px 1px 5px black, 0 0 5px black, 0 0 5px black; font-size:18px; font-family:arial; font-style: bold; cursor: pointer; top:-24px; right:0px; color:white;"';
var asdsty2='style="clear: none !important;display: block !important;float: none !important;height: 9px !important;margin: 0px !important;max-height: none !important;top: -6px;left: 0%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 100% !important;background-color: rgb(250, 250, 250) !important;"';
var adsleftsty='style="clear: none !important;display: block !important;float: none !important;height: 0% !important;margin: 0px !important;max-height: none !important;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;"';
var adsrightsty='style="clear: none !important;margin-left: 0;display: block !important;float: right !important;height: 0% !important;margin: 0px !important;max-height: none !important;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;right: -0.8%;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;"';
foterclosebtn='<b><svg style="cursor: pointer;margin: 0px !important;top: -30px !important; position: fixed !important; '+c_btn+'  display: block !important; width: 80px !important; height: 30px !important;pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottom8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottom8)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></g></svg></b>';
}else if(increaserevWidth>=768){
unitcss='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999; position:fixed; '+fixed_+' min-width:320px;width:auto;height:96px; left:50%; transform: translateX(-50%);"'; 
adscss='style="display:inline-block;min-width:320px;max-width:728px !important;width:100%;height:90px;'+AdsEvent_+'" ';
btncss='style="position:fixed; text-shadow: 1px 1px 5px black, 0 0 5px black, 0 0 5px black; font-size:18px; font-family:arial; font-style: bold; cursor: pointer; top:-24px; right:0px; color:white;"';
var asdsty2='style="clear: none !important;display: block !important;float: none !important;height: 5px !important;margin: 0px !important;max-height: none !important;top:-6px;left: 0%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 100% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;"';
var adsleftsty='style="clear: none !important;display: block !important;float: none !important;height: 0% !important;margin: 0px !important;max-height: none !important;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: -1px 0px 3px 0px grey;"';
var adsrightsty='style="clear: none !important;margin-left: 0;display: block !important;float: right !important;height: 0% !important;margin: 0px !important;max-height: none !important;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;right: -0.8%;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: 2px 0 5px -2px grey;"';
foterclosebtn='<b><svg style="position: fixed !important; cursor: pointer;top: -30px !important;margin: 0px !important;  '+c_btn+' display: block !important; width: 80px !important; height: 30px !important; pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottom9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottom9)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></g></svg></b>';
}else{
unitcss='style="padding: 3px;background: rgb(250, 250, 250) !important;z-index: 999999999; position: fixed !important; '+fixed_+' min-width:250px;max-width:420px;width:100%;height:100px; left:50%; transform: translateX(-50%);"'; 
adscss='style="display:inline-block; margin-left:unset !important; margin:unset !important;min-width:250px;max-width:420px;width:100%;height:100px; max-height:100px; text-align:center;'+AdsEvent_+'" ';
btncss='style="position:fixed; text-shadow: 1px 1px 5px black, 0 0 5px black, 0 0 5px black; font-size:17px; font-family:arial; cursor: pointer; top:-22px; right:0%; color:white;"';
var asdsty2='style="clear: none !important;display: block !important;float: none !important;height: 7px !important;margin: 0px !important;max-height: none !important;top: 99px;left: 0%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 100% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;"';
var adsleftsty='style="clear: none !important;display: block !important;float: none !important;height: 0% !important;margin: 0px !important;max-height: none !important;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: -1px 0px 3px 0px grey;"';
var adsrightsty='style="clear: none !important;margin-left: 0;display: block !important;float: right !important;height: 0% !important;margin: 0px !important;max-height: none !important;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;right: -0.8%;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: 2px 0 5px -2px grey;"';
foterclosebtn='<b><svg style="position: fixed !important; top: -25px !important; cursor: pointer; margin: 0px !important; position: fixed !important; '+c_btn+' display: block !important; width: 80px !important; height: 30px !important; pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottom10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottom10)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></g></svg></b>';
}
if (x[i].hasAttribute("IR-Tag")) {  var Tag=x[i].getAttribute("IR-Tag"); }
else{ var Tag=default_IR_Tag; }

googletag.cmd.push(function() {
i_=i;//i_=reverseNum(i-1);
var r970x90s = googletag.sizeMapping().addSize([1024, 480], [970, 90]).addSize([768, 480], [728, 90]).addSize([320, 400], [320, 100]).addSize([300, 300], [300, 50]).addSize([0, 0], [88, 31]).build();
// for (var i2_ = 0; i2_ <i; i2_++) {

	googletag.defineSlot(default_All_Slot[Tag]["adsSlot_s970x90"],default_All_Slot[Tag]["adsSlot_s970x90_size"], 'div-gpt-ad-1629192065180-0').defineSizeMapping(r970x90s).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());

// }
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
}); 

var id1='div-gpt-ad-1629192065180-0';
var adConten='<iradsdiv class="InMargin_Top" '+unitcss+'><div class="left" '+adsleftsty+'></div><div class="right" '+adsrightsty+'></div><div '+asdsty2+' '+c_fun+'> '+foterclosebtn+' </div><div id="'+id1+'"></div></iradsdiv>';
x[i].innerHTML=adConten;
x[i].appendChild(mcmgoogleadsPush(id1));
x[i].setAttribute("AdsStatus","Done");
x[i].setAttribute("Ir-Ads-Unit","s970x90");
x[i].setAttribute("Ir-Ads-Unit-tag",Tag);


}}}
function default_mcmIRAds_sticky320x100($this='',ClassName='bidmcms320x100',AdRequest=true){
var x = document.getElementsByClassName(ClassName);
var i; var delay=0;
for (i = 0; i < x.length; i++) {
if (!x[i].hasAttribute("AdsStatus")) {
_ms320x100=parseInt(_ms320x100)+1;
var unitcss="";var btncss="";var adscss=""; adsfil=false;
var AdsEvent_='';
unitcss='style="padding-top: 1px;background: rgb(250, 250, 250) !important;z-index: 99999999999999999999999999999999999999999;position: fixed;bottom: -1px; min-width:250px; max-width:99%; width: auto;left: 50%;height: 105px;vertical-align: middle;transform: translateX(-50%);"'; 
adscss='style="display:inline-block;min-width:250px;max-width:320px;width:100%;height:100px;'+AdsEvent_+'" ';
btncss='style="position:fixed; text-shadow: 1px 1px 5px black, 0 0 5px black, 0 0 5px black; font-size:17px; font-family:arial; cursor: pointer; top:-22px; right:0%; color:white;"';
var asdsty2='style="clear: none !important;display: block !important;float: none !important;height: 5px !important;margin: 0px !important;max-height: none !important;top: -4px;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 101% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: 0 4px 2px -2px grey;"';
var adsleftsty='style="clear: none !important;display: block !important;float: none !important;height: 100% !important;margin: 0px !important;max-height: none !important;left: -0.8%;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: -1px 0px 3px 0px grey;"';
var adsrightsty='style="clear: none !important;margin-left: 0;display: block !important;float: right !important;height: 100% !important;margin: 0px !important;max-height: none !important;max-width: none !important;opacity: 1 !important;overflow: visible !important;padding: 0px !important;position: absolute !important;right: -0.8%;vertical-align: baseline !important;visibility: visible !important;width: 1% !important;z-index: 0 !important;background-color: rgb(250, 250, 250) !important;box-shadow: 2px 0 5px -2px grey;"';
foterclosebtn='<b><svg  onclick="IRCloseDIVBottom(this,2)" style="cursor: pointer;margin: 0px !important; position: absolute !important; top: -25px !important; right: -0.6% !important; display: block !important; width: 80px !important; height: 30px !important;transform: rotate(180deg); pointer-events: initial !important;" xmlns=""> <defs> <filter id="dropShadowBottom7" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> <feFuncR type="discrete" tableValues="0.5"></feFuncR> <feFuncG type="discrete" tableValues="0.5"></feFuncG> <feFuncB type="discrete" tableValues="0.5"></feFuncB> </feComponentTransfer> <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="0" dy="0" result="offsetblur"></feOffset> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> </defs> <path d="M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter:url(#dropShadowBottom7)"></path> <rect x="0" y="0" width="80" height="5" style="fill:#FAFAFA"></rect> <g class="up" stroke="#616161" stroke-width="3px" stroke-linecap="square"><line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"><line></g></svg></b>';
if (x[i].hasAttribute("IR-Tag")) {  var Tag=x[i].getAttribute("IR-Tag"); }
else{ var Tag=default_IR_Tag; }


googletag.cmd.push(function() {
i_=i;//i_=reverseNum(i-1);
var w320x100 = googletag.sizeMapping().addSize([320, 250], [320, 100]).addSize([0, 0], [88, 31]).build();
// for (var i2_ = 0; i2_ <i; i2_++) {
	googletag.defineSlot(default_All_Slot[Tag]["adsSlot_s320x100"],default_All_Slot[Tag]["adsSlot_s320x100_size"], 'div-gpt-ad-1631608042213-13').defineSizeMapping(w320x100).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());

// }
if(!default_refreshAdsCode){
	googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
    }
  }); 
	googletag.pubads().enableVideoAds();
	googletag.pubads().collapseEmptyDivs(true);
	googletag.enableServices();
	default_refreshAdsCode=true;
}
}); 

var id1='div-gpt-ad-1631608042213-13';
var adConten='<iradsdiv class="InMargin_Top" '+unitcss+'><div class="left" '+adsleftsty+'></div><div class="right" '+adsrightsty+'></div><div '+asdsty2+' onclick="IRCloseDIVBottom(this)"> '+foterclosebtn+' </div><div id="'+id1+'"></div></iradsdiv>';
x[i].innerHTML=adConten;
x[i].appendChild(mcmgoogleadsPush(id1));
x[i].setAttribute("AdsStatus","Done");
x[i].setAttribute("Ir-Ads-Unit","ms320x100");
x[i].setAttribute("Ir-Ads-Unit-tag",Tag);



}}}
function mcmgoogleadsPush($ID){
    var AdsPush = document.createElement('script'); AdsPush.innerHTML='googletag.cmd.push(function() { googletag.display("'+$ID+'"); });';
    return AdsPush;  }
function IRCloseDIVTop($this,count=0) {var elem = $this; 
  for (var i = 0; i <= count; i++) {elem=elem.parentNode; }
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos >= 150) {
      clearInterval(id);
      elem.style.display = 'none';
    } else {pos=pos+3; elem.style.top = -pos + 'px'; }}}
function IRCloseDIVBottom($this,count=0) {var elem = $this; 
  for (var i = 0; i <= count; i++) {elem=elem.parentNode;}
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos >= 150) {
      clearInterval(id);
      elem.style.display = 'none';
    } else {pos=pos+3; elem.style.bottom = -pos + 'px'; }}}
function IRCloseDIVRight($this) {
  var elem = $this.parentNode; 
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos >= 150) {
      clearInterval(id);
      elem.style.display = 'none';
    } else {pos=pos+3; elem.style.right = -pos + 'px'; }}}
function IRCloseDIVLeft($this) {
var elem = $this.parentNode; 
var pos = 0;
var id = setInterval(frame, 10);
function frame() {
if (pos >= 150) {
clearInterval(id);
elem.style.display = 'none';
    } else {pos=pos+3; elem.style.left = -pos + 'px'; }}}
function isInViewport(element) {
  if(irviewport=="true" || irviewport==true){
    if(irviewportReferesh){
      var rect = element.getBoundingClientRect();
        var html = document.documentElement;
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || html.clientHeight) &&
          rect.right <= (window.innerWidth || html.clientWidth)
        );
    }else{
      return true;
    }
  }
  return true;
}
function mcm_ir_AdsRequest2(){
var AllRequest={};
if(parseInt(_970x90)>0){AllRequest["_970x90"]=_970x90;}
if(parseInt(_970x250)>0){AllRequest["_970x250"]=_970x250;}
if(parseInt(_728x90)>0){AllRequest["_728x90"]=_728x90;}
if(parseInt(_750x300)>0){AllRequest["_750x300"]=_750x300;}
if(parseInt(_700x300)>0){AllRequest["_700x300"]=_700x300;}
if(parseInt(_650x300)>0){AllRequest["_650x300"]=_650x300;}
if(parseInt(_600x300)>0){AllRequest["_600x300"]=_600x300;}
if(parseInt(_300x250)>0){AllRequest["_300x250"]=_300x250;}
if(parseInt(_336x280)>0){AllRequest["_336x280"]=_336x280;}
if(parseInt(_120x600)>0){AllRequest["_120x600"]=_120x600;}
if(parseInt(_120x6002)>0){AllRequest["_120x6002"]=_120x6002;}
if(parseInt(_160x600)>0){AllRequest["_160x600"]=_160x600;}
if(parseInt(_300x600)>0){AllRequest["_300x600"]=_300x600;}
if(parseInt(_s120x600)>0){AllRequest["_s120x600"]=_s120x600;}
if(parseInt(_s120x6002)>0){AllRequest["_s120x6002"]=_s120x6002;}
if(parseInt(_rs120x600)>0){AllRequest["_rs120x600"]=_rs120x600;}
if(parseInt(_ms320x100)>0){AllRequest["_ms320x100"]=_ms320x100;}
if(parseInt(_s970x90)>0){AllRequest["_s970x90"]=_s970x90;}
if(parseInt(_s970x902)>0){AllRequest["_s970x902"]=_s970x902;}
if(parseInt(_320x100)>0){AllRequest["_320x100"]=_320x100;}
if(parseInt(_336x280atf)>0){AllRequest["_336x280atf"]=_336x280atf;}
if(parseInt(_970x90atf)>0){AllRequest["_970x90atf"]=_970x90atf;}
if(parseInt(_infeed)>0){AllRequest["_infeed"]=_infeed;}
if(!_ir__IpAddress){_ir__IpAddress=_ir__GetIpAddress(false);}
var Os=_ir_operatingSytem();
if(JSON.stringify(AllRequest) === '{}') {
    AllRequest='';
}
if(_ir__IpAddress!='' && DomainName!='' && Os!='' && AllRequest!=''){
  AllRequest=JSON.stringify(AllRequest);
  var requestCount=readCookie("requestCount"); 
  if(!requestCount){
    requestCount=0;
  }
  if(requestCount<=2){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var Data = xhttp.responseText;
        createCookie("requestCount",parseInt(requestCount)+1,CookieInterval);
    }};
    xhttp.open("GET", SrcDomain+"/InvalidAds/addRequest.php?ip="+_ir__IpAddress+"&domain="+DomainName+"&os="+Os+"&adstype="+AllRequest, true);
    xhttp.send();
  } 
}
_970x90=0;
_970x250=0;
_728x90=0;
_750x300=0;
_700x300=0;
_650x300=0;
_600x300=0;
_300x250=0;
_336x280=0;
_120x600=0;
_120x6002=0;
_160x600=0;
_300x600=0;
_s120x600=0;
_s120x6002=0;
_rs120x600=0;
_ms320x100=0;
_s970x90=0;
_320x100=0;
_336x280atf=0;
_970x90atf=0;
_infeed=0;
_s970x902=0;
}
function _ir_operatingSytem() {  
var OSName="Unknown OS"; 
if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows 10";
if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows 8";
if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows 7";
if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows Vista";
if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows XP";
if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows 2000";
if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac/iOS";
if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";
if (window.navigator.userAgent.indexOf("Android")          != -1) OSName="Android";
if (window.navigator.userAgent.indexOf("iphone")          != -1) OSName="iOS";
return OSName; 
} 
window.onload = function() {
if(default_IRDefaultAds_){default_mcmIRAds_All();default_mcmirallmyfun();}
};
if(typeof document.createStyleSheet === 'undefined') {
    document.createStyleSheet = (function() {
        function createStyleSheet(href) {
            if(typeof href !== 'undefined') {
                var element = document.createElement('link');
                element.type = 'text/css';
                element.rel = 'stylesheet';
                element.href = href;
            }
            else {
                var element = document.createElement('style');
                element.type = 'text/css';
            }
            document.getElementsByTagName('head')[0].appendChild(element);
            var sheet = document.styleSheets[document.styleSheets.length - 1];
            if(typeof sheet.addRule === 'undefined')
                sheet.addRule = addRule;
            if(typeof sheet.removeRule === 'undefined')
                sheet.removeRule = sheet.deleteRule;
            return sheet;
        }
        function addRule(selectorText, cssText, index) {
            if(typeof index === 'undefined')
                index = this.cssRules.length;
            this.insertRule(selectorText + ' {' + cssText + '}', index);
        }
        return createStyleSheet;
    })();
}
var sheet = document.createStyleSheet();
sheet.addRule('.increaserev', 'position: relative!important; margin-left:auto!important; margin-right:auto!important;margin-bottom: 5px !important; margin-top: 5px !important; text-align: center!important;display:block !important;');
sheet.addRule('iradsdiv:not(.InMargin_Top)', 'position: relative!important; display:block !important;');
function default_mcmIRAds_All(){
	if(scriptload_){
window.focus();
default_mcmIRAds_970x90();
default_mcmmcmIRAds_970x90ATF();
default_mcmIRAds_970x250();
default_mcmIRAds_300x600();
default_mcmIRAds_336x280();
default_mcmIRAds_300x250();
default_mcmIRAds_160x600();
default_mcmIRAds_120x600();
default_mcmIRAds_750x300();
default_mcmIRAds_700x300();
default_mcmIRAds_728x90();
default_mcmIRAds_728x90ATF();
default_mcmIRAds_650x300();
default_mcmIRAds_320x50();
default_mcmIRAds_320x100();
default_mcmIRAds_atf336x280();
default_mcmIRAds_sticky120x600();
default_mcmIRAds_rsticky120x600();
default_mcmIRAds_sticky160x600();
default_mcmIRAds_sticky970x90();
default_mcmIRAds_sticky320x100();
default_mcmIRAds_atf1200x90();
default_mcmIRAds_1200x90();
default_mcmIRAds_1200x250();
default_mcmirallmyfun();
}
setTimeout(function(){  mcm_ir_AdsRequest2(); }, 5000);
var incRevBlockIpCheck=readCookie("incRevBlockIp");
if(incRevBlockIpCheck){
mcmIrStopAdsClicking()
}
ir_track();
}
function default_mcmIrhandler(){
  clearInterval(monitor);
  default_mcmIRAds_All();
}
var monitor = setInterval(function(){
    var elem = document.activeElement;
    if(elem && elem.tagName == 'IFRAME'){
        clearInterval(monitor);
        default_mcmIrhandler();
    }
}, 100);
function ir_ads_push(){default_mcmIRAds_All();}
window.addEventListener("touchstart", default_mcmIrhandler, true);
window.addEventListener("scroll", default_mcmIrhandler, true);
window.addEventListener("touchmove", default_mcmIrhandler, true);
window.addEventListener("touchend", default_mcmIrhandler, true);
window.addEventListener("pointermove", default_mcmIrhandler, true);    
window.addEventListener("click", default_mcmIrhandler, true);

function reverseNum(number) {
	if(number=="-1"){
		var number2=0;
	}else{
		var number2=number.toString().replace("-", "");
	}
	
	return number2;
  
}


function ir_track(){
	if(!tracking){
		tracking=true;
var IRtrack=readCookie("IRtrack"); 
  		var scripts = document.getElementsByTagName( "script" ) ;
		var currentScriptUrl = ( document.currentScript || scripts[scripts.length - 1] ).src ;
		var scriptName = currentScriptUrl.length >0 ? currentScriptUrl : scripts[scripts.length-1].baseURI.split( "/" ).pop() ; 
		var filename = scriptName.substring(scriptName.lastIndexOf('/')+1)+"___"+default_IR_Tag;

  		if(!IRtrack){
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var Data = xhttp.responseText;
				createCookie("IRtrack","com",CookieInterval);
			}};
			xhttp.open("GET", SrcDomain+"/InvalidAds/track.php?ip="+_ir__IpAddress+"&domain="+DomainName+"&type="+filename, true);
			xhttp.send();
			
		}else{
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var Data = xhttp.responseText;
				createCookie("IRtrack","com",CookieInterval);
			}};
			xhttp.open("GET", SrcDomain+"/InvalidAds/track2.php?ip="+_ir__IpAddress+"&domain="+DomainName+"&type="+filename, true);
			xhttp.send();
		}
	}
	
}