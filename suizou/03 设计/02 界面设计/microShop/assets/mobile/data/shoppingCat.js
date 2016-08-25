new Vue({
    el:".content",
    data:{
        orders:[
            {orderName:"美丽在线1",id:"f1",allMoney:"200",shoppings:[
                {shoppingName:"植物油1",id:"f1",orderColor:"红色",orderMoney:"600",src:"<img src='../../assets/mobile/images/order1.jpg' alt=''/>"},
                {shoppingName:"植物油2",orderColor:"红色",orderMoney:"600",src:"<img src='../../assets/mobile/images/order1.jpg' alt=''/>"},
                {shoppingName:"植物油3",orderColor:"红色",orderMoney:"600",src:"<img src='../../assets/mobile/images/order1.jpg' alt=''/>"}

            ]},
            {orderName:"美丽在线2",id:"f2",allMoney:"2000",shoppings:[
                {shoppingName:"植物油5",id:"f2",orderColor:"红色",orderMoney:"600",src:"<img src='../../assets/mobile/images/order1.jpg' alt=''/>"},
                {shoppingName:"植物油6",id:"f2",orderColor:"红色",orderMoney:"600",src:"<img src='../../assets/mobile/images/order1.jpg' alt=''/>"},
                {shoppingName:"植物油7",id:"f2",orderColor:"红色",orderMoney:"600",src:"<img src='../../assets/mobile/images/order1.jpg' alt=''/>"}

            ]},
            {orderName:"美丽在线3",id:"f3",allMoney:"20000",shoppings:[
                {shoppingName:"植物油8",id:"f3",orderColor:"红色",orderMoney:"600",src:"<img src='../../assets/mobile/images/order1.jpg' alt=''/>"},
                {shoppingName:"植物油9",id:"f3",orderColor:"红色",orderMoney:"600",src:"<img src='../../assets/mobile/images/order1.jpg' alt=''/>"},
                {shoppingName:"植物油0",id:"f3",orderColor:"红色",orderMoney:"600",src:"<img src='../../assets/mobile/images/order1.jpg' alt=''/>"}
            ]}
        ]
    }
});


$(function(){
    $(".invoiceList>li:first-child").addClass("active");
    $(".invoiceList>li:last-child").addClass("mb0");
});