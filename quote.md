---
layout: default
permalink: /quote/
---

<div id="quote"></div>

{% include giscus-wall.html %}

<script>
const id = new URLSearchParams(location.search).get("id");

fetch("/quotes.json")
  .then(r=>r.json())
  .then(data=>{
    const q = data.find(x=>x.id==id);
    if(!q) return;

    document.getElementById("quote").innerHTML = `
      <article class="quote-card">
        <p class="quote-text">${q.body}</p>
        <div class="quote-meta">
          <img src="${q.avatar}">
          <span>@${q.author}</span>
        </div>
      </article>
    `;
  });
</script>