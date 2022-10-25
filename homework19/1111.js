const form = document.querySelector("form");
const commentsNode = document.querySelector("div");
const textarea = document.querySelector("textarea");
const usernameNode = document.querySelector('input[name="username"]');
const avatarNode = document.querySelector('input[name="avatar"]');

class LocalStorage {
	static Save(key, value) {
		let string = JSON.stringify(value);
		localStorage.setItem(key, string);
	}

	static Get(key) {
		let value = localStorage.getItem(key);
		return JSON.parse(value);
	}
}

class Comment {
	constructor(text, username, avatar) {
		this.text = text;
		this.username = username;
		this.avatar =
			avatar ||
			"https://nationaltoday.com/wp-content/uploads/2020/02/doggy-date-night.jpg";
	}

	render(parentNode) {
		// фильтр комментов
		const filterWords = ["javascript", "котик"];
		let filteredText = this.text;

		for (let word of filterWords) {
			let reg = new RegExp(word, "ig");
			filteredText = filteredText.replace(reg, "****");
		}

		// пустой контейнер
		let node = document.createElement("div");
		node.classList.add("comment");

		let textNode = document.createElement("div");
		textNode.classList.add("comment__text");
		textNode.textContent = filteredText;

		let usernameNode = document.createElement("div");
		usernameNode.classList.add("comment__username");
		usernameNode.textContent = this.username;

		let avatarNode = document.createElement("img");
		avatarNode.src = this.avatar;
		avatarNode.classList.add("comment__avatar");
		avatarNode.width = 40;
		avatarNode.alt = "Аватар " + this.username;

		node.append(avatarNode);
		node.append(usernameNode);
		node.append(textNode);
		parentNode.append(node);
	}
}

class CommentList {
	constructor(parentNode) {
		this.list = [];
		this.parentNode = parentNode;
	}

	addItem(text, username, avatar) {
		let comment = new Comment(text, username, avatar);
		this.list.push(comment);
	}

	render() {
		this.parentNode.innerHTML = "";
		for (let i = 0; i < this.list.length; i++) {
			let item = this.list[i];
			item.render(this.parentNode);
		}
	}

	save() {
		localStorage.setItem("comments", JSON.stringify(this.list));
	}

	load() {
		let localData = LocalStorage.Get("comments") || [];
		let array = [];
		for (let item of localData) {
			const comment = new Comment(item.text, item.username);
			array.push(comment);
		}

		this.list = array;
	}
}

usernameNode.value = LocalStorage.Get("username");
avatarNode.value = LocalStorage.Get("avatar");
const list = new CommentList(commentsNode);
list.load();
list.render();

form.addEventListener("submit", function (evt) {
	evt.preventDefault();

	let text = textarea.value;
	let username = usernameNode.value;
	let avatar = avatarNode.value;

	textarea.value = "";

	list.addItem(text, username, avatar);
	list.render();
	list.save();
	LocalStorage.Save("username", username);
	LocalStorage.Save("avatar", avatar);
});


[{
    "name": "Москва",
    "location": "ЦФО",
    "population": 12000000
},{
    "name": "Новосибирск",
    "location": "СФО",
    "population": 1600000
},{
    "name": "Владивосток",
    "location": "ДФО",
    "population": 600000
}]