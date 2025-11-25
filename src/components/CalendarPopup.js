/**
 * CalendarPopup Component
 *
 * Modal popup for adding event to calendar
 * Supports Google Calendar, Outlook, Apple Calendar, and .ics download
 */

export class CalendarPopup {
  constructor() {
    this.isOpen = false;
    this.container = null;

    // Event details
    this.eventTitle = "OpenAPI Conference Paris 2025";
    this.eventDescription =
      "Join us at the OpenAPI Conference in Paris. More info: https://conference.openapis.org";
    this.eventLocation =
      "CNIT Forest, 2 Pl. de la Defense, 92092 Puteaux, France";
    this.startDate = "2025-12-11T09:15:00";
    this.endDate = "2025-12-11T18:00:00";

    // Format dates for different calendars
    this.googleStart = "20251211T091500";
    this.googleEnd = "20251211T180000";

    // Pre-calculate URLs
    this.googleCalendarUrl = this.buildGoogleCalendarUrl();
    this.outlookUrl = this.buildOutlookUrl();

    // Calendar option icons (SVG paths)
    this.icons = {
      google:
        "M19.5 3h-3V1.5h-1.5V3h-6V1.5H7.5V3h-3C3.675 3 3 3.675 3 4.5v15c0 .825.675 1.5 1.5 1.5h15c.825 0 1.5-.675 1.5-1.5v-15c0-.825-.675-1.5-1.5-1.5zm0 16.5h-15V9h15v10.5zM6 10.5h3v3H6v-3zm4.5 0h3v3h-3v-3zm4.5 0h3v3h-3v-3z",
      apple:
        "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z",
      outlook:
        "M21.5 3h-9.13c-.41 0-.8.17-1.08.46L7.2 7.54c-.28.28-.45.67-.45 1.08v9.13c0 .83.67 1.5 1.5 1.5h13.25c.83 0 1.5-.67 1.5-1.5V4.5c0-.83-.67-1.5-1.5-1.5zm0 14.25H8.25V8.62l4.08-4.12h9.17v12.75z",
      download: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z",
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
    )}&body=${encodeURIComponent(this.eventDescription)}&startdt=${
      this.startDate
    }&enddt=${this.endDate}&location=${encodeURIComponent(this.eventLocation)}`;
  }

  /**
   * Generate ICS file content
   */
  generateICS() {
    const uid = "openapi-conference-2025@openapis.org";
    const dtstamp =
      new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

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

    // Prevent body scroll
    document.body.style.overflow = "hidden";

    // Focus trap
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

    // Restore body scroll
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

    // Remove existing popup
    const existing = document.querySelector("[data-calendar-popup]");
    if (existing) {
      existing.remove();
    }

    // Create container
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

    // Add to body
    document.body.appendChild(this.container);

    // Add event listeners
    const backdrop = this.container.querySelector("[data-backdrop]");
    const closeBtn = this.container.querySelector("[data-close-btn]");
    const downloadButtons = this.container.querySelectorAll(
      "[data-download-ics], [data-download-ics-alt]"
    );

    backdrop.addEventListener("click", (e) => this.handleBackdropClick(e));
    closeBtn.addEventListener("click", () => this.close());

    // Escape key listener
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
    // Find all calendar trigger buttons
    const triggers = document.querySelectorAll("[data-calendar-trigger]");
    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        this.open();
      });

      // Keyboard support for calendar button
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
}
