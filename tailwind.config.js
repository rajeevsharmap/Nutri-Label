/** Tailwind build config — theme tokens come from DESIGN.md. */
module.exports = {
  content: ['./index.html', './screens/**/*.html', './assets/js/**/*.js', '!./assets/js/generated/**'],
  darkMode: "class",
  theme: {
    "extend": {
      "colors": {
        "outline": "#717975",
        "surface-container": "#e4f1e7",
        "tertiary-container": "#1c2d00",
        "tertiary-fixed-dim": "#b4d085",
        "secondary-fixed-dim": "#7dd9a8",
        "outline-variant": "#c1c8c4",
        "inverse-on-surface": "#e7f4ea",
        "surface-tint": "#43655a",
        "on-background": "#131e18",
        "surface-variant": "#d9e6dc",
        "on-primary-container": "#73978b",
        "secondary-fixed": "#99f5c3",
        "surface-container-high": "#dfebe2",
        "inverse-surface": "#28332d",
        "error-container": "#ffdad6",
        "on-secondary-container": "#007149",
        "on-error": "#ffffff",
        "surface": "#f0fdf3",
        "on-secondary-fixed-variant": "#005234",
        "primary-container": "#092e25",
        "on-primary-fixed-variant": "#2b4d43",
        "on-tertiary-fixed": "#121f00",
        "surface-container-lowest": "#ffffff",
        "on-tertiary": "#ffffff",
        "background": "#f0fdf3",
        "on-error-container": "#93000a",
        "primary": "#001812",
        "surface-dim": "#d0ddd4",
        "surface-container-highest": "#d9e6dc",
        "on-surface-variant": "#414845",
        "secondary": "#006c46",
        "primary-fixed-dim": "#a9cec1",
        "surface-container-low": "#eaf7ed",
        "secondary-container": "#96f3c0",
        "on-tertiary-container": "#7e9853",
        "on-secondary": "#ffffff",
        "error": "#ba1a1a",
        "surface-bright": "#f0fdf3",
        "inverse-primary": "#a9cec1",
        "on-primary": "#ffffff",
        "on-tertiary-fixed-variant": "#374d11",
        "tertiary-fixed": "#d0ed9f",
        "on-surface": "#131e18",
        "on-primary-fixed": "#002019",
        "primary-fixed": "#c5ebdd",
        "tertiary": "#0c1700",
        "on-secondary-fixed": "#002112"
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      "spacing": {
        "gutter-mobile": "0.75rem",
        "space-md": "1rem",
        "space-xl": "2.5rem",
        "space-lg": "1.5rem",
        "gutter": "1.5rem",
        "margin-mobile": "1rem",
        "margin": "2.5rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem"
      },
      "fontFamily": {
        "label-sm": [
          "Inter"
        ],
        "headline-lg": [
          "Plus Jakarta Sans"
        ],
        "headline-md": [
          "Plus Jakarta Sans"
        ],
        "data-mono": [
          "Inter"
        ],
        "body-lg": [
          "Inter"
        ],
        "label-md": [
          "Inter"
        ],
        "body-sm": [
          "Inter"
        ],
        "display-lg-mobile": [
          "Plus Jakarta Sans"
        ],
        "headline-lg-mobile": [
          "Plus Jakarta Sans"
        ],
        "body-md": [
          "Inter"
        ],
        "display-lg": [
          "Plus Jakarta Sans"
        ],
        "headline-sm": [
          "Plus Jakarta Sans"
        ]
      },
      "fontSize": {
        "label-sm": [
          "11px",
          {
            "lineHeight": "14px",
            "letterSpacing": "0.06em",
            "fontWeight": "600"
          }
        ],
        "headline-lg": [
          "32px",
          {
            "lineHeight": "40px",
            "letterSpacing": "-0.02em",
            "fontWeight": "600"
          }
        ],
        "headline-md": [
          "24px",
          {
            "lineHeight": "32px",
            "letterSpacing": "-0.01em",
            "fontWeight": "600"
          }
        ],
        "data-mono": [
          "13px",
          {
            "lineHeight": "18px",
            "letterSpacing": "-0.02em",
            "fontWeight": "600"
          }
        ],
        "body-lg": [
          "16px",
          {
            "lineHeight": "26px",
            "letterSpacing": "-0.01em",
            "fontWeight": "400"
          }
        ],
        "label-md": [
          "13px",
          {
            "lineHeight": "16px",
            "letterSpacing": "0.02em",
            "fontWeight": "500"
          }
        ],
        "body-sm": [
          "12px",
          {
            "lineHeight": "18px",
            "letterSpacing": "0em",
            "fontWeight": "400"
          }
        ],
        "display-lg-mobile": [
          "36px",
          {
            "lineHeight": "44px",
            "letterSpacing": "-0.02em",
            "fontWeight": "700"
          }
        ],
        "headline-lg-mobile": [
          "26px",
          {
            "lineHeight": "34px",
            "letterSpacing": "-0.01em",
            "fontWeight": "600"
          }
        ],
        "body-md": [
          "14px",
          {
            "lineHeight": "22px",
            "letterSpacing": "0em",
            "fontWeight": "400"
          }
        ],
        "display-lg": [
          "56px",
          {
            "lineHeight": "64px",
            "letterSpacing": "-0.03em",
            "fontWeight": "700"
          }
        ],
        "headline-sm": [
          "18px",
          {
            "lineHeight": "24px",
            "letterSpacing": "0em",
            "fontWeight": "600"
          }
        ]
      }
    }
  }
};
