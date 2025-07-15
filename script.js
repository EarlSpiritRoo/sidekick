
// 🛒 CookDineHost Replies
const cookdineReplies = [
    {
      id: "cdh-support-01",
      subject: "Customer Issue",
      message: "We're sorry to hear about that. Our support team will be in touch shortly to assist you 😊 - Marion's Team",
      pinned: true
    },
    {
      id: "cdh-shipping-01",
      subject: "Is it duty free in Portugal?",
      message: "Thank you for your message! There are no additional duties or import fees for Portugal. Everything’s included in the shipping price. Plus, we offer free shipping on orders over €150. Let us know if you have any other questions! 😊 - Marion’s Team",
      pinned: false
    },
    {
      id: "cdh-wok-01",
      subject: "Is the wok rust resistant?",
      message: "The MAKO Black Steel Wok comes pre-seasoned with high-quality olive oil, so it's ready to use straight out of the box. While carbon steel isn’t naturally rust-resistant, the pre-seasoning helps protect it. With regular use, drying, and proper care, it’ll continue to build a natural non-stick layer that helps guard against rust. 😊 - Marion's Team",
      pinned: false
    },
    {
      id: "cdh-wok-02",
      subject: "Does the wok and lid set come with the free cookbooks?",
      message: "The MAKO Wok & Lid Set doesn’t include the free cookbooks. The 2 free cookbooks are only included as part of the Hot Wok Offer. Feel free to let us know if you have any further questions. 😊 - Marion's Team",
      pinned: true
    },
    {
      id: "cdh-wok-03",
      subject: "How long before Lids for the wok will be available?",
      message: "We are planning to re-stock the wok lid early-mid June! - Marion's Team",
      pinned: false
    },
    {
      id: "cdh-wok-04",
      subject: "I recently purchased a wok but didn’t receive my cook books",
      message: "Thank you for getting in touch. Looking at your order you purchased the wok and lid set which is a separate promotion to the hot wok offer. We apologise for any confusion caused. - Marion's Team",
      pinned: false
    },
    {
      id: "cdh-pan-01",
      subject: "Why buy the steak pan set as opposed to just buying a frying pan set? Wouldn't they basically do the same?",
      message: "Both the steak and frying pans are crafted from the exact same high-quality black steel. The frying pan was designed to be much lighter in weight, so it is easier to manoeuvre. In the classic frying pan design it has shallow edges, making it ideal for everyday cooking. Both are fantastic pieces, it really depends on the weight and design you prefer and what you would utilise most in the kitchen. - Marion's Team",
      pinned: false
    },
    {
      id: "cdh-pan-02",
      subject: "Will the 5-Ply Genius Copper Essentail Pan get the high heat like the wok?",
      message: "Yes, this pan is designed to handle high heat as well, which makes a big difference when it comes to getting that perfect sear. It should give you that nice, caramelised crust you’re after. - Marion's Team",
      pinned: false
    },
    {
      id: "cdh-induction-01",
      subject: "Can you use on induction cook top?",
      message: "Yes, all our cookware is designed to work on any cooktop including induction. It is important that the size of the pans are close in size to the burner/element you are using to ensure even heat distribution. If you are interested in our Black steel cookware, we also recommend gradually heating your pan on induction, as black steel is extremely reactive, meaning it gets hot quick. - Marion's Team",
      pinned: false
    },
    {
      id: "cdh-black-steel-01",
      subject: "Do we need to re-season Carbon Steel after each use?",
      message: "Yes, the carbon steel wok/pan requires the re-seasoning after each use to build up the natural patina. Feel free to let us know if you have further questions. 😃 - Marion's Team",
      pinned: false
    },
    {
      id: "cdh-black-steel-02",
      subject: "Why do we need to re-season Carbon Steel after each use?",
      message: "The MAKO steak pan is not a non-stick pan. It was designed to further develop the natural non-stick patina layer over time. The coating is made from high-quality olive oil on the steel, and nothing else. And to keep that natural patina growing, regular seasoning is all it needs 😃 - Marion's Team",
      pinned: false
    },
    {
      id: "cdh-black-steel-03",
      subject: "What oil to use to re-season the carbon steel after each use?",
      message: "We recommend using an oil with a higher smoking point such as vegetable, avocado or canola oil - Marion's Team",
      pinned: false
    },
    {
      id: "cdh-black-steel-04",
      subject: "Does the steak pan only cook steaks?",
      message: "Our MAKO steak pan is designed with versatility in mind, It's suited for cooking all ingredients – fish, poultry, pork, lamb and eggs as well as beef. You can even sear veggies off in this pan for ultimate flavour! - Marion's Team",
      pinned: false
    },
    {
      id: "cdh-black-steel-05",
      subject: "is cast iron is better than carboon steel?",
      message: "Cast iron pans can definitely do a good job. They can get searing hot unlike non-stick or a typical bbq so they produce a solid crust. The added advantage of carbon steel is that you have more reactive temperature control. So you can get high heat for crust but then change it up if necessary. - Marion's Team",
      pinned: false
    },
    {
      id: "cdh-black-steel-06",
      subject: "Can the black steelc be used on a Ceramic stove.",
      message: "Yes, it can. Our MAKO Steak pan works on all stovetops, including the ceramic top. - Marion's Team",
      pinned: false
    },
    {
      id: "cdh-black-steel-07",
      subject: "BBQ or steak pan",
      message: "Cooking a steak on a BBQ grill is definitely a classic way to get great flavour. We also find that using a steak pan is another fantastic method, as it allows for high heat and lots of contact with the surface, creating an amazing crust across the whole surface of the steak. Both ways have their own delicious results! 😊 - Marion's Team",
      pinned: false
    },
    {
      id: "cdh-black-steel-08",
      subject: "Do you sell your wooden spoons?",
      message: "We don't unfortunately. They are sold within the wok kit only. - Marion's Team",
      pinned: false
    },
    {
      id: "cdh-black-steel-09",
      subject: "Can your cookware cook on high heat I’ve noticed most pan you buy these days say don’t cook on high heat",
      message: "For high heat cooking you'd want either carbon black steel or stainless steel cookware. Our black steel cookware is built for high heat cooking and can reach temperatures up to 300 degrees - making it the perfect choice when searing any meat or veggies. Other cookware, for example non-stick pans, are not meant for high heat cooking, as it can damage the integrity of the cookware. - Marion's Team",
      pinned: false
    },
    {
      id: "cdh-black-steel-10",
      subject: "I've brought expensive ones before and they lift in the middle/warp?",
      message: "It's important when purchasing cookware that the base size of the pan matches the element size you will be cooking on, this ensure even heat distribution and prevents warping. Additionally, if cooking on an induction cooktop, gradually heat the pan as black steel is extremely reactive and heats quick! - Marion's Team",
      pinned: false
    },
    {
      id: "cdh-black-steel-11",
      subject: "Should I buy mako non stick or black steel frypans please?",
      message: "It really comes down to what you cook the most of day to day and what material you prefer to cook with. Our black steel cookware is perfect for high heat cooking. If you're looking for that high heat sear on steaks, chicken, fish or veggies, its an excellent choice. Black steel does require basic aftercare, it is hand-wash only and requires re-seasoning after each use. Free from any coating, there are no chemicals in our black steel cookware, making it a natural non-stick alternative. \n Our Genius Copper cookware is suited for low-medium heat cooking only and it's a great choice if you prioritise ease of use and cleaning. You can hand wash or place in the dish washer for easy clean up, and it's perfect for everyday cooking. Featuring a plasma non-stick surface, this cookware is free from Lead, Cadmium and PFOAS. We hope this helps. Let us know what you end up going for! - Marion's Team",
      pinned: false
    },
    {
      id: "cdh-black-steel-12",
      subject: "How much is the wok?",
      message: "You can find the current price and details for the Hot Wok Offer here: https://cookdinehost.com/collections/black-steel-wok-accessories/products/hot-wok-offer It also currently includes 2 free cookbooks! 😊 - Marion’s Team",
      pinned: false
    },
    {
      id: "cdh-black-steel-13",
      subject: "Is the steak pa/black steel chemical free?",
      message: "Yes, the Black Steel Steak Pan is chemical-free. It doesn’t contain PFAS, Teflon, PFOA, PFOS or PTFE. The natural non-stick surface is created by carbonising high-quality olive oil. There's no added chemicals or synthetic coatings. - Marion's Team",
      pinned: false
    },
    {
      id: "cdh-black-steel-14",
      subject: "Should I buy mako non stick or black steel frypans?",
      message: "It really comes down to what you cook the most of day to day and what material you prefer to cook with. Our black steel cookware is perfect for high heat cooking. If you're looking for that high heat sear on steaks, chicken, fish or veggies, its an excellent choice. Black steel does require basic aftercare, it is hand-wash only and requires re-seasoning after each use. Free from any coating, there are no chemicals in our black steel cookware, making it a natural non-stick alternative. Our Genius Copper cookware is suited for low-medium heat cooking only and it's a great choice if you prioritise ease of use and cleaning. You can hand wash or place in the dish washer for easy clean up, and it's perfect for everyday cooking. Featuring a plasma non-stick surface, this cookware is free from Lead, Cadmium and PFOAS. We hope this helps. Let us know what you end up going for! - Marion's Team",
      pinned: false
    },
    {
      id: "cdh-black-steel-15",
      subject: "Can I use an olive oil spray on the frying pans?",
      message:"We don't recommend using an olive oil spray when cooking or seasoning your wok. Olive oil has a lower smoke point than other oils, which means it can burn and smoke at relatively low temperatures, potentially ruining the seasoning or affecting the taste of your food. For seasoning, it's best to use oils with a high smoke point like canola, peanut, or avocado oil. I hope this helps. - Marion's Team",
      pinned: false
    },
    {
      id: "cdh-geniuscopper-01",
      subject: "Does the steak pan have any non-stick surface that will produce fume or chemicals being toxic for my pet bird?",
      message: "Our steak pan does not contain PFASs, Teflon, PFOA, PFOS, or PTFE. While we don’t contain any of the above, we can’t confirm 100% if it is safe for cooking around birds. Carbon steel is designed to be heated to high temperatures, which can create quite a lot of smoke, and is a normal part of carbon steel cooking. However, from our understanding, this can be harmful to birds and is not recommended. - Marion's Team",
      pinned: false
    },
    {
      id: "cdh-geniuscopper-02",
      subject: "Do the MAKO 5-ply handles get hot?",
      message: "We cannot guarantee that the top handle of the lid will remain cool. The heat transfer depends on various factors such as the cooking duration and temperature. Since the handles are made of metal, they may heat up during use. However, the long handle is intended to remain cool during cooking. 😊 - Marion's Team",
      pinned: false
    },
    {
      id: "cdh-geniuscopper-03",
      subject: "Non-stick work on induction",
      message: "Yes, all our non-stick cookware is designed to work on any cooktop including induction. It’s best suited for low to medium heat cooking, and it’s important that the size of the pan matches your burner or element to ensure even heat distribution. - Marion’s Team",
      pinned: false
    },
    {
      id: "cdh-cookbooks-01",
      subject: "where to buy the cookbooks",
      message: "Thank you for your interest! You can purchase the cookbooks here: https://cookdinehost.com/collections/cookbooks 😊 - Marion’s Team",
      pinned: false
    }

  ];
  
  // 🍜 Marion’s Kitchen Replies
  const marionReplies = [
    {
      id: "mk-availability-01",
      subject: "Where can I buy your curry paste",
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
    },
    {
      id: "mk-substitute-01",
      subject: "What can you use instead of fish sauce?",
      message: "You could try using soy sauce instead of fish sauce to give you the salty flavour. It will change the character of the dish a little and you’ll need to experiment with how much you add as some soy sauces can be more or less salty than fish sauce. Hope that helps! - Marion's Team",
      pinned: true
    },
    {
      id: "mk-substitute-02",
      subject: "What could I replace the shrimp paste with?",
      message: "You can substitute the shrimp paste with a little fish sauce, miso paste, or even soy sauce with a pinch of sugar. Just a heads up, it won’t taste exactly the same. Hope that helps! 😊 - Marion's Team",
      pinned: false
    },
    {
      id: "mk-substitute-03",
      subject:" A substitute for Chinese Shaoxing wine?",
      message: "If Shaoxing wine isn’t available, dry sherry or mirin makes a great substitute. You can also use apple juice for a non-alcoholic option, or simply leave it out if preferred.",
      pinned: false
    },
    {
      id: "mk-substitute-04",
      subject: "Substitute for cooking wine",
      message: "You can use grape or apple juice as a substitute for the cooking wine. - Marion's Team",
      pinned: false
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
    "You can find the recipe here: {{link}} - Marion's Team",
    "Here's the full recipe: {{link}} Enjoy cooking! - Marion's Team",
    "Here’s the recipe: {{link}} Hope you love it! - Marion's Team",
    "Here you go! {{link}} - Marion's Team",
    "Thank you for your comment! Here’s the recipe: {{link}} - Marion's Team"
  ];
  
  function generateReplies() {
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
  }

  // 🔘 Trigger by button click
  document.getElementById("generate-replies").addEventListener("click", generateReplies);
  
  // ⌨️ Trigger by pressing Enter
  document.getElementById("recipe-link").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      generateReplies();
    }
  });

  // Auto-run on load
  function renderCookdineReplies(search = "") {
    const container = document.getElementById("cookdine-replies");
    container.innerHTML = "";
  
    let filtered;
    if (search.startsWith("!")) {
      const index = parseInt(search.substring(1)) - 1;
      filtered = cookdineReplies[index] ? [cookdineReplies[index]] : [];
    } else {
      filtered = cookdineReplies.filter(reply =>
        reply.subject.toLowerCase().includes(search.toLowerCase()) ||
        reply.message.toLowerCase().includes(search.toLowerCase())
      );
    }

  
    const sorted = filtered.sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
  
    sorted.forEach(reply => {
      const wrapper = document.createElement("div");
      wrapper.className = "reply-block";
      const realIndex = cookdineReplies.indexOf(reply);
      const title = document.createElement("h4");
      title.textContent = `#${realIndex + 1}: ${reply.subject}`;
  
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
  
      const content = document.createElement("div");
      content.className = "reply-content";
      content.appendChild(title);
      content.appendChild(body);

      wrapper.appendChild(content);
      wrapper.appendChild(btn);

      container.appendChild(wrapper);
    });
  }
  
  
  // Auto-run on load
  renderCookdineReplies();

  function renderMarionReplies(search = "") {
    const container = document.getElementById("marion-replies");
    container.innerHTML = "";
  
    let filtered;
    if (search.startsWith("!")) {
      const index = parseInt(search.substring(1)) - 1;
      filtered = marionReplies[index] ? [marionReplies[index]] : [];
    } else {
      filtered = marionReplies.filter(reply =>
        reply.subject.toLowerCase().includes(search.toLowerCase()) ||
        reply.message.toLowerCase().includes(search.toLowerCase())
      );
    }

  
    const sorted = filtered.sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
  
    sorted.forEach(reply => {
      const wrapper = document.createElement("div");
      wrapper.className = "reply-block";
      const realIndex = marionReplies.indexOf(reply);
      const title = document.createElement("h4");
      title.textContent = `#${realIndex + 1}: ${reply.subject}`;
  
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
  