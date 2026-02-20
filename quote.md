---
layout: default
permalink: /quote/
---

<div id="quote"></div>
<div id="comments"></div>

<script>
const id = new URLSearchParams(location.search).get("id");

async function loadQuote() {
  const container = document.getElementById("quote");

  try {
    const res = await fetch("/quotes.json?ts=" + Date.now());
    const data = await res.json();

    const q = data.find(x => String(x.number) === String(id));

    if (!q) {
      container.innerHTML = "<p>Quote not found.</p>";
      return;
    }

    container.innerHTML = `
      <article class="quote-card">
        <p class="quote-text">${q.bodyText}</p>
        <div class="quote-meta">
          <img src="${q.author.avatarUrl}">
          <span>@${q.author.login}</span>
        </div>
      </article>
    `;

    // attach giscus comments to this discussion
    const s=document.createElement("script");
    s.src="https://giscus.app/client.js";
    s.setAttribute("data-repo","prabhatre/prabhatre.github.io");
    s.setAttribute("data-repo-id","R_kgDORBsRQw");
    s.setAttribute("data-category","Quotes");
    s.setAttribute("data-category-id","DIC_kwDORBsRQ84C23y1");
    s.setAttribute("data-mapping","number");
    s.setAttribute("data-term",q.number);
    s.setAttribute("data-input-position","bottom");
    s.setAttribute("data-theme","preferred_color_scheme");
    s.crossOrigin="anonymous";
    s.async=true;

    document.getElementById("comments").appendChild(s);

  } catch(err) {
    container.innerHTML = "<p>Error loading quote.</p>";
    console.error(err);
  }
}

loadQuote();
</script>