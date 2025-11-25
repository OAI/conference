/**
 * CountdownTimer Component
 *
 * Displays a countdown to December 9, 2025
 * Updates every second
 */

import { asset } from "../config.js";

export class CountdownTimer {
  constructor(targetDate = "2025-12-11T09:15:00") {
    this.targetDate = new Date(targetDate);
    this.interval = null;
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  /**
   * Calculate time remaining
   */
  updateCountdown() {
    const now = new Date();
    const diff = this.targetDate.getTime() - now.getTime();

    if (diff > 0) {
      this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((diff % (1000 * 60)) / 1000);
    } else {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  }

  /**
   * Pad number with leading zero
   */
  pad(num) {
    return String(num).padStart(2, "0");
  }

  /**
   * Render the countdown HTML
   */
  render() {
    return `
      <div
        class="flex text-[11px] text-primary-gray font-medium font-mono tracking-widest uppercase px-4 pt-2 tablet:px-0 items-center justify-center tablet:justify-start w-full leading-5 tablet:text-md desktop-xxl:text-[16px]"
        data-countdown
      >
        <div data-countdown-days>${this.days}</div>&nbsp;Days
        <img
          src="${asset("/images/big_tilde.svg")}"
          alt=""
          class="inline h-2 mx-3"
        />
        <div data-countdown-time>${this.pad(this.hours)}:${this.pad(
      this.minutes
    )}:${this.pad(this.seconds)}</div>
      </div>
    `;
  }

  /**
   * Update the DOM with new countdown values
   */
  updateDOM() {
    const daysEl = document.querySelector("[data-countdown-days]");
    const timeEl = document.querySelector("[data-countdown-time]");

    if (daysEl && timeEl) {
      daysEl.textContent = this.days;
      timeEl.textContent = `${this.pad(this.hours)}:${this.pad(
        this.minutes
      )}:${this.pad(this.seconds)}`;
    }
  }

  /**
   * Start the countdown
   */
  start() {
    // Initial update
    this.updateCountdown();
    this.updateDOM();

    // Update every second
    this.interval = setInterval(() => {
      this.updateCountdown();
      this.updateDOM();
    }, 1000);
  }

  /**
   * Stop the countdown
   */
  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  /**
   * Mount component to a DOM element
   */
  mount(container) {
    if (container) {
      container.innerHTML = this.render();
      this.start();
    }
  }
}
