const STORAGE_KEYS = {
  currentUser: "campusconnect-current-user",
  profile: "campusconnect-profile",
};

const sampleUsers = [
  {
    id: 1,
    name: "Aarav",
    email: "aarav@example.com",
    password: "123456",
    department: "CSE",
    year: "2nd Year",
    skills: ["React", "UI/UX", "JavaScript"],
    interests: ["Web Apps", "Design"],
    bio: "Frontend enthusiast and hackathon lover.",
  },
  {
    id: 2,
    name: "Meera",
    email: "meera@example.com",
    password: "123456",
    department: "IT",
    year: "3rd Year",
    skills: ["Python", "Django", "APIs"],
    interests: ["Backend", "AI"],
    bio: "Likes building useful backend projects.",
  },
  {
    id: 3,
    name: "Kabir",
    email: "kabir@example.com",
    password: "123456",
    department: "ECE",
    year: "2nd Year",
    skills: ["Figma", "UI Design", "Presentation"],
    interests: ["Hackathons", "Startups"],
    bio: "Designs clean interfaces and pitch decks.",
  },
];

const sampleIdeas = [
  {
    id: 1,
    title: "Smart Study Buddy",
    category: "EdTech",
    description: "An app that suggests study groups based on subjects and skills.",
    upvotes: 12,
    author: "Meera",
  },
  {
    id: 2,
    title: "Campus Lost & Found",
    category: "Utility",
    description: "A simple portal for lost items inside college campus.",
    upvotes: 8,
    author: "Aarav",
  },
  {
    id: 3,
    title: "Mini Startup Board",
    category: "Startup",
    description: "A place where students can post ideas and find teammates.",
    upvotes: 20,
    author: "Kabir",
  },
  {
    id: 4,
    title: "AI Resume Helper",
    category: "AI/ML",
    description: "An assistant that helps students improve resume content and structure.",
    upvotes: 16,
    author: "Sana",
  },
  {
    id: 5,
    title: "Health Check Reminder",
    category: "Healthcare",
    description: "A simple app that reminds students about medicine, water, and health habits.",
    upvotes: 10,
    author: "Rohan",
  },
  {
    id: 6,
    title: "Campus Wallet",
    category: "FinTech",
    description: "A student budget tracker for expenses, savings, and shared payments.",
    upvotes: 14,
    author: "Meera",
  },
  {
    id: 7,
    title: "Smart Attendance System",
    category: "AI/ML",
    description: "Use face or QR based attendance for college classrooms and labs.",
    upvotes: 18,
    author: "Aarav",
  },
  {
    id: 8,
    title: "IoT Smart Hostel",
    category: "IoT",
    description: "Monitor lights, fans, and room usage with a simple IoT dashboard.",
    upvotes: 11,
    author: "Kabir",
  },
  {
    id: 9,
    title: "Agriculture Connect",
    category: "Agriculture",
    description: "A platform for crop tips, weather updates, and farm support resources.",
    upvotes: 9,
    author: "Sana",
  },
  {
    id: 10,
    title: "Cyber Safety Checker",
    category: "Cybersecurity",
    description: "A beginner-friendly tool that teaches safe passwords and link checking.",
    upvotes: 13,
    author: "Rohan",
  },
  {
    id: 11,
    title: "Event Reminder Bot",
    category: "Utility",
    description: "A small reminder app for hackathons, deadlines, and workshop registrations.",
    upvotes: 7,
    author: "Meera",
  },
  {
    id: 12,
    title: "Project Idea Generator",
    category: "Startup",
    description: "Generate simple startup or hackathon ideas based on skills and domain.",
    upvotes: 22,
    author: "Aarav",
  },
];

const sampleEvents = [
  {
    id: 1,
    title: "Campus Hack Sprint",
    date: "June 10, 2026",
    type: "Hackathon",
    description: "24-hour college hackathon focused on student innovation.",
  },
  {
    id: 2,
    title: "Startup Ideas Workshop",
    date: "June 15, 2026",
    type: "Workshop",
    description: "Learn how to shape an idea into a pitchable project.",
  },
  {
    id: 3,
    title: "AI for Beginners",
    date: "June 20, 2026",
    type: "Talk",
    description: "Simple introduction to AI tools useful for student projects.",
  },
];

const sampleHelpPosts = [
  {
    id: 1,
    title: "Login issue on demo",
    category: "Technical issue",
    description: "The login screen is not moving to dashboard after submit.",
    author: "Team A",
    status: "open",
  },
  {
    id: 2,
    title: "Need teammate for frontend",
    category: "Team issue",
    description: "Looking for someone who knows CSS and layout work.",
    author: "Meera",
    status: "resolved",
  },
];

const exploreItems = [
  {
    id: "teammates",
    title: "Find Teammates",
    category: "People",
    description: "Discover students with matching skills and interests.",
    actionLabel: "Open matches",
    actionType: "modal",
    actionTarget: "teammates",
    tags: ["skills", "match", "profile"],
  },
  {
    id: "ideas",
    title: "Explore Ideas",
    category: "Projects",
    description: "Browse and post startup or hackathon ideas.",
    actionLabel: "Open ideas",
    actionType: "modal",
    actionTarget: "ideas",
    tags: ["projects", "startup", "idea"],
  },
  {
    id: "events",
    title: "Campus Events",
    category: "Events",
    description: "See hackathons, workshops, and college events.",
    actionLabel: "Open events",
    actionType: "modal",
    actionTarget: "events",
    tags: ["hackathon", "workshop", "calendar"],
  },
  {
    id: "tour",
    title: "Guided Tour",
    category: "Tour",
    description: "Walk through the main parts of the platform step by step.",
    actionLabel: "Start tour",
    actionType: "tour",
    actionTarget: "campus",
    tags: ["guide", "help", "tour"],
  },
  {
    id: "dashboard",
    title: "Your Dashboard",
    category: "Workspace",
    description: "See your teammate suggestions, ideas count, and quick actions.",
    actionLabel: "Open dashboard",
    actionType: "page",
    actionTarget: "dashboard",
    tags: ["overview", "status", "profile"],
  },
  {
    id: "profile",
    title: "Build Profile",
    category: "Workspace",
    description: "Add your skills and interests for better matching.",
    actionLabel: "Open profile",
    actionType: "page",
    actionTarget: "profile",
    tags: ["skills", "bio", "setup"],
  },
];

const categories = [
  "All",
  "AI/ML",
  "EdTech",
  "Healthcare",
  "FinTech",
  "IoT",
  "Utility",
  "Startup",
  "Agriculture",
  "Cybersecurity",
];

const state = {
  users: [],
  currentUser: load(STORAGE_KEYS.currentUser, null),
  ideas: [],
  events: [],
  profile: load(STORAGE_KEYS.profile, null),
  invites: [],
  helpPosts: [],
  activity: [],
  exploreItems: [],
  tourSteps: [],
  recommendations: [],
  activePage: "landing",
  authMode: "login",
  ideaFilter: "All",
  selectedTeammateId: null,
  exploreQuery: "",
  tourStep: 0,
  resolvedTeams: [],
};

const pages = [...document.querySelectorAll(".page")];
const navButtons = [...document.querySelectorAll("[data-page-target]")];
const authForm = document.getElementById("authForm");
const profileForm = document.getElementById("profileForm");
const ideaForm = document.getElementById("ideaForm");
const authMessage = document.getElementById("authMessage");
const profileMessage = document.getElementById("profileMessage");
const ideaMessage = document.getElementById("ideaMessage");
const menuButton = document.getElementById("menuButton");
const nav = document.querySelector(".nav");

const authFields = [...document.querySelectorAll(".signup-only")];
const authSubmit = document.getElementById("authSubmit");
const authTabs = [...document.querySelectorAll("[data-auth-mode]")];
const ideaFilters = document.getElementById("ideaFilters");

const dashboardName = document.getElementById("dashboardName");
const ideaCount = document.getElementById("ideaCount");
const eventCount = document.getElementById("eventCount");
const studentCount = document.getElementById("studentCount");
const inviteCount = document.getElementById("inviteCount");
const teamCount = document.getElementById("teamCount");
const updateCount = document.getElementById("updateCount");
const recommendations = document.getElementById("recommendations");
const ideaList = document.getElementById("ideaList");
const eventList = document.getElementById("eventList");
const dashboardUpdates = document.getElementById("dashboardUpdates");
const helpForm = document.getElementById("helpForm");
const helpMessage = document.getElementById("helpMessage");
const helpTitle = document.getElementById("helpTitle");
const helpCategory = document.getElementById("helpCategory");
const helpDescription = document.getElementById("helpDescription");
const helpBoard = document.getElementById("helpBoard");
const dashboardStatModal = document.getElementById("dashboardStatModal");
const dashboardStatTitle = document.getElementById("dashboardStatTitle");
const dashboardStatSubtitle = document.getElementById("dashboardStatSubtitle");
const dashboardStatBody = document.getElementById("dashboardStatBody");
const closeDashboardStatModal = document.getElementById("closeDashboardStatModal");
const teammateModal = document.getElementById("teammateModal");
const teammateDetail = document.getElementById("teammateDetail");
const teammateModalBody = document.getElementById("teammateModalBody");
const closeTeammateModal = document.getElementById("closeTeammateModal");
const ideasModal = document.getElementById("ideasModal");
const ideasModalBody = document.getElementById("ideasModalBody");
const closeIdeasModal = document.getElementById("closeIdeasModal");
const openIdeasPage = document.getElementById("openIdeasPage");
const eventsModal = document.getElementById("eventsModal");
const eventsModalBody = document.getElementById("eventsModalBody");
const closeEventsModal = document.getElementById("closeEventsModal");
const openEventsPage = document.getElementById("openEventsPage");
const tourModal = document.getElementById("tourModal");
const tourModalBody = document.getElementById("tourModalBody");
const closeTourModal = document.getElementById("closeTourModal");
const prevTourStep = document.getElementById("prevTourStep");
const nextTourStep = document.getElementById("nextTourStep");
const exploreSearch = document.getElementById("exploreSearch");
const exploreReset = document.getElementById("exploreReset");
const exploreResults = document.getElementById("exploreResults");

const profileInputs = {
  name: document.getElementById("profileName"),
  department: document.getElementById("profileDepartment"),
  year: document.getElementById("profileYear"),
  skills: document.getElementById("profileSkills"),
  interests: document.getElementById("profileInterests"),
  bio: document.getElementById("profileBio"),
};

const preview = {
  name: document.getElementById("previewName"),
  meta: document.getElementById("previewMeta"),
  bio: document.getElementById("previewBio"),
  skills: document.getElementById("previewSkills"),
  interests: document.getElementById("previewInterests"),
};

const authInputs = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  password: document.getElementById("password"),
  department: document.getElementById("department"),
  year: document.getElementById("year"),
  skills: document.getElementById("skills"),
  interests: document.getElementById("interests"),
  bio: document.getElementById("bio"),
};

const ideaInputs = {
  title: document.getElementById("ideaTitle"),
  category: document.getElementById("ideaCategory"),
  description: document.getElementById("ideaDescription"),
};

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function setMessage(node, text, type = "") {
  node.textContent = text;
  node.className = `message ${type}`.trim();
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function splitList(value = "") {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function formatList(items = []) {
  return items.length ? items : ["Not added"];
}

function mergeByTitle(existing = [], seed = []) {
  const seen = new Set(existing.map((item) => item.title));
  return [...existing, ...seed.filter((item) => !seen.has(item.title))];
}

const API_BASE = window.CAMPUSCONNECT_API_BASE || "http://127.0.0.1:8000";

function apiPath(path) {
  return `${API_BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

async function apiRequest(path, options = {}) {
  const hasBody = options.body !== undefined && options.body !== null;
  const { headers: customHeaders, method: customMethod, ...rest } = options;
  const method = (customMethod || "GET").toUpperCase();
  const response = await fetch(apiPath(path), {
    headers: {
      ...(hasBody ? { "Content-Type": "application/json" } : {}),
      ...(customHeaders || {}),
    },
    credentials: "omit",
    ...rest,
    method,
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    const message = data?.message || `Request failed with status ${response.status}`;
    throw new Error(message);
  }

  return data;
}

function activityBadgeClass(type) {
  return type === "help" ? "amber" : type === "invite" ? "green" : "sky";
}

function setPage(page, options = {}) {
  const { render = true } = options;
  const normalizedPage = pages.some((section) => section.id === page) ? page : "landing";
  const currentHash = window.location.hash.replace("#", "");

  if (state.activePage === normalizedPage && currentHash === normalizedPage) {
    return;
  }

  state.activePage = normalizedPage;
  pages.forEach((section) => section.classList.toggle("active", section.id === normalizedPage));
  navButtons.forEach((button) => button.classList.toggle("active", button.dataset.pageTarget === normalizedPage));
  if (window.innerWidth <= 860) {
    nav.classList.remove("show");
  }
  if (render) {
    renderCurrentPage();
  }
  if (currentHash !== normalizedPage) {
    history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${normalizedPage}`);
  }
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function setAuthMode(mode) {
  state.authMode = mode;
  authTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.authMode === mode));
  authFields.forEach((field) => field.classList.toggle("hidden", mode !== "signup"));
  authSubmit.textContent = mode === "login" ? "Login" : "Create Account";
  setMessage(authMessage, "");
}

function renderStats() {
  ideaCount.textContent = state.ideas.length;
  eventCount.textContent = state.events.length;
  studentCount.textContent = state.users.length;
  inviteCount.textContent = state.invites.length;
  teamCount.textContent = new Set(state.invites.map((invite) => invite.email)).size;
  updateCount.textContent = state.activity.length;
  dashboardName.textContent = state.currentUser?.name || "Student";
}

function escapeText(value = "") {
  return escapeHtml(value);
}

function openDashboardStatModal(type) {
  const data = getDashboardStatContent(type);
  if (!data) return;

  dashboardStatTitle.textContent = data.title;
  dashboardStatSubtitle.textContent = data.subtitle;
  dashboardStatBody.innerHTML = data.body;
  dashboardStatModal.classList.remove("hidden");
  dashboardStatModal.setAttribute("aria-hidden", "false");
}

function closeDashboardStatModalPopup() {
  dashboardStatModal.classList.add("hidden");
  dashboardStatModal.setAttribute("aria-hidden", "true");
}

function getDashboardStatContent(type) {
  const invitedMembers = state.invites.slice(0, 4);
  const uniqueTeams = [...new Map(state.invites.map((entry) => [entry.email, entry])).values()];
  const recentUpdates = state.activity.slice(0, 5);

  if (type === "ideas") {
    return {
      title: "Ideas",
      subtitle: "Latest project ideas posted by students.",
      body: `
        <div class="stack">
          ${state.ideas
            .slice(0, 5)
            .map(
              (idea) => `
                <article class="idea-card">
                  <span class="badge sky">${escapeText(idea.category)}</span>
                  <h3>${escapeText(idea.title)}</h3>
                  <p>${escapeText(idea.description)}</p>
                </article>
              `
            )
            .join("")}
          <div class="modal-footer">
            <button class="btn primary" type="button" data-page-target="ideas">Open Ideas Page</button>
          </div>
        </div>
      `,
    };
  }

  if (type === "events") {
    return {
      title: "Events",
      subtitle: "Upcoming hackathons and workshops.",
      body: `
        <div class="stack">
          ${state.events
            .slice(0, 5)
            .map(
              (event) => `
                <article class="event-card">
                  <span class="badge green">${escapeText(event.type)}</span>
                  <h3>${escapeText(event.title)}</h3>
                  <p>${escapeText(event.description)}</p>
                  <p class="muted">Date: ${escapeText(event.date)}</p>
                </article>
              `
            )
            .join("")}
          <div class="modal-footer">
            <button class="btn primary" type="button" data-page-target="events">Open Events Page</button>
          </div>
        </div>
      `,
    };
  }

  if (type === "students") {
    return {
      title: "Students",
      subtitle: "Students currently available for teaming up.",
      body: `
        <div class="stack">
          ${state.users
            .slice(0, 5)
            .map(
              (student) => `
                <article class="idea-card">
                  <h3>${escapeText(student.name)}</h3>
                  <p>${escapeText(student.department || "Department")} • ${escapeText(student.year || "Year")}</p>
                  <div class="chip-row">
                    ${(student.skills || [])
                      .slice(0, 3)
                      .map((skill) => `<span class="chip">${escapeText(skill)}</span>`)
                      .join("")}
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      `,
    };
  }

  if (type === "invites") {
    return {
      title: "Invites",
      subtitle: "People you have invited to join your team.",
      body: `
        <div class="stack">
          ${
            invitedMembers.length
              ? invitedMembers
                  .map(
                    (invite) => `
                      <article class="idea-card">
                        <h3>${escapeText(invite.name)}</h3>
                        <p class="muted">Status: ${escapeText(invite.status || "sent")}</p>
                        <p class="muted">Time: ${escapeText(invite.time || "Just now")}</p>
                      </article>
                    `
                  )
                  .join("")
              : `<div class="empty-state">No invites sent yet. Click a teammate card and send an invite.</div>`
          }
        </div>
      `,
    };
  }

  if (type === "teams") {
    return {
      title: "Teams formed",
      subtitle: "Teammates you have connected with.",
      body: `
        <div class="stack">
          ${
            uniqueTeams.length
              ? uniqueTeams
                  .map(
                    (team) => `
                      <article class="idea-card">
                        <h3>${escapeText(team.name)}</h3>
                        <p class="muted">${escapeText(team.email)}</p>
                      </article>
                    `
                  )
                  .join("")
              : `<div class="empty-state">No teams formed yet. Send an invite to build your first team.</div>`
          }
        </div>
      `,
    };
  }

  if (type === "updates") {
    return {
      title: "Updates",
      subtitle: "Recent activity from the dashboard.",
      body: `
        <div class="stack">
          ${recentUpdates
            .map(
              (item) => `
                <article class="update-item">
                  <div class="update-meta">
                    <span class="badge ${item.type === "help" ? "amber" : item.type === "invite" ? "green" : "sky"}">${escapeText(item.type)}</span>
                    <span class="muted">${escapeText(item.time)}</span>
                  </div>
                  <p>${escapeText(item.text)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      `,
    };
  }

  return null;
}

function calculateMatchScore(user, member) {
  const userSkills = (user?.skills || []).map((item) => item.toLowerCase());
  const userInterests = (user?.interests || []).map((item) => item.toLowerCase());
  const memberSkills = (member?.skills || []).map((item) => item.toLowerCase());
  const memberInterests = (member?.interests || []).map((item) => item.toLowerCase());

  const skillHits = memberSkills.filter((skill) => userSkills.includes(skill)).length;
  const interestHits = memberInterests.filter((interest) => userInterests.includes(interest)).length;
  return skillHits * 2 + interestHits;
}

function getRecommendationPool() {
  if (state.recommendations.length) {
    return state.recommendations;
  }
  return [];
}

function renderRecommendations() {
  const pool = getRecommendationPool();
  const strongMatches = pool.filter((member) => member.score > 0);
  const listToShow = strongMatches.length ? strongMatches : pool;
  renderTeammateCards(recommendations, listToShow, {
    emptyMessage: "Login and fill your profile to see teammate suggestions.",
    noResultsMessage: "No teammates found yet. Add more student profiles to improve matching.",
  });
  renderTeammateCards(teammateModalBody, listToShow, {
    emptyMessage: "Login and fill your profile to see teammate suggestions.",
    noResultsMessage: "No teammates found yet. Add more student profiles to improve matching.",
  });
  renderSelectedTeammate(listToShow);
}

function renderTeammateCards(container, pool, messages) {
  if (!state.currentUser && !state.profile) {
    container.innerHTML = `<div class="empty-state">${messages.emptyMessage}</div>`;
    return;
  }

  if (!pool.length) {
    container.innerHTML = `<div class="empty-state">${messages.noResultsMessage}</div>`;
    return;
  }

  container.innerHTML = pool
    .map(
      (member) => `
        <button class="idea-card teammate-card ${state.selectedTeammateId === member.email ? "active" : ""}" type="button" data-member-email="${escapeHtml(member.email)}">
          <div class="idea-card-header">
            <div>
              <span class="badge sky">Match ${member.score}</span>
              <h3>${escapeHtml(member.name)}</h3>
              <p>${escapeHtml(member.department || "Department")} • ${escapeHtml(member.year || "Year")}</p>
            </div>
          </div>
          <div class="chip-row">
            ${formatList(member.skills)
              .map((skill) => `<span class="chip">${escapeHtml(skill)}</span>`)
              .join("")}
          </div>
          <p style="margin-top: 12px;">${escapeHtml(member.bio || "A great teammate for your next project.")}</p>
        </button>
      `
    )
    .join("");
}

function renderSelectedTeammate(pool) {
  const selected =
    pool.find((member) => member.email === state.selectedTeammateId) ||
    pool[0] ||
    null;

  if (!selected) {
    teammateDetail.innerHTML = `<div class="empty-state">Click a teammate card to view details.</div>`;
    return;
  }

  state.selectedTeammateId = selected.email;
  const inviteRecord = state.invites.find((entry) => entry.email === selected.email);
  const isInvited = Boolean(inviteRecord);

  teammateDetail.innerHTML = `
    <p class="muted">Selected teammate</p>
    <span class="badge sky">Match ${selected.score}</span>
    <h3>${escapeHtml(selected.name)}</h3>
    <p class="meta">${escapeHtml(selected.department || "Department")} â€¢ ${escapeHtml(selected.year || "Year")}</p>
    <p class="message ${isInvited ? "success" : "muted"}" style="margin-top: 10px;">
      ${isInvited ? "Invite sent. This teammate is now linked to your team." : "Not invited yet. Click invite to connect."}
    </p>
    <div class="chip-row">
      ${formatList(selected.skills)
        .map((skill) => `<span class="chip">${escapeHtml(skill)}</span>`)
        .join("")}
    </div>
    <p style="margin-top: 12px;">${escapeHtml(selected.bio || "A great teammate for your next project.")}</p>
    <div class="actions">
      <button class="invite-btn" type="button" data-invite-email="${escapeHtml(selected.email)}">${isInvited ? "Invited" : "Invite teammate"}</button>
      <button class="btn secondary" type="button" data-close-teammate-preview="true">Close preview</button>
    </div>
  `;
}

function openTeammateModal() {
  renderCurrentPage();
  teammateModal.classList.remove("hidden");
  teammateModal.setAttribute("aria-hidden", "false");
}

function closeTeammateModalPopup() {
  teammateModal.classList.add("hidden");
  teammateModal.setAttribute("aria-hidden", "true");
}

function renderIdeaCards(container, ideas) {
  if (!ideas.length) {
    container.innerHTML = `<div class="empty-state">No ideas available right now.</div>`;
    return;
  }

  container.innerHTML = ideas
    .slice(0, 4)
    .map(
      (idea) => `
        <article class="idea-card">
          <div class="idea-card-header">
            <div>
              <span class="badge sky">${escapeHtml(idea.category)}</span>
              <h3>${escapeHtml(idea.title)}</h3>
              <p>Posted by ${escapeHtml(idea.author)}</p>
            </div>
            <span class="badge amber">★ ${idea.upvotes || 0}</span>
          </div>
          <p style="margin-top: 12px;">${escapeHtml(idea.description)}</p>
        </article>
      `
    )
    .join("");
}

function renderEventCards(container, events) {
  if (!events.length) {
    container.innerHTML = `<div class="empty-state">No events available right now.</div>`;
    return;
  }

  container.innerHTML = events
    .slice(0, 4)
    .map(
      (event) => `
        <article class="event-card">
          <span class="badge green">${escapeHtml(event.type)}</span>
          <h3>${escapeHtml(event.title)}</h3>
          <div class="event-meta">
            <span>📅 ${escapeHtml(event.date)}</span>
            <span>📍 Campus Center</span>
          </div>
          <p>${escapeHtml(event.description)}</p>
        </article>
      `
    )
    .join("");
}

function openIdeasModal() {
  renderIdeaCards(ideasModalBody, state.ideas);
  ideasModal.classList.remove("hidden");
  ideasModal.setAttribute("aria-hidden", "false");
}

function closeIdeasModalPopup() {
  ideasModal.classList.add("hidden");
  ideasModal.setAttribute("aria-hidden", "true");
}

function openIdeasFullPage() {
  closeIdeasModalPopup();
  setPage("ideas");
}

function openEventsModal() {
  renderEventCards(eventsModalBody, state.events);
  eventsModal.classList.remove("hidden");
  eventsModal.setAttribute("aria-hidden", "false");
}

function closeEventsModalPopup() {
  eventsModal.classList.add("hidden");
  eventsModal.setAttribute("aria-hidden", "true");
}

function openEventsFullPage() {
  closeEventsModalPopup();
  setPage("events");
}

function renderProfilePreview() {
  const profile = state.currentUser || state.profile || {
    name: "",
    department: "",
    year: "",
    skills: [],
    interests: [],
    bio: "",
  };

  profileInputs.name.value = profile.name || "";
  profileInputs.department.value = profile.department || "";
  profileInputs.year.value = profile.year || "";
  profileInputs.skills.value = (profile.skills || []).join(", ");
  profileInputs.interests.value = (profile.interests || []).join(", ");
  profileInputs.bio.value = profile.bio || "";

  preview.name.textContent = profile.name || "Your Name";
  preview.meta.textContent = `${profile.department || "Department"} • ${profile.year || "Year"}`;
  preview.bio.textContent = profile.bio || "Your short bio will appear here.";

  preview.skills.innerHTML = formatList(profile.skills)
    .map((skill) => `<span class="chip">${escapeHtml(skill)}</span>`)
    .join("");
  preview.interests.innerHTML = formatList(profile.interests)
    .map((interest) => `<span class="chip warn">${escapeHtml(interest)}</span>`)
    .join("");
}

function renderIdeaFilters() {
  ideaFilters.innerHTML = categories
    .map(
      (category) => `
        <button class="filter-btn ${state.ideaFilter === category ? "active" : ""}" data-filter="${category}">
          ${escapeHtml(category)}
        </button>
      `
    )
    .join("");
}

function renderIdeas() {
  const visibleIdeas =
    state.ideaFilter === "All"
      ? state.ideas
      : state.ideas.filter((idea) => idea.category === state.ideaFilter);

  if (!visibleIdeas.length) {
    ideaList.innerHTML = `<div class="empty-state">No ideas found for this category.</div>`;
    return;
  }

  ideaList.innerHTML = visibleIdeas
    .map(
      (idea) => `
        <article class="idea-card">
          <div class="idea-card-header">
            <div>
              <span class="badge sky">${escapeHtml(idea.category)}</span>
              <h3>${escapeHtml(idea.title)}</h3>
              <p>Posted by ${escapeHtml(idea.author)}</p>
            </div>
            <button class="upvote-btn" data-upvote-id="${idea.id}">
              ↑ ${idea.upvotes || 0}
            </button>
          </div>
          <p style="margin-top: 12px;">${escapeHtml(idea.description)}</p>
        </article>
      `
    )
    .join("");
}

function renderEvents() {
  eventList.innerHTML = state.events
    .map(
      (event) => `
        <article class="event-card">
          <span class="badge green">${escapeHtml(event.type)}</span>
          <h3>${escapeHtml(event.title)}</h3>
          <div class="event-meta">
            <span>📅 ${escapeHtml(event.date)}</span>
            <span>📍 Campus Center</span>
          </div>
          <p>${escapeHtml(event.description)}</p>
        </article>
      `
    )
    .join("");
}

function renderDashboardUpdates() {
  if (!dashboardUpdates) return;

  const updates = [...state.activity].slice(0, 6);
  dashboardUpdates.innerHTML = updates.length
    ? updates
        .map(
          (item) => `
            <article class="update-item">
              <div class="update-meta">
                <span class="badge ${item.type === "help" ? "amber" : item.type === "invite" ? "green" : "sky"}">${escapeHtml(item.type)}</span>
                <span class="muted">${escapeHtml(item.time)}</span>
              </div>
              <p>${escapeHtml(item.text)}</p>
            </article>
          `
        )
        .join("")
    : `<div class="empty-state">No updates yet.</div>`;
}

function renderHelpBoard() {
  if (!helpBoard) return;

  if (!state.helpPosts.length) {
    helpBoard.innerHTML = `<div class="empty-state">No help posts yet. Be the first to ask a question.</div>`;
    return;
  }

  helpBoard.innerHTML = state.helpPosts
    .map(
      (post) => `
        <article class="help-card">
          <div class="idea-card-header">
            <div>
              <span class="badge ${post.status === "resolved" ? "green" : "amber"}">${escapeHtml(post.category)}</span>
              <h3>${escapeHtml(post.title)}</h3>
              <p>Posted by ${escapeHtml(post.author || "Anonymous")}</p>
            </div>
            <button class="btn secondary" type="button" data-help-resolve-id="${post.id}">
              ${post.status === "resolved" ? "Resolved" : "Mark resolved"}
            </button>
          </div>
          <p style="margin-top: 12px;">${escapeHtml(post.description)}</p>
          <p class="muted" style="margin-top: 10px;">Status: ${escapeHtml(post.status)}</p>
        </article>
      `
    )
    .join("");
}

function getExploreResults() {
  const query = state.exploreQuery.trim().toLowerCase();
  const items = state.exploreItems.length ? state.exploreItems : exploreItems;
  if (!query) {
    return items;
  }
  return items.filter((item) => {
    const haystack = [item.title, item.category, item.description, ...(item.tags || [])]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });
}

function renderExplore() {
  if (!exploreResults) return;

  const results = getExploreResults();

  exploreResults.innerHTML = results.length
    ? results
        .map(
          (item) => `
            <article class="explore-card">
              <span class="badge sky">${escapeHtml(item.category)}</span>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.description)}</p>
              <div class="chip-row">
                ${(item.tags || [])
                  .map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`)
                  .join("")}
              </div>
              <div class="actions">
                ${
                  item.actionType === "modal"
                    ? `<button class="btn primary" type="button" data-open-modal="${escapeHtml(item.actionTarget)}">${escapeHtml(item.actionLabel)}</button>`
                    : item.actionType === "tour"
                      ? `<button class="btn primary" type="button" data-open-tour="campus">${escapeHtml(item.actionLabel)}</button>`
                      : `<button class="btn primary" type="button" data-page-target="${escapeHtml(item.actionTarget)}">${escapeHtml(item.actionLabel)}</button>`
                }
              </div>
            </article>
          `
        )
        .join("")
    : `<div class="empty-state">No matching results found. Try a different keyword.</div>`;

  if (exploreSearch) {
    exploreSearch.value = state.exploreQuery;
  }
}

const tourSteps = [
  {
    title: "Start on the Home page",
    text: "See the main idea, then use the buttons to jump into the app.",
    actionLabel: "Go to Dashboard",
    actionType: "page",
    actionTarget: "dashboard",
  },
  {
    title: "Set up your profile",
    text: "Add your name, department, skills, and interests so the app can suggest better teammates.",
    actionLabel: "Open Profile",
    actionType: "page",
    actionTarget: "profile",
  },
  {
    title: "Find teammates",
    text: "Click Find teammates to open the popup and choose a student with similar skills.",
    actionLabel: "Open teammates",
    actionType: "modal",
    actionTarget: "teammates",
  },
  {
    title: "Explore ideas",
    text: "Browse ideas, post new ones, and upvote projects that look interesting.",
    actionLabel: "Open ideas",
    actionType: "modal",
    actionTarget: "ideas",
  },
  {
    title: "Check events and explore more",
    text: "Use events for hackathons and workshops, or open the Explore page to see everything together.",
    actionLabel: "Open Explore page",
    actionType: "page",
    actionTarget: "explore",
  },
];

function renderTourStep() {
  const steps = state.tourSteps.length ? state.tourSteps : tourSteps;
  const step = steps[state.tourStep] || steps[0];
  const progress = steps
    .map((_, index) => `<span class="tour-dot ${index === state.tourStep ? "active" : ""}"></span>`)
    .join("");

  tourModalBody.innerHTML = `
    <div class="tour-step">
      <p class="muted">Step ${state.tourStep + 1} of ${steps.length}</p>
      <h3>${escapeHtml(step.title)}</h3>
      <p>${escapeHtml(step.text)}</p>
      <div class="tour-progress">${progress}</div>
      <div class="actions" style="margin-top:16px;">
        ${
          step.actionType === "modal"
            ? `<button class="btn primary" type="button" data-open-modal="${escapeHtml(step.actionTarget)}">${escapeHtml(step.actionLabel)}</button>`
            : `<button class="btn primary" type="button" data-page-target="${escapeHtml(step.actionTarget)}">${escapeHtml(step.actionLabel)}</button>`
        }
      </div>
    </div>
  `;

  prevTourStep.disabled = state.tourStep === 0;
  nextTourStep.textContent = state.tourStep === steps.length - 1 ? "Finish" : "Next";
}

function openTour() {
  state.tourStep = 0;
  renderTourStep();
  tourModal.classList.remove("hidden");
  tourModal.setAttribute("aria-hidden", "false");
}

function closeTour() {
  tourModal.classList.add("hidden");
  tourModal.setAttribute("aria-hidden", "true");
}

function moveTour(direction) {
  const steps = state.tourSteps.length ? state.tourSteps : tourSteps;
  state.tourStep = Math.max(0, Math.min(steps.length - 1, state.tourStep + direction));
  renderTourStep();
}

function renderCurrentPage() {
  renderStats();
  renderRecommendations();
  renderProfilePreview();
  renderIdeaFilters();
  renderIdeas();
  renderEvents();
  renderExplore();
  renderDashboardUpdates();
  renderHelpBoard();
}

function normalizeFormValues(values) {
  return {
    name: values.name?.trim(),
    email: values.email?.trim().toLowerCase(),
    password: values.password?.trim(),
    department: values.department?.trim(),
    year: values.year?.trim(),
    skills: splitList(values.skills),
    interests: splitList(values.interests),
    bio: values.bio?.trim(),
  };
}

function saveCurrentUser(user) {
  state.currentUser = user;
  state.profile = user;
  save(STORAGE_KEYS.currentUser, user);
  save(STORAGE_KEYS.profile, user);
}

function syncUsers() {
  return Promise.resolve();
}

function syncIdeas() {
  return Promise.resolve();
}

function syncEvents() {
  return Promise.resolve();
}

function syncInvites() {
  return Promise.resolve();
}

function syncHelpPosts() {
  return Promise.resolve();
}

function syncActivity() {
  return Promise.resolve();
}

function addActivity(type, text) {
  return apiRequest("/activity", {
    method: "POST",
    body: JSON.stringify({ type, text }),
  }).then((response) => {
    if (response?.activity_item) {
      state.activity.unshift(response.activity_item);
      state.activity = state.activity.slice(0, 20);
      renderDashboardUpdates();
    }
    return response;
  });
}

function ensureSeedData() {
  return;
}

async function loadBackendData() {
  const invitePath = state.currentUser?.email
    ? `/invites?owner_email=${encodeURIComponent(state.currentUser.email)}`
    : "/invites";
  const requests = await Promise.allSettled([
    apiRequest("/students"),
    apiRequest("/ideas"),
    apiRequest("/events"),
    apiRequest(invitePath),
    apiRequest("/help-posts"),
    apiRequest("/activity?limit=20"),
    apiRequest("/explore-items"),
    apiRequest("/tour-steps"),
  ]);

  const [students, ideas, events, invites, helpPosts, activity, exploreItemsData, tourStepsData] = requests;
  state.users = students.status === "fulfilled" ? students.value.students || [] : sampleUsers;
  state.ideas = ideas.status === "fulfilled" ? ideas.value.ideas || [] : sampleIdeas;
  state.events = events.status === "fulfilled" ? events.value.events || [] : sampleEvents;
  state.invites = invites.status === "fulfilled" ? invites.value.invites || [] : [];
  state.helpPosts = helpPosts.status === "fulfilled" ? helpPosts.value.help_posts || [] : sampleHelpPosts;
  state.activity = activity.status === "fulfilled" ? activity.value.activity || [] : [{ id: 1, type: "update", text: "Welcome to CampusConnect AI.", time: "Just now" }];
  state.exploreItems = exploreItemsData.status === "fulfilled" ? exploreItemsData.value.explore_items || [] : exploreItems;
  state.tourSteps = tourStepsData.status === "fulfilled" ? tourStepsData.value.tour_steps || [] : tourSteps;

  if (state.currentUser?.email) {
    try {
      const profileResponse = await apiRequest(`/profile?email=${encodeURIComponent(state.currentUser.email)}`);
      state.profile = profileResponse.profile;
      state.currentUser = profileResponse.profile;
      saveCurrentUser(profileResponse.profile);
    } catch {
      state.profile = state.currentUser;
    }

    try {
      const matchesResponse = await apiRequest(`/recommended-members?email=${encodeURIComponent(state.currentUser.email)}`);
      state.recommendations = matchesResponse.recommendations || [];
    } catch {
      state.recommendations = [];
    }
  } else {
    state.profile = load(STORAGE_KEYS.profile, null);
    state.recommendations = [];
  }
}

async function handleAuthSubmit(event) {
  event.preventDefault();
  const formData = new FormData(authForm);
  const values = Object.fromEntries(formData.entries());
  const payload = normalizeFormValues(values);

  if (state.authMode === "login") {
    try {
      const response = await apiRequest("/login", {
        method: "POST",
        body: JSON.stringify({ email: payload.email, password: payload.password }),
      });
      saveCurrentUser(response.user);
      await loadBackendData();
      setMessage(authMessage, `Welcome back, ${response.user.name}!`, "success");
      renderCurrentPage();
      setPage("dashboard");
    } catch (error) {
      setMessage(authMessage, error.message, "error");
    }
    return;
  }

  if (!payload.name || !payload.email || !payload.password) {
    setMessage(authMessage, "Please fill in name, email, and password.", "error");
    return;
  }
  if (!payload.department || !payload.year || !payload.skills.length || !payload.interests.length) {
    setMessage(authMessage, "Please add department, year, skills, and interests.", "error");
    return;
  }

  try {
    const response = await apiRequest("/register", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    saveCurrentUser(response.user);
    await loadBackendData();
    setMessage(authMessage, "Account created successfully.", "success");
    renderCurrentPage();
    setPage("dashboard");
  } catch (error) {
    setMessage(authMessage, error.message, "error");
  }
}

async function handleProfileSubmit(event) {
  event.preventDefault();
  const payload = {
    id: state.currentUser?.id || state.profile?.id || Date.now(),
    name: profileInputs.name.value.trim(),
    department: profileInputs.department.value.trim(),
    year: profileInputs.year.value.trim(),
    skills: splitList(profileInputs.skills.value),
    interests: splitList(profileInputs.interests.value),
    bio: profileInputs.bio.value.trim(),
    email: state.currentUser?.email || state.profile?.email || "student@example.com",
    password: state.currentUser?.password || state.profile?.password || "",
  };

  if (!payload.name || !payload.department || !payload.year || !payload.skills.length || !payload.interests.length) {
    setMessage(profileMessage, "Please complete all profile fields.", "error");
    return;
  }

  try {
    const response = await apiRequest("/profile", {
      method: "PATCH",
      body: JSON.stringify({
        email: payload.email,
        name: payload.name,
        department: payload.department,
        year: payload.year,
        skills: payload.skills,
        interests: payload.interests,
        bio: payload.bio,
      }),
    });
    saveCurrentUser(response.profile);
    await loadBackendData();
    setMessage(profileMessage, "Profile saved successfully.", "success");
    renderCurrentPage();
  } catch (error) {
    setMessage(profileMessage, error.message, "error");
  }
}

async function handleIdeaSubmit(event) {
  event.preventDefault();
  const title = ideaInputs.title.value.trim();
  const description = ideaInputs.description.value.trim();
  const category = ideaInputs.category.value;

  if (!title || !description) {
    setMessage(ideaMessage, "Please add an idea title and description.", "error");
    return;
  }

  try {
    await apiRequest("/ideas", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        category,
        author_email: state.currentUser?.email || state.profile?.email || "",
      }),
    });
    ideaForm.reset();
    ideaInputs.category.value = category;
    await loadBackendData();
    setMessage(ideaMessage, "Idea posted successfully.", "success");
    renderCurrentPage();
  } catch (error) {
    setMessage(ideaMessage, error.message, "error");
  }
}

async function handleHelpSubmit(event) {
  event.preventDefault();
  const title = helpTitle.value.trim();
  const category = helpCategory.value;
  const description = helpDescription.value.trim();

  if (!title || !description) {
    setMessage(helpMessage, "Please add a title and details for the help request.", "error");
    return;
  }

  try {
    await apiRequest("/help-posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        category,
        description,
        author: state.currentUser?.name || state.profile?.name || "Anonymous",
      }),
    });
    helpForm.reset();
    helpCategory.value = category;
    await loadBackendData();
    setMessage(helpMessage, "Help request posted.", "success");
    renderCurrentPage();
  } catch (error) {
    setMessage(helpMessage, error.message, "error");
  }
}

function handlePageButtons(target) {
  setPage(target);
}

function handleTopbarNavClick(event) {
  const button = event.target.closest("[data-page-target]");
  if (!button) return;
  closeTour();
  closeDashboardStatModalPopup();
  handlePageButtons(button.dataset.pageTarget);
}

function handleModalOpenClick(event) {
  const button = event.target.closest("[data-open-modal]");
  if (!button) return;
  closeTour();
  const modalType = button.dataset.openModal;
  if (modalType === "teammates") openTeammateModal();
  if (modalType === "ideas") openIdeasModal();
  if (modalType === "events") openEventsModal();
}

function handleTourOpenClick(event) {
  const button = event.target.closest("[data-open-tour]");
  if (!button) return;
  closeDashboardStatModalPopup();
  openTour();
}

function handleHomeRailClick(event) {
  const button = event.target.closest("[data-home-action]");
  if (!button) return;
  const action = button.dataset.homeAction;

  closeTour();
  closeDashboardStatModalPopup();

  if (action === "profile") {
    setPage("auth");
    return;
  }

  if (action === "teammates") {
    openTeammateModal();
    return;
  }

  if (action === "explore") {
    setPage("explore");
  }
}

function handleDashboardStatClick(event) {
  const button = event.target.closest("[data-dashboard-stat]");
  if (!button) return;
  closeTour();
  openDashboardStatModal(button.dataset.dashboardStat);
}

function handleExploreInput(event) {
  state.exploreQuery = event.target.value || "";
  renderExplore();
}

function handleTeammateClick(event) {
  const card = event.target.closest("[data-member-email]");
  if (!card) return;
  state.selectedTeammateId = card.dataset.memberEmail;
  renderCurrentPage();
  if (teammateModal.classList.contains("hidden")) {
    openTeammateModal();
  }
}

function handleTeammateDetailClick(event) {
  const invite = event.target.closest("[data-invite-email]");
  if (invite) {
    const teammate = getRecommendationPool().find((member) => member.email === invite.dataset.inviteEmail);
    const name = teammate?.name || "this teammate";
    apiRequest("/invites", {
      method: "POST",
      body: JSON.stringify({
        owner_email: state.currentUser?.email || state.profile?.email || "",
        email: invite.dataset.inviteEmail,
        name,
        status: "sent",
      }),
    })
      .then(async () => {
        state.selectedTeammateId = invite.dataset.inviteEmail;
        await loadBackendData();
        renderCurrentPage();
      })
      .catch((error) => setMessage(helpMessage, error.message, "error"));
    return;
  }

  const closePreview = event.target.closest("[data-close-teammate-preview]");
  if (closePreview) {
    closeTeammateModalPopup();
  }
}

function handleIdeaListClick(event) {
  const upvoteBtn = event.target.closest("[data-upvote-id]");
  if (!upvoteBtn) return;
  const id = Number(upvoteBtn.dataset.upvoteId);
  apiRequest(`/ideas/${id}/upvote`, {
    method: "POST",
  })
    .then(async () => {
      await loadBackendData();
      renderIdeas();
    })
    .catch((error) => setMessage(ideaMessage, error.message, "error"));
}

function handleFilterClick(event) {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  state.ideaFilter = button.dataset.filter;
  renderIdeaFilters();
  renderIdeas();
}

function handleHelpResolve(event) {
  const button = event.target.closest("[data-help-resolve-id]");
  if (!button) return;
  const id = Number(button.dataset.helpResolveId);
  apiRequest(`/help-posts/${id}/toggle`, {
    method: "POST",
  })
    .then(async () => {
      await loadBackendData();
      renderCurrentPage();
    })
    .catch((error) => setMessage(helpMessage, error.message, "error"));
}

function bindProfilePreviewInputs() {
  Object.values(profileInputs).forEach((input) => {
    input.addEventListener("input", () => {
      preview.name.textContent = profileInputs.name.value.trim() || "Your Name";
      preview.meta.textContent = `${profileInputs.department.value.trim() || "Department"} • ${profileInputs.year.value.trim() || "Year"}`;
      preview.bio.textContent = profileInputs.bio.value.trim() || "Your short bio will appear here.";
      preview.skills.innerHTML = splitList(profileInputs.skills.value)
        .map((skill) => `<span class="chip">${escapeHtml(skill)}</span>`)
        .join("") || `<span class="chip">Add skills</span>`;
      preview.interests.innerHTML = splitList(profileInputs.interests.value)
        .map((interest) => `<span class="chip warn">${escapeHtml(interest)}</span>`)
        .join("") || `<span class="chip warn">Add interests</span>`;
    });
  });
}

function init() {
  ensureSeedData();
  state.currentUser = load(STORAGE_KEYS.currentUser, null);
  state.profile = load(STORAGE_KEYS.profile, null);

  if (!state.currentUser && state.profile) {
    state.currentUser = state.profile;
  }

  setAuthMode("login");
  bindProfilePreviewInputs();

  authForm.addEventListener("submit", handleAuthSubmit);
  profileForm.addEventListener("submit", handleProfileSubmit);
  ideaForm.addEventListener("submit", handleIdeaSubmit);
  helpForm.addEventListener("submit", handleHelpSubmit);

  navButtons.forEach((button) => {
    if (button.dataset.pageTarget) {
      button.addEventListener("click", () => handlePageButtons(button.dataset.pageTarget));
    }
  });

  authTabs.forEach((tab) => {
    tab.addEventListener("click", () => setAuthMode(tab.dataset.authMode));
  });

  ideaFilters.addEventListener("click", handleFilterClick);
  ideaList.addEventListener("click", handleIdeaListClick);
  recommendations.addEventListener("click", handleTeammateClick);
  teammateModalBody.addEventListener("click", handleTeammateClick);
  teammateDetail.addEventListener("click", handleTeammateDetailClick);
  if (helpBoard) {
    helpBoard.addEventListener("click", handleHelpResolve);
  }
  if (exploreSearch) {
    exploreSearch.addEventListener("input", handleExploreInput);
  }
  if (exploreReset) {
    exploreReset.addEventListener("click", () => {
      state.exploreQuery = "";
      renderExplore();
      if (exploreSearch) exploreSearch.value = "";
    });
  }

  document.addEventListener("click", handleTopbarNavClick);
  document.addEventListener("click", handleModalOpenClick);
  document.addEventListener("click", handleTourOpenClick);
  document.addEventListener("click", handleHomeRailClick);
  document.addEventListener("click", handleDashboardStatClick);

  menuButton.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  closeTeammateModal.addEventListener("click", closeTeammateModalPopup);
  closeIdeasModal.addEventListener("click", closeIdeasModalPopup);
  closeEventsModal.addEventListener("click", closeEventsModalPopup);
  openIdeasPage.addEventListener("click", openIdeasFullPage);
  openEventsPage.addEventListener("click", openEventsFullPage);
  closeTourModal.addEventListener("click", closeTour);
  closeDashboardStatModal.addEventListener("click", closeDashboardStatModalPopup);
  prevTourStep.addEventListener("click", () => moveTour(-1));
  nextTourStep.addEventListener("click", () => {
    if (state.tourStep >= tourSteps.length - 1) {
      closeTour();
      return;
    }
    moveTour(1);
  });
  teammateModal.addEventListener("click", (event) => {
    if (event.target === teammateModal) {
      closeTeammateModalPopup();
    }
  });
  ideasModal.addEventListener("click", (event) => {
    if (event.target === ideasModal) {
      closeIdeasModalPopup();
    }
  });
  eventsModal.addEventListener("click", (event) => {
    if (event.target === eventsModal) {
      closeEventsModalPopup();
    }
  });
  tourModal.addEventListener("click", (event) => {
    if (event.target === tourModal) {
      closeTour();
    }
  });
  dashboardStatModal.addEventListener("click", (event) => {
    if (event.target === dashboardStatModal) {
      closeDashboardStatModalPopup();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeTeammateModalPopup();
      closeIdeasModalPopup();
      closeEventsModalPopup();
      closeTour();
      closeDashboardStatModalPopup();
    }
  });

  window.addEventListener("hashchange", () => {
    const hashPage = window.location.hash.replace("#", "");
    if (hashPage && pages.some((page) => page.id === hashPage) && hashPage !== state.activePage) {
      setPage(hashPage);
    }
  });

  (async () => {
    const initialPage = window.location.hash.replace("#", "") || "landing";
    setPage(pages.some((page) => page.id === initialPage) ? initialPage : "landing", { render: false });

    await loadBackendData();
    renderCurrentPage();
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    if (state.currentUser) {
      setMessage(authMessage, `Loaded profile for ${state.currentUser.name}.`, "success");
    }
  })().catch(() => {
    state.users = sampleUsers;
    state.ideas = sampleIdeas;
    state.events = sampleEvents;
    state.helpPosts = sampleHelpPosts;
    state.activity = [{ id: 1, type: "update", text: "Welcome to CampusConnect AI.", time: "Just now" }];
    state.exploreItems = exploreItems;
    state.tourSteps = tourSteps;
    renderCurrentPage();
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });
}

init();
