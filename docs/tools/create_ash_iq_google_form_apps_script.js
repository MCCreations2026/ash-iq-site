/**
 * Creates the Ash IQ waitlist/contact Google Form and links it to a response Sheet.
 *
 * This mirrors the EZ Estimates launch workflow:
 * 1. Open https://script.google.com.
 * 2. Create a new Apps Script project.
 * 3. Paste this file into the editor.
 * 4. Run createAshIqWaitlistAndContactForm.
 * 5. Approve the requested Google permissions.
 * 6. Copy only the logged public responder URL and embed URL into assets/js/site-config.js.
 *
 * Never paste the edit URL or private Sheet URL into public website code.
 */

function createAshIqWaitlistAndContactForm() {
  const form = findFormByName_('Ash IQ Waitlist & Contact Form') ||
    FormApp.create('Ash IQ Waitlist & Contact Form');

  resetForm_(form);

  form.setDescription(
    'Ash IQ by Pine & Ash is a cigar discovery and journaling mobile app in development. Use this form to join the waitlist, request early testing interest, or contact Pine & Ash about business and press inquiries.'
  );
  form.setConfirmationMessage(
    'Thanks for your interest in Ash IQ by Pine & Ash. This does not create an app account. We will use your submission for waitlist, launch, or contact follow-up.'
  );
  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);
  form.setLimitOneResponsePerUser(false);
  form.setProgressBar(true);
  form.setAcceptingResponses(true);

  addTextQuestion_(form, 'Full Name', 'Your name for waitlist or contact follow-up.', true);
  addEmailQuestion_(form, 'Email Address', 'Use the email address where Pine & Ash can contact you about Ash IQ.', true);
  addTextQuestion_(form, 'Phone Number', 'Optional.', false);
  addTextQuestion_(form, 'City / State', 'Optional.', false);

  form.addMultipleChoiceItem()
    .setTitle('What best describes you?')
    .setChoiceValues([
      'Casual cigar smoker',
      'Regular cigar smoker',
      'New to cigars',
      'Cigar lounge/customer',
      'Retailer/lounge owner',
      'Media/partnership inquiry',
      'Other',
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('What are you interested in?')
    .setChoiceValues([
      'Joining the Ash IQ waitlist',
      'Testing the app early',
      'Following launch updates',
      'Business or partnership inquiry',
      'Press/media inquiry',
      'General contact',
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('What cigar features matter most to you?')
    .setChoiceValues([
      'Strength',
      'Flavor notes',
      'Wrapper',
      'Size/vitola',
      'Price',
      'Brand',
      'Country/region',
      'Pairings',
      'Personal ratings/reviews',
      'Recommendations',
    ])
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('Message')
    .setHelpText('Optional: add context for waitlist, early testing, business, press, or general contact.')
    .setRequired(false);

  form.addCheckboxItem()
    .setTitle('Consent')
    .setChoiceValues([
      'I agree to be contacted by Pine & Ash about Ash IQ updates, waitlist access, and related launch information.',
    ])
    .setRequired(true);

  const spreadsheet = findSpreadsheetByName_('Ash IQ Waitlist Responses') ||
    SpreadsheetApp.create('Ash IQ Waitlist Responses');

  form.setDestination(FormApp.DestinationType.SPREADSHEET, spreadsheet.getId());
  setupResponseReviewSheet_(spreadsheet);

  const responderUrl = form.getPublishedUrl();
  const embedUrl = makeEmbedUrl_(responderUrl);
  const editUrl = form.getEditUrl();
  const spreadsheetUrl = spreadsheet.getUrl();

  Logger.log('Published responder form URL: ' + responderUrl);
  Logger.log('Public embed URL: ' + embedUrl);
  Logger.log('Edit form URL: ' + editUrl);
  Logger.log('Response spreadsheet URL: ' + spreadsheetUrl);

  setupFormLinksSheet_(spreadsheet, responderUrl, embedUrl, editUrl, spreadsheetUrl);

  return {
    responderUrl: responderUrl,
    embedUrl: embedUrl,
    editUrl: editUrl,
    spreadsheetName: spreadsheet.getName(),
    spreadsheetUrl: spreadsheetUrl,
  };
}

function resetForm_(form) {
  form.getItems().forEach(function (item) {
    form.deleteItem(item);
  });
}

function findFormByName_(name) {
  const files = DriveApp.getFilesByName(name);
  while (files.hasNext()) {
    const file = files.next();
    if (file.getMimeType() === MimeType.GOOGLE_FORMS) {
      return FormApp.openById(file.getId());
    }
  }
  return null;
}

function findSpreadsheetByName_(name) {
  const files = DriveApp.getFilesByName(name);
  while (files.hasNext()) {
    const file = files.next();
    if (file.getMimeType() === MimeType.GOOGLE_SHEETS) {
      return SpreadsheetApp.openById(file.getId());
    }
  }
  return null;
}

function addTextQuestion_(form, title, helpText, required) {
  form.addTextItem()
    .setTitle(title)
    .setHelpText(helpText)
    .setRequired(required);
}

function addEmailQuestion_(form, title, helpText, required) {
  const validation = FormApp.createTextValidation()
    .requireTextIsEmail()
    .setHelpText('Enter a valid email address.')
    .build();

  form.addTextItem()
    .setTitle(title)
    .setHelpText(helpText)
    .setValidation(validation)
    .setRequired(required);
}

function setupResponseReviewSheet_(spreadsheet) {
  const sheet = getOrCreateSheet_(spreadsheet, 'Response Review');
  sheet.clear();

  const headers = [
    'Timestamp',
    'Full Name',
    'Email Address',
    'Phone Number',
    'City / State',
    'User Type',
    'Interest',
    'Cigar Features',
    'Message',
    'Consent',
    'Source Page',
    'Status',
    'Notes',
    'Follow-Up Owner',
    'Follow-Up Date',
  ];

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight('bold')
    .setBackground('#232826')
    .setFontColor('#fffaf2');
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);

  const statuses = [
    'New',
    'Reviewed',
    'Early Access Candidate',
    'Partnership Lead',
    'Press/Media',
    'Not a Fit',
    'Contacted',
  ];
  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(statuses, true)
    .setAllowInvalid(false)
    .build();
  sheet.getRange(2, 12, 999, 1).setDataValidation(rule);

  sheet.getRange('A2').setNote(
    'Google Forms creates its own response tab. Use this Response Review tab for internal follow-up, status, notes, owners, and follow-up dates.'
  );
}

function setupFormLinksSheet_(spreadsheet, responderUrl, embedUrl, editUrl, spreadsheetUrl) {
  const linksSheet = getOrCreateSheet_(spreadsheet, 'Form Links');
  linksSheet.clear();
  linksSheet.getRange(1, 1, 4, 2).setValues([
    ['Published responder form URL', responderUrl],
    ['Public embed URL', embedUrl],
    ['Edit form URL - private/internal only', editUrl],
    ['Response spreadsheet URL - private/internal only', spreadsheetUrl],
  ]);
  linksSheet.getRange(1, 1, 1, 2)
    .setFontWeight('bold')
    .setBackground('#232826')
    .setFontColor('#fffaf2');
  linksSheet.autoResizeColumns(1, 2);
}

function getOrCreateSheet_(spreadsheet, name) {
  return spreadsheet.getSheetByName(name) || spreadsheet.insertSheet(name);
}

function makeEmbedUrl_(responderUrl) {
  return responderUrl.indexOf('?') === -1
    ? responderUrl + '?embedded=true'
    : responderUrl + '&embedded=true';
}
