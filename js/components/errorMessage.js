export function errorMessage(message) {
  if (!message) {
    message = "There was an error loading. Please refresh or try again later";
  }

  return `<div class="error-message">${message}</div>`;
}
