$(function(){

/*=====================================
            新增專欄
    =======================================*/
$(".ad-spe_add").click(function(){    
$(this).parent().parent().parent().parent().css({'display':'none'});
$("#admTable").after(
    '<div class="ad-remove">'+
    '<table id="speAddTable">'+
      '<tr>'+
        '<th>專欄標題</th>'+
        '<td><input type="text" /></td>'+
      '</tr>'+
       '<tr>'+
        '<th>專欄作者</th>'+
        '<td><input type="text" /></td>'+
      '</tr>'+                 

      '<tr>'+
        '<th>專欄照片</th>'+
        '<td><input type="file" /></td>'+
      '</tr>'+                  
      '<tr>'+
        '<th>專欄內容</th>'+
        '<td><textarea name="" id="" cols="30" rows="10"></textarea></td>'+
      '</tr>'+
        '<th>確認修改</th>'+
        '<td><input type="submit" name="" value="確定修改" class="btn-lg btn-blue" id="ad-spe-add"><input type="submit" name="" value="取消修改" class="btn-lg btn-blue" id="ad-spe-cansel"></td>'+
      '</tr>'+

    '</table>'+
    '</div>'

    );

})
// $(".ad-spe_add").click(function(){

//         var spe_add = $(this).parent().parent().children("td:first-child");
//         $(this).parent().parent().parent().parent().css({'disspey':'none'});
//         console.log(spe_add.text());
//          $.ajax({
//             url: 'php/admin.php',//php,jsp and etc..
//             type: 'POST',
//             data: {
//                spe_add:spe_add.text()
//             },
//             dataType: "json",
//             async: false,
//             success: function(data, textStatus, jqXHR) {
//                 console.log('Success: ' + textStatus);
//                 console.log(data);
//                console.log();
//               // pla_report();      

//             },

//             error: function(jqXHR, textStatus, errorThrown,data) {
//                 // Handle errors here
//                 console.log('Errors: ' + textStatus);
//                 // STOP LOADING SPINNER
//                  console.log(jqXHR);
//                  console.log(errorThrown);
//             }

//         });        
// })

function sendArea(){
    $("#ad-act-cansel").click(function(){
    $('div').remove('.ad-remove');
    $('#actTable').show();   
});
    $("#ad-act-change").click(function(){
    var act_stateNo = $(this).parent().parent().parent().parent().children("input:first-child");
    var act_stateNum = $(this).parent().parent().prev().children("td").children("select");
    console.log('stateNo',act_stateNo.val(),'stateNum',act_stateNum.val());
    $.ajax({
        url: 'php/admin.php',//php,jsp and etc..
        type: 'POST',
        data: {
           act_stateNo:act_stateNo.val(),
           act_stateNum:act_stateNum.val()
        },
        dataType: "json",
        async: false,
        success: function(data, textStatus, jqXHR) {
            console.log('Success: ' + textStatus);
            console.log(data.act_state);
            document.location.href="admin_act.php"; 
        },

        error: function(jqXHR, textStatus, errorThrown,data) {
            // Handle errors here
            console.log('Errors: ' + textStatus);
            // STOP LOADING SPINNER
             console.log(jqXHR);
             console.log(errorThrown);
        }

    });
    
})  
}//send Area
/*=====================================
            修改活動狀態
    =======================================*/
$(".ad-act_change").click(function(){
        var act_change = $(this).parent().parent().children("td:first-child");
        $(this).parent().parent().parent().parent().css({'display':'none'});
        console.log(act_change.text());
         $.ajax({
            url: 'php/admin.php',//php,jsp and etc..
            type: 'POST',
            data: {
               act_change:act_change.text()
            },
            dataType: "json",
            async: false,
            success: function(data, textStatus, jqXHR) {
                console.log('Success: ' + textStatus);
                console.log(data);
               console.log();
                $("#admTable").after(
                '<div class="ad-remove">'+
                '<table id="actChangeTable">'+
                  '<input type="hidden" value="'+data[0].act_no+'" />'+
                  '<tr>'+
                    '<th>活動名稱</th>'+
                    '<td>'+data[0].act_name+'</td>'+
                  '</tr>'+
                  '<tr>'+
                    '<th>活動照片</th>'+
                    '<td><img src="'+data[0].act_img+'" alt="" width="200" /></td>'+
                  '</tr>'+ 
                   '<tr>'+
                    '<th>活動類型</th>'+
                    '<td>'+data[0].actCla_name+'</td>'+
                  '</tr>'+                 

                  '<tr>'+
                    '<th>會員名稱</th>'+
                    '<td>'+data[0].mem_name+'</td>'+
                  '</tr>'+                  
                  '<tr>'+
                    '<th>發文日期</th>'+
                    '<td>'+data[0].act_startDate+'</td>'+
                  '</tr>'+
                  
                    '<th>活動內容</th>'+
                    '<td>'+data[0].act_info+'</td>'+
                  '</tr>'+
                  '<tr>'+

                  '<tr>'+
                    '<th>變更狀態</th>'+
                    '<td><select class="ad-act-state">'+
                                '<option value="0">待審核</option>'+
                                '<option value="1">通過</option>'+
                                '<option value="2">不合格</option>'+
                              '</select></td>'+
                  '</tr>'+
                  '<tr>'+
                    '<th>確認修改</th>'+
                    '<td><input type="submit" name="" value="確定修改" class="btn-lg btn-blue" id="ad-act-change">'+
                    '<input type="submit" name="" value="取消修改" class="btn-lg btn-blue" id="ad-act-cansel"></td>'+
                  '</tr>'+
                
                '</table>'+
                '</div>'
                
              );
              sendArea();      

            },

            error: function(jqXHR, textStatus, errorThrown,data) {
                // Handle errors here
                console.log('Errors: ' + textStatus);
                // STOP LOADING SPINNER
                 console.log(jqXHR);
                 console.log(errorThrown);
            }

        });        
})



/*=====================================
            送出論壇文章檢舉數
    =======================================*/
function pla_report(){
/*=====================================
            取消論壇文章檢舉
    =======================================*/
    $("#ad-pla-cansel").click(function(){
    $('div').remove('.ad-remove');
    $('#forumTable').show();      
})
  $("#ad-pla-change").click(function(){
    var pla_reportNo = $(this).parent().parent().parent().parent().children("input");
    var pla_reportNum = $(this).parent().parent().prev().children("td").children("input");
    console.log(pla_reportNo.val(),pla_reportNum.val());
    $.ajax({
        url: 'php/admin.php',//php,jsp and etc..
        type: 'POST',
        data: {
           pla_reportNo:pla_reportNo.val(),
           pla_reportNum:pla_reportNum.val()
        },
        dataType: "json",
        async: false,
        success: function(data, textStatus, jqXHR) {
            console.log('Success: ' + textStatus);
            console.log(data.pla_report);
            // pla_report.text(data.pla_report);
        },

        error: function(jqXHR, textStatus, errorThrown,data) {
            // Handle errors here
            console.log('Errors: ' + textStatus);
            // STOP LOADING SPINNER
             console.log(jqXHR);
             console.log(errorThrown);
        }

    });  
    $('div').remove('.ad-remove');
    $('#forumTable').show(); 
    document.location.href="admin_pla.php"; 
})  
}

/*=====================================
            編輯貼文
    =======================================*/
$(".ad-pla_change").click(function(){
        var pla_change = $(this).parent().parent().children("td:first-child");
        $(this).parent().parent().parent().parent().css({'display':'none'});
        console.log(pla_change.text());
         $.ajax({
            url: 'php/admin.php',//php,jsp and etc..
            type: 'POST',
            data: {
               pla_change:pla_change.text()
            },
            dataType: "json",
            async: false,
            success: function(data, textStatus, jqXHR) {
                console.log('Success: ' + textStatus);
                console.log(data);
               console.log();
                $("#admTable").after(
                '<div class="ad-remove">'+
                '<table id="plaChangeTable">'+
                  '<input type="hidden" value="'+data[0].pla_no+'" />'+
                  '<tr>'+
                    '<th>文章名稱</th>'+
                    '<td>'+data[0].pla_title+'</td>'+
                  '</tr>'+
                   '<tr>'+
                    '<th>文章類型</th>'+
                    '<td>'+data[0].plaCla_name+'</td>'+
                  '</tr>'+                 

                  '<tr>'+
                    '<th>會員名稱</th>'+
                    '<td>'+data[0].mem_name+'</td>'+
                  '</tr>'+                  
                  '<tr>'+
                    '<th>發文日期</th>'+
                    '<td>'+data[0].pla_date+'</td>'+
                  '</tr>'+
                  '<tr>'+
                    '<th>文章內容</th>'+
                    '<td>'+data[0].pla_content+'</td>'+
                  '</tr>'+
                  '<tr>'+
                    '<th>被檢舉數</th>'+
                    '<td><input type="text" name="pla_place" value="'+data[0].pla_report+'" placeholder=""></td>'+
                  '</tr>'+
                  '<tr>'+
                    '<th>確認修改</th>'+
                    '<td><input type="submit" name="" value="確定修改" class="btn-lg btn-blue" id="ad-pla-change"><input type="submit" name="" value="取消修改" class="btn-lg btn-blue" id="ad-pla-cansel"></td>'+
                  '</tr>'+
                
                '</table>'+
                '</div>'
                
              );
              pla_report();      

            },

            error: function(jqXHR, textStatus, errorThrown,data) {
                // Handle errors here
                console.log('Errors: ' + textStatus);
                // STOP LOADING SPINNER
                 console.log(jqXHR);
                 console.log(errorThrown);
            }

        });        
})
/*=====================================
            論壇檢舉
    =======================================*/
    // $(".ad-pla_report").click(function(){
    //     var pla_reportNo = $(this).parent().parent().children("td:first-child");
    //     var pla_report = $(this).parent().prev();
    //     console.log(pla_reportNo.text());
    //     $.ajax({
    //         url: 'php/admin.php',//php,jsp and etc..
    //         type: 'POST',
    //         data: {
    //            pla_reportNo:pla_reportNo.text()
    //         },
    //         dataType: "json",
    //         async: false,
    //         success: function(data, textStatus, jqXHR) {
    //             console.log('Success: ' + textStatus);
    //             console.log(data.pla_report);
    //             pla_report.text(data.pla_report);
    //         },

    //         error: function(jqXHR, textStatus, errorThrown,data) {
    //             // Handle errors here
    //             console.log('Errors: ' + textStatus);
    //             // STOP LOADING SPINNER
    //              console.log(jqXHR);
    //              console.log(errorThrown);
    //         }

    //     });        
    // })

/*=====================================
            活動審核
    =======================================*/
    $(".ad-act-state").change(function(){
        var act_state_no = $(this).parent().parent().children("td:first-child");
        var act_stateFinal= $(this).parent().prev();
        var act_state= $(this).children("option:selected").val();
        console.log(act_state);
        console.log(act_state_no.text());
        $.ajax({
            url: 'php/admin.php',//php,jsp and etc..
            type: 'POST',
            data: {
               act_state:act_state,
               act_state_no:act_state_no.text()
            },
            dataType: "json",
            async: false,
            success: function(data, textStatus, jqXHR) {
                console.log('lightBox Success: ' + textStatus);
                console.log(data);
                if(data.act_state==0){
                    act_stateFinal.html('<input type="hidden" name="" value="'+data.act_state+'"><p>待審核</p>');
                }else if(data.act_state==1){
                    act_stateFinal.html('<input type="hidden" name="" value="'+data.act_state+'"><p style="color:green">合格</p>');
                }else{
                    act_stateFinal.html('<input type="hidden" name="" value="'+data.act_state+'"><p style="color:red">不合格</p>');
                }
            },

            error: function(jqXHR, textStatus, errorThrown,data) {
                // Handle errors here
                console.log('Errors: ' + textStatus);
                // STOP LOADING SPINNER
                 console.log(jqXHR);
                 console.log(errorThrown);
            }

        });          
    });
    /*=====================================
                修改活動(可放在前面)
        =======================================*/
    // $(".ad-act_change").click(function(){

    //     var act_change = $(this).parent().parent().children("td:first-child");
    //     console.log(act_change.text());
    //      $.ajax({
    //         url: 'php/admin.php',//php,jsp and etc..
    //         type: 'POST',
    //         data: {
    //            act_change:act_change.text()
    //         },
    //         dataType: "json",
    //         async: false,
    //         success: function(data, textStatus, jqXHR) {
    //             console.log('lightBox Success: ' + textStatus);
    //             console.log(data);
    //            var startDate = new Date(data[0].act_startDate);
    //            var endDate = new Date(data[0].act_endDate);
    //            console.log(startDate.getDate()>9? startDate.getDate():'0'+startDate.getDate());
    //             $("#admTable").after('<div id="ad-actChange">'+
    //             '<form action="php/admin.php" method="post">'+
    //             '<table id="actChangeTable">'+
    //               '<tr>'+
    //                 '<th>活動名稱</th>'+
    //                 '<td><input type="text" name="act_name" value="'+data[0].act_name+'" placeholder=""></td>'+
    //               '</tr>'+
    //                '<tr>'+
    //                 '<th>活動類型</th>'+
    //                 '<td><input type="text" name="act_class" value="'+data[0].actCla_name+'" placeholder=""></td>'+
    //               '</tr>'+                 

    //               '<tr>'+
    //                 '<th>會員編號</th>'+
    //                 '<td><input type="text" name="mem_no" value="'+data[0].mem_name+'" placeholder=""></td>'+
    //               '</tr>'+                  
    //               '<tr>'+
    //                 '<th>活動開始日期</th>'+
    //                 '<td><input type="date" name="act_startDate" value="'+startDate.getFullYear()+'-'+(startDate.getMonth()+1 < 10 ? '0'+(startDate.getMonth()+1) : startDate.getMonth()+1) + '-'+(startDate.getDate()>9? startDate.getDate():'0'+startDate.getDate())+'" placeholder="">到<input type="time" name="" value="'+startDate.getHours() + ':'+(startDate.getMinutes()>9? startDate.getMinutes():'0'+startDate.getMinutes()) + ':0'+startDate.getSeconds()+'" placeholder=""></td>'+
    //               '</tr>'+
    //               '<tr>'+
    //                 '<th>活動結束日期</th>'+
    //                 '<td><input type="date" name="act_endDate" value="'+endDate.getFullYear()+'-'+(endDate.getMonth()+1 < 10 ? '0'+(endDate.getMonth()+1) : endDate.getMonth()+1) + '-'+(endDate.getDate()>9? endDate.getDate():'0'+endDate.getDate())+'" placeholder="">到<input type="time" name="" value="'+endDate.getHours() + ':'+(endDate.getMinutes()>9? endDate.getMinutes():'0'+endDate.getMinutes()) + ':0'+endDate.getSeconds()+'" placeholder=""></td>'+
    //               '</tr>'+
    //               '<tr>'+
    //                 '<th>活動地點</th>'+
    //                 '<td><input type="text" name="act_place" value="'+data[0].act_place+'" placeholder=""></td>'+
    //               '</tr>'+
    //               '<tr>'+
    //                 '<th>活動緯度</th>'+
    //                 '<td><input type="text" name="act_lat" value="'+data[0].act_lat+'" placeholder=""></td>'+
    //               '</tr>'+
    //               '<tr>'+
    //                 '<th>活動經度</th>'+
    //                 '<td><input type="text" name="act_lng" value="'+data[0].act_lng+'" placeholder=""></td>'+
    //               '</tr>'+
    //               '<tr>'+
    //                 '<th>活動人數</th>'+
    //                 '<td><input type="text" name="act_limit" value="'+data[0].act_limit+'" placeholder=""></td>'+
    //               '</tr>'+                                                                
    //               '<tr>'+
    //                 '<th>活動費用</th>'+
    //                 '<td><input type="text" name="act_price" value="'+data[0].act_price+'" placeholder=""></td>'+
    //               '</tr>'+
    //               '<tr>'+
    //                 '<th>活動圖檔</th>'+
    //                 '<td><input type="file" name="act_img" value="" placeholder=""  enctype="multipart/form-data"><img width="100" src="'+data[0].act_img+'" alt="" /></td>'+
    //               '</tr>'+
    //               '<tr>'+
    //                 '<th>活動介紹</th>'+
    //                 '<td><textarea name="act_info">'+data[0].act_info+'</textarea></td>'+
    //               '</tr>'+

    //               '<tr>'+
    //                 '<th>確認修改</th>'+
    //                 '<td><input type="submit" name="" value="確定修改" class="btn-lg btn-blue"></td>'+
    //               '</tr>'+

    //             '</table>'+
    //             '</form>'+
    //           '</div>');


    //         },

    //         error: function(jqXHR, textStatus, errorThrown,data) {
    //             // Handle errors here
    //             console.log('Errors: ' + textStatus);
    //             // STOP LOADING SPINNER
    //              console.log(jqXHR);
    //              console.log(errorThrown);
    //         }

    //     });     
    // })

    /*=====================================
                後端刪除活動
        =======================================*/
    $(".ad-act_delete").click(function(){
        var act_delete = $(this).parent().parent().children("td:first-child");
        console.log(act_delete);
        $.ajax({
            url: 'php/admin.php',//php,jsp and etc..
            type: 'POST',
            data: {
               act_delete:act_delete.text()
            },
            dataType: "json",
            async: false,
            success: function(data, textStatus, jqXHR) {
                console.log('lightBox Success: ' + textStatus);
                console.log(data);
                act_delete.parent().remove();
            },

            error: function(jqXHR, textStatus, errorThrown,data) {
                // Handle errors here
                console.log('Errors: ' + textStatus);
                // STOP LOADING SPINNER
                 console.log(jqXHR);
                 console.log(errorThrown);
            }

        });        
    })
    /*=====================================
                後端修改論壇
        =======================================*/
    $(".ad-pla_change").click(function(){
        console.log("click");
    $("#ad-plaChange ").css({
            "display":"block"
        })
    })
    $("#a-lb-x").click(function(){
         $("#ad-actAdd ").css({
            "display":"none"
        })
    })    

    /*=====================================
                後端修改活動
        =======================================*/
    // $(".ad-act_change").click(function(){
    //     console.log("click");
    // $("#ad-actChange ").css({
    //         "display":"block"
    //     })
    // })
    // $("#a-lb-x").click(function(){
    //      $("#ad-actAdd ").css({
    //         "display":"none"
    //     })
    // })
    /*================================
            後端新增活動
    ===================================*/
    $(".ad-act_add").click(function(){
        console.log("click");
        $("#ad-actAdd ").css({
            "display":"block"
        })
    })
    $("#a-lb-x").click(function(){
         $("#ad-actAdd ").css({
            "display":"none"
        })
    })
    /*================================
            管理員帳號修改
    ===================================*/
    $(".ad-adm_change").click(function(){
        var adm_name=$(this).parent().prev().prev().prev().children("input");
        var adm_acc=$(this).parent().prev().prev().children("input");
        var adm_psw=$(this).parent().prev().children("input");
        var adm_no=$(this).parent().prev().prev().prev().prev().text();
        console.log(adm_name.val(),"adm_no",adm_no);
        $.ajax({
            url: 'php/admin.php',//php,jsp and etc..
            type: 'POST',
            data: {
               adm_no:adm_no,
               adm_nameChange:adm_name.val(),
               adm_accChange:adm_acc.val(),
               adm_pswChange:adm_psw.val()
            },
            dataType: "json",
            async: false,
            success: function(data, textStatus, jqXHR) {
                console.log('lightBox Success: ' + textStatus);
                console.log(data);
                alert(data.status);
            },

            error: function(jqXHR, textStatus, errorThrown,data) {
                // Handle errors here
                console.log('Errors: ' + textStatus);
                // STOP LOADING SPINNER
                 console.log(jqXHR);
                 console.log(errorThrown);
            }

        });

    })
    /*================================
                 管理員刪除
    ===================================*/
    adm_delete();
    function adm_delete(){
        $(".ad-adm_delete").click(function(){
        var adm_delete=$(this).parent().parent().children("td:first-child");
        console.log("adm_delete",adm_delete.text());
         $.ajax({
            url: 'php/admin.php',//php,jsp and etc..
            type: 'POST',
            data: {
               adm_delete:adm_delete.text()
            },
            dataType: "json",
            async: false,
            success: function(data, textStatus, jqXHR) {
                console.log('lightBox Success: ' + textStatus);
                console.log(data);
                adm_delete.parent().remove();

            },

            error: function(jqXHR, textStatus, errorThrown,data) {
                // Handle errors here
                console.log('Errors: ' + textStatus);
                // STOP LOADING SPINNER
                 console.log(jqXHR);
                 console.log(errorThrown);
            }

        });

    })
}




    /*================================
            管理員新增
    ===================================*/
    $(".ad-admAdd").click(function(){
        var adm_name=$("#adm_name").val();
        var adm_acc=$("#adm_acc").val();
        var adm_psw=$("#adm_psw").val();
        $.ajax({
            url: 'php/admin.php',//php,jsp and etc..
            type: 'POST',
            data: {
               adm_name:adm_name,
               adm_acc:adm_acc,
               adm_psw:adm_psw
            },
            dataType: "json",
            async: false,
            success: function(data, textStatus, jqXHR) {
                console.log('lightBox Success: ' + textStatus);
                console.log(data);
                $("#ad-before").before('<tr><td>'+data[0].adm_no+'</td><td><input type="text" value='+data[0].adm_name+' /></td><td><input type="text" value='+data[0].adm_acc+' /></td>'+
                 '<td><input type="text" value='+data[0].adm_psw+' /></td><td><input type="button" value="修改" class="ad-adm_change"></td>'+ 
                  '<td><input type="button" value="刪除" class="ad-adm_delete"></td></tr>');
                $("#adm_name").val("");$("#adm_acc").val("");$("#adm_psw").val("");
                $("#adm_no").text(parseInt(data[0].adm_no)+1);


            },

            error: function(jqXHR, textStatus, errorThrown,data) {
                // Handle errors here
                console.log('Errors: ' + textStatus);
                // STOP LOADING SPINNER
                 console.log(jqXHR);
                 console.log(errorThrown);
            }

        });
        adm_delete();
    })






    /*================================
                會員權限變更
    ===================================*/
    $(".ad-changePower").click(function(){
        var mem_c = $(this).parent().prev("td");
        var mem_close=$(this).parent().prev("td").text();
        // console.log(mem_close);

        $.ajax({
            url: 'php/admin.php',//php,jsp and etc..
            type: 'POST',
            data: {
               mem_close:mem_close
            },
            dataType: "json",
            async: false,
            success: function(data, textStatus, jqXHR) {
                console.log('lightBox Success: ' + textStatus);
                console.log(data);

                mem_c.text(data[0].mem_close);
                console.log(data[0].mem_close);
            },

            error: function(jqXHR, textStatus, errorThrown,data) {
                // Handle errors here
                console.log('Errors: ' + textStatus);
                // STOP LOADING SPINNER
                 console.log(jqXHR);
                 // console.log(errorThrown);
            }

        });
         
})

/*=====================================
                 表格出現
    =======================================*/
$('.adminMenu li').click(function(){
    var num = $(this).index();
    console.log(num);
    $('#view table:eq('+ num +')').show().css({'width':'90%'});
    $('table').not('#view table:eq('+ num +')').css({'display':'none','width':'0%'});
    $('div').remove('.ad-remove');
    // $('form').css({'width':'0%'});
})





$('.adminMenu li').click(function(){
    $(this).addClass('show').siblings().removeClass('show');

})



    /*================================
                表格滑動
    ===================================*/
    // var _liLeng = $('#adminNav li').length;
    // for(var i = 0 ; i < _liLeng ; i++){
    //   $('.adminMenu li:eq('+ i +')').click(function(){
    //    $("div").remove("#ad-actChange");
    //    $("div").remove("#ad-plaChange");
    //     $("#ad-actAdd").css({
    //         'display':'none'
    //     })
    //     $(this).addClass('show').siblings().removeClass('show');
    //     var a = $(this).index();
          // $('#view table:eq('+ a +')').stop(true,false).animate({'left':'0'},500).siblings("table").animate({'left':'200%'},500);
        // $('#view table:eq('+ a +')').siblings("table").css({'display':'block'});
      // })

    // }  

})//init end
