import Vue from 'vue'
import Router from 'vue-router'
import MusicList from '../components/Front/MusicList/MusicList.vue'
import Front from '../components/Front/Front.vue'
import Player from '../components/Player/Player.vue'
import Roller from '../components/Player/Roll/Roller.vue'
import Lryicer from '../components/Player/Lryic/Lryicer.vue'
import Search from '../components/Searcher/Searcher.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	name: 'Front',
    	component: Front,
    	children: [
	    	{
	    		path: '/',
	    		name: 'MusicList',
	    		component: MusicList
	    	}
    	]
    },
    {
    	path: '/Player',
    	name: 'Player',
    	component: Player,
    	children: [
	    	{
	    		path: '/',
	    		name: 'Roller',
	    		component: Roller
	    	},
		{
			path: '/Player/Lryicer',
			name: 'Lryicer',
			component: Lryicer
		}
    	]
    },
    {
    	path: '/Search',
    	name: 'Searcher',
    	component: Search
    }
  ]
})
