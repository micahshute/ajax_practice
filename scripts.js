function setupRequest(){
    var httpRequestObject
    console.log("in setup")
    if(window.XMLHttpRequest){
        httpRequestObject = new XMLHttpRequest();
    }else{
        httpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return httpRequestObject;
}

function getBrowser(){
    var userAgent = navigator.userAgent;
    var appName = navigator.appName;
    var platform = navigator.platform;
    var browser;
    if(userAgent.indexOf("Chrome") > -1){
        browser = "Chrome"
    }else if(userAgent.indexOf("Edge") > -1){
        browser = "Microsoft Edge"
    }else if(userAgent.indexOf("Safari") > -1){
        browser = "Safari"
    }else if(userAgent.indexOf("IE") > -1){
        browser = "Internet Explorer"
    }else if(userAgent.indexOf("Firefox") > -1){
        browser = "Firefox"
    }else{
        browser = "fake"
    }
    document.getElementById("browser").innerHTML = "Your browser is " + browser + " running on " + platform;
}

function retrieveData(dataPath, targetID, RequestObj){
    var obj = document.getElementById(targetID);
    if(RequestObj){ //ensure object was successfully created
        RequestObj.open("GET", dataPath);
        RequestObj.onreadystatechange = function(){
            if(RequestObj.readyState == 4 && RequestObj.status == 200){ //request is complete and successful
                obj.innerHTML = '<p>' + RequestObj.responseText + '</p>'; //write data to document
            }
        }
    }else{
        obj.innerHTML = "Your browser is not Ajax enabled"
    }
    RequestObj.send(null);
}