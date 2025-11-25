/**
 * SocialIcons Component
 *
 * Renders LinkedIn, YouTube, and Bluesky social media icons
 * Reusable in header and footer
 */

export class SocialIcons {
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
}
