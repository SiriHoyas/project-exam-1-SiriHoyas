export function errorMessage(message) {
  if (!message) {
    message = "Unknown error. Please refresh, or try again later.";
  }

  return `<div class="error-message">${message}</div>`;
}
