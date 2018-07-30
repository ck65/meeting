/**
 *
 * @authors ${winlily}
 * @email ${winlily@foxmail.com}
 * @date   2017-05-06 10:44:11
 * @version $Id$
 */
var site_url = "http://confplus.ccnu.edu.cn/zxbwj/index.php/";
$(function() {
    /*对bmd框架相关效果进行初始化*/
    $.material.init();
    $.material.ripples();
    $.material.input();
    $.material.checkbox();
    $.material.radio();
    $('input, textarea').placeholder(); // 解决浏览器不支持HTML5的placeholder属性问题
    IEVersion();
    /*点击回到顶部的元素*/
    $(".back-top").click(function(e) {
        if ($('html').scrollTop()) {
            $('html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        }
        $('body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    backTopShow(); //back-top回到顶部元素的渐显与渐隐

    $(".register-upload-left").each(function(index, el) {
        var _this = $(this);
        if (index < 9) {
            _this.attr("data-index", '0' + (index + 1))
        } else {
            _this.attr("data-index", index + 1)
        }
    });
    /*赞助商信息*/
    var wwidth = $('.marquee-content li').outerHeight(true);
    console.log(wwidth)
    var object = {
        movevalue: wwidth,
        scrollType:"margin-top"
    }
    $(".marquee-content").myMarquee(object);
    /*个人中心*/
    $('.user-info-panel .panel-body').show();
    $('.user-info-panel ul.panel-heading').css({
        'background-color': '#1295d8',
        'color': '#fff'
    });
    /*后台管理*/
    var _body = $(document).height(); //获取浏览器时下窗口文档body的高度
    var _sidebar_right = $('.content-right').height(); //获取右边元素高度
    (_body > _sidebar_right) ? $('.sidebar-left').height(_body): $('.sidebar-left').height(_sidebar_right)
})

//判断是否是IE浏览器，包括Edge浏览器
function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
    var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            alert(7)
            return "IE7";
        } else if (fIEVersion < 10) {
            $('link[data-link="bmd"]').remove();
        } else {
            return "0"
        } //IE版本过低
    } else if (isEdge) {
        return "Edge";
    } else {
        return "-1"; //非IE
    }
}

/*缓慢出现和消失back-top*/
function backTopShow() {
    $(window).scroll(function(e) {
        var scrollTopVal = $(window).scrollTop();
        if (scrollTopVal > 200) {
            $(".back-top").fadeIn(1000); //以1秒的间隔渐显classs=back-top的元素
        } else {
            $(".back-top").fadeOut(1000); //以1秒的间隔渐显classs=back-top的元素
        }
    });
}
/*购物车点击票数+1*/
function addTicket(obj) {
    var _obj = $(obj);
    var _input = _obj.siblings('input');
    var _input_val = parseInt(_input.val())
    _input.val(_input_val + 1)
}
/*购物车点击票数-1*/
function minusTicket(obj) {
    var _obj = $(obj);
    var _input = _obj.siblings('input');
    var _input_val = parseInt(_input.val())
    if (_input_val > 0) {
        _input.val(_input_val - 1)
    } else {
        _input.val(0)
    }
}
/*手风琴下拉菜单*/
var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    var links = this.el.find('.link');
    links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
}
Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
    $this = $(this),
        $next = $this.next();
    $next.slideToggle();
    $this.parent().toggleClass('open');
    if (!e.data.multiple) {
        $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
}
var accordion = new Accordion($('.accordion'), false);

/*表单校验*/
/*注册表校验*/
var userEmail = $("#userEmail");
var nickname = $("#nickname");
var password = $("#password");
var confirmPassword = $("#confirmPassword");
var userEmail_lable = userEmail.prev().prev();
var nickname_lable = $("#nickname").prev().prev();
var password_lable = $("#password").prev().prev();
var confirmPassword_lable = $("#confirmPassword").prev().prev();
/*邮箱校验正则*/
//var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
var reg = /(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/;
/*昵称校验正则*/
var patten = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){5,20}$/;
/*注册表单，输入时进行校验*/
userEmail.blur(function() {
    var userEmail_val = userEmail.val();
    if (!reg.test(userEmail_val)) {
        //console.log(lable_text)
        userEmail_lable.text("您输入的邮箱有误,请重新核对后再输入!");
        //return false;
    } else {
        userEmail_lable.text("");
    }
})
nickname.blur(function() {
    var nickname_val = nickname.val();
    if (!patten.test(nickname_val)) {
        //console.log(lable_text)
        nickname_lable.text("昵称只能为以字母开头，只包含字符、数字、下划线，且长度大于5小于20的字符串！")
        //return false;
    } else {
        nickname_lable.text("");
    }
})
/*注册表单，提交时进行校验*/
$('#newUser').click(function(event) {
    var userEmail_val = userEmail.val();
    var nickname_val = nickname.val();
    var password_val = password.val();
    var confirmPassword_val = confirmPassword.val();
    /*邮箱校验*/
    if (userEmail_val === "") {
        userEmail_lable.text("邮箱内容不能为空!");
        //return false;
    } else {
        // newUser_check(userEmail, "username", userEmail_val, site_url + "login/check_username");
        //return false;
    }
    /*昵称校验*/
    if (nickname_val === "") {
        nickname_lable.text("昵称不能为空!");
        //return false;
    } else {
        // newUser_check(nickname, "nickname", nickname_val, site_url + "login/check_nickname");
        //return false;
    }
    /*密码校验*/
    if (password_val === "") {
        password_lable.text("密码不能为空!");
        //return false;
    }
    if (confirmPassword_val === "") {
        confirmPassword_lable.text("密码不能为空!");
        //return false;
    }
    if (password_val !== "" && confirmPassword_val !== "" && password_val !== confirmPassword_val) {
        alert("两次密码输入不一致，请重新输入");
        password_lable.text("请重新输入密码");
        confirmPassword_lable.text("请重新输入密码");
        //return false;
    } else {
        password_lable.text("");
        confirmPassword_lable.text("");
    }
    if (userEmail_lable.text() === "" && nickname_lable.text() === "" && password_lable.text() === "" && confirmPassword_lable.text() === "") {
        $('#register_form').submit();
        /*
        $.ajax({
            type: "post",
            data: { username: userEmail_val, nickname: nickname_val, password: password_val, password2: confirmPassword_val, },
            url: site_url + "login/newUser",
            success: function(data) {
                alert(data);
                var data_Obj = eval("(" + data + ")");

                $.each(data_Obj, function(i, item) {

                });
            },
            error: function() { alert("ajax error"); }
        });
        */
    }
});

// function newUser_check(obj, key, value, url) {
//     var lable = obj.prev().prev();
//     console.log(lable)
//     $.ajax({
//         type: "post",
//         data: key + "=" + value,
//         url: url,
//         success: function(data) {
//             var data_Obj = eval("(" + data + ")");

//             $.each(data_Obj, function(i, item) {
//                 if (item !== 0) {
//                     /*不成功*/
//                     lable.text("已经存在!")
//                 }
//                 console.log(item)
//             });
//         },
//         error: function() { alert("ajax error"); }
//     });

// }

/*会议注册/删除*/
function registerPanelDelete(obj) {
    var _this = $(obj);
    console.log(_this)
    var _id = _this.data('id');
    $.ajax({
        type: "get",
        data: '',
        url: site_url + "goods_car/remove/" + _id,
        success: function(data) {
            console.log(data)
            _this.parents(".col-lg-6").remove();
        },
        error: function() { alert("ajax error"); }
    });
}

/*会议简介左边定位*/
$(".introduction-accordion .accordion>li").on('click', function() {
    var _this = $(this);
    var pos = $("#" + $(this).data("plne")).offset().top - 65;
    $("html,body").animate({ scrollTop: pos }, 1000);
    return false;
})
/*个人中心点击效果*/
$('.user-info-panel .panel-heading').click(function(event) {
    var _this = $(this);
    var i_icon = _this.find('li.pull-left i');
    var i_className = i_icon.attr('class');
    var panel_body = _this.siblings('.panel-body');
    if (i_className == "fa fa-chevron-down") {
        panel_body.toggle(800);
        i_icon.removeClass('fa fa-chevron-down').addClass('fa fa-chevron-up');
        _this.css({
            'background-color': '#1295d8',
            'color': '#fff'
        });
    } else {
        panel_body.toggle(800);
        i_icon.removeClass('fa fa-chevron-up').addClass('fa fa-chevron-down');
        _this.css({
            'background-color': '#fff',
            'color': '#555'
        });
    }
});
/*我的参会券*/
function helpShow() {
    $('#helpModal').modal()
}


$(".autoUserInfo").click(function(e) {
    auto_first_name=$("input[name='auto_first_name']").val();
    auto_last_name=$("input[name='auto_last_name']").val();
    auto_type_id=$("input[name='auto_type_id']").val();
    auto_number_id=$("input[name='auto_number_id']").val();
    auto_organization=$("input[name='auto_organization']").val();
    auto_email=$("input[name='auto_email']").val();
    var _this = $(this);
    var panel_body = _this.parents('.panel-body').eq(0);
    panel_body.find("input[name='first_name[]']").val(auto_first_name);
    panel_body.find("input[name='last_name[]']").val(auto_last_name);
    //panel_body.find("select").find("option[value='1']").attr("selected",true);
    panel_body.find("input[name='number_id[]']").val(auto_number_id);
    panel_body.find("input[name='organization[]']").val(auto_organization);
    panel_body.find("input[name='email[]']").val(auto_email);
});


$(".removeUserInfo").click(function(e) {
    var _this = $(this);
    var panel_body = _this.parents('.panel-body').eq(0);
    panel_body.find("input[name='first_name[]']").val("");
    panel_body.find("input[name='last_name[]']").val("");
    //panel_body.find("select").find("option[value='1']").attr("selected",true);
    panel_body.find("input[name='number_id[]']").val("");
    panel_body.find("input[name='organization[]']").val("");
    panel_body.find("input[name='email[]']").val("");
});
