
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('articles', require('./components/Articles.vue'));
Vue.component('sidebar', require('./components/Sidebar.vue'));
Vue.component('paginate', require('./components/Paginate.vue'));
Vue.component('article-table', require('./components/ArticleTable.vue'));
Vue.component('modal', require('./components/Modal.vue'));

import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import CreateBlogPost from './components/CreateBlogPost.vue';
import DisplayBlogPost from './components/DisplayBlogPost.vue';
import EditBlogPost from './components/EditBlogPost.vue';

const routes = [
    {
        name: 'CreateBlogPost',
        path: '/blogPosts/create',
        component: CreateBlogPost
    },
    {
        name: 'DisplayBlogPost',
        path: '/blogPosts',
        component: DisplayBlogPost
    },
    {
        name: 'EditBlogPost',
        path: '/blogPosts/:id',
        component: EditBlogPost
    }
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');