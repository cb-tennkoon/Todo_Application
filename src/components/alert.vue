<template>
  <div class="" :class="mode">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "alert",
  props:[
    'mode'
  ]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.primary{
    color:black ;
    background-color:#004085;
    border-color: #b8daff;
}
.success{
    color: #383d41;
    background-color: #e2e3e5;
    border-color: #d6d8db;
}
.danger{
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
}
.warning{
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
}
.info{
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
}
.alert{
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    border-radius: .25rem;
}
</style>
