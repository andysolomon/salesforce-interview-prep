(() => {
  const body = document.body;
  const hasSidebar = !!document.querySelector('aside.sidebar');
  const isLibrary = !!document.querySelector('ul.modules');
  const isModuleIndex = !isLibrary && !!document.querySelector('ul.topics') && !hasSidebar;
  const isCheatsheet = /cheatsheet/i.test(document.title);

  if (isLibrary) body.classList.add('page-library');
  if (isModuleIndex) body.classList.add('page-module-index');
  if (hasSidebar) body.classList.add('page-longform');
  if (isCheatsheet) body.classList.add('page-cheatsheet');

  if (hasSidebar) {
    body.classList.add('has-progress');

    const sidebar = document.querySelector('aside.sidebar');
    const toc = sidebar?.querySelector('nav.toc');
    if (sidebar && toc) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'toc-toggle';
      button.setAttribute('aria-expanded', 'false');
      button.textContent = 'Browse sections';
      sidebar.insertBefore(button, toc);

      const syncSidebarState = () => {
        const collapsed = window.innerWidth <= 900;
        sidebar.classList.toggle('sidebar-collapsed', collapsed);
        button.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
      };

      button.addEventListener('click', () => {
        if (window.innerWidth > 900) return;
        const isCollapsed = sidebar.classList.toggle('sidebar-collapsed');
        button.setAttribute('aria-expanded', String(!isCollapsed));
      });

      syncSidebarState();
      window.addEventListener('resize', syncSidebarState);
    }

    const setProgress = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      doc.style.setProperty('--reading-progress', `${Math.max(0, Math.min(1, progress))}`);
    };

    setProgress();
    window.addEventListener('scroll', setProgress, { passive: true });
    window.addEventListener('resize', setProgress);
  }
})();
