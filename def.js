function get_todo(){
	var todo=newArray;
	var todo_str=localstorage.getItem('todo');
	if(todo_str!==null){
		todo=JSON.parse(todo_str);
	}
	return todo;
}
function add(){
	var task=document.getElementById('task').value;
	var todo=get_todo();
	todo.push(task);
	localstorage.setItem('todo',JSON.stringfy(todo));
	show();}

function show(){
	var todo=get_todo;
	var html='<ul>';
	for(var i=0;i<todo.length;i++){
		html+='<li>'+todo[i]+'</li>';
	}
	html+='<ul>';
	document.getElementById('todo list').innerHTML=html;
}

function remove(){
	localstorage.removeItem('todo',JSON.stringfy(todo));
show();
}
