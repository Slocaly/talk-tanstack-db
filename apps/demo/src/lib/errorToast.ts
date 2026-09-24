function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

export function showErrorToast(message: string) {
  document.querySelector('[data-error-toast]')?.remove();

  const host = document.createElement('div');
  host.setAttribute('data-error-toast', '');
  host.setAttribute('role', 'alert');
  host.className = 'error-toast-host';
  host.innerHTML = `<div class="error-toast-flash">${escapeHtml(message)}</div>`;
  document.body.appendChild(host);

  window.setTimeout(() => {
    host.remove();
  }, 4000);
}
