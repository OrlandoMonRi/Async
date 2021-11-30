const url = 'https://jsonplaceholder.typicode.com/posts';
const lista = document.getElementById('lista');


const obtenerPosts = async () => {
    const response = await fetch(url);
    const posts = await response.json();
    return posts;
}

obtenerPosts()
.then(posts => {
    posts.map(post => {
        let li = document.createElement('li');
        li.innerHTML = `<a href=detalle.html?id=${post.id}>id: ${post.id}<a> title:${post.title}`;
        lista.appendChild(li);
    })
    console.log(posts);
  })
  .catch(error => {
    console.log(error)
  })
  .finally(()=>{
    document.getElementById('cargando').src="";
  })
