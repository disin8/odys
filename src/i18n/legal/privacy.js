import { ja } from './privacy-ja.js';
import { zh } from './privacy-zh.js';
import { ko } from './privacy-ko.js';
import { ru } from './privacy-ru.js';
import { de } from './privacy-de.js';
import { es } from './privacy-es.js';
import { fr } from './privacy-fr.js';

const apple = '[Apple’s Privacy Policy](https://www.apple.com/legal/privacy/)';
const mail = '[dmitry8.work@gmail.com](mailto:dmitry8.work@gmail.com)';
const terms = '[Terms of Use](/odys/terms/)';
const support = '[Support](/odys/support/)';

export const privacyDoc = {
  en: {
    kicker: 'Effective November 18, 2026',
    title: 'Privacy Policy for Odys Travel',
    meta: [
      '**Effective Date:** November 18, 2026',
      '**Developer:** Dmitry Sinkevich',
      `**Contact:** ${mail}`,
    ],
    blocks: [
      { p: [`This Privacy Policy describes how Odys Travel (“the App”) handles information. The publisher is Dmitry Sinkevich (“we”). Contact: ${mail}.`] },
      {
        h: '1. What we do and do not receive',
        p: [
          'The App builds a travel map on your iPhone from photo dates and locations. We do not operate an account system or a server that receives your photos, photo metadata, trips, or notes.',
          'Processing that stays on your device is performed by the App on that device. We cannot see it, and we are not the controller of that information. You delete it in the App or by deleting the App.',
          `If you turn on iCloud sync, or if you use iCloud Backup, Apple processes the relevant data in your own Apple account. Apple is an independent controller for iCloud, CloudKit, Photos, Face ID, and diagnostic sharing. See ${apple}.`,
        ],
      },
      { h: '2. No advertising and no tracking', p: ['The App has no advertising, no third-party analytics SDK, and no cross-app tracking. We do not sell, rent, or share personal information for advertising or profiling.'] },
      {
        h: '3. Information kept on your device',
        p: ['If you allow photo access, the App reads, on the device:'],
        ul: [
          'Capture date and time of photos and videos.',
          'GPS coordinates stored in those photos and videos.',
          'Derived places: countries, regions, cities, stays, and routes.',
          'Trips, notes, a wishlist, and settings you create.',
          'A local photo index (asset identifier, date, coordinates, and place). When iCloud Photos can provide one, the index may also store Apple’s cloud photo identifier so the index can be repaired on this device. That index is not synced by us and is excluded from backups.',
        ],
      },
      { p: ['The App displays photos through the Photos library. It does not copy photo or video pixels to our servers. It does not request your live location. There is no location permission.'] },
      {
        h: '4. Permissions',
        body: [
          { ul: [
            '**Photos.** Used to read dates and locations, and to show or attach photos you pick. You can choose full access, limited access, or none in **Settings > Privacy & Security > Photos > Odys Travel**. Limited access can make the map incomplete.',
            '**Face ID.** Used only if you turn on app lock. iOS performs the check. The App does not receive your face, fingerprint, or passcode.',
          ] },
          { p: 'The App does not ask for permission to show notifications and does not send marketing messages. It does not use Health, contacts, microphone, or camera as inputs.' },
        ],
      },
      {
        h: '5. Optional iCloud sync',
        p: [
          'Sync is off until you turn on **Sync with iCloud** in the App and restart it. You need to be signed in to iCloud.',
          'When sync is on, places, trips, notes, and your wishlist are stored in your private CloudKit database (**iCloud.com.disin8.odys-travel**) so your devices can share them. Photos and the photo index stay on the device. Apple may deliver silent sync updates to those devices. We do not get a copy of your iCloud database.',
          'If iCloud Backup is on for the iPhone, iOS may include the App’s local database in that backup. The photo index is marked excluded from backup. Backups are in your Apple account, not ours.',
        ],
      },
      {
        h: '6. What leaves the device only when you send it',
        ul: [
          '**Export and share.** Backup (JSON), CSV, KML, GPX, and story cards are created when you ask and go only where you send them. Backups do not include photo files or photo identifiers.',
          '**Widget.** A summary (counts, flags, last trip title and dates, distance, days) is stored in an App Group on the device for the widget. It is not uploaded by us.',
          '**Spotlight.** Visited country and city names can be indexed on the device so iOS search can open them. We do not receive those searches.',
        ],
      },
      { h: '7. Crash diagnostics', p: ['The App does not include its own crash reporter. If you enable Share With App Developers in iOS (**Settings > Privacy & Security > Analytics & Improvements**), Apple may send us crash diagnostics such as device model, OS version, and a stack trace. We use those only to fix defects. You can turn that sharing off in iOS Settings.'] },
      {
        h: '8. Retention and deletion',
        p: [
          'On-device data stays until you delete records in the App, use **Delete all data**, or delete the App. Delete all data erases visited places and the photo index on that iPhone. It does not delete photos from the Photos library.',
          'We have no copy to restore. iCloud data, after you have turned sync on, is removed through your Apple account and by turning sync off. Exported files stay wherever you saved them.',
        ],
      },
      { h: '9. Children', p: ['The App is not directed to children. It should not be used by anyone under the age required in their country. We do not knowingly collect personal information from children. If you believe a child has sent us information, email us and we will delete what we actually hold.'] },
      {
        h: '10. Your rights',
        p: [
          'Because the travel journal stays on your device and, if you opt in, in your private iCloud, you access, correct, export, and delete it there. Under the GDPR and similar laws you may also have the right to object, restrict, or lodge a complaint.',
          `Requests about information we actually hold (for example a support email or a crash diagnostic received from Apple) can be sent to ${mail}. If we process crash diagnostics, we do so for the legitimate interest of keeping the App stable. You can stop that sharing in iOS Settings.`,
          'You may complain to your local data protection authority.',
        ],
      },
      { h: '11. California and other US states', p: ['We do not sell or share personal information as those terms are used in the CCPA/CPRA, and we do not use personal information for cross-context behavioral advertising. We do not hold a server copy of your journal.'] },
      { h: '12. Changes', p: ['If this policy changes, the effective date above will change. Material changes will be posted on this page. The previous practice remains described by the version that was in effect when it happened.'] },
      {
        h: '13. Contact',
        p: [`**Dmitry Sinkevich**`, `Email: ${mail}`, `See also the ${terms} and ${support}.`],
      },
    ],
  },
  ja,
  zh,
  ko,
  ru,
  de,
  es,
  fr,
};
