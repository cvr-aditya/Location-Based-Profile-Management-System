var name,profile,type,db;
function create(elemname)
{
	return document.createElement(elemname);
}

function get(id)
{
	return document.getElementById(id).value;
}
function app(elem)
{
	document.body.appendChild(elem);
}
function setattr(elem,value,type)
{
	elem.setAttribute("id",value);
	elem.setAttribute("value",value);
	elem.setAttribute("class","user");
	elem.setAttribute("type",type);
	return elem;
}
function getNewValues(db,name,profile,type)
{
	this.db=db;
	this.name=name;
	this.profile=profile;
	this.type=type;
	
	
	var nameinp=create("input");
	var profileinp=create("input");
	var typeinp=create("input");
	var button=create("input");
	var div=create("div");
	var contentdiv=create("div");
	var footerdiv=create("div");
	var h1=create("h1");
	var textnode=document.createTextNode("Name ");
	var profilenode=document.createTextNode("Profile");
	var typenode=document.createTextNode("Type");
	
	div.setAttribute("class","home-page");
	contentdiv.setAttribute("class","header");
	setattr(nameinp,name,"text");
	setattr(profileinp,profile,"text");
	setattr(typeinp,type,"text");
	setattr(button,"submit","button");
	button.setAttribute("class","button");
	footerdiv.setAttribute("class","footer");
	button.setAttribute("onclick","readvalues()");
	nameinp.setAttribute("style","margin-left:5px");
	nameinp.setAttribute("style","border-bottom-width:1px");
	nameinp.setAttribute("style","margin-bottom: 6px");
	profileinp.setAttribute("style","margin-left:5px");
	profileinp.setAttribute("style","margin-bottom: 6px");
	typeinp.setAttribute("style","margin-left:5px");
	typeinp.setAttribute("style","margin-bottom: 6px");
	
	h1.appendChild(textnode);
	contentdiv.appendChild(h1);
	contentdiv.appendChild(nameinp);
	h1=create("h1");
	h1.appendChild(profilenode);
	contentdiv.appendChild(h1);
	contentdiv.appendChild(profileinp);
	h1=create("h1");
	h1.appendChild(typenode);
	contentdiv.appendChild(h1);
	contentdiv.appendChild(typeinp);
	footerdiv.appendChild(button);
	div.appendChild(contentdiv);
	div.appendChild(footerdiv);
	app(div);
	
}

function readvalues()
{
	var newname=get(name);
	var newprof=get(profile);
	var newtype=get(type);
	console.log(newname+"   "+newprof+"   "+newtype);
	editSelected(db,name,newname,newprof,newtype);
}
