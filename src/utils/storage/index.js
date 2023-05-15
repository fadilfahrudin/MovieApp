export const asyncLocalStorage = {
	setItem: async function (key, value) {
		await Promise.resolve();
		localStorage.setItem(key, value);
	},
	getItem: async function (key) {
		await Promise.resolve();
		return localStorage.getItem(key);
	},
	removeItem: async function (key) {
		await Promise.resolve();
		return localStorage.removeItem(key);
	},
};

export const storeData = async (storageKey, value) => {
	try {
		const jsonValue = JSON.stringify(value);
		await asyncLocalStorage.setItem(storageKey, jsonValue);
	} catch (error) {
		console.log("error message:", error);
	}
};

export const getData = async (storageKey) => {
	try {
		const jsonValue = await asyncLocalStorage.getItem(storageKey);
		return jsonValue !== null ? JSON.parse(jsonValue) : null;
	} catch (error) {
		console.log("error message:", error);
	}
};
