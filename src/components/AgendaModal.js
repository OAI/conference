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
    document.body.style.overflow = "";

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
  renderSpeaker(speaker) {
    const jobCompany = [speaker.job, speaker.company]
      .filter(Boolean)
      .join(" / ");

    const tscBadge = speaker.isTscMember
      ? `<span class="inline-flex items-center px-2 py-0.5 rounded-xl text-[11px] font-normal bg-primary-green-dark text-white uppercase tracking-wider">TSC Member</span>`
      : "";

    // Desktop LinkedIn icon
    const linkedinIcon = speaker.linkedin
      ? `<a
          href="${speaker.linkedin}"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden tablet:flex w-11 h-11 items-center justify-center text-black hover:text-primary active:text-primary-green-dark transition-colors"
          aria-label="LinkedIn profile"
        >
          <svg class="w-11 h-11" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="m22 6c8.8306 0 16 7.1694 16 16s-7.1694 16-16 16-16-7.1694-16-16 7.1694-16 16-16zm-5.0023 24.9919v-12.495h-4.154v12.495zm14.9762 0v-7.1653c0-3.8381-2.0491-5.6235-4.7818-5.6235-2.2034 0-3.1904 1.2118-3.743 2.0629v-1.7691h-4.153c.0551 1.1723 0 12.495 0 12.495h4.1529v-6.9781c0-.3735.0269-.7469.1369-1.0138.2997-.7459.9836-1.5187 2.131-1.5187 1.5021 0 2.1039 1.1463 2.1039 2.8253v6.6853zm-17.0252-18.52c-1.4212 0-2.3498.9343-2.3498 2.159 0 1.1989.9004 2.159 2.2949 2.159h.0268c1.4484 0 2.35-.9601 2.35-2.159-.0269-1.2247-.9015-2.159-2.3219-2.159z" fill="currentColor" fill-rule="evenodd"/>
          </svg>
        </a>`
      : "";

    // Mobile LinkedIn button
    const linkedinButton = speaker.linkedin
      ? `<a
          href="${speaker.linkedin}"
          target="_blank"
          rel="noopener noreferrer"
          class="tablet:hidden flex items-center justify-center gap-2 w-full h-10 rounded-full border border-border-primary text-black active:bg-black active:text-white transition-colors"
        >
          <svg class="w-8 h-8" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="m22 6c8.8306 0 16 7.1694 16 16s-7.1694 16-16 16-16-7.1694-16-16 7.1694-16 16-16zm-5.0023 24.9919v-12.495h-4.154v12.495zm14.9762 0v-7.1653c0-3.8381-2.0491-5.6235-4.7818-5.6235-2.2034 0-3.1904 1.2118-3.743 2.0629v-1.7691h-4.153c.0551 1.1723 0 12.495 0 12.495h4.1529v-6.9781c0-.3735.0269-.7469.1369-1.0138.2997-.7459.9836-1.5187 2.131-1.5187 1.5021 0 2.1039 1.1463 2.1039 2.8253v6.6853zm-17.0252-18.52c-1.4212 0-2.3498.9343-2.3498 2.159 0 1.1989.9004 2.159 2.2949 2.159h.0268c1.4484 0 2.35-.9601 2.35-2.159-.0269-1.2247-.9015-2.159-2.3219-2.159z" fill="currentColor" fill-rule="evenodd"/>
          </svg>
          <span class="text-sm">LinkedIn</span>
        </a>`
      : "";

    return `
      <div class="flex flex-col gap-4 ">
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
                <span class="font-bold text-black uppercase tracking-wider leading-5">${
                  speaker.name
                }</span>
                ${tscBadge}
              </div>
              ${
                jobCompany
                  ? `<div class="text-[13px] text-primary-gray uppercase tracking-widest leading-5">${jobCompany}</div>`
                  : ""
              }
            </div>
          </div>
          ${linkedinIcon}
        </div>

        <!-- Mobile: vertical layout -->
        <div class="tablet:hidden">
          <img
            src="${speaker.avatar}"
            alt="${speaker.name}"
            class="w-12 h-12 object-cover mb-4 rounded-full"
          />
          <div class="flex items-center gap-2 mb-1">
            <span class="font-bold text-black uppercase tracking-wider">${
              speaker.name
            }</span>
            ${tscBadge}
          </div>
          ${
            jobCompany
              ? `<div class="text-[13px] text-primary-gray uppercase tracking-widest mb-4">${jobCompany}</div>`
              : ""
          }
          ${linkedinButton}
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

    // Render speakers
    const speakersHtml =
      item.speakers && item.speakers.length > 0
        ? item.speakers.map((s) => this.renderSpeaker(s)).join("")
        : "";

    // Create container
    this.container = document.createElement("div");
    this.container.setAttribute("data-agenda-modal", "");
    this.container.innerHTML = `
      <!-- Backdrop - visible on tablet+ -->
      <div
        class="fixed inset-0 z-50 tablet:bg-black/94 flex items-center justify-center"
        data-backdrop
        role="dialog"
        aria-modal="true"
        tabindex="-1"
      >
        <!-- Modal -->
        <div
          class="bg-white w-full h-full tablet:h-[min(820px,85vh)] tablet:max-w-[960px] flex flex-col overflow-hidden"
        >

          <!-- Scrollable content -->
          <div class="flex-1 overflow-y-auto px-6 p-16 tablet:px-16 relative gap-6">
            <button
              data-close-btn
              class="text-primary-gray stroke-primary-gray absolute h-10 w-10 top-6 right-6 hover:text-black hover:stroke-black transition-colors border cursor-pointer rounded-full flex items-center justify-center"
              aria-label="Close"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                <g opacity="1">
                  <path d="M18 6L6 18" stroke="currentColor"/>
                  <path d="M6 6L18 18" stroke="currentColor"/>              
                </g>
              </svg>
            </button>

            <!-- Header with time/category -->
            <div class="grid grid-cols-[min(44px)_40px_200px] items-center mb-6 text-[13px] leading-5 text-black uppercase tracking-widest">
              <span>${item.time}</span>${
      item.category
        ? `<span class="text-center">/</span><span class="font-semibold pl-1">${item.category}</span>`
        : ""
    }
            </div>

            <!-- Title -->
            <h2 class="text-2xl tablet:text-[44px] font-bold text-black uppercase tracking-tight leading-[28px] tablet:leading-[52px] mb-6">
              ${item.title}
            </h2>

            <!-- Speaker(s) -->
            ${speakersHtml ? `<div class="mb-10">${speakersHtml}</div>` : ""}

            <!-- Description -->
            ${
              item.description
                ? `<p class="text-black text-[16px] leading-[24px]">${item.description}</p>`
                : ""
            }
          </div>

          <!-- Navigation footer -->
          <div class="flex [&:has(button:not(:disabled):hover)>div]:bg-primary [&:has(button:not(:disabled):active)>div]:bg-primary-green-dark">
            <button
              data-prev-btn
              class="flex-1 py-4 h-20  text-black border-t border-border-primary flex items-center justify-center gap-2 text-[13px] uppercase tracking-widest transition-colors active:bg-primary-green-dark ${
                hasPrev
                  ? "hover:bg-primary cursor-pointer hover:border-t-primary"
                  : "text-primary-gray cursor-not-allowed active:bg-white"
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
              class="flex-1 py-4 text-black border-t border-border-primary flex h-20 items-center justify-center gap-2 text-[13px] uppercase tracking-widest transition-colors active:bg-primary-green-dark ${
                hasNext
                  ? "hover:bg-primary cursor-pointer hover:border-t-primary"
                  : "text-primary-gray cursor-not-allowed active:bg-white"
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
