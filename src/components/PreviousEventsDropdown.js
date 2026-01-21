/**
 * OtherLocationsDropdown Component
 *
 * Dropdown for navigating to previous OpenAPI Conference events
 */

import { previousEvents } from "../data/previousEvents.js";

export class OtherLocationsDropdown {
  constructor() {
    this.isOpen = false;
    this.container = null;
    this.button = null;
    this.menu = null;
  }

  /**
   * Mount component to DOM
   */
  mount() {
    this.container = document.getElementById("previous-events-dropdown");
    if (!this.container) return;

    this.render();
    this.attachEventListeners();
  }

  /**
   * Render dropdown HTML
   */
  render() {
    this.container.innerHTML = `
      <div class="relative h-full">
        <button
          id="previous-events-button"
          class="flex items-center gap-2 pr-2 desktop:pr-0 h-full text-primary-gray text-[11px] font-medium tracking-wide uppercase hover:text-primary transition-colors duration-200"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <span class="cursor-pointer">Other locations</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 8.49231L3 3.50769H9L6 8.49231Z" fill="currentColor"/>
          </svg>
        </button>
        <div
          id="previous-events-menu"
          class="absolute p-6 right-0 top-full w-50 bg-bg-dark border border-border-primary shadow-lg opacity-0 invisible transition-all duration-200 z-50 max-h-[300px] overflow-y-auto overflow-x-hidden"
          role="menu"
        >
          <ul class="w-[152px] mx-auto">
            ${previousEvents
              .map(
                (event) => `
              <li role="none" class="mb-4 last:mb-0">
                <a
                  href="${event.url}"
                  class="block hover:bg-white/5 uppercase transition-colors duration-150"
                  role="menuitem"
                >
                  <div class="block text-[13px] pb-2 tracking-wide text-primary font-medium leading-[14px]">${event.name}</div>
                  <div class="block text-[11px] text-primary-gray tracking-wide">${event.date}</div>
                </a>
              </li>
            `,
              )
              .join("")}
          </ul>
        </div>
      </div>
    `;

    this.button = document.getElementById("previous-events-button");
    this.menu = document.getElementById("previous-events-menu");
    this.chevron = this.button.querySelector("svg");
  }

  /**
   * Attach event listeners
   */
  attachEventListeners() {
    // Toggle on button click
    this.button.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggle();
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (this.isOpen && !this.container.contains(e.target)) {
        this.close();
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this.close();
        this.button.focus();
      }
    });
  }

  /**
   * Toggle dropdown
   */
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  /**
   * Open dropdown
   */
  open() {
    this.isOpen = true;
    this.button.setAttribute("aria-expanded", "true");
    this.menu.classList.remove("opacity-0", "invisible");
    this.menu.classList.add("opacity-100", "visible");
    this.chevron.classList.add("rotate-180");
  }

  /**
   * Close dropdown
   */
  close() {
    this.isOpen = false;
    this.button.setAttribute("aria-expanded", "false");
    this.menu.classList.add("opacity-0", "invisible");
    this.menu.classList.remove("opacity-100", "visible");
    this.chevron.classList.remove("rotate-180");
  }
}
