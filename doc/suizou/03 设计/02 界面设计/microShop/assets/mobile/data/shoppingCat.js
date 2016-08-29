new Vue({
    el:".content",
    data:{
        orders:[
            {orderName:"美丽在线1",id:"f1",allMoney:"200",first:true,last:false, checked: false,shoppings:[
                {shoppingName:"植物油1",id:"f2",orderColor:"红色", checked: false,orderMoney:"600",removeShop:true,src:"<img src='../../assets/mobile/images/order1.jpg' alt=''/>"},
                {shoppingName:"植物油2",id:"f3",orderColor:"红色", checked: false,orderMoney:"601",removeShop:false,src:"<img src='../../assets/mobile/images/order1.jpg' alt=''/>"},
                {shoppingName:"植物油3",id:"f4",orderColor:"红色", checked: false,orderMoney:"602",removeShop:false,src:"<img src='../../assets/mobile/images/order1.jpg' alt=''/>"}

            ]},
            {orderName:"美丽在线2",id:"f5",allMoney:"2000",first:false,last:false, checked: false,shoppings:[
                {shoppingName:"植物油5",id:"f6",orderColor:"红色", checked: false,orderMoney:"603",removeShop:false,src:"<img src='../../assets/mobile/images/order1.jpg' alt=''/>"},
                {shoppingName:"植物油6",id:"f7",orderColor:"红色", checked: false,orderMoney:"604",removeShop:false,src:"<img src='../../assets/mobile/images/order1.jpg' alt=''/>"},
                {shoppingName:"植物油7",id:"f8",orderColor:"红色", checked: false,orderMoney:"605",removeShop:false,src:"<img src='../../assets/mobile/images/order1.jpg' alt=''/>"}

            ]},
            {orderName:"美丽在线3",id:"f9",allMoney:"20000",first:false,last:true, checked: false,shoppings:[
                {shoppingName:"植物油8",id:"f10",orderColor:"红色", checked: false,orderMoney:"606",removeShop:false,src:"<img src='../../assets/mobile/images/order1.jpg' alt=''/>"},
                {shoppingName:"植物油9",id:"f11",orderColor:"红色", checked: false,orderMoney:"607",removeShop:false,src:"<img src='../../assets/mobile/images/order1.jpg' alt=''/>"},
                {shoppingName:"植物油0",id:"f12",orderColor:"红色", checked: false,orderMoney:"608",removeShop:false,src:"<img src='../../assets/mobile/images/order1.jpg' alt=''/>"}
            ]}
        ],
        hide:true
    },
    methods:{
        toggleTasks:function(order){
            order.first = ! order.first;
        },
        delegateOrder:function(index){
            this.hide = false;
//            for(var i=0;i<this.orders.length;i++){
//                this.orders[i].shoppings.$remove(shopping);
//            }
//            console.log(JSON.stringify())
        },
        removeShopping:function(){
            this.hide = true;
        },
        hideMask:function(){
            this.hide = true;
        },
        active:function() {
            return typeof this.value !== 'boolean' && this.group ? ~this.$parent.value.indexOf(this.value) : this.checked === this.value
        }
    },

    props: {
        value: {
            default: true
        }}
});


