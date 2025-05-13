
// 🛒 CookDineHost Replies
const cookdineReplies = [
    {
      id: "cdh-oven-01",
      subject: "Are your pans oven safe?",
      message: "Yes, our MAKO pans are oven-safe up to 170°C. Just be sure to use oven gloves when transferring between oven and stovetop.",
      pinned: true
    },
    {
      id: "cdh-induction-01",
      subject: "Is the wok compatible with induction cooktops?",
      message: "Yes, the MAKO 5-Ply Non-Stick Wok is compatible with all stovetops, including induction.",
      pinned: false
    },
    {
      id: "cdh-lid-01",
      subject: "Does this frying pan come with a lid?",
      message: "Our frying pans are sold without lids unless stated otherwise. Lid bundles are available separately on our website.",
      pinned: false
    }
  ];
  
  // 🍜 Marion’s Kitchen Replies
  const marionReplies = [
    {
      id: "mk-availability-01",
      subject: "Can I buy your sauces in New Zealand?",
      message: "Thanks for reaching out! Unfortunately, our food products are not currently available in New Zealand. We’re working on it!",
      pinned: true
    },
    {
      id: "mk-substitute-01",
      subject: "What can I use instead of Chinese cabbage?",
      message: "You can substitute Chinese cabbage with wombok, savoy cabbage, or even shredded lettuce for a similar texture.",
      pinned: false
    },
    {
      id: "mk-crispy-oil-01",
      subject: "Where can I buy Marion’s Crispy Chilli Oil?",
      message: "Marion’s Crispy Chilli Oil is available at Coles and Woolworths in Australia.",
      pinned: true
    }
  ];
  

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

  // Auto-run on load
  function renderCookdineReplies(search = "") {
    const container = document.getElementById("cookdine-replies");
    container.innerHTML = "";
  
    const filtered = cookdineReplies.filter(reply =>
      reply.subject.toLowerCase().includes(search.toLowerCase()) ||
      reply.message.toLowerCase().includes(search.toLowerCase())
    );
  
    const sorted = filtered.sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
  
    sorted.forEach(reply => {
      const wrapper = document.createElement("div");
      wrapper.className = "reply-block";
  
      const title = document.createElement("h4");
      title.textContent = reply.subject;
  
      const body = document.createElement("p");
      body.textContent = reply.message;
  
      const btn = document.createElement("button");
      btn.textContent = "Copy";
      btn.className = "copy-btn";
      btn.addEventListener("click", () => {
        navigator.clipboard.writeText(reply.message);
        btn.textContent = "Copied!";
        setTimeout(() => (btn.textContent = "Copy"), 1000);
      });
  
      if (reply.pinned) {
        const pin = document.createElement("span");
        pin.textContent = "📌";
        pin.style.marginRight = "0.5rem";
        title.prepend(pin);
      }
  
      wrapper.appendChild(title);
      wrapper.appendChild(body);
      wrapper.appendChild(btn);
      container.appendChild(wrapper);
    });
  }
  
  
  // Auto-run on load
  renderCookdineReplies();

  function renderMarionReplies(search = "") {
    const container = document.getElementById("marion-replies");
    container.innerHTML = "";
  
    const filtered = marionReplies.filter(reply =>
      reply.subject.toLowerCase().includes(search.toLowerCase()) ||
      reply.message.toLowerCase().includes(search.toLowerCase())
    );
  
    const sorted = filtered.sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
  
    sorted.forEach(reply => {
      const wrapper = document.createElement("div");
      wrapper.className = "reply-block";
  
      const title = document.createElement("h4");
      title.textContent = reply.subject;
  
      const body = document.createElement("p");
      body.textContent = reply.message;
  
      const btn = document.createElement("button");
      btn.textContent = "Copy";
      btn.className = "copy-btn";
      btn.addEventListener("click", () => {
        navigator.clipboard.writeText(reply.message);
        btn.textContent = "Copied!";
        setTimeout(() => (btn.textContent = "Copy"), 1000);
      });
  
      if (reply.pinned) {
        const pin = document.createElement("span");
        pin.textContent = "📌";
        pin.style.marginRight = "0.5rem";
        title.prepend(pin);
      }
  
      wrapper.appendChild(title);
      wrapper.appendChild(body);
      wrapper.appendChild(btn);
      container.appendChild(wrapper);
    });
  }
  

  renderCookdineReplies();
renderMarionReplies();

document.getElementById("cookdine-search").addEventListener("input", (e) => {
    renderCookdineReplies(e.target.value);
  });
  
  document.getElementById("marion-search").addEventListener("input", (e) => {
    renderMarionReplies(e.target.value);
  });
  
  