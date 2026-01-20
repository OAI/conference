var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// src/config.js
var ASSET_VERSION = "1";
var BASE_PATH = (() => {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    const isDevelopment = hostname === "localhost" || hostname === "127.0.0.1";
    return isDevelopment ? "" : "";
  }
  return "";
})();
function asset(path) {
  if (!path.startsWith("/")) {
    console.warn(`Asset path should start with /: ${path}`);
    return `${BASE_PATH}/${path}?v=${ASSET_VERSION}`;
  }
  return `${BASE_PATH}${path}?v=${ASSET_VERSION}`;
}

// src/components/SocialIcons.js
var SocialIcons = class {
  constructor() {
    this.linkedInUrl = "https://www.linkedin.com/company/open-api-initiative/";
    this.youtubeUrl = "https://www.youtube.com/@OpenApi";
    this.blueskyUrl = "https://bsky.app/profile/openapis.org";
  }
  /**
   * Render the social icons HTML
   * @returns {string} HTML string
   */
  render() {
    return `
      <div class="flex items-center gap-6 desktop:gap-10 h-11">
        <!-- LinkedIn Icon -->
        <a
          href="${this.linkedInUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="w-11 h-11 flex items-center justify-center cursor-pointer group transition-transform duration-300 hover:scale-110"
          aria-label="LinkedIn"
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_693_1541)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22 6C30.8306 6 38 13.1694 38 22C38 30.8306 30.8306 38 22 38C13.1694 38 6 30.8306 6 22C6 13.1694 13.1694 6 22 6ZM16.9977 30.9919V18.4969H12.8437V30.9919H16.9977ZM31.9739 30.9919V23.8266C31.9739 19.9885 29.9248 18.2031 27.1921 18.2031C24.9887 18.2031 24.0017 19.4149 23.4491 20.266V18.4969H19.2961C19.3512 19.6692 19.2961 30.9919 19.2961 30.9919H23.449V24.0138C23.449 23.6403 23.4759 23.2669 23.5859 23C23.8856 22.2541 24.5695 21.4813 25.7169 21.4813C27.219 21.4813 27.8208 22.6276 27.8208 24.3066V30.9919H31.9739ZM14.9487 12.4719C13.5275 12.4719 12.5989 13.4062 12.5989 14.6309C12.5989 15.8298 13.4993 16.7899 14.8938 16.7899H14.9206C16.369 16.7899 17.2706 15.8298 17.2706 14.6309C17.2437 13.4062 16.3691 12.4719 14.9487 12.4719Z"
                class="fill-white/50 group-hover:fill-primary group-active:fill-primary-green-dark transition-colors duration-200"
              />
            </g>
            <defs>
              <clipPath id="clip0_693_1541">
                <rect
                  width="44"
                  height="44"
                  fill="white"
                  transform="translate(6 6)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>

        <!-- YouTube Icon -->
        <a
          href="${this.youtubeUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="w-11 h-11 flex items-center justify-center cursor-pointer group transition-transform duration-300 hover:scale-110"
          aria-label="YouTube"
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41.1643 12.3723C40.7044 10.6512 39.3491 9.29594 37.628 8.83594C34.5083 8 22 8 22 8C22 8 9.49164 8 6.37195 8.83594C4.65117 9.29594 3.29562 10.6512 2.8357 12.3723C2 15.4916 2 22.0002 2 22.0002C2 22.0002 2 28.5087 2.8357 31.6277C3.29562 33.3488 4.65117 34.7045 6.37195 35.1644C9.49164 36 22 36 22 36C22 36 34.5083 36 37.628 35.1644C39.3491 34.7045 40.7044 33.3488 41.1643 31.6277C41.9999 28.5087 41.9999 22.0002 41.9999 22.0002C41.9999 22.0002 41.9999 15.4916 41.1643 12.3723ZM17.9998 28.0003V16.0001L28.3919 22.0002L17.9998 28.0003Z"
              class="fill-white/50 group-hover:fill-primary group-active:fill-primary-green-dark transition-colors duration-200"
            />
          </svg>
        </a>

        <!-- Bluesky Icon -->
        <a
          href="${this.blueskyUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="w-11 h-11 flex items-center justify-center cursor-pointer group transition-transform duration-300 hover:scale-110"
          aria-label="Bluesky"
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5552 7.65399C15.8157 10.7821 20.3983 17.1246 22.0808 20.5284C23.7634 17.1249 28.3457 10.7821 32.6063 7.65399C35.6804 5.39686 40.6613 3.65043 40.6613 9.20768C40.6613 10.3175 40.0107 18.5311 39.629 19.8645C38.3026 24.5005 33.469 25.6829 29.1695 24.9672C36.685 26.2182 38.5969 30.3619 34.4679 34.5056C26.6263 42.3752 23.1973 32.531 22.3182 30.0086C22.1571 29.5462 22.0818 29.3298 22.0806 29.5138C22.0795 29.3298 22.0042 29.5462 21.8431 30.0086C20.9644 32.531 17.5354 42.3755 9.69334 34.5056C5.56436 30.3619 7.47617 26.218 14.9918 24.9672C10.6921 25.6829 5.85851 24.5005 4.53224 19.8645C4.15063 18.531 3.5 10.3174 3.5 9.20768C3.5 3.65043 8.48099 5.39686 11.555 7.65399H11.5552Z"
              class="fill-white/50 group-hover:fill-primary group-active:fill-primary-green-dark transition-colors duration-200"
            />
          </svg>
        </a>
      </div>
    `;
  }
  /**
   * Mount component to a DOM element
   * @param {HTMLElement} container - Container element
   */
  mount(container) {
    if (container) {
      container.innerHTML = this.render();
    }
  }
};

// src/components/CalendarPopup.js
var CalendarPopup = class {
  constructor() {
    this.isOpen = false;
    this.container = null;
    this.eventTitle = "OpenAPI Conference Paris 2025";
    this.eventDescription = "Join us at the OpenAPI Conference in Paris. More info: https://conference.openapis.org";
    this.eventLocation = "CNIT Forest, 2 Pl. de la Defense, 92092 Puteaux, France";
    this.startDate = "2025-12-11T09:15:00";
    this.endDate = "2025-12-11T18:00:00";
    this.googleStart = "20251211T091500";
    this.googleEnd = "20251211T180000";
    this.googleCalendarUrl = this.buildGoogleCalendarUrl();
    this.outlookUrl = this.buildOutlookUrl();
    this.icons = {
      google: "M19.5 3h-3V1.5h-1.5V3h-6V1.5H7.5V3h-3C3.675 3 3 3.675 3 4.5v15c0 .825.675 1.5 1.5 1.5h15c.825 0 1.5-.675 1.5-1.5v-15c0-.825-.675-1.5-1.5-1.5zm0 16.5h-15V9h15v10.5zM6 10.5h3v3H6v-3zm4.5 0h3v3h-3v-3zm4.5 0h3v3h-3v-3z",
      apple: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z",
      outlook: "M21.5 3h-9.13c-.41 0-.8.17-1.08.46L7.2 7.54c-.28.28-.45.67-.45 1.08v9.13c0 .83.67 1.5 1.5 1.5h13.25c.83 0 1.5-.67 1.5-1.5V4.5c0-.83-.67-1.5-1.5-1.5zm0 14.25H8.25V8.62l4.08-4.12h9.17v12.75z",
      download: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
    };
  }
  /**
   * Build Google Calendar URL
   */
  buildGoogleCalendarUrl() {
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      this.eventTitle
    )}&dates=${this.googleStart}/${this.googleEnd}&details=${encodeURIComponent(
      this.eventDescription
    )}&location=${encodeURIComponent(this.eventLocation)}`;
  }
  /**
   * Build Outlook URL
   */
  buildOutlookUrl() {
    return `https://outlook.office.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(
      this.eventTitle
    )}&body=${encodeURIComponent(this.eventDescription)}&startdt=${this.startDate}&enddt=${this.endDate}&location=${encodeURIComponent(this.eventLocation)}`;
  }
  /**
   * Generate ICS file content
   */
  generateICS() {
    const uid = "openapi-conference-2025@openapis.org";
    const dtstamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//OpenAPI Conference//EN
BEGIN:VEVENT
UID:${uid}
DTSTAMP:${dtstamp}
DTSTART:20251211T091500
DTEND:20251211T180000
SUMMARY:${this.eventTitle}
DESCRIPTION:${this.eventDescription}
LOCATION:${this.eventLocation}
END:VEVENT
END:VCALENDAR`;
  }
  /**
   * Download ICS file
   */
  downloadICS() {
    const ics = this.generateICS();
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "openapi-conference.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    this.close();
  }
  /**
   * Open popup
   */
  open() {
    this.isOpen = true;
    this.render();
    document.body.style.overflow = "hidden";
    const popup = document.querySelector("[data-calendar-popup]");
    if (popup) {
      popup.focus();
    }
  }
  /**
   * Close popup
   */
  close() {
    this.isOpen = false;
    if (this.container) {
      this.container.remove();
      this.container = null;
    }
    document.body.style.overflow = "";
  }
  /**
   * Handle backdrop click
   */
  handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      this.close();
    }
  }
  /**
   * Handle escape key
   */
  handleEscapeKey(e) {
    if (e.key === "Escape" && this.isOpen) {
      this.close();
    }
  }
  /**
   * Render popup HTML
   */
  render() {
    if (!this.isOpen) return;
    const existing = document.querySelector("[data-calendar-popup]");
    if (existing) {
      existing.remove();
    }
    this.container = document.createElement("div");
    this.container.setAttribute("data-calendar-popup", "");
    this.container.innerHTML = `
      <!-- Backdrop -->
      <div
        class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        data-backdrop
        role="dialog"
        aria-modal="true"
        tabindex="-1"
      >
        <!-- Popup -->
        <div
          class="bg-black border border-primary-green-muted rounded-xl p-6 w-full"
          style="max-width: 384px"
        >
          <!-- Header -->
          <div class="flex items-center justify-between mb-6">
            <div class="text-lg font-bold text-text-primary uppercase tracking-widest">
              Add to Calendar
            </div>
            <button
              data-close-btn
              class="text-primary-gray hover:text-text-primary transition-colors"
              aria-label="Close"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          <!-- Calendar Options -->
          <div class="flex flex-col gap-3">
            <!-- Google Calendar -->
            <a
              href="${this.googleCalendarUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 p-4 rounded-lg hover:border-primary hover:bg-primary/10 active:bg-primary/20 transition-colors cursor-pointer"
              style="border: 1px solid #4d7051"
            >
              <svg class="w-5 h-5 text-primary shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="${this.icons.google}" />
              </svg>
              <span class="text-sm font-medium text-text-primary">Google Calendar</span>
            </a>

            <!-- Apple Calendar -->
            <a
              href="#"
              data-download-ics
              class="flex items-center gap-3 p-4 rounded-lg hover:border-primary hover:bg-primary/10 active:bg-primary/20 transition-colors cursor-pointer"
              style="border: 1px solid #4d7051"
            >
              <svg class="w-5 h-5 text-primary shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="${this.icons.apple}" />
              </svg>
              <span class="text-sm font-medium text-text-primary">Apple Calendar</span>
            </a>

            <!-- Outlook -->
            <a
              href="${this.outlookUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 p-4 rounded-lg hover:border-primary hover:bg-primary/10 active:bg-primary/20 transition-colors cursor-pointer"
              style="border: 1px solid #4d7051"
            >
              <svg class="w-5 h-5 text-primary shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="${this.icons.outlook}" />
              </svg>
              <span class="text-sm font-medium text-text-primary">Outlook</span>
            </a>

            <!-- Download .ics -->
            <a
              href="#"
              data-download-ics-alt
              class="flex items-center gap-3 p-4 rounded-lg hover:border-primary hover:bg-primary/10 active:bg-primary/20 transition-colors cursor-pointer"
              style="border: 1px solid #4d7051"
            >
              <svg class="w-5 h-5 text-primary shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="${this.icons.download}" />
              </svg>
              <span class="text-sm font-medium text-text-primary">Download .ics</span>
            </a>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(this.container);
    const backdrop = this.container.querySelector("[data-backdrop]");
    const closeBtn = this.container.querySelector("[data-close-btn]");
    const downloadButtons = this.container.querySelectorAll(
      "[data-download-ics], [data-download-ics-alt]"
    );
    backdrop.addEventListener("click", (e) => this.handleBackdropClick(e));
    closeBtn.addEventListener("click", () => this.close());
    this.escapeHandler = (e) => this.handleEscapeKey(e);
    document.addEventListener("keydown", this.escapeHandler);
    downloadButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.downloadICS();
      });
    });
  }
  /**
   * Initialize the popup (add event listeners to trigger buttons)
   */
  init() {
    const triggers = document.querySelectorAll("[data-calendar-trigger]");
    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        this.open();
      });
      trigger.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.open();
        }
      });
    });
  }
  /**
   * Cleanup when popup is closed
   */
  destroy() {
    if (this.escapeHandler) {
      document.removeEventListener("keydown", this.escapeHandler);
    }
    this.close();
  }
};

// src/components/AgendaRenderer.js
var AgendaRenderer = class {
  constructor(sections) {
    this.sections = sections;
    this.onItemClick = null;
  }
  /**
   * Get all clickable items (items with speakers) flattened
   */
  getClickableItems() {
    const items = [];
    this.sections.forEach((section) => {
      section.items.forEach((item) => {
        if (item.speakers && item.speakers.length > 0) {
          items.push(item);
        }
      });
    });
    return items;
  }
  /**
   * Calculate percentage widths for two blocks based on their title lengths
   * CRITICAL: Treats "TBD" as length 20 (not 3) for proper width allocation
   */
  calculateBlockPercents(title1, title2, bonus = 1.15) {
    const length1 = title1 === "TBD" ? 20 : title1.length;
    const length2 = title2 === "TBD" ? 20 : title2.length;
    let weight1 = Math.sqrt(length1);
    let weight2 = Math.sqrt(length2);
    if (weight1 > weight2) weight1 *= bonus;
    else if (weight2 > weight1) weight2 *= bonus;
    const totalWeight = weight1 + weight2;
    const width1 = Math.round(weight1 / totalWeight * 1e3) / 10;
    const width2 = Math.round((100 - width1) * 10) / 10;
    return { width1: width1 + "%", width2: width2 + "%" };
  }
  /**
   * Calculate percentage widths for three blocks based on their title lengths
   * CRITICAL: Treats "TBD" as length 20 (not 3) for proper width allocation
   */
  calculateThreeBlockPercents(title1, title2, title3, bonus = 1.15) {
    const length1 = title1 === "TBD" ? 20 : title1.length;
    const length2 = title2 === "TBD" ? 20 : title2.length;
    const length3 = title3 === "TBD" ? 20 : title3.length;
    let weight1 = Math.sqrt(length1);
    let weight2 = Math.sqrt(length2);
    let weight3 = Math.sqrt(length3);
    const maxWeight = Math.max(weight1, weight2, weight3);
    if (weight1 === maxWeight) weight1 *= bonus;
    else if (weight2 === maxWeight) weight2 *= bonus;
    else if (weight3 === maxWeight) weight3 *= bonus;
    const totalWeight = weight1 + weight2 + weight3;
    const width1 = Math.round(weight1 / totalWeight * 1e3) / 10;
    const width2 = Math.round(weight2 / totalWeight * 1e3) / 10;
    const width3 = Math.round((100 - width1 - width2) * 10) / 10;
    return { width1: width1 + "%", width2: width2 + "%", width3: width3 + "%" };
  }
  /**
   * Chunk array into pairs
   */
  chunkIntoPairs(array) {
    const pairs = [];
    for (let i = 0; i < array.length; i += 2) {
      pairs.push(array.slice(i, i + 2));
    }
    return pairs;
  }
  /**
   * Render speaker info (single speaker)
   */
  renderSpeakerInfo(speaker) {
    const tscBadge = speaker.isTscMember ? `<span class="inline-flex items-center px-1.5 py-0.5 rounded-3xl text-[10px] h-5 desktop:text-[11px] font-normal bg-primary-green-dark text-black uppercase leading-[18px] tracking-wider ml-2 whitespace-nowrap shrink-0" title="Technical Steering Committee member">TSC</span>` : "";
    const oaiBadge = speaker.isOaiMember ? `<span class="inline-flex items-center px-1.5 py-0.5 rounded-3xl text-[10px] h-5 desktop:text-[11px] font-normal bg-primary-green-dark text-black uppercase leading-[18px] tracking-wider ml-2 whitespace-nowrap shrink-0" title="OpenAPI Initiative member">OAI</span>` : "";
    return `
      <div class="flex gap-3 items-start desktop-xl:h-20 desktop-xl:items-center desktop-xl:-ml-6 desktop-xl:-mb-6 desktop-xxl:-ml-12 desktop-xxl:-mb-12">
        <!-- Avatar -->
        <div class="w-13 tablet:w-12 h-13 tablet:h-12 desktop-xl:h-20 desktop-xl:w-20 rounded-full overflow-hidden shrink-0">
          ${speaker.avatar ? `<img src="${speaker.avatar}" alt="${speaker.name}" class="w-full h-full object-cover" />` : `<div class="w-full h-full bg-primary-gray/20"></div>`}
        </div>

        <!-- Speaker Details -->
        <div class="flex flex-col gap-0.5 desktop:gap-2 tablet:gap-0">
          <div class="flex items-center text-[16px] desktop:text-xl desktop-xxl:text-[28px] leading-none py-1 tablet:py-0 font-bold text-text-primary uppercase tracking-widest group-hover:text-text-on-green transition-colors duration-200 ease-in-out">
            ${speaker.name}${tscBadge}${oaiBadge}
          </div>
          ${speaker.company ? `<div class="text-sm desktop:text-sm desktop-xxl:text-[16px] text-primary-gray uppercase group-hover:text-text-on-green tracking-widest transition-colors duration-200 ease-in-out">${speaker.company}</div>` : ""}
        </div>
      </div>
    `;
  }
  /**
   * Render two speakers overlapping
   */
  renderTwoSpeakers(speakers) {
    return `
      <div class="flex items-center">
        <div class="flex items-center -space-x-6">
          <div class="w-12 h-12 tablet:w-12 tablet:h-12 desktop-xxl:w-12 desktop-xxl:h-12 rounded-full overflow-hidden shrink-0 z-10">
            ${speakers[0].avatar ? `<img src="${speakers[0].avatar}" alt="${speakers[0].name}" class="w-full h-full object-cover" />` : `<div class="w-full h-full bg-primary-gray/20"></div>`}
          </div>
          <div class="w-12 h-12 tablet:w-12 tablet:h-12 desktop-xxl:w-12 desktop-xxl:h-12 rounded-full overflow-hidden shrink-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-full">
            ${speakers[1].avatar ? `<img src="${speakers[1].avatar}" alt="${speakers[1].name}" class="w-full h-full object-cover" />` : `<div class="w-full h-full bg-primary-gray/20"></div>`}
          </div>
        </div>
        <!-- Names stacked -->
        <div class="flex flex-col gap-0.5 ml-3 leading-sm">
          <div class="text-sm tablet:text-[16px] desktop:text-xl font-bold text-text-primary uppercase tracking-widest group-hover:text-text-on-green transition-colors duration-200 ease-in-out">
            ${speakers[0].name}
          </div>
          <div class="text-sm tablet:text-[16px] desktop:text-xl font-bold text-text-primary uppercase tracking-widest group-hover:text-text-on-green transition-colors duration-200 ease-in-out">
            ${speakers[1].name}
          </div>
        </div>
      </div>
    `;
  }
  /**
   * Render agenda item card
   */
  renderAgendaItem(item, isLastInRow = false) {
    const hoverClass = item.disableHover ? "" : "hover:bg-primary group";
    const borderClass = isLastInRow ? "" : "md:border-r";
    const isClickable = item.speakers && item.speakers.length > 0;
    const clickableClass = isClickable ? "cursor-pointer" : "";
    const dataItemId = isClickable ? `data-item-id="${item.id}"` : "";
    return `
      <div class="bg-black border-b md:border-0 md:border-b py-8 px-4 tablet:p-4 tablet:py-8 desktop:p-16 desktop-xxl:p-24 flex flex-col justify-between h-full transition-colors duration-200 ease-in-out ${hoverClass} ${borderClass} ${clickableClass} border-border-primary" ${dataItemId}>
        <!-- Time and Category -->
        <div class="flex items-center justify-between mb-2">
          <div class="text-xs tablet:text-sm text-white tablet:text-white desktop-xxl:text-[16px] uppercase tracking-widest group-hover:text-text-on-green transition-colors duration-200 ease-in-out">
            ${item.time}
            ${item.category ? `
              <span class="mx-3 text-primary-gray transition-colors duration-200 ease-in-out group-hover:text-text-on-green">/</span>
              <span class="text-primary group-hover:text-text-on-green font-medium transition-colors duration-200 ease-in-out">
                ${item.category}
              </span>
            ` : ""}
          </div>
        </div>

        <!-- Title -->
        <div class="text-2xl desktop-xxl:text-5xl font-bold text-primary uppercase tracking-tight leading-tight mb-8 tablet:mb-8 grow group-hover:text-text-on-green transition-colors duration-200 ease-in-out desktop:text-[clamp(32px,2vw+16px,48px)]">
          ${item.title}
        </div>

        <!-- Bottom Section with Speakers/Badge and Icon -->
        <div class="flex items-end justify-between mt-auto">
          <!-- Speakers or Badge -->
          <div class="flex flex-col gap-3">
            ${item.speakers && item.speakers.length === 2 ? this.renderTwoSpeakers(item.speakers) : item.speakers && item.speakers.length > 0 ? item.speakers.map((speaker) => this.renderSpeakerInfo(speaker)).join("") : item.badge ? `<div class="text-xs flex items-center text-primary-gray desktop:text-sm desktop-xxl:text-[16px] font-normal uppercase desktop-xl:-ml-6 desktop-xl:-mb-6 desktop-xxl:-ml-12 desktop-xxl:-mb-12 desktop-xl:h-20 tracking-widest group-hover:text-text-on-green transition-colors duration-200 ease-in-out">
                      ${item.badge}
                    </div>` : ""}
          </div>

          <!-- Icon (if present) -->
          ${item.icon ? `
            <div class="flex items-end justify-end shrink-0 ml-4 desktop-xl:-mb-6">
              <img src="${item.icon}" alt="" class="w-16 tablet:w-26 h-auto" />
            </div>
          ` : ""}
        </div>
      </div>
    `;
  }
  /**
   * Render section header
   */
  renderSectionHeader(section, activeBorder = false) {
    const borderTopClass = activeBorder ? "border-t" : "";
    return `
      <div class="w-full pt-12 desktop:pt-16 px-4 desktop:px-16 pb-6 desktop:pb-10 desktop-xxl:px-24 flex flex-col desktop:flex-row desktop:items-center desktop:justify-between border-b border-border-primary gap-2.5 desktop:gap-0 ${borderTopClass}">
        <div class="text-3xl tablet:text-4xl desktop-xxl:text-6xl font-bold text-text-primary uppercase tracking-wide">
          ${section.title}
        </div>
        ${section.timeRange ? `
          <div class="text-sm text-primary-gray uppercase tracking-widest leading-none">
            ${section.timeRange}
          </div>
        ` : ""}
      </div>
    `;
  }
  /**
   * Render a section with items
   */
  renderSection(section, sectionIndex) {
    let itemsHtml = "";
    if (sectionIndex === 0 && section.items.length >= 4) {
      const widths = this.calculateThreeBlockPercents(
        section.items[0].title,
        section.items[1].title,
        section.items[2].title
      );
      itemsHtml = `
        <div class="flex flex-col md:flex-row w-full h-auto tablet:h-[252px] desktop:h-[490px]">
          <div class="three-item-1" style="--width-desktop-xxl: ${widths.width1};">
            ${this.renderAgendaItem(section.items[0])}
          </div>
          <div class="three-item-2" style="--width-desktop-xxl: ${widths.width2};">
            ${this.renderAgendaItem(section.items[1])}
          </div>
          <div class="three-item-3" style="--width-desktop-xxl: ${widths.width3};">
            ${this.renderAgendaItem(section.items[2], true)}
          </div>
        </div>
      `;
      if (section.items.length > 3) {
        const remainingWidths = this.calculateBlockPercents(
          section.items[3].title,
          ""
        );
        itemsHtml += `
          <div class="w-full">
            ${this.renderAgendaItem(section.items[3], true)}
          </div>
        `;
      }
    } else {
      const pairs = this.chunkIntoPairs(section.items);
      const pairsHtml = pairs.map((pair) => {
        if (pair.length === 2) {
          const widths = this.calculateBlockPercents(
            pair[0].title,
            pair[1].title
          );
          return `
            <div class="flex flex-col md:flex-row w-full h-auto tablet:h-[252px] desktop:h-[490px] pair-container">
              <div class="pair-item-1" style="--width-desktop-xxl: ${widths.width1};">
                ${this.renderAgendaItem(pair[0])}
              </div>
              <div class="pair-item-2" style="--width-desktop-xxl: ${widths.width2};">
                ${this.renderAgendaItem(pair[1], true)}
              </div>
            </div>
          `;
        } else {
          return `
            <div class="w-full">
              ${this.renderAgendaItem(pair[0], true)}
            </div>
          `;
        }
      }).join("");
      itemsHtml = pairsHtml;
    }
    return `
      <div class="flex flex-col">
        ${this.renderSectionHeader(section, sectionIndex === 0)}
        ${itemsHtml}
      </div>
    `;
  }
  /**
   * Render all sections
   */
  render() {
    const sectionsHtml = this.sections.map((section, index) => this.renderSection(section, index)).join("");
    return sectionsHtml;
  }
  /**
   * Initialize click handlers for agenda items
   */
  initItemClickHandlers() {
    const clickableItems = document.querySelectorAll("[data-item-id]");
    const allItems = this.getClickableItems();
    clickableItems.forEach((element) => {
      element.addEventListener("click", () => {
        const itemId = element.getAttribute("data-item-id");
        const item = allItems.find((i) => i.id === itemId);
        const index = allItems.findIndex((i) => i.id === itemId);
        if (item && this.onItemClick) {
          this.onItemClick(item, index, allItems);
        }
      });
    });
  }
  /**
   * Mount to a DOM element
   */
  mount(container) {
    if (!container) {
      console.error("AgendaRenderer: Container element not found");
      return;
    }
    container.innerHTML = this.render();
    this.initItemClickHandlers();
  }
};

// src/components/AgendaModal.js
var AgendaModal = class {
  constructor() {
    this.isOpen = false;
    this.container = null;
    this.currentItem = null;
    this.currentIndex = 0;
    this.allItems = [];
    this.escapeHandler = null;
    this.touchStartX = 0;
    this.scrollPosition = 0;
  }
  /**
   * Open modal with item data
   * @param {Object} item - The agenda item to display
   * @param {number} index - Index of the item in the allItems array
   * @param {Array} allItems - All agenda items for navigation
   */
  open(item, index, allItems) {
    this.currentItem = item;
    this.currentIndex = index;
    this.allItems = allItems;
    this.isOpen = true;
    this.render();
    this.scrollPosition = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${this.scrollPosition}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    const modal = document.querySelector("[data-agenda-modal]");
    if (modal) {
      modal.focus();
    }
  }
  /**
   * Close modal
   */
  close() {
    this.isOpen = false;
    if (this.container) {
      this.container.remove();
      this.container = null;
    }
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflow = "";
    window.scrollTo(0, this.scrollPosition);
    if (this.escapeHandler) {
      document.removeEventListener("keydown", this.escapeHandler);
      this.escapeHandler = null;
    }
  }
  /**
   * Navigate to previous item
   */
  prev() {
    if (this.currentIndex > 0) {
      const newIndex = this.currentIndex - 1;
      const newItem = this.allItems[newIndex];
      this.currentItem = newItem;
      this.currentIndex = newIndex;
      this.render();
    }
  }
  /**
   * Navigate to next item
   */
  next() {
    if (this.currentIndex < this.allItems.length - 1) {
      const newIndex = this.currentIndex + 1;
      const newItem = this.allItems[newIndex];
      this.currentItem = newItem;
      this.currentIndex = newIndex;
      this.render();
    }
  }
  /**
   * Handle backdrop click
   */
  handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      this.close();
    }
  }
  /**
   * Handle escape key
   */
  handleEscapeKey(e) {
    if (e.key === "Escape" && this.isOpen) {
      this.close();
    }
  }
  /**
   * Render speaker section
   */
  renderSpeaker(speaker, item) {
    const tscBadge = speaker.isTscMember ? `<span class="inline-flex items-center px-2 py-0.5 rounded-xl text-[11px] font-normal bg-primary-green-dark text-bg-dark uppercase tracking-wider" title="Technical Steering Committee member">TSC</span>` : "";
    const oaiBadge = speaker.isOaiMember ? `<span class="inline-flex items-center px-2 py-0.5 rounded-xl text-[11px] font-normal bg-primary-green-dark text-bg-dark uppercase tracking-wider" title="OpenAPI Initiative member">OAI</span>` : "";
    const linkedinIcon = speaker.linkedin ? `<a
          href="${speaker.linkedin}"
          target="_blank"
          rel="noopener noreferrer"
          class="flex w-11 h-11 items-center justify-center text-primary-gray fill-primary-gray hover:text-primary active:text-primary-green-dark transition-colors"
          aria-label="LinkedIn profile"
        >
          <svg class="w-11 h-11" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="m22 6c8.8306 0 16 7.1694 16 16s-7.1694 16-16 16-16-7.1694-16-16 7.1694-16 16-16zm-5.0023 24.9919v-12.495h-4.154v12.495zm14.9762 0v-7.1653c0-3.8381-2.0491-5.6235-4.7818-5.6235-2.2034 0-3.1904 1.2118-3.743 2.0629v-1.7691h-4.153c.0551 1.1723 0 12.495 0 12.495h4.1529v-6.9781c0-.3735.0269-.7469.1369-1.0138.2997-.7459.9836-1.5187 2.131-1.5187 1.5021 0 2.1039 1.1463 2.1039 2.8253v6.6853zm-17.0252-18.52c-1.4212 0-2.3498.9343-2.3498 2.159 0 1.1989.9004 2.159 2.2949 2.159h.0268c1.4484 0 2.35-.9601 2.35-2.159-.0269-1.2247-.9015-2.159-2.3219-2.159z" fill="currentColor" fill-rule="evenodd"/>
          </svg>
        </a>` : "";
    const slidesButton = speaker.slidesUrl ? `<a
          href="${speaker.slidesUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center px-4 h-10 rounded-full border border-border-primary text-primary-gray hover:bg-primary hover:border-primary hover:text-bg-dark active:bg-primary-green-dark active:border-bg-dark transition-colors text-sm tracking-wider"
        >
          View Slides
        </a>` : "";
    const linkedinButton = speaker.linkedin ? `<a
          href="${speaker.linkedin}"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 flex items-center justify-center gap-2 h-10 rounded-full border border-border-primary text-primary-gray active:bg-primary-gray active:text-white transition-colors text-sm"
        >
          <svg class="w-8 h-8" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="m22 6c8.8306 0 16 7.1694 16 16s-7.1694 16-16 16-16-7.1694-16-16 7.1694-16 16-16zm-5.0023 24.9919v-12.495h-4.154v12.495zm14.9762 0v-7.1653c0-3.8381-2.0491-5.6235-4.7818-5.6235-2.2034 0-3.1904 1.2118-3.743 2.0629v-1.7691h-4.153c.0551 1.1723 0 12.495 0 12.495h4.1529v-6.9781c0-.3735.0269-.7469.1369-1.0138.2997-.7459.9836-1.5187 2.131-1.5187 1.5021 0 2.1039 1.1463 2.1039 2.8253v6.6853zm-17.0252-18.52c-1.4212 0-2.3498.9343-2.3498 2.159 0 1.1989.9004 2.159 2.2949 2.159h.0268c1.4484 0 2.35-.9601 2.35-2.159-.0269-1.2247-.9015-2.159-2.3219-2.159z" fill="currentColor" fill-rule="evenodd"/>
          </svg>
          <span class="text-sm uppercase tracking-wider">LinkedIn</span>
        </a>` : "";
    const slidesMobileButton = speaker.slidesUrl ? `<a
          href="${speaker.slidesUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 flex items-center justify-center h-10 rounded-full border border-border-primary text-primary-gray active:bg-bg-dark active:text-white transition-colors text-sm"
        >
          View Slides
        </a>` : "";
    return `
      <div class="flex flex-col gap-4">
        <!-- Desktop: horizontal layout -->
        <div class="hidden tablet:flex items-center justify-between">
          <div class="flex items-center gap-4">
            <img
              src="${speaker.avatar}"
              alt="${speaker.name}"
              class="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-text-primary uppercase tracking-wider leading-5">${speaker.name}</span>
                ${tscBadge}
                ${oaiBadge}
              </div>
              ${speaker.job || speaker.company ? `<div class="text-sm text-primary-gray uppercase tracking-widest leading-5">${[
      speaker.job,
      speaker.company
    ].filter(Boolean).join(" / ")}</div>` : ""}
            </div>
          </div>
          <div class="flex items-center gap-2">
            ${linkedinIcon}
            ${slidesButton}
          </div>
        </div>

        <!-- Mobile: vertical layout -->
        <div class="tablet:hidden">
          <img
            src="${speaker.avatar}"
            alt="${speaker.name}"
            class="w-12 h-12 object-cover mb-4 rounded-full"
          />
          <div class="flex items-center gap-2 mb-1">
            <span class="font-bold text-text-primary uppercase tracking-wider">${speaker.name}</span>
            ${tscBadge}
            ${oaiBadge}
          </div>
          ${speaker.job || speaker.company ? `<div class="text-sm text-primary-gray uppercase tracking-widest mb-4">${[
      speaker.job,
      speaker.company
    ].filter(Boolean).join(" / ")}</div>` : ""}
          <div class="flex gap-2">
            ${linkedinButton}
            ${slidesMobileButton}
          </div>
        </div>
      </div>
    `;
  }
  /**
   * Render modal HTML
   */
  render() {
    if (!this.isOpen || !this.currentItem) return;
    const existing = document.querySelector("[data-agenda-modal]");
    if (existing) {
      existing.remove();
    }
    const item = this.currentItem;
    const hasPrev = this.currentIndex > 0;
    const hasNext = this.currentIndex < this.allItems.length - 1;
    const nextItem = hasNext ? this.allItems[this.currentIndex + 1] : null;
    const timeRange = nextItem ? `${item.time} \u2014 ${nextItem.time}` : item.time;
    const speakersHtml = item.speakers && item.speakers.length > 0 ? item.speakers.map((s) => this.renderSpeaker(s, item)).join("") : "";
    this.container = document.createElement("div");
    this.container.setAttribute("data-agenda-modal", "");
    this.container.innerHTML = `
      <!-- Backdrop - visible on tablet+ -->
      <div
        class="fixed inset-0 z-50 bg-bg-dark tablet:bg-bg-dark/94 flex items-center justify-center"
        data-backdrop
        role="dialog"
        aria-modal="true"
        tabindex="-1"
      >
        <!-- Modal -->
        <div
          class="bg-bg-dark w-full h-full tablet:h-[min(820px,85vh)] tablet:max-w-[960px] flex flex-col overflow-hidden tablet:border tablet:border-border-primary relative"
        >
          <button
            data-close-btn
            class="text-primary-gray stroke-primary-gray absolute z-10 h-10 w-10 top-6 right-6 bg-bg-dark hover:text-text-primary hover:stroke-black transition-colors border cursor-pointer rounded-full flex items-center justify-center"
            aria-label="Close"
          >
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <g opacity="1">
                <path d="M18 6L6 18" stroke="currentColor"/>
                <path d="M6 6L18 18" stroke="currentColor"/>
              </g>
            </svg>
          </button>

          <!-- Scrollable content -->
          <div class="flex-1 overflow-y-auto px-6 p-16 tablet:px-16 gap-6">
            <!-- Header with time/category -->
            <div class="grid grid-cols-[min(44px)_40px_200px] items-center mb-6 text-sm leading-5 text-text-primary uppercase tracking-widest">
              <span>${item.time}</span>${item.category ? `<span class="text-center">/</span><span class="font-semibold pl-1">${item.category}</span>` : ""}
            </div>

            <!-- Title -->
            <h2 class="text-2xl tablet:text-[44px] font-bold text-text-primary uppercase tracking-tight leading-[28px] tablet:leading-[52px]">
              ${item.title}
            </h2>

            <!-- Time Range -->
            <div class="py-6 text-sm text-primary-gray uppercase tracking-widest">
              ${timeRange}
            </div>

            <!-- Speaker(s) -->
            ${speakersHtml ? `<div class="mb-10">${speakersHtml}</div>` : ""}

            <!-- Description -->
            ${item.description ? `<p class="text-text-primary text-[16px] leading-[24px]">${item.description}</p>` : ""}
          </div>

          <!-- Navigation footer -->
          <div class="flex [&:has(button:not(:disabled):hover)>div]:bg-primary [&:has(button:not(:disabled):active)>div]:bg-primary-green-dark">
            <button
              data-prev-btn
              class="flex-1 py-4 h-20 border-t border-border-primary flex items-center justify-center gap-2 text-sm uppercase tracking-widest transition-colors ${hasPrev ? "text-text-primary hover:bg-primary cursor-pointer hover:border-t-primary active:bg-primary-green-dark" : "text-primary-gray/50 cursor-not-allowed"}"
              ${!hasPrev ? "disabled" : ""}
            >
              <svg width="25" height="13" viewBox="0 0 25 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.375 2.5L1.375 6.5L5.375 10.5" stroke="currentColor"/>
                <path d="M1.625 6.5H24.125" stroke="currentColor"/>
              </svg>
              Previous
            </button>
            <div class="w-px bg-border-primary transition-colors"></div>
            <button
              data-next-btn
              class="flex-1 py-4 border-t border-border-primary flex h-20 items-center justify-center gap-2 text-sm uppercase tracking-widest transition-colors ${hasNext ? "text-text-primary hover:bg-primary cursor-pointer hover:border-t-primary active:bg-primary-green-dark" : "text-primary-gray/50 cursor-not-allowed"}"
              ${!hasNext ? "disabled" : ""}
            >
              Next
              <svg width="25" height="13" viewBox="0 0 25 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.625 2.5L23.625 6.5L19.625 10.5" stroke="currentColor"/>
                <path d="M23.375 6.5H0.875" stroke="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(this.container);
    const backdrop = this.container.querySelector("[data-backdrop]");
    const closeBtn = this.container.querySelector("[data-close-btn]");
    const prevBtn = this.container.querySelector("[data-prev-btn]");
    const nextBtn = this.container.querySelector("[data-next-btn]");
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        this.close();
      }
    });
    closeBtn.addEventListener("click", () => this.close());
    if (prevBtn && !prevBtn.disabled) {
      prevBtn.addEventListener("click", () => this.prev());
    }
    if (nextBtn && !nextBtn.disabled) {
      nextBtn.addEventListener("click", () => this.next());
    }
    this.escapeHandler = (e) => this.handleEscapeKey(e);
    document.addEventListener("keydown", this.escapeHandler);
    const modal = this.container.querySelector("[data-backdrop] > div");
    let touchStartY = 0;
    modal.addEventListener(
      "touchstart",
      (e) => {
        this.touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      },
      { passive: true }
    );
    modal.addEventListener(
      "touchend",
      (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const diffX = this.touchStartX - touchEndX;
        const diffY = touchStartY - touchEndY;
        const threshold = 50;
        if (Math.abs(diffX) > threshold && Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX > 0) {
            this.next();
          } else {
            this.prev();
          }
        }
      },
      { passive: true }
    );
  }
  destroy() {
    if (this.escapeHandler) {
      document.removeEventListener("keydown", this.escapeHandler);
    }
    this.close();
  }
};

// src/components/DualHeaderSection.js
var DualHeaderSection = class {
  constructor(options = {}) {
    this.title = options.title || "";
    this.subtitle = options.subtitle || "";
    this.backgroundColor = options.backgroundColor || "white";
    this.imageUrl = options.imageUrl || null;
    this.iconType = options.iconType || null;
    this.imageAlt = options.imageAlt || "";
    this.href = options.href || "#";
  }
  /**
   * Determine CSS classes based on background color
   */
  getColorClasses() {
    const textColor = this.backgroundColor === "white" ? "text-text-on-green" : "text-text-primary";
    const subtitleColor = this.backgroundColor === "white" ? "text-primary-gray-on-white" : "text-text-secondary";
    const bgClass = this.backgroundColor === "white" ? "bg-white" : "bg-black";
    return { textColor, subtitleColor, bgClass };
  }
  /**
   * Render the icon based on type
   */
  renderIcon() {
    if (this.iconType === "plus") {
      return `
        <div class="w-12 h-12 tablet:w-12 tablet:h-12 desktop:w-24 desktop:h-24 bg-black rounded-full flex items-center justify-center border border-border-primary cursor-pointer hover:border-primary-dark transition-colors duration-300">
          <img
            class="w-4 h-4 tablet:w-5 tablet:h-5"
            src="${asset("/images/plus.svg")}"
            alt="Plus icon"
          />
        </div>
      `;
    } else if (this.iconType === "arrow-down") {
      return `
        <div class="w-12 h-12 tablet:w-12 tablet:h-12 desktop:w-24 desktop:h-24 bg-black rounded-full flex items-center justify-center border border-border-primary cursor-pointer hover:border-primary-dark transition-colors duration-300">
          <svg
            class="w-5 h-5 tablet:w-7 tablet:h-7 text-primary-green-muted"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M5 8h14l-7 11z" />
          </svg>
        </div>
      `;
    }
    return "";
  }
  /**
   * Render the image or icon section
   */
  renderMedia() {
    if (this.imageUrl) {
      return `
        <img
          src="${this.imageUrl}"
          alt="${this.imageAlt}"
          class="h-[33px] tablet:h-14 desktop:h-24 object-contain"
        />
      `;
    } else if (this.iconType) {
      return this.renderIcon();
    }
    return "";
  }
  /**
   * Create the component HTML
   */
  render() {
    const { textColor, subtitleColor, bgClass } = this.getColorClasses();
    const subtitleHtml = this.subtitle ? `<div class="text-sm tablet:text-md desktop:text-xl desktop-xxl:text-2xl tracking-widest ${subtitleColor} uppercase font-bold transition-colors duration-200 ease-in-out group-hover:text-text-on-green">
          ${this.subtitle}
        </div>` : "";
    return `
      <div class="px-2 tablet:px-0 mt-10 tablet:mt-0 mb-2">
        <a
          href="${this.href}"
          target="_blank"
          rel="noopener noreferrer"
          class="group ${bgClass} p-4 tablet:p-4 desktop:p-8 desktop:px-16 desktop-xxl:px-24 flex flex-col tablet:flex-row h-[181px] tablet:h-[104px] desktop:h-[210px] desktop-xxl:h-[280px] items-center justify-center tablet:justify-between rounded-4xl tablet:rounded-none hover:bg-primary active:bg-primary-green-dark transition-colors duration-200 ease-in-out cursor-pointer"
        >
          <!-- Title and Subtitle -->
          <div class="flex flex-col gap-y-1 tablet:gap-y-1 justify-center text-center tablet:text-left">
            <div class="text-2xl desktop:text-[44px] desktop-xxl:text-7xl uppercase font-bold ${textColor} tracking-wide transition-colors duration-200 ease-in-out group-hover:text-text-on-green">
              ${this.title}
            </div>
            ${subtitleHtml}
          </div>

          <!-- Logo/Icon -->
          <div class="flex items-center justify-center mt-3 tablet:mt-0 pt-4 tablet:pt-0">
            ${this.renderMedia()}
          </div>
        </a>
      </div>
    `;
  }
  /**
   * Mount component to a container element
   */
  mount(container) {
    if (!container) {
      console.error("DualHeaderSection: Container element not found");
      return;
    }
    container.innerHTML = this.render();
  }
};

// src/components/PreviousEventsGallery.js
var PreviousEventsGallery = class {
  constructor() {
    __publicField(this, "handleScroll", () => {
      if (this.sliderRef) {
        const scrollLeft = this.sliderRef.scrollLeft;
        const slideWidth = this.sliderRef.clientWidth;
        const newSlide = Math.round(scrollLeft / slideWidth);
        if (newSlide !== this.currentSlide) {
          this.currentSlide = newSlide;
          this.updateDots();
        }
      }
    });
    this.rows = [
      [
        { url: asset("/images/photos/photo_row_1_1.jpg"), alt: "Event 1" },
        { url: asset("/images/photos/photo_row_1_2.jpg"), alt: "Event 2" },
        { url: asset("/images/photos/photo_row_1_3.jpg"), alt: "Event 3" },
        { url: asset("/images/photos/photo_row_1_4.jpg"), alt: "Event 4" }
      ],
      [
        { url: asset("/images/photos/photo_row_2_1.jpg"), alt: "Event 5" },
        { url: asset("/images/photos/photo_row_2_2.jpg"), alt: "Event 6" },
        { url: asset("/images/photos/photo_row_2_3.jpg"), alt: "Event 7" },
        { url: asset("/images/photos/photo_row_2_4.jpg"), alt: "Event 8" }
      ],
      [
        { url: asset("/images/photos/photo_row_3_1.jpg"), alt: "Event 9" },
        { url: asset("/images/photos/photo_row_3_2.jpg"), alt: "Event 10" },
        { url: asset("/images/photos/photo_row_3_3.jpg"), alt: "Event 11" },
        { url: asset("/images/photos/photo_row_3_4.jpg"), alt: "Event 12" }
      ]
    ];
    this.allImages = this.rows.flat();
    this.currentSlide = 0;
    this.sliderRef = null;
    this.container = null;
  }
  goToSlide(index) {
    if (this.sliderRef) {
      const slideWidth = this.sliderRef.clientWidth;
      this.sliderRef.scrollTo({
        left: index * slideWidth,
        behavior: "smooth"
      });
    }
  }
  updateDots() {
    const dots = this.container.querySelectorAll("[data-dot]");
    dots.forEach((dot, index) => {
      if (index === this.currentSlide) {
        dot.style.backgroundColor = "#47c552";
      } else {
        dot.style.backgroundColor = "#333";
      }
    });
  }
  renderMobileSlider() {
    const slidesHtml = this.allImages.map(
      (image) => `
      <div class="w-full shrink-0 snap-center h-full">
        <div
          class="w-full h-full"
          style="background-image: url('${image.url}'); background-size: cover; background-position: center;"
        ></div>
      </div>
    `
    ).join("");
    const dotsHtml = this.allImages.map(
      (image, index) => `
      <button
        type="button"
        data-dot="${index}"
        class="w-2 h-2 rounded-full transition-colors duration-200"
        style="background-color: ${index === 0 ? "#47c552" : "#333"};"
        aria-label="Go to slide ${index + 1}"
      ></button>
    `
    ).join("");
    return `
      <div class="tablet:hidden bg-black relative h-[400px]">
        <!-- Slider Container -->
        <div
          data-slider
          class="flex h-full overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
          style="-webkit-overflow-scrolling: touch; touch-action: pan-x pan-y;"
        >
          ${slidesHtml}
        </div>

        <!-- Gradient Overlay -->
        <div class="absolute bottom-0 left-0 w-full h-16 bg-linear-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>

        <!-- Navigation Dots -->
        <div class="flex absolute bottom-7 z-20 justify-center items-center gap-3 w-full">
          ${dotsHtml}
        </div>
      </div>
    `;
  }
  renderDesktopGrid() {
    const rowsHtml = this.rows.map((row) => {
      const imagesHtml = row.map(
        (image) => `
        <div
          class="w-1/4 aspect-4/3 overflow-hidden bg-center bg-no-repeat bg-cover"
          style="background-image: url('${image.url}')"
        ></div>
      `
      ).join("");
      return `<div class="flex flex-row">${imagesHtml}</div>`;
    }).join("");
    return `
      <div class="hidden tablet:block">
        ${rowsHtml}
      </div>
    `;
  }
  render() {
    return `
      <section class="w-full bg-bg-dark px-2 tablet:px-0">
        <!-- Gallery Container with border -->
        <div class="border border-primary-green-muted tablet:border-0 rounded-4xl tablet:rounded-none overflow-hidden relative">
          ${this.renderMobileSlider()}
          ${this.renderDesktopGrid()}
        </div>
      </section>
    `;
  }
  attachEventListeners() {
    this.sliderRef = this.container.querySelector("[data-slider]");
    if (this.sliderRef) {
      this.sliderRef.addEventListener("scroll", this.handleScroll);
    }
    const dots = this.container.querySelectorAll("[data-dot]");
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => this.goToSlide(index));
    });
  }
  mount(container) {
    if (!container) {
      console.error("PreviousEventsGallery: Container element not found");
      return;
    }
    this.container = container;
    container.innerHTML = this.render();
    this.attachEventListeners();
  }
  destroy() {
    if (this.sliderRef) {
      this.sliderRef.removeEventListener("scroll", this.handleScroll);
    }
  }
};

// src/data/agenda.js
var agendaSections = [
  {
    id: "foundations",
    title: "Foundations",
    timeRange: "08:30 \u2014 10:40",
    items: [
      {
        id: "breakfast",
        time: "08:30",
        category: "",
        title: "Executive Breakfast",
        badge: "Invite Only",
        speakers: [],
        icon: asset("/images/break-fest.svg"),
        disableHover: true
      },
      {
        id: "1",
        time: "09:15",
        category: "Foundations",
        title: "Conference Welcome and OpenAPI in the Age of AI",
        description: "Welcome to the OpenAPI Conference! We have an exciting program to share, with presentations talking about new specifications as well as presentations that dive into practices, applications, and an outlook of things are going. We also we have a brief look of where OpenAPI is situated in the age of AI and MCP, and how things are going to develope after the recent publication of version 3.2 of the specification.",
        speakers: [
          {
            name: "Erik Wilde",
            job: "Head of Enterprise Strategy",
            company: "Jentic",
            avatar: asset("/images/speakers/Erik.jpg"),
            linkedin: "https://www.linkedin.com/in/erikwilde/",
            isOaiMember: true
          }
        ]
      },
      {
        id: "2",
        time: "09:45",
        category: "Foundations",
        title: "What's new in OpenAPI 3.2",
        description: "Keeping up with all the new standards all the time can be hard work! Instead, come to this session and get an overview of what's new in the OpenAPI 3.2 release so you know what to expect when it's time to upgrade. You'll hear about support for more HTTP methods, multipart formats, and for handling the full query string as one input. There's a big upgrade to tags, allowing nesting, multiple tag types, and more metadata - replacing the extensions you're probably already using with tags. Also included are document identities, security scheme additions, and upgraded support for XML-format APIs. Come along to learn more and prepare for the future!",
        speakers: [
          {
            name: "Lorna Mitchell",
            job: "API Architect",
            company: "TM Forum",
            avatar: asset("/images/speakers/Lorna.jpg"),
            linkedin: "https://www.linkedin.com/in/lornajane/",
            isTscMember: true,
            isOaiMember: true
          }
        ]
      },
      {
        id: "3",
        time: "10:15",
        category: "Foundations",
        title: "Data Contracts: Treating Data as APIs",
        description: "APIs brought order to software development through contracts, lifecycle management, and clear ownership. Yet in data, chaos often reigns: schema drift, silent breakages, and no shared language between producers and consumers. Enter the Open Data Contract Standard (ODCS), an open initiative under the Linux Foundation that applies API thinking to data. Think of OpenAPI, but for data: a contract-first approach that enables robust data pipelines, clearly defined interfaces, and enforceable guarantees across teams. This talk will show how ODCS enables API-like discipline in data sharing, supports contract-driven development for data products, and introduces schema validation and lifecycle management into data workflows. These capabilities lay the foundation for scalable data marketplaces within organizations, making data assets discoverable, reliable, and reusable. As an outlook, we'll explore the emerging Open Data Product Standard (ODPS), which builds on ODCS by grouping contracts into coherent, reusable building blocks. Together, ODCS and ODPS pave the way for a composable data architecture that aligns with data mesh and data-as-a-product principles.",
        speakers: [
          {
            name: "Dr. Simon Harrer",
            job: "Co-Founder and CEO",
            company: "Entropy Data",
            avatar: asset("/images/speakers/Simon.jpg"),
            linkedin: "https://www.linkedin.com/in/simonharrer/"
          }
        ]
      }
    ]
  },
  {
    id: "practices",
    title: "Practices",
    timeRange: "11:00 \u2014 12:55",
    items: [
      {
        id: "4",
        time: "11:00",
        category: "Practices",
        title: "From Zero to Spec-Hero: Eliminating Lean Wastes When Adopting OpenAPI",
        description: "Many organisations recognise the value of the OpenAPI Specification yet struggle to make it part of their everyday API delivery. In this session you'll learn how to treat OpenAPI not as a checkbox, but as a Lean instrument for eliminating waste in API design, implementation and consumption. We'll unpack the six major barriers that keep teams from transitioning, map each barrier to a Lean waste, and then walk through a practical adoption roadmap\u2014starting from one API, embedding spec-first thinking, applying governance and tooling, and measuring the outcomes. If you're ready to move from spec-ignored to spec-embedded, this talk shows you how.",
        speakers: [
          {
            name: "Marjukka Niinioja",
            job: "Founding Partner",
            company: "Osaango",
            avatar: asset("/images/speakers/Marjukka.jpg"),
            linkedin: "https://www.linkedin.com/in/marjukkaniinioja/"
          }
        ]
      },
      {
        id: "5",
        time: "11:30",
        category: "Practices",
        title: "How the Dutch Government Uses an OpenAPI-First Approach to Leverage Developer Experience",
        description: "The Dutch government recently launched a new OpenAPI-first API Register, designed to make public sector APIs easier to discover, understand, and reuse. Unlike traditional catalogs, the register is built around OpenAPI specifications as the single source of truth. This enables automated validation, consistent documentation, and machine-readable contracts right from the start. To further ensure quality and consistency, the register applies the Dutch API Strategy's API Design Rules. These rules standardize everything from security schemes to error handling, so developers know what to expect when working with APIs from different ministries or municipalities. The result is a more predictable and streamlined developer experience. The register also looks beyond single APIs. By supporting the emerging Arazzo standard, it can describe how multiple APIs interact to deliver complete government use cases \u2014 for example, registering a new business or applying for permits. This brings context and guidance to developers who need to orchestrate across domains.",
        speakers: [
          {
            name: "Dimitri van Hees",
            company: "Government of the Netherlands",
            avatar: asset("/images/speakers/Dimitri.jpg"),
            linkedin: "https://www.linkedin.com/in/dimitrivanhees/"
          }
        ]
      },
      {
        id: "6",
        time: "12:00",
        category: "Practices",
        title: "From REST to Events: API Workflow Testing and Mocking with a Single Arazzo Spec",
        description: "APIs rarely work in isolation. Real-world usage involves multiple steps across both synchronous REST calls and asynchronous events, where the outcome of each step determines the journey a particular interaction takes. While testing individual endpoints is necessary, it's not sufficient. It is equally important to validate how those endpoints and events work together as part of a real workflow. Enter the Arazzo Specification V1.1, which describes complete workflows including inputs, outputs, step dependencies, and success/failure criteria, across OpenAPI (REST) and AsyncAPI (events). In this talk, we'll demonstrate how you can leverage Arazzo to drive end-to-end API workflow testing and mocking in a completely no-code manner.",
        speakers: [
          {
            name: "Naresh Jain",
            job: "Founder, CEO",
            company: "Specmatic",
            avatar: asset("/images/speakers/Naresh.jpg"),
            linkedin: "https://www.linkedin.com/in/nareshjain/"
          }
        ]
      },
      {
        id: "7",
        time: "12:30",
        category: "Practices",
        title: "You may have OpenAPI, but is it AI-Ready?",
        description: "I have worked with and reviewed thousands of APIs across startups, enterprises, and global platforms. Almost all shipped an OpenAPI Description. Yet through the lens of AI systems and intelligent agents, most failed a simple test. They were designed for humans (often badly), not machines. In this session I will share what I have learned from helping organisations make their APIs truly AI-ready, breaking down the six dimensions that determine whether an API can be understood, reasoned over, discovered, and safely executed by intelligent systems. These include foundational compliance, developer experience, semantic clarity, agent usability, security, and AI discoverability. Using the Jentic API Scoring Framework as a visual guide, I will show how to assess AI-readiness, where most teams stumble, and the simple changes that dramatically improve both human and machine understanding.",
        speakers: [
          {
            name: "Frank Kilcommins",
            job: "Head of Enterprise Architecture",
            company: "Jentic",
            avatar: asset("/images/speakers/Frank.jpg"),
            linkedin: "https://www.linkedin.com/in/frank-kilcommins",
            isOaiMember: true
          }
        ]
      }
    ]
  },
  {
    id: "applications",
    title: "Applications",
    timeRange: "14:00 \u2014 15:25",
    items: [
      {
        id: "8",
        time: "14:00",
        category: "Applications",
        title: "What's All The Fuss About TypeSpec?",
        description: "Ok, so you know OpenAPI and you love OpenAPI. You cannot imagine any other means to describe your APIs. You understand Operations Objects, Security Schemes, and the role Schema Objects play in well-described request and response payloads. You trust it, and so does your developer community. Enter TypeSpec, the new kid on the block for modelling APIs. In your ongoing love affair with OpenAPI, why should you care? In this session we'll take a look at TypeSpec from the angle of an ardent OpenAPI fan and look at what TypeSpec can actually do for you.",
        speakers: [
          {
            name: "Chris Wood",
            job: "Principal Architect",
            company: "Ozone API",
            avatar: asset("/images/speakers/Chris.jpg"),
            linkedin: "https://www.linkedin.com/in/sensiblewood/",
            isOaiMember: true,
            isOaiMember: true
          }
        ]
      },
      {
        id: "9",
        time: "14:30",
        category: "Applications",
        title: "Control Surfaces in OpenAPI: Designing Specs for Task, Plan, and Agent Modes",
        description: "Your API is a control panel \u2014 but what controls should your OpenAPI specification expose? The answer depends on whether you're building for tasks, plans, or agents. A simple task needs input schemas and error responses. A multi-step plan requires lifecycle endpoints (pause/resume) and progress schemas. An autonomous agent demands budget parameters, approval callbacks, and emergency stop operations. Get the spec wrong, and you'll frustrate users trying to pause an atomic operation or micromanage a self-optimizing system. This talk explores how different AI operational modes\u2014task, plan, and agent\u2014require fundamentally different API control surfaces, and how to express these in OpenAPI. Through real-world specification examples and anti-patterns, you'll learn what endpoints, parameters, and schemas each mode needs, why mode mismatches cause design pain, and how to structure your OpenAPI specifications to expose the right level of control. Whether you're documenting a simple REST endpoint or a complex autonomous system, understanding control surfaces will help you design more intuitive and maintainable OpenAPI specifications.",
        speakers: [
          {
            name: "Miguel Quintero",
            job: "Technical Trainer",
            company: "Postman",
            avatar: asset("/images/speakers/Miguel.jpg"),
            linkedin: "https://www.linkedin.com/in/miguel-quintero-a558531/",
            isTscMember: true,
            isOaiMember: true
          }
        ]
      },
      {
        id: "10",
        time: "15:00",
        category: "Applications",
        title: "Spec-First API Designs Without Codegen",
        description: "The talk is about keeping the two things that matter at the centre: The users and the spec, the OpenAPI spec and how to design your code around it. It talks about the various real life challenges of not doing this and things like generating code and how popular open source tooling can address this. It gives a practical way to approach this problem and work with teams at scale.",
        speakers: [
          {
            name: "Rahul D\xE9",
            job: "VP, Platform and Site Reliability Engineering, Public Cloud",
            company: "Citi",
            avatar: asset("/images/speakers/Rahul.jpg"),
            linkedin: "https://www.linkedin.com/in/lispyclouds"
          }
        ]
      }
    ]
  },
  {
    id: "looking-glass",
    title: "The Looking Glass",
    timeRange: "15:55 \u2014 16:50",
    items: [
      {
        id: "11",
        time: "15:55",
        category: "The Looking Glass",
        title: "OpenAPI and Spring-Boot 4 - What's New?",
        description: "Spring Boot remains the most widely used Java framework for modern application development, powering millions of applications globally. With Spring Boot 4, the framework enters a new era of performance, cloud-native support, and developer productivity. This talk will showcase the key innovations in Spring Boot 4 that make it a powerful choice for building scalable APIs. A major focus will be on OpenAPI and its integration via springdoc-openapi, a community-driven project that now exceeds 30 million downloads per month. We'll dive into the core features of springdoc-openapi, including support for Scalar project in addition to swagger-ui, Spring MVC, WebFlux, GraalVM, Kotlin. You'll also learn how to leverage advanced features like actuator integration, Javadoc reuse for API descriptions, HATEOAS, Data REST, and OAuth2 security.",
        speakers: [
          {
            name: "Badr Nass Lahsen",
            job: "Lead Cloud and Security Architect",
            company: "CyberArk",
            avatar: asset("/images/speakers/Badr.jpg"),
            linkedin: "https://www.linkedin.com/in/nasslahsen/"
          }
        ]
      },
      {
        id: "12",
        time: "16:25",
        category: "The Looking Glass",
        title: "Is OpenAPI still relevant in the age of AI?",
        description: "Count the times when you said 'OpenAPI' and others heard 'OpenAI'... Just when API Design, machine-readable API documentation, and OpenAPI have finally been normalized and gained traction, AI and agents throw a wrench into the works. At a time when you can vibecode an API in minutes and instantly stand up an MCP server, how useful is it to write and maintain OpenAPI documents? Join me to examine where and how OpenAPI remains relevant for your organization & product delivery and where it's no longer that useful (and what we could do instead).",
        speakers: [
          {
            name: "Emmanuel Paraskakis",
            job: "Founder",
            company: "Level 250",
            avatar: asset("/images/speakers/Emmanuel.jpg"),
            linkedin: "https://www.linkedin.com/in/emmanuelparaskakis/"
          }
        ]
      }
    ]
  }
];

// src/main.js
function init() {
  const headerSocialContainer = document.getElementById("header-social-icons");
  if (headerSocialContainer) {
    const headerSocial = new SocialIcons();
    headerSocial.mount(headerSocialContainer);
  }
  const footerSocialMobile = document.getElementById(
    "footer-social-icons-mobile"
  );
  if (footerSocialMobile) {
    const footerSocial = new SocialIcons();
    footerSocial.mount(footerSocialMobile);
  }
  const footerSocialDesktop = document.getElementById(
    "footer-social-icons-desktop"
  );
  if (footerSocialDesktop) {
    const footerSocial = new SocialIcons();
    footerSocial.mount(footerSocialDesktop);
  }
  const calendarPopup = new CalendarPopup();
  calendarPopup.init();
  const agendaModal = new AgendaModal();
  const agendaContainer = document.getElementById("agenda-container");
  if (agendaContainer) {
    const agendaRenderer = new AgendaRenderer(agendaSections);
    agendaRenderer.onItemClick = (item, index, allItems) => {
      agendaModal.open(item, index, allItems);
    };
    agendaRenderer.mount(agendaContainer);
  }
  const learnMoreContainer = document.getElementById("learn-more-section");
  if (learnMoreContainer) {
    const learnMore = new DualHeaderSection({
      title: "Want to learn more?",
      subtitle: "Check out Masterclasses by API Masters on December 10th",
      imageUrl: asset("/images/api_masters.png"),
      imageAlt: "API Masters Logo",
      href: "https://apimasters.fr/our-masterclasses/entry/353/",
      backgroundColor: "white"
    });
    learnMore.mount(learnMoreContainer);
  }
  const galleryContainer = document.getElementById("previous-events-gallery");
  if (galleryContainer) {
    const gallery = new PreviousEventsGallery();
    gallery.mount(galleryContainer);
  }
  const subscribeContainer = document.getElementById("subscribe-section");
  if (subscribeContainer) {
    const subscribe = new DualHeaderSection({
      title: "Subscribe",
      subtitle: "For OpenAPI Initiative Updates",
      iconType: "plus",
      href: "https://www.openapis.org/#footer-outer",
      backgroundColor: "white"
    });
    subscribe.mount(subscribeContainer);
  }
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
export {
  init
};
//# sourceMappingURL=main.js.map
