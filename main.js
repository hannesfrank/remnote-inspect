// const contextContainer = document.getElementById('context');
// const focusedRemContainer = document.getElementById('focused-rem');
// const documentRemContainer = document.getElementById('document-rem');
async function inspect() {
  const context = await RemNoteAPI.v0.get_context();
  const focusedRem = await RemNoteAPI.v0.get(context.remId);
  const documentRem = await RemNoteAPI.v0.get(context.documentId);
  console.log('Context', context);
  console.log('Focused Rem', focusedRem);
  console.log('Document', documentRem);

  // This does not work as the injected js does not work
  const contextDump = nodedump(context, { label: 'Context' });
  const focusedRemDump = nodedump(focusedRem, { label: 'Focused Rem' });
  const documentRemDump = nodedump(documentRem, { label: 'Document Rem' });
  // Only a single document.write works.Subsequent innerHTML insertions did not
  // work because there is a script in each dump. Alternatively use $.append or
  // prettyprint.js which does not inject a script.
  document.write(
    '<div class="dump context">',
    contextDump,
    '</div><div class="dump focused-rem">',
    focusedRemDump,
    '</div><div class="dump document-rem">',
    documentRemDump,
    '</div>'
  );
}
inspect();

// Close on Escape
// TODO: The focus is not set correctly on the plugin iframe and
//       if I focus manually RemNote is not focused after the plugin exits.
// window.focus();
document.body.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') RemNoteAPI.v0.close_popup();
  // window.blur();
});
