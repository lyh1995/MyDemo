<template>
  <div class="tab-index">
    <!-- 顶部 -->
    <!--<MyHeader v-show="isShowHead"></MyHeader>-->
    <!--<MySearcher v-show="!isShowHead"></MySearcher>-->
    <!-- tab页 -->
    <transition name="asideList">
      <MyAsideList v-if="isShowAsideList" font-aside></MyAsideList>
    </transition>
    <transition :name="(toPath === '/Search')?'searcheadin':'searcheadout'" mode="in-out">
      <keep-alive>
        <router-view name="head" front-head></router-view>
        <router-view name="search" front-head></router-view>
      </keep-alive>
    </transition>
    <transition :name="(toPath === '/Search')?'searcherin':'searcherout'" mode="in-out">
      <keep-alive>
        <router-view front-mid></router-view>
      </keep-alive>
    </transition>
    <!-- 播放器 -->
    <MyFooter v-show="isShowFooter" front-foot></MyFooter>
  </div>
</template>

<script>
import MyHeader from './Head/Header.vue'
import MyFooter from './Footer/Footer.vue'
import MySearcher from './Searcher/Searcher.vue'
import { mapState } from 'vuex'
import MyAsideList from './AsideList/AsideList.vue'

export default {
  name: 'front',
  components: {
    MyHeader,
    MyFooter,
    MySearcher,
    MyAsideList
  },
  computed: {
    ...mapState([
      'isShowHead',
      'isShowFooter',
      'toPath',
      'isShowAsideList'
    ])
  },
  data() {
    return {
    }
  }
}
</script>


<style lang="scss">
.asideList-enter, .asideList-leave-to {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.asideList-enter-active, .asideList-leave-active {
  transition: all .3s ease;
}
.searcherin-enter {
  opacity: 0;
  transform: translateY(580px);
}
.searcherout-leave-to {
  opacity: 0;
  transform: translateY(640px);
}
.searcherin-enter-active, .searcherout-leave-active, .searcheadin-enter-active, .searcheadout-leave-active {
  transition: all .3s ease;
  z-index: 2;
}
.searcherout-leave, .searcheadout-leave {
  z-index: 2;
}

.searcheadout-leave-to {
  opacity: 0;
  transform: translateY(640px);
}
.searcheadin-enter {
  opacity: 0;
  transform: translateY(580px);
}
.searcheadout-enter-active, .searcherout-enter-active {
  transition: all .1s ease;
  z-index: -1;
}
.searcheadout-enter, .searcherout-enter {
  z-index: -1;
}

.tab-index {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  [font-aside] {
    position: relative;
    z-index: 5;
  }
  [front-head] {
    position: absolute;
    top: 0;
    left: 0;
    height: 70px;
    width: 100%;
  }
  [front-mid] {
    height: 81.25%;
    width: 100%;
    overflow: auto;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    font-size: 14px;
    position: absolute;
    top: 70px;
    left: 0;
  }
  [front-foot] {
    position: absolute;
    height: 50px;
    width: 100%;
    cursor: pointer;
    bottom: 0;
  }
}
</style>