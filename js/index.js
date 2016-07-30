$(function(){
    var h3=$('#pages0 .inner h3');
    var car =$('#pages0 .inner .car img');
    var vvv=$(".wrap .a-vvv");

    var audio1=$(".wrap audio");
    var aimg1=$(".wrap .a-img1");
    var aimg2=$(".wrap .a-img2");
    var flag=false;
    //背景音乐
    vvv.click(function(){
        // flag=!flag;
        aimg1.fadeToggle();
        aimg2.fadeToggle();
        if(flag){
            audio1.get(0).play();
            flag=false;
        }else{
            audio1.get(0).pause();
            flag=true;
        }
    })

    // ______________预加载start
        var imgArr = ['img/cn_char-s8b150cd475.png','img/dialog_success.png',"imgs/word1.png","imgs/word2.png","imgs/word3.png","imgs/word4.png","imgs/word5.png","imgs/word6.png","imgs/word7.png","imgs/word8.png","imgs/word9.png",
        "imgs/word18.png","imgs/word19.png","imgs/word20.png","imgs/word21.png","imgs/word22.png","imgs/word23.png","imgs/word24.png","imgs/word25.png","imgs/word26.png","imgs/word27.png","imgs/word28.png","imgs/word29.png","imgs/word30.png","imgs/word31.png","imgs/word32.png","imgs/word33.png","imgs/word34.png","imgs/word35.png","imgs/word36.png","imgs/word37.png","imgs/word38.png","imgs/word39.png","imgs/word40.png",
        'img/light.png','img/load-car.png','img/open.png','img/page_cai_bg.jpg','img/page_cai_collection2.png','img/page_cai_collection4.png','img/page_home-bg.jpg','img/page_home_btn.png','img/page_home_car.png','img/page_home_intro.png','img/page_home_true.png','img/page_level1_fail.jpg','img/page_level1_icon.jpg','img/page_level1_list.jpg','img/page_level2_fail.jpg','img/page_level2_icon.jpg','img/page_level2_list.jpg','img/page_level3_fail.jpg','img/page_level3_icon-1.jpg','img/page_level3_icon.jpg','img/page_level3_list.jpg','img/page_level4_fail-1.jpg','img/page_level4_fail.jpg','img/page_level4_icon.jpg',
        'img/page_level4_list.jpg','img/page_level5_fail.jpg','img/page_level5_icon.jpg','img/page_level5_list.jpg','img/page_loading_bg.jpg','img/page_result_bad_0.png','img/page_result_bad_1.png','img/page_result_bad_2.png','img/page_result_bad_3.png','img/page_result_bad_4.png','img/page_result_ok_bg.jpg','img/php5YSkEb.jpg','img/rain_1.png','img/rain_2.png'];
        function preloadimages(obj, complete_cb, progress_cb) {
          var loaded = 0;
          var toload = 0;
          var images = obj instanceof Array ? [] : {};
          toload = obj.length;
          for (var i = 0; i < obj.length; i++) {
              images[i] = new Image();
              images[i].src = obj[i];
              images[i].onload = load;
              images[i].onerror = load;
              images[i].onabort = load;
          }
          if (obj.length == 0) {
              complete_cb(images);
          }

          function load() {
              car.css({
                      '-webkit-animation': "runningCar .5s linear",
                  })
              ++loaded;
              if (progress_cb) {
                  progress_cb(loaded / toload);
              }
              if (loaded >= toload) {
                  complete_cb(images);
              }
          }
      }
      preloadimages(imgArr, function () {
          setTimeout(function () {
          $('#pages0').hide();
          $('#pages1').show();
      }, 1000)

      }, function (progress) {
          progress = parseInt((progress*100));
          h3.html(progress+'%');
      });

        // -----------预加载结束end

    var start=$('#pages1 .inner .sec5 img').click(function(){
        $('#pages1').hide();
        $('#pages2').show();
    })
    var success = [
      "桃花运加持,<br>这就把纯洁的拼车友谊<br>升华一下~",
      "2016年必须知道的<br>七大定律之一:<br>拼车一口价,车费不变定律",
      "你们要的虐狗套餐,<br>拼车相当于<br>两人同行一人免单!<br>上限两人哦~",
      "老板发的红包太小,<br>买不起汉堡......<br>快车我还坐得起哒~",
      "新年出门不怕堵,<br>这有一百种捷径让所有路线<br>都顺理成章!"
  ];
  var fail = [
      "单身怪我咯?<br>不拼哪来的爱情!",
      "这都不造哎,<br>注定一辈子吃土!",
      "除了基友,<br>你木有盆友了咩?",
      "歪!脚气很重么朋友!",
      "想象力已突破天际,<br>还是甩不掉路痴的命"
  ];
    var arr1=["imgs/word1.png","imgs/word2.png","imgs/word3.png","imgs/word4.png","imgs/word5.png","imgs/word6.png","imgs/word7.png","imgs/word8.png"];
    var arr2=["imgs/word9.png","imgs/word10.png","imgs/word11.png","imgs/word12.png","imgs/word13.png","imgs/word14.png","imgs/word15.png","imgs/word16.png"];
    var arr3=["imgs/word17.png","imgs/word18.png","imgs/word19.png","imgs/word20.png","imgs/word21.png","imgs/word22.png","imgs/word23.png","imgs/word24.png"];
    var arr4=["imgs/word25.png","imgs/word26.png","imgs/word27.png","imgs/word28.png","imgs/word29.png","imgs/word30.png","imgs/word31.png","imgs/word32.png"];
    var arr5=["imgs/word33.png","imgs/word34.png","imgs/word35.png","imgs/word36.png","imgs/word37.png","imgs/word38.png","imgs/word39.png","imgs/word40.png"];
    var array=[arr1,arr2,arr3,arr4,arr5];
    var sps=$('#pages2 .inner .p3-img span');

    var zhq1=["47","107","417","0672","4630"];
    var gnum=0;
    var score=0;
    //游戏
    function show(){
        nextg(gnum);
        var str='';
        var clickNum=0;
        sps.unbind('click');
        sps.on('click',function(){
            if(str.indexOf($(this).index()-1)>=0){
                return ;
            }
            str+=$(this).index()-1;
            $('#pages2 .inner .p2-img span').eq(clickNum).html("<img src='"+array[gnum][$(this).index()-1]+"'>");
            clickNum++;
            if(clickNum==$('#pages2 .inner .p2-img span').length){
                if(str==zhq1[gnum]){
                    gnum++;
                    score++;
                    gsuccess(gnum);
                    setTimeout(function(){
                    show();
                    },3000);
                    jige(score);
                }else{
                    $('#pages2 .inner .p1-img img').attr("src","img/page_level"+(gnum+1)+"_fail.jpg");
                    setTimeout(function(){
                        gnum++;
                        gfail(gnum);
                        setTimeout(function(){
                        show();
                    },4000)
                    },1000)
                }
            }
        })
    }
    show();
    function gsuccess(gnum){
        setTimeout(function(){
            $('#pages4').show();
            $('#pages4 .inner .success h4').eq(0).html(success[gnum-1]);
        },1000)
        setTimeout(function(){
            $('#pages4').hide();
        },3000)
    };
    function gfail(gnum){
        $('#pages2 .inner .p1-img img').attr("src","img/page_level"+(gnum)+"_fail.jpg");
        $('#pages3 .inner .fail h4').eq(0).html(fail[gnum-1]);
        setTimeout(function(){
            $('#pages3').show();

        },1000);
        setTimeout(function(){
            $('#pages3').hide();
        },4000)
    }
    function nextg(gnum){
        if(gnum==5){
            $('#pages2').hide();
            $('#pages5').show();
            return;
        }
        $('#pages2 .inner .p1-img img').attr("src","img/page_level"+(gnum+1)+"_icon.jpg");
        $('#pages2 .inner .p3-img img').attr("src","img/page_level"+(gnum+1)+"_list.jpg");
        if(gnum==0){
            $('#pages2 .inner .p2-img').html("<img class='imgs2' src='img/page_cai_collection2.png'  />"+
            "<span class='sp1'></span>"+
            "<span class='sp2'></span>");
        }else if(gnum==1){
            $('#pages2 .inner .p2-img').html("<img class='imgs2' src='img/page_cai_collection3.png'  />"+
            "<span class='sp3'></span>"+
            "<span class='sp4'></span>"+"<span class='sp5'></span>");
        }else if(gnum==2) {
            $('#pages2 .inner .p2-img').html("<img class='imgs2'src='img/page_cai_collection3.png'  />"+
            "<span class='sp3'></span>"+
            "<span class='sp4'></span>"+"<span class='sp5'></span>");
        }else if(gnum==3) {
            $('#pages2 .inner .p2-img').html("<img class='imgs2'src='img/page_cai_collection4.png'  />"+
            "<span class='sp6'></span>"+
            "<span class='sp7'></span>"+"<span class='sp8'></span>"+"<span class='sp9'></span>");
        }else if(gnum==4) {
            $('#pages2 .inner .p2-img').html("<img class='imgs2'src='img/page_cai_collection4.png'  />"+
            "<span class='sp6'></span>"+
            "<span class='sp7'></span>"+"<span class='sp8'></span>"+"<span class='sp9'></span>");
        }
    }
    function jige(score){
        if(score>6){
            return;
        }
        if(score<=1){
            $('#pages5 .inner').css({
                'background': 'url(img/bujinge.jpg)no-repeat',
                'background-size': '100% 100%'
            });
            $("#pages5 .inner .score img").attr('src','img/page_result_bad_'+score+'.png')
        }else{
            $('#pages5 .inner').css({
                'background':' url(img/page_result_ok_bg.jpg)no-repeat',
                'background-size': '100% 100%'
            });
            $("#pages5 .inner .score img").attr('src','img/page_result_bad_'+score+'.png')
            if(score==5){
                $('#pages5 .inner').css({
                    'background':' url(img/page_ok.jpg)no-repeat',
                    'background-size': '100% 100%'
                });
            }
        }
        $('#pages5 .inner .restart').click(function(){
            $("#pages5").hide();
            $("#pages2").show();
            gnum=0;
            score=0;
            show();
        })
    };



});
