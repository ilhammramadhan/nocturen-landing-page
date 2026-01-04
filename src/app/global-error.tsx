"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#0A0A0A",
          color: "#F5F5F5",
          fontFamily: "system-ui, sans-serif",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "400px", padding: "20px" }}>
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "32px",
            }}
          >
            <span style={{ fontSize: "48px" }}>☕</span>
            <span
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                fontFamily: "Georgia, serif",
              }}
            >
              Nocturne
            </span>
          </div>

          {/* Message */}
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "600",
              marginBottom: "16px",
              fontFamily: "Georgia, serif",
            }}
          >
            Critical Error
          </h1>
          <p
            style={{
              color: "#A0A0A0",
              marginBottom: "8px",
              lineHeight: "1.6",
            }}
          >
            We&apos;re experiencing some technical difficulties. Our team has
            been notified.
          </p>
          {error.digest && (
            <p
              style={{
                fontSize: "12px",
                color: "#666",
                marginBottom: "32px",
                fontFamily: "monospace",
              }}
            >
              Error ID: {error.digest}
            </p>
          )}

          {/* Actions */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <button
              onClick={reset}
              style={{
                padding: "12px 24px",
                backgroundColor: "#D4A574",
                color: "#0A0A0A",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Try Again
            </button>
            <a
              href="/"
              style={{
                padding: "12px 24px",
                backgroundColor: "transparent",
                color: "#F5F5F5",
                border: "1px solid #333",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              Return Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
