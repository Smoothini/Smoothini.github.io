function loadGitHubReadme({ repo, branch, elementId }) {
  const baseRawUrl = `https://raw.githubusercontent.com/${repo}/${branch}/`;

 fetch(`${baseRawUrl}README.md`)
    .then(res => res.text())
    .then(md => {
      // Fix relative image links ![alt](path)
      let fixedMd = md.replace(/!\[(.*?)\]\((?!https?:\/\/)(.*?)\)/g,
        (match, alt, src) => `![${alt}](${baseRawUrl}${src})`);
      
      // Fix relative regular links [text](path)
      fixedMd = fixedMd.replace(/\[(.*?)\]\((?!https?:\/\/|#)(.*?)\)/g,
        (match, text, href) => `[${text}](${baseRawUrl}${href})`);
      
      document.getElementById(elementId).innerHTML = marked.parse(fixedMd);
    })
    .catch(err => {
      console.error("README load failed:", err);
      document.getElementById(elementId).innerHTML = "<p><em>Could not load README.</em></p>";
    });
}

// On DOM ready, find all divs with data-repo and load their README automatically
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('div[data-repo]').forEach(div => {
    const repo = div.getAttribute('data-repo');
    const branch = div.getAttribute('data-branch') || "master";
    loadGitHubReadme({ repo, branch, elementId: div.id });
  });
});
