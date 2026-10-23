import React from 'react';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'ico' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.23 9.43-9.44 9.43m8.03-17.46A11.27 11.27 0 0 0 12.05.71C5.8.71.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.6l6.02-1.58a11.33 11.33 0 0 0 5.42 1.38h.01c6.26 0 11.35-5.09 11.36-11.35 0-3.03-1.18-5.88-3.33-8.02"
    />
  </svg>
);

export const PawIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff" aria-hidden="true">
    <ellipse cx="5.5" cy="10" rx="2.2" ry="2.8" />
    <ellipse cx="9.5" cy="5.5" rx="2.2" ry="2.9" />
    <ellipse cx="14.5" cy="5.5" rx="2.2" ry="2.9" />
    <ellipse cx="18.5" cy="10" rx="2.2" ry="2.8" />
    <path d="M12 11c-3 0-6.5 4.6-6.5 7.4 0 1.7 1.3 2.6 3 2.6 1.4 0 2.3-.8 3.5-.8s2.1.8 3.5.8c1.7 0 3-.9 3-2.6C18.5 15.6 15 11 12 11z" />
  </svg>
);

export const Brand: React.FC<{ light?: boolean }> = ({ light }) => (
  <a href="#topo" className={`brand${light ? ' brand--light' : ''}`} aria-label="Início">
    <span className="brand__icon">
      <PawIcon />
    </span>
    <span className="brand__text">
      <strong>Gabrielly</strong>
      <small>Pet Sitter &amp; Dog Walker</small>
    </span>
  </a>
);
