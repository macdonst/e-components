export default function Alert({ html, state }) {
  const { attrs } = state;
  const isDismissible = attrs.dismissible !== "false"; // string "false"
  return html`
    <style scope="global">
      /* Base styles */
      e-alert {
        display: flex;
        align-items: center;
        padding: var(--e-space-md);
        background-color: var(--e-color-gray-2);

        & + & {
          margin-top: var(--e-space-sm);
        }

        /* Icon */
        &[icon]::before {
          content: attr(icon);
          font-family: e-icons;
          font-size: var(--e-font-size-lg);
          margin-right: var(--e-space-sm);
        }

        /* Dismiss button */
        & e-button:last-of-type:has(button[type=remove]){
          margin-left: auto;
        }

        /* Types */
        &[type="info"] {
          background-color: var(--e-color-blue-1);

          &::before {
            color: var(--e-color-blue-3);
          }
        }

        &[type="success"] {
          background-color: var(--e-color-green-1);

          &::before {
            color: var(--e-color-green-3);
          }
        }

        &[type="warn"] {
          background-color: var(--e-color-orange-1);

          &::before {
            color: var(--e-color-orange-3);
          }
        }

        &[type="error"] {
          background-color: var(--e-color-red-1);

          &::before {
            color: var(--e-color-red-3);
          }
        }
      }
    </style>

    <slot></slot>

    ${isDismissible && '<e-button><button type=remove aria-label="Dismiss Alert" ></button></e-button>'}
  `;
}
