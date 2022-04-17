/*
width: 60px;
    border-radius: 0.3em;
    height: 2em;
    font-size: 14px;
    cursor: pointer;
    font-family: monospace;
*/

loadIt = ()=>{
const copy_btn = document.getElementsByClassName("copy-to-clipboard-button");
for(i=0; i<copy_btn.length; i++){

var copy_btn_style = `width: 60px;
    border-radius: 0.3em;
    height: 2em;
    font-size: 14px;
    cursor: pointer;
    font-family: monospace;`
copy_btn[i].style = copy_btn_style;
}

}


class template{
  constructor(component_name, component_code, language, id){
    this.component_name = component_name;
    this.code = component_code;
    this.language = language;
    this.id = id;
  }
  PostCompo(){
    let side_ul = document.getElementById("firstUL");
		let side_ul_li = document.createElement("li");
    side_ul_li.innerHTML = `<a href= '#${this.id}'>${this.component_name}</a>`;
    side_ul.appendChild(side_ul_li);
    
    let main_ul = document.getElementById("secondUL");
		let main_ul_li = document.createElement("li");
    main_ul_li.id = this.id;
    main_ul_li.innerHTML = `<span class="sfdsf">${this.component_name}</span><pre class="${this.language}"><code>${this.code}</code></pre>`;
    main_ul.appendChild(main_ul_li);
    return `${this.component_name}_added`;
  }
}


var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



let code = `&lt;style&gt;
h1{
border: 2px solid red;
}
&lt;/style&gt;
&lt;script&gt;
console.log("Hello world");
&lt;/script&gt;
`

let navBar_compo = new template("NavBar", code, "language-html", "nav")
navBar_compo.PostCompo()

post.addEventListener('click', function(){
location.reload();
})