let views = {};

export const incrementViews = (page) => {
  views[page] = views[page] ? views[page] + 1 : 1;
};

export const getViews = (page) => {
  return views[page] || 0;
};
