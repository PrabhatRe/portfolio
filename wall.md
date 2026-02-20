---
layout: default
title: The Wall
permalink: /wall/
---

# THE WALL
A passing thought, a line from today, a small truth.

<div id="feed"></div>

<script>
async function loadQuotes() {
  const feed = document.getElementById("feed");
  const res = await fetch("/quotes.json?ts=" + Date.now());
  const data = await res.json();

  if (!data.length){
    feed.innerHTML="<p>Nothing here yet. Be the first to leave a line.</p>";
    return;
  }

  feed.innerHTML="";

  data.forEach(q=>{
    const hearts = q.reactionGroups?.find(r=>r.content==="HEART")?.users.totalCount || 0;
    const replies = q.comments?.totalCount || 0;

    feed.innerHTML += `
    <article class="quote-card">
      <p class="quote-text">${q.bodyText}</p>

      <div class="quote-meta">
        <img src="${q.author.avatarUrl}">
        <span>@${q.author.login}</span>
      </div>

      <div class="quote-stats">
        <span onclick="openPost(${q.number})">💬 ${replies}</span>
        <span onclick="likePost(${q.number})">❤️ ${hearts}</span>
      </div>
    </article>`;
  });
}

function openPost(id){
  location.href="/quote/?id="+id;
}

function likePost(id){
  window.open(`https://github.com/prabhatre/prabhatre.github.io/discussions/${id}#discussioncomment-0`,
              "_blank","width=500,height=700");
}

loadQuotes();
</script>