import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello2 from '@/components/HelloWorld2'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/hello2',
        name: 'HelloWorld',
        component: Hello2
    }]
})