

// Toggle mobile menu
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Navbar scroll up show
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    navbar.style.transform = "translateY(-100%)"; // hide
  } else {
    navbar.style.transform = "translateY(0)"; // show
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Open popups (About, Contact)
function openPopup(type) {
  if (type === 'about') {
    document.getElementById('aboutPopup').style.display = 'flex';
  } else if (type === 'contact') {
    document.getElementById('contactPopup').style.display = 'flex';
  }
}

// Close popups (About, Contact)
function closePopup(type) {
  if (type === 'about') {
    document.getElementById('aboutPopup').style.display = 'none';
  } else if (type === 'contact') {
    document.getElementById('contactPopup').style.display = 'none';
  }
}
function closePopupOutside(event, type) {
  if (event.target.classList.contains('popup')) {
    closePopup(type);
  }
}

// Toggle dropdown visibility
function toggleDropdown() {
  document.getElementById("categoryDropdown").classList.toggle("show");
}

// Close dropdown if clicked outside
window.onclick = function(event) {
  if (!event.target.matches('#categoryBtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove('show');
    }
  }
};


document.addEventListener('click', function (event) {
  const navLinks = document.getElementById("navLinks");
  const hamburger = document.querySelector(".hamburger");

  const clickedInsideMenu = navLinks.contains(event.target);
  const clickedHamburger = hamburger.contains(event.target);

  if (navLinks.classList.contains("show") && !clickedInsideMenu && !clickedHamburger) {
    navLinks.classList.remove("show");
  }
});




// Filter cards by category
function filterCards(category) {
  const cards = document.querySelectorAll('.card');

  if (category === 'all') {
    cards.forEach(card => {
      card.style.display = 'flex';
    });
  } else {
    cards.forEach(card => {
      if (card.classList.contains(category)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  document.getElementById("categoryDropdown").classList.remove("show");
}

// Search filter for tool cards
document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.trim().toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const title = card.querySelector(".tool-title").textContent.toLowerCase();
    if (title.startsWith(query)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});

// Tool popup data
const toolDetails = {
  adcreative: {
  title: "AdCreative.ai",
  description: `
<span class="tool-section-title">📄 What is AdCreative.ai?</span>
<span class="tool-text">
AdCreative.ai is an AI-powered platform that helps businesses and marketers create high-converting ad creatives — fast. It’s built to generate visuals and ad copy that improve click-through rates (CTR) and engagement.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🧠 <span class="bullet-head">AI Ad Generator</span> – Automatically designs ads using your brand assets and goals.</li>
  <li>✍️ <span class="bullet-head">AI Text Suggestions</span> – Generates powerful ad copy headlines and descriptions.</li>
  <li>📊 <span class="bullet-head">Creative Scoring</span> – Ranks creatives based on predicted performance.</li>
  <li>📁 <span class="bullet-head">Multi-Platform Export</span> – Designs work for Facebook, Google, Instagram & LinkedIn.</li>
  <li>🧑‍🤝‍🧑 <span class="bullet-head">Team Collaboration</span> – Add team members and share ad sets easily.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Create ad creatives for paid campaigns</li>
  <li>Generate A/B test variations instantly</li>
  <li>Improve ad performance with predictive scoring</li>
  <li>Save time designing marketing visuals</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free Trial – Try features before subscribing</li>
  <li>Starter – From $29/month (100 creatives/month)</li>
  <li>Premium – Scales based on creative limits and team size</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Saves hours of ad creation time</li>
  <li>Improves ad performance with data-backed suggestions</li>
  <li>Great for agencies and solo marketers alike</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Not a full design tool — best for ads only</li>
  <li>Some creatives can look similar</li>
  <li>Works best when brand assets are provided</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Performance marketers & advertisers</li>
  <li>Social media managers</li>
  <li>Startups & e-commerce brands</li>
  <li>Agencies managing multiple clients</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses machine learning to analyze ad success rates</li>
  <li>Generates creatives based on audience behavior</li>
  <li>Trained on 100,000+ high-performing ads</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web App (browser)</li>
  <li>Works with Facebook, Google, LinkedIn, and Instagram Ads</li>
</ul>
`
},
aidungeon: {
  title: "AI Dungeon",
  description: `
<span class="tool-section-title">📄 What is AI Dungeon?</span>
<span class="tool-text">
AI Dungeon is an interactive, text-based adventure game powered by AI. It lets you create and explore infinite worlds and stories by typing any action or dialogue — the AI responds creatively, making each story unique.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🧙 <span class="bullet-head">Create Infinite Stories</span> – Start any story and guide it with your input.</li>
  <li>📖 <span class="bullet-head">Play as Any Character</span> – Be a hero, villain, detective, or alien.</li>
  <li>🎮 <span class="bullet-head">Interactive Game Mode</span> – Choose settings like fantasy, sci-fi, mystery, and more.</li>
  <li>🧠 <span class="bullet-head">AI-Driven Creativity</span> – The story adapts in real-time based on your choices.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Creative storytelling and world-building</li>
  <li>Role-playing with friends</li>
  <li>Practicing writing skills or character dialogue</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free – Limited generations and features</li>
  <li>Premium – Starts at $9.99/month with more worlds, memory, and custom modes</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Endless creative possibilities</li>
  <li>No rules — pure imagination</li>
  <li>Great for solo or group storytelling</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Some stories may lose coherence</li>
  <li>NSFW content restrictions in free tier</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Writers and storytellers</li>
  <li>RPG fans and gamers</li>
  <li>Anyone who loves open-ended adventures</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Powered by GPT models from OpenAI or AI21</li>
  <li>Uses context memory and input history</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web browser</li>
  <li>Android and iOS apps</li>
</ul>
`
},

aipicasso: {
  title: "AI Picasso",
  description: `
<span class="tool-section-title">📄 What is AI Picasso?</span>
<span class="tool-text">
AI Picasso is a fun and creative AI tool that transforms your rough sketches into beautiful digital artwork using machine learning.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🎨 <span class="bullet-head">Sketch-to-Art Conversion</span> – Turn doodles into colorful, detailed images.</li>
  <li>🧠 <span class="bullet-head">Style Transfer</span> – Apply artistic styles (e.g. Van Gogh, Picasso) to your drawing.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Create digital art from your imagination</li>
  <li>Teach kids creativity with AI</li>
  <li>Use sketches as concept art</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free with basic features</li>
  <li>Premium plan for high-resolution exports</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Fun and easy to use</li>
  <li>No drawing skills needed</li>
  <li>Results are often surprisingly good</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Not for precise or technical art</li>
  <li>Limited editing options after generation</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Artists and designers</li>
  <li>Kids and educators</li>
  <li>Anyone who loves to draw</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses convolutional neural networks for image generation</li>
  <li>Trained on sketches and paintings</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app</li>
  <li>Mobile (iOS/Android)</li>
</ul>
`
},
airtable: {
  title: "Airtable AI",
  description: `
<span class="tool-section-title">📄 What is Airtable AI?</span>
<span class="tool-text">
Airtable AI adds intelligent features to Airtable’s database-spreadsheet hybrid. It helps automate tasks, extract insights, and streamline workflows without writing code.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🤖 <span class="bullet-head">Smart Field Suggestions</span> – Automatically suggests formulas, categories, and tags.</li>
  <li>🔁 <span class="bullet-head">Workflow Automation</span> – Triggers actions based on record changes or time.</li>
  <li>🧠 <span class="bullet-head">AI-Powered Insights</span> – Summarize, classify, or generate content from cell data.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Build internal tools and dashboards</li>
  <li>Organize and automate CRM or inventory</li>
  <li>Summarize user feedback or notes</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free – Basic databases and limited AI use</li>
  <li>Plus – $10/user/month</li>
  <li>Pro – $20/user/month with automation and AI blocks</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Great mix of spreadsheet + database</li>
  <li>Easy AI tools without scripting</li>
  <li>Works well for teams and startups</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Complex AI workflows need setup time</li>
  <li>AI functions are still limited compared to full AI tools</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Product managers and operations teams</li>
  <li>Startups managing internal systems</li>
  <li>Data analysts who want low-code AI</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses GPT and other NLP models for AI field actions</li>
  <li>Integrated with Airtable’s automation engine</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app</li>
  <li>iOS and Android apps</li>
</ul>
`
},
aiva: {
  title: "Aiva",
  description: `
<span class="tool-section-title">📄 What is Aiva?</span>
<span class="tool-text">
Aiva (Artificial Intelligence Virtual Artist) is an AI music composer that creates original soundtracks for videos, games, ads, and personal use — all in your chosen style.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🎵 <span class="bullet-head">Compose Music by Genre</span> – Pick classical, cinematic, pop, ambient, and more.</li>
  <li>🎼 <span class="bullet-head">Sheet Music Generation</span> – Get downloadable scores in MIDI, MP3, or WAV.</li>
  <li>🎚️ <span class="bullet-head">Edit AI Compositions</span> – Adjust tempo, structure, and instruments easily.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Background music for YouTube, games, and podcasts</li>
  <li>Create original compositions without music theory</li>
  <li>Generate music for personal or commercial projects</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free Plan – Limited compositions and downloads</li>
  <li>Pro – Starts at €11/month (commercial license included)</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Composes in seconds</li>
  <li>Quality rivals royalty-free stock music</li>
  <li>Sheet music is a bonus for musicians</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Some styles sound repetitive</li>
  <li>Customization is limited on lower plans</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>YouTubers and content creators</li>
  <li>Indie game developers</li>
  <li>Composers looking for inspiration</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses deep learning models trained on classical and cinematic music</li>
  <li>Applies AI rules to match genre structure and harmony</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app</li>
  <li>Exports to DAWs like Logic, FL Studio, etc.</li>
</ul>
`
},
animoto: {
  title: "Animoto",
  description: `
<span class="tool-section-title">📄 What is Animoto?</span>
<span class="tool-text">
Animoto is a drag-and-drop video creation tool that uses AI to help you turn photos, video clips, and text into professional-looking videos — no editing experience needed.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🎞️ <span class="bullet-head">Template-Based Video Creation</span> – Choose from a wide range of themes.</li>
  <li>🎵 <span class="bullet-head">Music + Text Sync</span> – Match visuals with licensed music and captions.</li>
  <li>🪄 <span class="bullet-head">Auto Layouts</span> – Let AI arrange your media for a polished result.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Create marketing videos</li>
  <li>Build birthday, wedding, or event recaps</li>
  <li>Make slideshow-style content for social media</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free Plan – Basic tools with watermark</li>
  <li>Professional – $16/month</li>
  <li>Team – $39/month with brand kit and collaboration</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Fast and beginner-friendly</li>
  <li>Good quality templates</li>
  <li>No video editing skills required</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Less flexibility than full video editors</li>
  <li>Watermark on free version</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Small businesses and marketers</li>
  <li>Social media content creators</li>
  <li>People making quick personal videos</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses AI to select layouts, transitions, and pacing</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web-based</li>
</ul>
`
},
anyword: {
  title: "Anyword",
  description: `
<span class="tool-section-title">📄 What is Anyword?</span>
<span class="tool-text">
Anyword is an AI copywriting platform that generates and scores marketing copy based on predicted conversion rates. It’s ideal for ads, product pages, and social media.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>📝 <span class="bullet-head">Ad Copy Generator</span> – Writes Facebook, Google, and LinkedIn ads instantly.</li>
  <li>📊 <span class="bullet-head">Predictive Performance Score</span> – Forecast how well your text will perform.</li>
  <li>🌍 <span class="bullet-head">Website & Product Descriptions</span> – Generate optimized text for landing pages.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Write ads with high CTR</li>
  <li>Optimize website copy</li>
  <li>Create social posts and headlines</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free Trial – Limited usage</li>
  <li>Starter – $49/month</li>
  <li>Business – Custom pricing for teams</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Performance prediction built-in</li>
  <li>Ad-focused — works with all major platforms</li>
  <li>Easy to test different variations</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>More focused on marketing than general writing</li>
  <li>Higher-tier plans can get expensive</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Marketers and advertisers</li>
  <li>E-commerce and SaaS businesses</li>
  <li>Agencies running paid campaigns</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Trained on billions of real ad performance data points</li>
  <li>Uses NLP models to generate and rate text</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web platform</li>
</ul>
`
},
askcodi: {
  title: "AskCodi",
  description: `
<span class="tool-section-title">📄 What is AskCodi?</span>
<span class="tool-text">
AskCodi is an AI assistant for developers that helps write code, generate SQL queries, create test cases, and even suggest regex patterns — all via natural language.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>💻 <span class="bullet-head">Code Generation</span> – Supports Python, JavaScript, Java, and more.</li>
  <li>🧪 <span class="bullet-head">Test Case Creator</span> – Automatically generates unit tests from functions.</li>
  <li>🔍 <span class="bullet-head">Regex Builder</span> – Create and explain regular expressions with ease.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Speed up development workflow</li>
  <li>Generate test scripts faster</li>
  <li>Understand and write SQL without syntax errors</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free plan available</li>
  <li>Pro – $7/month for unlimited use</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Multiple tools in one workspace</li>
  <li>Great for solo developers</li>
  <li>Useful explanations for beginners</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>No full IDE integration yet</li>
  <li>Works best for smaller code snippets</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Frontend/backend developers</li>
  <li>Data analysts writing SQL</li>
  <li>QA testers generating test cases</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses OpenAI Codex-like models</li>
  <li>Trained on open-source and web code data</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app</li>
  <li>VS Code plugin available</li>
</ul>
`
},
autodraw: {
  title: "AutoDraw",
  description: `
<span class="tool-section-title">📄 What is AutoDraw?</span>
<span class="tool-text">
AutoDraw is a fun AI-powered drawing tool by Google that converts your rough sketches into clean, polished icons and drawings using machine learning.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>✏️ <span class="bullet-head">Sketch Recognition</span> – Matches your doodle to known shapes and icons.</li>
  <li>🎨 <span class="bullet-head">Auto Suggest Tool</span> – Offers art suggestions as you draw.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Create clipart-style graphics</li>
  <li>Use as a sketching aid or visual brainstorming</li>
  <li>Help kids or beginners improve digital drawing</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>100% Free</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Super fast & fun</li>
  <li>Very intuitive interface</li>
  <li>Great for quick visuals</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Not for serious artists</li>
  <li>Limited drawing tools and layers</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Kids and casual users</li>
  <li>Designers mocking up ideas quickly</li>
  <li>Teachers or students creating visuals</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses pattern recognition AI</li>
  <li>Based on Google’s Quick, Draw! dataset</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web-based only</li>
</ul>
`
},
bardeen: {
  title: "Bardeen",
  description: `
<span class="tool-section-title">📄 What is Bardeen?</span>
<span class="tool-text">
Bardeen is an AI-powered browser automation tool that helps you eliminate repetitive tasks on websites by building workflows without coding.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>⚙️ <span class="bullet-head">Automate Web Actions</span> – Fill forms, scrape data, move content automatically.</li>
  <li>🧩 <span class="bullet-head">No-Code Workflow Builder</span> – Create sequences of actions visually.</li>
  <li>📊 <span class="bullet-head">CRM & Google Integration</span> – Connect Notion, Airtable, Gmail, Sheets, and more.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Scrape LinkedIn profiles or job listings</li>
  <li>Automate calendar meeting notes</li>
  <li>Sync tasks between Notion and Trello</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free Plan – 500 actions/month</li>
  <li>Pro – $20/month with more runs and features</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Easy to use for non-coders</li>
  <li>Saves tons of time on repetitive tasks</li>
  <li>Good integrations with modern tools</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Browser-based only</li>
  <li>Some advanced logic still requires tweaking</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Marketers & sales teams</li>
  <li>Founders & solopreneurs</li>
  <li>Anyone tired of repetitive browser work</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>AI predicts actions to automate and builds them visually</li>
  <li>Web scraping uses DOM parsing + JavaScript triggers</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Chrome Extension</li>
</ul>
`
},
beautifycode: {
  title: "Beautify Code",
  description: `
<span class="tool-section-title">📄 What is Beautify Code?</span>
<span class="tool-text">
Beautify Code is a free online formatter that cleans up and prettifies messy code. It supports many languages and helps make your code readable instantly.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>💅 <span class="bullet-head">Code Formatting</span> – Fixes indentation, spacing, and line breaks.</li>
  <li>🧠 <span class="bullet-head">Syntax Highlighting</span> – Adds color-coded structure to your code.</li>
  <li>🌐 <span class="bullet-head">Supports Many Languages</span> – JavaScript, Python, HTML, CSS, and more.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Clean messy copied code</li>
  <li>Paste code in presentations or blog posts</li>
  <li>Quickly format code for readability</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Completely Free</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Instant results</li>
  <li>Supports many languages</li>
  <li>No login required</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>No code linting or suggestions</li>
  <li>Basic formatter — not an IDE</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Students formatting assignments</li>
  <li>Developers tidying code before sharing</li>
  <li>Writers embedding code in blogs</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses rule-based beautifiers, not AI</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web-based</li>
</ul>
`
},
beautifulai: {
  title: "Beautiful.ai",
  description: `
<span class="tool-section-title">📄 What is Beautiful.ai?</span>
<span class="tool-text">
Beautiful.ai is an AI-powered presentation tool that automates slide design and ensures everything stays aligned, balanced, and clean — no design skills needed.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>📊 <span class="bullet-head">Smart Slide Layouts</span> – Automatically arranges charts, text, and images.</li>
  <li>🖼️ <span class="bullet-head">Design Guardrails</span> – Keeps fonts, spacing, and alignment consistent.</li>
  <li>🧠 <span class="bullet-head">AI Text Suggestions</span> – Help you write and edit slide content faster.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Make sales or investor decks</li>
  <li>Create marketing and pitch presentations</li>
  <li>Build classroom or team slides</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Pro – $12/month billed annually</li>
  <li>Team – $40/user/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Slides look professional without design work</li>
  <li>Super fast slide building</li>
  <li>Easy to collaborate</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Fewer animations than PowerPoint</li>
  <li>Not as customizable as advanced tools</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Marketers and business pros</li>
  <li>Startup founders and sales teams</li>
  <li>Teachers and students</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>AI-powered layout engine for auto design</li>
  <li>Built-in rules for spacing, color, font harmony</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app</li>
</ul>
`
},
blackboxai: {
  title: "Blackbox AI",
  description: `
<span class="tool-section-title">📄 What is Blackbox AI?</span>
<span class="tool-text">
Blackbox AI is an AI coding assistant that helps you search code snippets, autocomplete functions, and understand unfamiliar code faster — all from your editor.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🔍 <span class="bullet-head">Code Search</span> – Find the right code snippet across 100M+ repositories.</li>
  <li>⚡ <span class="bullet-head">Auto Complete</span> – Autocomplete multi-line code in real time.</li>
  <li>🧠 <span class="bullet-head">Code Explanation</span> – Understand what unfamiliar code does instantly.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Searching for working code snippets</li>
  <li>Learning unfamiliar functions</li>
  <li>Writing code faster with fewer errors</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free plan available</li>
  <li>Paid plans unlock more completions and features</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Supports 20+ languages</li>
  <li>Works in VS Code, Jupyter, and browser</li>
  <li>Very accurate suggestions</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Not ideal for full project generation</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Developers and coders</li>
  <li>Computer science students</li>
  <li>Tech startups building fast</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses custom-trained LLMs + open-source repositories</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Browser extension, VS Code, Jupyter, Web</li>
</ul>
`
},

 canva: {
  title: "Canva",
  description: `
<span class="tool-section-title">📄 What is Canva AI?</span>
<span class="tool-text">
Canva AI is a smart design assistant built into the Canva app. It helps you write content, create images, and design graphics — even if you’ve never used a design tool before.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>✍️ <span class="bullet-head">Magic Write</span> – Instantly writes captions, blogs, or headlines.</li>
  <li>🖼️ <span class="bullet-head">Text to Image</span> – Turn words into pictures using AI.</li>
  <li>🎨 <span class="bullet-head">Magic Design</span> – Suggests templates based on your input.</li>
  <li>🧼 <span class="bullet-head">Background Remover</span> – One-click background removal.</li>
  <li>🧾 <span class="bullet-head">AI Presentations</span> – Auto-generates full slideshow decks.</li>
  <li>🤝 <span class="bullet-head">Team Collaboration</span> – Edit together in real time.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Create social media posts, thumbnails, or flyers</li>
  <li>Write resumes or product descriptions</li>
  <li>Build business or school presentations</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free Plan – Basic AI tools</li>
  <li>Pro Plan – ₹499/month</li>
  <li>Team Plan – For businesses</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Simple to use</li>
  <li>No design or writing skills needed</li>
  <li>Works on any device</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Some features are paid</li>
  <li>Basic image editing</li>
  <li>Needs clear prompts for best output</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Content creators</li>
  <li>Students and teachers</li>
  <li>Business owners</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses ChatGPT-style language AI</li>
  <li>Image generation powered by Stable Diffusion</li>
  <li>Built into Canva's smart editor tools</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web</li>
  <li>iOS & Android apps</li>
  <li>Windows & Mac desktop apps</li>
</ul>
`
},
chatgpt: {
  title: "ChatGPT",
  description: `
<span class="tool-section-title">📄 What is ChatGPT?</span>
<span class="tool-text">
ChatGPT is an AI chatbot developed by OpenAI that understands natural language and responds intelligently. It can help with writing, coding, problem-solving, and more.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🧠 <span class="bullet-head">Answer Questions</span> – From school topics to general knowledge.</li>
  <li>💻 <span class="bullet-head">Write Code</span> – Supports Python, JavaScript, C++, and more.</li>
  <li>📝 <span class="bullet-head">Draft Content</span> – Helps with blogs, emails, scripts, and outlines.</li>
  <li>🧪 <span class="bullet-head">Explain Concepts</span> – Breaks down complex topics clearly.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Homework or assignments</li>
  <li>Writing and editing help</li>
  <li>Building apps and debugging</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free Plan – Uses GPT-3.5</li>
  <li>ChatGPT Plus – $20/month for GPT-4</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Fast and smart responses</li>
  <li>Multi-purpose and conversational</li>
  <li>Great for learning and exploring ideas</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Can be wrong or outdated</li>
  <li>No real-time data (unless connected)</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Students and developers</li>
  <li>Writers and marketers</li>
  <li>Anyone curious or needing quick help</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Based on OpenAI’s GPT-4 architecture</li>
  <li>Trained on large-scale language datasets</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web, iOS, Android, and desktop apps</li>
</ul>
`
},
claude: {
  title: "Claude (Anthropic)",
  description: `
<span class="tool-section-title">📄 What is Claude?</span>
<span class="tool-text">
Claude is a conversational AI developed by Anthropic, designed to be helpful, harmless, and honest — especially good at long-form tasks and detailed reasoning.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🧠 <span class="bullet-head">Long-Context Memory</span> – Handles documents with over 100,000 tokens.</li>
  <li>📝 <span class="bullet-head">Structured Writing</span> – Great for essays, code, emails, and documentation.</li>
  <li>💡 <span class="bullet-head">Safe & Reliable</span> – Tuned for safety and factual grounding.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Writing long-form blogs or articles</li>
  <li>Reviewing lengthy legal or academic docs</li>
  <li>Developing complex code explanations</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Claude 3 Opus – Paid tier with advanced capabilities</li>
  <li>Claude 3 Haiku – Lightweight free tier</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Handles large files with ease</li>
  <li>Very accurate and calm tone</li>
  <li>Focused on helpfulness and clarity</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Limited creativity vs ChatGPT</li>
  <li>Fewer integrations and apps</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Writers and researchers</li>
  <li>Enterprise teams reviewing documents</li>
  <li>Anyone needing thoughtful responses</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Built on Constitutional AI principles</li>
  <li>Supports long-context inference</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app via claude.ai</li>
</ul>
`
},
clickup: {
  title: "ClickUp AI",
  description: `
<span class="tool-section-title">📄 What is ClickUp AI?</span>
<span class="tool-text">
ClickUp AI is a built-in productivity assistant for the ClickUp task management platform. It helps with writing, summarizing, and structuring project-related content.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>📝 <span class="bullet-head">Write & Edit Text</span> – Drafts meeting notes, emails, docs, and tickets.</li>
  <li>📋 <span class="bullet-head">Task Suggestions</span> – Recommends tasks based on your workflow.</li>
  <li>🔍 <span class="bullet-head">Summarize Updates</span> – Condenses long threads into quick summaries.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Boosting productivity in project teams</li>
  <li>Faster documentation and reporting</li>
  <li>Daily work summaries</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free – Basic project management</li>
  <li>AI Add-on – $5/user/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Integrated directly into ClickUp</li>
  <li>Time-saving for daily tasks</li>
  <li>Easy to learn and use</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Only works inside ClickUp</li>
  <li>Not built for creative writing</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Project managers and teams</li>
  <li>Operations and admin professionals</li>
  <li>Remote and async teams</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses NLP to detect context within tasks</li>
  <li>Trained on project-related templates</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web and mobile ClickUp app</li>
</ul>
`
},
cleanup: {
  title: "Cleanup.pictures",
  description: `
<span class="tool-section-title">📄 What is Cleanup.pictures?</span>
<span class="tool-text">
Cleanup.pictures is a simple AI tool that removes unwanted objects, people, watermarks, or text from your images with one brush stroke.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🧼 <span class="bullet-head">Object Removal</span> – Remove distractions from photos easily.</li>
  <li>🖌️ <span class="bullet-head">Inpainting</span> – AI fills in the background naturally after removal.</li>
  <li>💡 <span class="bullet-head">Erase Watermarks</span> – Clean up screenshots or stock images.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Remove photobombers or trash from pics</li>
  <li>Clean product images for ecommerce</li>
  <li>Edit memes and social content</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free – 720p output</li>
  <li>Pro – HD output and batch editing</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>One-click removal</li>
  <li>No Photoshop skills needed</li>
  <li>Super fast and intuitive</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Can blur or distort edges in tricky areas</li>
  <li>HD export needs paid plan</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Photographers and content creators</li>
  <li>Social media marketers</li>
  <li>Online sellers</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses AI inpainting models like LaMa</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app</li>
</ul>
`
},

colossyan: {
  title: "Colossyan",
  description: `
<span class="tool-section-title">📄 What is Colossyan?</span>
<span class="tool-text">
Colossyan is an AI-powered video generator that lets you create professional training or explainer videos using avatars that speak your script.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🎤 <span class="bullet-head">AI Avatars</span> – Choose human-like avatars that speak in many languages.</li>
  <li>📚 <span class="bullet-head">Training Video Templates</span> – Build corporate learning content quickly.</li>
  <li>🗣️ <span class="bullet-head">Multilingual Support</span> – Text-to-speech in 70+ languages and voices.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Onboarding or HR videos</li>
  <li>Explainer videos without filming</li>
  <li>E-learning and micro-courses</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free Trial – Limited exports</li>
  <li>Starter – $28/month billed annually</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Fast video creation</li>
  <li>No camera or actors needed</li>
  <li>Wide range of realistic avatars</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Limited avatar gestures</li>
  <li>Some voices sound robotic</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Corporate trainers and HR teams</li>
  <li>Course creators and educators</li>
  <li>Product explainers and startups</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Combines AI voice, facial animation, and scripting tools</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app</li>
</ul>
`
},
consensus: {
  title: "Consensus",
  description: `
<span class="tool-section-title">📄 What is Consensus?</span>
<span class="tool-text">
Consensus is an AI search engine that extracts and summarizes findings from peer-reviewed scientific papers, giving you evidence-based answers in seconds.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🔍 <span class="bullet-head">Summarize Research</span> – Quickly shows consensus across studies.</li>
  <li>📚 <span class="bullet-head">Evidence-Based Results</span> – No opinions, just facts from real papers.</li>
  <li>🧠 <span class="bullet-head">Intelligent Querying</span> – Understands complex scientific questions.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Finding reliable health and science answers</li>
  <li>Academic or medical research</li>
  <li>Writing evidence-backed content</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free – With daily search limits</li>
  <li>Pro – Extended access and speed</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Trusted peer-reviewed results</li>
  <li>Removes bias and opinion-based answers</li>
  <li>Clean, easy interface</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Focuses only on academic papers</li>
  <li>Limited coverage in some niches</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Researchers and students</li>
  <li>Writers and journalists</li>
  <li>Anyone seeking science-backed answers</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses NLP to extract claims from academic databases</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app</li>
</ul>
`
},
copyai: {
  title: "Copy.ai",
  description: `
<span class="tool-section-title">📄 What is Copy.ai?</span>
<span class="tool-text">
Copy.ai is an AI-powered content creation tool that generates marketing copy, ads, emails, and more from short prompts.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>📢 <span class="bullet-head">Marketing Copy</span> – Write compelling Facebook, Google, and LinkedIn ads.</li>
  <li>📝 <span class="bullet-head">Email & Blog Tools</span> – Draft newsletters, blog posts, intros, and product descriptions.</li>
  <li>💼 <span class="bullet-head">Sales Content</span> – Generate cold emails, outreach messages, and follow-ups.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Creating content for ads and social media</li>
  <li>Speeding up email and landing page copy</li>
  <li>Writing with SEO and audience targeting in mind</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free Plan – Limited tools</li>
  <li>Pro Plan – $36/month for unlimited content</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Easy for non-writers to use</li>
  <li>Fast generation of varied content</li>
  <li>Built specifically for marketing and business</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Output sometimes lacks originality</li>
  <li>Heavily templated formats</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Marketers and entrepreneurs</li>
  <li>Agencies and freelancers</li>
  <li>Startups building their brand</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses GPT-based models fine-tuned for marketing</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app</li>
</ul>
`
},
craiyon: {
  title: "Craiyon",
  description: `
<span class="tool-section-title">📄 What is Craiyon?</span>
<span class="tool-text">
Craiyon (formerly DALL·E Mini) is a free AI model that generates images from any text prompt. It’s fun, fast, and great for casual use and memes.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🎨 <span class="bullet-head">Text to Image</span> – Type anything and get quirky art back.</li>
  <li>🖼️ <span class="bullet-head">Multiple Results</span> – Generates 9 images at once.</li>
  <li>😂 <span class="bullet-head">Meme Creation</span> – Ideal for creative or humorous content.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Fun with friends</li>
  <li>Prompt testing and creativity</li>
  <li>Making memes or concept thumbnails</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>100% free</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Easy and open access</li>
  <li>Funny and weird outputs</li>
  <li>No sign-in needed</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Lower image quality than premium tools</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Anyone exploring AI art</li>
  <li>Social media meme creators</li>
  <li>Students and prompt hobbyists</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Based on a smaller open-source diffusion model</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web</li>
</ul>
`
},

cursor: {
  title: "Cursor",
  description: `
<span class="tool-section-title">📄 What is Cursor?</span>
<span class="tool-text">
Cursor is an AI-first code editor designed to help developers build software faster by combining the IDE and AI into one seamless environment.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>💡 <span class="bullet-head">Ask AI Anywhere</span> – Type questions directly into your editor and get instant help.</li>
  <li>🧠 <span class="bullet-head">Code-aware Suggestions</span> – Understands your entire codebase context.</li>
  <li>🔄 <span class="bullet-head">Edit & Refactor with AI</span> – Automatically change, fix, or clean code via commands.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Debugging and writing new code</li>
  <li>Learning new APIs or frameworks</li>
  <li>Collaborative code review and updates</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free – Community version</li>
  <li>Pro – $20/month with enhanced context</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Feels like coding with a super-smart pair programmer</li>
  <li>Deep context awareness</li>
  <li>Built for serious developers</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Still evolving – some limitations in large projects</li>
  <li>Requires some learning curve</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Professional developers</li>
  <li>Startups and fast-moving teams</li>
  <li>People who want AI-native code environments</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses full-codebase embeddings for context</li>
  <li>Built on GPT-based and custom models</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Downloadable desktop app (macOS, Windows)</li>
</ul>
`
},
dalle3: {
  title: "DALL·E 3",
  description: `
<span class="tool-section-title">📄 What is DALL·E 3?</span>
<span class="tool-text">
DALL·E 3 is OpenAI’s latest image generation model that turns text prompts into highly detailed, realistic, or artistic visuals using AI.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🖼️ <span class="bullet-head">Text-to-Image</span> – Describe any scene, and it generates visuals instantly.</li>
  <li>📝 <span class="bullet-head">Prompt Understanding</span> – Handles detailed and nuanced instructions better than before.</li>
  <li>🖌️ <span class="bullet-head">Inpainting & Editing</span> – Modify parts of existing images with precision.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Creating illustrations, posters, and thumbnails</li>
  <li>Generating product mockups or concept art</li>
  <li>Experimenting with visual storytelling</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free within ChatGPT Plus (via GPT-4)</li>
  <li>Pay-per-use for API image generation</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Produces beautiful, detailed images</li>
  <li>Understands complex prompts better than other tools</li>
  <li>Integrated with ChatGPT</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>No direct access without ChatGPT or API</li>
  <li>Sometimes overly literal with prompts</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Designers and marketers</li>
  <li>Writers and content creators</li>
  <li>Artists and entrepreneurs</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses a diffusion model trained on text–image pairs</li>
  <li>Built by OpenAI and integrated with GPT</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>ChatGPT (Plus users), OpenAI API</li>
</ul>
`
},

designify: {
  title: "Designify",
  description: `
<span class="tool-section-title">📄 What is Designify?</span>
<span class="tool-text">
Designify is an AI design enhancer that transforms ordinary product photos into professional-grade marketing images by automatically improving background, lighting, and composition.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🎨 <span class="bullet-head">Image Enhancement</span> – Adjusts lighting, shadows, and vibrance.</li>
  <li>🧼 <span class="bullet-head">Background Removal</span> – Automatically erases messy or distracting backdrops.</li>
  <li>📸 <span class="bullet-head">Smart Templates</span> – Applies clean and modern visual styles to images.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Optimizing product photos for online stores</li>
  <li>Creating ad-ready visuals</li>
  <li>Quick editing without design skills</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free Plan – Limited exports</li>
  <li>Pro – $9.99/month for high-res and more control</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>One-click enhancement</li>
  <li>Professional-looking output</li>
  <li>Ideal for e-commerce and Etsy sellers</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Limited template customization</li>
  <li>Not a full photo editor</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Online sellers and creators</li>
  <li>Social media managers</li>
  <li>Startup product teams</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Combines background detection, lighting AI, and templates</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app</li>
</ul>
`
},
descript: {
  title: "Descript",
  description: `
<span class="tool-section-title">📄 What is Descript?</span>
<span class="tool-text">
Descript is an all-in-one AI audio and video editor that lets you edit content like a document — just delete words to cut video, add voiceovers, or fix mistakes automatically.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>✂️ <span class="bullet-head">Edit by Text</span> – Edit videos by changing the transcript.</li>
  <li>🗣️ <span class="bullet-head">Overdub</span> – Clone your voice and fix errors with AI-generated speech.</li>
  <li>🎬 <span class="bullet-head">Screen Recording + Video Editor</span> – Combine video, audio, text, and slides easily.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Podcast editing</li>
  <li>YouTube or explainer videos</li>
  <li>Course content or tutorials</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free – Limited transcription and features</li>
  <li>Pro – $12 to $24/month for full tools</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Fast, intuitive editing</li>
  <li>Replaces multiple tools (like Premiere + Audition)</li>
  <li>Built-in AI voice and text tools</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Learning curve for new users</li>
  <li>Cloud-based – internet required</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Podcasters and YouTubers</li>
  <li>Educators and coaches</li>
  <li>Content marketers and editors</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Speech-to-text transcription</li>
  <li>Voice cloning and NLP editing tools</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Desktop app (Mac & Windows)</li>
  <li>Web platform</li>
</ul>
`
},
dubverse: {
  title: "Dubverse",
  description: `
<span class="tool-section-title">📄 What is Dubverse?</span>
<span class="tool-text">
Dubverse is an AI-powered video dubbing platform that automatically translates and dubs your videos into 30+ languages using human-like synthetic voices.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🌐 <span class="bullet-head">Multilingual Dubbing</span> – Translate and voiceover videos in different languages in minutes.</li>
  <li>🎙️ <span class="bullet-head">Voice Customization</span> – Choose from different accents and voice styles.</li>
  <li>📹 <span class="bullet-head">Instant Video Sync</span> – AI keeps lips and visuals in sync with the dubbed voice.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Translating educational content</li>
  <li>Expanding your videos globally</li>
  <li>Localization for social media or business</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free trial – Limited duration</li>
  <li>Pay-per-minute or monthly plans</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Supports Indian regional languages</li>
  <li>Fast turnaround with high accuracy</li>
  <li>No need for separate recording studios</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Some voices may sound robotic</li>
  <li>May require minor manual syncing</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>YouTubers and educators</li>
  <li>Startups and media teams</li>
  <li>Enterprises entering new regions</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>AI-powered translation and speech synthesis</li>
  <li>Lip sync + subtitle alignment tools</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web-based</li>
</ul>
`
},

elicit: {
  title: "Elicit",
  description: `
<span class="tool-section-title">📄 What is Elicit?</span>
<span class="tool-text">
Elicit is an AI research assistant that helps you search, summarize, and extract insights from academic papers and studies, speeding up the research process for students and professionals.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🔍 <span class="bullet-head">Literature Review</span> – Automatically finds and organizes relevant papers.</li>
  <li>📄 <span class="bullet-head">Paper Summarization</span> – Extracts key takeaways and answers from dense PDFs.</li>
  <li>🧠 <span class="bullet-head">AI Questioning</span> – Ask research questions and get answers based on scientific evidence.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Conducting literature reviews</li>
  <li>Finding papers and summarizing them fast</li>
  <li>Academic writing and idea validation</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free – Core features with limits</li>
  <li>Paid – More papers and exports (custom plans)</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Saves hours of manual searching</li>
  <li>Great for researchers and students</li>
  <li>Intuitive interface and clean outputs</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Not all papers have full-text access</li>
  <li>Answers depend on database scope</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Researchers and PhD students</li>
  <li>Writers and academics</li>
  <li>Anyone doing deep research work</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses NLP to extract structured data from academic papers</li>
  <li>Built on large AI language models + semantic search</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app</li>
</ul>
`
},
elevenlabs: {
  title: "ElevenLabs",
  description: `
<span class="tool-section-title">📄 What is ElevenLabs?</span>
<span class="tool-text">
ElevenLabs is an AI voice generation platform known for producing realistic, expressive, and multilingual synthetic voices for narration, video, audiobooks, and more.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🎙️ <span class="bullet-head">Voice Cloning</span> – Create realistic AI voices from your own recordings.</li>
  <li>🌍 <span class="bullet-head">Multilingual Speech</span> – Supports 30+ languages with fluent pronunciation.</li>
  <li>🎧 <span class="bullet-head">Emotional Tones</span> – Add sadness, joy, excitement, or calmness to voices.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Creating YouTube narration or audiobooks</li>
  <li>Video games, chatbots, and characters</li>
  <li>Accessibility for reading content aloud</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free – Limited monthly voice minutes</li>
  <li>Paid – Starts at $5/month for higher usage</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Hyper-realistic voice output</li>
  <li>Easy to use for non-tech users</li>
  <li>Multiple tones and styles</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Voice cloning needs quality samples</li>
  <li>Free tier is limited</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Content creators and YouTubers</li>
  <li>Game developers and authors</li>
  <li>Accessibility solution providers</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Text-to-speech engine with deep neural voices</li>
  <li>Fine-tuned on speech emotion and accent control</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web-based and API access</li>
</ul>
`
},
ellieai: {
  title: "Ellie AI",
  description: `
<span class="tool-section-title">📄 What is Ellie AI?</span>
<span class="tool-text">
Ellie AI is a tool that helps teams write better product documentation by guiding decision-making and ensuring clarity and collaboration in technical docs.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>📘 <span class="bullet-head">Decision Documentation</span> – Helps document tradeoffs, risks, and design choices.</li>
  <li>🧩 <span class="bullet-head">Collaboration Tools</span> – Involves multiple team members in shaping decisions.</li>
  <li>✍️ <span class="bullet-head">AI Suggestions</span> – Recommends improvements for clarity and structure.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Writing specs, architecture, and decision logs</li>
  <li>Keeping product teams aligned</li>
  <li>Avoiding decision debt and miscommunication</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free plan – Limited usage</li>
  <li>Pro plans – For team workflows</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Makes documentation easier and smarter</li>
  <li>Improves cross-team clarity</li>
  <li>Keeps a log of past choices</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Not ideal for general writing</li>
  <li>Focused on structured documentation</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Product managers and engineers</li>
  <li>UX and technical writers</li>
  <li>Startup and enterprise product teams</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>AI language models + doc collaboration framework</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web-based app</li>
</ul>
`
},
explainlikeimfive: {
  title: "Explain Like I'm Five AI",
  description: `
<span class="tool-section-title">📄 What is Explain Like I'm Five AI?</span>
<span class="tool-text">
Explain Like I'm Five AI (ELI5 AI) breaks down complicated topics into super simple, easy-to-understand explanations — like you're 5 years old.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🧠 <span class="bullet-head">Simplify Complex Ideas</span> – Turns advanced topics into basic concepts.</li>
  <li>📚 <span class="bullet-head">Teach with Analogy</span> – Uses relatable stories and examples.</li>
  <li>💬 <span class="bullet-head">Interactive Answers</span> – Lets you ask follow-up questions in plain English.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Learning tough concepts quickly</li>
  <li>Explaining ideas to non-experts</li>
  <li>Breaking down science, tech, finance, etc.</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free – Basic explanations</li>
  <li>Paid – Unlimited questions, export options</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Super beginner-friendly</li>
  <li>Makes intimidating topics fun</li>
  <li>Great for kids, teachers, and curious adults</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Sometimes oversimplifies too much</li>
  <li>Not ideal for in-depth academic work</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Students and educators</li>
  <li>Non-tech users trying to learn something new</li>
  <li>Parents teaching kids</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Built on a language model with simplification layers</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app</li>
</ul>
`
},
explainpaper: {
  title: "Explainpaper",
  description: `
<span class="tool-section-title">📄 What is Explainpaper?</span>
<span class="tool-text">
Explainpaper is an AI tool that helps you understand academic research papers by explaining confusing parts in simple terms — just highlight and get clarity instantly.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🖍️ <span class="bullet-head">Highlight to Explain</span> – Select text and get plain-English explanations.</li>
  <li>📄 <span class="bullet-head">Academic Paper Support</span> – Works on uploaded PDFs with complex content.</li>
  <li>🎓 <span class="bullet-head">Contextual AI</span> – Gives answers based on the rest of the paper.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Understanding tough math or ML papers</li>
  <li>Reading faster with real understanding</li>
  <li>Studying smarter with AI help</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free – Core functionality</li>
  <li>Premium – Priority access and longer papers</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Saves hours of Googling</li>
  <li>Great for ML and CS students</li>
  <li>Simple UI and fast responses</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Explanations may not always be perfect</li>
  <li>Best for science and tech papers</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Students and researchers</li>
  <li>Journalists and analysts</li>
  <li>Anyone reading technical PDFs</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>PDF parsing + NLP + transformer-based simplification</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web-based</li>
</ul>
`
},
flick: {
  title: "Flick",
  description: `
<span class="tool-section-title">📄 What is Flick?</span>
<span class="tool-text">
Flick is an AI-powered social media assistant that helps you brainstorm, write, schedule, and optimize content across platforms — all in one place.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>📝 <span class="bullet-head">AI Caption Writer</span> – Generate engaging captions based on keywords or ideas.</li>
  <li>📅 <span class="bullet-head">Scheduling + Calendar</span> – Plan and auto-publish posts on Instagram, Facebook, and more.</li>
  <li>📊 <span class="bullet-head">Hashtag + Analytics</span> – Get data-driven hashtag suggestions and track post performance.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Growing your social media brand</li>
  <li>Saving time as a content creator</li>
  <li>Improving post quality and reach</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free trial – Limited posts and captions</li>
  <li>Pro – Monthly plan for full features</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Huge time-saver for creators</li>
  <li>Smart, engaging copy with AI</li>
  <li>Visual calendar and tools in one place</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Still need human creativity for best results</li>
  <li>Some platform limitations for auto-posting</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Influencers and marketers</li>
  <li>Social media managers</li>
  <li>Small business owners</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>GPT-powered caption generation + scheduling engine</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web platform</li>
</ul>
`
},
firefliesai: {
  title: "Fireflies AI",
  description: `
<span class="tool-section-title">📄 What is Fireflies AI?</span>
<span class="tool-text">
Fireflies AI is a meeting assistant that joins your virtual calls to transcribe, summarize, and analyze conversations automatically, helping teams stay productive and organized.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>📝 <span class="bullet-head">Meeting Transcripts</span> – Automatically records and transcribes voice calls.</li>
  <li>🧠 <span class="bullet-head">Smart Summaries</span> – Generates highlights, tasks, and key insights.</li>
  <li>📂 <span class="bullet-head">Searchable Notes</span> – Lets you search, comment, and collaborate on transcripts.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Team meetings and client calls</li>
  <li>Sales and marketing discussions</li>
  <li>Training, onboarding, and feedback tracking</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free – Limited transcription and storage</li>
  <li>Pro – More transcription hours, integrations</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Hands-free meeting documentation</li>
  <li>Searchable across all your calls</li>
  <li>Easy integrations with Zoom, Google Meet, and more</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Accuracy depends on audio quality</li>
  <li>Free plan has limits on usage</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Remote teams and startups</li>
  <li>Sales, support, and HR professionals</li>
  <li>Anyone who wants to save meeting notes automatically</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Voice-to-text engine with NLP summarization</li>
  <li>Integrates with popular conferencing platforms</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app + integrations with Zoom, Meet, MS Teams</li>
</ul>
`
},
gamma: {
  title: "Gamma.app",
  description: `
<span class="tool-section-title">📄 What is Gamma.app?</span>
<span class="tool-text">
Gamma.app lets you instantly generate beautiful decks, docs, and webpages using AI — all without needing to design anything manually.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>📊 <span class="bullet-head">AI Slide Generation</span> – Write a prompt and get a full presentation instantly.</li>
  <li>📝 <span class="bullet-head">Docs + Web Pages</span> – Build sleek, responsive docs or mini-sites.</li>
  <li>🎨 <span class="bullet-head">Custom Themes</span> – Auto-applies layout, design, and branding.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Startup pitch decks</li>
  <li>Business docs and reports</li>
  <li>One-pagers or link-in-bio sites</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free – Create up to 400 blocks</li>
  <li>Pro – $10/month for unlimited use and branding</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>No design skills required</li>
  <li>Fast, modern, and shareable</li>
  <li>Looks better than PowerPoint or Notion</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Requires a login even for quick access</li>
  <li>Limited offline access</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Startup founders and product teams</li>
  <li>Teachers and online coaches</li>
  <li>Anyone who hates PowerPoint</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Generative design + GPT-style prompt builder</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app</li>
</ul>
`
},
githubcopilot: {
  title: "GitHub Copilot",
  description: `
<span class="tool-section-title">📄 What is GitHub Copilot?</span>
<span class="tool-text">
GitHub Copilot is an AI coding assistant developed by GitHub and OpenAI. It helps developers write code faster by suggesting entire lines, functions, or even complex logic in real time.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>⚡ <span class="bullet-head">Code Suggestions</span> – Autocompletes code, from simple functions to boilerplate.</li>
  <li>🧠 <span class="bullet-head">AI-Powered Insights</span> – Understands context, recommends logic, variable names, etc.</li>
  <li>🌐 <span class="bullet-head">Multilingual</span> – Supports Python, JavaScript, C++, TypeScript, and more.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Speeding up software development</li>
  <li>Learning new programming patterns</li>
  <li>Writing tests and documentation</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>$10/month or $100/year for individuals</li>
  <li>Free for verified students and OSS developers</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Massively boosts productivity</li>
  <li>Feels like pair-programming with an AI</li>
  <li>Integrates directly into VS Code and IDEs</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Not always accurate — double-check outputs</li>
  <li>May suggest outdated or insecure code</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Developers and engineers</li>
  <li>Code learners and students</li>
  <li>Teams looking to boost coding speed</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Powered by OpenAI Codex model</li>
  <li>Integrated into GitHub, VS Code, and JetBrains</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>VS Code, GitHub, JetBrains IDEs</li>
</ul>
`
},
google_gemini: {
  title: "Google Gemini",
  description: `
<span class="tool-section-title">📄 What is Google Gemini?</span>
<span class="tool-text">
Google Gemini is Google’s next-generation AI assistant, combining the best of Bard and DeepMind into a powerful, multimodal AI that understands text, images, code, and more.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>💬 <span class="bullet-head">Natural Conversations</span> – Chat, ask questions, and get insightful responses.</li>
  <li>🧠 <span class="bullet-head">Multimodal Input</span> – Understands text, images, and voice in one query.</li>
  <li>📊 <span class="bullet-head">Code + Data Analysis</span> – Helps you solve coding problems and visualize data.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Research and summarization</li>
  <li>Code generation and debugging</li>
  <li>Learning with visual explanations</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free tier via Google Bard</li>
  <li>Pro tier in Google One AI Premium (₹1,950/month)</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Fast, integrated with Google Search</li>
  <li>Strong coding and logic abilities</li>
  <li>Seamless across Gmail, Docs, Drive</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Still in evolution — not always reliable</li>
  <li>Premium model behind paywall</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Researchers and developers</li>
  <li>Students and knowledge seekers</li>
  <li>Google Workspace power users</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Based on Gemini 1.5 Pro by DeepMind</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web (bard.google.com), Android, iOS</li>
</ul>
`
},
grammarlygo: {
  title: "GrammarlyGO",
  description: `
<span class="tool-section-title">📄 What is GrammarlyGO?</span>
<span class="tool-text">
GrammarlyGO is the AI-powered writing assistant from Grammarly that helps you rewrite, ideate, and personalize your content across emails, documents, and messaging platforms.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>✍️ <span class="bullet-head">Rewrite Suggestions</span> – Adjust tone, length, or clarity with one click.</li>
  <li>🧠 <span class="bullet-head">AI Prompts</span> – Auto-generate replies, content, and ideas on the fly.</li>
  <li>📩 <span class="bullet-head">Email Smart Reply</span> – Writes email drafts instantly based on context.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Writing smarter emails</li>
  <li>Generating blog or essay drafts</li>
  <li>Fixing tone and grammar fast</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free – Limited suggestions</li>
  <li>Premium – ₹1,196/month (includes Grammarly Premium)</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Context-aware suggestions</li>
  <li>Boosts confidence when writing</li>
  <li>Works in email, Google Docs, Word, etc.</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Sometimes over-corrects casual tone</li>
  <li>Needs internet to work</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Professionals and job seekers</li>
  <li>Students and content creators</li>
  <li>Anyone writing often across platforms</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses Grammarly's NLP + LLMs (GPT-based)</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Browser extension, desktop app, mobile keyboard</li>
</ul>
`
},
growthbar: {
  title: "GrowthBar",
  description: `
<span class="tool-section-title">📄 What is GrowthBar?</span>
<span class="tool-text">
GrowthBar is an AI-powered SEO and content writing tool that helps bloggers and marketers create optimized content fast — with suggestions, outlines, and auto-writing features.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🧾 <span class="bullet-head">AI Blog Writing</span> – Create SEO-friendly blog posts in minutes.</li>
  <li>🔍 <span class="bullet-head">Keyword Research</span> – Find ranking keywords and competitor analysis.</li>
  <li>🛠️ <span class="bullet-head">Content Optimization</span> – Score your post for readability and SEO.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Writing blogs and product pages</li>
  <li>Improving SEO rankings</li>
  <li>Planning content strategies</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free trial available</li>
  <li>Paid plans from $29/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Clean, fast interface</li>
  <li>Combines AI writing + SEO in one</li>
  <li>Google Chrome extension available</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Best for English content only</li>
  <li>Basic features without deep customization</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>SEO writers and marketers</li>
  <li>Bloggers and content creators</li>
  <li>Agencies managing SEO projects</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>AI copywriting engine + SEO analysis tools</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app + Chrome extension</li>
</ul>
`
},
heygen: {
  title: "HeyGen",
  description: `
<span class="tool-section-title">📄 What is HeyGen?</span>
<span class="tool-text">
HeyGen is an AI video generation platform that lets you create professional-looking avatar videos by typing a script — no camera, mic, or editing needed.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🧍 <span class="bullet-head">AI Avatars</span> – Choose from realistic avatars or create your own digital clone.</li>
  <li>🎙️ <span class="bullet-head">Text-to-Video</span> – Convert text into spoken video presentations.</li>
  <li>🌐 <span class="bullet-head">Multilingual Voiceovers</span> – Speak your message in over 40 languages.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Explainer and training videos</li>
  <li>Marketing content and promos</li>
  <li>Internal communications</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free plan with watermarked exports</li>
  <li>Paid from $29/month for commercial use</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Super realistic avatars</li>
  <li>No equipment or video editing needed</li>
  <li>Fast turnaround for video content</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Watermark on free plan</li>
  <li>Limited customization vs manual editing</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Marketers and sales teams</li>
  <li>Educators and HR professionals</li>
  <li>Solo creators and startups</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Text-to-speech + facial sync with AI avatars</li>
  <li>Voice cloning and lip-syncing engine</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app</li>
</ul>
`
},
humataai: {
  title: "Humata AI",
  description: `
<span class="tool-section-title">📄 What is Humata AI?</span>
<span class="tool-text">
Humata AI is an AI-powered assistant designed to help you understand, analyze, and interact with your own documents. Simply upload a PDF, DOCX, or other supported file types, and Humata can answer questions, summarize content, extract insights, and even generate custom reports — all based on your documents.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>📝 <span class="bullet-head">Ask Questions</span> – Query any document and get precise answers.</li>
  <li>🗂 <span class="bullet-head">Summarize Content</span> – Create concise summaries of long documents.</li>
  <li>🔍 <span class="bullet-head">Extract Data</span> – Pull out key facts like dates, names, figures.</li>
  <li>📊 <span class="bullet-head">Generate Reports</span> – Bundle insights into structured outputs.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Academic paper reviews</li>
  <li>Business reports analysis</li>
  <li>Legal or financial document Q&A</li>
  <li>Data extraction from complex files</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free tier with limited uploads and usage</li>
  <li>Premium subscription for higher limits and advanced features</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Instant understanding of large documents</li>
  <li>Time-saving summaries and data pull-outs</li>
  <li>Interactive querying—more than just static summaries</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Upload limits per plan</li>
  <li>May misinterpret scanned images—prefer text-based files</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Students and researchers</li>
  <li>Professionals analyzing reports</li>
  <li>Legal, finance, and business teams</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses large language models with document embeddings and Q&A pipelines</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web interface</li>
  <li>Chrome extension (for web‑based docs)</li>
  <li>API for integration</li>
</ul>
`
},
hyperwrite: {
  title: "HyperWrite",
  description: `
<span class="tool-section-title">📄 What is HyperWrite?</span>
<span class="tool-text">
HyperWrite is a personal AI writing assistant that helps you brainstorm ideas, complete paragraphs, and even browse the web with intelligent suggestions.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>✍️ <span class="bullet-head">Autowrite</span> – Generate full paragraphs or emails with just a prompt.</li>
  <li>💡 <span class="bullet-head">Idea Generator</span> – Spark creative blog titles, intros, and outlines.</li>
  <li>🌐 <span class="bullet-head">AI Web Assistant</span> – Chrome extension that works on any site, in real time.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Writing faster and smarter</li>
  <li>Generating creative content ideas</li>
  <li>Answering messages and emails quickly</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free basic tier</li>
  <li>Pro – $19.99/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Real-time suggestions as you type</li>
  <li>Wide range of writing use cases</li>
  <li>Browser extension works everywhere</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Not great for long-form articles</li>
  <li>Limited access on free plan</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Writers and bloggers</li>
  <li>Students and professionals</li>
  <li>Anyone who types a lot online</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Language models trained for text prediction</li>
  <li>Chrome-based extension integration</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web, Chrome extension</li>
</ul>
`
},
inkeditor: {
  title: "INK Editor",
  description: `
<span class="tool-section-title">📄 What is INK Editor?</span>
<span class="tool-text">
INK is an AI-powered writing tool focused on SEO and performance. It helps writers create optimized, plagiarism-free content that ranks high on search engines.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>📝 <span class="bullet-head">AI Writer</span> – Create full-length blogs, product descriptions, and more.</li>
  <li>🔍 <span class="bullet-head">SEO Optimization</span> – Real-time SEO scoring and keyword suggestions.</li>
  <li>📊 <span class="bullet-head">Plagiarism Checker</span> – Ensure originality with built-in checking tools.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Writing SEO blogs and landing pages</li>
  <li>Creating eCommerce product content</li>
  <li>Improving existing articles</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free plan with limited AI credits</li>
  <li>Pro from $49/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Combines writing + SEO in one tool</li>
  <li>Simple UI, perfect for marketers</li>
  <li>Built-in plagiarism and optimization tools</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Pro pricing is relatively high</li>
  <li>Not ideal for long creative storytelling</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Content writers and bloggers</li>
  <li>SEO agencies and marketers</li>
  <li>Product and eCommerce teams</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Natural language generation + SEO scoring</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app</li>
</ul>
`
},
inkeditor: {
  title: "INK Editor",
  description: `
<span class="tool-section-title">📄 What is INK Editor?</span>
<span class="tool-text">
INK is an AI-powered writing tool focused on SEO and performance. It helps writers create optimized, plagiarism-free content that ranks high on search engines.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>📝 <span class="bullet-head">AI Writer</span> – Create full-length blogs, product descriptions, and more.</li>
  <li>🔍 <span class="bullet-head">SEO Optimization</span> – Real-time SEO scoring and keyword suggestions.</li>
  <li>📊 <span class="bullet-head">Plagiarism Checker</span> – Ensure originality with built-in checking tools.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Writing SEO blogs and landing pages</li>
  <li>Creating eCommerce product content</li>
  <li>Improving existing articles</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free plan with limited AI credits</li>
  <li>Pro from $49/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Combines writing + SEO in one tool</li>
  <li>Simple UI, perfect for marketers</li>
  <li>Built-in plagiarism and optimization tools</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Pro pricing is relatively high</li>
  <li>Not ideal for long creative storytelling</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Content writers and bloggers</li>
  <li>SEO agencies and marketers</li>
  <li>Product and eCommerce teams</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Natural language generation + SEO scoring</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app</li>
</ul>
`
},
jasper: {
  title: "Jasper",
  description: `
<span class="tool-section-title">📄 What is Jasper?</span>
<span class="tool-text">
Jasper is a popular AI writing platform designed for marketers and content teams. It helps generate SEO-optimized blogs, ads, emails, and brand-consistent content.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>✍️ <span class="bullet-head">AI Writer</span> – Create blog posts, product descriptions, emails, and more.</li>
  <li>🧠 <span class="bullet-head">Brand Voice</span> – Maintain consistent tone with your brand guidelines.</li>
  <li>📣 <span class="bullet-head">Marketing Templates</span> – Generate content for ads, SEO, and email in seconds.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Writing blog articles and web copy</li>
  <li>Running social media and ad campaigns</li>
  <li>Scaling marketing content production</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Starts at $49/month</li>
  <li>Free 7-day trial available</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Polished, on-brand writing</li>
  <li>Great for teams and agencies</li>
  <li>Fast output with high accuracy</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Can be pricey for solo users</li>
  <li>Works best with clear instructions</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Marketing teams and content agencies</li>
  <li>Startups scaling brand content</li>
  <li>Freelance copywriters</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Trained on GPT + proprietary brand models</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web platform + browser extension</li>
</ul>
`
},
kaiber: {
  title: "Kaiber",
  description: `
<span class="tool-section-title">📄 What is Kaiber?</span>
<span class="tool-text">
Kaiber is an AI-powered video generator that transforms text prompts or images into music videos and stylized animations with a cinematic look.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🎥 <span class="bullet-head">Text-to-Video</span> – Create short videos from written prompts.</li>
  <li>🖼️ <span class="bullet-head">Image Animation</span> – Animate existing art or photos.</li>
  <li>🎶 <span class="bullet-head">Music Sync</span> – Generate visuals timed to your own music.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>AI-generated music videos</li>
  <li>Concept art and motion experiments</li>
  <li>Social media storytelling</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free plan with credits</li>
  <li>Paid from $5/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Visually stunning output</li>
  <li>Great for musicians and artists</li>
  <li>Easy to use for non-editors</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Output can be unpredictable</li>
  <li>Limited editing flexibility</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Musicians and visual artists</li>
  <li>Social media video creators</li>
  <li>Creative storytellers and animators</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Stable Diffusion + animation engine</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app</li>
</ul>
`
},
khanmigo: {
  title: "Khanmigo",
  description: `
<span class="tool-section-title">📄 What is Khanmigo?</span>
<span class="tool-text">
Khanmigo is Khan Academy’s AI-powered tutor and teaching assistant, designed to help students learn and teachers manage classes using ChatGPT-style support.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>👨‍🏫 <span class="bullet-head">AI Tutor</span> – Explains concepts, guides problem solving, and adapts to student levels.</li>
  <li>📚 <span class="bullet-head">Interactive Practice</span> – Offers step-by-step help without giving away answers.</li>
  <li>🧑‍🏫 <span class="bullet-head">Teacher Tools</span> – Helps educators track progress and plan instruction.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Math and science learning support</li>
  <li>Homework and concept guidance</li>
  <li>Teaching aid for lesson planning</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free (pilot program, invite only)</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Trusted by teachers and parents</li>
  <li>Aligned with curriculum standards</li>
  <li>Personalized tutoring feel</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Limited to U.S. students (for now)</li>
  <li>Still in development phase</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Students needing subject help</li>
  <li>Teachers using Khan Academy</li>
  <li>Parents seeking academic support</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Powered by GPT-4 via OpenAI API</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Khan Academy web platform</li>
</ul>
`
},
kite: {
  title: "Kite",
  description: `
<span class="tool-section-title">📄 What is Kite?</span>
<span class="tool-text">
Kite is an AI code completion assistant that helps developers write code faster by providing intelligent suggestions directly inside your code editor.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>💡 <span class="bullet-head">Code Autocomplete</span> – Suggests code completions as you type.</li>
  <li>📚 <span class="bullet-head">Documentation Lookup</span> – Shows Python documentation instantly for any function.</li>
  <li>⚡ <span class="bullet-head">Function Signatures</span> – Displays parameters and usage hints inline.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Speeding up Python development</li>
  <li>Reducing syntax errors</li>
  <li>Learning APIs faster</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free forever</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Instant autocomplete for Python</li>
  <li>Lightweight and fast</li>
  <li>Easy to install and use</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>No longer actively updated (discontinued)</li>
  <li>Limited language support</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Python developers</li>
  <li>Beginner coders learning functions</li>
  <li>Productivity-focused programmers</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Static analysis + ML code prediction</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>VS Code, Atom, Sublime Text, JetBrains IDEs</li>
</ul>
`
},
kreaai: {
  title: "Krea",
  description: `
<span class="tool-section-title">📄 What is Krea?</span>
<span class="tool-text">
Krea is a real-time AI design platform that turns text or sketches into professional-level visual content — ideal for digital artists and concept creators.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🎨 <span class="bullet-head">Sketch to Render</span> – Turn hand drawings into polished visuals.</li>
  <li>💬 <span class="bullet-head">Text to Image</span> – Describe a scene and watch it generate live.</li>
  <li>🖌️ <span class="bullet-head">Live Editing</span> – Real-time control over AI-generated art.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Concept art</li>
  <li>Storyboarding</li>
  <li>Product design mockups</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free plan with limits</li>
  <li>Pro plans offer faster generation and HD outputs</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Real-time rendering</li>
  <li>Clean UI and fast results</li>
  <li>Sketch-based input is intuitive</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>May require prompt tuning for best results</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Digital artists</li>
  <li>Designers and illustrators</li>
  <li>Creative teams prototyping visuals</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Combines diffusion models + live UI rendering</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web only</li>
</ul>
`
},
lamini: {
  title: "Lamini",
  description: `
<span class="tool-section-title">📄 What is Lamini?</span>
<span class="tool-text">
Lamini is a developer-friendly platform for training custom LLMs (Large Language Models) securely — built especially for enterprise-grade apps and teams.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🧠 <span class="bullet-head">Train Your Own LLM</span> – Upload private data and train a model safely.</li>
  <li>🔐 <span class="bullet-head">Enterprise Security</span> – Fine-tune without sharing your data.</li>
  <li>⚙️ <span class="bullet-head">API Ready</span> – Easily deploy your model to production.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Custom internal tools</li>
  <li>Enterprise chatbot solutions</li>
  <li>Industry-specific AI assistants</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Custom pricing for enterprise</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Privacy-first architecture</li>
  <li>Easy API deployment</li>
  <li>Great for scaling securely</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>No free tier — business-focused only</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>AI developers</li>
  <li>Tech startups building custom models</li>
  <li>Enterprises with sensitive data</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Custom fine-tuning over LLM backbones like LLaMA and GPT</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web + API</li>
</ul>
`
},

leonardo: {
  title: "Leonardo AI",
  description: `
<span class="tool-section-title">📄 What is Leonardo AI?</span>
<span class="tool-text">
Leonardo AI is a next-gen image generation platform tailored for creators, allowing you to make concept art, assets, textures, and characters using AI.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🎨 <span class="bullet-head">Concept Art Generation</span> – Turn ideas into detailed artworks.</li>
  <li>🧩 <span class="bullet-head">Asset Creation</span> – Design characters, props, and UI assets for games.</li>
  <li>🔄 <span class="bullet-head">Image-to-Image Editing</span> – Remix and refine existing visuals.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Game development and world-building</li>
  <li>Creative concept design</li>
  <li>Professional-grade AI illustrations</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free with daily token limit</li>
  <li>Premium plans from $10/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>High-quality output and styles</li>
  <li>Custom model training support</li>
  <li>Designed for serious creators</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Requires an account to use</li>
  <li>Token-based usage system</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Game designers and illustrators</li>
  <li>Art directors and storytellers</li>
  <li>Indie creators building IP</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Custom-trained Stable Diffusion models</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web-based platform</li>
</ul>
`
},
lexpage: {
  title: "Lex.page",
  description: `
<span class="tool-section-title">📄 What is Lex.page?</span>
<span class="tool-text">
Lex.page is a minimalist AI-powered writing tool that helps you draft blogs, essays, or reports with distraction-free design and built-in smart suggestions.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>✍️ <span class="bullet-head">AI Writing Assist</span> – Press “++” to get smart sentence continuations.</li>
  <li>📄 <span class="bullet-head">Blog & Article Drafting</span> – Format your work as you write.</li>
  <li>🔎 <span class="bullet-head">Inline Suggestions</span> – Refine or expand content mid-document.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Long-form writing</li>
  <li>Quick ideation with clean output</li>
  <li>Light editing without clutter</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free to use during beta</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Super minimal and fast</li>
  <li>AI help is non-intrusive</li>
  <li>Supports Markdown</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>No advanced editing features yet</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Writers and journalists</li>
  <li>Bloggers and marketers</li>
  <li>Students drafting essays</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses GPT-style AI via server-side calls</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web</li>
</ul>
`
},

looka: {
  title: "Looka",
  description: `
<span class="tool-section-title">📄 What is Looka?</span>
<span class="tool-text">
Looka is an AI-powered logo maker and branding suite that helps businesses and startups create professional logos and brand kits in minutes.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🖼️ <span class="bullet-head">Logo Generator</span> – Design a logo using your preferences and AI suggestions.</li>
  <li>🎨 <span class="bullet-head">Brand Kit</span> – Automatically generate matching color palettes, fonts, and social assets.</li>
  <li>📦 <span class="bullet-head">File Exports</span> – Download print-ready and digital-ready logo files.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Launching a brand or business</li>
  <li>Creating social media branding</li>
  <li>Quick logo generation without design skills</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Logo downloads from $20</li>
  <li>Full brand kit from $80</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Simple, intuitive UI</li>
  <li>Affordable branding solution</li>
  <li>Wide variety of customization options</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Logos aren't unique (not custom-designed)</li>
  <li>Full access requires payment</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Startup founders</li>
  <li>Freelancers building their brand</li>
  <li>Anyone needing a logo fast</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>AI-powered logo template matching engine</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app</li>
</ul>
`
},
lovoai: {
  title: "Lovo.ai",
  description: `
<span class="tool-section-title">📄 What is Lovo.ai?</span>
<span class="tool-text">
Lovo.ai is a powerful AI voiceover platform that generates human-like voice narration in 100+ languages and styles, ideal for creators, educators, and businesses.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🎙️ <span class="bullet-head">Voiceover Generator</span> – Convert text into natural-sounding voiceovers.</li>
  <li>🌍 <span class="bullet-head">Multi-Language Support</span> – Over 100 languages and dialects available.</li>
  <li>🎭 <span class="bullet-head">Voice Styles</span> – Choose tone, emotion, and pace to match your project.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>E-learning modules and explainer videos</li>
  <li>Advertising voiceovers</li>
  <li>Podcasts and audiobooks</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free plan with limited voice credits</li>
  <li>Premium starts at $29/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Realistic and expressive voice quality</li>
  <li>Great customization controls</li>
  <li>Fast processing for voice generation</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Some voices sound more robotic</li>
  <li>Voice cloning features require upgrades</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Educators and content creators</li>
  <li>Marketing teams</li>
  <li>Businesses needing multilingual audio</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Deep learning + neural voice synthesis</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web platform</li>
</ul>
`
},
lumen5: {
  title: "Lumen5",
  description: `
<span class="tool-section-title">📄 What is Lumen5?</span>
<span class="tool-text">
Lumen5 is an AI-powered video creation platform that transforms blog posts, text content, or URLs into engaging social videos in minutes.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🎬 <span class="bullet-head">Text-to-Video</span> – Converts written content into short videos.</li>
  <li>📱 <span class="bullet-head">Social Media Templates</span> – Ready-to-use layouts optimized for platforms like Instagram and LinkedIn.</li>
  <li>💼 <span class="bullet-head">Brand Kits</span> – Keep fonts, colors, and logos consistent in every video.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Turning blog posts into reels</li>
  <li>Creating explainer videos for social media</li>
  <li>Corporate video storytelling</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free plan with Lumen5 watermark</li>
  <li>Paid plans from $29/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>No video editing skills needed</li>
  <li>High-quality visuals and transitions</li>
  <li>Good for solo creators and teams</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Watermarks on free version</li>
  <li>Limited custom animation options</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Bloggers and marketers</li>
  <li>Small businesses</li>
  <li>Social media managers</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>AI identifies highlights and selects visuals automatically</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web-based editor</li>
</ul>
`
},
magical: {
  title: "Magical",
  description: `
<span class="tool-section-title">📄 What is Magical?</span>
<span class="tool-text">
Magical is an AI text expander and automation tool that helps users save time by replacing short keystrokes with full text and automating repetitive workflows.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>⌨️ <span class="bullet-head">Text Expansion</span> – Replace shortcuts with frequently typed responses, links, or emails.</li>
  <li>⚡ <span class="bullet-head">Workflow Automation</span> – Automate web actions like copying/pasting and filling forms.</li>
  <li>📊 <span class="bullet-head">CRM Integration</span> – Connect with Salesforce, HubSpot, and more to auto-fill data.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Faster email replies</li>
  <li>Customer service automation</li>
  <li>Streamlining admin tasks</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free plan with core features</li>
  <li>Pro plan from $6/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Boosts daily productivity</li>
  <li>Easy to use and install</li>
  <li>Works on any website</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Works best with Chrome</li>
  <li>Complex automation needs setup time</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Customer support reps</li>
  <li>Freelancers and sales teams</li>
  <li>Admins and productivity nerds</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Shortcut triggers + smart browser automation</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Chrome extension</li>
</ul>
`
},
marketmuse: {
  title: "MarketMuse",
  description: `
<span class="tool-section-title">📄 What is MarketMuse?</span>
<span class="tool-text">
MarketMuse is an AI-powered content strategy platform that helps you plan, write, and optimize SEO content to outperform competitors.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>📊 <span class="bullet-head">Content Audit</span> – Analyzes your site and shows content gaps.</li>
  <li>📈 <span class="bullet-head">Keyword Recommendations</span> – Finds topics and keywords to target.</li>
  <li>🧠 <span class="bullet-head">AI Content Briefs</span> – Suggests structure, subtopics, and length.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Planning SEO content strategies</li>
  <li>Optimizing existing blog posts</li>
  <li>Creating keyword-rich content briefs</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free trial available</li>
  <li>Plans start at $149/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Data-backed topic ideas</li>
  <li>AI-powered brief creation</li>
  <li>Improves SEO performance</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>High pricing for small teams</li>
  <li>Learning curve for new users</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Content marketers and strategists</li>
  <li>SEO teams</li>
  <li>Agencies and publishers</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses NLP and content graphing to suggest content ideas</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web-based SaaS</li>
</ul>
`
},
merlin: {
  title: "Merlin",
  description: `
<span class="tool-section-title">📄 What is Merlin?</span>
<span class="tool-text">
Merlin is a browser-based AI assistant that brings ChatGPT-like capabilities to every website, helping users summarize, write, and automate tasks online.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🤖 <span class="bullet-head">Smart Replies</span> – Generate replies for emails, tweets, and messages.</li>
  <li>📄 <span class="bullet-head">Summarization</span> – Condense long articles, PDFs, or pages instantly.</li>
  <li>⚙️ <span class="bullet-head">On-Site Prompting</span> – Use AI tools directly on any web page.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Quick writing assistance</li>
  <li>Summarizing online content</li>
  <li>Boosting productivity while browsing</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free extension with limited queries</li>
  <li>Premium plans available</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Works anywhere on the web</li>
  <li>Lightweight and intuitive</li>
  <li>Powered by OpenAI models</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Limited free usage</li>
  <li>Requires browser extension</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Students and researchers</li>
  <li>Busy professionals</li>
  <li>Anyone using AI while browsing</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>OpenAI ChatGPT integrated via browser APIs</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Chrome extension</li>
</ul>
`
},
midjourney: {
  title: "Midjourney",
  description: `
<span class="tool-section-title">📄 What is Midjourney?</span>
<span class="tool-text">
Midjourney is a cutting-edge AI art generator that creates stunning, surreal, and stylistic images from text prompts via Discord commands.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🎨 <span class="bullet-head">Text-to-Image Generation</span> – Type a prompt and get 4 unique artistic images.</li>
  <li>🔄 <span class="bullet-head">Variations & Upscales</span> – Enhance or modify the generated art.</li>
  <li>🌌 <span class="bullet-head">Custom Artistic Styles</span> – Mix genres and lighting for dreamy results.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Fantasy and sci-fi art creation</li>
  <li>Creative visual projects and prompts</li>
  <li>Album covers, posters, and digital art</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Starts at $10/month</li>
  <li>No free tier (trial limited to a few images)</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Visually rich, imaginative outputs</li>
  <li>Easy prompt tweaking via Discord</li>
  <li>Highly stylized aesthetics</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Requires Discord to use</li>
  <li>No direct image editing tools</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Artists and illustrators</li>
  <li>Fantasy writers and game devs</li>
  <li>AI art enthusiasts</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Custom diffusion model hosted on Discord</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Discord-based interface only</li>
</ul>
`
},
motion: {
  title: "Motion",
  description: `
<span class="tool-section-title">📄 What is Motion?</span>
<span class="tool-text">
Motion is an AI calendar and task management tool that automatically schedules your day based on priorities, deadlines, and meetings — like having a smart assistant.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🗓️ <span class="bullet-head">Auto-Scheduling</span> – Plans your entire day intelligently around your events and deadlines.</li>
  <li>🧠 <span class="bullet-head">AI Prioritization</span> – Automatically ranks tasks by urgency and importance.</li>
  <li>🤝 <span class="bullet-head">Meeting Management</span> – Combines meetings, reminders, and task lists in one dashboard.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Planning your daily work schedule</li>
  <li>Managing remote team tasks</li>
  <li>Preventing calendar overload</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>7-day free trial</li>
  <li>Paid plans start at $19/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Saves time by planning automatically</li>
  <li>Reduces stress and task juggling</li>
  <li>All-in-one productivity solution</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>No free plan</li>
  <li>Works best with Google Calendar</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Busy professionals and executives</li>
  <li>Remote teams</li>
  <li>Productivity-focused individuals</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>AI analyzes task urgency, time slots, and schedules them dynamically</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web, iOS, Android</li>
</ul>
`
},
moshiqa: {
  title: "Moshiqa",
  description: `
<span class="tool-section-title">📄 What is Moshiqa?</span>
<span class="tool-text">
Moshiqa is a luxury lifestyle brand using AI to suggest fashion products — including pet fashion — tailored to your style, pet type, and preferences.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🐾 <span class="bullet-head">Pet Fashion Recommender</span> – Find stylish outfits and accessories for pets.</li>
  <li>🧥 <span class="bullet-head">Lifestyle Product Suggestions</span> – Curated looks for pet parents.</li>
  <li>🎁 <span class="bullet-head">AI-Driven Gifting</span> – Personalized product picks based on user profile.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Pet fashion inspiration</li>
  <li>Buying luxury pet-friendly gifts</li>
  <li>Style matching for pet + owner</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Product-based pricing</li>
  <li>AI recommendations free with signup</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Fun and stylish interface</li>
  <li>Unique niche in pet fashion</li>
  <li>Personalized shopping experience</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Luxury price point</li>
  <li>Limited product range in some regions</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Pet lovers with fashion flair</li>
  <li>Gift buyers</li>
  <li>Pet influencers & stylists</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>AI style engine using user behavior & pet profiles</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web store</li>
</ul>
`
},
murfai: {
  title: "Murf AI",
  description: `
<span class="tool-section-title">📄 What is Murf AI?</span>
<span class="tool-text">
Murf AI is a voice generation platform that produces lifelike voiceovers using text input — ideal for presentations, videos, eLearning, and podcasts.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🎤 <span class="bullet-head">Text-to-Speech</span> – Choose from 120+ human-like voices across 20+ languages.</li>
  <li>🎧 <span class="bullet-head">Voice Customization</span> – Control pitch, emphasis, pauses, and speed.</li>
  <li>🎬 <span class="bullet-head">Voice Over Video</span> – Sync generated voices with your uploaded videos.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Video narration</li>
  <li>Training courses</li>
  <li>Podcasts and product demos</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free trial available</li>
  <li>Plans from $19/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Professional-quality voices</li>
  <li>Fast and accurate generation</li>
  <li>Wide voice selection</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Free version has limited export time</li>
  <li>Advanced features need higher tiers</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Course creators</li>
  <li>Marketers and startups</li>
  <li>Content creators and YouTubers</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Deep learning-based voice synthesis engine</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web-based dashboard</li>
</ul>
`
},

neuronwriter: {
  title: "NeuronWriter",
  description: `
<span class="tool-section-title">📄 What is NeuronWriter?</span>
<span class="tool-text">
NeuronWriter is an AI-powered SEO content editor that helps you write and optimize articles based on real-time SERP analysis and NLP recommendations.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>📝 <span class="bullet-head">Content Editor</span> – Write SEO-optimized content directly in its interface.</li>
  <li>📊 <span class="bullet-head">SERP Competitor Analysis</span> – Analyze top-ranking pages and keywords.</li>
  <li>🧠 <span class="bullet-head">NLP Suggestions</span> – Use semantic models to guide content writing.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Writing blog posts and articles</li>
  <li>Improving SEO rankings</li>
  <li>Finding topic gaps and keyword clusters</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free trial with limited queries</li>
  <li>Paid plans from $19/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Detailed content scoring</li>
  <li>Affordable compared to Surfer SEO</li>
  <li>Strong semantic suggestions</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Interface feels dated to some</li>
  <li>Requires basic SEO knowledge</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>SEO writers and marketers</li>
  <li>Bloggers and affiliate content creators</li>
  <li>Digital agencies</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses NLP, TF-IDF, and SERP scraping</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web-based platform</li>
</ul>
`
},
neurallove: {
  title: "Neural.love",
  description: `
<span class="tool-section-title">📄 What is Neural.love?</span>
<span class="tool-text">
Neural.love is an all-in-one creative AI suite for generating art, enhancing photos, colorizing images, and creating avatars — all powered by generative models.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🧑‍🎨 <span class="bullet-head">AI Art Generation</span> – Turn prompts into stunning visuals.</li>
  <li>🖼️ <span class="bullet-head">Photo Restoration</span> – Upscale, deblur, or colorize old photos.</li>
  <li>🪞 <span class="bullet-head">AI Avatars</span> – Create stylized profile images from selfies.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Generating concept art</li>
  <li>Fixing and enhancing family photos</li>
  <li>Profile pics or creative assets</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free credits to start</li>
  <li>Pay-as-you-go plans available</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Easy to use</li>
  <li>Beautiful output</li>
  <li>No art skills needed</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Credits run out quickly on HD generations</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Digital artists and creators</li>
  <li>Anyone restoring old photos</li>
  <li>Social media users</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses Stable Diffusion and other deep generative models</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web</li>
</ul>
`
},

nomorecopyright: {
  title: "NoMoreCopyright AI",
  description: `
<span class="tool-section-title">📄 What is NoMoreCopyright AI?</span>
<span class="tool-text">
NoMoreCopyright AI generates royalty-free music using artificial intelligence, letting you create safe tracks for YouTube, podcasts, and other content.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🎼 <span class="bullet-head">AI Music Generator</span> – Generate original tracks with one click.</li>
  <li>🎧 <span class="bullet-head">Style-Based Output</span> – Choose genre, mood, or instrument.</li>
  <li>🆓 <span class="bullet-head">Royalty-Free License</span> – Use tracks commercially with no takedowns.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>YouTube videos</li>
  <li>Podcast intros/outros</li>
  <li>Game background music</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free version with basic access</li>
  <li>Premium plans for high-quality exports</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>No copyright issues</li>
  <li>Quick generation</li>
  <li>Commercial license included</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Music variation is limited in free plan</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Content creators</li>
  <li>Podcasters and streamers</li>
  <li>Indie game developers</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Trained on royalty-free samples with procedural audio algorithms</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web</li>
</ul>
`
},

notionai: {
  title: "Notion AI",
  description: `
<span class="tool-section-title">📄 What is Notion AI?</span>
<span class="tool-text">
Notion AI is a built-in assistant in Notion that helps users write, summarize, brainstorm, and translate content directly inside their notes and docs.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🧠 <span class="bullet-head">Smart Writing Help</span> – Generate content, fix grammar, or expand ideas.</li>
  <li>🔍 <span class="bullet-head">Summarization</span> – Condense pages or sections quickly.</li>
  <li>🌐 <span class="bullet-head">Translation</span> – Translate content to multiple languages.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Writing meeting notes and wikis</li>
  <li>Brainstorming blog outlines</li>
  <li>Summarizing long docs</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free trial on Pro plans</li>
  <li>AI add-on from $8/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Built right into Notion</li>
  <li>Streamlines productivity</li>
  <li>Context-aware suggestions</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Only for Notion users</li>
  <li>Limited formatting options</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Notion power users</li>
  <li>Remote teams and students</li>
  <li>Writers and productivity geeks</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Integrates LLMs (like GPT) within Notion blocks</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web, iOS, Android, desktop apps</li>
</ul>
`
},
ocoya: {
  title: "Ocoya",
  description: `
<span class="tool-section-title">📄 What is Ocoya?</span>
<span class="tool-text">
Ocoya is an AI-powered social media management platform that helps you generate posts, schedule content, and design visuals — all in one dashboard.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>📅 <span class="bullet-head">Post Scheduling</span> – Plan content across multiple social channels.</li>
  <li>✍️ <span class="bullet-head">AI Captions & Hashtags</span> – Generate engaging posts in seconds.</li>
  <li>🎨 <span class="bullet-head">Design Integration</span> – Built-in Canva-style post creator.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Running marketing campaigns</li>
  <li>Generating social media content</li>
  <li>Automating posting workflows</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free trial available</li>
  <li>Plans start at $19/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Time-saving automation</li>
  <li>All-in-one tool for marketers</li>
  <li>Supports eCommerce stores too</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Occasional AI caption errors</li>
  <li>Feature set still evolving</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Social media managers</li>
  <li>Small business owners</li>
  <li>Marketing teams</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses GPT + Canva API + social scheduling logic</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web dashboard</li>
</ul>
`
},
paintbytext: {
  title: "Paint by Text",
  description: `
<span class="tool-section-title">📄 What is Paint by Text?</span>
<span class="tool-text">
Paint by Text is a tool that lets you modify parts of an image using natural language — powered by generative image inpainting AI.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🖼️ <span class="bullet-head">Image Editing by Text</span> – Select areas and describe changes in words.</li>
  <li>🎯 <span class="bullet-head">Precision Masking</span> – Choose which parts to keep or modify.</li>
  <li>🤯 <span class="bullet-head">Magic Edits</span> – Add/remove objects from photos effortlessly.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Editing product images</li>
  <li>Removing or replacing objects</li>
  <li>Creative image modifications</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free demo version</li>
  <li>Open-source or hosted options</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Simple interface</li>
  <li>No Photoshop skills needed</li>
  <li>Results look natural</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>May struggle with complex prompts</li>
  <li>Not ideal for fine edits</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Designers and marketers</li>
  <li>eCommerce sellers</li>
  <li>Beginner editors</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Built on generative diffusion image models</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web (hosted or open-source)</li>
</ul>
`
},
perplexityai: {
  title: "Perplexity AI",
  description: `
<span class="tool-section-title">📄 What is Perplexity AI?</span>
<span class="tool-text">
Perplexity AI is a conversational search engine that answers your queries with up-to-date facts and citations, blending search and AI chat together.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🔍 <span class="bullet-head">Cited Answers</span> – Responds with sources and links for everything.</li>
  <li>📘 <span class="bullet-head">Knowledge Search</span> – Combines web results with large language models.</li>
  <li>💬 <span class="bullet-head">Chat-Like Search</span> – Asks follow-ups, drills down into any topic.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Fact-checking and summaries</li>
  <li>Academic and general research</li>
  <li>Replacing traditional search engines</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free to use</li>
  <li>Pro plan with GPT-4 and Copilot tools</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Citation-based accuracy</li>
  <li>Updated with recent info</li>
  <li>Simple, fast UI</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Still relies on web indexes</li>
  <li>Answers not always deep</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Researchers and students</li>
  <li>Writers and journalists</li>
  <li>Anyone curious or skeptical</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>LLMs + live web crawling and summarization</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web, iOS, Android</li>
</ul>
`
},
phind: {
  title: "Phind",
  description: `
<span class="tool-section-title">📄 What is Phind?</span>
<span class="tool-text">
Phind is an AI-powered search engine designed specifically for developers. It provides accurate coding answers with relevant context and references.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🔧 <span class="bullet-head">Dev-Focused Search</span> – Ask coding questions and get structured solutions.</li>
  <li>📚 <span class="bullet-head">Code + Docs</span> – Pulls from documentation, forums, and GitHub.</li>
  <li>💬 <span class="bullet-head">Interactive Follow-ups</span> – Drill deeper into answers conversationally.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Solving bugs and coding errors</li>
  <li>Learning new libraries or frameworks</li>
  <li>Getting clear, AI-backed documentation summaries</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free to use</li>
  <li>Pro features in beta</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Fast and relevant answers</li>
  <li>Great for specific technical queries</li>
  <li>Minimal and clean UI</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Still experimental for some stacks</li>
  <li>Not ideal for non-coding questions</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Developers and programmers</li>
  <li>Students in tech</li>
  <li>StackOverflow users looking for alternatives</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses large language models + web search APIs</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app</li>
</ul>
`
},
pictory: {
  title: "Pictory",
  description: `
<span class="tool-section-title">📄 What is Pictory?</span>
<span class="tool-text">
Pictory is an AI-powered video creation tool that transforms text, blog posts, or long videos into short, social-media-ready clips.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🎬 <span class="bullet-head">Text to Video</span> – Turn blog content into videos automatically.</li>
  <li>📝 <span class="bullet-head">Script-Based Editing</span> – Edit videos by editing the text.</li>
  <li>✂️ <span class="bullet-head">Auto Highlights</span> – Create engaging video snippets from long videos.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>YouTube shorts</li>
  <li>Marketing promos</li>
  <li>Video editing for non-editors</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free trial available</li>
  <li>Pro plan from $19/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>No video editing skills required</li>
  <li>Auto captions and stock media</li>
  <li>Script-based workflow is fast</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Template choices are limited in free plan</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Content marketers</li>
  <li>Bloggers repurposing content</li>
  <li>Social media creators</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>LLM + video template engine + TTS</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web</li>
</ul>
`
},

pika: {
  title: "Pika",
  description: `
<span class="tool-section-title">📄 What is Pika?</span>
<span class="tool-text">
Pika is a powerful text-to-video AI tool that generates short, cinematic videos from natural language prompts — perfect for creators and storytellers.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🎞️ <span class="bullet-head">AI Video Generation</span> – Turn text prompts into stylized short videos.</li>
  <li>🎨 <span class="bullet-head">Custom Styles</span> – Choose animation, live action, or fantasy styles.</li>
  <li>🧠 <span class="bullet-head">Scene Intelligence</span> – Understands characters, setting, and transitions.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Making YouTube Shorts or TikToks</li>
  <li>Visual storytelling and explainer videos</li>
  <li>Creative content for campaigns</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Currently free (early access)</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Fast and cinematic results</li>
  <li>Great for non-video editors</li>
  <li>Expanding creative possibilities</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Still in beta</li>
  <li>Limited output length</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Content creators and influencers</li>
  <li>Marketers and visual storytellers</li>
  <li>Anyone who wants AI to animate their ideas</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses multimodal AI + generative diffusion for video</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web platform (invite-only)</li>
</ul>
`
},
pitch: {
  title: "Pitch",
  description: `
<span class="tool-section-title">📄 What is Pitch?</span>
<span class="tool-text">
Pitch is an AI-enhanced presentation software that helps you create beautiful, collaborative decks with design automation and smart content blocks.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>📊 <span class="bullet-head">AI Slide Creation</span> – Generate entire slide layouts from prompts.</li>
  <li>👥 <span class="bullet-head">Real-Time Collaboration</span> – Work with teammates live.</li>
  <li>📈 <span class="bullet-head">Design Templates</span> – Professionally-designed themes and components.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Creating pitch decks and reports</li>
  <li>Team meetings and client proposals</li>
  <li>Marketing and sales materials</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free tier with basic features</li>
  <li>Pro plans with analytics & brand tools</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Clean UI and fast deck creation</li>
  <li>Team-friendly editing</li>
  <li>Smart formatting and consistency</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Not as flexible as PowerPoint for custom design</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Startups and marketing teams</li>
  <li>Sales professionals</li>
  <li>Remote collaborators</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses design heuristics + text generation for decks</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app and desktop versions</li>
</ul>
`
},
playht: {
  title: "Play.ht",
  description: `
<span class="tool-section-title">📄 What is Play.ht?</span>
<span class="tool-text">
Play.ht is a text-to-speech platform that lets you convert written content into high-quality, realistic audio using lifelike voices in multiple languages.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🎙️ <span class="bullet-head">Voice Generation</span> – Turn scripts into studio-quality voiceovers.</li>
  <li>🌍 <span class="bullet-head">Language Variety</span> – 100+ languages and accents available.</li>
  <li>🎧 <span class="bullet-head">Voice Cloning</span> – Create AI voices that sound like you.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Podcasts and YouTube narration</li>
  <li>Voiceovers for eLearning or ads</li>
  <li>Accessibility content</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free plan with credits</li>
  <li>Premium plans from $39/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Natural, emotional voices</li>
  <li>Fast render times</li>
  <li>Commercial license included</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Costs can scale with usage</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Content creators</li>
  <li>Voiceover artists and marketers</li>
  <li>Educators and audiobooks publishers</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Deep learning voice synthesis + WaveNet models</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app</li>
</ul>
`
},
playgroundai: {
  title: "Playground AI",
  description: `
<span class="tool-section-title">📄 What is Playground AI?</span>
<span class="tool-text">
Playground AI is a free tool for creating stunning AI-generated images using simple text prompts — with powerful filters and style options.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🖼️ <span class="bullet-head">AI Image Generation</span> – Type what you imagine and see it come to life.</li>
  <li>🎨 <span class="bullet-head">Style Customization</span> – Pick themes like fantasy, 3D, anime, cyberpunk, etc.</li>
  <li>🔧 <span class="bullet-head">Image Editing</span> – Refine your generated image with brush tools and masks.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Making artwork or posters</li>
  <li>Product and character design</li>
  <li>Fun creative prompts</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free tier (1000+ images/month)</li>
  <li>Pro plans for high-res + more tools</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>No login required to try</li>
  <li>Beginner-friendly</li>
  <li>Versatile styles and effects</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Resolution capped on free plan</li>
  <li>Limited control over fine image details</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Artists and hobbyists</li>
  <li>Marketing teams</li>
  <li>Anyone curious about AI art</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Stable Diffusion and other open-source models</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web</li>
</ul>
`
},
postwise: {
  title: "Postwise",
  description: `
<span class="tool-section-title">📄 What is Postwise?</span>
<span class="tool-text">
Postwise is an AI-powered Twitter/X assistant that writes, schedules, and analyzes posts to help you grow your audience effortlessly.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>✍️ <span class="bullet-head">AI Tweet Generator</span> – Instantly create engaging, on-brand tweets.</li>
  <li>📅 <span class="bullet-head">Smart Scheduling</span> – Plan posts at optimal times for growth.</li>
  <li>📈 <span class="bullet-head">Growth Analytics</span> – Track engagement, performance, and trends.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Building a Twitter audience</li>
  <li>Automating your content calendar</li>
  <li>Writing viral hooks and threads</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free trial available</li>
  <li>Plans start at $49/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Super easy to use</li>
  <li>Tweets sound natural and smart</li>
  <li>Helps grow followers faster</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Focuses only on Twitter/X</li>
  <li>Can sound formulaic if overused</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Solopreneurs and creators</li>
  <li>Growth hackers and marketers</li>
  <li>Anyone building a personal brand</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses GPT models + growth templates</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app</li>
</ul>
`
},
predisai: {
  title: "Predis.ai",
  description: `
<span class="tool-section-title">📄 What is Predis.ai?</span>
<span class="tool-text">
Predis.ai is an all-in-one AI tool for creating, scheduling, and analyzing social media content, especially visuals and captions.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🖼️ <span class="bullet-head">Post Generator</span> – Enter a topic and get full social media creatives.</li>
  <li>📸 <span class="bullet-head">Visual Templates</span> – Auto-designs image content based on branding.</li>
  <li>📊 <span class="bullet-head">Analytics</span> – Track engagement and improve content quality.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Instagram, Facebook, and LinkedIn posts</li>
  <li>Generating captions and hashtags</li>
  <li>Brand-focused visual storytelling</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free plan with basic tools</li>
  <li>Pro plans start at $29/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Time-saving for teams and solo creators</li>
  <li>Brand-consistent visual suggestions</li>
  <li>Easy caption generator</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Creative control is somewhat limited</li>
  <li>Less suited for long-form content</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Content creators and influencers</li>
  <li>Small business owners</li>
  <li>Social media managers</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses GPT + proprietary design templates</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web platform</li>
</ul>
`
},
prompthero: {
  title: "PromptHero",
  description: `
<span class="tool-section-title">📄 What is PromptHero?</span>
<span class="tool-text">
PromptHero is a search engine for AI prompts. It helps you discover the best prompts used for Midjourney, DALL·E, ChatGPT, and more.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🔍 <span class="bullet-head">Prompt Search</span> – Find prompts by keyword, AI model, or theme.</li>
  <li>🎯 <span class="bullet-head">Prompt Curation</span> – See what’s trending or most effective.</li>
  <li>📁 <span class="bullet-head">Prompt Library</span> – Save, copy, and modify prompts easily.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Creating better AI art with Midjourney</li>
  <li>Writing smarter ChatGPT prompts</li>
  <li>Learning from community-crafted examples</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free access with sign-up</li>
  <li>Pro features for power users</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Massive prompt collection</li>
  <li>Helps improve prompt quality</li>
  <li>Community sharing is helpful</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Not all prompts guaranteed to work well</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>AI artists and creators</li>
  <li>Prompt engineers</li>
  <li>Beginners trying to learn prompts</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Indexing and search over user-submitted prompts</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web browser</li>
</ul>
`
},
quillbot: {
  title: "Quillbot",
  description: `
<span class="tool-section-title">📄 What is Quillbot?</span>
<span class="tool-text">
Quillbot is an AI-powered writing tool that paraphrases, summarizes, and checks grammar in your text — perfect for students and professionals.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🔁 <span class="bullet-head">Paraphraser</span> – Rewrites text in various tones and styles.</li>
  <li>📝 <span class="bullet-head">Grammar Checker</span> – Fixes grammatical and spelling issues.</li>
  <li>📚 <span class="bullet-head">Summarizer</span> – Shortens long texts into key points.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Rewriting essays or emails</li>
  <li>Improving sentence clarity</li>
  <li>Summarizing research articles</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free plan available</li>
  <li>Premium starts at $8/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Multiple rewriting modes</li>
  <li>Easy to use with browser extensions</li>
  <li>Good for academic work</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Premium required for best features</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Students and researchers</li>
  <li>Bloggers and marketers</li>
  <li>Anyone rewriting or summarizing content</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Natural language processing + rephrasing models</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web, Chrome, and MS Word extensions</li>
</ul>
`
},
remini: {
  title: "Remini",
  description: `
<span class="tool-section-title">📄 What is Remini?</span>
<span class="tool-text">
Remini is an AI photo enhancement app that restores and improves low-resolution or blurry images using deep learning.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🔍 <span class="bullet-head">Photo Enhancement</span> – Make old or blurry photos sharp again.</li>
  <li>👵 <span class="bullet-head">Portrait Restoration</span> – Great for faces in vintage photos.</li>
  <li>🖼️ <span class="bullet-head">Art Mode</span> – Stylize your images with creative filters.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Restoring family photos</li>
  <li>Improving selfies or ID pictures</li>
  <li>Fixing compressed social media images</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free version with watermark</li>
  <li>Premium plans from ₹499/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Very easy to use</li>
  <li>Visible results in seconds</li>
  <li>Perfect for old family photos</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Watermarks in free version</li>
  <li>Some filters can look unnatural</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Photographers and editors</li>
  <li>Families preserving memories</li>
  <li>Social media users</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Deep convolutional neural networks for photo clarity</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Mobile app (iOS and Android)</li>
</ul>
`
},
removebg: {
  title: "Remove.bg",
  description: `
<span class="tool-section-title">📄 What is Remove.bg?</span>
<span class="tool-text">
Remove.bg is an AI tool that instantly removes the background from images — perfect for product shots, portraits, and more.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🧼 <span class="bullet-head">Background Removal</span> – Deletes any background with 1 click.</li>
  <li>🎨 <span class="bullet-head">Background Replace</span> – Swap in solid colors or new scenes.</li>
  <li>🔄 <span class="bullet-head">Batch Processing</span> – Edit multiple images at once.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Creating transparent PNGs</li>
  <li>Product listings for e-commerce</li>
  <li>Profile pics and social banners</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free preview version</li>
  <li>Credit-based pricing starting from €0.14/image</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Fast and reliable results</li>
  <li>Requires no editing skill</li>
  <li>Clean edges with minimal effort</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Full quality downloads cost credits</li>
  <li>Doesn’t work as well on blurry images</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Online sellers and marketers</li>
  <li>Photographers and designers</li>
  <li>Anyone editing images quickly</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Deep learning model trained on millions of images</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web, Windows, Mac, Photoshop Plugin</li>
</ul>
`
},
replitghostwriter: {
  title: "Replit Ghostwriter",
  description: `
<span class="tool-section-title">📄 What is Replit Ghostwriter?</span>
<span class="tool-text">
Ghostwriter is Replit’s built-in AI coding assistant that helps you write, complete, and understand code inside the Replit IDE.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>💡 <span class="bullet-head">Code Suggestions</span> – Autocompletes code intelligently.</li>
  <li>🛠️ <span class="bullet-head">Explain Code</span> – Breaks down what a piece of code does.</li>
  <li>🐞 <span class="bullet-head">Debug & Fix</span> – Finds and corrects code errors.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Learning to code interactively</li>
  <li>Speeding up web/app development</li>
  <li>Understanding legacy or complex code</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Included in Replit Pro plan ($20/month)</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Works natively in Replit IDE</li>
  <li>Good for both beginners and pros</li>
  <li>Supports multiple languages</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Only available on Replit platform</li>
  <li>Not as customizable as some other assistants</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Students and new coders</li>
  <li>Developers using Replit</li>
  <li>Hackathon participants</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Powered by LLMs for code completion and explanation</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web (inside Replit IDE)</li>
</ul>
`
},
resembleai: {
  title: "Resemble.ai",
  description: `
<span class="tool-section-title">📄 What is Resemble.ai?</span>
<span class="tool-text">
Resemble.ai is an advanced voice cloning and text-to-speech tool that lets you create custom AI voices from your own recordings.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🗣️ <span class="bullet-head">Voice Cloning</span> – Clone your voice with just a few minutes of audio.</li>
  <li>🧠 <span class="bullet-head">AI Text-to-Speech</span> – Convert text to natural speech in real-time.</li>
  <li>🌍 <span class="bullet-head">Multilingual Support</span> – Supports over 60 languages.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Creating audio ads</li>
  <li>Building game or video characters</li>
  <li>Voiceovers for presentations or apps</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Pay-as-you-go and monthly options</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Realistic voice quality</li>
  <li>Quick setup for voice cloning</li>
  <li>API available for devs</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Cloning accuracy depends on input quality</li>
  <li>Premium voices cost more</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Content creators and podcasters</li>
  <li>Game developers and startups</li>
  <li>Agencies building custom audio</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Voice synthesis using deep learning and neural TTS</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web, API</li>
</ul>
`
},
runwayml: {
  title: "Runway ML",
  description: `
<span class="tool-section-title">📄 What is Runway ML?</span>
<span class="tool-text">
Runway ML is a powerful AI video editing and creative suite used by filmmakers, creators, and designers to generate and transform media.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🎥 <span class="bullet-head">Text-to-Video</span> – Generate short video clips from prompts.</li>
  <li>✂️ <span class="bullet-head">Video Editing Tools</span> – Includes background remover, inpainting, motion brush, and more.</li>
  <li>💫 <span class="bullet-head">AI Effects</span> – Add creative filters and transitions using AI.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Film and music video production</li>
  <li>Visual storytelling and concept art</li>
  <li>Social media visuals and content</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free plan with watermark</li>
  <li>Creator plan starts at $12/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Simple interface with pro-level tools</li>
  <li>Expands creativity for non-tech users</li>
  <li>Constantly adding new features</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Free version includes watermark</li>
  <li>Heavy rendering tasks may lag</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Filmmakers and artists</li>
  <li>Marketing teams</li>
  <li>Anyone needing fast video content</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses Gen-2 AI video engine + advanced GANs</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web platform</li>
</ul>
`
},
rytr: {
  title: "Rytr",
  description: `
<span class="tool-section-title">📄 What is Rytr?</span>
<span class="tool-text">
Rytr is an AI writing assistant that helps you generate high-quality content for blogs, ads, emails, and more in seconds.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>📝 <span class="bullet-head">Content Generator</span> – Write articles, captions, and emails fast.</li>
  <li>🧠 <span class="bullet-head">Tone & Style Control</span> – Choose tone, format, and use cases.</li>
  <li>🌍 <span class="bullet-head">Multilingual Output</span> – Supports 30+ languages.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Blogging and SEO writing</li>
  <li>Ad copy and product descriptions</li>
  <li>Client emails and cold outreach</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free plan for 10k characters/month</li>
  <li>Premium plan starts at $9/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Clean, intuitive interface</li>
  <li>Fast and affordable</li>
  <li>Built-in plagiarism checker</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Less advanced than some premium tools</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Freelancers and marketers</li>
  <li>Students and entrepreneurs</li>
  <li>Anyone who writes a lot</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses OpenAI/GPT-based models for content generation</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web, Chrome extension</li>
</ul>
`
},
scispace: {
  title: "SciSpace",
  description: `
<span class="tool-section-title">📄 What is SciSpace?</span>
<span class="tool-text">
SciSpace is an AI-powered platform that helps you read, understand, and interact with scientific papers — without needing a PhD.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🔍 <span class="bullet-head">Explain Research Papers</span> – Breaks down complex sections into plain English.</li>
  <li>🧠 <span class="bullet-head">Ask Questions</span> – Ask the AI assistant to clarify specific terms or parts.</li>
  <li>📚 <span class="bullet-head">Browse a Paper Library</span> – Find relevant scientific articles easily.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Reading research faster</li>
  <li>Understanding difficult scientific concepts</li>
  <li>Preparing academic work</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free plan available</li>
  <li>Premium starts around $9/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Simplifies dense academic papers</li>
  <li>Fast, interactive interface</li>
  <li>Great for students and researchers</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Sometimes misses nuances in technical fields</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Students and scholars</li>
  <li>Science communicators</li>
  <li>Curious learners</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>LLMs fine-tuned for academic text</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web</li>
</ul>
`
},
slidesai: {
  title: "SlidesAI",
  description: `
<span class="tool-section-title">📄 What is SlidesAI?</span>
<span class="tool-text">
SlidesAI is an AI tool that transforms text content into professional presentation slides in seconds.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>📊 <span class="bullet-head">Text to Slides</span> – Paste your text, and it auto-generates a full deck.</li>
  <li>🎨 <span class="bullet-head">Style Templates</span> – Pick from clean, themed designs.</li>
  <li>📝 <span class="bullet-head">Multilingual Support</span> – Works in multiple languages.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Creating quick presentations</li>
  <li>Academic lectures or lessons</li>
  <li>Business pitches</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free plan with limits</li>
  <li>Premium starts at $10/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Super fast workflow</li>
  <li>No design skills needed</li>
  <li>Works with Google Slides</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Limited customization in free tier</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Teachers, students, presenters</li>
  <li>Marketing teams and startups</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Template-based NLP generation</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web (integrates with Google Slides)</li>
</ul>
`
},
slidescarnival: {
  title: "SlidesCarnival AI",
  description: `
<span class="tool-section-title">📄 What is SlidesCarnival AI?</span>
<span class="tool-text">
SlidesCarnival AI offers smart presentation templates powered by AI, designed to help you build decks faster and more effectively.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🎯 <span class="bullet-head">Smart Template Suggestions</span> – AI recommends slide templates by topic.</li>
  <li>🎨 <span class="bullet-head">Pre-made Layouts</span> – Access hundreds of beautiful slide formats.</li>
  <li>🔎 <span class="bullet-head">Keyword Matching</span> – Find themes based on your subject.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Professional slides for meetings</li>
  <li>Academic or educational decks</li>
  <li>Event presentations</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free to use with attribution</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Beautiful, ready-to-use designs</li>
  <li>Great time-saver for presenters</li>
  <li>No account required</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Limited editing inside the platform</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Business professionals</li>
  <li>Teachers and students</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Keyword-trained template recommender</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web (PowerPoint, Google Slides export)</li>
</ul>
`
},
socraic: {
  title: "Socraic (Google)",
  description: `
<span class="tool-section-title">📄 What is Socraic?</span>
<span class="tool-text">
Socraic by Google is an AI homework helper that lets students ask homework questions and get clear step-by-step explanations.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>📸 <span class="bullet-head">Scan Homework Questions</span> – Take a picture of a problem, get an answer.</li>
  <li>📚 <span class="bullet-head">Step-by-Step Solutions</span> – Great for math, science, and history.</li>
  <li>💬 <span class="bullet-head">Interactive Hints</span> – Learn how to solve, not just what the answer is.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Homework help</li>
  <li>Concept reinforcement</li>
  <li>Study assistance</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Completely free</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Fast, visual help</li>
  <li>Backed by Google</li>
  <li>Works across subjects</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Some answers may lack depth</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Students in school or college</li>
  <li>Parents helping kids with homework</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Vision + NLP for question recognition and response</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>iOS and Android apps</li>
</ul>
`
},
soundraw: {
  title: "Soundraw",
  description: `
<span class="tool-section-title">📄 What is Soundraw?</span>
<span class="tool-text">
Soundraw is an AI music generation tool that lets you create royalty-free tracks by customizing tempo, genre, and mood.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🎵 <span class="bullet-head">AI Music Generator</span> – Auto-creates full songs in seconds.</li>
  <li>🎚️ <span class="bullet-head">Mood & Genre Controls</span> – Choose emotion, instruments, and style.</li>
  <li>✂️ <span class="bullet-head">Edit & Export</span> – Customize intros, outros, and sections.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Background music for videos</li>
  <li>Game and app soundtracks</li>
  <li>Live streaming or podcast intros</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free trial available</li>
  <li>Premium from $16.99/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>No music skills required</li>
  <li>Easy UI for creators</li>
  <li>Royalty-free licensing</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Advanced editing is limited</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>YouTubers and filmmakers</li>
  <li>Game devs and indie creators</li>
  <li>Agencies needing fast custom tracks</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>AI composition engine with mood-based track generation</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web</li>
</ul>
`
},
speechify: {
  title: "Speechify",
  description: `
<span class="tool-section-title">📄 What is Speechify?</span>
<span class="tool-text">
Speechify is an AI-powered text-to-speech tool that reads anything aloud in a natural voice, making it perfect for listening to books, PDFs, or web articles.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🗣️ <span class="bullet-head">Convert Text to Audio</span> – Upload or paste text and get high-quality narration.</li>
  <li>🎧 <span class="bullet-head">Natural-Sounding Voices</span> – Choose from voices in multiple languages and accents.</li>
  <li>📱 <span class="bullet-head">Mobile-Friendly Listening</span> – Great for on-the-go learning.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Listening to books or articles</li>
  <li>Learning by audio instead of reading</li>
  <li>Helping with reading disabilities</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free plan with limited voices</li>
  <li>Premium starts at $139/year</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Very natural voice options</li>
  <li>Fast conversion</li>
  <li>Boosts productivity and accessibility</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Premium pricing is on the higher side</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Busy learners and professionals</li>
  <li>Dyslexic readers</li>
  <li>Multitaskers</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses neural TTS (text-to-speech) engines with natural cadence modeling</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web</li>
  <li>Chrome Extension</li>
  <li>iOS & Android Apps</li>
</ul>
`
},
statmuse: {
  title: "StatMuse",
  description: `
<span class="tool-section-title">📄 What is StatMuse?</span>
<span class="tool-text">
StatMuse is an AI-powered search engine that answers sports questions with stats and natural language responses — complete with graphs and visuals.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>📊 <span class="bullet-head">Answer Sports Questions</span> – Ask things like “Who scored most goals in 2023?”</li>
  <li>📈 <span class="bullet-head">Stat Visualizations</span> – See answers in clean graphs or lists.</li>
  <li>🧠 <span class="bullet-head">Natural Language Queries</span> – No need to know exact stat terms.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Checking NBA/NFL/MLB stats</li>
  <li>Trivia and fantasy league prep</li>
  <li>Quick sports knowledge lookups</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Very fast answers</li>
  <li>Clean, readable format</li>
  <li>Fun to use interactively</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Only works for supported sports</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Sports fans</li>
  <li>Fantasy league players</li>
  <li>Content creators needing stat visuals</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Sports data + AI search engine with NLG (Natural Language Generation)</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web</li>
  <li>iOS & Android Apps</li>
</ul>
`
},
sudowrite: {
  title: "Sudowrite",
  description: `
<span class="tool-section-title">📄 What is Sudowrite?</span>
<span class="tool-text">
Sudowrite is a creative writing assistant designed for authors, helping you brainstorm, expand, rewrite, or plot your next story with AI.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>✍️ <span class="bullet-head">Rewrite Sentences</span> – Get style variations, tone tweaks, or better phrasing.</li>
  <li>🌱 <span class="bullet-head">Story Expansion</span> – Suggest next plotlines, characters, or twists.</li>
  <li>📚 <span class="bullet-head">Worldbuilding & Dialogue Help</span> – Generate vivid settings and conversations.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Writing fiction and novels</li>
  <li>Overcoming writer’s block</li>
  <li>Polishing storytelling prose</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free trial available</li>
  <li>Paid plans from $10/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Fun to use</li>
  <li>Very story-oriented vs other tools</li>
  <li>Helps without taking over your voice</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Can be repetitive if overused</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Authors and novelists</li>
  <li>Creative writers</li>
  <li>Screenwriters and poets</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Built on GPT-3/4 with creative storytelling layers</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web</li>
</ul>
`
},
superhumanai: {
  title: "Superhuman AI",
  description: `
<span class="tool-section-title">📄 What is Superhuman AI?</span>
<span class="tool-text">
Superhuman AI enhances your email productivity by writing, rewriting, and summarizing messages — all within your inbox.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>✉️ <span class="bullet-head">Draft Emails Fast</span> – Generate professional responses instantly.</li>
  <li>📋 <span class="bullet-head">Summarize Threads</span> – Get quick recaps of long email chains.</li>
  <li>📣 <span class="bullet-head">Tone Tweaking</span> – Change the tone of your message (e.g., formal, friendly).</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Writing emails faster</li>
  <li>Handling inbox overload</li>
  <li>Improving message tone and clarity</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Premium pricing (starting at $30/month)</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Saves hours on email writing</li>
  <li>Integrated into Superhuman mail client</li>
  <li>Excellent tone and clarity tools</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Only available inside Superhuman app</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Busy professionals and executives</li>
  <li>Customer support teams</li>
  <li>Founders and marketers</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Embedded GPT model for email productivity</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Mac, Windows (via Superhuman app)</li>
</ul>
`
},
surferseo: {
  title: "Surfer SEO",
  description: `
<span class="tool-section-title">📄 What is Surfer SEO?</span>
<span class="tool-text">
Surfer SEO is a content optimization tool that uses AI and real-time SERP data to help your blog or article rank better on Google.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>📈 <span class="bullet-head">SEO Content Score</span> – Grade your article against top-ranking competitors.</li>
  <li>🔑 <span class="bullet-head">Keyword Suggestions</span> – Shows semantically related terms to include.</li>
  <li>📝 <span class="bullet-head">AI Writing Assistant</span> – Write SEO-ready content with help.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Optimizing blog posts and web pages</li>
  <li>Increasing Google rankings</li>
  <li>Planning keyword strategies</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Starts at $89/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Real-time SEO scoring</li>
  <li>In-depth keyword breakdowns</li>
  <li>Easy to integrate with Google Docs</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Premium pricing</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Content writers and marketers</li>
  <li>SEO professionals</li>
  <li>Agencies and bloggers</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>AI + SERP analysis + NLP keyword scoring</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web dashboard + Chrome extension</li>
</ul>
`
},

tabnine: {
  title: "Tabnine",
  description: `
<span class="tool-section-title">📄 What is Tabnine?</span>
<span class="tool-text">
Tabnine is an AI code completion tool that helps you write code faster by predicting and auto-suggesting lines and functions.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>💡 <span class="bullet-head">Code Autocomplete</span> – Suggests whole functions or blocks.</li>
  <li>🔐 <span class="bullet-head">Private AI Training</span> – Train Tabnine on your own codebase.</li>
  <li>🔧 <span class="bullet-head">IDE Integration</span> – Works with VSCode, JetBrains, and more.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Speeding up development</li>
  <li>Getting code suggestions and boilerplate</li>
  <li>Learning language syntax interactively</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free basic version</li>
  <li>Pro starts at $12/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Lightweight and fast</li>
  <li>Custom model training</li>
  <li>Improves focus and flow</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Not as context-aware as Copilot</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Software developers</li>
  <li>Beginner coders</li>
  <li>Teams with private codebases</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Transformer-based code prediction engine</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>IDE extensions for VSCode, IntelliJ, etc.</li>
</ul>
`
},
taskade: {
  title: "Taskade",
  description: `
<span class="tool-section-title">📄 What is Taskade?</span>
<span class="tool-text">
Taskade is an all-in-one productivity tool that blends task management, note-taking, and real-time collaboration — now powered by AI.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>📝 <span class="bullet-head">Smart Task Lists</span> – Create structured to-do lists and mind maps.</li>
  <li>🤖 <span class="bullet-head">AI Assistant</span> – Brainstorm, outline, and auto-generate tasks.</li>
  <li>💬 <span class="bullet-head">Collaborative Workspaces</span> – Chat, edit, and plan with teams.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Team task management</li>
  <li>Solo productivity systems</li>
  <li>Collaborative brainstorming</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free forever plan</li>
  <li>Pro from $8/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Beautiful UI</li>
  <li>Everything in one workspace</li>
  <li>Great for remote teams</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Too many features can overwhelm</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Students and teams</li>
  <li>Remote workers</li>
  <li>Productivity nerds</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>AI task generation using LLMs + real-time sync</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web, iOS, Android, macOS, Windows</li>
</ul>
`
},
textcortex: {
  title: "TextCortex",
  description: `
<span class="tool-section-title">📄 What is TextCortex?</span>
<span class="tool-text">
TextCortex is an AI writing assistant that helps you rewrite, summarize, translate, and expand text — built to boost productivity across languages.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>✍️ <span class="bullet-head">Rewrite & Expand Text</span> – Instantly improve and lengthen your writing.</li>
  <li>🌐 <span class="bullet-head">Translate in 25+ Languages</span> – High-quality translations with context.</li>
  <li>🧠 <span class="bullet-head">AI Email & Blog Generator</span> – Create full emails, articles, or product descriptions.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Multilingual content creation</li>
  <li>Email marketing and outreach</li>
  <li>Blog and social media content</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free plan with daily limits</li>
  <li>Paid from $24.99/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Supports multiple languages</li>
  <li>Fast rewriting and idea expansion</li>
  <li>Browser extension included</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Long-form generation is limited on the free plan</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Freelancers and marketers</li>
  <li>Students and writers</li>
  <li>International teams</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Uses GPT-based large language models and fine-tuned translation AI</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web, Chrome extension, Gmail, Notion, LinkedIn integrations</li>
</ul>
`
},


trello: {
  title: "Trello + Butler AI",
  description: `
<span class="tool-section-title">📄 What is Trello + Butler AI?</span>
<span class="tool-text">
Butler is Trello’s built-in automation tool powered by rule-based AI. It automates tasks and boosts productivity inside Trello boards.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🤖 <span class="bullet-head">Automate Repetitive Tasks</span> – Auto-move cards, assign users, or add labels.</li>
  <li>🔁 <span class="bullet-head">Create Custom Rules</span> – Trigger actions based on due dates or checklists.</li>
  <li>📅 <span class="bullet-head">Scheduled Commands</span> – Run board tasks daily, weekly, or monthly.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Project and task automation</li>
  <li>Recurring workflows</li>
  <li>Personal reminders and tracking</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free on basic Trello boards</li>
  <li>Advanced on Business Class plans</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>No coding needed</li>
  <li>Powerful workflow automation</li>
  <li>Integrates well into Trello UI</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Advanced commands limited by quota</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Productivity enthusiasts</li>
  <li>Team leaders and managers</li>
  <li>Trello power users</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Rule-based triggers and smart automation layers</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Trello Web and App</li>
</ul>
`
},
uperfect: {
  title: "Uperfect",
  description: `
<span class="tool-section-title">📄 What is Uperfect?</span>
<span class="tool-text">
Uperfect blends hardware and AI software to enhance your display experience — from portable monitors to smart image enhancement.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>💻 <span class="bullet-head">Smart Portable Monitors</span> – Use plug-and-play external displays anywhere.</li>
  <li>🌈 <span class="bullet-head">AI Display Tuning</span> – Adjust brightness, HDR, and sharpness automatically.</li>
  <li>📊 <span class="bullet-head">Productivity Boost</span> – Use dual screens powered by AI enhancements.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Mobile workstations</li>
  <li>Video and image editing</li>
  <li>Presentation and gaming displays</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Varies by product – typically $200–$600</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>High-quality portable displays</li>
  <li>Smart auto-adjustment via AI</li>
  <li>Compatible with laptops, consoles, phones</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Some features depend on specific hardware models</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Remote workers and travelers</li>
  <li>Gamers and creatives</li>
  <li>Tech-savvy professionals</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Proprietary AI firmware in monitor chips</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Compatible with all major OSes and consoles</li>
</ul>
`
},

writesonic: {
  title: "WriteSonic",
  description: `
<span class="tool-section-title">📄 What is WriteSonic?</span>
<span class="tool-text">
WriteSonic is an AI writing platform that generates marketing content, blog posts, ads, and more — all powered by GPT.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>📢 <span class="bullet-head">Ad Copy & Social Posts</span> – Create Google Ads, Facebook captions, and product descriptions.</li>
  <li>📝 <span class="bullet-head">Blog Article Writer</span> – Generate SEO-optimized long-form content.</li>
  <li>🌍 <span class="bullet-head">100+ Languages</span> – Multilingual content generation.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Digital ads and emails</li>
  <li>Blogging and content writing</li>
  <li>Ecommerce product copy</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free plan available (10,000 words)</li>
  <li>Pro plans from $13/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Fast and accurate generation</li>
  <li>Rich template variety</li>
  <li>Great for marketers and writers</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Output needs light editing sometimes</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Copywriters and marketers</li>
  <li>Freelancers</li>
  <li>Bloggers</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Powered by GPT-3.5/4 + proprietary SEO models</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web app, Chrome extension</li>
</ul>
`
},
youcom: {
  title: "You.com",
  description: `
<span class="tool-section-title">📄 What is You.com?</span>
<span class="tool-text">
You.com is an AI-powered search engine that answers questions, summarizes web content, writes code, and chats — all in one interface.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🔎 <span class="bullet-head">Smart Search Results</span> – Answers + citations from across the web.</li>
  <li>💬 <span class="bullet-head">YouChat</span> – Conversational AI that explains, writes, and solves problems.</li>
  <li>👨‍💻 <span class="bullet-head">Code Assistant</span> – Debug, generate, or explain code live.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Fast AI-based search with answers</li>
  <li>Writing and summarizing tasks</li>
  <li>Live coding help</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free to use</li>
  <li>Pro plan unlocks longer context and GPT-4</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>All-in-one search, chat, and code tools</li>
  <li>Privacy-focused compared to Google</li>
  <li>No login required to try</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Accuracy depends on live search results</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Researchers and students</li>
  <li>Developers and technical users</li>
  <li>Anyone seeking a smarter Google alternative</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Blends custom LLMs with web scraping and search APIs</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web browser, mobile browsers</li>
</ul>
`
},
zapierai: {
  title: "Zapier AI",
  description: `
<span class="tool-section-title">📄 What is Zapier AI?</span>
<span class="tool-text">
Zapier AI supercharges your workflows by letting you build, edit, and trigger automations using plain language instead of manual steps.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🧠 <span class="bullet-head">Natural Language Zaps</span> – Just type what you want to automate.</li>
  <li>⚙️ <span class="bullet-head">Zap Assistant</span> – Build workflows step-by-step with AI guidance.</li>
  <li>📬 <span class="bullet-head">Auto Triggering</span> – Based on emails, forms, or CRMs.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>Automate emails, reports, lead gen</li>
  <li>Connect tools like Slack, Gmail, Google Sheets</li>
  <li>Eliminate repetitive tasks</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Free plan (limited Zaps)</li>
  <li>Pro from $19.99/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Powerful integrations (5000+ apps)</li>
  <li>Zero coding required</li>
  <li>AI suggestions are accurate</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Limits on tasks in free tier</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>Small businesses</li>
  <li>Marketing and sales teams</li>
  <li>Productivity geeks</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Zapier + OpenAI + internal NLP models</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Web, Zapier Chrome extension</li>
</ul>
`
},
zimmwriter: {
  title: "Zimmwriter",
  description: `
<span class="tool-section-title">📄 What is Zimmwriter?</span>
<span class="tool-text">
Zimmwriter is an AI writing tool for Windows that integrates directly into apps like WordPress, Notepad, and Word — ideal for SEO bloggers and marketers.
</span><br><br>

<span class="tool-section-title">🔑 What Can It Do?</span>
<ul class="tool-list">
  <li>🧠 <span class="bullet-head">Bulk Article Generator</span> – Create entire blog posts with one click.</li>
  <li>📈 <span class="bullet-head">SEO Optimization</span> – Built-in Surfer SEO and NeuronWriter support.</li>
  <li>🖱️ <span class="bullet-head">Right-Click Anywhere</span> – Use AI in any Windows text field.</li>
</ul>

<span class="tool-section-title">💡 What Can You Use It For?</span>
<ul class="tool-list">
  <li>SEO blog writing</li>
  <li>Affiliate marketing</li>
  <li>On-page optimization</li>
</ul>

<span class="tool-section-title">💸 Pricing</span>
<ul class="tool-list">
  <li>Paid only – $9/month</li>
</ul>

<span class="tool-section-title">✅ Why People Love It</span>
<ul class="tool-list">
  <li>Works inside any Windows app</li>
  <li>Extremely fast</li>
  <li>Surfer SEO and AI combined</li>
</ul>

<span class="tool-section-title">❌ Things to Keep in Mind</span>
<ul class="tool-list">
  <li>Only available for Windows</li>
</ul>

<span class="tool-section-title">👤 Who Should Use It?</span>
<ul class="tool-list">
  <li>SEO writers and bloggers</li>
  <li>Affiliate marketers</li>
  <li>Windows users looking for AI everywhere</li>
</ul>

<span class="tool-section-title">⚙️ How It Works (AI Tech)</span>
<ul class="tool-list">
  <li>Integrates GPT-4 + Windows clipboard + SEO APIs</li>
</ul>

<span class="tool-section-title">📱 Platforms</span>
<ul class="tool-list">
  <li>Windows only</li>
</ul>
`
},












  



  tool1: {
    title: "Tool 1",
    description: "This is a detailed description of Tool 1."
  }
};

// Open tool popup with detailed content
function openToolPopup(toolKey) {
  const popup = document.getElementById("toolPopup");
  const title = document.getElementById("toolPopupTitle");
  const desc = document.getElementById("toolPopupDesc");

  if (toolDetails[toolKey]) {
    title.textContent = toolDetails[toolKey].title;

    let text = toolDetails[toolKey].description;

    // Convert newlines to <br>
    text = text.replace(/\n/g, "<br>");

    // Bold between **text**
    text = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

    // Optional: Replace leading bullets with real bullet HTML + style
    text = text.replace(/(^|\<br\>)[\-\•\🔹]\s/g, '$1<span style="font-size:1.2em;">•</span> ');

    desc.innerHTML = text;
desc.setAttribute("contenteditable", "true");
    popup.style.display = "flex";
  }
}



// Close tool popup (clicking outside or on close button)
function closeToolPopup(e) {
  const popup = document.getElementById("toolPopup");
  if (e.target === popup || e.target.id === "toolCloseBtn") {
    popup.style.display = "none";
  }
}
// Listen for clicking the close button directly
document.getElementById("toolCloseBtn").addEventListener("click", function () {
  document.getElementById("toolPopup").style.display = "none";
});

