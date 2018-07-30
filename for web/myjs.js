window.onload = function () {
        var myDiv1 = document.getElementById("d1")
        console.log(myDiv1)
        var mychoic1 = myDiv1.getElementsByTagName("div")
        console.log(mychoic1)

        var mypage1 = document.getElementById("page1")
        var meeach1 = mypage1.getElementsByTagName("span")
        //console.log(meeach)
        for (var i = 0; i < mychoic1.length; i++) {
            mychoic1[i].index = i;
            //console.log(mychoic[i].index)
            mychoic1[i].onmouseover = function () {
                for (var j = 0; j < mychoic1.length; j++) {
                    console.log(j);
                    mychoic1[j].className = "col-md-2 col-xs-12 col-lg-12 col-sm-12 tag";
                    meeach1[j].className = "m";
                }
                this.className = "col-md-2 col-xs-12 col-lg-12 col-sm-12 tag1";
                console.log("ss" + this.index)
                meeach1[this.index].className = "w";
            }
        }
        var myDiv2 = document.getElementById("d2")
        var mychoic2 = myDiv2.getElementsByTagName("div")
        console.log(mychoic2)
        var mypage2 = document.getElementById("page2")
        var meeach2 = mypage2.getElementsByTagName("span")
        //console.log(meeach)
        for (var i = 0; i < mychoic2.length; i++) {
            mychoic2[i].index = i;
            //console.log(mychoic[i].index)
            mychoic2[i].onmouseover = function () {
                for (var j = 0; j < mychoic2.length; j++) {
                    console.log(j);
                    mychoic2[j].className = "col-md-2 col-xs-12 col-lg-12 col-sm-12 tag";
                    meeach2[j].className = "m";
                }
                this.className = "col-md-2 col-xs-12 col-lg-12 col-sm-12 tag1";
                console.log("ss" + this.index)
                meeach2[this.index].className = "w";
            }
        }
    var myDiv3 = document.getElementById("d3")
    var mychoic3 = myDiv3.getElementsByTagName("div")
    console.log(mychoic3)
    var mypage3 = document.getElementById("page3")
    var meeach3 = mypage3.getElementsByTagName("span")
    //console.log(meeach)
    for (var i = 0; i < mychoic3.length; i++) {
        mychoic3[i].index = i;
        //console.log(mychoic[i].index)
        mychoic3[i].onmouseover = function () {
            for (var j = 0; j < mychoic3.length; j++) {
                console.log(j);
                mychoic3[j].className = "col-md-2 col-xs-12 col-lg-12 col-sm-12 tag";
                meeach3[j].className = "m";
            }
            this.className = "col-md-2 col-xs-12 col-lg-12 col-sm-12 tag1";
            console.log("ss" + this.index)
            meeach3[this.index].className = "w";
        }
    }

        var myDiv = document.getElementById("dd")
        var mychoic = myDiv.getElementsByTagName("div")
        console.log(mychoic.length)
        var mypage = document.getElementById("page")
        var meeach = mypage.getElementsByTagName("span")
        //console.log(meeach)
        for (var i = 0; i < mychoic.length; i++) {
            mychoic[i].index = i;
            //console.log(mychoic[i].index)
            mychoic[i].onmouseover = function () {
                for (var j = 0; j < mychoic.length; j++) {
                    console.log(j);
                    mychoic[j].className = "col-md-2 col-xs-12 col-lg-12 col-sm-12 tag";
                    meeach[j].className = "m";
                }
                this.className = "col-md-2 col-xs-12 col-lg-12 col-sm-12 tag1";
                console.log("ss" + this.index)
                meeach[this.index].className = "w";
            }
        }
    }
