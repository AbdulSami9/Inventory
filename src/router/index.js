import {createWebHistory, createRouter} from "vue-router";

const routes = [
	{
		path: "/",
		alias: "/admin",
		name: "admin",
		component: () => import("../Layout/Admin/AdminIndex.vue"),
		children: [
			{
				path: "dashboard",
				name: "dashboard",
				component: () => import("../views/DashboardView.vue"),
				meta: {pageName: "Dashboard"},
			},
			{
				path: "/inventory",
				name: "inventory",
				component: () => import("../views/InventoryManagement.vue"),
			},
			{
				path: "/add-inventory",
				name: "addInventory",
				component: () => import("../views/AddProduct.vue"),
			},
		],
	},

	{
		path: "/login",
		name: "login",
		component: () => import("../views/LoginView.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
