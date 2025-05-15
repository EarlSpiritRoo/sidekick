
// 🛒 CookDineHost Replies
const cookdineReplies = [
    {
      id: "cdh-oven-01",
      subject: "ex?",
      message: "ex",
      pinned: true
    },
    {
      id: "cdh-induction-01",
      subject: "ex?",
      message: "ex",
      pinned: false
    },
    {
      id: "cdh-lid-01",
      subject: "ex?",
      message: "ex",
      pinned: false
    },
    {
      id: "cdh-page-01",
      subject: "ex",
      message: "ex",
      pinned: false
    }
  ];
  
  // 🍜 Marion’s Kitchen Replies
  const marionReplies = [
    {
      id: "mk-availability-01",
      subject: "where can I buy your curry paste",
      message: "Marion’s curry paste is available at both Coles and Woolworths stores across Australia. 😊 Feel free to let us know if you have any trouble finding it! – Marion’s Team",
      pinned: false
    },
    {
      id: "mk-page-01",
      subject: "Canada is not allowing your post to come to us",
      message: "Thank you for letting us know! Due to Canada’s Online News Act, some of our Facebook posts may not be visible in Canada if they’re flagged as news-related content even if they’re just recipes or cooking tips. We know it’s frustrating, and we really appreciate your support from Canada. You can still find all our recipes and videos anytime at www.marionskitchen.com or on our YouTube channel here: youtube.com/@MarionsKitchen. - Marion’s Team",
      pinned: false
    },
    {
      id: "mk-page-02",
      subject: "Is this a fake site?",
      message: "Thank you for reaching out and checking with us! The only official group we have is Marion's Kitchen Community. Our official accounts are Marion Grasby, Marion's Kitchen, Marion Cook Asian Food Classics, Quick and Easy Cooking with Marion, Cook Dine Host and MAKO Kitchenware. Any other account is not affiliated with us and may be a fake. - Marion’s Team",
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
    "Get the full recipe here: {{link}} - Marion's Team",
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
go  
  