(function (){
    //happyBirthdayGordon.js: a simple library to help celebrate the born day of a great teacher

    //primary library object for export to window object
    var lib = {
        //declaration of library variables
        data: {
            gordonDayOfReincarnation: '01/11', 
            todayDate: '01/11/2017',
            numOfHappyCustomers: 202,
            birthdayShouts: [],
            songTime: ['Happy Birthday to You, ', 'Happy Birthday to You, ', 'Happy Birthday dear Gordon, ', 'Happy Birthday to Youuuu!!!!'],
            songTimeCounter: 0,
            recursionCounter: 0,
            zhuQuotes: ['collecting buzzwords leads to greatness', 'discipline is freedom', 'no, thats wrong', 'thats basically as good as codeacademy', 'Good questions save time. Bad questions waste time', 'Yes really, actually do this. Do not rush this step.', 'debugger', 'Nobody wants to look for your typos', 'thats not very interesting', 'whatever']
            // intervalID: window.setInterval(songTime, 500) NOTE: consider implementation of setInterval timer for lib.songTime()
        },
        //check if todayData = Gordon's birthday. If it is, call happyBirthday()
        checkDate: function(){
            (this.data.todayDate.includes(this.data.gordonDayOfReincarnation)) ? this.happyBirthday(this.data.numOfHappyCustomers) : console.log('not today folks!');
        },
        //recursive happyBirthday function runs 'numOfHappyCustomers: 202' times
        //creates array of birthdayShouts
        //currently returns undefined
        happyBirthday: function(n){
            //base case
            if(n === 0){
                return;
            //recusive case
            } else {
                this.data.recursionCounter++;
                //push birthday shout into array
                this.data.birthdayShouts.push('Happy Birthday, Sensai Zhu!');
                return this.happyBirthday(n - 1);
            }
        },
        //console log birthday shouts created by happyBirthday() recursion
        shouts: function(){ 
            for(var i = 0; i < this.data.birthdayShouts.length; i++){
                console.log(this.data.birthdayShouts[i]);
            }
        },
        //ask the console to sing Gordon a lovely song NOTE: requires setInterval for improvement
        songTime: function(){
            while(this.data.songTimeCounter < 4){
                console.log(this.data.songTime[this.data.songTimeCounter]);
                this.data.songTimeCounter++;
            }
        },
        tutorials: function(){
            console.log('Gordon highly recommends you do not use tutorials.');
            console.log(' Please visit https://medium.com/@gordon_zhu/how-to-be-great-at-asking-questions-e37be04d0603 for more information');
            console.log('Seriously, stop looking at tutorials');
        },
        quoteGenerator: function(){
            //adjust max depending on zhuQuote.length
            var min = 0;
            var max = 10;
            var rnd = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(this.data.zhuQuotes[rnd]);
        }
    }

    //export library object to window for global access
    window.happyBirthdayGordonJS = lib;

})();

happyBirthdayGordonJS.quoteGenerator()


