(() => {
  'use strict';

  const search = document.querySelector('#command-search');
  const buttons = [...document.querySelectorAll('.filter-button')];
  const cards = [...document.querySelectorAll('.command-card')];
  const sections = [...document.querySelectorAll('.command-section')];
  const status = document.querySelector('#result-status');
  const emptyState = document.querySelector('#no-results');
  const clearButton = document.querySelector('#clear-search');

  if (!search || !status || !emptyState || !clearButton) return;

  let activeFilter = 'all';

  const normalize = (value) => String(value || '')
    .toLocaleLowerCase()
    .replace(/[!|/<>[\](),.:;-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const haystacks = new Map(
    cards.map((card) => [card, normalize(card.textContent)])
  );

  function matchesSearch(card, query) {
    if (!query) return true;
    const terms = query.split(' ').filter(Boolean);
    const haystack = haystacks.get(card) || '';
    return terms.every((term) => haystack.includes(term));
  }

  function matchesFilter(card) {
    if (activeFilter === 'all') return true;
    return card.dataset.access === activeFilter;
  }

  function updateSections() {
    sections.forEach((section) => {
      const visibleCard = section.querySelector('.command-card:not(.is-filtered)');
      section.classList.toggle('is-filtered', !visibleCard);
    });
  }

  function updateResults() {
    const query = normalize(search.value);
    let visible = 0;

    cards.forEach((card) => {
      const show = matchesSearch(card, query) && matchesFilter(card);
      card.classList.toggle('is-filtered', !show);
      if (show) visible += 1;
    });

    updateSections();
    emptyState.hidden = visible !== 0;

    const label = visible === 1 ? 'command card' : 'command cards';
    const qualifier = query ? ` matching “${search.value.trim()}”` : '';
    status.textContent = `${visible} ${label}${qualifier}.`;

    const url = new URL(window.location.href);
    if (query) url.searchParams.set('q', search.value.trim());
    else url.searchParams.delete('q');
    if (activeFilter !== 'all') url.searchParams.set('access', activeFilter);
    else url.searchParams.delete('access');
    window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
  }

  function chooseFilter(filter) {
    activeFilter = ['all', 'everyone', 'mod'].includes(filter) ? filter : 'all';
    buttons.forEach((button) => {
      const selected = button.dataset.filter === activeFilter;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    updateResults();
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => chooseFilter(button.dataset.filter));
  });

  search.addEventListener('input', updateResults);

  clearButton.addEventListener('click', () => {
    search.value = '';
    chooseFilter('all');
    search.focus();
  });

  document.addEventListener('keydown', (event) => {
    if (
      event.key === '/' &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.altKey &&
      !['INPUT', 'TEXTAREA'].includes(document.activeElement && document.activeElement.tagName)
    ) {
      event.preventDefault();
      search.focus();
    }

    if (event.key === 'Escape' && document.activeElement === search && search.value) {
      search.value = '';
      updateResults();
    }
  });

  const initial = new URLSearchParams(window.location.search);
  search.value = initial.get('q') || '';
  chooseFilter(initial.get('access') || 'all');
})();
