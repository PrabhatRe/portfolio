async function loadQuotes() {
  const feed = document.getElementById("quotes-feed");

  try {
    const res = await fetch("/quotes.json");
    const data = await res.json();

    if (!data || data.length === 0) {
      feed.innerHTML = "<p>Nothing here yet. Be the first to leave a line.</p>";
      return;
    }

    data.forEach(post => {
      const el = document.createElement("article");
      el.className = "quote-card";

      el.innerHTML = `
        <a href="/quote/?id=${post.number}">
          <p class="quote-text">${post.bodyText}</p>
          <div class="quote-meta">
            <img src="${post.author.avatarUrl}">
            <span>@${post.author.login}</span>
          </div>
        </a>
      `;

      feed.appendChild(el);
    });

  } catch (err) {
    feed.innerHTML = "<p>Unable to load quotes.</p>";
    console.error(err);
  }
}

loadQuotes();