---
layout: default
title: The Wall
permalink: /wall/
---

# THE WALL
A passing thought, a line from today, a small truth.

<div id="feed"></div>

<script>
fetch("/quotes.json")
  .then(r=>r.json())
  .then(data=>{
    const feed=document.getElementById("feed");

    data.forEach(q=>{
      feed.innerHTML += `
      <a href="/quote/?id=${q.id}">
        <article class="quote-card">
          <p class="quote-text">${q.body}</p>
          <div class="quote-meta">
            <img src="${q.avatar}">
            <span>@${q.author}</span>
          </div>
        </article>
      </a>`;
    });
  });
</script>