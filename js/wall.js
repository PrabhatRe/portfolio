const owner = "prabhatre";
const repo = "prabhatre.github.io";
const category = "General";

async function loadQuotes() {
  const query = `
  query {
    repository(owner: "${owner}", name: "${repo}") {
      discussions(first: 50, orderBy: {field: CREATED_AT, direction: DESC}) {
        nodes {
          title
          bodyText
          createdAt
          author {
            login
            avatarUrl
          }
        }
      }
    }
  }`;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  });

  const json = await res.json();
  const feed = document.getElementById("quotes-feed");

  if (!json.data) {
    feed.innerHTML = "<p>Nothing here yet. Be the first to leave a line.</p>";
    return;
  }

  json.data.repository.discussions.nodes.forEach(post => {
    const el = document.createElement("article");
    el.className = "quote-card";

    el.innerHTML = `
      <p class="quote-text">${post.bodyText}</p>
      <div class="quote-meta">
        <img src="${post.author.avatarUrl}">
        <span>@${post.author.login}</span>
      </div>
    `;

    feed.appendChild(el);
  });
}

loadQuotes();