const categories = ["Men", "Women", "Kids"];
const orders = [
	{
		id: 1,
		name: "Jeans",
		price: 20,
		category: "Men",
		date: new Date(2023, 4, 24),
		Month: "November",
	},
	{
		id: 2,
		name: "Denim",
		price: 30,
		category: "Women",
		// date: "10-02-2023",
		date: new Date(2023, 4, 24),
		Month: "January",
	},
	{
		id: 3,
		name: "Hoodie",
		price: 24,
		category: "Kids",
		// date: "10-02-2023",
		Month: "February",
		date: new Date(2023, 4, 24),
	},
	{
		id: 4,
		name: "Shirt",
		price: 12,
		category: "Men",
		// date: "10-02-2023",
		Month: "April",
		date: new Date(2023, 1, 3),
	},
	{
		id: 5,
		name: "Trouser",
		price: 10,
		category: "Men",
		// date: "10-02-2023",
		Month: "July",
		date: new Date(2023, 1, 24),
	},
	{
		id: 6,
		name: "Shoes",
		price: 35,
		category: "Women",
		// date: "10-02-2023",
		Month: "August",
		date: new Date(2023, 1, 24),
	},
	{
		id: 7,
		name: "Jacket",
		price: 40,
		category: "Men",
		// date: "10-02-2023",
		Month: "April",
		date: new Date(2023, 6, 3),
	},
];
const sales = [
	{
		id: 1,
		date: new Date(2023, 1, 1),
		sales: 25000,
		cost: 10000,
		revenue: 15000,
		category: "Men",
	},
	{
		id: 2,
		date: new Date(2023, 1, 14),
		sales: 21000,
		cost: 11000,
		revenue: 10000,
		category: "Women",
	},
	{
		id: 3,
		date: new Date(2023, 1, 20),
		sales: 22000,
		cost: 12000,
		revenue: 15000,
		category: "Men",
	},
	{
		id: 4,
		date: new Date(2023, 1, 29),
		sales: 20000,
		cost: 13000,
		revenue: 15000,
		category: "Women",
	},
	{
		id: 5,
		date: new Date(2023, 2, 4),
		sales: 26000,
		cost: 9000,
		revenue: 15000,
		category: "Men",
	},
	{
		id: 6,
		date: new Date(2023, 2, 9),
		sales: 27000,
		cost: 7000,
		revenue: 15000,
		category: "Men",
	},
	{
		id: 7,
		date: new Date(2023, 2, 14),
		sales: 23000,
		cost: 9000,
		revenue: 15000,
		category: "Kids",
	},
	{
		id: 8,
		date: new Date(2023, 2, 24),
		sales: 24000,
		cost: 8000,
		revenue: 15000,
		category: "Men",
	},
	{
		id: 9,
		date: new Date(2023, 3, 1),
		sales: 19000,
		cost: 12000,
		revenue: 15000,
		category: "Women",
	},
	{
		id: 10,
		date: new Date(2023, 3, 9),
		sales: 25000,
		cost: 15000,
		revenue: 15000,
		category: "Men",
	},
	{
		id: 11,
		date: new Date(2023, 3, 20),
		sales: 22000,
		cost: 10000,
		revenue: 15000,
		category: "Men",
	},
	{
		id: 12,
		date: new Date(2023, 3, 29),
		sales: 18000,
		cost: 9000,
		revenue: 15000,
		category: "Kids",
	},
	{
		id: 13,
		date: new Date(2023, 4, 4),
		sales: 21000,
		cost: 10000,
		revenue: 15000,
		category: "Men",
	},
	{
		id: 14,
		date: new Date(2023, 4, 10),
		sales: 22000,
		cost: 9000,
		revenue: 15000,
		category: "Men",
	},
	{
		id: 15,
		date: new Date(2023, 4, 18),
		sales: 22000,
		cost: 10000,
		revenue: 15000,
		category: "Men",
	},
	{
		id: 16,
		date: new Date(2023, 4, 24),
		sales: 25000,
		cost: 12000,
		revenue: 15000,
		category: "Women",
	},
	{
		id: 17,
		date: new Date(2023, 5, 2),
		sales: 24000,
		cost: 10000,
		revenue: 15000,
		category: "Men",
	},
	{
		id: 18,
		date: new Date(2023, 5, 13),
		sales: 29000,
		cost: 9000,
		revenue: 15000,
		category: "Kids",
	},
	{
		id: 19,
		date: new Date(2023, 5, 18),
		sales: 22000,
		cost: 10000,
		revenue: 15000,
		category: "Men",
	},
	{
		id: 20,
		date: new Date(2023, 5, 24),
		sales: 19000,
		cost: 7000,
		revenue: 15000,
		category: "Kids",
	},
];
const categoryWise = [
	{
		id: 1,
		sales: 250000,
		category: "Kids",
	},
	{
		id: 2,
		sales: 350000,
		category: "Kids",
	},
	{
		id: 3,
		sales: 500000,
		category: "Kids",
	},
];
const products = [
	{
		id: 1,
		productname: "Hoddie",
		price: 19,
		category: "Men",
		description: "This is description of the product",
		stock: 170,
	},
	{
		id: 2,
		productname: "Jeans",
		price: 19,
		category: "Men",
		description: "This is description of the product",
		stock: 200,
	},
	{
		id: 3,
		productname: "Jacket",
		price: 19,
		category: "Men",
		description: "This is description of the product",
		stock: 180,
	},
	{
		id: 4,
		productname: "Long SHoes",
		price: 19,
		category: "Men",
		description: "This is description of the product",
		stock: 450,
	},
	{
		id: 5,
		productname: "Shorts",
		price: 19,
		category: "Men",
		description: "This is description of the product",
		stock: 300,
	},
	{
		id: 6,
		productname: "Shirt",
		price: 19,
		category: "Men",
		description: "This is description of the product",
		stock: 270,
	},
	{
		id: 7,
		productname: "Purse",
		price: 19,
		category: "Men",
		description: "This is description of the product",
		stock: 270,
	},
	{
		id: 8,
		productname: "Bracelet",
		price: 19,
		category: "Men",
		description: "This is description of the product",
		stock: 270,
	},
	{
		id: 9,
		productname: "Eye liner",
		price: 19,
		category: "Women",
		description: "This is description of the product",
		stock: 270,
	},
	{
		id: 10,
		productname: "T Shirt",
		price: 19,
		category: "Men",
		description: "This is description of the product",
		stock: 270,
	},
	{
		id: 11,
		productname: "Trousers",
		price: 19,
		category: "Kids",
		description: "This is description of the product",
		stock: 270,
	},
	{
		id: 12,
		productname: "Rings",
		price: 19,
		category: "Women",
		description: "This is description of the product",
		stock: 270,
	},
];
export function getOrders() {
	return orders;
}

export function getCategories() {
	return categories;
}

export function getSales() {
	return sales;
}

export function CategoriesWise() {
	return categoryWise;
}
export function getProducts() {
	return products;
}
export function updateProductById(id, data) {
	products.filter(product => {
		product.id = id;
		product.stock = data.stock;
	});
}
export function updateProductData(data) {
	products.push(data);
}
