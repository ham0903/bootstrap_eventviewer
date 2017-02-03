$(function(){
	function formatDate(date) { 
		var myyear = date.getFullYear();

       var mymonth = GetLeftPadding(date.getMonth()+1, 2, '0'); 
       var myweekday = GetLeftPadding(date.getDate(), 2, '0'); 
       return (myyear + "-" + mymonth + "-" + myweekday); 
	}

	function GetLeftPadding(str, count, cha) {
		str = String(str);
		cha = String(cha);

		while (str.length < count) {
			str = cha + str;
		}

		return str;
	}

	var now = new Date(); 
    var nowDayOfWeek = now.getDay(); 
    var nowDay = now.getDate(); 
    var nowMonth = now.getMonth(); 
    var nowYear = now.getYear(); 
    nowYear += (nowYear < 2000) ? 1900 : 0; 
    var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek); 
    var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek)); 
	var thisWeek = formatDate(weekStartDate) + " - " + formatDate(weekEndDate); 
	var thisWeekDaily = new Array();
	for(i=0; i<7; i++) {
		tempDate = new Date(nowYear, nowMonth, nowDay + (i - nowDayOfWeek)); 
		thisWeekDaily[i] = formatDate(tempDate);
	}

	var firstDate = new Date(nowYear, nowMonth, 1);
	var lastDate = new Date(nowYear, nowMonth+1, 0);
	var thisMonth = formatDate(firstDate) + " - " + formatDate(lastDate);

    $("#spThisWeek").text("Period : " + thisMonth);
	$("#spThisMonth").text("Period : " + "2016-01-01 - 2016-12-31");
	$("#spThisDay").text("Period : " + thisWeekDaily[0] + " - " + thisWeekDaily[6]);
	
    /* Bar dashboard chart */
    Morris.Bar({
        element: 'dashboard-bar-1',
        data: [
            { y: 'JAN', a: 282 },
            { y: 'FEB', a: 377 },
            { y: 'MAR', a: 242 },
            { y: 'APR', a: 501+642+773+563 },
            { y: 'MAY', a: 607+480+474+581+61 },
			{ y: 'JUN', a: 660+323+509+589+69 },
			{ y: 'JUL', a: 404+490+398+67+1034 },
			{ y: 'AUG', a: 162 },
			{ y: 'SEP', a: 0 },
			{ y: 'OCT', a: 0 },
			{ y: 'NOV', a: 0 },
			{ y: 'DEC', a: 0 },

        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['This Year'],
        barColors: ['#33414E'],
        gridTextSize: '10px',
        hideHover: true,
        resize: true,
        gridLineColor: '#E5E5E5'
    });
    /* END Bar dashboard chart */
    
    /* Line dashboard chart */
    Morris.Line({
      element: 'dashboard-line-1',
      data: [
            { y: '1WEEK', a: 345, b: 481 },
            { y: '2WEEK', a: 445, b: 447 },
            { y: '3WEEK', a: 193+61, b: 529 },
            { y: '4WEEK', a: 0, b: 448},
			{ y: '5WEEK', a: 0, b: 237 },

        ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['This Month', 'Last Month'],
      resize: true,
      hideHover: true,
      gridTextSize: '10px',
      lineColors: ['#33414E', '#1caf9a'],
      gridLineColor: '#E5E5E5',
	  parseTime: false
    });   
    /* EMD Line dashboard chart */

    /* Moris Area Chart 
      Morris.Area({
      element: 'dashboard-area-1',
      data: [
        { y: thisWeekDaily[0], a: 58, b: 55, c:73, d:66},
        { y: thisWeekDaily[1], a: 70, b: 50, c:73, d:117},
        { y: thisWeekDaily[2], a: 109, b: 49, c:47, d:78},
        { y: thisWeekDaily[3], a: 100,b: 71, c:61, d:67},
        { y: thisWeekDaily[4], a: 96,b: 90, c:52, d:0},
        { y: thisWeekDaily[5], a: 69,b: 70, c:66, d:0},
        { y: thisWeekDaily[6], a: 80,b: 60, c:63, d:0}
      ],
      xkey: 'y',
      ykeys: ['a','b','c','d'],
      labels: ['3Weeks Ago', '2 Weeks Ago','Last Week','This Week'],
      resize: true,
      hideHover: true,
      xLabels: 'day',
      gridTextSize: '10px',
      lineColors: ['blue','#33414E','rgb(149, 183, 93)','#1caf9a'],
      gridLineColor: '#E5E5E5'
    });
    */

		Morris.Area({
      element: 'dashboard-area-1',
      data: [
        { y: thisWeekDaily[0], a:67, b:66},
        { y: thisWeekDaily[1], a:106, b:59},
        { y: thisWeekDaily[2], a:119, b:57},
        { y: thisWeekDaily[3], a:101, b:46},
        { y: thisWeekDaily[4], a:81, b:0},
        { y: thisWeekDaily[5], a:127, b:0},
        { y: thisWeekDaily[6], a:84, b:0}
      ],
      xkey: 'y',
      ykeys: ['a','b'],
      labels: ['Last Week','This Week'],
      resize: true,
      hideHover: true,
      xLabels: 'day',
      gridTextSize: '10px',
      lineColors: ['rgb(149, 183, 93)','#1caf9a'],
      gridLineColor: '#E5E5E5'
    });

    
});

