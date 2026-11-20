const apple = '[Politique de confidentialité d’Apple](https://www.apple.com/legal/privacy/)';
const mail = '[dmitry8.work@gmail.com](mailto:dmitry8.work@gmail.com)';

export const fr = {
  kicker: 'En vigueur le 18 novembre 2026',
  title: 'Politique de confidentialité d’Odys Travel',
  meta: ['**Date d’entrée en vigueur :** 18 novembre 2026', '**Développeur :** Dmitry Sinkevich', `**Contact :** ${mail}`],
  blocks: [
    { p: [`Cette politique décrit comment Odys Travel (« l’app ») traite les informations. L’éditeur est Dmitry Sinkevich (« nous »). Contact : ${mail}.`] },
    { h: '1. Ce que nous recevons et ce que nous ne recevons pas', p: [
      'L’app construit une carte de voyage sur votre iPhone à partir de la date et du lieu des photos. Nous n’avons pas de comptes et aucun serveur ne reçoit vos photos, métadonnées, voyages ou notes.',
      'Le traitement qui reste sur l’appareil est effectué par l’app sur cet appareil. Nous ne pouvons pas le voir et nous ne sommes pas responsables de ces informations. Vous les supprimez dans l’app ou en supprimant l’app.',
      `Si vous activez la synchronisation iCloud ou utilisez la sauvegarde iCloud, Apple traite les données concernées dans votre propre compte Apple. Apple est responsable indépendant d’iCloud, de CloudKit, de Photos, de Face ID et du partage des diagnostics. Voir la ${apple}.`,
    ] },
    { h: '2. Pas de publicité et pas de pistage', p: ['L’app n’a pas de publicité, pas de SDK d’analyse tiers et pas de pistage entre applications. Nous ne vendons, ne louons et ne partageons pas de données personnelles à des fins de publicité ou de profilage.'] },
    { h: '3. Informations qui restent sur l’appareil', p: ['Si vous autorisez l’accès aux photos, l’app lit sur l’appareil :'], ul: [
      'La date et l’heure des photos et des vidéos.',
      'Les coordonnées GPS enregistrées dans ces photos et vidéos.',
      'Les lieux déduits : pays, régions, villes, séjours et trajets.',
      'Les voyages, notes, liste d’envies et réglages que vous créez.',
      'Un index photo local (identifiant de ressource, date, coordonnées et lieu). Si Photos iCloud peut en fournir un, l’index peut aussi stocker l’identifiant photo iCloud d’Apple afin de réparer l’index sur cet appareil. Nous ne synchronisons pas cet index et il est exclu des sauvegardes.',
    ] },
    { p: ['Les photos s’affichent via la photothèque. Nous ne copions pas les pixels des photos ou des vidéos vers nos serveurs. L’app ne demande pas votre position en temps réel. Il n’y a pas d’autorisation de localisation.'] },
    { h: '4. Autorisations', body: [
      { ul: [
        '**Photos.** Sert à lire les dates et les lieux, et à afficher ou joindre les photos que vous choisissez. Vous pouvez choisir un accès complet, limité ou aucun dans **Réglages > Confidentialité et sécurité > Photos > Odys Travel**. Un accès limité peut rendre la carte incomplète.',
        '**Face ID.** Utilisé seulement si vous activez le verrouillage. La vérification est faite par iOS. L’app ne reçoit ni votre visage, ni votre empreinte, ni votre code.',
      ] },
      { p: 'L’app ne demande pas l’autorisation d’afficher des notifications et n’envoie pas de messages commerciaux. Elle n’utilise pas Santé, les contacts, le micro ou l’appareil photo comme entrée.' },
    ] },
    { h: '5. Synchronisation iCloud facultative', p: [
      'La synchronisation est désactivée tant que vous n’activez pas **Synchroniser avec iCloud** dans l’app et que vous ne la redémarrez pas. Vous devez être connecté à iCloud.',
      'Lorsqu’elle est activée, lieux, voyages, notes et liste d’envies sont enregistrés dans votre base CloudKit privée (**iCloud.com.disin8.odys-travel**) pour que vos appareils les partagent. Les photos et l’index restent sur l’appareil. Apple peut envoyer des mises à jour silencieuses à ces appareils. Nous ne recevons pas de copie de votre base iCloud.',
      'Si la sauvegarde iCloud est activée sur l’iPhone, iOS peut inclure la base locale de l’app dans cette sauvegarde. L’index photo en est exclu. Les sauvegardes sont dans votre compte Apple, pas chez nous.',
    ] },
    { h: '6. Rien ne quitte l’appareil sauf si vous l’envoyez', ul: [
      '**Export et partage.** La sauvegarde (JSON), le CSV, le KML, le GPX et les cartes sont créés à votre demande et vont seulement là où vous les envoyez. Les sauvegardes ne contiennent ni fichiers photo ni identifiants photo.',
      '**Widget.** Un résumé (compteurs, drapeaux, titre et dates du dernier voyage, distance, jours) est stocké dans un groupe d’apps sur l’appareil pour le widget. Nous ne le téléversons pas.',
      '**Spotlight.** Les noms de pays et de villes visités peuvent être indexés sur l’appareil pour que la recherche iOS les ouvre. Nous ne recevons pas ces recherches.',
    ] },
    { h: '7. Diagnostics de plantage', p: ['L’app n’a pas son propre rapporteur de plantages. Si vous activez Partager avec les développeurs dans iOS (**Réglages > Confidentialité et sécurité > Analyse et améliorations**), Apple peut nous envoyer des diagnostics tels que le modèle, la version du système et une pile d’appels. Nous ne les utilisons que pour corriger des défauts. Vous pouvez désactiver ce partage dans Réglages.'] },
    { h: '8. Conservation et suppression', p: [
      'Les données sur l’appareil restent jusqu’à ce que vous supprimiez des éléments dans l’app, utilisiez **Supprimer toutes les données** ou supprimiez l’app. Supprimer toutes les données efface les lieux visités et l’index photo sur cet iPhone. Les photos de la photothèque ne sont pas supprimées.',
      'Nous n’avons pas de copie à restaurer. Les données iCloud, après activation de la synchronisation, sont retirées via votre compte Apple et en désactivant la synchronisation. Les fichiers exportés restent là où vous les avez enregistrés.',
    ] },
    { h: '9. Enfants', p: ['L’app ne s’adresse pas aux enfants. Elle ne devrait pas être utilisée en dessous de l’âge exigé dans leur pays. Nous ne collectons pas sciemment de données personnelles d’enfants. Si vous pensez qu’un enfant nous a envoyé des informations, écrivez-nous et nous supprimerons ce que nous détenons réellement.'] },
    { h: '10. Vos droits', p: [
      'Le journal reste sur votre appareil et, si vous l’activez, dans votre iCloud privé : l’accès, la rectification, l’export et la suppression se font là. Au titre du RGPD et de lois similaires, vous pouvez aussi vous opposer, limiter le traitement ou déposer une réclamation.',
      `Les demandes concernant des informations que nous détenons réellement (par exemple un e-mail d’assistance ou un diagnostic de plantage reçu d’Apple) peuvent être envoyées à ${mail}. Si nous traitons des diagnostics, c’est pour l’intérêt légitime de garder l’app stable. Vous pouvez arrêter ce partage dans Réglages.`,
      'Vous pouvez saisir l’autorité de protection des données de votre pays.',
    ] },
    { h: '11. Californie et autres États des États-Unis', p: ['Nous ne vendons ni ne partageons de données personnelles au sens du CCPA/CPRA, et nous ne les utilisons pas pour de la publicité comportementale intercontextuelle. Nous ne conservons pas de copie serveur de votre journal.'] },
    { h: '12. Modifications', p: ['Si cette politique change, la date ci-dessus changera. Les changements importants seront publiés sur cette page. La pratique antérieure reste décrite par la version alors en vigueur.'] },
    { h: '13. Contact', p: ['**Dmitry Sinkevich**', `E-mail : ${mail}`, 'Voir aussi les [Conditions d’utilisation](/odys/terms/) et l’[Assistance](/odys/support/).'] },
  ],
};
