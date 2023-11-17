const orders = [
	{
		id: 1,
		name: "Jeans",
		price: "20",
		category: "Men",
		date: "Mon Jan 07 2019 00:00:00 GMT+0500",
		Month: "November",
	},
	{
		id: 2,
		name: "Denim",
		price: "30",
		category: "Women",
		// date: "10-02-2023",
		date: "Mon Jan 07 2019 00:00:00 GMT+0500",
		Month: "January",
	},
	{
		id: 1,
		name: "Hoodie",
		price: "24",
		category: "Kids",
		// date: "10-02-2023",
		Month: "February",
		date: new Date(2023, 4, 24),
	},
	{
		id: 1,
		name: "Shirt",
		price: "12",
		category: "Men",
		// date: "10-02-2023",
		Month: "April",
		date: new Date(2023, 1, 3),
	},
	{
		id: 1,
		name: "Trouser",
		price: "10",
		category: "Men",
		// date: "10-02-2023",
		Month: "July",
		date: new Date(2023, 1, 24),
	},
	{
		id: 1,
		name: "Shoes",
		price: "35",
		category: "Women",
		// date: "10-02-2023",
		Month: "August",
		date: new Date(2023, 1, 24),
	},
];
const categories = ["Men", "Women", "Kids"];
export function getOrders() {
	return orders;
}

export function getCategories() {
	return categories;
}
