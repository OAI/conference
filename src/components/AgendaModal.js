/**
 * AgendaModal Component
 *
 * Modal popup for displaying agenda item details
 * Responsive design: fullscreen on mobile, centered modal on tablet+
 */

export class AgendaModal {
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

    // Prevent body scroll
    this.scrollPosition = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${this.scrollPosition}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    // Focus the modal
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

    // Restore body scroll
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflow = "";
    window.scrollTo(0, this.scrollPosition);

    // Remove escape handler
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
    const tscBadge = speaker.isTscMember
      ? `<span class="inline-flex items-center px-2 py-0.5 rounded-xl text-[11px] font-normal bg-primary-green-dark text-bg-dark uppercase tracking-wider" title="Technical Steering Committee member">TSC</span>`
      : "";

    const oaiBadge = speaker.isOaiMember
      ? `<span class="inline-flex items-center px-2 py-0.5 rounded-xl text-[11px] font-normal bg-primary-green-dark text-bg-dark uppercase tracking-wider" title="OpenAPI Initiative member">OAI</span>`
      : "";

    // Desktop LinkedIn icon
    const linkedinIcon = speaker.linkedin
      ? `<a
          href="${speaker.linkedin}"
          target="_blank"
          rel="noopener noreferrer"
          class="flex w-11 h-11 items-center justify-center text-primary-gray fill-primary-gray hover:text-primary active:text-primary-green-dark transition-colors"
          aria-label="LinkedIn profile"
        >
          <svg class="w-11 h-11" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="m22 6c8.8306 0 16 7.1694 16 16s-7.1694 16-16 16-16-7.1694-16-16 7.1694-16 16-16zm-5.0023 24.9919v-12.495h-4.154v12.495zm14.9762 0v-7.1653c0-3.8381-2.0491-5.6235-4.7818-5.6235-2.2034 0-3.1904 1.2118-3.743 2.0629v-1.7691h-4.153c.0551 1.1723 0 12.495 0 12.495h4.1529v-6.9781c0-.3735.0269-.7469.1369-1.0138.2997-.7459.9836-1.5187 2.131-1.5187 1.5021 0 2.1039 1.1463 2.1039 2.8253v6.6853zm-17.0252-18.52c-1.4212 0-2.3498.9343-2.3498 2.159 0 1.1989.9004 2.159 2.2949 2.159h.0268c1.4484 0 2.35-.9601 2.35-2.159-.0269-1.2247-.9015-2.159-2.3219-2.159z" fill="currentColor" fill-rule="evenodd"/>
          </svg>
        </a>`
      : "";

    // Desktop View Slides button
    const slidesButton = speaker.slidesUrl
      ? `<a
          href="${speaker.slidesUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center px-4 h-10 rounded-full border border-border-primary text-primary-gray hover:bg-primary hover:border-primary hover:text-bg-dark active:bg-primary-green-dark active:border-bg-dark transition-colors text-sm tracking-wider"
        >
          View Slides
        </a>`
      : "";

    // Mobile LinkedIn button
    const linkedinButton = speaker.linkedin
      ? `<a
          href="${speaker.linkedin}"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 flex items-center justify-center gap-2 h-10 rounded-full border border-border-primary text-primary-gray active:bg-primary-gray active:text-white transition-colors text-sm"
        >
          <svg class="w-8 h-8" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="m22 6c8.8306 0 16 7.1694 16 16s-7.1694 16-16 16-16-7.1694-16-16 7.1694-16 16-16zm-5.0023 24.9919v-12.495h-4.154v12.495zm14.9762 0v-7.1653c0-3.8381-2.0491-5.6235-4.7818-5.6235-2.2034 0-3.1904 1.2118-3.743 2.0629v-1.7691h-4.153c.0551 1.1723 0 12.495 0 12.495h4.1529v-6.9781c0-.3735.0269-.7469.1369-1.0138.2997-.7459.9836-1.5187 2.131-1.5187 1.5021 0 2.1039 1.1463 2.1039 2.8253v6.6853zm-17.0252-18.52c-1.4212 0-2.3498.9343-2.3498 2.159 0 1.1989.9004 2.159 2.2949 2.159h.0268c1.4484 0 2.35-.9601 2.35-2.159-.0269-1.2247-.9015-2.159-2.3219-2.159z" fill="currentColor" fill-rule="evenodd"/>
          </svg>
          <span class="text-sm uppercase tracking-wider">LinkedIn</span>
        </a>`
      : "";

    // Mobile View Slides button
    const slidesMobileButton = speaker.slidesUrl
      ? `<a
          href="${speaker.slidesUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 flex items-center justify-center h-10 rounded-full border border-border-primary text-primary-gray active:bg-bg-dark active:text-white transition-colors text-sm"
        >
          View Slides
        </a>`
      : "";

    return `
      <div class="flex flex-col gap-4">
        <!-- Desktop: horizontal layout -->
        <div class="hidden tablet:flex items-center justify-between">
          <div class="flex items-center gap-4">
            ${
              speaker.avatar
                ? `<img
              src="${speaker.avatar}"
              alt="${speaker.name}"
              class="w-20 h-20 rounded-full object-cover"
            />`
                : `<div class="w-20 h-20 rounded-full bg-primary-gray/30"></div>`
            }
            <div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-text-primary uppercase tracking-wider leading-5">${
                  speaker.name
                }</span>
                ${tscBadge}
                ${oaiBadge}
              </div>
              ${
                speaker.job || speaker.company
                  ? `<div class="text-sm text-primary-gray uppercase tracking-widest leading-5">${[
                      speaker.job,
                      speaker.company,
                    ]
                      .filter(Boolean)
                      .join(" / ")}</div>`
                  : ""
              }
            </div>
          </div>
          <div class="flex items-center gap-2">
            ${linkedinIcon}
            ${slidesButton}
          </div>
        </div>

        <!-- Mobile: vertical layout -->
        <div class="tablet:hidden">
          ${
            speaker.avatar
              ? `<img
            src="${speaker.avatar}"
            alt="${speaker.name}"
            class="w-12 h-12 object-cover mb-4 rounded-full"
          />`
              : `<div class="w-12 h-12 mb-4 rounded-full bg-primary-gray/30"></div>`
          }
          <div class="flex items-center gap-2 mb-1">
            <span class="font-bold text-text-primary uppercase tracking-wider">${
              speaker.name
            }</span>
            ${tscBadge}
            ${oaiBadge}
          </div>
          ${
            speaker.job || speaker.company
              ? `<div class="text-sm text-primary-gray uppercase tracking-widest mb-4">${[
                  speaker.job,
                  speaker.company,
                ]
                  .filter(Boolean)
                  .join(" / ")}</div>`
              : ""
          }
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

    // Calculate time range (end time from next item's start time)
    const nextItem = hasNext ? this.allItems[this.currentIndex + 1] : null;
    const timeRange = nextItem ? `${item.time} — ${nextItem.time}` : item.time;

    // Render speakers
    const speakersHtml =
      item.speakers && item.speakers.length > 0
        ? item.speakers.map((s) => this.renderSpeaker(s, item)).join("")
        : "";

    // Create container
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
              <span>${item.time}</span>${
      item.category
        ? `<span class="text-center">/</span><span class="font-semibold pl-1">${item.category}</span>`
        : ""
    }
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
            ${
              item.description
                ? `<p class="text-text-primary text-[16px] leading-[24px]">${item.description}</p>`
                : ""
            }
          </div>

          <!-- Navigation footer -->
          <div class="flex [&:has(button:not(:disabled):hover)>div]:bg-primary [&:has(button:not(:disabled):active)>div]:bg-primary-green-dark">
            <button
              data-prev-btn
              class="flex-1 py-4 h-20 border-t border-border-primary flex items-center justify-center gap-2 text-sm uppercase tracking-widest transition-colors ${
                hasPrev
                  ? "text-text-primary hover:bg-primary cursor-pointer hover:border-t-primary active:bg-primary-green-dark"
                  : "text-primary-gray/50 cursor-not-allowed"
              }"
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
              class="flex-1 py-4 border-t border-border-primary flex h-20 items-center justify-center gap-2 text-sm uppercase tracking-widest transition-colors ${
                hasNext
                  ? "text-text-primary hover:bg-primary cursor-pointer hover:border-t-primary active:bg-primary-green-dark"
                  : "text-primary-gray/50 cursor-not-allowed"
              }"
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

    // Add to body
    document.body.appendChild(this.container);

    // Add event listeners
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

    // Escape key listener
    this.escapeHandler = (e) => this.handleEscapeKey(e);
    document.addEventListener("keydown", this.escapeHandler);

    // Touch swipe navigation (mobile)
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
}
