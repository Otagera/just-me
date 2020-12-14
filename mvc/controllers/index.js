const data = require("../../data");
const postData = data.postData;
const uniqueTags = data.uniqueTags;

const recentPostsAmount = 6;

let templateData = { 
	title: "",
	active: "" ,
	uniqueTags: uniqueTags,
	recentPosts: postData.slice(0, recentPostsAmount),
	categoryData: data.categoryData
};


const getHomePage = (req, res)=>{
	templateData.title = "Just Me";
	templateData.posts = postData;
	templateData.active = "index";
	
	res.render("index", templateData);
}

const getBlogPost = ({params}, res)=>{
	let post = postData.find((val) => val.id == params.postid);
	if(!post) {res.redirect("/404");}


	templateData.title = post.title;
	templateData.post = post;
	templateData.active = post.category;
	templateData.post = post;

	res.render("posts", templateData);
}

const get404 = ({params}, res)=>{

	templateData.title = "I couldn't find this page...";

	res.render("404", templateData);

}

const redirect404 = ({params}, res)=>{
	res.redirect("/404");
}

const getAbout = (req, res)=>{

	templateData.title = "About Me";
	templateData.active = "about";

	res.render("about", templateData);
}

const getContact = (req, res)=>{

	templateData.title = "Contact";
	templateData.active = "contact";

	res.render("contact", templateData);
}
const getFilteredList = ({query}, res)=>{
	let filteredPosts = postData.filter((val) => {
		return val.category == query.category || val.tags.includes(query.tag);
	});
	/*
	This part of code is for when you want an incorrect filter to redirect to the 404 page
	let p = [];
	templateData.categoryData.map((val)=>{
		p.push(val.category);
	});
	if((!p.includes(query.category)) && (!uniqueTags.includes(query.tag))) {
		res.redirect("/404");
	}
	*/
	
	templateData.title = "Just Me - FIltered";
	templateData.active = query.category;
	templateData.posts = filteredPosts;

	res.render("filter", templateData);

}


module.exports = {
	getHomePage,
	getBlogPost,
	get404,
	redirect404,
	getAbout,
	getContact,
	getFilteredList
};