;(function () {
      var daysw = document.getElementById("daysw"),
          daygw = document.getElementById("daygw"),
          hoursw = document.getElementById("hoursw"),
          hourgw = document.getElementById("hourgw"),
          minsw = document.getElementById("minsw"),
          mingw = document.getElementById("mingw"),
          secsw = document.getElementById("secsw"),
          img = document.getElementById("myimg"),
          secgw = document.getElementById("secgw");
      // jia.onclick = function () {
      //   // img.width = img.width*1.05;
      //   img.height = img.height*1.05;
      // }
      // jian.onclick = function () {
      //    // img.width = img.width/1.05;
      //   img.height = img.height/1.05;
      // }
      function timer() {
        var now = new Date().getTime(),
            start = new Date("2016/09/05").getTime(),
            show = start - now,
            day = Math.floor(show/86400000),
            hour = Math.floor(show % 86400000 / 3600000),
            minute = Math.floor(show % 86400000 % 3600000 / 60000),
            second = Math.floor(show % 86400000 % 3600000 % 60000 / 1000);
        if (day < 10) {
          day = "0" + day;
        }
        if (hour < 10) {
          hour = "0" + hour;
        }
        if(minute < 10) {
          minute = "0" + minute;
        }
        if(second < 10) {
          second = "0" + second;
        }
        daysw.style.backgroundPosition = '0px ' + (0 + (day.toString().substr(0,1)) * -36) + 'px';
        daygw.style.backgroundPosition = '0px ' + (0 + (day.toString().substr(1,1)) * -36) + 'px';
        hoursw.style.backgroundPosition = '0px ' + (0 + (hour.toString().substr(0,1)) * -36) + 'px';
        hourgw.style.backgroundPosition = '0px ' + (0 + (hour.toString().substr(1,1)) * -36) + 'px';
        minsw.style.backgroundPosition = '0px ' + (0 + (minute.toString().substr(0,1)) * -36) + 'px';
        mingw.style.backgroundPosition =  '0px ' + (0 + (minute.toString().substr(1,1)) * -36) + 'px';
        secsw.style.backgroundPosition =  '0px ' + (0 + (second.toString().substr(0,1)) * -36) + 'px';
        secgw.style.backgroundPosition =  '0px ' + (0 + (second.toString().substr(1,1)) * -36) + 'px';
      }
        timer();
        setInterval(timer,1000);


  }());