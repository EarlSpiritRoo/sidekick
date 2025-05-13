// Section switching logic
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
  
      document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
      });
  
      document.getElementById(btn.dataset.section).classList.add('active');
    });
  });
  
  // Share Recipe Generator
  const replies = [
    "Here you go! {{link}}",
    "Grab the recipe here 👉 {{link}}",
    "Enjoy cooking! Here's the full recipe: {{link}}",
    "Found it for you: {{link}}",
    "Hope you love it! {{link}}",
    "Click here to check it out: {{link}}",
    "You're going to love this one: {{link}}",
    "Try this dish! {{link}}",
    "Boom 💥 Recipe drop: {{link}}",
    "Got you! {{link}}"
  ];
  
  document.getElementById("generate-replies").addEventListener("click", () => {
    const link = document.getElementById("recipe-link").value.trim();
    const container = document.getElementById("generated-replies");
  
    if (!link) {
      container.innerHTML = "<p>Please enter a recipe link.</p>";
      return;
    }
  
    container.innerHTML = "";
  
    replies.forEach(text => {
      const reply = text.replace("{{link}}", link);
  
      const div = document.createElement("div");
      div.textContent = reply;
  
      const btn = document.createElement("button");
      btn.className = "copy-btn";
      btn.textContent = "Copy";
      btn.addEventListener("click", () => {
        navigator.clipboard.writeText(reply);
        btn.textContent = "Copied!";
        setTimeout(() => (btn.textContent = "Copy"), 1000);
      });
  
      div.appendChild(btn);
      container.appendChild(div);
    });
  });
  