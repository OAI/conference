/**
 * DualHeaderSection Component
 *
 * A clickable promotional section with title, subtitle, and image/icon
 * Used for "Want to learn more?" and "Subscribe" sections
 */

import { asset } from "../config.js";

export class DualHeaderSection {
  constructor(options = {}) {
    this.title = options.title || "";
    this.subtitle = options.subtitle || "";
    this.backgroundColor = options.backgroundColor || "white";
    this.imageUrl = options.imageUrl || null;
    this.iconType = options.iconType || null; // 'plus' or 'arrow-down'
    this.imageAlt = options.imageAlt || "";
    this.href = options.href || "#";
  }

  /**
   * Determine CSS classes based on background color
   */
  getColorClasses() {
    const textColor =
      this.backgroundColor === "white"
        ? "text-text-on-green"
        : "text-text-primary";
    const subtitleColor =
      this.backgroundColor === "white"
        ? "text-primary-gray-on-white"
        : "text-text-secondary";
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
    const subtitleHtml = this.subtitle
      ? `<div class="text-sm tablet:text-md desktop:text-xl desktop-xxl:text-2xl tracking-widest ${subtitleColor} uppercase font-bold transition-colors duration-200 ease-in-out group-hover:text-text-on-green">
          ${this.subtitle}
        </div>`
      : "";

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
}
