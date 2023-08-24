import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	lang: "zh-CN",
	title: "建站狗",
	description: "建站狗的个人知识库",
	base: "/",

	head: [
		[
			'link',
			{
				rel: 'stylesheet',
				href: '/jianzhangou.css'
			}
		]
	],

	markdown: {
		// theme: 'material-palenight',
		lineNumbers: true
	},

	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		siteTitle: '建站狗',
		// siteTitle: false,
		// logo: '/logo.png',

		search: {
			provider: 'local'
		},

		nav: [
			{ text: 'index', link: '/index.md', activeMatch: '/' },
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/jianzhangou/' }
		],

		sidebar: {
			// '/chujie/': [{
			// 	text: '快速开始',
			// 	collapsed: true,
			// 	items: [{
			// 		text: '简介',
			// 		link: '/chujie/'
			// 	}]
			// },
			// {
			// 	text: '环境搭建与系统安装',
			// 	collapsed: true,
			// 	items: [{
			// 		text: 'Windows',
			// 		link: '/chujie/huanjing/windows'
			// 	},
			// 	{
			// 		text: 'MacOS',
			// 		link: '/chujie/huanjing/macos'
			// 	},
			// 	{
			// 		text: 'Linux',
			// 		link: '/chujie/huanjing/linux'
			// 	}
			// 	]
			// },

			// {
			// 	text: '访问模式',
			// 	collapsed: true,
			// 	items: [{
			// 		text: '名词解释',
			// 		link: '/chujie/moshi/mingci'
			// 	},
			// 	{
			// 		text: '静态模式',
			// 		link: '/chujie/moshi/jingtai'
			// 	},
			// 	{
			// 		text: '动态模式',
			// 		link: '/chujie/moshi/dongtai'
			// 	}
			// 	]
			// },

			// {
			// 	text: '栏目管理',
			// 	collapsed: true,
			// 	items: [{
			// 		text: '名词解释',
			// 		link: '/chujie/lanmu/mingci'
			// 	},
			// 	{
			// 		text: '栏目属性',
			// 		link: '/chujie/lanmu/shuxing'
			// 	},
			// 	{
			// 		text: '封面内容编辑',
			// 		link: '/chujie/lanmu/fmnrbj'
			// 	},
			// 	{
			// 		text: '增加栏目',
			// 		link: '/chujie/lanmu/zengjia'
			// 	}
			// 	]
			// },

			// {
			// 	text: '内容(文章)管理',
			// 	collapsed: true,
			// 	items: [
			// 		{
			// 			text: '增加内容',
			// 			link: '/chujie/neirong/zengjianeirong'
			// 		},
			// 		{
			// 			text: '插入视频',
			// 			link: '/chujie/neirong/charushipin'
			// 		},
			// 		{
			// 			text: '删除内容',
			// 			link: '/chujie/neirong/shanchuneirong'
			// 		},
			// 		{
			// 			text: '修改内容',
			// 			link: '/chujie/neirong/xiugaineirong'
			// 		},
			// 		{
			// 			text: '字段详解',
			// 			link: '/chujie/neirong/ziduan'
			// 		}
			// 	]
			// },


			// {
			// 	text: '批量维护',
			// 	collapsed: true,
			// 	items: [{
			// 		text: '批量屏蔽',
			// 		link: '/chujie/piliangweihu/piliangpingbitihuan.md#批量屏蔽'
			// 	},
			// 	{
			// 		text: '批量替换',
			// 		link: '/chujie/piliangweihu/piliangpingbitihuan.md#批量替换'
			// 	},
			// 	{
			// 		text: '批量删除',
			// 		link: '/chujie/piliangweihu/piliangshanchu-1.md'
			// 	}
			// 	]
			// },

			// {
			// 	text: '系统配置',
			// 	collapsed: true,
			// 	items: [{
			// 		text: '常用配置',
			// 		link: '/chujie/config/'
			// 	}
			// 	]
			// },

			// ],

		},

		outline: 2,

		outlineTitle: '快速导航',

		docFooter: {
			prev: '上一篇',
			next: '下一篇'
		},

		footer: {
			message: 'Released under the MIT License.',
			copyright: '© 2023 JianZhanGou. All rights reserved.'
		},
	}
})