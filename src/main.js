/**
 * Main Entry Point
 *
 * Initializes the application when DOM is ready
 */

import { asset, config } from "./config.js";
import { SocialIcons } from "./components/SocialIcons.js";
import { CountdownTimer } from "./components/CountdownTimer.js";
import { CalendarPopup } from "./components/CalendarPopup.js";
import { AgendaRenderer } from "./components/AgendaRenderer.js";
import { AgendaModal } from "./components/AgendaModal.js";
import { DualHeaderSection } from "./components/DualHeaderSection.js";
import { PreviousEventsGallery } from "./components/PreviousEventsGallery.js";
import { agendaSections } from "./data/agenda.js";

/**
 * Initialize application
 */
function init() {
  // Initialize Social Icons (Header)
  const headerSocialContainer = document.getElementById("header-social-icons");
  if (headerSocialContainer) {
    const headerSocial = new SocialIcons();
    headerSocial.mount(headerSocialContainer);
  }

  // Initialize Social Icons (Footer Mobile)
  const footerSocialMobile = document.getElementById(
    "footer-social-icons-mobile",
  );
  if (footerSocialMobile) {
    const footerSocial = new SocialIcons();
    footerSocial.mount(footerSocialMobile);
  }

  // Initialize Social Icons (Footer Desktop)
  const footerSocialDesktop = document.getElementById(
    "footer-social-icons-desktop",
  );
  if (footerSocialDesktop) {
    const footerSocial = new SocialIcons();
    footerSocial.mount(footerSocialDesktop);
  }

  // Initialize Countdown Timer
  const countdownContainer = document.getElementById("countdown-timer");
  if (countdownContainer) {
    const countdown = new CountdownTimer(config.EVENT_DATE);
    countdown.mount(countdownContainer);
  }

  // Initialize Calendar Popup
  const calendarPopup = new CalendarPopup();
  calendarPopup.init();

  // Initialize Agenda Modal
  const agendaModal = new AgendaModal();

  // Initialize Agenda
  const agendaContainer = document.getElementById("agenda-container");
  if (agendaContainer) {
    const agendaRenderer = new AgendaRenderer(agendaSections);

    // Wire up click handler to open modal
    agendaRenderer.onItemClick = (item, index, allItems) => {
      agendaModal.open(item, index, allItems);
    };

    agendaRenderer.mount(agendaContainer);
  }

  // Initialize "Want to learn more?" section
  const learnMoreContainer = document.getElementById("learn-more-section");
  if (learnMoreContainer) {
    const learnMore = new DualHeaderSection({
      title: "Want to learn more?",
      subtitle: "Check out Masterclasses by API Masters on December 10th",
      imageUrl: asset("/images/api_masters.png"),
      imageAlt: "API Masters Logo",
      href: "https://apimasters.fr/our-masterclasses/entry/353/",
      backgroundColor: "white",
    });
    learnMore.mount(learnMoreContainer);
  }

  // Initialize Previous Events Gallery
  const galleryContainer = document.getElementById("previous-events-gallery");
  if (galleryContainer) {
    const gallery = new PreviousEventsGallery();
    gallery.mount(galleryContainer);
  }

  // Initialize Subscribe section
  const subscribeContainer = document.getElementById("subscribe-section");
  if (subscribeContainer) {
    const subscribe = new DualHeaderSection({
      title: "Subscribe",
      subtitle: "For OpenAPI Initiative Updates",
      iconType: "plus",
      href: "https://www.openapis.org/#footer-outer",
      backgroundColor: "white",
    });
    subscribe.mount(subscribeContainer);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

export { init };
