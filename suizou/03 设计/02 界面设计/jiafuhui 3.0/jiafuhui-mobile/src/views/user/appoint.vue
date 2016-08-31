<template>
<div class="appoint">
	<group>
        <div class="title">小轩<small>订单号：88669900</small></div>
	    <cell title="月嫂级别" value="经济适用" ></cell>
	    <cell title="面试时间" value="2016-06-06"></cell>
	    <cell title="预产期时间" value="2016-12-06"></cell>
	    <cell title="地址" value="四川省成都市玉林区301"></cell>
    </group>
    <group>
    	<div class="title">张阿姨<small>订单号：88669900</small></div>
	    <cell title="月嫂级别" value="豪华大师" ></cell>
	    <cell title="面试时间" value="2016-06-06"></cell>
	    <cell title="预产期时间" value="2016-12-06"></cell>
	    <cell title="地址" value="四川省成都市玉林区301"></cell>
    </group>
</div>
</template>

<script>
  import Group from 'vux/src/components/group'
  import Cell from 'vux/src/components/cell'

  export default {
    data () {
      return {
        list: []
      }
    },
    ready () {
      document.title = '我的预约'
    },
    components: {
      Group,
      Cell
    }
  }
</script>