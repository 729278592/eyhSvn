/**
 * Created by WHB on 2016/8/24.
 */
new Vue({
    el:".content",
    data:{
        clothes:[
            {class:"1",title:"巴黎欧莱雅专柜1",smallTile:"全新上市您不容错过的选择，快来选购吧！",oldMoney:"20.00",newMoney:"19.80"},
            {class:"2",title:"巴黎欧莱雅专柜2",smallTile:"全新上市您不容错过的选择，快来选购吧！",oldMoney:"20.00",newMoney:"19.80"}
        ],
        beautys:[
            {class:"3",title:"巴黎欧莱雅专柜3",oldMoney:"20.00",newMoney:"19.80"},
            {class:"4",title:"巴黎欧莱雅专柜4",oldMoney:"20.00",newMoney:"19.80"},
            {class:"5",title:"巴黎欧莱雅专柜5",oldMoney:"20.00",newMoney:"19.80"},
            {class:"6",title:"巴黎欧莱雅专柜6",oldMoney:"20.00",newMoney:"19.80"}
        ],
        digitals:[
            {class:"1",title:"巴黎欧莱雅1",smallTile:"全新上市您不容错过的选择，快来选购吧！",oldMoney:"20.00",newMoney:"19.80"},
            {class:"2",title:"巴黎欧莱雅2",smallTile:"全新上市您不容错过的选择，快来选购吧！",oldMoney:"20.00",newMoney:"19.80"}
        ],
        sciences:[
            {class:"3",title:"巴黎欧莱雅3",oldMoney:"20.00",newMoney:"19.80"},
            {class:"4",title:"巴黎欧莱雅4",oldMoney:"20.00",newMoney:"19.80"},
            {class:"5",title:"巴黎欧莱雅5",oldMoney:"20.00",newMoney:"19.80"},
            {class:"6",title:"巴黎欧莱雅6",oldMoney:"20.00",newMoney:"19.80"}
        ]
    }
});


$(function(){
    $(".shoppingList.style li:odd").addClass("mr0")
});