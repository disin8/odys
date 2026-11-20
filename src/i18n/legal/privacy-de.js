const apple = '[Datenschutzrichtlinie von Apple](https://www.apple.com/legal/privacy/)';
const mail = '[dmitry8.work@gmail.com](mailto:dmitry8.work@gmail.com)';

export const de = {
  kicker: 'Gültig ab 18. November 2026',
  title: 'Datenschutzrichtlinie für Odys Travel',
  meta: ['**Gültig ab:** 18. November 2026', '**Entwickler:** Dmitry Sinkevich', `**Kontakt:** ${mail}`],
  blocks: [
    { p: [`Diese Richtlinie beschreibt, wie Odys Travel („die App“) mit Informationen umgeht. Herausgeber ist Dmitry Sinkevich („wir“). Kontakt: ${mail}.`] },
    { h: '1. Was wir erhalten und was nicht', p: [
      'Die App baut auf deinem iPhone eine Reisekarte aus Aufnahmedatum und Aufnahmeort der Fotos. Wir betreiben kein Kontosystem und keinen Server, der Fotos, Fotometadaten, Reisen oder Notizen empfängt.',
      'Verarbeitung, die auf dem Gerät bleibt, führt die App auf diesem Gerät aus. Wir können sie nicht sehen und sind nicht Verantwortlicher für diese Informationen. Du löschst sie in der App oder indem du die App löschst.',
      `Wenn du die iCloud-Synchronisierung einschaltest oder iCloud-Backup nutzt, verarbeitet Apple die betreffenden Daten in deinem eigenen Apple-Account. Apple ist unabhängiger Verantwortlicher für iCloud, CloudKit, Fotos, Face ID und die Weitergabe von Diagnosedaten. Siehe ${apple}.`,
    ] },
    { h: '2. Keine Werbung und kein Tracking', p: ['Die App hat keine Werbung, kein Analyse-SDK von Dritten und kein Tracking über Apps hinweg. Wir verkaufen, vermieten oder teilen personenbezogene Daten nicht für Werbung oder Profilbildung.'] },
    { h: '3. Informationen, die auf dem Gerät bleiben', p: ['Wenn du den Fotozugriff erlaubst, liest die App auf dem Gerät:'], ul: [
      'Aufnahmezeitpunkt von Fotos und Videos.',
      'GPS-Koordinaten, die in diesen Fotos und Videos gespeichert sind.',
      'Abgeleitete Orte: Länder, Regionen, Städte, Aufenthalte und Routen.',
      'Reisen, Notizen, eine Wunschliste und Einstellungen, die du anlegst.',
      'Einen lokalen Fotoindex (Asset-Kennung, Datum, Koordinaten und Ort). Wenn iCloud-Fotos eine Kennung liefern kann, darf der Index auch Apples Cloud-Foto-Kennung speichern, damit der Index auf diesem Gerät repariert werden kann. Diesen Index synchronisieren wir nicht, und er ist von Backups ausgeschlossen.',
    ] },
    { p: ['Fotos werden über die Fotomediathek angezeigt. Pixel von Fotos oder Videos werden nicht auf unsere Server kopiert. Der aktuelle Standort wird nicht angefordert. Es gibt keine Standortberechtigung.'] },
    { h: '4. Berechtigungen', body: [
      { ul: [
        '**Fotos.** Dienen zum Lesen von Datum und Ort und zum Anzeigen oder Anhängen von Fotos, die du auswählst. Vollen Zugriff, eingeschränkten Zugriff oder keinen Zugriff stellst du unter **Einstellungen > Datenschutz & Sicherheit > Fotos > Odys Travel** ein. Eingeschränkter Zugriff kann die Karte unvollständig machen.',
        '**Face ID.** Wird nur verwendet, wenn du die App-Sperre einschaltest. Die Prüfung führt iOS aus. Gesicht, Fingerabdruck und Code erhält die App nicht.',
      ] },
      { p: 'Die App bittet nicht um die Mitteilungsberechtigung und sendet keine Werbung. Health, Kontakte, Mikrofon und Kamera werden nicht als Eingabe genutzt.' },
    ] },
    { h: '5. Optionale iCloud-Synchronisierung', p: [
      'Die Synchronisierung ist aus, bis du **Mit iCloud synchronisieren** in der App einschaltest und sie neu startest. Du musst bei iCloud angemeldet sein.',
      'Ist die Synchronisierung an, werden Orte, Reisen, Notizen und die Wunschliste in deiner privaten CloudKit-Datenbank (**iCloud.com.disin8.odys-travel**) gespeichert, damit deine Geräte sie teilen können. Fotos und der Fotoindex bleiben auf dem Gerät. Apple kann stille Sync-Updates an diese Geräte senden. Eine Kopie deiner iCloud-Datenbank erhalten wir nicht.',
      'Ist iCloud-Backup für das iPhone an, kann iOS die lokale Datenbank der App in dieses Backup aufnehmen. Der Fotoindex ist vom Backup ausgeschlossen. Backups liegen in deinem Apple-Account, nicht bei uns.',
    ] },
    { h: '6. Vom Gerät weg geht nur, was du sendest', ul: [
      '**Export und Teilen.** Backup (JSON), CSV, KML, GPX und Story-Karten entstehen auf deine Anforderung und gehen nur dorthin, wohin du sie sendest. Backups enthalten keine Fotodateien und keine Fotokennungen.',
      '**Widget.** Eine Zusammenfassung (Zähler, Flaggen, Titel und Daten der letzten Reise, Strecke, Tage) liegt in einer App-Gruppe auf dem Gerät für das Widget. Wir laden sie nicht hoch.',
      '**Spotlight.** Namen besuchter Länder und Städte können auf dem Gerät indexiert werden, damit die iOS-Suche sie öffnet. Diese Suchen erhalten wir nicht.',
    ] },
    { h: '7. Absturzdiagnosen', p: ['Die App hat keinen eigenen Absturzmelder. Wenn du in iOS „Mit App-Entwicklern teilen“ aktivierst (**Einstellungen > Datenschutz & Sicherheit > Analyse & Verbesserungen**), kann Apple uns Absturzdiagnosen senden, etwa Gerätemodell, OS-Version und einen Stacktrace. Wir nutzen sie nur zur Fehlerbehebung. Das Teilen kannst du in den iOS-Einstellungen ausschalten.'] },
    { h: '8. Speicherung und Löschung', p: [
      'Daten auf dem Gerät bleiben, bis du Einträge in der App löschst, **Alle Daten löschen** nutzt oder die App löschst. Alle Daten löschen entfernt besuchte Orte und den Fotoindex auf diesem iPhone. Fotos in der Mediathek werden nicht gelöscht.',
      'Eine Kopie zum Wiederherstellen haben wir nicht. iCloud-Daten werden, nachdem du die Synchronisierung eingeschaltet hast, über deinen Apple-Account und durch Ausschalten der Synchronisierung entfernt. Exportierte Dateien bleiben dort, wo du sie gespeichert hast.',
    ] },
    { h: '9. Kinder', p: ['Die App richtet sich nicht an Kinder. Sie sollte nicht von Personen unter dem im jeweiligen Land geforderten Alter genutzt werden. Wir erheben wissentlich keine personenbezogenen Daten von Kindern. Wenn du meinst, ein Kind habe uns Informationen geschickt, schreib uns. Wir löschen, was wir tatsächlich haben.'] },
    { h: '10. Deine Rechte', p: [
      'Das Reisetagebuch bleibt auf deinem Gerät und, wenn du zustimmst, in deiner privaten iCloud. Zugriff, Berichtigung, Export und Löschung erfolgen dort. Nach der DSGVO und vergleichbaren Gesetzen kannst du außerdem widersprechen, die Verarbeitung einschränken oder Beschwerde einlegen.',
      `Anfragen zu Informationen, die wir tatsächlich haben (etwa eine Support-E-Mail oder eine von Apple erhaltene Absturzdiagnose), kannst du an ${mail} senden. Absturzdiagnosen verarbeiten wir, falls sie ankommen, auf Grundlage des berechtigten Interesses, die App stabil zu halten. Das Teilen kannst du in den iOS-Einstellungen beenden.`,
      'Du kannst dich an deine lokale Datenschutzbehörde wenden.',
    ] },
    { h: '11. Kalifornien und andere US-Bundesstaaten', p: ['Wir verkaufen oder teilen personenbezogene Daten nicht im Sinne des CCPA/CPRA und nutzen sie nicht für kontextübergreifende verhaltensbezogene Werbung. Eine Serverkopie deines Tagebuchs haben wir nicht.'] },
    { h: '12. Änderungen', p: ['Ändert sich diese Richtlinie, ändert sich das Datum oben. Wesentliche Änderungen werden auf dieser Seite veröffentlicht. Die frühere Praxis beschreibt die Fassung, die damals galt.'] },
    { h: '13. Kontakt', p: ['**Dmitry Sinkevich**', `E-Mail: ${mail}`, 'Siehe auch die [Nutzungsbedingungen](/odys/terms/) und den [Support](/odys/support/).'] },
  ],
};
