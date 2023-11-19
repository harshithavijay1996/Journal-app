document.addEventListener('DOMContentLoaded', function() {
  class JournalEntry {
    constructor(notes) {
      this.notes = notes;
    }
  }
  function submitJournalEntry(event) {
    event.preventDefault(); 
    const notes = document.getElementById('freeform').value;
    const newEntry = new JournalEntry(notes);
    console.log(newEntry);
  }
  const journalForm = document.getElementById('journalForm');
  journalForm.addEventListener('submit', submitJournalEntry);
});
