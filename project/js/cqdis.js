var listLeft = document.querySelectorAll(".cqdis-list");
var lastfour = 0;
var fouInfo = document.querySelectorAll(".cqdis-info");
var orgthree = document.querySelectorAll(".orgthree");
var lastthree = 0;
var orgthreeInfo = document.querySelectorAll(".orgthreeInfo");

for(var i = 0, len = listLeft.length; i < len; i ++) {
    listLeft[i].addEventListener("click", function(i) {
        return (function() {
            listLeft[lastfour].style.backgroundColor = "#ffe053";
            fouInfo[lastfour].style.color = "#f3860c"
            listLeft[i].style.backgroundColor = "#8fe1df";
            fouInfo[i].style.color = "#fff";
            lastfour = i;

        })
        
    }(i))
}
for(var j = 0, len = orgthree.length; j < len; j ++) {
    orgthree[j].addEventListener("click", function(j) {
        return (function() {
            css(orgthree[lastthree], {
               "background-image" :"url(../images/orgbak.gif)",
               color: "#ffb31f",
               "margin-top": 0,
               height: "45px",
               width: "305px",
               "margin-left": "16px",
               "line-height": "45px"
            });
            orgthreeInfo[lastthree].style.fontSize = "20px";
            orgthreeInfo[j].style.fontSize = "22px";
            css(orgthree[j], {
               "background-image" :"url(../images/orgclick.png)",
               color: "#faac3a",
               "margin-top": "-15px",
               height: "60px",
               width:  "328px",
               "margin-left": "0px",
               "line-height":"60px"
            })
            lastthree = j;


        })
        
    }(j))
}

function css (el, obj) {

    if (typeof el !== 'object' || typeof obj !== 'object') {
        throw 'el and obj should be object';
    }

    var str = "";

    for (var key in obj) {
        str += key + ":" + obj[key] + ';';
    }

    el.style.cssText = str;
}
