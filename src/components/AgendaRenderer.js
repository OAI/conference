/**
 * AgendaRenderer Component
 *
 * Renders agenda sections with dynamic width calculations
 * Includes special handling for "TBD" items (treats as length 20)
 */

export class AgendaRenderer {
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
    // Treat "TBD" as if it were longer to give it more width
    const length1 = title1 === "TBD" ? 20 : title1.length;
    const length2 = title2 === "TBD" ? 20 : title2.length;

    // Compute the "weight" of each title using the square root
    let weight1 = Math.sqrt(length1);
    let weight2 = Math.sqrt(length2);

    // Apply bonus to the longer block
    if (weight1 > weight2) weight1 *= bonus;
    else if (weight2 > weight1) weight2 *= bonus;

    // Normalize and convert to percentage, rounded to 0.1%
    const totalWeight = weight1 + weight2;
    const width1 = Math.round((weight1 / totalWeight) * 1000) / 10;
    const width2 = Math.round((100 - width1) * 10) / 10;

    return { width1: width1 + "%", width2: width2 + "%" };
  }

  /**
   * Calculate percentage widths for three blocks based on their title lengths
   * CRITICAL: Treats "TBD" as length 20 (not 3) for proper width allocation
   */
  calculateThreeBlockPercents(title1, title2, title3, bonus = 1.15) {
    // Treat "TBD" as if it were longer to give it more width
    const length1 = title1 === "TBD" ? 20 : title1.length;
    const length2 = title2 === "TBD" ? 20 : title2.length;
    const length3 = title3 === "TBD" ? 20 : title3.length;

    // Compute the "weight" of each title using the square root
    let weight1 = Math.sqrt(length1);
    let weight2 = Math.sqrt(length2);
    let weight3 = Math.sqrt(length3);

    // Find the maximum weight
    const maxWeight = Math.max(weight1, weight2, weight3);

    // Apply bonus to the longest block
    if (weight1 === maxWeight) weight1 *= bonus;
    else if (weight2 === maxWeight) weight2 *= bonus;
    else if (weight3 === maxWeight) weight3 *= bonus;

    // Normalize and convert to percentage, rounded to 0.1%
    const totalWeight = weight1 + weight2 + weight3;
    const width1 = Math.round((weight1 / totalWeight) * 1000) / 10;
    const width2 = Math.round((weight2 / totalWeight) * 1000) / 10;
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
    const tscBadge = speaker.isTscMember
      ? `<span class="inline-flex items-center px-1.5 py-0.5 rounded-3xl text-[10px] h-5 desktop:text-[11px] font-normal bg-primary-green-dark text-black uppercase leading-[18px] tracking-wider ml-2 whitespace-nowrap shrink-0" title="Technical Steering Committee member">TSC</span>`
      : "";

    const oaiBadge = speaker.isOaiMember
      ? `<span class="inline-flex items-center px-1.5 py-0.5 rounded-3xl text-[10px] h-5 desktop:text-[11px] font-normal bg-primary-green-dark text-black uppercase leading-[18px] tracking-wider ml-2 whitespace-nowrap shrink-0" title="OpenAPI Initiative member">OAI</span>`
      : "";

    return `
      <div class="flex gap-3 items-start desktop-xl:h-20 desktop-xl:items-center desktop-xl:-ml-6 desktop-xl:-mb-6 desktop-xxl:-ml-12 desktop-xxl:-mb-12">
        <!-- Avatar -->
        <div class="w-13 tablet:w-12 h-13 tablet:h-12 desktop-xl:h-20 desktop-xl:w-20 rounded-full overflow-hidden shrink-0">
          ${
            speaker.avatar
              ? `<img src="${speaker.avatar}" alt="${speaker.name}" class="w-full h-full object-cover" />`
              : `<div class="w-full h-full bg-primary-gray/20"></div>`
          }
        </div>

        <!-- Speaker Details -->
        <div class="flex flex-col gap-0.5 desktop:gap-2 tablet:gap-0">
          <div class="flex items-center text-[16px] desktop:text-xl desktop-xxl:text-[28px] leading-none py-1 tablet:py-0 font-bold text-text-primary uppercase tracking-widest group-hover:text-text-on-green transition-colors duration-200 ease-in-out">
            ${speaker.name}${tscBadge}${oaiBadge}
          </div>
          ${
            speaker.company
              ? `<div class="text-sm desktop:text-sm desktop-xxl:text-[16px] text-primary-gray uppercase group-hover:text-text-on-green tracking-widest transition-colors duration-200 ease-in-out">${speaker.company}</div>`
              : ""
          }
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
            ${
              speakers[0].avatar
                ? `<img src="${speakers[0].avatar}" alt="${speakers[0].name}" class="w-full h-full object-cover" />`
                : `<div class="w-full h-full bg-primary-gray/20"></div>`
            }
          </div>
          <div class="w-12 h-12 tablet:w-12 tablet:h-12 desktop-xxl:w-12 desktop-xxl:h-12 rounded-full overflow-hidden shrink-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-full">
            ${
              speakers[1].avatar
                ? `<img src="${speakers[1].avatar}" alt="${speakers[1].name}" class="w-full h-full object-cover" />`
                : `<div class="w-full h-full bg-primary-gray/20"></div>`
            }
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
            ${
              item.category
                ? `
              <span class="mx-3 text-primary-gray transition-colors duration-200 ease-in-out group-hover:text-text-on-green">/</span>
              <span class="text-primary group-hover:text-text-on-green font-medium transition-colors duration-200 ease-in-out">
                ${item.category}
              </span>
            `
                : ""
            }
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
            ${
              item.speakers && item.speakers.length === 2
                ? this.renderTwoSpeakers(item.speakers)
                : item.speakers && item.speakers.length > 0
                  ? item.speakers
                      .map((speaker) => this.renderSpeakerInfo(speaker))
                      .join("")
                  : item.badge
                    ? `<div class="text-xs flex items-center text-primary-gray desktop:text-sm desktop-xxl:text-[16px] font-normal uppercase desktop-xl:-ml-6 desktop-xl:-mb-6 desktop-xxl:-ml-12 desktop-xxl:-mb-12 desktop-xl:h-20 tracking-widest group-hover:text-text-on-green transition-colors duration-200 ease-in-out">
                      ${item.badge}
                    </div>`
                    : ""
            }
          </div>

          <!-- Icon (if present) -->
          ${
            item.icon
              ? `
            <div class="flex items-end justify-end shrink-0 ml-4 desktop-xl:-mb-6">
              <img src="${item.icon}" alt="" class="w-16 tablet:w-26 h-auto" />
            </div>
          `
              : ""
          }
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
        ${
          section.timeRange
            ? `
          <div class="text-sm text-primary-gray uppercase tracking-widest leading-none">
            ${section.timeRange}
          </div>
        `
            : ""
        }
      </div>
    `;
  }

  /**
   * Render a section with items
   */
  renderSection(section, sectionIndex) {
    let itemsHtml = "";

    // First section: 3 items in one row
    if (sectionIndex === 0 && section.items.length >= 4) {
      const widths = this.calculateThreeBlockPercents(
        section.items[0].title,
        section.items[1].title,
        section.items[2].title,
      );

      itemsHtml = `
        <div class="flex flex-col md:flex-row w-full h-auto tablet:h-[252px] desktop:h-[490px]">
          <div class="three-item-1" style="--width-desktop-xxl: ${
            widths.width1
          };">
            ${this.renderAgendaItem(section.items[0])}
          </div>
          <div class="three-item-2" style="--width-desktop-xxl: ${
            widths.width2
          };">
            ${this.renderAgendaItem(section.items[1])}
          </div>
          <div class="three-item-3" style="--width-desktop-xxl: ${
            widths.width3
          };">
            ${this.renderAgendaItem(section.items[2], true)}
          </div>
        </div>
      `;

      // Render remaining item (item[3]) if exists
      if (section.items.length > 3) {
        const remainingWidths = this.calculateBlockPercents(
          section.items[3].title,
          "",
        );

        itemsHtml += `
          <div class="w-full">
            ${this.renderAgendaItem(section.items[3], true)}
          </div>
        `;
      }
    } else {
      // Other sections: pairs layout
      const pairs = this.chunkIntoPairs(section.items);
      const pairsHtml = pairs
        .map((pair) => {
          if (pair.length === 2) {
            const widths = this.calculateBlockPercents(
              pair[0].title,
              pair[1].title,
            );
            return `
            <div class="flex flex-col md:flex-row w-full h-auto tablet:h-[252px] desktop:h-[490px] pair-container">
              <div class="pair-item-1" style="--width-desktop-xxl: ${
                widths.width1
              };">
                ${this.renderAgendaItem(pair[0])}
              </div>
              <div class="pair-item-2" style="--width-desktop-xxl: ${
                widths.width2
              };">
                ${this.renderAgendaItem(pair[1], true)}
              </div>
            </div>
          `;
          } else {
            // Single item (odd number)
            return `
            <div class="w-full">
              ${this.renderAgendaItem(pair[0], true)}
            </div>
          `;
          }
        })
        .join("");

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
    const sectionsHtml = this.sections
      .map((section, index) => this.renderSection(section, index))
      .join("");

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
}
