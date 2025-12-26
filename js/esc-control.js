const modals = [];
let listener = null;

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    const lastIndex = modals.length - 1;
    if (modals[lastIndex].conditions && !modals[lastIndex].conditions()) {
      return;
    }
    modals[lastIndex].closeModal();
    modals.length -= 1;
    if (!modals.length) {
      document.removeEventListener('keydown', onDocumentKeydown);
      listener = null;
    }
  }
};

export const addEscControl = (closeModal, conditions = null) => {
  modals.push({
    closeModal,
    conditions
  });
  if (!listener) {
    listener = document.addEventListener('keydown', onDocumentKeydown);
  }
};

export const removeEscControl = () => {
  modals.length -= 1;
  if (!modals.length) {
    document.removeEventListener('keydown', onDocumentKeydown);
    listener = null;
  }
};

